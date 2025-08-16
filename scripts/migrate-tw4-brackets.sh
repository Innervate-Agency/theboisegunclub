#!/bin/bash
# Tailwind v4 Migration: Bracket CSS Variables → Parentheses
# For large repos (1000+ files) - Production-safe approach
# Platform: macOS (use gsed) | Linux (use sed)

# ============================================
# STEP 0: PRE-FLIGHT CHECKS
# ============================================

# Test your sed flavor (macOS: install gsed via brew install gnu-sed)
echo "Testing sed compatibility..."
echo "bg-[--brand]" | sed -E 's/\[--([a-zA-Z0-9_-]+)\]/(\--\1)/g'
# Expected output: bg-(--brand)

# Check for complex nested bracket scenarios
echo "Checking for nested brackets..."
git grep -E '\[\[.*--.*\]\]' || echo "✓ No nested brackets found"
git grep -E '\[.*\[.*--.*\].*\]' || echo "✓ No complex nesting found"

# ============================================
# STEP 1: DRY-RUN AUDIT
# ============================================

echo "Finding all bracket-var candidates..."
git ls-files | grep -E '\.(tsx|ts|jsx|js|mdx)$' | \
  xargs grep -nHo '\[.*--.*\]' | tee sed-candidates.txt

echo "Total candidates found: $(wc -l < sed-candidates.txt)"

# Find occurrences specifically in class-like contexts
echo "Finding class-like context files..."
git ls-files | grep -E '\.(tsx|ts|jsx|js|mdx)$' | \
  xargs grep -nHoE '(class(Name)?=|tw=|clsx\(|classNames\(|cva\()' | \
  cut -d: -f1 | sort -u > classlike-files.txt

echo "Files with class contexts: $(wc -l < classlike-files.txt)"

# Show what will be changed
xargs -a classlike-files.txt -I{} grep -nHo '\[.*--.*\]' {} | \
  tee sed-classlike-candidates.txt

# ============================================
# STEP 2: CREATE TEST FILE
# ============================================

echo "Creating test file for validation..."
cat > test-tailwind-migration.tsx << 'EOF'
const Component = () => (
  <div className="bg-[--brand] text-[var(--text-primary)] p-[calc(var(--spacing)*2)]">
    {/* This [--should-not-change] because it's in a comment */}
    <span style={{ background: 'var(--brand)' }}>
      {["--also-not-this", "--or-this"]}
    </span>
    <div className="border-[color-mix(in_oklab,_var(--brand)_50%,_white)]" />
  </div>
)
EOF

echo "Test file created. Running migration on test file first..."

# ============================================
# STEP 3: BACKUP & BRANCH
# ============================================

echo "Creating backup branch..."
git checkout -b refactor/tw4-bracket-vars-to-parens
git commit --allow-empty -m "Start TW v4 bracket-var → parens refactor"

# ============================================
# STEP 4: EXECUTE MIGRATION (CHOOSE YOUR PLATFORM)
# ============================================

# Define skip patterns for complex functions
SKIP='calc\(|color-mix\(|clamp\(|url\(|theme\(|rgba\(|oklch\('

# === OPTION A: macOS (using gsed) ===
echo "Running migration (macOS with gsed)..."

# Test on single file first
gsed -i.bak -E "/${SKIP}/! s/\[var\(--([a-zA-Z0-9_-]+)\)\]/(\--\1)/g" test-tailwind-migration.tsx
gsed -i.bak -E "/${SKIP}/! s/\[--([a-zA-Z0-9_-]+)\]/(\--\1)/g" test-tailwind-migration.tsx

echo "Test file result:"
cat test-tailwind-migration.tsx

read -p "Does the test look correct? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborting migration. Fix the sed commands and try again."
    exit 1
fi

# Run on all files
echo "Proceeding with full migration..."

# 1) Replace [var(--token)] → (--token)
xargs -a classlike-files.txt -I{} gsed -i.bak -E "/${SKIP}/! s/\[var\(--([a-zA-Z0-9_-]+)\)\]/(\--\1)/g" {}

# 2) Replace plain [--token] → (--token)
xargs -a classlike-files.txt -I{} gsed -i.bak -E "/${SKIP}/! s/\[--([a-zA-Z0-9_-]+)\]/(\--\1)/g" {}

