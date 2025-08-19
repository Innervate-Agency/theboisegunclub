/**
 * Serper API Service for Enhanced Business Data
 * Provides 2500 monthly queries for rich business intelligence
 */

import crypto from 'crypto';

interface SerperSearchResult {
  title: string;
  link: string;
  snippet: string;
  date?: string;
  imageUrl?: string;
  rating?: number;
  reviews?: number;
  price?: string;
}

interface SerperPlacesResult {
  title: string;
  address: string;
  phone?: string;
  website?: string;
  rating?: number;
  reviews?: number;
  hours?: Record<string, string>;
  imageUrl?: string;
  placeId?: string;
}

interface SerperResponse {
  searchParameters: {
    q: string;
    type: string;
    engine: string;
  };
  places?: SerperPlacesResult[];
  organic?: SerperSearchResult[];
}

interface BusinessData {
  rating?: number;
  reviewCount?: number;
  hours?: Record<string, string>;
  imageUrls?: string[];
  placeId?: string;
}

/**
 * Enhanced business intelligence service using Serper API
 */
export class SerperService {
  private apiKey: string;
  private baseUrl = 'https://google.serper.dev';
  private rateLimitDelay = 100; // 100ms between requests to respect limits

  constructor() {
    this.apiKey = process.env.SERPER_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('SERPER_API_KEY is required');
    }
  }

  /**
   * Search for business information using smart queries
   */
  async searchBusiness(
    businessName: string, 
    city: string, 
    state: string = 'Idaho'
  ): Promise<BusinessData | null> {
    try {
      // Wait for rate limit
      await this.delay(this.rateLimitDelay);

      // Construct smart search query
      const query = `"${businessName}" ${city} ${state} hours reviews rating`;
      
      const response = await fetch(`${this.baseUrl}/places`, {
        method: 'POST',
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: query,
          location: `${city}, ${state}`,
          hl: 'en',
          gl: 'us',
        }),
      });

      if (!response.ok) {
        console.error(`Serper API error: ${response.status} ${response.statusText}`);
        return null;
      }

      const data: SerperResponse = await response.json();
      
      if (!data.places || data.places.length === 0) {
        console.log(`No Serper results found for: ${businessName} in ${city}`);
        return null;
      }

      // Find best matching place (first result is usually most relevant)
      const place = data.places[0];
      
      return {
        rating: place.rating,
        reviewCount: place.reviews,
        hours: this.normalizeHours(place.hours),
        imageUrls: place.imageUrl ? [place.imageUrl] : [],
        placeId: place.placeId
      };

    } catch (error) {
      console.error('Serper API search error:', error);
      return null;
    }
  }

  /**
   * Generate data hash for change detection
   */
  generateDataHash(businessData: BusinessData): string {
    const hashInput = JSON.stringify({
      rating: businessData.rating,
      reviewCount: businessData.reviewCount,
      hours: businessData.hours
    });
    return crypto.createHash('sha256').update(hashInput).digest('hex');
  }

  /**
   * Check if business data has changed using hash comparison
   */
  hasDataChanged(currentHash: string, newData: BusinessData): boolean {
    const newHash = this.generateDataHash(newData);
    return currentHash !== newHash;
  }

  /**
   * Normalize hours data to consistent format
   */
  private normalizeHours(hours?: Record<string, string>): Record<string, string> | undefined {
    if (!hours) return undefined;
    
    const normalized: Record<string, string> = {};
    const dayMappings = {
      'monday': ['mon', 'monday', 'm'],
      'tuesday': ['tue', 'tuesday', 'tu'],
      'wednesday': ['wed', 'wednesday', 'w'],
      'thursday': ['thu', 'thursday', 'th'],
      'friday': ['fri', 'friday', 'f'],
      'saturday': ['sat', 'saturday', 'sa'],
      'sunday': ['sun', 'sunday', 'su']
    };

    Object.entries(hours).forEach(([day, time]) => {
      const dayLower = day.toLowerCase();
      for (const [standardDay, variations] of Object.entries(dayMappings)) {
        if (variations.some(v => dayLower.includes(v))) {
          normalized[standardDay] = time;
          break;
        }
      }
    });

    return Object.keys(normalized).length > 0 ? normalized : undefined;
  }

  /**
   * Rate limiting helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Build tier-based query strategy
   */
  getRefreshSchedule(tier: number): string {
    switch (tier) {
      case 1: return 'daily';   // Premium businesses
      case 2: return 'weekly';  // Standard businesses  
      case 3: return 'monthly'; // Basic businesses
      default: return 'monthly';
    }
  }

  /**
   * Estimate monthly API usage based on business tiers
   */
  estimateMonthlyUsage(tier1Count: number, tier2Count: number, tier3Count: number): number {
    return (tier1Count * 30) + (tier2Count * 4) + (tier3Count * 1);
  }
}

// Export singleton instance
export const serperService = new SerperService();