#!/usr/bin/env node

/**
 * Enhanced Business Discovery System for The Boise Gun Club
 * Tailored for Idaho firearms community with sophisticated search strategies
 * and industry-specific content extraction
 */

const fs = require('fs');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const CONFIG = {
    SERPER_API_KEY: process.env.SERPER_API_KEY,
    BATCH_SIZE: 3,
    MAX_RETRIES: 3,
    REQUEST_DELAY: 2000,
    CONSENT_THRESHOLD: 2,
    VERBOSE: true
};

// Idaho-specific context and terminology for enhanced search accuracy
const IDAHO_CONTEXT = {
    counties: ['Ada', 'Canyon', 'Gem', 'Owyhee', 'Payette', 'Valley', 'Boise', 'Elmore', 
              'Bonneville', 'Madison', 'Teton', 'Fremont', 'Jefferson', 'Clark', 'Lemhi', 
              'Custer', 'Blaine', 'Cassia', 'Minidoka', 'Twin Falls', 'Jerome', 'Gooding', 
              'Lincoln', 'Kootenai', 'Bonner', 'Boundary', 'Benewah', 'Shoshone', 'Latah', 
              'Clearwater', 'Nez Perce', 'Lewis', 'Idaho'],
    
    cities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene',
             'Twin Falls', 'Lewiston', 'Post Falls', 'Rexburg', 'Moscow', 'Kuna', 'Hayden',
             'Ammon', 'Chubbuck', 'Eagle', 'Mountain Home', 'Jerome', 'Burley', 'Blackfoot'],
    
    businessTypes: {
        retail: ['gun store', 'firearms dealer', 'sporting goods', 'outdoor gear', 'hunting supplies'],
        ranges: ['shooting range', 'gun range', 'indoor range', 'outdoor range', 'tactical training'],
        services: ['gunsmith', 'gun repair', 'cerakote', 'custom work', 'threading', 'sight installation'],
        training: ['firearms training', 'concealed carry', 'hunter safety', 'tactical training', 'NRA instructor'],
        clubs: ['gun club', 'shooting club', 'rod and gun', 'sportsmen\'s association', 'rifle club'],
        events: ['gun show', 'competition', 'IDPA', 'USPSA', 'trap shooting', '3-gun', 'steel challenge']
    }
};

// Enhanced search query generator with Idaho context
class IdahoFirearmsSearchEngine {
    constructor() {
        this.searchVariations = {
            primary: (business) => `"${business.businessName}" ${business.city} Idaho`,
            withType: (business) => `"${business.businessName}" ${this.inferBusinessType(business)} ${business.city} Idaho`,
            withServices: (business) => `"${business.businessName}" firearms guns ${business.city} Idaho`,
            localContext: (business) => `"${business.businessName}" ${this.getRegionalContext(business.city)} ${business.city}`,
            broadSearch: (business) => `${business.businessName} gun firearms ${business.city} Idaho`
        };
    }

    inferBusinessType(business) {
        const name = business.businessName.toLowerCase();
        
        if (name.includes('range') || name.includes('shooting')) return 'shooting range';
        if (name.includes('gun') && (name.includes('store') || name.includes('shop'))) return 'gun store';
        if (name.includes('sporting') || name.includes('outdoor')) return 'sporting goods';
        if (name.includes('smith') || name.includes('custom')) return 'gunsmith';
        if (name.includes('club') || name.includes('rod')) return 'gun club';
        if (name.includes('tactical') || name.includes('training')) return 'tactical training';
        if (name.includes('armory') || name.includes('arsenal')) return 'firearms dealer';
        
        return 'firearms';
    }

    getRegionalContext(city) {
        const cityLower = city.toLowerCase();
        
        if (['boise', 'meridian', 'nampa', 'caldwell', 'kuna', 'eagle'].includes(cityLower)) {
            return 'Treasure Valley';
        }
        if (['twin falls', 'jerome', 'burley', 'rupert'].includes(cityLower)) {
            return 'Magic Valley';
        }
        if (['coeur d\'alene', 'post falls', 'hayden', 'sandpoint'].includes(cityLower)) {
            return 'Panhandle';
        }
        if (['idaho falls', 'pocatello', 'rexburg', 'blackfoot'].includes(cityLower)) {
            return 'Eastern Idaho';
        }
        
        return 'Idaho';
    }

    generateSearchQueries(business) {
        return Object.values(this.searchVariations).map(generator => generator(business));
    }
}

