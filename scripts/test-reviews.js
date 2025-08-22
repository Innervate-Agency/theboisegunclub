const { Pool } = require('pg')
require('dotenv').config({ path: '.env.local' })

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

async function testSerpApiIntegration() {
  console.log('🔫 Testing SerpApi Integration')
  console.log('==============================\n')
  
  const client = await pool.connect()
  
  try {
    // Test 1: Check SerpApi key
    const serpApiKey = process.env.SERPAPI_KEY
    console.log('🔑 SerpApi Configuration:')
    if (serpApiKey) {
      console.log(`✅ Key found: ${serpApiKey.substring(0, 8)}...${serpApiKey.substring(serpApiKey.length - 8)}`)
      
      // Test SerpApi connection
      const testUrl = `https://serpapi.com/search?engine=google&q=Independence+Indoor+Shooting+Idaho&api_key=${serpApiKey}&num=5`
      const response = await fetch(testUrl)
      
      if (response.ok) {
        const data = await response.json()
        console.log('✅ SerpApi connection successful')
        console.log(`   Search results found: ${data.organic_results?.length || 0}`)
        console.log(`   Credits used: ${data.search_metadata?.credits_used_today || 'Unknown'}`)
        
        if (data.organic_results && data.organic_results.length > 0) {
          const result = data.organic_results[0]
          console.log(`   First result: ${result.title}`)
          console.log(`   Rating: ${result.rating || 'Not found'}`)
        }
      } else {
        console.log(`❌ SerpApi failed: ${response.status}`)
      }
    } else {
      console.log('❌ SerpApi key not found')
    }
    
    console.log('\n📊 Database Status:')
    
    // Test 2: Check businesses
    const businessCount = await client.query('SELECT COUNT(*) FROM businesses')
    console.log(`✅ Businesses in database: ${businessCount.rows[0].count}`)
    
    // Test 3: Check reviews
    const reviewCount = await client.query('SELECT COUNT(*) FROM business_reviews')
    console.log(`✅ Reviews in database: ${reviewCount.rows[0].count}`)
    
    // Test 4: Check cache
    const cacheCount = await client.query('SELECT COUNT(*) FROM review_cache')
    console.log(`✅ Cached entries: ${cacheCount.rows[0].count}`)
    
    // Test 5: Sample business for review fetch
    const sampleBusiness = await client.query(`
      SELECT id, business_name, slug 
      FROM businesses 
      WHERE business_name ILIKE '%gun%' OR business_name ILIKE '%tactical%' OR business_name ILIKE '%firearms%'
      LIMIT 1
    `)
    
    if (sampleBusiness.rows.length > 0) {
      const business = sampleBusiness.rows[0]
      console.log(`\n🎯 Testing with business: ${business.business_name}`)
      
      // Simple Google search for this business
      const businessSearchUrl = `https://serpapi.com/search?engine=google&q=${encodeURIComponent(business.business_name + ' Idaho')}&api_key=${serpApiKey}&num=3`
      
      try {
        const businessResponse = await fetch(businessSearchUrl)
        if (businessResponse.ok) {
          const businessData = await businessResponse.json()
          console.log(`✅ Found ${businessData.organic_results?.length || 0} search results`)
          
          if (businessData.organic_results && businessData.organic_results.length > 0) {
            const firstResult = businessData.organic_results[0]
            console.log(`   Top result: ${firstResult.title}`)
            console.log(`   Link: ${firstResult.link}`)
            
            // Insert a sample review for testing
            try {
              await client.query(`
                INSERT INTO business_reviews (
                  business_id, source, external_id, username, rating, 
                  review_text, review_date, verified
                )
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                ON CONFLICT (business_id, external_id) DO NOTHING
              `, [
                business.id,
                'serpapi',
                `test_${business.id}_${Date.now()}`,
                'Test User',
                5,
                'Great service and excellent selection! Highly recommended.',
                new Date(),
                true
              ])
              console.log('✅ Added sample review to database')
            } catch (insertError) {
              console.log('ℹ️  Sample review already exists')
            }
          }
        }
      } catch (error) {
        console.log(`⚠️  Business search failed: ${error.message}`)
      }
    }
    
    console.log('\n🎉 Integration test complete!')
    
  } catch (error) {
    console.error('❌ Test failed:', error)
  } finally {
    client.release()
    await pool.end()
  }
}

testSerpApiIntegration().catch(console.error)
