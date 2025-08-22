#!/usr/bin/env node

/**
 * Enhanced Business Discovery System v2 for The Boise Gun Club
 * Features: SQL integration, event discovery, and business categorization
 * Tailored for Idaho firearms community with comprehensive data enrichment
 */

const fs = require('fs');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const CONFIG = {
    SERPER_API_KEY: process.env.SERPER_API_KEY,
    BATCH_SIZE: 6,
    REQUEST_DELAY: 2000,
    CONSENT_THRESHOLD: 2,
    VERBOSE: true,
    ENABLE_EVENT_DISCOVERY: true,
    ENABLE_SQL_EXPORT: true,
    ENABLE_CATEGORIZATION: true
};

// Business categorization system
class BusinessCategorizer {
    constructor() {
        this.categoryRules = {
            'Retail Store': {
                patterns: [/gun store/i, /firearms dealer/i, /sporting goods/i, /outdoor/i, /retail/i],
                services: ['retail', 'ffl'],
                priority: 1
            },
            'Shooting Range': {
                patterns: [/range/i, /shooting/i],
                services: ['range'],
                priority: 2
            },
            'Gunsmith': {
                patterns: [/gunsmith/i, /custom/i, /repair/i, /cerakote/i],
                services: ['gunsmith'],
                priority: 3
            },
            'Training Center': {
                patterns: [/training/i, /instruction/i, /academy/i],
                services: ['training'],
                priority: 4
            },
            'Multi-Service': {
                multiServiceThreshold: 3,
                priority: 5
            }
        };
    }

    categorize(business, firearmsInfo) {
        const name = business.businessName.toLowerCase();
        const services = firearmsInfo.services;
        
        let bestCategory = null;
        let highestScore = 0;
        
        for (const [category, rules] of Object.entries(this.categoryRules)) {
            let score = 0;
            
            // Check name patterns
            if (rules.patterns) {
                for (const pattern of rules.patterns) {
                    if (pattern.test(name)) score += 2;
                }
            }
            
            // Check service matches
            if (rules.services) {
                for (const service of rules.services) {
                    if (services.includes(service)) score += 3;
                }
            }
            
            // Special case for multi-service
            if (category === 'Multi-Service' && services.length >= rules.multiServiceThreshold) {
                score += 5;
            }
            
            if (score > highestScore) {
                highestScore = score;
                bestCategory = category;
            }
        }
        
        return {
            category: bestCategory || 'General Firearms Business',
            confidence: Math.min(highestScore / 5, 1.0),
            serviceCount: services.length
        };
    }

    generateCategorizedReport(results) {
        const categories = {};
        
        results.forEach(result => {
            const cat = result.categorization.category;
            if (!categories[cat]) {
                categories[cat] = {
                    businesses: [],
                    totalServices: 0
                };
            }
            
            categories[cat].businesses.push(result);
            categories[cat].totalServices += result.firearmsInfo.services.length;
        });
        
        // Calculate averages
        Object.keys(categories).forEach(cat => {
            const cat_data = categories[cat];
            cat_data.avgServices = cat_data.totalServices / cat_data.businesses.length;
        });
        
        return categories;
    }
}

// Event and training discovery
class EventTrainingDiscovery {
    constructor() {
        this.eventPatterns = {
            classes: /class|course|training|workshop|seminar/i,
            competitions: /competition|match|tournament|shoot|challenge/i,
            events: /event|show|expo|fair/i,
            safety: /safety|hunter education|concealed carry|ccw/i,
            specialty: /IDPA|USPSA|3-gun|steel challenge|trap|skeet/i
        };
    }

    async discoverEvents(website, businessName) {
        try {
            // Simple event discovery by analyzing the main website
            const response = await EnhancedHttpClient.makeRequest(website);
            if (response.statusCode !== 200) return [];
            
            const content = response.body;
            const events = [];
            
            // Check for event indicators
            for (const [type, pattern] of Object.entries(this.eventPatterns)) {
                if (pattern.test(content)) {
                    events.push({
                        type: type,
                        detected: true,
                        source: 'website_content'
                    });
                }
            }
            
            return events;
            
        } catch (error) {
            return [];
        }
    }
}