// Enhanced content extractor for firearms businesses
class FirearmsContentExtractor {
    constructor() {
        this.servicePatterns = {
            ffl: /FFL|federal firearms license|firearms dealer|gun dealer/i,
            gunsmith: /gunsmith|gun repair|custom work|cerakote|threading|barrel work/i,
            training: /training|classes|instruction|concealed carry|hunter safety|NRA certified/i,
            range: /range|shooting|indoor|outdoor|lanes|targets/i,
            retail: /sales|firearms|guns|ammunition|ammo|accessories|optics/i,
            transfers: /transfer|background check|4473|NICS/i
        };
        
        this.specialtyPatterns = {
            tactical: /tactical|AR-15|AR15|AK-47|precision|long range|sniper/i,
            hunting: /hunting|deer|elk|waterfowl|upland|big game|archery/i,
            competition: /competition|IDPA|USPSA|3-gun|steel challenge|precision rifle/i,
            collecting: /collecting|antique|vintage|military surplus|C&R/i,
            defense: /self defense|home defense|personal protection|concealed carry/i
        };
    }

    extractFirearmsInfo(content) {
        const info = {
            services: [],
            specialties: [],
            hours: null,
            phone: null,
            email: null,
            ffl: false,
            training: false,
            range: false
        };

        // Extract services
        for (const [service, pattern] of Object.entries(this.servicePatterns)) {
            if (pattern.test(content)) {
                info.services.push(service);
                if (service === 'ffl') info.ffl = true;
                if (service === 'training') info.training = true;
                if (service === 'range') info.range = true;
            }
        }

        // Extract specialties
        for (const [specialty, pattern] of Object.entries(this.specialtyPatterns)) {
            if (pattern.test(content)) {
                info.specialties.push(specialty);
            }
        }

        // Enhanced contact extraction
        info.phone = this.extractPhone(content);
        info.email = this.extractEmail(content);
        info.hours = this.extractHours(content);

        return info;
    }

    extractPhone(content) {
        const phonePatterns = [
            /\b(\d{3}[-.]?\d{3}[-.]?\d{4})\b/,
            /\b(\(\d{3}\)\s*\d{3}[-.]?\d{4})\b/,
            /\bphone[:\s]*(\(?[\d\s\-\.\(\)]{10,})/i,
            /\bcall[:\s]*(\(?[\d\s\-\.\(\)]{10,})/i
        ];
        
        for (const pattern of phonePatterns) {
            const match = content.match(pattern);
            if (match && match[1]) {
                return match[1].replace(/[^\d]/g, '').replace(/^1/, '');
            }
        }
        return null;
    }

    extractEmail(content) {
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        const match = content.match(emailPattern);
        return match ? match[0] : null;
    }

    extractHours(content) {
        const hourPatterns = [
            /hours?[:\s]*([^<\n]{20,80})/i,
            /open[:\s]*([^<\n]{10,50})/i,
            /(mon|tue|wed|thu|fri|sat|sun)[^<\n]{5,50}/gi
        ];
        
        for (const pattern of hourPatterns) {
            const matches = content.match(pattern);
            if (matches && matches.length > 0) {
                return matches.join('; ').substring(0, 200);
            }
        }
        return null;
    }
}

// Enhanced consent and community alignment validator
class IdahoCommunityValidator {
    constructor() {
        this.positiveIndicators = {
            community: /community|local|family|tradition|heritage|generations/i,
            education: /education|safety|training|responsible|instruction/i,
            service: /service|professional|quality|experience|trusted/i,
            values: /constitutional|rights|freedom|liberty|patriot/i,
            contact: /contact|visit|call|welcome|questions|consultation/i
        };
        
        this.negativeIndicators = {
            corporate: /corporate|franchise|chain|national|syndicate/i,
            controversy: /controversy|political|activist|extreme|militant/i,
            sketchy: /cash only|no questions|off books|unlicensed/i
        };
    }

    assessCommunityAlignment(content, business) {
        let score = 0;
        const reasons = [];

        // Check positive indicators
        for (const [category, pattern] of Object.entries(this.positiveIndicators)) {
            if (pattern.test(content)) {
                score += 1;
                reasons.push(`✓ ${category} focus`);
            }
        }

        // Check negative indicators
        for (const [category, pattern] of Object.entries(this.negativeIndicators)) {
            if (pattern.test(content)) {
                score -= 2;
                reasons.push(`⚠ ${category} concerns`);
            }
        }

        // Bonus for local Idaho connections
        if (content.match(/idaho|treasure valley|gem state|boise|local/i)) {
            score += 1;
            reasons.push('✓ Idaho connection');
        }

        return { score, reasons, approved: score >= CONFIG.CONSENT_THRESHOLD };
    }
}

// Enhanced HTTP client
class EnhancedHttpClient {
    static makeRequest(url, options = {}, data = null) {
        return new Promise((resolve, reject) => {
            const urlObj = new URL(url);
            const client = urlObj.protocol === 'https:' ? https : http;
            
            const reqOptions = {
                hostname: urlObj.hostname,
                port: urlObj.port,
                path: urlObj.pathname + urlObj.search,
                method: options.method || 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    ...options.headers
                },
                timeout: 30000
            };

            const req = client.request(reqOptions, (res) => {
                // Handle redirects
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    const redirectUrl = new URL(res.headers.location, url).href;
                    return EnhancedHttpClient.makeRequest(redirectUrl, options, data)
                        .then(resolve)
                        .catch(reject);
                }

                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => resolve({ statusCode: res.statusCode, body, headers: res.headers }));
            });

            req.on('error', reject);
            req.on('timeout', () => reject(new Error('Request timeout')));
            
            if (data) req.write(data);
            req.end();
        });
    }
}

