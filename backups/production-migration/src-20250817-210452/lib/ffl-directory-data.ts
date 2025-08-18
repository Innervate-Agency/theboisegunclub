/**
 * Federal Firearms Licensee (FFL) Directory Data for Southwest Idaho
 * Comprehensive verified listings from Ada, Canyon, and Owyhee counties
 * Last updated: August 2025
 */

export interface FFLBusinessData {
  businessName: string
  businessType: string
  description: string
  address: string
  phone?: string
  website?: string
  email?: string
  hours?: string
  fflType: 'Type 01 Dealer' | 'Type 02 Pawnbroker' | 'Type 07 Manufacturer' | 'Type 08 Importer' | 'Type 10 Destructive Device' | 'Type 11 Destructive Device'
  fflNumber?: string
  verificationStatus: 'Fully Verified' | 'ATF/SOS Verified' | 'BBB Accredited' | 'Inactive/Closed'
  operationalModel: 'Commercial Storefront' | 'Pawnbroker' | 'Home-Based/Appointment' | 'Manufacturer' | 'Training Facility'
  tier: 'gold' | 'silver' | 'bronze' | 'standard'
  specialties: string[]
  isVerified: boolean
  isSponsored: boolean
  imageUrl?: string
  slug: string
  category: 'Range' | 'Gunsmith' | 'Training' | 'Retail' | 'Club' | 'Service' | 'Pawnbroker' | 'Manufacturer'
  county: 'Ada' | 'Canyon' | 'Owyhee'
  featured?: boolean
  yearsInBusiness?: number
}

