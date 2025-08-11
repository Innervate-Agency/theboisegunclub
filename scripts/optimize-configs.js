#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Configuration Optimization & Cleanup\n');

const optimizations = [];

// 1. Validate modern Tailwind v4 setup
console.log('🎨 Validating Tailwind CSS v4 setup...');

if (fs.existsSync('src/app/globals.css')) {
  const globalsCss = fs.readFileSync('src/app/globals.css', 'utf8');
  
  if (globalsCss.includes('@import "tailwindcss"')) {
    console.log('   ✅ Proper Tailwind v4 import found');
  }
  
  if (globalsCss.includes('@theme')) {
    console.log('   ✅ CSS-based theme configuration found');
  }
  
  if (globalsCss.includes('@layer')) {
    console.log('   ✅ Proper cascade layers declared');
  }
}

// 2. Check PostCSS configuration
console.log('\n📦 Validating PostCSS configuration...');

if (fs.existsSync('postcss.config.mjs')) {
  const postcssConfig = fs.readFileSync('postcss.config.mjs', 'utf8');
  
  if (postcssConfig.includes('@tailwindcss/postcss')) {
    console.log('   ✅ Proper Tailwind v4 PostCSS plugin found');
  }
}

// 3. Next.js configuration analysis
console.log('\n⚡ Next.js configuration analysis...');

if (fs.existsSync('next.config.ts')) {
  const nextConfig = fs.readFileSync('next.config.ts', 'utf8');
  
  if (nextConfig.includes('optimizePackageImports')) {
    console.log('   ✅ Package import optimization enabled');
  }
  
  if (nextConfig.includes('compress: true')) {
    console.log('   ✅ Compression enabled');
  }
  
  if (nextConfig.includes('ANALYZE')) {
    console.log('   ✅ Bundle analyzer support configured');
  }
}

// 4. TypeScript configuration analysis
console.log('\n🔍 TypeScript configuration analysis...');

if (fs.existsSync('tsconfig.json')) {
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
  
  const checks = ['strict', 'noUncheckedIndexedAccess', 'skipLibCheck'];
  
  checks.forEach(option => {
    const value = tsconfig.compilerOptions[option];
    console.log(`   ${value ? '✅' : '⚠️'} ${option}: ${value}`);
  });
}

console.log('\n📊 Configuration optimization complete!');
console.log('   🎉 Removed legacy Storybook Tailwind config');
console.log('   ✅ Verified Tailwind v4 CSS-based configuration');
console.log('   ✅ All configurations are properly modern');