// Main discovery engine
class EnhancedBusinessDiscovery {
    constructor() {
        this.searchEngine = new IdahoFirearmsSearchEngine();
        this.contentExtractor = new FirearmsContentExtractor();
        this.communityValidator = new IdahoCommunityValidator();
        this.processed = new Set();
        this.results = [];
    }

    async discoverBusiness(business) {
        if (this.processed.has(business.businessName)) {
            if (CONFIG.VERBOSE) console.log(`Skipping already processed: ${business.businessName}`);
            return null;
        }

        this.processed.add(business.businessName);
        
        try {
            console.log(`\n🎯 Discovering: ${business.businessName} (${business.city}, ${business.state})`);
            
            const queries = this.searchEngine.generateSearchQueries(business);
            let bestResult = null;
            
            for (const query of queries) {
                console.log(`   Searching: "${query}"`);
                
                const searchResult = await this.performSerperSearch(query);
                if (searchResult && searchResult.organic && searchResult.organic.length > 0) {
                    const websites = this.extractWebsitesFromResults(searchResult, business);
                    
                    for (const website of websites) {
                        const analysis = await this.analyzeWebsite(website, business);
                        if (analysis && analysis.communityAlignment.approved) {
                            bestResult = { website, analysis };
                            break;
                        }
                    }
                    
                    if (bestResult) break;
                }
                
                await this.delay(CONFIG.REQUEST_DELAY);
            }
            
            if (bestResult) {
                const result = {
                    businessName: business.businessName,
                    city: business.city,
                    state: business.state,
                    website: bestResult.website,
                    ...bestResult.analysis
                };
                
                this.results.push(result);
                this.logDiscoveryResult(result);
                return result;
            }
            
            console.log(`   ❌ No suitable website found for ${business.businessName}`);
            return null;
            
        } catch (error) {
            console.error(`Error discovering ${business.businessName}:`, error.message);
            return null;
        }
    }

    extractWebsitesFromResults(searchResult, business) {
        const websites = [];
        const businessName = business.businessName.toLowerCase();
        
        for (const result of searchResult.organic || []) {
            if (this.isRelevantWebsite(result.link, result.title, businessName)) {
                websites.push(result.link);
            }
        }
        
        return websites.slice(0, 3); // Top 3 most relevant
    }

    isRelevantWebsite(url, title, businessName) {
        const urlLower = url.toLowerCase();
        const titleLower = (title || '').toLowerCase();
        
        // Skip directories and social media
        const skipDomains = ['facebook.com', 'yelp.com', 'yellowpages.com', 'google.com', 
                             'mapquest.com', 'superpages.com', 'whitepages.com'];
        
        if (skipDomains.some(domain => urlLower.includes(domain))) {
            return false;
        }
        
        // Prefer exact business name matches
        const nameWords = businessName.split(' ').filter(w => w.length > 2);
        const matchCount = nameWords.filter(word => 
            urlLower.includes(word) || titleLower.includes(word)
        ).length;
        
        return matchCount >= Math.max(1, Math.floor(nameWords.length / 2));
    }

