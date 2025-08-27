export interface MarketplaceVendor {
  name: string
  rating: number
  address: string
  phone: string
  verified?: boolean
  responseTime?: string
}

export interface MarketplaceProduct {
  id: string | number
  title: string
  description: string
  category: string
  subcategory?: string
  price: number
  originalPrice?: number
  condition: string
  caliber?: string
  brand: string
  model: string
  vendor: MarketplaceVendor
  inStock: boolean
  quantity?: number
  lastUpdated: string
  images: string[]
  features?: string[]
  tags?: string[]
  views?: number
  inquiries?: number
  featured?: boolean
  specifications?: Record<string, string>
}

// Mock data - in production this would be database queries
const buysellProducts: MarketplaceProduct[] = [
  {
    id: '1',
    title: "Glock 19 Gen 5",
    description: "9mm, 15+1 capacity, Glock night sights, three magazines included. Excellent condition, barely used. Perfect for concealed carry or home defense. Comes with original case and documentation.",
    category: "Handguns",
    subcategory: "Semi-Automatic",
    price: 549,
    originalPrice: 599,
    condition: "Like New",
    caliber: "9mm",
    brand: "Glock",
    model: "19 Gen 5",
    vendor: {
      name: "Valley Gun & Pawn",
      rating: 4.2,
      address: "Caldwell, ID",
      phone: "(208) 555-0321",
      verified: true,
      responseTime: "2 hours"
    },
    inStock: true,
    quantity: 2,
    lastUpdated: "2025-01-15",
    images: ["/images/buysell/glock19.jpg", "/images/buysell/glock19-2.jpg"],
    features: ["Night Sights", "3 Magazines", "Case Included", "Original Documentation"],
    tags: ["Popular", "Concealed Carry", "Reliable"],
    views: 340,
    inquiries: 12,
    featured: true,
    specifications: {
      "Caliber": "9mm Luger",
      "Capacity": "15+1",
      "Barrel Length": "4.02 inches",
      "Overall Length": "7.36 inches",
      "Width": "1.34 inches",
      "Height": "5.04 inches",
      "Weight": "23.65 oz (without magazine)",
      "Trigger": "Safe Action",
      "Sights": "Glock Night Sights",
      "Frame": "Polymer",
      "Finish": "nDLC"
    }
  },
  {
    id: '2',
    title: "Smith & Wesson M&P 15 Sport II",
    description: "5.56 NATO/.223 Remington, 16-inch barrel, 30-round magazine. Reliable AR-15 platform perfect for target shooting and home defense. Well-maintained with minimal use.",
    category: "Rifles",
    subcategory: "Semi-Automatic",
    price: 749,
    originalPrice: 849,
    condition: "Excellent",
    caliber: "5.56 NATO",
    brand: "Smith & Wesson",
    model: "M&P 15 Sport II",
    vendor: {
      name: "Boise Tactical Supply",
      rating: 4.7,
      address: "Boise, ID",
      phone: "(208) 555-0789",
      verified: true,
      responseTime: "1 hour"
    },
    inStock: true,
    quantity: 1,
    lastUpdated: "2025-01-14",
    images: ["/images/buysell/mp15.jpg"],
    features: ["16-inch Barrel", "30-round Magazine", "Armornite Barrel Coating", "Adjustable Stock"],
    tags: ["AR-15", "CursorArrowRaysIcon Shooting", "Home Defense"],
    views: 285,
    inquiries: 8,
    featured: false,
    specifications: {
      "Caliber": "5.56 NATO/.223 Remington",
      "Capacity": "30 rounds",
      "Barrel Length": "16 inches",
      "Overall Length": "35 inches (stock extended)",
      "Weight": "6.5 lbs",
      "Twist Rate": "1:9",
      "Gas System": "Direct Impingement",
      "Handguard": "A2 Style",
      "Stock": "6-Position Collapsible",
      "Trigger": "Standard Mil-Spec"
    }
  },
  {
    id: '3',
    title: "Ruger 10/22 Carbine",
    description: "Classic .22 LR rifle, perfect for training, target shooting, and small game hunting. Includes Ruger 10-round rotary magazine. Excellent condition with low round count.",
    category: "Rifles",
    subcategory: "Semi-Automatic",
    price: 299,
    condition: "Excellent",
    caliber: ".22 LR",
    brand: "Ruger",
    model: "10/22 Carbine",
    vendor: {
      name: "Mountain West Firearms",
      rating: 4.5,
      address: "Meridian, ID",
      phone: "(208) 555-0456",
      verified: true,
      responseTime: "4 hours"
    },
    inStock: true,
    quantity: 3,
    lastUpdated: "2025-01-13",
    images: ["/images/buysell/ruger1022.jpg"],
    features: ["10-round Magazine", "18.5-inch Barrel", "Hardwood Stock", "Cross-bolt Safety"],
    tags: ["Training", "CursorArrowRaysIcon Shooting", "Beginner Friendly"],
    views: 198,
    inquiries: 6,
    featured: false,
    specifications: {
      "Caliber": ".22 Long Rifle",
      "Capacity": "10 rounds",
      "Barrel Length": "18.5 inches",
      "Overall Length": "37 inches",
      "Weight": "5.0 lbs",
      "Stock": "American Hardwood",
      "Sights": "Gold Bead Front, Adjustable Rear",
      "Safety": "Cross-bolt",
      "Action": "Blow-back",
      "Trigger": "Standard"
    }
  }
]

export class MarketplaceService {
  static async getAllProducts(): Promise<MarketplaceProduct[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return buysellProducts
  }

  static async getProductById(id: string): Promise<MarketplaceProduct | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return buysellProducts.find(product => product.id.toString() === id) || null
  }

  static async getProductsByCategory(category: string): Promise<MarketplaceProduct[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return buysellProducts.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    )
  }

  static async getFeaturedProducts(): Promise<MarketplaceProduct[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return buysellProducts.filter(product => product.featured)
  }

  static async getRelatedProducts(productId: string, category: string): Promise<MarketplaceProduct[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    return buysellProducts
      .filter(product => 
        product.id.toString() !== productId && 
        product.category.toLowerCase() === category.toLowerCase()
      )
      .slice(0, 3)
  }

  static async searchProducts(query: string): Promise<MarketplaceProduct[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100))
    const searchTerm = query.toLowerCase()
    return buysellProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.model.toLowerCase().includes(searchTerm) ||
      product.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      product.category.toLowerCase().includes(searchTerm)
    )
  }

  static getCategories(): string[] {
    const categories = [...new Set(buysellProducts.map(product => product.category))]
    return categories.sort()
  }

  static getBrands(): string[] {
    const brands = [...new Set(buysellProducts.map(product => product.brand))]
    return brands.sort()
  }

  static getMarketplaceStats() {
    const totalProducts = buysellProducts.length
    const totalVendors = [...new Set(buysellProducts.map(product => product.vendor.name))].length
    const avgPrice = Math.round(
      buysellProducts.reduce((sum, product) => sum + product.price, 0) / totalProducts
    )
    const totalViews = buysellProducts.reduce((sum, product) => sum + (product.views || 0), 0)

    return {
      totalProducts,
      totalVendors,
      avgPrice,
      totalViews,
      categories: this.getCategories().length,
      inStockItems: buysellProducts.filter(product => product.inStock).length
    }
  }
}

export const buysellService = MarketplaceService