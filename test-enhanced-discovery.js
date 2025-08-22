const { EnhancedBusinessDiscovery } = require('./enhanced-business-discovery.js');

// Simple test with hard-coded businesses that need websites
const testBusinesses = [
    {
        businessName: "Al's Sporting Goods",
        city: "Caldwell", 
        state: "ID"
    },
    {
        businessName: "Rifle Guru",
        city: "Nampa",
        state: "ID"
    },
    {
        businessName: "Homestead Firearms",
        city: "Meridian",
        state: "ID"
    }
];

async function runTest() {
    if (!process.env.SERPER_API_KEY) {
        console.error('❌ SERPER_API_KEY environment variable not set');
        process.exit(1);
    }

    console.log('🧪 Testing Enhanced Idaho Firearms Business Discovery System\n');
    
    const discovery = new EnhancedBusinessDiscovery();
    
    for (const business of testBusinesses) {
        console.log(`\n🎯 Testing: ${business.businessName} (${business.city}, ${business.state})`);
        const result = await discovery.discoverBusiness(business);
        
        if (result) {
            console.log('✅ SUCCESS - Found and analyzed website');
        } else {
            console.log('❌ FAILED - No suitable website found');
        }
    }
    
    console.log(`\n📊 TEST RESULTS`);
    console.log(`   Total tested: ${testBusinesses.length}`);
    console.log(`   Successful discoveries: ${discovery.results.length}`);
    console.log(`   Success rate: ${((discovery.results.length / testBusinesses.length) * 100).toFixed(1)}%`);
    
    if (discovery.results.length > 0) {
        console.log('\n🎉 Enhanced features working:');
        discovery.results.forEach(result => {
            console.log(`\n  ${result.businessName}:`);
            console.log(`    Website: ${result.website}`);
            console.log(`    Services: ${result.firearmsInfo.services.join(', ') || 'None detected'}`);
            console.log(`    Specialties: ${result.firearmsInfo.specialties.join(', ') || 'None detected'}`);
            console.log(`    Community Score: ${result.communityAlignment.score}`);
            console.log(`    Idaho-specific validation: ${result.communityAlignment.approved ? '✅ Passed' : '❌ Failed'}`);
        });
    }
}

runTest().catch(console.error);