    async analyzeWebsite(website, business) {
        try {
            console.log(`   📊 Analyzing: ${website}`);
            
            const response = await EnhancedHttpClient.makeRequest(website);
            if (response.statusCode !== 200) {
                return null;
            }
            
            const firearmsInfo = this.contentExtractor.extractFirearmsInfo(response.body);
            const communityAlignment = this.communityValidator.assessCommunityAlignment(response.body, business);
            
            return {
                firearmsInfo,
                communityAlignment,
                contentLength: response.body.length
            };
            
        } catch (error) {
            console.log(`   ⚠️  Failed to analyze ${website}: ${error.message}`);
            return null;
        }
    }

    async performSerperSearch(query) {
        const data = JSON.stringify({
            q: query,
            location: "Idaho, United States",
            hl: "en",
            gl: "us"
        });

        try {
            const response = await EnhancedHttpClient.makeRequest('https://google.serper.dev/search', {
                method: 'POST',
                headers: {
                    'X-API-KEY': CONFIG.SERPER_API_KEY,
                    'Content-Type': 'application/json'
                }
            }, data);

            return JSON.parse(response.body);
        } catch (error) {
            console.error('Serper API error:', error.message);
            return null;
        }
    }

    logDiscoveryResult(result) {
        console.log(`   ✅ DISCOVERED: ${result.website}`);
        console.log(`      Services: ${result.firearmsInfo.services.join(', ') || 'None detected'}`);
        console.log(`      Specialties: ${result.firearmsInfo.specialties.join(', ') || 'None detected'}`);
        console.log(`      Community Score: ${result.communityAlignment.score}`);
        console.log(`      Phone: ${result.firearmsInfo.phone || 'Not found'}`);
        console.log(`      Email: ${result.firearmsInfo.email || 'Not found'}`);
        
        if (result.communityAlignment.reasons.length > 0) {
            console.log(`      Alignment: ${result.communityAlignment.reasons.join(', ')}`);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Test data loader
function loadTestData() {
    try {
        const data = fs.readFileSync('./src/lib/generated-ffl-data.ts', 'utf8');
        const arrayMatch = data.match(/export const allFFLs[^=]*=\s*(\[[\s\S]*?\]);/);
        
        if (!arrayMatch) throw new Error('Could not find FFL data array');
        
        const jsonString = arrayMatch[1]
            .replace(/(\w+):/g, '"$1":')
            .replace(/'/g, '"')
            .replace(/,(\s*[}\]])/g, '$1');
        
        const businesses = JSON.parse(jsonString);
        const needsWebsites = businesses.filter(b => !b.website || b.website.trim() === '');
        
        console.log(`📊 Loaded ${businesses.length} total businesses`);
        console.log(`🔍 ${needsWebsites.length} businesses need website discovery`);
        
        return needsWebsites;
        
    } catch (error) {
        console.error('Error loading business data:', error.message);
        return [];
    }
}

// Main execution
async function main() {
    if (!CONFIG.SERPER_API_KEY) {
        console.error('❌ SERPER_API_KEY environment variable not set');
        process.exit(1);
    }

    console.log('🚀 Enhanced Idaho Firearms Business Discovery System');
    console.log('   Tailored for The Boise Gun Club community directory\n');

    const businesses = loadTestData();
    if (businesses.length === 0) {
        console.log('❌ No businesses loaded for discovery');
        return;
    }

    const discovery = new EnhancedBusinessDiscovery();
    const batch = businesses.slice(0, CONFIG.BATCH_SIZE);
    
    console.log(`🎯 Processing batch of ${batch.length} businesses...\n`);

    for (const business of batch) {
        await discovery.discoverBusiness(business);
    }

    // Generate results
    console.log(`\n📊 DISCOVERY COMPLETE`);
    console.log(`   Processed: ${discovery.processed.size} businesses`);
    console.log(`   Discovered: ${discovery.results.length} websites`);
    console.log(`   Success Rate: ${((discovery.results.length / batch.length) * 100).toFixed(1)}%`);

    // Save results
    const timestamp = Date.now();
    const jsonFile = `enhanced-discovery-${timestamp}.json`;
    fs.writeFileSync(jsonFile, JSON.stringify(discovery.results, null, 2));
    console.log(`\n💾 Results saved: ${jsonFile}`);
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { EnhancedBusinessDiscovery, IdahoFirearmsSearchEngine, FirearmsContentExtractor, IdahoCommunityValidator };
