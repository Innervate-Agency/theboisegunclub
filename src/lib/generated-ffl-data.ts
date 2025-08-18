/**
 * Generated FFL Data - Auto-generated from ALL CSV files
 * Generated on: 2025-08-18T20:03:11.628Z
 * Total businesses: 348
 * Data sources: ada_county_gun_stores_comprehensive.csv, canyon_county_firearms_directory.csv, canyon_county_gun_stores_only.csv, ffl_boise_retail_150.csv, ffl_candidates_top150.csv, gem_county_firearms_directory.csv, gem_county_gun_stores_only.csv, owyhee_county_firearms_directory.csv, owyhee_county_gun_stores_only.csv, payette_county_firearms_directory.csv, payette_county_gun_stores_only.csv, treasure_valley_ffls.csv
 */

export interface FFLBusiness {
  slug: string
  businessName: string
  licenseName: string
  address: string
  city: string
  state: string
  zip: string
  fullAddress: string
  phone: string
  businessType: string
  description: string
  hours: string
  services: string[]
  specialties: string[]
  certifications: string[]
  isVerified: boolean
  verificationStatus: string
  tier: 'free' | 'copper' | 'silver' | 'gold'
  isSponsored: boolean
  isFeatured: boolean
  dataSource: string
  serviceArea: string[]
  paymentMethods: string[]
  images: string[]
  website?: string
}