// Ada County FFLs
export const adaCountyFFLs: FFLBusinessData[] = [
  // Major Commercial Storefronts
  {
    businessName: "Idaho Guns & Outdoors",
    businessType: "Full-Service Gun Store",
    description: "Multi-location retailer with established reputation, full-service gun store offering firearms, ammunition, accessories and expert advice.",
    address: "8600 W Franklin Road, Boise, ID 83709",
    phone: "(208) 378-1600",
    website: "https://idahoguns.com",
    hours: "Mon-Fri 10AM-7PM, Sat 10AM-6PM, Sun 10AM-5PM",
    fflType: "Type 01 Dealer",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "gold",
    specialties: ["New Firearms", "Used Firearms", "Ammunition", "Accessories", "Expert Consultation"],
    isVerified: true,
    isSponsored: true,
    slug: "idaho-guns-outdoors-boise",
    category: "Retail",
    county: "Ada",
    featured: true,
    yearsInBusiness: 15
  },
  {
    businessName: "Cabela's",
    businessType: "Major Outdoor Retailer",
    description: "132,000 sq ft showroom with Gun Library section, gunsmithing services, and comprehensive outdoor sporting goods selection.",
    address: "8109 W Franklin Road, Boise, ID 83709",
    phone: "(208) 672-7900",
    website: "https://cabelas.com",
    fflType: "Type 01 Dealer",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "gold",
    specialties: ["Gun Library", "Gunsmithing", "Hunting Gear", "Fishing Equipment"],
    isVerified: true,
    isSponsored: true,
    slug: "cabelas-boise",
    category: "Retail",
    county: "Ada",
    featured: true,
    yearsInBusiness: 20
  },
  {
    businessName: "Buckhorn Gun & Pawn",
    businessType: "Full-Service Gun Shop & Pawnbroker",
    description: "42 years in business providing full-service gunsmithing, buy/sell/trade firearms, and pawn services to the Boise community.",
    address: "6601 West Ustick Road, Boise, ID 83704",
    phone: "(208) 377-2535",
    hours: "Tue-Fri 9AM-6PM, Sat 10AM-5PM, Closed Mon/Sun",
    fflType: "Type 02 Pawnbroker",
    verificationStatus: "Fully Verified",
    operationalModel: "Pawnbroker",
    tier: "gold",
    specialties: ["Gunsmithing", "Used Firearms", "Pawn Services", "Firearm Appraisals"],
    isVerified: true,
    isSponsored: false,
    slug: "buckhorn-gun-pawn",
    category: "Pawnbroker",
    county: "Ada",
    featured: true,
    yearsInBusiness: 42
  },
  {
    businessName: "Independence Indoor Shooting",
    businessType: "Premier Training Facility",
    description: "Indoor shooting range, gun store, and training academy offering comprehensive firearms education and range services.",
    address: "2749 East Gala Court, Meridian, ID 83642",
    phone: "(208) 576-4867",
    website: "https://iishooting.com",
    fflType: "Type 07 Manufacturer",
    fflNumber: "9-82-001-07-5L-03055",
    verificationStatus: "Fully Verified",
    operationalModel: "Training Facility",
    tier: "gold",
    specialties: ["Indoor Range", "Training Courses", "Firearms Sales", "Rentals"],
    isVerified: true,
    isSponsored: true,
    slug: "independence-indoor-shooting",
    category: "Range",
    county: "Ada",
    featured: true
  },
  {
    businessName: "SCHEELS All Sports",
    businessType: "Sporting Goods Retailer",
    description: "Major sporting goods retailer with large firearms and ammunition department, serving outdoor enthusiasts across Idaho.",
    address: "700 S Wayfinder Ave, Meridian, ID 83642",
    fflType: "Type 01 Dealer",
    fflNumber: "9-82-001-01-7C-05393",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "silver",
    specialties: ["Sporting Goods", "Firearms Department", "Ammunition", "Outdoor Gear"],
    isVerified: true,
    isSponsored: false,
    slug: "scheels-meridian",
    category: "Retail",
    county: "Ada"
  },
  {
    businessName: "Impact Guns",
    businessType: "Premier Gun Shop with Range",
    description: "Boise's premier one stop gun shop established in 2006, featuring indoor range and comprehensive firearms services.",
    address: "11655 W Executive Dr, Boise, ID 83713",
    phone: "(208) 321-1288",
    website: "https://impactguns.com",
    fflType: "Type 01 Dealer",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "gold",
    specialties: ["Indoor Range", "New Firearms", "Used Firearms", "Online Sales"],
    isVerified: true,
    isSponsored: false,
    slug: "impact-guns",
    category: "Range",
    county: "Ada",
    featured: true,
    yearsInBusiness: 18
  },
  {
    businessName: "HawkTech Arms",
    businessType: "Firearms Dealer",
    description: "Active retail location specializing in firearms sales and transfers, serving the Meridian community.",
    address: "1994 E Franklin Rd Suite 110, Meridian, ID 83642",
    fflType: "Type 01 Dealer",
    fflNumber: "9-82-001-01-6E-01211",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Commercial Storefront",
    tier: "bronze",
    specialties: ["Firearms Sales", "FFL Transfers"],
    isVerified: true,
    isSponsored: false,
    slug: "hawktech-arms",
    category: "Retail",
    county: "Ada"
  },
  {
    businessName: "Cliff's Guns, Safes, Reloading",
    businessType: "Specialty Firearms Store",
    description: "Specializes in reloading supplies and gun safes, serving reloading enthusiasts and security-conscious gun owners.",
    address: "11505 W Fairview Ave, Suite 101, Boise, ID 83713",
    fflType: "Type 01 Dealer",
    fflNumber: "9-82-001-01-6F-00278",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Commercial Storefront",
    tier: "silver",
    specialties: ["Reloading Supplies", "Gun Safes", "Firearms Sales"],
    isVerified: true,
    isSponsored: false,
    slug: "cliffs-guns-safes-reloading",
    category: "Retail",
    county: "Ada"
  },
  {
    businessName: "Old Arms of Idaho LLC",
    businessType: "Historical Firearms Specialist",
    description: "Specializes in historical firearms and certified appraisals, serving collectors and history enthusiasts.",
    address: "6128 W Fairview Ave, Boise, ID 83704",
    phone: "(208) 602-6027",
    fflType: "Type 01 Dealer",
    fflNumber: "9-82-001-01-7M-02798",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Commercial Storefront",
    tier: "silver",
    specialties: ["Historical Firearms", "Certified Appraisals", "Collector Services"],
    isVerified: true,
    isSponsored: false,
    slug: "old-arms-idaho",
    category: "Retail",
    county: "Ada"
  },
  
  // Pawnbroker Locations
  {
    businessName: "Pawn 1 - North Orchard",
    businessType: "Pawnbroker with Firearms",
    description: "Multi-location pawnbroker chain offering firearms sales, loans, and general pawn services.",
    address: "919 N Orchard St, Boise, ID 83706",
    fflType: "Type 02 Pawnbroker",
    fflNumber: "9-82-001-02-7K-05499",
    verificationStatus: "Fully Verified",
    operationalModel: "Pawnbroker",
    tier: "bronze",
    specialties: ["Pawn Services", "Used Firearms", "Loans"],
    isVerified: true,
    isSponsored: false,
    slug: "pawn-1-north-orchard",
    category: "Pawnbroker",
    county: "Ada"
  },
  {
    businessName: "Vista Pawn",
    businessType: "Community Pawnbroker",
    description: "Local pawnbroker serving Boise with firearms services, loans, and general merchandise.",
    address: "503 S Vista Ave, Boise, ID 83705",
    phone: "(208) 342-3352",
    fflType: "Type 02 Pawnbroker",
    fflNumber: "9-82-001-02-7L-04547",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Pawnbroker",
    tier: "bronze",
    specialties: ["Pawn Services", "Firearms Sales", "General Merchandise"],
    isVerified: true,
    isSponsored: false,
    slug: "vista-pawn",
    category: "Pawnbroker",
    county: "Ada"
  },
  
  // Manufacturers & Specialists
  {
    businessName: "Idaho Arms and Ammo LLC",
    businessType: "Manufacturer & Dealer",
    description: "BBB Accredited business specializing in Sons of Liberty Gunworks products, offering both manufacturing and retail services.",
    address: "519 E Fairview Ave Ste 300, Meridian, ID 83642",
    fflType: "Type 01 Dealer",
    fflNumber: "9-82-001-01-6J-03245",
    verificationStatus: "BBB Accredited",
    operationalModel: "Manufacturer",
    tier: "gold",
    specialties: ["Sons of Liberty Gunworks", "Manufacturing", "Custom Builds"],
    isVerified: true,
    isSponsored: false,
    slug: "idaho-arms-ammo",
    category: "Manufacturer",
    county: "Ada",
    featured: true
  },
  {
    businessName: "Rifle Guru Long Range Shooting",
    businessType: "Custom Rifle Specialist",
    description: "Custom rifles, load development, and long-range training for precision shooting enthusiasts.",
    address: "5282 West White Hills Drive, Boise, ID 83714",
    hours: "Mon-Sat 10AM-6PM, appointments available",
    fflType: "Type 01 Dealer",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Commercial Storefront",
    tier: "silver",
    specialties: ["Custom Rifles", "Load Development", "Long-Range Training"],
    isVerified: true,
    isSponsored: false,
    slug: "rifle-guru-long-range",
    category: "Gunsmith",
    county: "Ada"
  },
  
  // Home-Based/Appointment Only
  {
    businessName: "Patriot Pawn & Gun LLC",
    businessType: "Appointment-Only FFL",
    description: "Transitioned from storefront to appointment-only operations in June 2025, specializing in gun shows and estate sales.",
    address: "Star, Idaho (appointment only)",
    phone: "(208) 286-7300",
    email: "PatriotPawnIdaho@gmail.com",
    fflType: "Type 02 Pawnbroker",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Home-Based/Appointment",
    tier: "bronze",
    specialties: ["Gun Shows", "Estate Sales", "FFL Transfers"],
    isVerified: true,
    isSponsored: false,
    slug: "patriot-pawn-gun",
    category: "Service",
    county: "Ada"
  },
  {
    businessName: "Forward Movement Training",
    businessType: "Training & FFL Services",
    description: "Training-focused business with FFL transfer services, specializing in firearms education and skill development.",
    address: "5848 E Woodcross Dr, Boise, ID 83716",
    fflType: "Type 01 Dealer",
    fflNumber: "9-82-001-01-6D-03898",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Training Facility",
    tier: "silver",
    specialties: ["Firearms Training", "FFL Transfers", "Safety Courses"],
    isVerified: true,
    isSponsored: false,
    slug: "forward-movement-training",
    category: "Training",
    county: "Ada"
  }
]

