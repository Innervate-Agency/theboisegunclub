// scripts/generate-ammo-list.js

const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
// Adjust these paths if your project structure is different.
const storiesGlobPattern = 'src/**/*.stories.tsx'; // The pattern from your .storybook/main.ts
const rootDir = path.resolve(__dirname, '..'); // Assumes this script is in a 'scripts' folder at the project root.
const outputFile = path.resolve(__dirname, '..', 'STORYBOOK_MANIFEST.md');

// --- UTILITY FUNCTIONS ---

/**
 * A simple glob function to find files matching a pattern.
 * @param {string} pattern - The glob pattern to match files
 * @param {string} cwd - The current working directory to search from.
 * @returns {string[]} - An array of full file paths.
 */
function globSync(pattern, cwd) {
    const parts = pattern.replace('../', '').split('/**/');
    const startDir = path.resolve(cwd, parts[0]);
    const fileSuffix = parts[1].replace('*.', '.');

    let results = [];

    function findFiles(currentDir) {
        const files = fs.readdirSync(currentDir);
        for (const file of files) {
            const filePath = path.join(currentDir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                findFiles(filePath);
            } else if (filePath.endsWith(fileSuffix)) {
                results.push(filePath);
            }
        }
    }

    try {
        findFiles(startDir);
    } catch (error) {
        console.error(`Error finding files in ${startDir}. Does the directory exist?`);
        return [];
    }

    return results;
}

/**
 * Parses a story file to extract the component title and story names.
 * @param {string} filePath - The full path to the story file.
 * @returns {{title: string, stories: string[]}} - The parsed component title and its stories.
 */
function parseStoryFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Extract the main component title from `title: '...'`
        const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
        const componentTitle = titleMatch ? titleMatch[1] : path.basename(filePath);

        // Extract individual story names from `export const StoryName: Story = ...`
        const storyMatches = [...content.matchAll(/export\s+const\s+([A-Z][a-zA-Z0-9_]*)\s*:\s*Story\s*=/g)];
        const stories = storyMatches.map(match => match[1]);

        return { title: componentTitle, stories };
    } catch (error) {
        console.error(`Error parsing file: ${filePath}`, error);
        return null;
    }
}


// --- MAIN EXECUTION ---

function generateManifest() {
    console.log('🚀 Firing up the manifest generator...');
    console.log(`Searching for stories matching: ${storiesGlobPattern}`);

    const storyFiles = globSync(storiesGlobPattern, rootDir);

    if (storyFiles.length === 0) {
        console.warn('⚠️ No story files found. Check your glob pattern and directory structure.');
        return;
    }

    console.log(`✅ Found ${storyFiles.length} story files. Parsing components...`);

    const components = {};

    for (const file of storyFiles) {
        const result = parseStoryFile(file);
        if (result && result.stories.length > 0) {
            const parts = result.title.split('/');
            const category = parts[0];
            const componentName = parts.slice(1).join('/');
            if (!components[category]) {
                components[category] = [];
            }
            components[category].push({
                name: componentName || category,
                stories: result.stories,
            });
        }
    }

    // --- GENERATE MARKDOWN OUTPUT ---
    let markdownOutput = `# 🔫 Storybook Component Arsenal\n\n`;
    markdownOutput += `*Generated on: ${new Date().toLocaleString()}*\n\n`;
    markdownOutput += `A complete manifest of all reusable components available for page assembly.\n\n---\n\n`;

    const sortedCategories = Object.keys(components).sort();

    for (const category of sortedCategories) {
        markdownOutput += `## ${category}\n\n`;
        const sortedComponents = components[category].sort((a, b) => a.name.localeCompare(b.name));

        for (const component of sortedComponents) {
            markdownOutput += `### ${component.name}\n`;
            markdownOutput += `*Stories (Variants):*\n`;
            for (const story of component.stories) {
                markdownOutput += `- \`${story}\`\n`;
            }
            markdownOutput += `\n`;
        }
    }

    fs.writeFileSync(outputFile, markdownOutput);

    console.log(`\n🔥 Success! Your ammo list is ready.`);
    console.log(`Manifest file created at: ${outputFile}`);
}

generateManifest();
