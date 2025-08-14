#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const configPath = path.join(__dirname, '../next.config.ts')
const config = fs.readFileSync(configPath, 'utf8')

const isCurrentlyStrict = !config.includes('ignoreDuringBuilds: true')

let newConfig
if (isCurrentlyStrict) {
  // Make it lenient for development
  newConfig = config.replace(
    'pageExtensions: [\'js\', \'jsx\', \'mdx\', \'ts\', \'tsx\'],',
    `pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Disable strict checking for development
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },`
  )
  console.log('🔥 Strict mode disabled - development friendly!')
} else {
  // Make it strict for production
  newConfig = config.replace(
    /  \/\/ Disable strict checking for development\s*eslint: \{\s*ignoreDuringBuilds: true,\s*\},\s*typescript: \{\s*ignoreBuildErrors: true,\s*\},\s*/,
    ''
  )
  console.log('🔒 Strict mode enabled - production ready!')
}

fs.writeFileSync(configPath, newConfig)
console.log('Next.js config updated successfully!')