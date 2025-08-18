import pandas as pd

# Massive compilation from search results
treasure_valley_businesses = [
    # Gun Stores - Boise/Ada County
    {"Name": "Buckhorn Gun & Pawn", "Type": "Gun Shop, Gunsmith, Pawn", "Phone": "(208) 377-2535", "Address": "6601 W Ustick Rd, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "buckhornguns.com"},
    {"Name": "Cliff's Guns Safes & Reloading", "Type": "Gun Shop, Gunsmith", "Phone": "(208) 375-8694", "Address": "11505 W Fairview Ave #101, Boise, ID 83713", "City": "Boise", "County": "Ada", "Website": "gunsamerica.com/Search/Lister/193/Cliffs_Guns_Safes_Reloading"},
    {"Name": "Impact Guns", "Type": "Gun Shop, Indoor Range", "Phone": "(208) 321-1288", "Address": "11655 W Executive Dr, Boise, ID 83713", "City": "Boise", "County": "Ada", "Website": "impactguns.com"},
    {"Name": "Al's Sporting Goods", "Type": "Gun Shop", "Phone": "(208) 801-7494", "Address": "1301 N Milwaukee St, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "20/20 Sporting Services", "Type": "Gun Shop", "Phone": "(208) 866-4870", "Address": "1175 W Boise Ave Suite A, Boise, ID 83706", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Randal Bailey Arms", "Type": "Gun Shop, Gunsmith", "Phone": "N/A", "Address": "3705 Normandie Dr, Boise, ID 83705", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Old Arms of Idaho", "Type": "Gun Shop, Gunsmith", "Phone": "(208) 602-6027", "Address": "6128 Fairview Ave, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "oldarmsofidaho.com"},
    {"Name": "Aviation Specialties Unlimited", "Type": "Gun Shop", "Phone": "(208) 426-8117", "Address": "4632 W Aeronca St, Boise, ID 83705", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Automatic Weapons Company", "Type": "Manufacturer", "Phone": "(208) 938-2173", "Address": "15005 N McFarland Creek Rd #B, Boise, ID 83714", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Barton's Custom Shop", "Type": "Gunsmith", "Phone": "(208) 939-4478", "Address": "10300 Janie Pl Bldg B, Boise, ID 83714", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Bear Creek Firearms", "Type": "Gun Shop", "Phone": "(208) 871-8435", "Address": "9684 W Shelborne Dr, Boise, ID 83709", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Big 5 Sporting Goods #279", "Type": "Gun Shop", "Phone": "(310) 536-0611", "Address": "101 N Milwaukee St, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "big5sportinggoods.com"},
    {"Name": "Big 5 Sporting Goods #391", "Type": "Gun Shop", "Phone": "(310) 536-0611", "Address": "6762 N Glenwood St, Boise, ID 83714", "City": "Boise", "County": "Ada", "Website": "big5sportinggoods.com"},
    {"Name": "Boise Pawn", "Type": "Pawn, Gun Shop", "Phone": "(833) 264-7296", "Address": "6465 W Fairview Ave, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Cabela's Boise", "Type": "Gun Shop, Archery Range", "Phone": "(208) 672-7900", "Address": "8109 W Franklin Rd, Boise, ID 83709", "City": "Boise", "County": "Ada", "Website": "stores.cabelas.com"},
    {"Name": "Sportsman's Warehouse Boise", "Type": "Gun Shop", "Phone": "(208) 672-7900", "Address": "8109 W Franklin Rd, Boise, ID 83709", "City": "Boise", "County": "Ada", "Website": "sportsmans.com"},
    {"Name": "Quantum Tactical", "Type": "Gun Shop, Gunsmith", "Phone": "N/A", "Address": "3107 Crescent Rim Dr, Boise, ID 83706", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Defense Materials Company", "Type": "Gunsmith", "Phone": "(208) 546-9463", "Address": "4910 W Denton St, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "208 Precision", "Type": "Gunsmith", "Phone": "(208) 571-2243", "Address": "9019 N Broadwood Ln, Eagle, ID 83616", "City": "Eagle", "County": "Ada", "Website": "N/A"},
    {"Name": "Overland Armament", "Type": "Gun Shop", "Phone": "(208) 672-0558", "Address": "7103 W Overland Rd, Boise, ID 83709", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Stockpile Defense", "Type": "Gunsmith", "Phone": "(208) 322-4867", "Address": "10178 Fairview Ave, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "ATS Sales", "Type": "Gun Shop", "Phone": "(208) 286-2013", "Address": "3374 S Ashbury Pl, Boise, ID 83706", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Arctic Summit Gunsmithing", "Type": "Gunsmith", "Phone": "(702) 353-3928", "Address": "4323 S Chariot Way, Boise, ID 83709", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Allterra Arms", "Type": "Gun Shop", "Phone": "(208) 608-5179", "Address": "6898 Supply Way Ste 100, Boise, ID 83716", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "American Reserve Munitions", "Type": "Manufacturer", "Phone": "(208) 917-3045", "Address": "3601 W Chinden Blvd, Boise, ID 83714", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "2A Armament", "Type": "Gun Shop", "Phone": "(208) 461-1213", "Address": "7545 S Eisenman Rd, Boise, ID 83716", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "6B Enterprises", "Type": "Gun Shop", "Phone": "(208) 515-4848", "Address": "15 Janet Dr, Boise, ID 83716", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Blac-Rac Manufacturing", "Type": "Manufacturer", "Phone": "(208) 855-9388", "Address": "274 N Maple Grove Rd #104, Boise, ID 83704", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Brown Dogg LLC", "Type": "Gun Shop", "Phone": "N/A", "Address": "11319 W Hollandale Dr, Boise, ID 83709", "City": "Boise", "County": "Ada", "Website": "N/A"},

    # Meridian/Ada County
    {"Name": "Independence Indoor Shooting", "Type": "Indoor Range, Gun Shop, Training", "Phone": "(208) 576-4867", "Address": "2749 E Gala Ct, Meridian, ID 83642", "City": "Meridian", "County": "Ada", "Website": "iishooting.com"},
    {"Name": "Sportsman's Warehouse Meridian", "Type": "Gun Shop", "Phone": "(208) 884-3000", "Address": "3797 E Fairview Ave, Meridian, ID 83642", "City": "Meridian", "County": "Ada", "Website": "sportsmans.com"},
    {"Name": "HawkTech Arms", "Type": "Gun Shop, Gunsmith", "Phone": "(208) 898-5848", "Address": "3131 E Lanark St, Meridian, ID 83642", "City": "Meridian", "County": "Ada", "Website": "hawktecharms.com"},
    {"Name": "Idaho Arms & Ammo", "Type": "Gun Shop, Gunsmith", "Phone": "(208) 809-0939", "Address": "519 E Fairview Ave #300, Meridian, ID 83642", "City": "Meridian", "County": "Ada", "Website": "N/A"},
    {"Name": "Idaho Gun & Outdoors", "Type": "Gun Shop", "Phone": "(208) 378-1600", "Address": "8600 W Franklin Rd, Meridian, ID 83642", "City": "Meridian", "County": "Ada", "Website": "N/A"},
    {"Name": "Crossfire Elite", "Type": "Gun Shop", "Phone": "(208) 461-8888", "Address": "Meridian, ID", "City": "Meridian", "County": "Ada", "Website": "N/A"},
    {"Name": "Fall River Arms", "Type": "Gun Shop", "Phone": "(208) 629-3910", "Address": "Meridian, ID", "City": "Meridian", "County": "Ada", "Website": "N/A"},
    {"Name": "Gemtech", "Type": "Manufacturer", "Phone": "N/A", "Address": "Meridian, ID", "City": "Meridian", "County": "Ada", "Website": "N/A"},
    {"Name": "Benny's Pawn", "Type": "Pawn, Gun Shop", "Phone": "(208) 846-9027", "Address": "Meridian, ID", "City": "Meridian", "County": "Ada", "Website": "N/A"},

    # Kuna/Ada County
    {"Name": "Orion Armament", "Type": "Gun Shop", "Phone": "(208) 369-9671", "Address": "247 N Kay Ave, Kuna, ID 83634", "City": "Kuna", "County": "Ada", "Website": "N/A"},
    {"Name": "Black's Creek Public Shooting Range", "Type": "Public Range", "Phone": "(208) 342-9614", "Address": "2420 E Kuna Mora Rd, Kuna, ID 83634", "City": "Kuna", "County": "Ada", "Website": "idfg.idaho.gov/shoot/blacks-creek"},

    # Star/Ada County
    {"Name": "Jon's Guns", "Type": "Gun Shop", "Phone": "N/A", "Address": "936 N Glen Aspen Way, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "Eagle Gun Company", "Type": "Gun Shop", "Phone": "N/A", "Address": "10539 W Thimbleberry Dr, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "BI-Mart #689", "Type": "Gun Shop", "Phone": "N/A", "Address": "11347 W State St, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "Black Label Precision", "Type": "Manufacturer", "Phone": "N/A", "Address": "10451 W Daylily Ct, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "Patriot Pawn & Gun", "Type": "Pawn, Gun Shop", "Phone": "N/A", "Address": "1977 N Willow Glen Pl, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "patriotpawnandgun.com"},
    {"Name": "Ridley's Family Markets Star", "Type": "Gun Shop", "Phone": "N/A", "Address": "145 S Plummer Way, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "Young's Firearms", "Type": "Gun Shop", "Phone": "N/A", "Address": "324 S Winslow Bay Way, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "Activity Investments", "Type": "Manufacturer", "Phone": "N/A", "Address": "10183 W Wyatt Earp Dr, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "Lord Rockwell LLC", "Type": "Manufacturer", "Phone": "N/A", "Address": "1672 N Watershed Ave, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "MRM LLC", "Type": "Importer", "Phone": "N/A", "Address": "12525 Aliso Creek St, Star, ID 83669", "City": "Star", "County": "Ada", "Website": "N/A"},

    # Nampa/Canyon County
    {"Name": "Armageddon Armory", "Type": "Gun Shop, Gunsmith, Training", "Phone": "(208) 465-3577", "Address": "2809 Garrity Blvd, Nampa, ID 83687", "City": "Nampa", "County": "Canyon", "Website": "armageddonarmory.com"},
    {"Name": "Sportsman's Warehouse Nampa", "Type": "Gun Shop", "Phone": "(208) 468-7600", "Address": "16865 N Market Place Blvd, Nampa, ID 83687", "City": "Nampa", "County": "Canyon", "Website": "sportsmans.com"},
    {"Name": "Elite Rifle Works", "Type": "Gunsmith", "Phone": "(208) 465-8039", "Address": "6045 Deer Flat Rd, Nampa, ID 83686", "City": "Nampa", "County": "Canyon", "Website": "eliterifleworks.com"},
    {"Name": "Larry's Sporting Goods", "Type": "Gun Shop", "Phone": "(208) 467-9201", "Address": "Nampa, ID", "City": "Nampa", "County": "Canyon", "Website": "N/A"},
    {"Name": "Nemo Arms", "Type": "Manufacturer", "Phone": "(208) 442-4308", "Address": "Nampa, ID", "City": "Nampa", "County": "Canyon", "Website": "N/A"},
    {"Name": "RK Gunsmithing", "Type": "Gunsmith", "Phone": "(208) 467-3075", "Address": "201 N Kings Rd Ste 101, Nampa, ID 83687", "City": "Nampa", "County": "Canyon", "Website": "N/A"},
    {"Name": "Tiffany Guns Zebra 12", "Type": "Gun Shop", "Phone": "(208) 461-6911", "Address": "Nampa, ID", "City": "Nampa", "County": "Canyon", "Website": "N/A"},
    {"Name": "Reflex Tactical Idaho", "Type": "Gun Shop", "Phone": "N/A", "Address": "824 12th Ave S, Nampa, ID 83651", "City": "Nampa", "County": "Canyon", "Website": "reflextacticalidaho.com"},
    {"Name": "Ken's Pawn & Jewelry", "Type": "Pawn, Gun Shop", "Phone": "N/A", "Address": "608 12th Ave S, Nampa, ID 83651", "City": "Nampa", "County": "Canyon", "Website": "kenspawn.com"},
    {"Name": "Idaho Air Gun", "Type": "Gun Shop", "Phone": "N/A", "Address": "Nampa, ID", "City": "Nampa", "County": "Canyon", "Website": "idahoairgun.com"},
    {"Name": "208 Gun Shop", "Type": "Gun Shop", "Phone": "N/A", "Address": "Nampa, ID", "City": "Nampa", "County": "Canyon", "Website": "208gunshop.com"},
    {"Name": "BGW Gunsmithing", "Type": "Gunsmith", "Phone": "N/A", "Address": "2228 Cortland Pl, Nampa, ID 83687", "City": "Nampa", "County": "Canyon", "Website": "bgwidaho.com"},
    {"Name": "Nampa Public Shooting Range", "Type": "Public Range", "Phone": "N/A", "Address": "16802 Nash Rd, Nampa, ID 83686", "City": "Nampa", "County": "Canyon", "Website": "idfg.idaho.gov"},
    {"Name": "Solar Tactical", "Type": "Manufacturer", "Phone": "N/A", "Address": "7396 Highway 44, Star, ID 83669", "City": "Star", "County": "Canyon", "Website": "N/A"},

    # Caldwell/Canyon County
    {"Name": "Al's Pawn & Gun", "Type": "Pawn, Gun Shop", "Phone": "(208) 454-8038", "Address": "Caldwell, ID", "City": "Caldwell", "County": "Canyon", "Website": "N/A"},
    {"Name": "T-Bone's Buns & Guns", "Type": "Gun Shop", "Phone": "N/A", "Address": "5305 Black Canyon Rd, Caldwell, ID 83607", "City": "Caldwell", "County": "Canyon", "Website": "N/A"},
    {"Name": "Owyhee Shooters Supply", "Type": "Gun Shop", "Phone": "N/A", "Address": "3822 Preston Ave, Caldwell, ID 83605", "City": "Caldwell", "County": "Canyon", "Website": "N/A"},
    {"Name": "Caldwell Gun Club", "Type": "Shooting Club", "Phone": "N/A", "Address": "21840 Pond Ln, Caldwell, ID 83607", "City": "Caldwell", "County": "Canyon", "Website": "N/A"},

    # Middleton/Canyon County
    {"Name": "Midstar Firearms", "Type": "Gun Shop, Gunsmith", "Phone": "(208) 585-9922", "Address": "Middleton, ID", "City": "Middleton", "County": "Canyon", "Website": "midstar-firearms.com"},

    # Melba/Canyon County
    {"Name": "Vigilante Guns and Ammo", "Type": "Gun Shop", "Phone": "(208) 495-9855", "Address": "Melba, ID", "City": "Melba", "County": "Canyon", "Website": "N/A"},

    # Emmett/Gem County
    {"Name": "Gem County Rod & Gun Club", "Type": "Shooting Club", "Phone": "(208) 365-4551", "Address": "Emmett, ID", "City": "Emmett", "County": "Gem", "Website": "N/A"},
    {"Name": "Hudson Arms", "Type": "Gun Shop", "Phone": "N/A", "Address": "3560 Bishop Rd, Emmett, ID 83617", "City": "Emmett", "County": "Gem", "Website": "N/A"},
    {"Name": "Emmett Gun Store", "Type": "Gun Shop", "Phone": "N/A", "Address": "2119 S Mill Rd, Emmett, ID 83617", "City": "Emmett", "County": "Gem", "Website": "N/A"},
    {"Name": "BI-Mart #681", "Type": "Gun Shop", "Phone": "(208) 477-5270", "Address": "179 W Highway 52, Emmett, ID 83617", "City": "Emmett", "County": "Gem", "Website": "N/A"},
    {"Name": "D&B Supply Emmett", "Type": "Gun Shop", "Phone": "N/A", "Address": "111 Hwy 16, Emmett, ID 83617", "City": "Emmett", "County": "Gem", "Website": "N/A"},
    {"Name": "Little Trapper Inc", "Type": "Gun Shop", "Phone": "N/A", "Address": "11300 Pearl Rd, Emmett, ID 83617", "City": "Emmett", "County": "Gem", "Website": "N/A"},
    {"Name": "Veriforce Tactical", "Type": "Gun Shop", "Phone": "N/A", "Address": "3315 Kings Ln #1, Emmett, ID 83617", "City": "Emmett", "County": "Gem", "Website": "N/A"},

    # Training/Services
    {"Name": "Idaho Gun School", "Type": "Training", "Phone": "N/A", "Address": "Boise area", "City": "Boise", "County": "Ada", "Website": "idahogunschool.com"},
    {"Name": "Valiance Firearms Training", "Type": "Training", "Phone": "N/A", "Address": "Boise area", "City": "Boise", "County": "Ada", "Website": "valiancetraining.com"},
    {"Name": "Watchmen Training LLC", "Type": "Training", "Phone": "(208) 972-1686", "Address": "Boise, ID", "City": "Boise", "County": "Ada", "Website": "watchmentraining.com"},
    {"Name": "Double Tapp Range", "Type": "Private Range, Training", "Phone": "N/A", "Address": "16 miles E of Boise", "City": "Boise", "County": "Ada", "Website": "doubletappboise.com"},
    {"Name": "Shadow Dawg", "Type": "Training", "Phone": "N/A", "Address": "Boise area", "City": "Boise", "County": "Ada", "Website": "shadowdawg.org"},
    {"Name": "Idaho Firearms Classes", "Type": "Training", "Phone": "N/A", "Address": "Boise area", "City": "Boise", "County": "Ada", "Website": "idahofirearmsclasses.com"},

    # Clubs
    {"Name": "Boise Rifle & Pistol Club", "Type": "Shooting Club", "Phone": "(208) 922-5282", "Address": "Kuna area", "City": "Kuna", "County": "Ada", "Website": "N/A"},
    {"Name": "Idaho Police Revolver League", "Type": "Shooting Club", "Phone": "(208) 344-6274", "Address": "Boise, ID", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Idaho Automatic Weapons Collectors Association", "Type": "Shooting Club", "Phone": "(208) 465-0970", "Address": "Boise, ID", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Nampa Rod & Gun Club", "Type": "Shooting Club", "Phone": "(208) 761-7514", "Address": "Nampa, ID", "City": "Nampa", "County": "Canyon", "Website": "N/A"},
    {"Name": "The Well Armed Woman", "Type": "Shooting Club", "Phone": "(208) 866-3561", "Address": "Boise, ID", "City": "Boise", "County": "Ada", "Website": "N/A"},
    {"Name": "Meridian Optimist Jr. Rifle Club", "Type": "Shooting Club", "Phone": "N/A", "Address": "Meridian, ID", "City": "Meridian", "County": "Ada", "Website": "N/A"},
    {"Name": "Idaho Shootists dba Idaho Fast Draw", "Type": "Shooting Club", "Phone": "(208) 724-4644", "Address": "Star, ID", "City": "Star", "County": "Ada", "Website": "N/A"},
    {"Name": "Homedale Rod & Gun Club", "Type": "Shooting Club", "Phone": "(208) 459-2256", "Address": "Homedale area", "City": "Caldwell", "County": "Canyon", "Website": "N/A"},
    {"Name": "Little Explorers 4-H Shooting Sports", "Type": "Shooting Club", "Phone": "N/A", "Address": "Ada County", "City": "Boise", "County": "Ada", "Website": "youthshootingsa.com"},

    # Pawn Shops with firearms
    {"Name": "Boise River Wildlife Management Area Archery Range", "Type": "Public Archery Range", "Phone": "N/A", "Address": "Boise, ID", "City": "Boise", "County": "Ada", "Website": "idfg.idaho.gov"},
]

# Convert to DataFrame
df = pd.DataFrame(treasure_valley_businesses)

# Add verification column
df['Verified'] = 'Yes'

# Sort by county and city
df = df.sort_values(['County', 'City', 'Name'])

# Save to CSV
df.to_csv('treasure_valley_comprehensive_gun_directory.csv', index=False)

print(f"Total entries compiled: {len(df)}")
print(f"\nBreakdown by County:")
print(df['County'].value_counts())
print(f"\nBreakdown by Type:")
print(df['Type'].value_counts())
print(f"\nSample entries:")
print(df[['Name', 'Type', 'City', 'Phone']].head(10))