// Canyon County FFLs
export const canyonCountyFFLs: FFLBusinessData[] = [
  {
    businessName: "Armageddon Armory",
    businessType: "Tactical Firearms Specialist",
    description: "Idaho's largest tactical selection with 20+ years serving the firearms community. Family-owned business specializing in AR-15s, AK-47s, and military surplus.",
    address: "2809 Garrity Blvd, Nampa, ID 83686",
    phone: "(208) 465-3577",
    fflType: "Type 01 Dealer",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "gold",
    specialties: ["Tactical Firearms", "AR-15s", "AK-47s", "Military Surplus"],
    isVerified: true,
    isSponsored: true,
    slug: "armageddon-armory",
    category: "Retail",
    county: "Canyon",
    featured: true,
    yearsInBusiness: 20
  },
  {
    businessName: "Idaho Guns & Outdoors - Nampa",
    businessType: "Full-Service Gun Store",
    description: "Second location of established Idaho gun retailer, offering comprehensive firearms, ammunition and outdoor gear.",
    address: "16188 N Merchant Way, Nampa, ID 83687",
    phone: "(208) 546-0100",
    hours: "Mon-Sat 9AM-8PM, Sun 10AM-6PM",
    fflType: "Type 01 Dealer",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "gold",
    specialties: ["New Firearms", "Used Firearms", "Ammunition", "Outdoor Gear"],
    isVerified: true,
    isSponsored: true,
    slug: "idaho-guns-outdoors-nampa",
    category: "Retail",
    county: "Canyon",
    featured: true
  },
  {
    businessName: "Sportsman's Warehouse",
    businessType: "Major Outdoor Retailer",
    description: "Major retail chain offering comprehensive firearms department, hunting gear, and outdoor sporting goods.",
    address: "16865 N Market Place Blvd, Nampa, ID 83687",
    phone: "(208) 468-7600",
    hours: "Mon-Fri 9AM-9PM, Sat 8AM-9PM, Sun 10AM-6PM",
    fflType: "Type 01 Dealer",
    fflNumber: "9-82-027-01-4B-01991",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "silver",
    specialties: ["Hunting Gear", "Firearms", "Ammunition", "Camping Equipment"],
    isVerified: true,
    isSponsored: false,
    slug: "sportsmans-warehouse-nampa",
    category: "Retail",
    county: "Canyon"
  },
  {
    businessName: "Mid Star Firearms LLC",
    businessType: "Family Gun Shop",
    description: "Family-friendly full-service gun shop with on-site gunsmiths, serving the Middleton and surrounding communities.",
    address: "8390 Highway 44, Middleton, ID 83644",
    phone: "(208) 585-9922",
    fflType: "Type 01 Dealer",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "silver",
    specialties: ["Family Service", "Gunsmithing", "Firearms Sales", "Repairs"],
    isVerified: true,
    isSponsored: false,
    slug: "mid-star-firearms",
    category: "Gunsmith",
    county: "Canyon",
    featured: true
  },
  {
    businessName: "D&B Supply",
    businessType: "Farm Supply with Firearms",
    description: "Multi-location farm and ranch supply company with comprehensive firearms departments serving rural communities.",
    address: "620 Smeed Parkway, Caldwell, ID 83605",
    phone: "(208) 459-7444",
    fflType: "Type 01 Dealer",
    verificationStatus: "Fully Verified",
    operationalModel: "Commercial Storefront",
    tier: "silver",
    specialties: ["Farm Supplies", "Hunting Firearms", "Ammunition", "Rural Services"],
    isVerified: true,
    isSponsored: false,
    slug: "db-supply-caldwell",
    category: "Retail",
    county: "Canyon"
  },
  
  // Manufacturers
  {
    businessName: "Agency Arms LLC",
    businessType: "Firearms Manufacturer",
    description: "Specialized firearms manufacturer and importer offering custom firearms and precision manufacturing services.",
    address: "4006 E Linden St, Caldwell, ID 83605",
    fflType: "Type 07 Manufacturer",
    fflNumber: "9-82-027-07-6J-04901",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Manufacturer",
    tier: "gold",
    specialties: ["Custom Firearms", "Manufacturing", "Precision Work"],
    isVerified: true,
    isSponsored: false,
    slug: "agency-arms",
    category: "Manufacturer",
    county: "Canyon"
  },
  {
    businessName: "Nemo Arms Inc",
    businessType: "Specialized Manufacturer",
    description: "Specialized firearms manufacturer offering precision manufacturing and custom firearms development.",
    address: "1906 Smeed Pkwy, Caldwell, ID 83605",
    fflType: "Type 07 Manufacturer",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Manufacturer",
    tier: "silver",
    specialties: ["Precision Manufacturing", "Custom Development", "Specialized Firearms"],
    isVerified: true,
    isSponsored: false,
    slug: "nemo-arms",
    category: "Manufacturer",
    county: "Canyon"
  },
  
  // Pawnbrokers
  {
    businessName: "Al's Pawn & Gun Inc",
    businessType: "Pawnbroker with Firearms",
    description: "Established pawn shop providing firearms sales, loans, and general pawn services to the Caldwell community.",
    address: "5602 Cleveland Blvd, Caldwell, ID 83607",
    fflType: "Type 02 Pawnbroker",
    fflNumber: "9-82-027-02-7C-03381",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Pawnbroker",
    tier: "bronze",
    specialties: ["Pawn Services", "Used Firearms", "General Merchandise"],
    isVerified: true,
    isSponsored: false,
    slug: "als-pawn-gun",
    category: "Pawnbroker",
    county: "Canyon"
  }
]