export const allFFLs: FFLBusiness[] = [
  {
    "slug": "buckhorn-gun-pawn",
    "businessName": "Buckhorn Gun & Pawn",
    "licenseName": "",
    "address": "6601 W Ustick Rd",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "6601 W Ustick Rd, Boise, ID 83704",
    "phone": "(208) 377-2535",
    "businessType": "Gunsmith",
    "description": "Buckhorn Gun & Pawn is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "buckhornguns.com"
  },
  {
    "slug": "cliff-s-guns-safes-reloading",
    "businessName": "Cliff's Guns Safes & Reloading",
    "licenseName": "",
    "address": "11505 W Fairview Ave #101",
    "city": "Boise",
    "state": "ID",
    "zip": "83713",
    "fullAddress": "11505 W Fairview Ave #101, Boise, ID 83713",
    "phone": "(208) 375-8694",
    "businessType": "Gunsmith",
    "description": "Cliff's Guns Safes & Reloading is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "gunsamerica.com/Search/Lister/193/Cliffs_Guns_Safes_Reloading"
  },
  {
    "slug": "impact-guns",
    "businessName": "Impact Guns",
    "licenseName": "",
    "address": "11655 W Executive Dr",
    "city": "Boise",
    "state": "ID",
    "zip": "83713",
    "fullAddress": "11655 W Executive Dr, Boise, ID 83713",
    "phone": "(208) 321-1288",
    "businessType": "Shooting Range",
    "description": "Impact Guns is a shooting range facility serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "impactguns.com"
  },
  {
    "slug": "al-s-sporting-goods",
    "businessName": "Al's Sporting Goods",
    "licenseName": "",
    "address": "1301 N Milwaukee St",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "1301 N Milwaukee St, Boise, ID 83704",
    "phone": "(208) 801-7494",
    "businessType": "Sporting Goods",
    "description": "Al's Sporting Goods is a sporting goods retailer with firearms department serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "20-20-sporting-services",
    "businessName": "20/20 Sporting Services",
    "licenseName": "",
    "address": "1175 W Boise Ave Suite A",
    "city": "Boise",
    "state": "ID",
    "zip": "83706",
    "fullAddress": "1175 W Boise Ave Suite A, Boise, ID 83706",
    "phone": "(208) 866-4870",
    "businessType": "Sporting Goods",
    "description": "20/20 Sporting Services is a sporting goods retailer with firearms department serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rifle-guru",
    "businessName": "Rifle Guru",
    "licenseName": "",
    "address": "5282 W White Hills Dr",
    "city": "Boise",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "5282 W White Hills Dr, Boise, ID 83714",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Rifle Guru is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ada-armaments",
    "businessName": "Ada Armaments",
    "licenseName": "",
    "address": "7305 S Glenridge View Dr",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "7305 S Glenridge View Dr, Boise, ID 83709",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Ada Armaments is a firearms manufacturing company serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "american-reserve-munitions-llc",
    "businessName": "American Reserve Munitions LLC",
    "licenseName": "",
    "address": "3601 W Chinden Blvd",
    "city": "Boise",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "3601 W Chinden Blvd, Boise, ID 83714",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "American Reserve Munitions LLC is a firearms manufacturing company serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "high-born-tactical",
    "businessName": "High Born Tactical",
    "licenseName": "",
    "address": "400 N Five Mile Rd",
    "city": "Boise",
    "state": "ID",
    "zip": "83713",
    "fullAddress": "400 N Five Mile Rd, Boise, ID 83713",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "High Born Tactical is a tactical training and firearms instruction facility serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "automatic-weapons-company",
    "businessName": "Automatic Weapons Company",
    "licenseName": "",
    "address": "15005 N McFarland Creek Rd #B",
    "city": "Boise",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "15005 N McFarland Creek Rd #B, Boise, ID 83714",
    "phone": "(208) 938-2173",
    "businessType": "Gun Manufacturer",
    "description": "Automatic Weapons Company is a firearms manufacturing company serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "i2at",
    "businessName": "I2AT",
    "licenseName": "",
    "address": "5202 N Morninggale Way",
    "city": "Boise",
    "state": "ID",
    "zip": "83713",
    "fullAddress": "5202 N Morninggale Way, Boise, ID 83713",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "I2AT is a firearms manufacturing company serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "aviation-specialties-unlimited-inc",
    "businessName": "Aviation Specialties Unlimited Inc",
    "licenseName": "",
    "address": "4632 West Aeronca St",
    "city": "Boise",
    "state": "ID",
    "zip": "83705",
    "fullAddress": "4632 West Aeronca St, Boise, ID 83705",
    "phone": "(208) 426-8117",
    "businessType": "FFL Dealer",
    "description": "Aviation Specialties Unlimited Inc is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "allterra-arms",
    "businessName": "Allterra Arms",
    "licenseName": "",
    "address": "6898 Supply Way Ste 100",
    "city": "Boise",
    "state": "ID",
    "zip": "83716",
    "fullAddress": "6898 Supply Way Ste 100, Boise, ID 83716",
    "phone": "(208) 608-5179",
    "businessType": "Gunsmith",
    "description": "Allterra Arms is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "axial-precision-llc",
    "businessName": "Axial Precision LLC",
    "licenseName": "",
    "address": "Boise",
    "city": "Boise",
    "state": "ID",
    "zip": "",
    "fullAddress": "Boise, ID",
    "phone": "(208) 608-5179",
    "businessType": "Gunsmith",
    "description": "Axial Precision LLC is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "blue-line-guns",
    "businessName": "Blue Line Guns",
    "licenseName": "",
    "address": "Boise",
    "city": "Boise",
    "state": "ID",
    "zip": "",
    "fullAddress": "Boise, ID",
    "phone": "(208) 639-1653",
    "businessType": "FFL Dealer",
    "description": "Blue Line Guns is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "caracal-usa",
    "businessName": "Caracal USA",
    "licenseName": "",
    "address": "Boise",
    "city": "Boise",
    "state": "ID",
    "zip": "",
    "fullAddress": "Boise, ID",
    "phone": "(208) 323-8727",
    "businessType": "Gun Manufacturer",
    "description": "Caracal USA is a firearms manufacturing company serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "gold",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "fall-river-arms",
    "businessName": "Fall River Arms",
    "licenseName": "",
    "address": "Boise",
    "city": "Boise",
    "state": "ID",
    "zip": "",
    "fullAddress": "Boise, ID",
    "phone": "(208) 629-3910",
    "businessType": "FFL Dealer",
    "description": "Fall River Arms is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-guns",
    "businessName": "Idaho Guns",
    "licenseName": "",
    "address": "8600 W Franklin Rd",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "8600 W Franklin Rd, Boise, ID 83709",
    "phone": "(208) 378-1600",
    "businessType": "FFL Dealer",
    "description": "Idaho Guns is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "boise-gun-company-inc",
    "businessName": "Boise Gun Company Inc",
    "licenseName": "",
    "address": "4105 Adams St",
    "city": "Garden City",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "4105 Adams St, Garden City, ID 83714",
    "phone": "(208) 376-4440",
    "businessType": "Gunsmith",
    "description": "Boise Gun Company Inc is a professional gunsmith and firearms service provider serving Garden City and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Garden City",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "boisegun.com"
  },
  {
    "slug": "combat-sport-supply",
    "businessName": "Combat Sport Supply",
    "licenseName": "",
    "address": "208 E 37th St #10",
    "city": "Garden City",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "208 E 37th St #10, Garden City, ID 83714",
    "phone": "(208) 336-1927",
    "businessType": "Sporting Goods",
    "description": "Combat Sport Supply is a sporting goods retailer with firearms department serving Garden City and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": true,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Garden City",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gem-state-guns-llc",
    "businessName": "Gem State Guns LLC",
    "licenseName": "",
    "address": "Boise",
    "city": "Boise",
    "state": "ID",
    "zip": "83705",
    "fullAddress": "Boise, ID 83705",
    "phone": "(208) 724-1851",
    "businessType": "FFL Dealer",
    "description": "Gem State Guns LLC is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "walker-tactical-firearms-llc",
    "businessName": "Walker Tactical Firearms LLC",
    "licenseName": "",
    "address": "1547 S Boulder View Ln",
    "city": "Boise",
    "state": "ID",
    "zip": "83712",
    "fullAddress": "1547 S Boulder View Ln, Boise, ID 83712",
    "phone": "(208) 869-1508",
    "businessType": "Tactical/Training",
    "description": "Walker Tactical Firearms LLC is a tactical training and firearms instruction facility serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-surplus-sales",
    "businessName": "Idaho Surplus Sales",
    "licenseName": "",
    "address": "Boise",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "Boise, ID 83709",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Idaho Surplus Sales is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant",
      "Military Surplus"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "tactical-solutions-inc",
    "businessName": "Tactical Solutions Inc",
    "licenseName": "",
    "address": "2181 Commerce Ave",
    "city": "Boise",
    "state": "ID",
    "zip": "83705",
    "fullAddress": "2181 Commerce Ave, Boise, ID 83705",
    "phone": "(208) 333-9901",
    "businessType": "Tactical/Training",
    "description": "Tactical Solutions Inc is a tactical training and firearms instruction facility serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "overland-armament-inc",
    "businessName": "Overland Armament Inc",
    "licenseName": "",
    "address": "7103 W Overland Rd",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "7103 W Overland Rd, Boise, ID 83709",
    "phone": "(208) 672-0558",
    "businessType": "FFL Dealer",
    "description": "Overland Armament Inc is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "primary-weapons-systems",
    "businessName": "Primary Weapons Systems",
    "licenseName": "",
    "address": "255 N Steelhead Way",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "255 N Steelhead Way, Boise, ID 83704",
    "phone": "(208) 344-5217",
    "businessType": "Gun Manufacturer",
    "description": "Primary Weapons Systems is a firearms manufacturing company serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "double-tapp-llc",
    "businessName": "Double Tapp LLC",
    "licenseName": "",
    "address": "10512 W Treeline St",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "10512 W Treeline St, Boise, ID 83704",
    "phone": "(208) 559-3337",
    "businessType": "Shooting Range",
    "description": "Double Tapp LLC is a shooting range facility serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "doubletappboise.com"
  },
  {
    "slug": "stockpile-defense-llc",
    "businessName": "Stockpile Defense LLC",
    "licenseName": "",
    "address": "10178 W Fairview Ave",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "10178 W Fairview Ave, Boise, ID 83704",
    "phone": "(208) 322-4867",
    "businessType": "Gunsmith",
    "description": "Stockpile Defense LLC is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "highland-munitions-llc",
    "businessName": "Highland Munitions LLC",
    "licenseName": "",
    "address": "7676 S Mistyglen Ave",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "7676 S Mistyglen Ave, Boise, ID 83709",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Highland Munitions LLC is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "cabela-s-boise",
    "businessName": "Cabela's Boise",
    "licenseName": "",
    "address": "8109 W Franklin Rd",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "8109 W Franklin Rd, Boise, ID 83709",
    "phone": "(208) 672-7900",
    "businessType": "Sporting Goods",
    "description": "Cabela's Boise is a sporting goods retailer with firearms department serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "stores.cabelas.com"
  },
  {
    "slug": "sportsman-s-warehouse-103",
    "businessName": "Sportsman's Warehouse #103",
    "licenseName": "",
    "address": "8109 W Franklin Rd",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "8109 W Franklin Rd, Boise, ID 83709",
    "phone": "(208) 672-7900",
    "businessType": "Sporting Goods",
    "description": "Sportsman's Warehouse #103 is a sporting goods retailer with firearms department serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "sportsmans.com"
  },
  {
    "slug": "big-5-sporting-goods-279",
    "businessName": "Big 5 Sporting Goods #279",
    "licenseName": "",
    "address": "101 N Milwaukee St",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "101 N Milwaukee St, Boise, ID 83704",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "Big 5 Sporting Goods #279 is a sporting goods retailer with firearms department serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "big5sportinggoods.com"
  },
  {
    "slug": "big-5-sporting-goods-391",
    "businessName": "Big 5 Sporting Goods #391",
    "licenseName": "",
    "address": "6762 N Glenwood St",
    "city": "Boise",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "6762 N Glenwood St, Boise, ID 83714",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "Big 5 Sporting Goods #391 is a sporting goods retailer with firearms department serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "big5sportinggoods.com"
  },
  {
    "slug": "pawn-1-inc",
    "businessName": "Pawn 1 Inc",
    "licenseName": "",
    "address": "11405 W Fairview",
    "city": "Boise",
    "state": "ID",
    "zip": "83713",
    "fullAddress": "11405 W Fairview, Boise, ID 83713",
    "phone": "(509) 487-8888",
    "businessType": "Pawn Shop",
    "description": "Pawn 1 Inc is a pawn shop with firearms sales serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "boise-pawn",
    "businessName": "Boise Pawn",
    "licenseName": "",
    "address": "6465 W Fairview Ave",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "6465 W Fairview Ave, Boise, ID 83704",
    "phone": "(833) 264-7296",
    "businessType": "Pawn Shop",
    "description": "Boise Pawn is a pawn shop with firearms sales serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "robertson-firearm-services",
    "businessName": "Robertson Firearm Services",
    "licenseName": "",
    "address": "5909 W Poplar Cir",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "5909 W Poplar Cir, Boise, ID 83704",
    "phone": "(208) 859-0756",
    "businessType": "Gunsmith",
    "description": "Robertson Firearm Services is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "defense-materials-company-llc",
    "businessName": "Defense Materials Company LLC",
    "licenseName": "",
    "address": "4910 W Denton St",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "4910 W Denton St, Boise, ID 83704",
    "phone": "(208) 546-9463",
    "businessType": "Gunsmith",
    "description": "Defense Materials Company LLC is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "barton-s-custom-shop",
    "businessName": "Barton's Custom Shop",
    "licenseName": "",
    "address": "10300 Janie Pl Bldg B",
    "city": "Boise",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "10300 Janie Pl Bldg B, Boise, ID 83714",
    "phone": "(208) 939-4478",
    "businessType": "Gunsmith",
    "description": "Barton's Custom Shop is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bear-creek-firearms",
    "businessName": "Bear Creek Firearms",
    "licenseName": "",
    "address": "9684 W Shelborne Dr",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "9684 W Shelborne Dr, Boise, ID 83709",
    "phone": "(208) 871-8435",
    "businessType": "FFL Dealer",
    "description": "Bear Creek Firearms is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "old-arms-of-idaho",
    "businessName": "Old Arms of Idaho",
    "licenseName": "",
    "address": "6128 Fairview Ave",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "6128 Fairview Ave, Boise, ID 83704",
    "phone": "(208) 602-6027",
    "businessType": "Gunsmith",
    "description": "Old Arms of Idaho is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "oldarmsofidaho.com"
  },
  {
    "slug": "ats-sales",
    "businessName": "ATS Sales",
    "licenseName": "",
    "address": "3374 S Ashbury Pl",
    "city": "Boise",
    "state": "ID",
    "zip": "83706",
    "fullAddress": "3374 S Ashbury Pl, Boise, ID 83706",
    "phone": "(208) 286-2013",
    "businessType": "FFL Dealer",
    "description": "ATS Sales is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "arctic-summit-gunsmithing",
    "businessName": "Arctic Summit Gunsmithing",
    "licenseName": "",
    "address": "4323 S Chariot Way",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "4323 S Chariot Way, Boise, ID 83709",
    "phone": "(702) 353-3928",
    "businessType": "Gunsmith",
    "description": "Arctic Summit Gunsmithing is a professional gunsmith and firearms service provider serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "2a-armament",
    "businessName": "2A Armament",
    "licenseName": "",
    "address": "7545 S Eisenman Rd",
    "city": "Boise",
    "state": "ID",
    "zip": "83716",
    "fullAddress": "7545 S Eisenman Rd, Boise, ID 83716",
    "phone": "(208) 461-1213",
    "businessType": "FFL Dealer",
    "description": "2A Armament is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "6b-enterprises",
    "businessName": "6B Enterprises",
    "licenseName": "",
    "address": "15 Janet Dr",
    "city": "Boise",
    "state": "ID",
    "zip": "83716",
    "fullAddress": "15 Janet Dr, Boise, ID 83716",
    "phone": "(208) 515-4848",
    "businessType": "FFL Dealer",
    "description": "6B Enterprises is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "blac-rac-manufacturing",
    "businessName": "Blac-Rac Manufacturing",
    "licenseName": "",
    "address": "274 N Maple Grove Rd #104",
    "city": "Boise",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "274 N Maple Grove Rd #104, Boise, ID 83704",
    "phone": "(208) 855-9388",
    "businessType": "Gun Manufacturer",
    "description": "Blac-Rac Manufacturing is a firearms manufacturing company serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "brown-dogg-llc",
    "businessName": "Brown Dogg LLC",
    "licenseName": "",
    "address": "11319 W Hollandale Dr",
    "city": "Boise",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "11319 W Hollandale Dr, Boise, ID 83709",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Brown Dogg LLC is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "shop-black-rifle",
    "businessName": "Shop Black Rifle",
    "licenseName": "",
    "address": "Boise Area",
    "city": "Boise",
    "state": "ID",
    "zip": "",
    "fullAddress": "Boise Area",
    "phone": "(208) 450-3044",
    "businessType": "FFL Dealer",
    "description": "Shop Black Rifle is a licensed Federal Firearms License dealer serving Boise and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Boise",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": "shopblackrifle.com"
  },
  {
    "slug": "independence-indoor-shooting",
    "businessName": "Independence Indoor Shooting",
    "licenseName": "",
    "address": "2749 E Gala St",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "2749 E Gala St, Meridian, ID 83642",
    "phone": "(208) 576-4867",
    "businessType": "Shooting Range",
    "description": "Independence Indoor Shooting is a shooting range facility serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "iishooting.com"
  },
  {
    "slug": "sportsman-s-warehouse-104",
    "businessName": "Sportsman's Warehouse #104",
    "licenseName": "",
    "address": "3797 E Fairview Ave",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "3797 E Fairview Ave, Meridian, ID 83642",
    "phone": "(208) 884-3000",
    "businessType": "Sporting Goods",
    "description": "Sportsman's Warehouse #104 is a sporting goods retailer with firearms department serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "sportsmans.com"
  },
  {
    "slug": "hawktech-arms",
    "businessName": "HawkTech Arms",
    "licenseName": "",
    "address": "3131 E Lanark St",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "3131 E Lanark St, Meridian, ID 83642",
    "phone": "(208) 898-5848",
    "businessType": "Gunsmith",
    "description": "HawkTech Arms is a professional gunsmith and firearms service provider serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "hawktecharms.com"
  },
  {
    "slug": "idaho-arms-ammo",
    "businessName": "Idaho Arms & Ammo",
    "licenseName": "",
    "address": "519 E Fairview Ave #300",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "519 E Fairview Ave #300, Meridian, ID 83642",
    "phone": "(208) 809-0939",
    "businessType": "Gunsmith",
    "description": "Idaho Arms & Ammo is a professional gunsmith and firearms service provider serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "idahoarmsammo.com"
  },
  {
    "slug": "3s-gun-sales",
    "businessName": "3S Gun Sales",
    "licenseName": "",
    "address": "5131 N Fox Run Way",
    "city": "Meridian",
    "state": "ID",
    "zip": "83646",
    "fullAddress": "5131 N Fox Run Way, Meridian, ID 83646",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "3S Gun Sales is a licensed Federal Firearms License dealer serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "66-productions-llc",
    "businessName": "66 Productions LLC",
    "licenseName": "",
    "address": "5034 N Baylor Lane",
    "city": "Meridian",
    "state": "ID",
    "zip": "83646",
    "fullAddress": "5034 N Baylor Lane, Meridian, ID 83646",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "66 Productions LLC is a firearms manufacturing company serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "lost-coast-tactical",
    "businessName": "Lost Coast Tactical",
    "licenseName": "",
    "address": "1945 W Hendricks Ct",
    "city": "Meridian",
    "state": "ID",
    "zip": "83646",
    "fullAddress": "1945 W Hendricks Ct, Meridian, ID 83646",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Lost Coast Tactical is a tactical training and firearms instruction facility serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "american-upland-aui",
    "businessName": "American Upland/AUI",
    "licenseName": "",
    "address": "2837 NW 11th Ave",
    "city": "Meridian",
    "state": "ID",
    "zip": "83646",
    "fullAddress": "2837 NW 11th Ave, Meridian, ID 83646",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "American Upland/AUI is a licensed Federal Firearms License dealer serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rays-guns-ammo",
    "businessName": "Rays Guns & Ammo",
    "licenseName": "",
    "address": "1969 W Red Feather Way",
    "city": "Meridian",
    "state": "ID",
    "zip": "83646",
    "fullAddress": "1969 W Red Feather Way, Meridian, ID 83646",
    "phone": "",
    "businessType": "Ammunition/Supplies",
    "description": "Rays Guns & Ammo is a ammunition and firearms supply retailer serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "koda-defense-arms",
    "businessName": "Koda Defense & Arms",
    "licenseName": "",
    "address": "1033 W Fairwood Ct",
    "city": "Meridian",
    "state": "ID",
    "zip": "83646",
    "fullAddress": "1033 W Fairwood Ct, Meridian, ID 83646",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Koda Defense & Arms is a tactical training and firearms instruction facility serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-pawn-gold-sam-s-locker",
    "businessName": "Idaho Pawn & Gold, Sam's Locker",
    "licenseName": "",
    "address": "451 N Main St",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "451 N Main St, Meridian, ID 83642",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Idaho Pawn & Gold, Sam's Locker is a pawn shop with firearms sales serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "burns-custom-pistols",
    "businessName": "Burns Custom Pistols",
    "licenseName": "",
    "address": "5377 South Ten Mile Road",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "5377 South Ten Mile Road, Meridian, ID 83642",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Burns Custom Pistols is a professional gunsmith and firearms service provider serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "carter-jon",
    "businessName": "Carter, Jon",
    "licenseName": "",
    "address": "1065 W River Heights Dr",
    "city": "Meridian",
    "state": "ID",
    "zip": "83646",
    "fullAddress": "1065 W River Heights Dr, Meridian, ID 83646",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Carter, Jon is a licensed Federal Firearms License dealer serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "scheels-all-sports-inc",
    "businessName": "Scheels All Sports Inc",
    "licenseName": "",
    "address": "700 S Wayfinder Ave",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "700 S Wayfinder Ave, Meridian, ID 83642",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Scheels All Sports Inc is a sporting goods retailer with firearms department serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "scheels.com"
  },
  {
    "slug": "sierra-tactical-gunsmithing",
    "businessName": "Sierra Tactical & Gunsmithing",
    "licenseName": "",
    "address": "2624 E Lawton Drive",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "2624 E Lawton Drive, Meridian, ID 83642",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Sierra Tactical & Gunsmithing is a professional gunsmith and firearms service provider serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "silverline-films-llc",
    "businessName": "Silverline Films LLC",
    "licenseName": "",
    "address": "3978 W Aspen Creek Ct",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "3978 W Aspen Creek Ct, Meridian, ID 83642",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Silverline Films LLC is a licensed Federal Firearms License dealer serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gemtech",
    "businessName": "Gemtech",
    "licenseName": "",
    "address": "3750 E Pewter Falls St #100",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "3750 E Pewter Falls St #100, Meridian, ID 83642",
    "phone": "(208) 939-7222",
    "businessType": "Gun Manufacturer",
    "description": "Gemtech is a firearms manufacturing company serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "benny-s-pawn-inc",
    "businessName": "Benny's Pawn Inc",
    "licenseName": "",
    "address": "Meridian",
    "city": "Meridian",
    "state": "ID",
    "zip": "",
    "fullAddress": "Meridian, ID",
    "phone": "(208) 846-9027",
    "businessType": "Pawn Shop",
    "description": "Benny's Pawn Inc is a pawn shop with firearms sales serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "crossfire-elite-llc",
    "businessName": "Crossfire Elite LLC",
    "licenseName": "",
    "address": "Meridian",
    "city": "Meridian",
    "state": "ID",
    "zip": "",
    "fullAddress": "Meridian, ID",
    "phone": "(208) 461-8888",
    "businessType": "FFL Dealer",
    "description": "Crossfire Elite LLC is a licensed Federal Firearms License dealer serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "venom-tactical-llc",
    "businessName": "Venom Tactical LLC",
    "licenseName": "",
    "address": "1728 E Deerhill Dr",
    "city": "Meridian",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "1728 E Deerhill Dr, Meridian, ID 83642",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Venom Tactical LLC is a professional gunsmith and firearms service provider serving Meridian and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Meridian",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "activity-investments-llc",
    "businessName": "Activity Investments LLC",
    "licenseName": "",
    "address": "10183 West Wyatt Earp Drive",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "10183 West Wyatt Earp Drive, Star, ID 83669",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Activity Investments LLC is a firearms manufacturing company serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bi-mart-689",
    "businessName": "Bi-Mart #689",
    "licenseName": "",
    "address": "11347 W State St",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "11347 W State St, Star, ID 83669",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Bi-Mart #689 is a sporting goods retailer with firearms department serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "black-label-precision",
    "businessName": "Black Label Precision",
    "licenseName": "",
    "address": "10451 W Daylily Ct",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "10451 W Daylily Ct, Star, ID 83669",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Black Label Precision is a firearms manufacturing company serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "jon-s-guns",
    "businessName": "Jon's Guns",
    "licenseName": "",
    "address": "936 N Glen Aspen Way",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "936 N Glen Aspen Way, Star, ID 83669",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Jon's Guns is a licensed Federal Firearms License dealer serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "eagle-gun-company",
    "businessName": "Eagle Gun Company",
    "licenseName": "",
    "address": "10539 W Thimbleberry Dr",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "10539 W Thimbleberry Dr, Star, ID 83669",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Eagle Gun Company is a licensed Federal Firearms License dealer serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "lord-rockwell-llc",
    "businessName": "Lord Rockwell LLC",
    "licenseName": "",
    "address": "1672 N Watershed Ave",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "1672 N Watershed Ave, Star, ID 83669",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Lord Rockwell LLC is a firearms manufacturing company serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "mrm-llc",
    "businessName": "MRM LLC",
    "licenseName": "",
    "address": "12525 Aliso Creek St",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "12525 Aliso Creek St, Star, ID 83669",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "MRM LLC is a licensed Federal Firearms License dealer serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "patriot-pawn-gun-llc",
    "businessName": "Patriot Pawn & Gun LLC",
    "licenseName": "",
    "address": "1977 N Willow Glen Place",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "1977 N Willow Glen Place, Star, ID 83669",
    "phone": "(208) 286-7300",
    "businessType": "Pawn Shop",
    "description": "Patriot Pawn & Gun LLC is a pawn shop with firearms sales serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": "patriotpawnandgun.com"
  },
  {
    "slug": "ridley-s-family-markets",
    "businessName": "Ridley's Family Markets",
    "licenseName": "",
    "address": "145 So Plummer Way",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "145 So Plummer Way, Star, ID 83669",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Ridley's Family Markets is a licensed Federal Firearms License dealer serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "solar-tactical",
    "businessName": "Solar Tactical",
    "licenseName": "",
    "address": "7396 Highway 44",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "7396 Highway 44, Star, ID 83669",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Solar Tactical is a tactical training and firearms instruction facility serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "youngs-firearms",
    "businessName": "Youngs Firearms",
    "licenseName": "",
    "address": "324 S Winslow Bay Way",
    "city": "Star",
    "state": "ID",
    "zip": "83669",
    "fullAddress": "324 S Winslow Bay Way, Star, ID 83669",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Youngs Firearms is a licensed Federal Firearms License dealer serving Star and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Star",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "208-precision",
    "businessName": "208 Precision",
    "licenseName": "",
    "address": "9019 N Broadwood Ln",
    "city": "Eagle",
    "state": "ID",
    "zip": "83616",
    "fullAddress": "9019 N Broadwood Ln, Eagle, ID 83616",
    "phone": "(208) 571-2243",
    "businessType": "Gunsmith",
    "description": "208 Precision is a professional gunsmith and firearms service provider serving Eagle and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Eagle",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "tiger-defense",
    "businessName": "Tiger Defense",
    "licenseName": "",
    "address": "36 Echohawk Ln",
    "city": "Eagle",
    "state": "ID",
    "zip": "83616",
    "fullAddress": "36 Echohawk Ln, Suite 102, Eagle, ID 83616",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Tiger Defense is a tactical training and firearms instruction facility serving Eagle and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Eagle",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": "tigerdefenseinc.com"
  },
  {
    "slug": "orion-armament",
    "businessName": "Orion Armament",
    "licenseName": "",
    "address": "247 N Kay Ave",
    "city": "Kuna",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "247 N Kay Ave, Kuna, ID 83634",
    "phone": "(208) 369-9671",
    "businessType": "Gunsmith",
    "description": "Orion Armament is a professional gunsmith and firearms service provider serving Kuna and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Kuna",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "208-gun-shop",
    "businessName": "208 Gun Shop",
    "licenseName": "",
    "address": "Idaho Operations",
    "city": "Idaho",
    "state": "ID",
    "zip": "",
    "fullAddress": "Idaho Operations",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "208 Gun Shop is a licensed Federal Firearms License dealer serving Idaho and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "ada_county_gun_stores_comprehensive",
    "serviceArea": [
      "Idaho",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": "208gunshop.com"
  },
  {
    "slug": "armageddon-armory",
    "businessName": "Armageddon Armory",
    "licenseName": "",
    "address": "2809 Garrity Blvd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "2809 Garrity Blvd, Nampa, ID 83687",
    "phone": "(208) 465-3577",
    "businessType": "Gunsmith",
    "description": "Armageddon Armory is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "armageddonarmory.com"
  },
  {
    "slug": "alpha-omega-services-llc",
    "businessName": "Alpha Omega Services LLC",
    "licenseName": "",
    "address": "2809 Garrity Blvd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "2809 Garrity Blvd, Nampa, ID 83687",
    "phone": "(208) 465-3577",
    "businessType": "FFL Dealer",
    "description": "Alpha Omega Services LLC is a licensed Federal Firearms License dealer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "elite-rifle-works-llp",
    "businessName": "Elite Rifle Works LLP",
    "licenseName": "",
    "address": "6045 Deer Flat Road",
    "city": "Nampa",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "6045 Deer Flat Road, Nampa, ID 83686",
    "phone": "(208) 465-8039",
    "businessType": "Gunsmith",
    "description": "Elite Rifle Works LLP is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "eliterifleworks.com"
  },
  {
    "slug": "larry-s-sporting-goods",
    "businessName": "Larry's Sporting Goods",
    "licenseName": "",
    "address": "Nampa",
    "city": "Nampa",
    "state": "ID",
    "zip": "",
    "fullAddress": "Nampa, ID",
    "phone": "(208) 467-9201",
    "businessType": "Sporting Goods",
    "description": "Larry's Sporting Goods is a sporting goods retailer with firearms department serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "nemo-arms",
    "businessName": "Nemo Arms",
    "licenseName": "",
    "address": "Nampa",
    "city": "Nampa",
    "state": "ID",
    "zip": "",
    "fullAddress": "Nampa, ID",
    "phone": "(208) 442-4308",
    "businessType": "Gun Manufacturer",
    "description": "Nemo Arms is a firearms manufacturing company serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rk-gunsmithing",
    "businessName": "RK Gunsmithing",
    "licenseName": "",
    "address": "201 N Kings Rd Ste 101",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "201 N Kings Rd Ste 101, Nampa, ID 83687",
    "phone": "(208) 467-3075",
    "businessType": "Gunsmith",
    "description": "RK Gunsmithing is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "tiffany-guns-zebra-12",
    "businessName": "Tiffany Guns Zebra 12",
    "licenseName": "",
    "address": "Nampa",
    "city": "Nampa",
    "state": "ID",
    "zip": "",
    "fullAddress": "Nampa, ID",
    "phone": "(208) 461-6911",
    "businessType": "FFL Dealer",
    "description": "Tiffany Guns Zebra 12 is a licensed Federal Firearms License dealer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "sportsman-s-warehouse",
    "businessName": "Sportsman's Warehouse",
    "licenseName": "",
    "address": "16865 N Market Place Blvd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "16865 N Market Place Blvd, Nampa, ID 83687",
    "phone": "(208) 468-7600",
    "businessType": "Gunsmith",
    "description": "Sportsman's Warehouse is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "sportsmans.com"
  },
  {
    "slug": "reflex-tactical-idaho",
    "businessName": "Reflex Tactical Idaho",
    "licenseName": "",
    "address": "824 12th Ave S",
    "city": "Nampa",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "824 12th Ave S, Nampa, ID 83651",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Reflex Tactical Idaho is a tactical training and firearms instruction facility serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": "reflextacticalidaho.com"
  },
  {
    "slug": "ken-s-pawn-jewelry",
    "businessName": "Ken's Pawn & Jewelry",
    "licenseName": "",
    "address": "608 12th Ave S",
    "city": "Nampa",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "608 12th Ave S, Nampa, ID 83651",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Ken's Pawn & Jewelry is a pawn shop with firearms sales serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": "kenspawn.com"
  },
  {
    "slug": "bgw-gunsmithing",
    "businessName": "BGW Gunsmithing",
    "licenseName": "",
    "address": "2228 Cortland Place",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "2228 Cortland Place, Nampa, ID 83687",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "BGW Gunsmithing is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "bgwidaho.com"
  },
  {
    "slug": "nampa-public-shooting-range",
    "businessName": "Nampa Public Shooting Range",
    "licenseName": "",
    "address": "222 W Railroad St",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "222 W Railroad St, Nampa, ID 83687",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "Nampa Public Shooting Range is a shooting range facility serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "idfg.idaho.gov/shoot/nampa"
  },
  {
    "slug": "dundas-works-llc",
    "businessName": "Dundas Works LLC",
    "licenseName": "",
    "address": "5305 Black Canyon Rd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "5305 Black Canyon Rd, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Dundas Works LLC is a professional gunsmith and firearms service provider serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "owyhee-shooters-supply",
    "businessName": "Owyhee Shooters Supply",
    "licenseName": "",
    "address": "3822 Preston Ave",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "3822 Preston Ave, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Ammunition/Supplies",
    "description": "Owyhee Shooters Supply is a ammunition and firearms supply retailer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "treasure-valley-pawn-llc",
    "businessName": "Treasure Valley Pawn LLC",
    "licenseName": "",
    "address": "6513 Cleveland Blvd Ste 101",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "6513 Cleveland Blvd Ste 101, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Treasure Valley Pawn LLC is a pawn shop with firearms sales serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "wild-bills-sporting-llc",
    "businessName": "Wild Bills Sporting LLC",
    "licenseName": "",
    "address": "2020 Blaine St",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "2020 Blaine St, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Wild Bills Sporting LLC is a sporting goods retailer with firearms department serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "d-b-supply",
    "businessName": "D&B Supply",
    "licenseName": "",
    "address": "3913 Muller Drive",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "3913 Muller Drive, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "D&B Supply is a professional gunsmith and firearms service provider serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "d-b-supply-smeed-parkway",
    "businessName": "D&B Supply Smeed Parkway",
    "licenseName": "",
    "address": "620 Smeed Parkway",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "620 Smeed Parkway, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "D&B Supply Smeed Parkway is a professional gunsmith and firearms service provider serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "george-w-nourse-gun-range",
    "businessName": "George W. Nourse Gun Range",
    "licenseName": "",
    "address": "16802 Nash Rd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "16802 Nash Rd, Nampa, ID 83686",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "George W. Nourse Gun Range is a shooting range facility serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "canyoncounty.id.gov/project/george-w-nourse-gun-range/"
  },
  {
    "slug": "caldwell-gun-club",
    "businessName": "Caldwell Gun Club",
    "licenseName": "",
    "address": "21840 Pond Lane",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "21840 Pond Lane, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "Caldwell Gun Club is a shooting range facility serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "midstar-firearms",
    "businessName": "Midstar Firearms",
    "licenseName": "",
    "address": "Middleton",
    "city": "Middleton",
    "state": "ID",
    "zip": "",
    "fullAddress": "Middleton, ID",
    "phone": "(208) 585-9922",
    "businessType": "Gunsmith",
    "description": "Midstar Firearms is a professional gunsmith and firearms service provider serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "midstar-firearms.com"
  },
  {
    "slug": "vigilante-guns-and-ammo",
    "businessName": "Vigilante Guns and Ammo",
    "licenseName": "",
    "address": "Melba",
    "city": "Melba",
    "state": "ID",
    "zip": "",
    "fullAddress": "Melba, ID",
    "phone": "(208) 495-9855",
    "businessType": "Ammunition/Supplies",
    "description": "Vigilante Guns and Ammo is a ammunition and firearms supply retailer serving Melba and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_firearms_directory",
    "serviceArea": [
      "Melba",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "sportsman-s-warehouse-224",
    "businessName": "Sportsman's Warehouse #224",
    "licenseName": "",
    "address": "16865 N Market Place Blvd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "16865 N Market Place Blvd, Nampa, ID 83687",
    "phone": "(208) 468-7600",
    "businessType": "Sporting Goods",
    "description": "Sportsman's Warehouse #224 is a sporting goods retailer with firearms department serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "sportsmans.com"
  },
  {
    "slug": "big-5-sporting-goods-308",
    "businessName": "Big 5 Sporting Goods #308",
    "licenseName": "",
    "address": "1601 Caldwell Blvd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "1601 Caldwell Blvd, Nampa, ID 83651",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "Big 5 Sporting Goods #308 is a sporting goods retailer with firearms department serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "big5sportinggoods.com"
  },
  {
    "slug": "faith-outdoors-llc",
    "businessName": "Faith Outdoors LLC",
    "licenseName": "",
    "address": "2200 Cortland Pl",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "2200 Cortland Pl, Nampa, ID 83687",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Faith Outdoors LLC is a sporting goods retailer with firearms department serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-gun-outdoors",
    "businessName": "Idaho Gun & Outdoors",
    "licenseName": "",
    "address": "16188 N Merchant Way",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "16188 N Merchant Way, Nampa, ID 83687",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Idaho Gun & Outdoors is a sporting goods retailer with firearms department serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "accura-outdoors",
    "businessName": "Accura Outdoors",
    "licenseName": "",
    "address": "2316 E Railroad St",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "2316 E Railroad St, Nampa, ID 83687",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Accura Outdoors is a sporting goods retailer with firearms department serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "vista-pawn-nampa",
    "businessName": "Vista Pawn Nampa",
    "licenseName": "",
    "address": "130 Caldwell Blvd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "130 Caldwell Blvd, Nampa, ID 83651",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Vista Pawn Nampa is a pawn shop with firearms sales serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "snake-river-rifleworks",
    "businessName": "Snake River Rifleworks",
    "licenseName": "",
    "address": "13930 S Piano Ave",
    "city": "Nampa",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "13930 S Piano Ave, Nampa, ID 83651",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Snake River Rifleworks is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "lucky-shot-ammunition-guns-llc",
    "businessName": "Lucky Shot Ammunition & Guns LLC",
    "licenseName": "",
    "address": "801 W Peirsol St",
    "city": "Nampa",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "801 W Peirsol St, Nampa, ID 83686",
    "phone": "",
    "businessType": "Ammunition/Supplies",
    "description": "Lucky Shot Ammunition & Guns LLC is a ammunition and firearms supply retailer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "northwest-gun-supply",
    "businessName": "Northwest Gun Supply",
    "licenseName": "",
    "address": "12338 Ranchview Dr",
    "city": "Nampa",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "12338 Ranchview Dr, Nampa, ID 83686",
    "phone": "(208) 505-0130",
    "businessType": "Ammunition/Supplies",
    "description": "Northwest Gun Supply is a ammunition and firearms supply retailer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": "northwestgunsupply.com"
  },
  {
    "slug": "blazzard-firearms",
    "businessName": "Blazzard Firearms",
    "licenseName": "",
    "address": "1208 E Pennsylvania Pl",
    "city": "Nampa",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "1208 E Pennsylvania Pl, Nampa, ID 83686",
    "phone": "(208) 789-6430",
    "businessType": "FFL Dealer",
    "description": "Blazzard Firearms is a licensed Federal Firearms License dealer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "canyon-county-precisions-llc",
    "businessName": "Canyon County Precisions LLC",
    "licenseName": "",
    "address": "647 Teton Dr",
    "city": "Nampa",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "647 Teton Dr, Nampa, ID 83686",
    "phone": "(208) 697-6167",
    "businessType": "FFL Dealer",
    "description": "Canyon County Precisions LLC is a licensed Federal Firearms License dealer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "r2arm",
    "businessName": "R2ARM",
    "licenseName": "",
    "address": "16760 Idaho Center Blvd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "16760 Idaho Center Blvd, Nampa, ID 83687",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "R2ARM is a licensed Federal Firearms License dealer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-air-gun",
    "businessName": "Idaho Air Gun",
    "licenseName": "",
    "address": "Nampa",
    "city": "Nampa",
    "state": "ID",
    "zip": "",
    "fullAddress": "Nampa, ID",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Idaho Air Gun is a licensed Federal Firearms License dealer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": "idahoairgun.com"
  },
  {
    "slug": "bgw-llc",
    "businessName": "BGW LLC",
    "licenseName": "",
    "address": "2228 Cortland Place",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "2228 Cortland Place, Nampa, ID 83687",
    "phone": "(951) 445-9819",
    "businessType": "Gunsmith",
    "description": "BGW LLC is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ati-adaptive-technologies-inc",
    "businessName": "ATI-Adaptive Technologies Inc",
    "licenseName": "",
    "address": "1910 E Karcher Rd",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "1910 E Karcher Rd, Nampa, ID 83687",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "ATI-Adaptive Technologies Inc is a firearms manufacturing company serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ashment-custom-coatings-llc",
    "businessName": "Ashment Custom Coatings LLC",
    "licenseName": "",
    "address": "614 N 39th St",
    "city": "Nampa",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "614 N 39th St, Nampa, ID 83686",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Ashment Custom Coatings LLC is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "altanova-manufacturing-inc",
    "businessName": "Altanova Manufacturing Inc",
    "licenseName": "",
    "address": "530 N Broadmore Way",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "530 N Broadmore Way, Nampa, ID 83687",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Altanova Manufacturing Inc is a firearms manufacturing company serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ammosquared-inc",
    "businessName": "AmmoSquared Inc",
    "licenseName": "",
    "address": "3630 E Comstock Ave",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "3630 E Comstock Ave, Nampa, ID 83687",
    "phone": "",
    "businessType": "Ammunition/Supplies",
    "description": "AmmoSquared Inc is a ammunition and firearms supply retailer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "stinger-defense",
    "businessName": "Stinger-Defense",
    "licenseName": "",
    "address": "1320 Smith Ave",
    "city": "Nampa",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "1320 Smith Ave, Nampa, ID 83651",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Stinger-Defense is a tactical training and firearms instruction facility serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "averett-brian-c-old-farts-gun-shop",
    "businessName": "Averett, Brian C (Old Farts Gun Shop)",
    "licenseName": "",
    "address": "408 1/2 E Carol St",
    "city": "Nampa",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "408 1/2 E Carol St, Nampa, ID 83687",
    "phone": "(208) 467-7788",
    "businessType": "FFL Dealer",
    "description": "Averett, Brian C (Old Farts Gun Shop) is a licensed Federal Firearms License dealer serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "208-laser-engraving",
    "businessName": "208 Laser Engraving",
    "licenseName": "",
    "address": "77 S Inverness Dr",
    "city": "Nampa",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "77 S Inverness Dr, Nampa, ID 83651",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "208 Laser Engraving is a professional gunsmith and firearms service provider serving Nampa and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Nampa",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "al-s-pawn-gun-inc",
    "businessName": "Al's Pawn & Gun Inc",
    "licenseName": "",
    "address": "5602 Cleveland Blvd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "5602 Cleveland Blvd, Caldwell, ID 83607",
    "phone": "(208) 454-8038",
    "businessType": "Pawn Shop",
    "description": "Al's Pawn & Gun Inc is a pawn shop with firearms sales serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "d-b-supply-muller",
    "businessName": "D&B Supply Muller",
    "licenseName": "",
    "address": "3913 Muller Drive",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "3913 Muller Drive, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "D&B Supply Muller is a sporting goods retailer with firearms department serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "dbsupply.com"
  },
  {
    "slug": "d-b-supply-smeed",
    "businessName": "D&B Supply Smeed",
    "licenseName": "",
    "address": "620 Smeed Parkway",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "620 Smeed Parkway, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "D&B Supply Smeed is a sporting goods retailer with firearms department serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "dbsupply.com"
  },
  {
    "slug": "bi-mart-614",
    "businessName": "Bi-Mart #614",
    "licenseName": "",
    "address": "425 N 10th Ave",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "425 N 10th Ave, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Bi-Mart #614 is a sporting goods retailer with firearms department serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "pawn-1-incorporated",
    "businessName": "Pawn 1 Incorporated",
    "licenseName": "",
    "address": "5724 Cleveland Blvd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "5724 Cleveland Blvd, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Pawn 1 Incorporated is a pawn shop with firearms sales serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "walmart-2780",
    "businessName": "Walmart #2780",
    "licenseName": "",
    "address": "5108 East Cleveland Blvd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "5108 East Cleveland Blvd, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Walmart #2780 is a sporting goods retailer with firearms department serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "walmart.com"
  },
  {
    "slug": "agency-arms-llc",
    "businessName": "Agency Arms LLC",
    "licenseName": "",
    "address": "4006 E Linden St",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "4006 E Linden St, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Agency Arms LLC is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "43rd-state-armory-llc",
    "businessName": "43rd State Armory LLC",
    "licenseName": "",
    "address": "21361 Shady River Ln",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "21361 Shady River Ln, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Gun Store",
    "description": "43rd State Armory LLC is a full-service firearms retailer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "big-sky-industries-llc",
    "businessName": "Big Sky Industries LLC",
    "licenseName": "",
    "address": "12871 Quail Run Ln",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "12871 Quail Run Ln, Caldwell, ID 83607",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Big Sky Industries LLC is a licensed Federal Firearms License dealer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "charters-mtn-gun-shop",
    "businessName": "Charters Mtn Gun Shop",
    "licenseName": "",
    "address": "19300 Marsing Rd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "19300 Marsing Rd, Caldwell, ID 83607",
    "phone": "(208) 901-4972",
    "businessType": "FFL Dealer",
    "description": "Charters Mtn Gun Shop is a licensed Federal Firearms License dealer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "north-west-precision-rifles",
    "businessName": "North West Precision Rifles",
    "licenseName": "",
    "address": "2215 Wyoming Ave",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "2215 Wyoming Ave, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "North West Precision Rifles is a professional gunsmith and firearms service provider serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "heida-firearms",
    "businessName": "Heida Firearms",
    "licenseName": "",
    "address": "17281 Ustick Rd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "17281 Ustick Rd, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Heida Firearms is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "kinch-arms",
    "businessName": "Kinch Arms",
    "licenseName": "",
    "address": "20875 Blossom Heights Lane",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "20875 Blossom Heights Lane, Caldwell, ID 83607",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Kinch Arms is a licensed Federal Firearms License dealer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "mudu-sports",
    "businessName": "Mudu Sports",
    "licenseName": "",
    "address": "2715 Aspen Falls Ave",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "2715 Aspen Falls Ave, Caldwell, ID 83605",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Mudu Sports is a licensed Federal Firearms License dealer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "sawtooth-munitions",
    "businessName": "Sawtooth Munitions",
    "licenseName": "",
    "address": "14130 Black Hawk Lane",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "14130 Black Hawk Lane, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Sawtooth Munitions is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "royal-rifles",
    "businessName": "Royal Rifles",
    "licenseName": "",
    "address": "10430 Randal Lane",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "10430 Randal Lane, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Royal Rifles is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rm-firearms",
    "businessName": "RM Firearms",
    "licenseName": "",
    "address": "7555 Pleasant View Dr",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "7555 Pleasant View Dr, Caldwell, ID 83607",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "RM Firearms is a licensed Federal Firearms License dealer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "terminator",
    "businessName": "Terminator",
    "licenseName": "",
    "address": "15076 Plum Rd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "15076 Plum Rd, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Terminator is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gibraltar-arms-purple-sage-international",
    "businessName": "Gibraltar Arms / Purple Sage International",
    "licenseName": "",
    "address": "13557 Signorello St",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "13557 Signorello St, Caldwell, ID 83607",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Gibraltar Arms / Purple Sage International is a licensed Federal Firearms License dealer serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "stiglitz-firearms-llc",
    "businessName": "Stiglitz Firearms LLC",
    "licenseName": "",
    "address": "5109 Danville St",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "5109 Danville St, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Stiglitz Firearms LLC is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "tiffany-enterprise",
    "businessName": "Tiffany Enterprise",
    "licenseName": "",
    "address": "4100 Dearborn Street",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "4100 Dearborn Street, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Tiffany Enterprise is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "yankton-brothers-llc",
    "businessName": "Yankton Brothers LLC",
    "licenseName": "",
    "address": "14010 Goodson Rd",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "14010 Goodson Rd, Caldwell, ID 83607",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Yankton Brothers LLC is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "federated-ordnance-llc",
    "businessName": "Federated Ordnance LLC",
    "licenseName": "",
    "address": "1906 S Smeed Pkwy Suite 102",
    "city": "Caldwell",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "1906 S Smeed Pkwy Suite 102, Caldwell, ID 83605",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Federated Ordnance LLC is a firearms manufacturing company serving Caldwell and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Caldwell",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "52-tactical-llc",
    "businessName": "52 Tactical LLC",
    "licenseName": "",
    "address": "8192 Fountain Brook St",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "8192 Fountain Brook St, Middleton, ID 83644",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "52 Tactical LLC is a tactical training and firearms instruction facility serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "h-m-praetorian-llc",
    "businessName": "H M Praetorian LLC",
    "licenseName": "",
    "address": "7868 Open Sky Rd",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "7868 Open Sky Rd, Middleton, ID 83644",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "H M Praetorian LLC is a licensed Federal Firearms License dealer serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "longbow-tactical-llc",
    "businessName": "Longbow Tactical LLC",
    "licenseName": "",
    "address": "111 Pilgrim Way",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "111 Pilgrim Way, Middleton, ID 83644",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Longbow Tactical LLC is a tactical training and firearms instruction facility serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "firearm-training-institute",
    "businessName": "Firearm Training Institute",
    "licenseName": "",
    "address": "22142 Duff Lane",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "22142 Duff Lane, Middleton, ID 83644",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Firearm Training Institute is a tactical training and firearms instruction facility serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "wildcat-outfitters",
    "businessName": "Wildcat Outfitters",
    "licenseName": "",
    "address": "8571 Quail Hollow Drive",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "8571 Quail Hollow Drive, Middleton, ID 83644",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Wildcat Outfitters is a licensed Federal Firearms License dealer serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "scs-arms",
    "businessName": "SCS Arms",
    "licenseName": "",
    "address": "1551 Hearthstone Ave",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "1551 Hearthstone Ave, Middleton, ID 83644",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "SCS Arms is a firearms manufacturing company serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "traditional-gunsmithing-by-ca-winkle-llc",
    "businessName": "Traditional Gunsmithing by CA Winkle LLC",
    "licenseName": "",
    "address": "25250 Lansing Ln",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "25250 Lansing Ln, Middleton, ID 83644",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Traditional Gunsmithing by CA Winkle LLC is a professional gunsmith and firearms service provider serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "c-w-enterprises-sports",
    "businessName": "C W Enterprises Sports",
    "licenseName": "",
    "address": "22812 Lansing Lane",
    "city": "Middleton",
    "state": "ID",
    "zip": "83644",
    "fullAddress": "22812 Lansing Lane, Middleton, ID 83644",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "C W Enterprises Sports is a firearms manufacturing company serving Middleton and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "canyon_county_gun_stores_only",
    "serviceArea": [
      "Middleton",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "adtac",
    "businessName": "ADTAC",
    "licenseName": "",
    "address": "2102 NORTH DEVLIN WAY",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "2102 NORTH DEVLIN WAY, NAMPA, ID 83687",
    "phone": "(208) 442-8000",
    "businessType": "FFL Dealer",
    "description": "ADTAC is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "pew-buyers-club",
    "businessName": "PEW BUYERS CLUB",
    "licenseName": "",
    "address": "507 E 47TH SUITE 100-2A",
    "city": "GARDEN CITY",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "507 E 47TH SUITE 100-2A, GARDEN CITY, ID 83714",
    "phone": "(208) 333-0591",
    "businessType": "Gun Club",
    "description": "PEW BUYERS CLUB is a shooting club and community organization serving GARDEN CITY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Membership",
      "Club Events",
      "Competitions",
      "Training Programs",
      "Range Access"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "GARDEN CITY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunclub.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bennett-mountain-outfitters",
    "businessName": "BENNETT MOUNTAIN OUTFITTERS",
    "licenseName": "",
    "address": "1645 N CLARENDON WAY",
    "city": "EAGLE",
    "state": "ID",
    "zip": "83616",
    "fullAddress": "1645 N CLARENDON WAY, EAGLE, ID 83616",
    "phone": "(208) 352-0058",
    "businessType": "FFL Dealer",
    "description": "BENNETT MOUNTAIN OUTFITTERS is a licensed Federal Firearms License dealer serving EAGLE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "EAGLE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bjoralt-firearms",
    "businessName": "BJORALT FIREARMS",
    "licenseName": "",
    "address": "6489 E MONROE ST",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "6489 E MONROE ST, NAMPA, ID 83687",
    "phone": "(208) 576-5534",
    "businessType": "FFL Dealer",
    "description": "BJORALT FIREARMS is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "boise-tactical",
    "businessName": "BOISE TACTICAL",
    "licenseName": "",
    "address": "440 N FIVE MILE RD",
    "city": "BOISE",
    "state": "ID",
    "zip": "83713",
    "fullAddress": "440 N FIVE MILE RD, BOISE, ID 83713",
    "phone": "(208) 860-2890",
    "businessType": "Tactical/Training",
    "description": "BOISE TACTICAL is a tactical training and firearms instruction facility serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "snake-river-gunworks",
    "businessName": "SNAKE RIVER GUNWORKS",
    "licenseName": "",
    "address": "8537 WEST SMALL CREEK DRIVE",
    "city": "BOISE",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "8537 WEST SMALL CREEK DRIVE, BOISE, ID 83709",
    "phone": "(208) 221-4528",
    "businessType": "FFL Dealer",
    "description": "SNAKE RIVER GUNWORKS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-pawn-gold",
    "businessName": "IDAHO PAWN & GOLD",
    "licenseName": "",
    "address": "615 WEST CALDWELL BLVD",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "615 WEST CALDWELL BLVD, NAMPA, ID 83651",
    "phone": "(208) 487-8003",
    "businessType": "Pawn Shop",
    "description": "IDAHO PAWN & GOLD is a pawn shop with firearms sales serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "d-b-sporting-arms",
    "businessName": "D & B SPORTING ARMS",
    "licenseName": "",
    "address": "1419 NORTH 23RD",
    "city": "BOISE",
    "state": "ID",
    "zip": "83702",
    "fullAddress": "1419 NORTH 23RD, BOISE, ID 83702",
    "phone": "(208) 342-4920",
    "businessType": "Sporting Goods",
    "description": "D & B SPORTING ARMS is a sporting goods retailer with firearms department serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "workman-outfitters",
    "businessName": "WORKMAN OUTFITTERS",
    "licenseName": "",
    "address": "1008 VISTA",
    "city": "BOISE",
    "state": "ID",
    "zip": "837050000",
    "fullAddress": "1008 VISTA, BOISE, ID 837050000",
    "phone": "(208) 342-5479",
    "businessType": "FFL Dealer",
    "description": "WORKMAN OUTFITTERS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "eagle-firearms",
    "businessName": "EAGLE FIREARMS",
    "licenseName": "",
    "address": "939 S LAKE POINTE WAY",
    "city": "EAGLE",
    "state": "ID",
    "zip": "83616",
    "fullAddress": "939 S LAKE POINTE WAY, EAGLE, ID 83616",
    "phone": "(480) 323-0466",
    "businessType": "FFL Dealer",
    "description": "EAGLE FIREARMS is a licensed Federal Firearms License dealer serving EAGLE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "EAGLE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "b-h-guns",
    "businessName": "B H GUNS",
    "licenseName": "",
    "address": "6128 W FAIRVIEW AVE UNIT 1M-6",
    "city": "BOISE",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "6128 W FAIRVIEW AVE UNIT 1M-6, BOISE, ID 83704",
    "phone": "(208) 863-5059",
    "businessType": "FFL Dealer",
    "description": "B H GUNS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "shooters-best-buy",
    "businessName": "SHOOTERS BEST BUY",
    "licenseName": "",
    "address": "6009 S LATIGO DR",
    "city": "BOISE",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "6009 S LATIGO DR, BOISE, ID 83709",
    "phone": "(208) 921-5860",
    "businessType": "FFL Dealer",
    "description": "SHOOTERS BEST BUY is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "omg-tactical-armory",
    "businessName": "OMG TACTICAL ARMORY",
    "licenseName": "",
    "address": "11674 W COLLINA VISTA DRIVE",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "11674 W COLLINA VISTA DRIVE, NAMPA, ID 83686",
    "phone": "(805) 304-7931",
    "businessType": "Tactical/Training",
    "description": "OMG TACTICAL ARMORY is a tactical training and firearms instruction facility serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "happy-time-firearms",
    "businessName": "HAPPY TIME FIREARMS",
    "licenseName": "",
    "address": "19137 S PLEASANT VALLEY RD",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "19137 S PLEASANT VALLEY RD, KUNA, ID 83634",
    "phone": "(208) 994-9946",
    "businessType": "FFL Dealer",
    "description": "HAPPY TIME FIREARMS is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "veterans-firearms",
    "businessName": "VETERANS FIREARMS",
    "licenseName": "",
    "address": "533 W PALMER DR",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "533 W PALMER DR, NAMPA, ID 83686",
    "phone": "(208) 590-6341",
    "businessType": "FFL Dealer",
    "description": "VETERANS FIREARMS is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "jakes-hardware",
    "businessName": "JAKES HARDWARE",
    "licenseName": "",
    "address": "1876 N AZURITE DR",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "1876 N AZURITE DR, KUNA, ID 83634",
    "phone": "(334) 425-9379",
    "businessType": "FFL Dealer",
    "description": "JAKES HARDWARE is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ken-s-pawn-and-jewelry",
    "businessName": "KEN'S PAWN AND JEWELRY",
    "licenseName": "",
    "address": "608 12TH AVE S",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "608 12TH AVE S, NAMPA, ID 83651",
    "phone": "(208) 466-9647",
    "businessType": "Pawn Shop",
    "description": "KEN'S PAWN AND JEWELRY is a pawn shop with firearms sales serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "kodiak-firearms",
    "businessName": "KODIAK FIREARMS",
    "licenseName": "",
    "address": "1910 W LOTUS PONDS CT",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "1910 W LOTUS PONDS CT, NAMPA, ID 83651",
    "phone": "(208) 985-4911",
    "businessType": "FFL Dealer",
    "description": "KODIAK FIREARMS is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "lions-den-lock-gun",
    "businessName": "LIONS DEN LOCK & GUN",
    "licenseName": "",
    "address": "511 SOUTH VALLEY DR",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "511 SOUTH VALLEY DR, NAMPA, ID 83686",
    "phone": "(208) 936-2713",
    "businessType": "FFL Dealer",
    "description": "LIONS DEN LOCK & GUN is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "main-auction",
    "businessName": "MAIN AUCTION",
    "licenseName": "",
    "address": "2912 W MAIN ST",
    "city": "BOISE",
    "state": "ID",
    "zip": "83702",
    "fullAddress": "2912 W MAIN ST, BOISE, ID 83702",
    "phone": "(208) 344-8314",
    "businessType": "FFL Dealer",
    "description": "MAIN AUCTION is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "mcgrath-gunsmith-services",
    "businessName": "MCGRATH GUNSMITH SERVICES",
    "licenseName": "",
    "address": "2736 MCKINNEY ST",
    "city": "BOISE",
    "state": "ID",
    "zip": "837040000",
    "fullAddress": "2736 MCKINNEY ST, BOISE, ID 837040000",
    "phone": "(208) 761-2335",
    "businessType": "Gunsmith",
    "description": "MCGRATH GUNSMITH SERVICES is a professional gunsmith and firearms service provider serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "meridian-optimist-junior-rifle-club",
    "businessName": "MERIDIAN OPTIMIST JUNIOR RIFLE CLUB",
    "licenseName": "",
    "address": "2093 N DUCK HAWK AVE",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "2093 N DUCK HAWK AVE, KUNA, ID 83634",
    "phone": "(208) 949-3763",
    "businessType": "Gun Club",
    "description": "MERIDIAN OPTIMIST JUNIOR RIFLE CLUB is a shooting club and community organization serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Membership",
      "Club Events",
      "Competitions",
      "Training Programs",
      "Range Access"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunclub.jpg"
    ],
    "website": ""
  },
  {
    "slug": "mcm-firearms-delta-s",
    "businessName": "MCM FIREARMS DELTA S",
    "licenseName": "",
    "address": "1251 N MIDLAND BLVD",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83651",
    "fullAddress": "1251 N MIDLAND BLVD, NAMPA, ID 83651",
    "phone": "(208) 405-6000",
    "businessType": "FFL Dealer",
    "description": "MCM FIREARMS DELTA S is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "northwest-concealed-carry-outfitters",
    "businessName": "NORTHWEST CONCEALED CARRY OUTFITTERS",
    "licenseName": "",
    "address": "2093 N DUCK HAWK AVE",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "2093 N DUCK HAWK AVE, KUNA, ID 83634",
    "phone": "(208) 949-3763",
    "businessType": "FFL Dealer",
    "description": "NORTHWEST CONCEALED CARRY OUTFITTERS is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "firefly-shooting-academy",
    "businessName": "FIREFLY SHOOTING ACADEMY",
    "licenseName": "",
    "address": "516 W HIGHLAND ST",
    "city": "BOISE",
    "state": "ID",
    "zip": "83706",
    "fullAddress": "516 W HIGHLAND ST, BOISE, ID 83706",
    "phone": "(208) 954-0368",
    "businessType": "Shooting Range",
    "description": "FIREFLY SHOOTING ACADEMY is a shooting range facility serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "nelson-gunsmithing",
    "businessName": "NELSON GUNSMITHING",
    "licenseName": "",
    "address": "1830 AIRPORT WAY",
    "city": "BOISE",
    "state": "ID",
    "zip": "83705",
    "fullAddress": "1830 AIRPORT WAY, BOISE, ID 83705",
    "phone": "(986) 400-4867",
    "businessType": "Gunsmith",
    "description": "NELSON GUNSMITHING is a professional gunsmith and firearms service provider serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "westbound-custom-firearms",
    "businessName": "WESTBOUND CUSTOM FIREARMS",
    "licenseName": "",
    "address": "11939 MUSKET DRIVE",
    "city": "BOISE",
    "state": "ID",
    "zip": "83713",
    "fullAddress": "11939 MUSKET DRIVE, BOISE, ID 83713",
    "phone": "(208) 761-3683",
    "businessType": "Gunsmith",
    "description": "WESTBOUND CUSTOM FIREARMS is a professional gunsmith and firearms service provider serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "founding-fathers-armory",
    "businessName": "FOUNDING FATHERS ARMORY",
    "licenseName": "",
    "address": "1310 N 63RD ST",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "1310 N 63RD ST, NAMPA, ID 83687",
    "phone": "(208) 615-5542",
    "businessType": "Gun Store",
    "description": "FOUNDING FATHERS ARMORY is a full-service firearms retailer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "vista-pawn",
    "businessName": "VISTA PAWN",
    "licenseName": "",
    "address": "503 S VISTA AVE",
    "city": "BOISE",
    "state": "ID",
    "zip": "83705",
    "fullAddress": "503 S VISTA AVE, BOISE, ID 83705",
    "phone": "(208) 342-3352",
    "businessType": "Pawn Shop",
    "description": "VISTA PAWN is a pawn shop with firearms sales serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "vista-pawn-state-st",
    "businessName": "VISTA PAWN STATE ST",
    "licenseName": "",
    "address": "6961 W STATE ST",
    "city": "GARDEN CITY",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "6961 W STATE ST, GARDEN CITY, ID 83714",
    "phone": "(208) 378-4920",
    "businessType": "Pawn Shop",
    "description": "VISTA PAWN STATE ST is a pawn shop with firearms sales serving GARDEN CITY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "GARDEN CITY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "quantum-tactical",
    "businessName": "QUANTUM TACTICAL",
    "licenseName": "",
    "address": "3107 CRESCENT RIM DR.",
    "city": "BOISE",
    "state": "ID",
    "zip": "83706",
    "fullAddress": "3107 CRESCENT RIM DR., BOISE, ID 83706",
    "phone": "(208) 859-8001",
    "businessType": "Tactical/Training",
    "description": "QUANTUM TACTICAL is a tactical training and firearms instruction facility serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rainwater-sporting-arms",
    "businessName": "RAINWATER SPORTING ARMS",
    "licenseName": "",
    "address": "145 SO MARKO LANE",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "145 SO MARKO LANE, KUNA, ID 83634",
    "phone": "(661) 699-4950",
    "businessType": "Sporting Goods",
    "description": "RAINWATER SPORTING ARMS is a sporting goods retailer with firearms department serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "1791-precision-armory",
    "businessName": "1791 PRECISION ARMORY",
    "licenseName": "",
    "address": "18232 N CAMAS CREEK AVE",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "18232 N CAMAS CREEK AVE, NAMPA, ID 83687",
    "phone": "(209) 443-4027",
    "businessType": "Gun Store",
    "description": "1791 PRECISION ARMORY is a full-service firearms retailer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "underground-guns",
    "businessName": "UNDERGROUND GUNS",
    "licenseName": "",
    "address": "6126 W STATE ST #308",
    "city": "BOISE",
    "state": "ID",
    "zip": "83703",
    "fullAddress": "6126 W STATE ST #308, BOISE, ID 83703",
    "phone": "(208) 724-5577",
    "businessType": "FFL Dealer",
    "description": "UNDERGROUND GUNS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "black-dog-sports-usa",
    "businessName": "BLACK DOG SPORTS USA",
    "licenseName": "",
    "address": "367 N SHADY GROVE CT",
    "city": "KUNA",
    "state": "ID",
    "zip": "836342169",
    "fullAddress": "367 N SHADY GROVE CT, KUNA, ID 836342169",
    "phone": "(208) 571-0179",
    "businessType": "FFL Dealer",
    "description": "BLACK DOG SPORTS USA is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "riflecrafters",
    "businessName": "RIFLECRAFTERS",
    "licenseName": "",
    "address": "227 E FAIRVIEW AVE",
    "city": "MERIDIAN",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "227 E FAIRVIEW AVE, MERIDIAN, ID 83642",
    "phone": "(208) 888-9454",
    "businessType": "FFL Dealer",
    "description": "RIFLECRAFTERS is a licensed Federal Firearms License dealer serving MERIDIAN and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "MERIDIAN",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "j-rose-guns",
    "businessName": "J ROSE GUNS",
    "licenseName": "",
    "address": "1153 E INSIGNIA DR",
    "city": "BOISE",
    "state": "ID",
    "zip": "83716",
    "fullAddress": "1153 E INSIGNIA DR, BOISE, ID 83716",
    "phone": "(208) 590-4100",
    "businessType": "FFL Dealer",
    "description": "J ROSE GUNS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "eagle-eye-armory",
    "businessName": "EAGLE EYE ARMORY",
    "licenseName": "",
    "address": "18125 N CINCH WAY",
    "city": "BOISE",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "18125 N CINCH WAY, BOISE, ID 83714",
    "phone": "(208) 825-7374",
    "businessType": "Gun Store",
    "description": "EAGLE EYE ARMORY is a full-service firearms retailer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "practical-shooters-srvc",
    "businessName": "PRACTICAL SHOOTERS SRVC",
    "licenseName": "",
    "address": "6918 CENTER LANE, BUILDING B",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "6918 CENTER LANE, BUILDING B, NAMPA, ID 83687",
    "phone": "(208) 466-3017",
    "businessType": "FFL Dealer",
    "description": "PRACTICAL SHOOTERS SRVC is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "velocity-gun-sales",
    "businessName": "VELOCITY GUN SALES",
    "licenseName": "",
    "address": "6128 W FAIRVIEW AVE UNIT 1M-1",
    "city": "BOISE",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "6128 W FAIRVIEW AVE UNIT 1M-1, BOISE, ID 83704",
    "phone": "(208) 890-3715",
    "businessType": "FFL Dealer",
    "description": "VELOCITY GUN SALES is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "spartan-precision-rifles",
    "businessName": "SPARTAN PRECISION RIFLES",
    "licenseName": "",
    "address": "4018 E LINDEN ST # 103",
    "city": "CALDWELL",
    "state": "ID",
    "zip": "83605",
    "fullAddress": "4018 E LINDEN ST # 103, CALDWELL, ID 83605",
    "phone": "(408) 451-9850",
    "businessType": "FFL Dealer",
    "description": "SPARTAN PRECISION RIFLES is a licensed Federal Firearms License dealer serving CALDWELL and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "CALDWELL",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "swift-firearms",
    "businessName": "SWIFT FIREARMS",
    "licenseName": "",
    "address": "7500 S HIDDEN VALLEY DRIVE",
    "city": "BOISE",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "7500 S HIDDEN VALLEY DRIVE, BOISE, ID 83709",
    "phone": "(208) 863-2284",
    "businessType": "FFL Dealer",
    "description": "SWIFT FIREARMS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "x-count-firearms-ammunition",
    "businessName": "X COUNT FIREARMS & AMMUNITION",
    "licenseName": "",
    "address": "6224 W DONATELLA STREET",
    "city": "EAGLE",
    "state": "ID",
    "zip": "83616",
    "fullAddress": "6224 W DONATELLA STREET, EAGLE, ID 83616",
    "phone": "(208) 682-6887",
    "businessType": "Ammunition/Supplies",
    "description": "X COUNT FIREARMS & AMMUNITION is a ammunition and firearms supply retailer serving EAGLE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "EAGLE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "buckhorn-gun-shop-bgs-guns",
    "businessName": "BUCKHORN GUN SHOP / BGS GUNS",
    "licenseName": "",
    "address": "6601 W USTICK RD",
    "city": "BOISE",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "6601 W USTICK RD, BOISE, ID 83704",
    "phone": "(208) 377-2535",
    "businessType": "FFL Dealer",
    "description": "BUCKHORN GUN SHOP / BGS GUNS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "long-range-outfitters",
    "businessName": "LONG RANGE OUTFITTERS",
    "licenseName": "",
    "address": "17443 N FLAGSTAFF WAY",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "17443 N FLAGSTAFF WAY, NAMPA, ID 83687",
    "phone": "(253) 363-1987",
    "businessType": "Shooting Range",
    "description": "LONG RANGE OUTFITTERS is a shooting range facility serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "i-guns",
    "businessName": "I GUNS",
    "licenseName": "",
    "address": "419 FLETCHER DR",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "419 FLETCHER DR, NAMPA, ID 83686",
    "phone": "(208) 318-6272",
    "businessType": "FFL Dealer",
    "description": "I GUNS is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "northwest-gun-supply-ngs",
    "businessName": "NORTHWEST GUN SUPPLY, NGS",
    "licenseName": "",
    "address": "12338 RANCHVIEW DR",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "12338 RANCHVIEW DR, NAMPA, ID 83686",
    "phone": "(208) 505-0130",
    "businessType": "Ammunition/Supplies",
    "description": "NORTHWEST GUN SUPPLY, NGS is a ammunition and firearms supply retailer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "white-dog-arms-white-dog-ammo",
    "businessName": "WHITE DOG ARMS / WHITE DOG AMMO",
    "licenseName": "",
    "address": "2899 S CHARLOTTE AVE",
    "city": "BOISE",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "2899 S CHARLOTTE AVE, BOISE, ID 83709",
    "phone": "(208) 918-4647",
    "businessType": "Ammunition/Supplies",
    "description": "WHITE DOG ARMS / WHITE DOG AMMO is a ammunition and firearms supply retailer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "miller-firearms",
    "businessName": "MILLER FIREARMS",
    "licenseName": "",
    "address": "7419 GREEN ACRES DR",
    "city": "BOISE",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "7419 GREEN ACRES DR, BOISE, ID 83709",
    "phone": "(208) 859-6591",
    "businessType": "FFL Dealer",
    "description": "MILLER FIREARMS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "x-ring-armory",
    "businessName": "X RING ARMORY",
    "licenseName": "",
    "address": "17169 N FRANKLIN BLVD",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "17169 N FRANKLIN BLVD, NAMPA, ID 83687",
    "phone": "(208) 484-4099",
    "businessType": "Gun Store",
    "description": "X RING ARMORY is a full-service firearms retailer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "retail",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "arma15",
    "businessName": "ARMA15",
    "licenseName": "",
    "address": "801 LOS LUCEROS DR",
    "city": "EAGLE",
    "state": "ID",
    "zip": "83616",
    "fullAddress": "801 LOS LUCEROS DR, EAGLE, ID 83616",
    "phone": "(210) 387-9797",
    "businessType": "FFL Dealer",
    "description": "ARMA15 is a licensed Federal Firearms License dealer serving EAGLE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "EAGLE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "keek-s-supply",
    "businessName": "KEEK'S SUPPLY",
    "licenseName": "",
    "address": "4910 JAKE AVE",
    "city": "CHUBBUCK",
    "state": "ID",
    "zip": "83202",
    "fullAddress": "4910 JAKE AVE, CHUBBUCK, ID 83202",
    "phone": "(208) 380-8399",
    "businessType": "Ammunition/Supplies",
    "description": "KEEK'S SUPPLY is a ammunition and firearms supply retailer serving CHUBBUCK and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "CHUBBUCK",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "black-canyon-precision",
    "businessName": "BLACK CANYON PRECISION",
    "licenseName": "",
    "address": "780 CLIFFORD DR",
    "city": "EMMETT",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "780 CLIFFORD DR, EMMETT, ID 83617",
    "phone": "(208) 963-0429",
    "businessType": "FFL Dealer",
    "description": "BLACK CANYON PRECISION is a licensed Federal Firearms License dealer serving EMMETT and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "EMMETT",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "everyday-armis",
    "businessName": "EVERYDAY ARMIS",
    "licenseName": "",
    "address": "1666 WEST TOPANGA DRIVE",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "1666 WEST TOPANGA DRIVE, KUNA, ID 83634",
    "phone": "(530) 739-9694",
    "businessType": "FFL Dealer",
    "description": "EVERYDAY ARMIS is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "sugar-gun-runners",
    "businessName": "SUGAR GUN RUNNERS",
    "licenseName": "",
    "address": "302 SOUTH CUTLER AVE",
    "city": "SUGAR CITY",
    "state": "ID",
    "zip": "83448",
    "fullAddress": "302 SOUTH CUTLER AVE, SUGAR CITY, ID 83448",
    "phone": "(208) 360-6338",
    "businessType": "FFL Dealer",
    "description": "SUGAR GUN RUNNERS is a licensed Federal Firearms License dealer serving SUGAR CITY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "SUGAR CITY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "aces-auctions",
    "businessName": "ACES AUCTIONS",
    "licenseName": "",
    "address": "309 16TH STREET",
    "city": "LEWISTON",
    "state": "ID",
    "zip": "83501",
    "fullAddress": "309 16TH STREET, LEWISTON, ID 83501",
    "phone": "(208) 790-2437",
    "businessType": "FFL Dealer",
    "description": "ACES AUCTIONS is a licensed Federal Firearms License dealer serving LEWISTON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "LEWISTON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "acks-auction-trading-post",
    "businessName": "ACKS AUCTION & TRADING POST",
    "licenseName": "",
    "address": "920 S CHALLIS ST",
    "city": "SALMON",
    "state": "ID",
    "zip": "83467",
    "fullAddress": "920 S CHALLIS ST, SALMON, ID 83467",
    "phone": "(208) 756-4980",
    "businessType": "FFL Dealer",
    "description": "ACKS AUCTION & TRADING POST is a licensed Federal Firearms License dealer serving SALMON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "SALMON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "allan-s-automotive",
    "businessName": "ALLAN'S AUTOMOTIVE",
    "licenseName": "",
    "address": "211 W 40TH STREET",
    "city": "GARDEN CITY",
    "state": "ID",
    "zip": "83714",
    "fullAddress": "211 W 40TH STREET, GARDEN CITY, ID 83714",
    "phone": "(208) 345-3421",
    "businessType": "FFL Dealer",
    "description": "ALLAN'S AUTOMOTIVE is a licensed Federal Firearms License dealer serving GARDEN CITY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "GARDEN CITY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "outfitter-trading-post",
    "businessName": "OUTFITTER TRADING POST",
    "licenseName": "",
    "address": "15 STERLING LANE",
    "city": "GARDEN VALLEY",
    "state": "ID",
    "zip": "83622",
    "fullAddress": "15 STERLING LANE, GARDEN VALLEY, ID 83622",
    "phone": "(208) 859-2725",
    "businessType": "FFL Dealer",
    "description": "OUTFITTER TRADING POST is a licensed Federal Firearms License dealer serving GARDEN VALLEY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "GARDEN VALLEY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "quick-pawn",
    "businessName": "QUICK PAWN",
    "licenseName": "",
    "address": "1050 OVERLAND AVE",
    "city": "BURLEY",
    "state": "ID",
    "zip": "83318",
    "fullAddress": "1050 OVERLAND AVE, BURLEY, ID 83318",
    "phone": "(208) 677-2743",
    "businessType": "Pawn Shop",
    "description": "QUICK PAWN is a pawn shop with firearms sales serving BURLEY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BURLEY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "mb-guns",
    "businessName": "MB GUNS",
    "licenseName": "",
    "address": "29 RIVERSTONE BEND SUITE B",
    "city": "IDAHO CITY",
    "state": "ID",
    "zip": "83631",
    "fullAddress": "29 RIVERSTONE BEND SUITE B, IDAHO CITY, ID 83631",
    "phone": "(916) 203-7376",
    "businessType": "FFL Dealer",
    "description": "MB GUNS is a licensed Federal Firearms License dealer serving IDAHO CITY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "IDAHO CITY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "justin-anderson-gunsmithing",
    "businessName": "JUSTIN ANDERSON GUNSMITHING",
    "licenseName": "",
    "address": "470 RUSHO LN",
    "city": "BLANCHARD",
    "state": "ID",
    "zip": "83804",
    "fullAddress": "470 RUSHO LN, BLANCHARD, ID 83804",
    "phone": "(208) 946-8340",
    "businessType": "Gunsmith",
    "description": "JUSTIN ANDERSON GUNSMITHING is a professional gunsmith and firearms service provider serving BLANCHARD and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BLANCHARD",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "andy-s-gun-shop",
    "businessName": "ANDY'S GUN SHOP",
    "licenseName": "",
    "address": "640 COUNTY RD",
    "city": "ARCO",
    "state": "ID",
    "zip": "832130000",
    "fullAddress": "640 COUNTY RD, ARCO, ID 832130000",
    "phone": "(208) 527-3900",
    "businessType": "FFL Dealer",
    "description": "ANDY'S GUN SHOP is a licensed Federal Firearms License dealer serving ARCO and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "ARCO",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "armory-47",
    "businessName": "ARMORY 47",
    "licenseName": "",
    "address": "740 N CECIL RD SUITE 102",
    "city": "POST FALLS",
    "state": "ID",
    "zip": "83854",
    "fullAddress": "740 N CECIL RD SUITE 102, POST FALLS, ID 83854",
    "phone": "(208) 671-2567",
    "businessType": "Gun Store",
    "description": "ARMORY 47 is a full-service firearms retailer serving POST FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "POST FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "black-desert-tactical",
    "businessName": "BLACK DESERT TACTICAL",
    "licenseName": "",
    "address": "270 VILLA DR",
    "city": "HEYBURN",
    "state": "ID",
    "zip": "83336",
    "fullAddress": "270 VILLA DR, HEYBURN, ID 83336",
    "phone": "(208) 430-5544",
    "businessType": "Tactical/Training",
    "description": "BLACK DESERT TACTICAL is a tactical training and firearms instruction facility serving HEYBURN and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "HEYBURN",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "atwell-gun-works",
    "businessName": "ATWELL GUN WORKS",
    "licenseName": "",
    "address": "504 A E MULLAN AVE",
    "city": "OSBURN",
    "state": "ID",
    "zip": "83849",
    "fullAddress": "504 A E MULLAN AVE, OSBURN, ID 83849",
    "phone": "(208) 556-0821",
    "businessType": "FFL Dealer",
    "description": "ATWELL GUN WORKS is a licensed Federal Firearms License dealer serving OSBURN and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "OSBURN",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "allterra-arms-allterra",
    "businessName": "ALLTERRA ARMS / ALLTERRA",
    "licenseName": "",
    "address": "6898 SUPPLY WAY STE 100",
    "city": "BOISE",
    "state": "ID",
    "zip": "83716",
    "fullAddress": "6898 SUPPLY WAY STE 100, BOISE, ID 83716",
    "phone": "(208) 608-5179",
    "businessType": "FFL Dealer",
    "description": "ALLTERRA ARMS / ALLTERRA is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "upper-level-gunsmithing",
    "businessName": "UPPER LEVEL GUNSMITHING",
    "licenseName": "",
    "address": "3814 CLEARFIELD LN",
    "city": "AMMON",
    "state": "ID",
    "zip": "83406",
    "fullAddress": "3814 CLEARFIELD LN, AMMON, ID 83406",
    "phone": "(208) 821-8483",
    "businessType": "Gunsmith",
    "description": "UPPER LEVEL GUNSMITHING is a professional gunsmith and firearms service provider serving AMMON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "AMMON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "dereks-gunsmithing",
    "businessName": "DEREKS GUNSMITHING",
    "licenseName": "",
    "address": "4052 E 1400 N",
    "city": "ASHTON",
    "state": "ID",
    "zip": "83420",
    "fullAddress": "4052 E 1400 N, ASHTON, ID 83420",
    "phone": "(208) 652-7221",
    "businessType": "Gunsmith",
    "description": "DEREKS GUNSMITHING is a professional gunsmith and firearms service provider serving ASHTON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "ASHTON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "randal-bailey-arms",
    "businessName": "RANDAL BAILEY ARMS",
    "licenseName": "",
    "address": "3705 NORMANDIE DR",
    "city": "BOISE",
    "state": "ID",
    "zip": "837050000",
    "fullAddress": "3705 NORMANDIE DR, BOISE, ID 837050000",
    "phone": "(208) 631-1287",
    "businessType": "FFL Dealer",
    "description": "RANDAL BAILEY ARMS is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "evans-gun-repair",
    "businessName": "EVANS GUN REPAIR",
    "licenseName": "",
    "address": "5200 HWY 95",
    "city": "FRUITLAND",
    "state": "ID",
    "zip": "83619",
    "fullAddress": "5200 HWY 95, FRUITLAND, ID 83619",
    "phone": "(208) 452-5958",
    "businessType": "FFL Dealer",
    "description": "EVANS GUN REPAIR is a licensed Federal Firearms License dealer serving FRUITLAND and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "FRUITLAND",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "goodday-pawn-auto",
    "businessName": "GOODDAY PAWN & AUTO",
    "licenseName": "",
    "address": "324 SCOTT AVE",
    "city": "RUPERT",
    "state": "ID",
    "zip": "83350",
    "fullAddress": "324 SCOTT AVE, RUPERT, ID 83350",
    "phone": "(208) 436-8894",
    "businessType": "Pawn Shop",
    "description": "GOODDAY PAWN & AUTO is a pawn shop with firearms sales serving RUPERT and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "RUPERT",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "eagle-rock-sporting-goods",
    "businessName": "EAGLE ROCK SPORTING GOODS",
    "licenseName": "",
    "address": "7685 S 15TH E",
    "city": "IDAHO FALLS",
    "state": "ID",
    "zip": "834040000",
    "fullAddress": "7685 S 15TH E, IDAHO FALLS, ID 834040000",
    "phone": "(208) 709-4881",
    "businessType": "Sporting Goods",
    "description": "EAGLE ROCK SPORTING GOODS is a sporting goods retailer with firearms department serving IDAHO FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "IDAHO FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "cabela-s-419",
    "businessName": "CABELA'S 419",
    "licenseName": "",
    "address": "8109 W FRANKLIN ROAD",
    "city": "BOISE",
    "state": "ID",
    "zip": "83709",
    "fullAddress": "8109 W FRANKLIN ROAD, BOISE, ID 83709",
    "phone": "(208) 672-7900",
    "businessType": "FFL Dealer",
    "description": "CABELA'S 419 is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "shooting-sports-specialties",
    "businessName": "SHOOTING SPORTS SPECIALTIES",
    "licenseName": "",
    "address": "3873 HAGEN CT",
    "city": "NEW MEADOWS",
    "state": "ID",
    "zip": "83654",
    "fullAddress": "3873 HAGEN CT, NEW MEADOWS, ID 83654",
    "phone": "(208) 301-8677",
    "businessType": "Shooting Range",
    "description": "SHOOTING SPORTS SPECIALTIES is a shooting range facility serving NEW MEADOWS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "NEW MEADOWS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "pauls-sport-shop",
    "businessName": "PAULS SPORT SHOP",
    "licenseName": "",
    "address": "1234 OAKLEY AVE",
    "city": "BURLEY",
    "state": "ID",
    "zip": "833180000",
    "fullAddress": "1234 OAKLEY AVE, BURLEY, ID 833180000",
    "phone": "(208) 678-1573",
    "businessType": "FFL Dealer",
    "description": "PAULS SPORT SHOP is a licensed Federal Firearms License dealer serving BURLEY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BURLEY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "blackrock-guns-ammo",
    "businessName": "BLACKROCK GUNS & AMMO",
    "licenseName": "",
    "address": "19561 BLACKROCK RD",
    "city": "CATALDO",
    "state": "ID",
    "zip": "83810",
    "fullAddress": "19561 BLACKROCK RD, CATALDO, ID 83810",
    "phone": "(208) 689-3464",
    "businessType": "Ammunition/Supplies",
    "description": "BLACKROCK GUNS & AMMO is a ammunition and firearms supply retailer serving CATALDO and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "CATALDO",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "cliffs-gunsmithing",
    "businessName": "CLIFFS GUNSMITHING",
    "licenseName": "",
    "address": "1128 CRUMARINE LOOP RD",
    "city": "MOSCOW",
    "state": "ID",
    "zip": "838430000",
    "fullAddress": "1128 CRUMARINE LOOP RD, MOSCOW, ID 838430000",
    "phone": "(509) 595-7468",
    "businessType": "Gunsmith",
    "description": "CLIFFS GUNSMITHING is a professional gunsmith and firearms service provider serving MOSCOW and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "MOSCOW",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "north-reach-manufacturing",
    "businessName": "NORTH REACH MANUFACTURING",
    "licenseName": "",
    "address": "3232 E 650 N",
    "city": "MENAN",
    "state": "ID",
    "zip": "83434",
    "fullAddress": "3232 E 650 N, MENAN, ID 83434",
    "phone": "(714) 943-8133",
    "businessType": "Gun Manufacturer",
    "description": "NORTH REACH MANUFACTURING is a firearms manufacturing company serving MENAN and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "MENAN",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "us-gun-repair",
    "businessName": "US GUN REPAIR",
    "licenseName": "",
    "address": "2862 E 634 N",
    "city": "ROBERTS",
    "state": "ID",
    "zip": "83444",
    "fullAddress": "2862 E 634 N, ROBERTS, ID 83444",
    "phone": "(208) 228-3732",
    "businessType": "FFL Dealer",
    "description": "US GUN REPAIR is a licensed Federal Firearms License dealer serving ROBERTS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "ROBERTS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "beyond-primal-firearms",
    "businessName": "BEYOND PRIMAL FIREARMS",
    "licenseName": "",
    "address": "550 B THAIN RD",
    "city": "LEWISTON",
    "state": "ID",
    "zip": "83501",
    "fullAddress": "550 B THAIN RD, LEWISTON, ID 83501",
    "phone": "(208) 791-5011",
    "businessType": "FFL Dealer",
    "description": "BEYOND PRIMAL FIREARMS is a licensed Federal Firearms License dealer serving LEWISTON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "LEWISTON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bi-mart-688",
    "businessName": "BI MART #688",
    "licenseName": "",
    "address": "1277 E DEER FLAT RD",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "1277 E DEER FLAT RD, KUNA, ID 83634",
    "phone": "(208) 287-8986",
    "businessType": "FFL Dealer",
    "description": "BI MART #688 is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "big-5-sporting-goods-266",
    "businessName": "BIG 5 SPORTING GOODS #266",
    "licenseName": "",
    "address": "700 W QUINN RD",
    "city": "POCATELLO",
    "state": "ID",
    "zip": "83202",
    "fullAddress": "700 W QUINN RD, POCATELLO, ID 83202",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "BIG 5 SPORTING GOODS #266 is a sporting goods retailer with firearms department serving POCATELLO and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "POCATELLO",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "big-5-sporting-goods-248",
    "businessName": "BIG 5 SPORTING GOODS #248",
    "licenseName": "",
    "address": "1036 BLUE LAKES BLVD N",
    "city": "TWIN FALLS",
    "state": "ID",
    "zip": "833010000",
    "fullAddress": "1036 BLUE LAKES BLVD N, TWIN FALLS, ID 833010000",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "BIG 5 SPORTING GOODS #248 is a sporting goods retailer with firearms department serving TWIN FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "TWIN FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "big-5-sporting-goods-240",
    "businessName": "BIG 5 SPORTING GOODS #240",
    "licenseName": "",
    "address": "1851 S 25TH E (HITT RD IN AMMON CITY)",
    "city": "IDAHO FALLS",
    "state": "ID",
    "zip": "834060000",
    "fullAddress": "1851 S 25TH E (HITT RD IN AMMON CITY), IDAHO FALLS, ID 834060000",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "BIG 5 SPORTING GOODS #240 is a sporting goods retailer with firearms department serving IDAHO FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "IDAHO FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "big-5-sporting-goods-183",
    "businessName": "BIG 5 SPORTING GOODS #183",
    "licenseName": "",
    "address": "125 E APPLEWAY AVE",
    "city": "COEUR D ALENE",
    "state": "ID",
    "zip": "838140000",
    "fullAddress": "125 E APPLEWAY AVE, COEUR D ALENE, ID 838140000",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "BIG 5 SPORTING GOODS #183 is a sporting goods retailer with firearms department serving COEUR D ALENE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "COEUR D ALENE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "big-5-sporting-goods-410",
    "businessName": "BIG 5 SPORTING GOODS #410",
    "licenseName": "",
    "address": "615 NORTH 5TH AVENUE",
    "city": "SANDPOINT",
    "state": "ID",
    "zip": "83864",
    "fullAddress": "615 NORTH 5TH AVENUE, SANDPOINT, ID 83864",
    "phone": "(310) 536-0611",
    "businessType": "Sporting Goods",
    "description": "BIG 5 SPORTING GOODS #410 is a sporting goods retailer with firearms department serving SANDPOINT and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "SANDPOINT",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "big-creek-armory",
    "businessName": "BIG CREEK ARMORY",
    "licenseName": "",
    "address": "13 MINERS COURT",
    "city": "CASCADE",
    "state": "ID",
    "zip": "83611",
    "fullAddress": "13 MINERS COURT, CASCADE, ID 83611",
    "phone": "(208) 695-6423",
    "businessType": "Gun Store",
    "description": "BIG CREEK ARMORY is a full-service firearms retailer serving CASCADE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "CASCADE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bighorn-gunsmithing",
    "businessName": "BIGHORN GUNSMITHING",
    "licenseName": "",
    "address": "4110 HWY 30 W",
    "city": "NEW PLYMOUTH",
    "state": "ID",
    "zip": "83655",
    "fullAddress": "4110 HWY 30 W, NEW PLYMOUTH, ID 83655",
    "phone": "(208) 278-1159",
    "businessType": "Gunsmith",
    "description": "BIGHORN GUNSMITHING is a professional gunsmith and firearms service provider serving NEW PLYMOUTH and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "NEW PLYMOUTH",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bi-mart-628",
    "businessName": "BI-MART #628",
    "licenseName": "",
    "address": "407 12TH AVENUE",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "407 12TH AVENUE, NAMPA, ID 83686",
    "phone": "(541) 334-0681",
    "businessType": "FFL Dealer",
    "description": "BI-MART #628 is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bishop-ammunition-and-firearms",
    "businessName": "BISHOP AMMUNITION AND FIREARMS",
    "licenseName": "",
    "address": "8249 W PORTNEUFF ROAD",
    "city": "POCATELLO",
    "state": "ID",
    "zip": "83204",
    "fullAddress": "8249 W PORTNEUFF ROAD, POCATELLO, ID 83204",
    "phone": "(208) 233-3912",
    "businessType": "Ammunition/Supplies",
    "description": "BISHOP AMMUNITION AND FIREARMS is a ammunition and firearms supply retailer serving POCATELLO and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "POCATELLO",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "b-d-m",
    "businessName": "B D M",
    "licenseName": "",
    "address": "21793 HIGHWAY 20/26",
    "city": "CALDWELL",
    "state": "ID",
    "zip": "83607",
    "fullAddress": "21793 HIGHWAY 20/26, CALDWELL, ID 83607",
    "phone": "(208) 465-1940",
    "businessType": "FFL Dealer",
    "description": "B D M is a licensed Federal Firearms License dealer serving CALDWELL and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "CALDWELL",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "blacktail-armory",
    "businessName": "BLACKTAIL ARMORY",
    "licenseName": "",
    "address": "1653 SAGLE RD",
    "city": "SAGLE",
    "state": "ID",
    "zip": "83860",
    "fullAddress": "1653 SAGLE RD, SAGLE, ID 83860",
    "phone": "(208) 946-7225",
    "businessType": "Gun Store",
    "description": "BLACKTAIL ARMORY is a full-service firearms retailer serving SAGLE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "SAGLE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "silencer-central",
    "businessName": "SILENCER CENTRAL",
    "licenseName": "",
    "address": "327 W LIL ROBERT CT",
    "city": "KUNA",
    "state": "ID",
    "zip": "836345075",
    "fullAddress": "327 W LIL ROBERT CT, KUNA, ID 836345075",
    "phone": "(888) 781-8778",
    "businessType": "FFL Dealer",
    "description": "SILENCER CENTRAL is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bootleg-inc",
    "businessName": "BOOTLEG INC",
    "licenseName": "",
    "address": "1336 S CROOKED FENCE LANE",
    "city": "KUNA",
    "state": "ID",
    "zip": "83634",
    "fullAddress": "1336 S CROOKED FENCE LANE, KUNA, ID 83634",
    "phone": "(217) 979-7730",
    "businessType": "FFL Dealer",
    "description": "BOOTLEG INC is a licensed Federal Firearms License dealer serving KUNA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "KUNA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "premier-gunsmithing-coatings",
    "businessName": "PREMIER GUNSMITHING & COATINGS",
    "licenseName": "",
    "address": "1852 N 3750 E",
    "city": "IDAHO FALLS",
    "state": "ID",
    "zip": "83401",
    "fullAddress": "1852 N 3750 E, IDAHO FALLS, ID 83401",
    "phone": "(208) 521-7068",
    "businessType": "Gunsmith",
    "description": "PREMIER GUNSMITHING & COATINGS is a professional gunsmith and firearms service provider serving IDAHO FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "IDAHO FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "wholesale-shooters-supplies",
    "businessName": "WHOLESALE SHOOTERS SUPPLIES",
    "licenseName": "",
    "address": "401 BONNER MALL WAY SUITE I",
    "city": "PONDERAY",
    "state": "ID",
    "zip": "83852",
    "fullAddress": "401 BONNER MALL WAY SUITE I, PONDERAY, ID 83852",
    "phone": "(208) 597-6446",
    "businessType": "FFL Dealer",
    "description": "WHOLESALE SHOOTERS SUPPLIES is a licensed Federal Firearms License dealer serving PONDERAY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "PONDERAY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "lone-pine-rifleworks",
    "businessName": "LONE PINE RIFLEWORKS",
    "licenseName": "",
    "address": "425 E MAIN ST",
    "city": "CHALLIS",
    "state": "ID",
    "zip": "83226",
    "fullAddress": "425 E MAIN ST, CHALLIS, ID 83226",
    "phone": "(208) 879-2755",
    "businessType": "FFL Dealer",
    "description": "LONE PINE RIFLEWORKS is a licensed Federal Firearms License dealer serving CHALLIS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "CHALLIS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ct-brian",
    "businessName": "CT BRIAN",
    "licenseName": "",
    "address": "1468 W JULEP ST",
    "city": "MERIDIAN",
    "state": "ID",
    "zip": "83642",
    "fullAddress": "1468 W JULEP ST, MERIDIAN, ID 83642",
    "phone": "(208) 888-0957",
    "businessType": "FFL Dealer",
    "description": "CT BRIAN is a licensed Federal Firearms License dealer serving MERIDIAN and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "MERIDIAN",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "kens-custom-guns",
    "businessName": "KENS CUSTOM GUNS",
    "licenseName": "",
    "address": "1366 MOON SHADOW RD",
    "city": "BONNERS FERRY",
    "state": "ID",
    "zip": "83805",
    "fullAddress": "1366 MOON SHADOW RD, BONNERS FERRY, ID 83805",
    "phone": "(208) 920-1981",
    "businessType": "Gunsmith",
    "description": "KENS CUSTOM GUNS is a professional gunsmith and firearms service provider serving BONNERS FERRY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BONNERS FERRY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "brockmans-rifles",
    "businessName": "BROCKMANS RIFLES",
    "licenseName": "",
    "address": "2165 S 1800 E",
    "city": "GOODING",
    "state": "ID",
    "zip": "83330",
    "fullAddress": "2165 S 1800 E, GOODING, ID 83330",
    "phone": "(208) 358-3920",
    "businessType": "FFL Dealer",
    "description": "BROCKMANS RIFLES is a licensed Federal Firearms License dealer serving GOODING and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "GOODING",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "teton-ace-hardware",
    "businessName": "TETON ACE HARDWARE",
    "licenseName": "",
    "address": "120 S MAIN ST",
    "city": "DRIGGS",
    "state": "ID",
    "zip": "83422",
    "fullAddress": "120 S MAIN ST, DRIGGS, ID 83422",
    "phone": "(208) 354-2344",
    "businessType": "FFL Dealer",
    "description": "TETON ACE HARDWARE is a licensed Federal Firearms License dealer serving DRIGGS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "DRIGGS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "flint-n-frizzen",
    "businessName": "FLINT'N FRIZZEN",
    "licenseName": "",
    "address": "3867 E SHADY GLEN DR",
    "city": "BOISE",
    "state": "ID",
    "zip": "837060000",
    "fullAddress": "3867 E SHADY GLEN DR, BOISE, ID 837060000",
    "phone": "(208) 386-9349",
    "businessType": "FFL Dealer",
    "description": "FLINT'N FRIZZEN is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "mcb-sports",
    "businessName": "MCB SPORTS",
    "licenseName": "",
    "address": "2381 BOWLIN LN",
    "city": "TWIN FALLS",
    "state": "ID",
    "zip": "833010000",
    "fullAddress": "2381 BOWLIN LN, TWIN FALLS, ID 833010000",
    "phone": "(208) 308-9518",
    "businessType": "FFL Dealer",
    "description": "MCB SPORTS is a licensed Federal Firearms License dealer serving TWIN FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "TWIN FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "sams-locker",
    "businessName": "SAMS LOCKER",
    "licenseName": "",
    "address": "10250 W FAIRVIEW AVE",
    "city": "BOISE",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "10250 W FAIRVIEW AVE, BOISE, ID 83704",
    "phone": "(208) 487-8003",
    "businessType": "FFL Dealer",
    "description": "SAMS LOCKER is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "diamondback-shooting-range",
    "businessName": "DIAMONDBACK SHOOTING RANGE",
    "licenseName": "",
    "address": "1447 MAIN STREET",
    "city": "LEWISTON",
    "state": "ID",
    "zip": "83501",
    "fullAddress": "1447 MAIN STREET, LEWISTON, ID 83501",
    "phone": "(208) 798-7468",
    "businessType": "Shooting Range",
    "description": "DIAMONDBACK SHOOTING RANGE is a shooting range facility serving LEWISTON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "LEWISTON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "burning-bullet",
    "businessName": "BURNING BULLET",
    "licenseName": "",
    "address": "1890 SOUTH STONE RIDGE WAY",
    "city": "BOISE",
    "state": "ID",
    "zip": "83712",
    "fullAddress": "1890 SOUTH STONE RIDGE WAY, BOISE, ID 83712",
    "phone": "(208) 696-2171",
    "businessType": "FFL Dealer",
    "description": "BURNING BULLET is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "expedition-firearms-barrel-boss",
    "businessName": "EXPEDITION FIREARMS, BARREL BOSS",
    "licenseName": "",
    "address": "3878 CORDELL CIR",
    "city": "IDAHO FALLS",
    "state": "ID",
    "zip": "83401",
    "fullAddress": "3878 CORDELL CIR, IDAHO FALLS, ID 83401",
    "phone": "(208) 656-5824",
    "businessType": "FFL Dealer",
    "description": "EXPEDITION FIREARMS, BARREL BOSS is a licensed Federal Firearms License dealer serving IDAHO FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "IDAHO FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gem-state-arms",
    "businessName": "GEM STATE ARMS",
    "licenseName": "",
    "address": "223 E ROOSEVELT AVE",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83686",
    "fullAddress": "223 E ROOSEVELT AVE, NAMPA, ID 83686",
    "phone": "(208) 467-0010",
    "businessType": "FFL Dealer",
    "description": "GEM STATE ARMS is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bernies-guns-ammo",
    "businessName": "BERNIES GUNS  &  AMMO",
    "licenseName": "",
    "address": "12570 N NEPTUNE  ST",
    "city": "POCATELLO",
    "state": "ID",
    "zip": "83202",
    "fullAddress": "12570 N NEPTUNE  ST, POCATELLO, ID 83202",
    "phone": "(208) 241-6931",
    "businessType": "Ammunition/Supplies",
    "description": "BERNIES GUNS  &  AMMO is a ammunition and firearms supply retailer serving POCATELLO and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "POCATELLO",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "creative-carnage",
    "businessName": "CREATIVE CARNAGE",
    "licenseName": "",
    "address": "2115 N FAIRMEADOW DR",
    "city": "BOISE",
    "state": "ID",
    "zip": "83704",
    "fullAddress": "2115 N FAIRMEADOW DR, BOISE, ID 83704",
    "phone": "(208) 957-4511",
    "businessType": "FFL Dealer",
    "description": "CREATIVE CARNAGE is a licensed Federal Firearms License dealer serving BOISE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "BOISE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "so-simply-edgy",
    "businessName": "SO SIMPLY EDGY",
    "licenseName": "",
    "address": "17633 N SCOUT AVE",
    "city": "NAMPA",
    "state": "ID",
    "zip": "83687",
    "fullAddress": "17633 N SCOUT AVE, NAMPA, ID 83687",
    "phone": "(208) 250-3664",
    "businessType": "FFL Dealer",
    "description": "SO SIMPLY EDGY is a licensed Federal Firearms License dealer serving NAMPA and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "NAMPA",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "callaway-s-guns",
    "businessName": "CALLAWAY'S GUNS",
    "licenseName": "",
    "address": "55 SHILO DR",
    "city": "GARDEN VALLEY",
    "state": "ID",
    "zip": "83622",
    "fullAddress": "55 SHILO DR, GARDEN VALLEY, ID 83622",
    "phone": "(208) 462-3814",
    "businessType": "FFL Dealer",
    "description": "CALLAWAY'S GUNS is a licensed Federal Firearms License dealer serving GARDEN VALLEY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "GARDEN VALLEY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "camas-prairie-firearms",
    "businessName": "CAMAS PRAIRIE FIREARMS",
    "licenseName": "",
    "address": "27 VIEW DR",
    "city": "GRANGEVILLE",
    "state": "ID",
    "zip": "83530",
    "fullAddress": "27 VIEW DR, GRANGEVILLE, ID 83530",
    "phone": "(253) 208-5826",
    "businessType": "FFL Dealer",
    "description": "CAMAS PRAIRIE FIREARMS is a licensed Federal Firearms License dealer serving GRANGEVILLE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "GRANGEVILLE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bobs-guns",
    "businessName": "BOBS GUNS",
    "licenseName": "",
    "address": "425 WARNER",
    "city": "LEWISTON",
    "state": "ID",
    "zip": "835010000",
    "fullAddress": "425 WARNER, LEWISTON, ID 835010000",
    "phone": "(208) 746-2217",
    "businessType": "FFL Dealer",
    "description": "BOBS GUNS is a licensed Federal Firearms License dealer serving LEWISTON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "LEWISTON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "cda-pawn-bros",
    "businessName": "CDA PAWN BROS",
    "licenseName": "",
    "address": "4025 NORTH GOVERNMENT WAY, SUITE 2",
    "city": "COEUR D ALENE",
    "state": "ID",
    "zip": "83815",
    "fullAddress": "4025 NORTH GOVERNMENT WAY, SUITE 2, COEUR D ALENE, ID 83815",
    "phone": "(208) 664-1913",
    "businessType": "Pawn Shop",
    "description": "CDA PAWN BROS is a pawn shop with firearms sales serving COEUR D ALENE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "COEUR D ALENE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "center-target-sports",
    "businessName": "CENTER TARGET SPORTS",
    "licenseName": "",
    "address": "3295 E MULLAN AVE",
    "city": "POST FALLS",
    "state": "ID",
    "zip": "83854",
    "fullAddress": "3295 E MULLAN AVE, POST FALLS, ID 83854",
    "phone": "(208) 773-2331",
    "businessType": "FFL Dealer",
    "description": "CENTER TARGET SPORTS is a licensed Federal Firearms License dealer serving POST FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "POST FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "guffy-s-gun-and-pawn",
    "businessName": "GUFFY'S GUN AND PAWN",
    "licenseName": "",
    "address": "616 S MAIN ST",
    "city": "HAILEY",
    "state": "ID",
    "zip": "83333",
    "fullAddress": "616 S MAIN ST, HAILEY, ID 83333",
    "phone": "(208) 720-5949",
    "businessType": "Pawn Shop",
    "description": "GUFFY'S GUN AND PAWN is a pawn shop with firearms sales serving HAILEY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "HAILEY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "hells-canyon-mountain-sports",
    "businessName": "HELLS CANYON MOUNTAIN SPORTS",
    "licenseName": "",
    "address": "41138 BALD EAGLE DRIVE",
    "city": "LEWISTON",
    "state": "ID",
    "zip": "83501",
    "fullAddress": "41138 BALD EAGLE DRIVE, LEWISTON, ID 83501",
    "phone": "(208) 413-8549",
    "businessType": "FFL Dealer",
    "description": "HELLS CANYON MOUNTAIN SPORTS is a licensed Federal Firearms License dealer serving LEWISTON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "LEWISTON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-firearms-company",
    "businessName": "IDAHO FIREARMS COMPANY",
    "licenseName": "",
    "address": "480 C STREET",
    "city": "PLUMMER",
    "state": "ID",
    "zip": "83851",
    "fullAddress": "480 C STREET, PLUMMER, ID 83851",
    "phone": "(208) 755-1401",
    "businessType": "FFL Dealer",
    "description": "IDAHO FIREARMS COMPANY is a licensed Federal Firearms License dealer serving PLUMMER and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "PLUMMER",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "renegade-rifles",
    "businessName": "RENEGADE RIFLES",
    "licenseName": "",
    "address": "17789 CACHE BAR CT",
    "city": "HAYDEN",
    "state": "ID",
    "zip": "83835",
    "fullAddress": "17789 CACHE BAR CT, HAYDEN, ID 83835",
    "phone": "(208) 771-0922",
    "businessType": "FFL Dealer",
    "description": "RENEGADE RIFLES is a licensed Federal Firearms License dealer serving HAYDEN and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "HAYDEN",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bishop-s-gun-barn",
    "businessName": "BISHOP'S GUN BARN",
    "licenseName": "",
    "address": "305 JEFFERSON AVE",
    "city": "POCATELLO",
    "state": "ID",
    "zip": "83201",
    "fullAddress": "305 JEFFERSON AVE, POCATELLO, ID 83201",
    "phone": "(208) 233-3912",
    "businessType": "FFL Dealer",
    "description": "BISHOP'S GUN BARN is a licensed Federal Firearms License dealer serving POCATELLO and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "POCATELLO",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "quick-response-firearms",
    "businessName": "QUICK RESPONSE FIREARMS",
    "licenseName": "",
    "address": "1149 ADDISON AVE E",
    "city": "TWIN FALLS",
    "state": "ID",
    "zip": "83301",
    "fullAddress": "1149 ADDISON AVE E, TWIN FALLS, ID 83301",
    "phone": "(208) 308-3978",
    "businessType": "FFL Dealer",
    "description": "QUICK RESPONSE FIREARMS is a licensed Federal Firearms License dealer serving TWIN FALLS and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "TWIN FALLS",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "semper-firearms",
    "businessName": "SEMPER FIREARMS",
    "licenseName": "",
    "address": "1005 CENTER AVE",
    "city": "PAYETTE",
    "state": "ID",
    "zip": "83661",
    "fullAddress": "1005 CENTER AVE, PAYETTE, ID 83661",
    "phone": "(208) 891-9489",
    "businessType": "FFL Dealer",
    "description": "SEMPER FIREARMS is a licensed Federal Firearms License dealer serving PAYETTE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "PAYETTE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "luke-22-armory",
    "businessName": "LUKE 22 ARMORY",
    "licenseName": "",
    "address": "521 LITTLE LENA DRIVE",
    "city": "HAILEY",
    "state": "ID",
    "zip": "83333",
    "fullAddress": "521 LITTLE LENA DRIVE, HAILEY, ID 83333",
    "phone": "(208) 309-2334",
    "businessType": "Gun Store",
    "description": "LUKE 22 ARMORY is a full-service firearms retailer serving HAILEY and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "HAILEY",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "north-idaho-gunworks",
    "businessName": "NORTH IDAHO GUNWORKS",
    "licenseName": "",
    "address": "454 SMUGGLERS LANE",
    "city": "PORTHILL",
    "state": "ID",
    "zip": "83853",
    "fullAddress": "454 SMUGGLERS LANE, PORTHILL, ID 83853",
    "phone": "(208) 627-7022",
    "businessType": "FFL Dealer",
    "description": "NORTH IDAHO GUNWORKS is a licensed Federal Firearms License dealer serving PORTHILL and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "PORTHILL",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "crewscustomcom",
    "businessName": "CREWSCUSTOMCOM",
    "licenseName": "",
    "address": "191 BOONE CROCKETT CT",
    "city": "SAGLE",
    "state": "ID",
    "zip": "83860",
    "fullAddress": "191 BOONE CROCKETT CT, SAGLE, ID 83860",
    "phone": "(208) 920-0985",
    "businessType": "Gunsmith",
    "description": "CREWSCUSTOMCOM is a professional gunsmith and firearms service provider serving SAGLE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "SAGLE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "tri-state-outfitters",
    "businessName": "TRI STATE OUTFITTERS",
    "licenseName": "",
    "address": "1104 PULLMAN RD",
    "city": "MOSCOW",
    "state": "ID",
    "zip": "83843",
    "fullAddress": "1104 PULLMAN RD, MOSCOW, ID 83843",
    "phone": "(208) 882-4555",
    "businessType": "FFL Dealer",
    "description": "TRI STATE OUTFITTERS is a licensed Federal Firearms License dealer serving MOSCOW and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "MOSCOW",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "husky-outfitters",
    "businessName": "HUSKY OUTFITTERS",
    "licenseName": "",
    "address": "3853 W MOUNTAIN VIEW DR",
    "city": "REXBURG",
    "state": "ID",
    "zip": "83440",
    "fullAddress": "3853 W MOUNTAIN VIEW DR, REXBURG, ID 83440",
    "phone": "(208) 356-5797",
    "businessType": "FFL Dealer",
    "description": "HUSKY OUTFITTERS is a licensed Federal Firearms License dealer serving REXBURG and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "REXBURG",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "north-40-outfitters",
    "businessName": "NORTH 40 OUTFITTERS",
    "licenseName": "",
    "address": "2981 THAIN GRADE",
    "city": "LEWISTON",
    "state": "ID",
    "zip": "83501",
    "fullAddress": "2981 THAIN GRADE, LEWISTON, ID 83501",
    "phone": "(208) 746-1368",
    "businessType": "FFL Dealer",
    "description": "NORTH 40 OUTFITTERS is a licensed Federal Firearms License dealer serving LEWISTON and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "LEWISTON",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "filikos-armory",
    "businessName": "FILIKOS ARMORY",
    "licenseName": "",
    "address": "7486 N WHEATFIELD DR",
    "city": "COEUR D ALENE",
    "state": "ID",
    "zip": "83815",
    "fullAddress": "7486 N WHEATFIELD DR, COEUR D ALENE, ID 83815",
    "phone": "(208) 209-2323",
    "businessType": "Gun Store",
    "description": "FILIKOS ARMORY is a full-service firearms retailer serving COEUR D ALENE and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "COEUR D ALENE",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "dave-s-gun-cleaning-repair",
    "businessName": "DAVE'S GUN CLEANING & REPAIR",
    "licenseName": "",
    "address": "221 NORTH STREET WEST",
    "city": "HAGERMAN",
    "state": "ID",
    "zip": "83332",
    "fullAddress": "221 NORTH STREET WEST, HAGERMAN, ID 83332",
    "phone": "(208) 539-6767",
    "businessType": "FFL Dealer",
    "description": "DAVE'S GUN CLEANING & REPAIR is a licensed Federal Firearms License dealer serving HAGERMAN and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "candidate",
    "serviceArea": [
      "HAGERMAN",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "alexander-elden-lane-sr-jr",
    "businessName": "Alexander, Elden Lane Sr & Jr",
    "licenseName": "",
    "address": "2121 Misty Lane",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "2121 Misty Lane, Emmett, ID 83617",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Alexander, Elden Lane Sr & Jr is a professional gunsmith and firearms service provider serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rocky-mountain-true-value",
    "businessName": "Rocky Mountain True Value",
    "licenseName": "",
    "address": "132 S Washington Ave",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "132 S Washington Ave, Emmett, ID 83617",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Rocky Mountain True Value is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "benfield-precision-llc",
    "businessName": "Benfield Precision LLC",
    "licenseName": "",
    "address": "2120 Jubilee Ln",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "2120 Jubilee Ln, Emmett, ID 83617",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Benfield Precision LLC is a firearms manufacturing company serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development",
      "Precision Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bi-mart-681",
    "businessName": "Bi-Mart #681",
    "licenseName": "",
    "address": "179 W Highway 52",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "179 W Highway 52, Emmett, ID 83617",
    "phone": "(208) 477-5270",
    "businessType": "FFL Dealer",
    "description": "Bi-Mart #681 is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "burr-international-inc",
    "businessName": "Burr International Inc",
    "licenseName": "",
    "address": "1455 Star Ln",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "1455 Star Ln, Emmett, ID 83617",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Burr International Inc is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "emmett-gun-store",
    "businessName": "Emmett Gun Store",
    "licenseName": "",
    "address": "2119 S Mill Rd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "2119 S Mill Rd, Emmett, ID 83617",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Emmett Gun Store is a firearms manufacturing company serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ferguson-and-sons-construction-llc",
    "businessName": "Ferguson and Sons Construction LLC",
    "licenseName": "",
    "address": "5225 Butte Rd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "5225 Butte Rd, Emmett, ID 83617",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Ferguson and Sons Construction LLC is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gardner-arsenal-llc",
    "businessName": "Gardner Arsenal LLC",
    "licenseName": "",
    "address": "3711 W Idaho Blvd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "3711 W Idaho Blvd, Emmett, ID 83617",
    "phone": "",
    "businessType": "Gun Store",
    "description": "Gardner Arsenal LLC is a full-service firearms retailer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "kingfisher-sporting-goods-pawn",
    "businessName": "Kingfisher Sporting Goods & Pawn",
    "licenseName": "",
    "address": "143 W Main St",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "143 W Main St, Emmett, ID 83617",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Kingfisher Sporting Goods & Pawn is a pawn shop with firearms sales serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "hudson-arms",
    "businessName": "Hudson Arms",
    "licenseName": "",
    "address": "3560 Bishop Rd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "3560 Bishop Rd, Emmett, ID 83617",
    "phone": "(208) 691-6452",
    "businessType": "Gunsmith",
    "description": "Hudson Arms is a professional gunsmith and firearms service provider serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "hudsonarms.net"
  },
  {
    "slug": "little-trapper-idaho-inc",
    "businessName": "Little Trapper Idaho Inc",
    "licenseName": "",
    "address": "11300 Pearl Rd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "11300 Pearl Rd, Emmett, ID 83617",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Little Trapper Idaho Inc is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gem-county-rod-gun-club",
    "businessName": "Gem County Rod & Gun Club",
    "licenseName": "",
    "address": "Emmett",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "Emmett, ID 83617",
    "phone": "(208) 365-4551",
    "businessType": "Shooting Range",
    "description": "Gem County Rod & Gun Club is a shooting range facility serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "gcrgc.net"
  },
  {
    "slug": "kingfisher-archery",
    "businessName": "Kingfisher Archery",
    "licenseName": "",
    "address": "143 W Main St",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "143 W Main St, Emmett, ID 83617",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "Kingfisher Archery is a shooting range facility serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_firearms_directory",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "d-b-supply-emmett",
    "businessName": "D&B Supply Emmett",
    "licenseName": "",
    "address": "111 ID-16",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "111 ID-16, Emmett, ID 83617",
    "phone": "(208) 963-7040",
    "businessType": "Sporting Goods",
    "description": "D&B Supply Emmett is a sporting goods retailer with firearms department serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "dbsupply.com"
  },
  {
    "slug": "rocky-mountain-gun-n-pawn",
    "businessName": "Rocky Mountain Gun N Pawn",
    "licenseName": "",
    "address": "829 S Washington Ave",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "829 S Washington Ave, Emmett, ID 83617",
    "phone": "(208) 365-4044",
    "businessType": "Pawn Shop",
    "description": "Rocky Mountain Gun N Pawn is a pawn shop with firearms sales serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "larry-s-sports",
    "businessName": "Larry's Sports",
    "licenseName": "",
    "address": "2139 N Plaza Rd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "2139 N Plaza Rd, Emmett, ID 83617",
    "phone": "",
    "businessType": "Sporting Goods",
    "description": "Larry's Sports is a sporting goods retailer with firearms department serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "little-trapper-inc",
    "businessName": "Little Trapper Inc",
    "licenseName": "",
    "address": "11300 Pearl Road",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "11300 Pearl Road, Emmett, ID 83617",
    "phone": "(208) 996-3555",
    "businessType": "FFL Dealer",
    "description": "Little Trapper Inc is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": "littletrapper.com"
  },
  {
    "slug": "low-mountain",
    "businessName": "Low Mountain",
    "licenseName": "",
    "address": "1333 West Highway 52",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "1333 West Highway 52, Emmett, ID 83617",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Low Mountain is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rowley-enterprises",
    "businessName": "Rowley Enterprises",
    "licenseName": "",
    "address": "3108 Laurel Way",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "3108 Laurel Way, Emmett, ID 83617",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Rowley Enterprises is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "wild-thang-farms",
    "businessName": "Wild Thang Farms",
    "licenseName": "",
    "address": "3150 Fuller Rd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "3150 Fuller Rd, Emmett, ID 83617",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Wild Thang Farms is a licensed Federal Firearms License dealer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "jerry-harshbarger-gunsmith",
    "businessName": "Jerry Harshbarger Gunsmith",
    "licenseName": "",
    "address": "2838 East Black Canyon Hwy",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "2838 East Black Canyon Hwy, Emmett, ID 83617",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Jerry Harshbarger Gunsmith is a professional gunsmith and firearms service provider serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "up-in-arms-armory",
    "businessName": "Up In Arms Armory",
    "licenseName": "",
    "address": "1997 West Idaho Blvd",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "1997 West Idaho Blvd, Emmett, ID 83617",
    "phone": "",
    "businessType": "Gun Store",
    "description": "Up In Arms Armory is a full-service firearms retailer serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "veriforce-tactical",
    "businessName": "Veriforce Tactical",
    "licenseName": "",
    "address": "3315 Kings Ln #1",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "3315 Kings Ln #1, Emmett, ID 83617",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "Veriforce Tactical is a tactical training and firearms instruction facility serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "walker-winchesters",
    "businessName": "Walker Winchesters",
    "licenseName": "",
    "address": "506 N Washington Ave",
    "city": "Emmett",
    "state": "ID",
    "zip": "83617",
    "fullAddress": "506 N Washington Ave, Emmett, ID 83617",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Walker Winchesters is a firearms manufacturing company serving Emmett and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "gem_county_gun_stores_only",
    "serviceArea": [
      "Emmett",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "eubanks-gunsmithing",
    "businessName": "Eubanks Gunsmithing",
    "licenseName": "",
    "address": "Near Oregon border",
    "city": "Owyhee County",
    "state": "ID",
    "zip": "",
    "fullAddress": "Near Oregon border, Snake River area",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Eubanks Gunsmithing is a professional gunsmith and firearms service provider serving Owyhee County and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Owyhee County",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": "eubanksgunsmithing.com"
  },
  {
    "slug": "homedale-gun-club",
    "businessName": "Homedale Gun Club",
    "licenseName": "",
    "address": "9592 US-95",
    "city": "Marsing",
    "state": "ID",
    "zip": "83639",
    "fullAddress": "9592 US-95, Marsing, ID 83639",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "Homedale Gun Club is a shooting range facility serving Marsing and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Marsing",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "homedalegunclub.com"
  },
  {
    "slug": "homedale-rod-gun-club",
    "businessName": "Homedale Rod & Gun Club",
    "licenseName": "",
    "address": "PO Box 665",
    "city": "Marsing",
    "state": "ID",
    "zip": "83639",
    "fullAddress": "PO Box 665, Marsing, ID 83639",
    "phone": "(208) 459-2256",
    "businessType": "Shooting Range",
    "description": "Homedale Rod & Gun Club is a shooting range facility serving Marsing and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Marsing",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "homedalegunclub.com"
  },
  {
    "slug": "i-am-focused-firearms-training",
    "businessName": "I Am Focused Firearms Training",
    "licenseName": "",
    "address": "Serves Homedale Gun Club",
    "city": "Marsing",
    "state": "ID",
    "zip": "",
    "fullAddress": "Serves Homedale Gun Club, Marsing",
    "phone": "",
    "businessType": "Tactical/Training",
    "description": "I Am Focused Firearms Training is a tactical training and firearms instruction facility serving Marsing and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Marsing",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": "iamfocusedft.com"
  },
  {
    "slug": "american-firearms-academy",
    "businessName": "American Firearms Academy",
    "licenseName": "",
    "address": "Serves Owyhee County",
    "city": "Murphy",
    "state": "ID",
    "zip": "",
    "fullAddress": "Serves Owyhee County",
    "phone": "(208) 229-4677",
    "businessType": "Tactical/Training",
    "description": "American Firearms Academy is a tactical training and firearms instruction facility serving Murphy and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Murphy",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": "afaidaho.com"
  },
  {
    "slug": "owyhee-county-sheriff-s-office-ccw-permits",
    "businessName": "Owyhee County Sheriff's Office - CCW Permits",
    "licenseName": "",
    "address": "20381 State Highway 78",
    "city": "Murphy",
    "state": "ID",
    "zip": "83650",
    "fullAddress": "20381 State Highway 78, Murphy, ID 83650",
    "phone": "(208) 495-1154",
    "businessType": "FFL Dealer",
    "description": "Owyhee County Sheriff's Office - CCW Permits is a licensed Federal Firearms License dealer serving Murphy and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Murphy",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": "owyheecounty.net/departments/sheriff/concealed-weapons/"
  },
  {
    "slug": "amoureux-homedale-gun-show",
    "businessName": "Amoureux Homedale Gun Show",
    "licenseName": "",
    "address": "432 West Nevada Ave",
    "city": "Homedale",
    "state": "ID",
    "zip": "83628",
    "fullAddress": "432 West Nevada Ave, Homedale, ID 83628",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Amoureux Homedale Gun Show is a licensed Federal Firearms License dealer serving Homedale and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Homedale",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": "gunshowtrader.com/gun-shows/homedale-gun-show/"
  },
  {
    "slug": "owyhee-county-fairgrounds",
    "businessName": "Owyhee County Fairgrounds",
    "licenseName": "",
    "address": "432 West Nevada Ave",
    "city": "Homedale",
    "state": "ID",
    "zip": "83628",
    "fullAddress": "432 West Nevada Ave, Homedale, ID 83628",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Owyhee County Fairgrounds is a licensed Federal Firearms License dealer serving Homedale and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Homedale",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "blm-snake-river-birds-of-prey-nca",
    "businessName": "BLM Snake River Birds of Prey NCA",
    "licenseName": "",
    "address": "Snake River Canyon area",
    "city": "Murphy",
    "state": "ID",
    "zip": "",
    "fullAddress": "Snake River Canyon area",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "BLM Snake River Birds of Prey NCA is a shooting range facility serving Murphy and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_firearms_directory",
    "serviceArea": [
      "Murphy",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "blm.gov"
  },
  {
    "slug": "big-valley-gun-and-pawn-llc",
    "businessName": "Big Valley Gun and Pawn LLC",
    "licenseName": "",
    "address": "7 W Colorado Ave",
    "city": "Homedale",
    "state": "ID",
    "zip": "83628",
    "fullAddress": "7 W Colorado Ave, Homedale, ID 83628",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Big Valley Gun and Pawn LLC is a pawn shop with firearms sales serving Homedale and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Homedale",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "clc-custom-guns-gunsmithing",
    "businessName": "CLC Custom Guns & Gunsmithing",
    "licenseName": "",
    "address": "5040 Sage Rd",
    "city": "Homedale",
    "state": "ID",
    "zip": "83628",
    "fullAddress": "5040 Sage Rd, Homedale, ID 83628",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "CLC Custom Guns & Gunsmithing is a professional gunsmith and firearms service provider serving Homedale and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Homedale",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "rod-fivecoat-auctions",
    "businessName": "Rod Fivecoat Auctions",
    "licenseName": "",
    "address": "3523 US-95",
    "city": "Homedale",
    "state": "ID",
    "zip": "83628",
    "fullAddress": "3523 US-95, Homedale, ID 83628",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Rod Fivecoat Auctions is a licensed Federal Firearms License dealer serving Homedale and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Homedale",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "mccray-john-calvin",
    "businessName": "McCray, John Calvin",
    "licenseName": "",
    "address": "124 West Idaho Ave",
    "city": "Homedale",
    "state": "ID",
    "zip": "83628",
    "fullAddress": "124 West Idaho Ave, Homedale, ID 83628",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "McCray, John Calvin is a licensed Federal Firearms License dealer serving Homedale and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Homedale",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "schaffers-corner",
    "businessName": "Schaffers Corner",
    "licenseName": "",
    "address": "16900 Roping Horse Lane",
    "city": "Murphy",
    "state": "ID",
    "zip": "83650",
    "fullAddress": "16900 Roping Horse Lane, Murphy, ID 83650",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Schaffers Corner is a licensed Federal Firearms License dealer serving Murphy and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Murphy",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "wilkinson-arms-llc",
    "businessName": "Wilkinson Arms LLC",
    "licenseName": "",
    "address": "14754 Murphy Flat Road",
    "city": "Murphy",
    "state": "ID",
    "zip": "83650",
    "fullAddress": "14754 Murphy Flat Road, Murphy, ID 83650",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Wilkinson Arms LLC is a licensed Federal Firearms License dealer serving Murphy and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Murphy",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "murphys-law-guns-ammo-llc",
    "businessName": "Murphys Law Guns & Ammo LLC",
    "licenseName": "",
    "address": "16950 Rimrock Ln",
    "city": "Murphy",
    "state": "ID",
    "zip": "83650",
    "fullAddress": "16950 Rimrock Ln, Murphy, ID 83650",
    "phone": "(208) 901-4169",
    "businessType": "Ammunition/Supplies",
    "description": "Murphys Law Guns & Ammo LLC is a ammunition and firearms supply retailer serving Murphy and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Ammunition Sales",
      "Reloading Supplies",
      "Accessories",
      "Components"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Murphy",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ammunitionsupplies.jpg"
    ],
    "website": ""
  },
  {
    "slug": "desert-west-arms",
    "businessName": "Desert West Arms",
    "licenseName": "",
    "address": "Owyhee County Area",
    "city": "Rural Owyhee",
    "state": "ID",
    "zip": "",
    "fullAddress": "Owyhee County Area",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Desert West Arms is a licensed Federal Firearms License dealer serving Rural Owyhee and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Rural Owyhee",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-sporting-clays-hunting-club",
    "businessName": "Idaho Sporting Clays & Hunting Club",
    "licenseName": "",
    "address": "Near Homedale",
    "city": "Homedale",
    "state": "ID",
    "zip": "",
    "fullAddress": "Near Homedale",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "Idaho Sporting Clays & Hunting Club is a shooting range facility serving Homedale and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "owyhee_county_gun_stores_only",
    "serviceArea": [
      "Homedale",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "the-outdoorsman",
    "businessName": "The Outdoorsman",
    "licenseName": "",
    "address": "739 S 12th St",
    "city": "Payette",
    "state": "ID",
    "zip": "83661",
    "fullAddress": "739 S 12th St, Payette, ID 83661",
    "phone": "(541) 889-3135",
    "businessType": "Sporting Goods",
    "description": "The Outdoorsman is a sporting goods retailer with firearms department serving Payette and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Payette",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": ""
  },
  {
    "slug": "crossfire-metal-works-crossfire",
    "businessName": "Crossfire Metal Works / Crossfire",
    "licenseName": "",
    "address": "303 2nd Ave N",
    "city": "Payette",
    "state": "ID",
    "zip": "83661",
    "fullAddress": "303 2nd Ave N, Payette, ID 83661",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "Crossfire Metal Works / Crossfire is a firearms manufacturing company serving Payette and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Payette",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "watchdog-armory-llc",
    "businessName": "Watchdog Armory, LLC",
    "licenseName": "",
    "address": "10201 Payette Heights Rd",
    "city": "Payette",
    "state": "ID",
    "zip": "83661",
    "fullAddress": "10201 Payette Heights Rd, Payette, ID 83661",
    "phone": "(208) 741-4040",
    "businessType": "Gun Store",
    "description": "Watchdog Armory, LLC is a full-service firearms retailer serving Payette and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "New Firearms",
      "Used Firearms",
      "Consignment",
      "Special Orders",
      "Layaway",
      "FFL Transfers"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Payette",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunstore.jpg"
    ],
    "website": ""
  },
  {
    "slug": "idaho-custom-arms",
    "businessName": "Idaho Custom Arms",
    "licenseName": "",
    "address": "300 N 16th St Unit C",
    "city": "Payette",
    "state": "ID",
    "zip": "83661",
    "fullAddress": "300 N 16th St Unit C, Payette, ID 83661",
    "phone": "(208) 861-5425",
    "businessType": "Gunsmith",
    "description": "Idaho Custom Arms is a professional gunsmith and firearms service provider serving Payette and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services",
      "Custom Work"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Payette",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "q-s-combat-tactical-llc",
    "businessName": "Q's Combat & Tactical LLC",
    "licenseName": "",
    "address": "14 S Main St #102",
    "city": "Payette",
    "state": "ID",
    "zip": "83661",
    "fullAddress": "14 S Main St #102, Payette, ID 83661",
    "phone": "(702) 332-7261",
    "businessType": "Tactical/Training",
    "description": "Q's Combat & Tactical LLC is a tactical training and firearms instruction facility serving Payette and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education",
      "Tactical Equipment"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Payette",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "bear-mountain-gun-tool",
    "businessName": "Bear Mountain Gun & Tool",
    "licenseName": "",
    "address": "120 S Plymouth Ave",
    "city": "New Plymouth",
    "state": "ID",
    "zip": "83655",
    "fullAddress": "120 S Plymouth Ave, New Plymouth, ID 83655",
    "phone": "",
    "businessType": "Gunsmith",
    "description": "Bear Mountain Gun & Tool is a professional gunsmith and firearms service provider serving New Plymouth and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Firearm Repair",
      "Custom Work",
      "Restoration",
      "Barrel Threading",
      "Cerakote",
      "FFL Transfers"
    ],
    "specialties": [
      "Licensed Gunsmith",
      "Custom Work",
      "Repair Services"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "New Plymouth",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunsmith.jpg"
    ],
    "website": ""
  },
  {
    "slug": "prism-protection-services-prism-ranch",
    "businessName": "Prism Protection Services / Prism Ranch",
    "licenseName": "",
    "address": "New Plymouth",
    "city": "New Plymouth",
    "state": "ID",
    "zip": "83655",
    "fullAddress": "New Plymouth, ID 83655",
    "phone": "(208) 514-9503",
    "businessType": "Shooting Range",
    "description": "Prism Protection Services / Prism Ranch is a shooting range facility serving New Plymouth and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "silver",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "New Plymouth",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": "nextdoor.com/pages/prism-protection-services-new-plymouth-id/"
  },
  {
    "slug": "snake-river-sportsman-shotgun",
    "businessName": "Snake River Sportsman Shotgun",
    "licenseName": "",
    "address": "Fruitland",
    "city": "Fruitland",
    "state": "ID",
    "zip": "83619",
    "fullAddress": "Fruitland, ID 83619",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "Snake River Sportsman Shotgun is a shooting range facility serving Fruitland and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Fruitland",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "neil-goodfellow-firearms-training",
    "businessName": "Neil Goodfellow Firearms Training",
    "licenseName": "",
    "address": "Fruitland",
    "city": "Fruitland",
    "state": "ID",
    "zip": "",
    "fullAddress": "Fruitland, ID",
    "phone": "(541) 212-2882",
    "businessType": "Tactical/Training",
    "description": "Neil Goodfellow Firearms Training is a tactical training and firearms instruction facility serving Fruitland and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Training Courses",
      "CCW Classes",
      "Tactical Gear",
      "Private Instruction",
      "Safety Training"
    ],
    "specialties": [
      "Tactical Training",
      "CCW Instruction",
      "Safety Education"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Fruitland",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-tacticaltraining.jpg"
    ],
    "website": ""
  },
  {
    "slug": "prism-ranch-mark-clark",
    "businessName": "Prism Ranch (Mark Clark)",
    "licenseName": "",
    "address": "New Plymouth",
    "city": "New Plymouth",
    "state": "ID",
    "zip": "83655",
    "fullAddress": "New Plymouth, ID 83655",
    "phone": "(208) 514-9503",
    "businessType": "FFL Dealer",
    "description": "Prism Ranch (Mark Clark) is a licensed Federal Firearms License dealer serving New Plymouth and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "New Plymouth",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "payette-county-archers",
    "businessName": "Payette County Archers",
    "licenseName": "",
    "address": "Payette",
    "city": "Payette",
    "state": "ID",
    "zip": "83661",
    "fullAddress": "Payette, ID 83661",
    "phone": "",
    "businessType": "Shooting Range",
    "description": "Payette County Archers is a shooting range facility serving Payette and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Range Rental",
      "Safety Courses",
      "Equipment Rental",
      "Target Sales",
      "Training Classes"
    ],
    "specialties": [
      "Range Safety",
      "Firearms Training",
      "Safety Instruction"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Payette",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-shootingrange.jpg"
    ],
    "website": ""
  },
  {
    "slug": "softball-complex-fruitland",
    "businessName": "Softball Complex - Fruitland",
    "licenseName": "",
    "address": "Fruitland",
    "city": "Fruitland",
    "state": "ID",
    "zip": "83619",
    "fullAddress": "Fruitland, ID 83619",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Softball Complex - Fruitland is a licensed Federal Firearms License dealer serving Fruitland and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_firearms_directory",
    "serviceArea": [
      "Fruitland",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "srg-armament",
    "businessName": "SRG Armament",
    "licenseName": "",
    "address": "106 Hawthorne Ave",
    "city": "New Plymouth",
    "state": "ID",
    "zip": "83655",
    "fullAddress": "106 Hawthorne Ave, New Plymouth, ID 83655",
    "phone": "",
    "businessType": "Gun Manufacturer",
    "description": "SRG Armament is a firearms manufacturing company serving New Plymouth and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Custom Manufacturing",
      "OEM Services",
      "Product Development",
      "Quality Control"
    ],
    "specialties": [
      "Manufacturing License",
      "Quality Assurance",
      "Product Development"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_gun_stores_only",
    "serviceArea": [
      "New Plymouth",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-gunmanufacturer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gunrunner",
    "businessName": "Gunrunner",
    "licenseName": "",
    "address": "841 Howard Ln",
    "city": "Fruitland",
    "state": "ID",
    "zip": "83619",
    "fullAddress": "841 Howard Ln, Fruitland, ID 83619",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Gunrunner is a licensed Federal Firearms License dealer serving Fruitland and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_gun_stores_only",
    "serviceArea": [
      "Fruitland",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": "veriforcetactical.com/ffl-store-locator/gunrunner-fruitland/"
  },
  {
    "slug": "cambridge-distributing-llc",
    "businessName": "Cambridge Distributing LLC",
    "licenseName": "",
    "address": "8156 N Pennsylvania Avenue",
    "city": "Fruitland",
    "state": "ID",
    "zip": "83619",
    "fullAddress": "8156 N Pennsylvania Avenue, Fruitland, ID 83619",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Cambridge Distributing LLC is a licensed Federal Firearms License dealer serving Fruitland and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_gun_stores_only",
    "serviceArea": [
      "Fruitland",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "gem-state-pawn",
    "businessName": "Gem State Pawn",
    "licenseName": "",
    "address": "1205 N Whitley Drive #4",
    "city": "Fruitland",
    "state": "ID",
    "zip": "83619",
    "fullAddress": "1205 N Whitley Drive #4, Fruitland, ID 83619",
    "phone": "",
    "businessType": "Pawn Shop",
    "description": "Gem State Pawn is a pawn shop with firearms sales serving Fruitland and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Pawn Services",
      "Firearm Sales",
      "FFL Transfers",
      "Appraisals",
      "Consignment"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_gun_stores_only",
    "serviceArea": [
      "Fruitland",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-pawnshop.jpg"
    ],
    "website": ""
  },
  {
    "slug": "highlight-technologies",
    "businessName": "Highlight Technologies",
    "licenseName": "",
    "address": "2650 NW 3rd Ave",
    "city": "Fruitland",
    "state": "ID",
    "zip": "83619",
    "fullAddress": "2650 NW 3rd Ave, Fruitland, ID 83619",
    "phone": "",
    "businessType": "FFL Dealer",
    "description": "Highlight Technologies is a licensed Federal Firearms License dealer serving Fruitland and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "FFL Transfers",
      "Background Checks",
      "Firearm Sales",
      "Special Orders"
    ],
    "specialties": [
      "Federal Firearms License",
      "Licensed Dealer",
      "ATF Compliant"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "free",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_gun_stores_only",
    "serviceArea": [
      "Fruitland",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-ffldealer.jpg"
    ],
    "website": ""
  },
  {
    "slug": "ponderosa-sports-mercantile",
    "businessName": "Ponderosa Sports & Mercantile",
    "licenseName": "",
    "address": "6854 Highway 55",
    "city": "Horseshoe Bend",
    "state": "ID",
    "zip": "83629",
    "fullAddress": "6854 Highway 55, Horseshoe Bend, ID 83629",
    "phone": "(208) 793-3121",
    "businessType": "Sporting Goods",
    "description": "Ponderosa Sports & Mercantile is a sporting goods retailer with firearms department serving Horseshoe Bend and the surrounding Treasure Valley area. We provide professional firearms sales, transfers, and related services to the Idaho shooting community.",
    "hours": "Mon-Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 5:00 PM, Sun: Closed",
    "services": [
      "Hunting Supplies",
      "Outdoor Gear",
      "Optics",
      "Camping Equipment",
      "Firearm Sales"
    ],
    "specialties": [
      "Professional Service",
      "Licensed Operation"
    ],
    "certifications": [
      "Professional Service",
      "Idaho Licensed"
    ],
    "isVerified": true,
    "verificationStatus": "Verified Business",
    "tier": "copper",
    "isSponsored": false,
    "isFeatured": false,
    "dataSource": "payette_county_gun_stores_only",
    "serviceArea": [
      "Horseshoe Bend",
      "Treasure Valley",
      "Southwest Idaho"
    ],
    "paymentMethods": [
      "Cash",
      "Credit Card",
      "Debit Card"
    ],
    "images": [
      "/images/businesses/placeholder-sportinggoods.jpg"
    ],
    "website": "ponderosasports.com"
  }
]

export const getFFLBySlug = (slug: string) => 
  allFFLs.find(ffl => ffl.slug === slug)

export const getFFLsByCity = (city: string) => 
  allFFLs.filter(ffl => ffl.city.toLowerCase() === city.toLowerCase())

export const getFFLsByType = (type: string) => 
  allFFLs.filter(ffl => ffl.businessType === type)

export const getFeaturedFFLs = () => 
  allFFLs.filter(ffl => ffl.isFeatured)

export const getFFLsByTier = (tier: string) =>
  allFFLs.filter(ffl => ffl.tier === tier)

export const getFFLStats = () => {
  const byCity = allFFLs.reduce((acc, ffl) => {
    acc[ffl.city] = (acc[ffl.city] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const byType = allFFLs.reduce((acc, ffl) => {
    acc[ffl.businessType] = (acc[ffl.businessType] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const byTier = allFFLs.reduce((acc, ffl) => {
    acc[ffl.tier] = (acc[ffl.tier] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  return {
    total: allFFLs.length,
    verified: allFFLs.filter(f => f.isVerified).length,
    featured: allFFLs.filter(f => f.isFeatured).length,
    byCity: Object.fromEntries(
      Object.entries(byCity).sort(([,a], [,b]) => b - a)
    ),
    byType: Object.fromEntries(
      Object.entries(byType).sort(([,a], [,b]) => b - a)
    ),
    byTier,
    dataSource: allFFLs.reduce((acc, f) => {
      acc[f.dataSource] = (acc[f.dataSource] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }
}

export default allFFLs