// SQL Integration System
class SQLIntegration {
    generateUpdateSQL(results) {
        if (results.length === 0) return '';
        
        const timestamp = new Date().toISOString();
        let sql = `-- Enhanced Business Discovery v2 Results\n`;
        sql += `-- Generated: ${timestamp}\n`;
        sql += `-- Total discoveries: ${results.length}\n\n`;
        
        sql += `BEGIN;\n\n`;
        
        for (const result of results) {
            sql += this.generateSingleUpdateSQL(result);
        }
        
        sql += `COMMIT;\n`;
        return sql;
    }

    generateSingleUpdateSQL(result) {
        let sql = `-- Update ${result.businessName} (${result.city})\n`;
        
        const updates = [];
        
        if (result.website) {
            updates.push(`website = '${this.escapeSQLString(result.website)}'`);
        }
        
        if (result.firearmsInfo.phone) {
            updates.push(`voice_phone = '${this.escapeSQLString(result.firearmsInfo.phone)}'`);
        }
        
        if (result.firearmsInfo.email) {
            updates.push(`email = '${this.escapeSQLString(result.firearmsInfo.email)}'`);
        }
        
        if (result.firearmsInfo.services.length > 0) {
            const servicesArray = result.firearmsInfo.services.map(s => `'${this.escapeSQLString(s)}'`).join(',');
            updates.push(`services = ARRAY[${servicesArray}]`);
        }
        
        updates.push(`community_score = ${result.communityAlignment.score}`);
        updates.push(`is_ffl = ${result.firearmsInfo.ffl}`);
        updates.push(`has_training = ${result.firearmsInfo.training}`);
        updates.push(`has_range = ${result.firearmsInfo.range}`);
        updates.push(`updated_at = NOW()`);
        
        if (result.categorization) {
            updates.push(`business_category = '${this.escapeSQLString(result.categorization.category)}'`);
        }
        
        if (result.events && result.events.length > 0) {
            updates.push(`has_events = true`);
        }
        
        sql += `UPDATE businesses SET\n`;
        sql += `  ${updates.join(',\n  ')}\n`;
        sql += `WHERE business_name = '${this.escapeSQLString(result.businessName)}'\n`;
        sql += `  AND premise_city = '${this.escapeSQLString(result.city)}';\n\n`;
        
        return sql;
    }

    escapeSQLString(str) {
        if (!str) return '';
        return str.toString().replace(/'/g, "''");
    }

    generateSchemaExtensions() {
        return `-- Schema extensions for Enhanced Discovery v2
ALTER TABLE businesses 
ADD COLUMN IF NOT EXISTS community_score INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS is_ffl BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS has_training BOOLEAN DEFAULT FALSE, 
ADD COLUMN IF NOT EXISTS has_range BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS has_events BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS business_category VARCHAR(100);

CREATE INDEX IF NOT EXISTS idx_businesses_community_score ON businesses(community_score);
CREATE INDEX IF NOT EXISTS idx_businesses_category ON businesses(business_category);
`;
    }
}

// Search engine from v1
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

// Content extractor from v1
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
            /\b(\(\d{3}\)\s*\d{3}[-.]?\d{4})\b/
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
            /open[:\s]*([^<\n]{10,50})/i
        ];
        
        for (const pattern of hourPatterns) {
            const match = content.match(pattern);
            if (match && match[1]) {
                return match[1].substring(0, 200);
            }
        }
        return null;
    }
}

// Community validator from v1
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

// HTTP client from v1
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

// Main enhanced discovery engine v2
class EnhancedBusinessDiscoveryV2 {
    constructor() {
        this.searchEngine = new IdahoFirearmsSearchEngine();
        this.contentExtractor = new FirearmsContentExtractor();
        this.communityValidator = new IdahoCommunityValidator();
        this.categorizer = new BusinessCategorizer();
        this.eventDiscovery = new EventTrainingDiscovery();
        this.sqlIntegration = new SQLIntegration();
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
                    state: business.state || 'ID',
                    website: bestResult.website,
                    ...bestResult.analysis
                };
                
                // Add categorization
                if (CONFIG.ENABLE_CATEGORIZATION) {
                    result.categorization = this.categorizer.categorize(business, result.firearmsInfo);
                    console.log(`   📊 Category: ${result.categorization.category} (${(result.categorization.confidence * 100).toFixed(0)}% confidence)`);
                }
                