// Owyhee County FFLs
export const owyheeCountyFFLs: FFLBusinessData[] = [
  {
    businessName: "Eubanks Gunsmithing",
    businessType: "Professional Gunsmith",
    description: "Professional gunsmithing services operating by phone contact, serving rural Owyhee County and surrounding areas.",
    address: "3686 River Road, Homedale, ID 83628",
    phone: "(208) 337-4212",
    fflType: "Type 01 Dealer",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Home-Based/Appointment",
    tier: "silver",
    specialties: ["Gunsmithing", "Repairs", "Custom Work", "Rural Service"],
    isVerified: true,
    isSponsored: false,
    slug: "eubanks-gunsmithing",
    category: "Gunsmith",
    county: "Owyhee"
  },
  {
    businessName: "Outlet Arms LLC",
    businessType: "Home-Based FFL",
    description: "Home-based FFL dealer operating by appointment, providing transfer services for online purchases and local sales.",
    address: "5165 Howarth Ln, Marsing, ID 83639",
    phone: "(208) 899-0150",
    fflType: "Type 01 Dealer",
    verificationStatus: "ATF/SOS Verified",
    operationalModel: "Home-Based/Appointment",
    tier: "bronze",
    specialties: ["FFL Transfers", "Online Purchase Support", "Local Sales"],
    isVerified: true,
    isSponsored: false,
    slug: "outlet-arms",
    category: "Service",
    county: "Owyhee"
  }
]

// Combined array for all FFLs
export const allFFLs: FFLBusinessData[] = [
  ...adaCountyFFLs,
  ...canyonCountyFFLs,
  ...owyheeCountyFFLs
]

// Stats for the directory
export const fflDirectoryStats = {
  totalFFLs: allFFLs.length,
  adaCount: adaCountyFFLs.length,
  canyonCount: canyonCountyFFLs.length,
  owyheeCount: owyheeCountyFFLs.length,
  manufacturerCount: allFFLs.filter(ffl => ffl.fflType.includes('Manufacturer')).length,
  pawnbrokerCount: allFFLs.filter(ffl => ffl.fflType === 'Type 02 Pawnbroker').length,
  commercialStorefrontCount: allFFLs.filter(ffl => ffl.operationalModel === 'Commercial Storefront').length,
  homeBasedCount: allFFLs.filter(ffl => ffl.operationalModel === 'Home-Based/Appointment').length
}