import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ProductDetailPage } from '@/components/ui/detail-page-builder'

// Mock data service - in production, this would fetch from a database or API
const getBuySellProduct = (id: string) => {
  // Sample buysell listings data
  const products = [
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
    }
  ]
  
  return products.find(product => product.id === id)
}

const getRelatedProducts = (productId: string, category: string) => {
  // Mock related products
  return [
    {
      id: '3',
      title: "Glock 17 Gen 5",
      price: 589,
      image: "/images/buysell/glock17.jpg",
      vendor: "Idaho Arms Co."
    },
    {
      id: '4', 
      title: "SIG Sauer P320",
      price: 649,
      image: "/images/buysell/sig320.jpg",
      vendor: "Mountain West Firearms"
    },
    {
      id: '5',
      title: "Springfield XD-M",
      price: 599,
      image: "/images/buysell/xdmotion.jpg", 
      vendor: "Valley Gun & Pawn"
    }
  ]
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const product = getBuySellProduct(id)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: `${product.title} - ${product.brand} ${product.model}`,
    description: product.description,
    openGraph: {
      title: `${product.title} - $${product.price}`,
      description: product.description,
      images: product.images
    }
  }
}

export async function generateStaticParams() {
  // In production, this would fetch all product IDs from your data source
  return [
    { id: '1' },
    { id: '2' }
  ]
}

export default async function BuySellProductPage({ params }: Props) {
  const { id } = await params
  const product = getBuySellProduct(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(id, product.category)

  // Transform product data to match ProductDetailPage props
  const transformedProduct = {
    ...product,
    tags: product.tags || [product.category, product.brand, product.condition]
  }

  return (
    <ProductDetailPage {...transformedProduct} />
  )
}