                // Add event discovery
                if (CONFIG.ENABLE_EVENT_DISCOVERY) {
                    console.log(`   🎪 Discovering events/training...`);
                    result.events = await this.eventDiscovery.discoverEvents(bestResult.website, business.businessName);
                    if (result.events.length > 0) {
                        console.log(`   📅 Found ${result.events.length} event/training indicators`);
                    }
                }
                
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
        
        return websites.slice(0, 3);
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
        
        if (result.events && result.events.length > 0) {
            const eventTypes = result.events.map(e => e.type);
            console.log(`      Events: ${eventTypes.join(', ')}`);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    generateReports() {
        const timestamp = Date.now();
        const reports = {};
        
        // JSON Results
        reports.json = `enhanced-discovery-v2-${timestamp}.json`;
        fs.writeFileSync(reports.json, JSON.stringify(this.results, null, 2));
        
        // SQL Integration
        if (CONFIG.ENABLE_SQL_EXPORT) {
            reports.sql = `enhanced-discovery-v2-${timestamp}.sql`;
            const sqlContent = this.sqlIntegration.generateUpdateSQL(this.results);
            fs.writeFileSync(reports.sql, sqlContent);
            
            reports.schema = `enhanced-discovery-v2-schema-${timestamp}.sql`;
            fs.writeFileSync(reports.schema, this.sqlIntegration.generateSchemaExtensions());
        }
        
        // Categorization Report
        if (CONFIG.ENABLE_CATEGORIZATION) {
            reports.categories = `enhanced-discovery-v2-categories-${timestamp}.json`;
            const categorizedReport = this.categorizer.generateCategorizedReport(this.results);
            fs.writeFileSync(reports.categories, JSON.stringify(categorizedReport, null, 2));
        }
        
        return reports;
    }
}

// Test businesses
function getTestBusinesses() {
    return [
        { businessName: "Al's Sporting Goods", city: "Caldwell", state: "ID" },
        { businessName: "Rifle Guru", city: "Nampa", state: "ID" },
        { businessName: "Homestead Firearms", city: "Meridian", state: "ID" },
        { businessName: "Blackfoot Gun Shop", city: "Blackfoot", state: "ID" },
        { businessName: "Impact Guns", city: "Boise", state: "ID" },
        { businessName: "Tactical Solutions", city: "Boise", state: "ID" }
    ];
}

// Main execution
async function main() {
    if (!CONFIG.SERPER_API_KEY) {
        console.error('❌ SERPER_API_KEY environment variable not set');
        process.exit(1);
    }

    console.log('🚀 Enhanced Idaho Firearms Business Discovery System v2');
    console.log('   Features: SQL Integration, Event Discovery, Business Categorization');
    console.log('   Tailored for The Boise Gun Club community directory\n');

    const businesses = getTestBusinesses();
    const discovery = new EnhancedBusinessDiscoveryV2();
    const batch = businesses.slice(0, CONFIG.BATCH_SIZE);
    
    console.log(`🎯 Processing batch of ${batch.length} businesses...\n`);

    for (const business of batch) {
        await discovery.discoverBusiness(business);
    }

    // Generate results and reports
    console.log(`\n📊 DISCOVERY COMPLETE`);
    console.log(`   Processed: ${discovery.processed.size} businesses`);
    console.log(`   Discovered: ${discovery.results.length} websites`);
    console.log(`   Success Rate: ${((discovery.results.length / batch.length) * 100).toFixed(1)}%`);

    const reports = discovery.generateReports();
    
    console.log(`\n💾 Generated Reports:`);
    Object.entries(reports).forEach(([type, filename]) => {
        console.log(`   ${type.toUpperCase()}: ${filename}`);
    });
    
    if (discovery.results.length > 0 && CONFIG.ENABLE_CATEGORIZATION) {
        console.log(`\n📊 BUSINESS CATEGORIES DISCOVERED:`);
        const categorizedReport = discovery.categorizer.generateCategorizedReport(discovery.results);
        
        Object.entries(categorizedReport).forEach(([category, data]) => {
            console.log(`   ${category}: ${data.businesses.length} businesses (avg ${data.avgServices.toFixed(1)} services)`);
        });
    }
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { EnhancedBusinessDiscoveryV2, BusinessCategorizer, EventTrainingDiscovery, SQLIntegration };
