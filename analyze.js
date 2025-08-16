#!/usr/bin/env node

/**
 * Bundle Analyzer Script - Server-Side Only
 * 
 * This script analyzes the Next.js bundle without importing
 * Node.js modules into the client-side code.
 * 
 * Usage: node analyze.js
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

function analyzeBundle() {
  console.log('🔍 Analyzing Next.js Bundle...\n')

  try {
    // Check if .next exists
    const nextDir = path.join(process.cwd(), '.next')
    if (!fs.existsSync(nextDir)) {
      console.log('❌ No .next directory found. Run `npm run build` first.')
      return
    }

    // Install bundle analyzer if not present
    try {
      require.resolve('@next/bundle-analyzer')
    } catch (e) {
      console.log('📦 Installing @next/bundle-analyzer...')
      execSync('npm install --save-dev @next/bundle-analyzer', { stdio: 'inherit' })
    }

    // Create temporary next config with analyzer
    const configContent = `
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
  openAnalyzer: true
})

module.exports = withBundleAnalyzer(require('./next.config.js'))
`

    fs.writeFileSync('next.config.analyzer.js', configContent)

    console.log('🚀 Running bundle analysis...')
    
    // Build with analyzer
    execSync('NEXT_CONFIG=next.config.analyzer.js npm run build', { 
      stdio: 'inherit',
      env: { ...process.env, ANALYZE: 'true' }
    })

    // Cleanup
    fs.unlinkSync('next.config.analyzer.js')

  } catch (error) {
    console.error('❌ Bundle analysis failed:', error.message)
  }
}

function quickBundleCheck() {
  console.log('📊 Quick Bundle Size Check:\n')
  
  try {
    const nextDir = path.join(process.cwd(), '.next')
    const staticDir = path.join(nextDir, 'static', 'chunks')
    
    if (fs.existsSync(staticDir)) {
      const chunks = fs.readdirSync(staticDir)
        .filter(file => file.endsWith('.js'))
        .map(file => {
          const filePath = path.join(staticDir, file)
          const stats = fs.statSync(filePath)
          return {
            name: file,
            size: stats.size,
            sizeKB: Math.round(stats.size / 1024),
            sizeMB: (stats.size / 1024 / 1024).toFixed(2)
          }
        })
        .sort((a, b) => b.size - a.size)
        .slice(0, 10)

      console.log('Top 10 Largest Chunks:')
      chunks.forEach(chunk => {
        const sizeDisplay = chunk.size > 1024 * 1024 
          ? `${chunk.sizeMB}MB` 
          : `${chunk.sizeKB}KB`
        console.log(`  📄 ${chunk.name.padEnd(40)} ${sizeDisplay}`)
      })
      
      const totalSize = chunks.reduce((acc, chunk) => acc + chunk.size, 0)
      console.log(`\n📦 Total analyzed: ${(totalSize / 1024 / 1024).toFixed(2)}MB`)
    }
  } catch (error) {
    console.error('❌ Quick check failed:', error.message)
  }
}

// Main execution
const args = process.argv.slice(2)

if (args.includes('--quick')) {
  quickBundleCheck()
} else {
  analyzeBundle()
}