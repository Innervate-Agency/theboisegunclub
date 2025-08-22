#!/usr/bin/env node

/**
 * Test script to verify FFL CSV import is working
 */

const fs = require('fs')
const path = require('path')

// Parse CSV line (handles commas in quoted fields)
function parseCSVLine(line) {
  const result = []
  let current = ''
  let inQuotes = false
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  
  result.push(current.trim())
  return result
}

// Generate slug
function generateSlug(businessName) {
  return businessName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60)
}

// Load retail FFLs
const retailPath = path.join(process.cwd(), 'docs', 'ffl_boise_retail_150.csv')
const retailData = fs.readFileSync(retailPath, 'utf-8')
const retailLines = retailData.split('\n').filter(line => line.trim())

console.log('📊 FFL CSV Import Test')
console.log('======================')
console.log(`Retail FFLs: ${retailLines.length - 1} businesses`)

// Load candidate FFLs
const candidatePath = path.join(process.cwd(), 'docs', 'ffl_candidates_top150.csv')
const candidateData = fs.readFileSync(candidatePath, 'utf-8')
const candidateLines = candidateData.split('\n').filter(line => line.trim())

console.log(`Candidate FFLs: ${candidateLines.length - 1} businesses`)
console.log(`Total: ${(retailLines.length - 1) + (candidateLines.length - 1)} businesses`)
console.log('')

// Sample first 5 from each
console.log('Sample Retail FFLs:')
console.log('-------------------')
for (let i = 1; i <= 5 && i < retailLines.length; i++) {
  const fields = parseCSVLine(retailLines[i])
  const [licenseName, businessName, street, city] = fields
  const name = businessName || licenseName
  const slug = generateSlug(name)
  console.log(`  ${i}. ${name} (${city})`)
  console.log(`     Slug: ${slug}`)
}

console.log('')
console.log('Sample Candidate FFLs:')
console.log('----------------------')
for (let i = 1; i <= 5 && i < candidateLines.length; i++) {
  const fields = parseCSVLine(candidateLines[i])
  const [licenseName, businessName, street, city] = fields
  const name = businessName || licenseName
  const slug = generateSlug(name)
  console.log(`  ${i}. ${name} (${city})`)
  console.log(`     Slug: ${slug}`)
}

// Check for duplicates
const allSlugs = new Set()
let duplicates = 0

for (let i = 1; i < retailLines.length; i++) {
  const fields = parseCSVLine(retailLines[i])
  const name = fields[1] || fields[0]
  const slug = generateSlug(name)
  if (allSlugs.has(slug)) {
    duplicates++
  }
  allSlugs.add(slug)
}

for (let i = 1; i < candidateLines.length; i++) {
  const fields = parseCSVLine(candidateLines[i])
  const name = fields[1] || fields[0]
  const slug = generateSlug(name)
  if (allSlugs.has(slug)) {
    duplicates++
  }
  allSlugs.add(slug)
}

console.log('')
console.log('Data Quality:')
console.log('-------------')
console.log(`Unique slugs: ${allSlugs.size}`)
console.log(`Duplicates found: ${duplicates}`)
console.log('')
console.log('✅ Ready to generate pages for all FFLs!')