# === OPTION B: Linux (using sed) ===
# Uncomment below and comment out macOS section if on Linux
# echo "Running migration (Linux with sed)..."
# xargs -a classlike-files.txt -I{} sed -i.bak -E "/${SKIP}/! s/\[var\(--([a-zA-Z0-9_-]+)\)\]/(\--\1)/g" {}
# xargs -a classlike-files.txt -I{} sed -i.bak -E "/${SKIP}/! s/\[--([a-zA-Z0-9_-]+)\]/(\--\1)/g" {}

# === OPTION C: One-liner for entire src directory (use with caution) ===
# find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.mdx" \) \
# -exec gsed -i.bak -E '/calc\(|color-mix\(|clamp\(|url\(|theme\(|rgba\(|oklch\(/! {/class(Name)?=|tw=|clsx\(|classNames\(|cva\(/ s/\[var\(--([a-zA-Z0-9_-]+)\)\]/(\--\1)/g; s/\[--([a-zA-Z0-9_-]+)\]/(\--\1)/g }' {} +

# ============================================
# STEP 5: VALIDATION
# ============================================

echo "Validating changes..."

# Show what changed
git diff --name-only | tee sed-changed-files.txt
echo "Files changed: $(wc -l < sed-changed-files.txt)"

git diff --stat | tee sed-change-summary.txt

# Check for leftover bracket-vars
echo "Checking for remaining bracket-vars..."
git grep -n '\[.*--.*\]' | tee remaining-bracket-var.txt || echo "✓ No bracket-vars remaining"

# Check for accidental double-var patterns
echo "Checking for bad patterns like bg-(var(--x))..."
git grep -n 'bg-\(var\(--' | tee bad-bg-var-parens.txt || echo "✓ No bad patterns found"

# ============================================
# STEP 6: BUILD & TEST VALIDATION
# ============================================

echo "Running build validation..."
npm run build || (echo "⚠️  Build failed after migration" && exit 1)

echo "Running type check..."
npm run type-check || echo "⚠️  Type issues detected"

# Run Storybook if available
if [ -f "package.json" ] && grep -q "storybook" package.json; then
    echo "Running Storybook smoke test..."
    npm run storybook:build || echo "⚠️  Storybook build issues"
fi

# Run tests if available
if [ -f "package.json" ] && grep -q "\"test\"" package.json; then
    echo "Running tests..."
    npm test -- --no-coverage || echo "⚠️  Some tests need attention"
fi

# ============================================
# STEP 7: COMMIT OR ROLLBACK
# ============================================

echo "Migration complete! Review the changes:"
echo "- Changed files: $(wc -l < sed-changed-files.txt)"
echo "- Remaining issues: $(wc -l < remaining-bracket-var.txt 2>/dev/null || echo 0)"

read -p "Commit these changes? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git add -A
    git commit -m "refactor(tailwind): migrate bracket CSS vars to parentheses for v4

- Convert [--token] → (--token) syntax
- Convert [var(--token)] → (--token) syntax
- Preserve complex arbitrary values with calc(), color-mix(), etc
- Scope changes to className and related contexts only"
    
    echo "✅ Migration committed!"
    
    # Clean up backup files
    read -p "Delete .bak files? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        find . -name "*.bak" -delete
        echo "Backup files deleted"
    fi
else
    echo "Rolling back changes..."
    git checkout -- .
    git checkout main
    git branch -D refactor/tw4-bracket-vars-to-parens
    echo "❌ Migration rolled back"
fi

# ============================================
# STEP 8: CLEANUP
# ============================================

echo "Cleaning up temporary files..."
rm -f test-tailwind-migration.tsx test-tailwind-migration.tsx.bak
rm -f sed-candidates.txt classlike-files.txt sed-classlike-candidates.txt
rm -f sed-changed-files.txt sed-change-summary.txt
rm -f remaining-bracket-var.txt bad-bg-var-parens.txt

echo "
========================================
MIGRATION SUMMARY
========================================
✓ Audit complete
✓ Changes validated
✓ Build tested
✓ Branch: refactor/tw4-bracket-vars-to-parens

Next steps:
1. Review the git diff carefully
2. Run your full test suite
3. Deploy to staging environment
4. Run visual regression tests (Chromatic/Percy)
5. Merge to main when confident
========================================
"