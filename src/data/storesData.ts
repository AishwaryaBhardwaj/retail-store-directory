import { StoreEntity } from "@/types/store";

export const STORES_DATA: StoreEntity[] = [
  {
    id: "apex-store-0142",
    slug: "austin",
    name: "Apex Sports + Outdoors - Austin, Texas",
    storeNumber: "Store #0142 (Research Blvd)",
    tagline: "Your Central Texas Headquarters for Hunting, Fishing, Yeti Coolers & Outdoors",
    brand: "Apex Sports + Outdoors",
    description: "Full-line sporting goods and outdoor recreation superstore serving North Austin, Round Rock, and Cedar Park. Featuring certified archery pro shop, live bait & Texas hunting/fishing licensing, Yeti authorized demonstration depot, firearm counter, and baseball glove steaming.",
    establishedYear: 1994,
    squareFootage: 72000,
    telephone: "+1-512-452-9500",
    email: "store0142@apexoutdoors.com",
    priceRange: "$$",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    address: {
      streetAddress: "8944 Research Blvd",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78758",
      addressCountry: "US",
    },
    geo: {
      latitude: 30.370142,
      longitude: -97.728913,
      mapUrl: "https://maps.google.com/?q=30.370142,-97.728913",
    },
    regularHours: [
      { dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Friday", opens: "09:00", closes: "22:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "22:00" },
      { dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
    ],
    departments: [
      {
        id: "dept-hunting-archery",
        name: "Hunting & Archery Depot",
        slug: "hunting",
        description: "Texas Parks & Wildlife official license agent, computerized bow tuning, scope mounting, and secure locked firearm display.",
        iconName: "Target",
        manager: "Colt Sterling",
        phoneExtension: "Ext. 201",
        featuredServices: ["TPWD License Agent", "Bow Paper Tuning", "Boresighting", "Ammo Locker"],
        trendingKeywords: ["hunting licenses Austin", "bow tuning near me", "shotgun shells", "deer blinds"]
      },
      {
        id: "dept-outdoor-camping",
        name: "Yeti & Outdoor Camp Hub",
        slug: "outdoor-camping",
        description: "Official Austin Yeti Showcase featuring tundra hard coolers, ice chests, hoppers, drinkware, and camp kitchen cooking setups.",
        iconName: "Tent",
        manager: "Sarah Jenkins",
        phoneExtension: "Ext. 205",
        featuredServices: ["Yeti Authorized Reseller", "Tent Display Floor", "Camp Chef Demonstrations", "Propane Exchange"],
        trendingKeywords: ["Yeti cooler near me", "Yeti Tundra 45 Austin", "camp stoves in stock", "ice chests"]
      },
      {
        id: "dept-fishing-marine",
        name: "Fishing & Lake Travis Tackle",
        slug: "fishing-marine",
        description: "Curated tackle for Lake Travis, Lake Austin, and Highland Lakes bass fishing. Fresh live minnows, worms, line spooling, and kayak rigging.",
        iconName: "Fish",
        manager: "Marcus Alvarado",
        phoneExtension: "Ext. 203",
        featuredServices: ["Free Line Spooling", "Live Minnow Tank", "Rod Repair Advice", "Kayak Roof Racks"],
        trendingKeywords: ["Lake Travis bass lures", "fishing license Austin", "live bait near me", "Shimano reels"]
      },
      {
        id: "dept-apparel-footwear",
        name: "Apparel & Western Footwear",
        slug: "apparel",
        description: "Columbia PFG, Carhartt, Nike, Under Armour, Magellan Outdoors, and dedicated boot corral with Justin and Ariat work/western boots.",
        iconName: "Shirt",
        manager: "Elena Vance",
        phoneExtension: "Ext. 208",
        featuredServices: ["Boot Fitting Specialists", "Shoe Width Sizing", "Special Order Fulfillment"],
        trendingKeywords: ["Carhartt jackets Austin", "work boots near me", "Columbia PFG shirts", "hiking shoes"]
      },
      {
        id: "dept-sports-fitness",
        name: "Sports, Fitness & Team Athletics",
        slug: "sports-fitness",
        description: "Hot glove steaming for Rawlings and Wilson gloves, basketball hoop assembly consults, pickleball demo paddles, and weight plates.",
        iconName: "Activity",
        manager: "David Tran",
        phoneExtension: "Ext. 210",
        featuredServices: ["Glove Steaming Machine", "Pickleball Paddle Demo", "Weight Room Delivery"],
        trendingKeywords: ["baseball glove break in", "pickleball paddles in stock", "kettlebells Austin"]
      },
      {
        id: "dept-fan-shop",
        name: "Texas Longhorns & Austin FC Fan Shop",
        slug: "fan-shop",
        description: "The premier local fan outpost for burnt orange University of Texas collegiate gear, Austin FC jerseys, and Dallas Cowboys apparel.",
        iconName: "Award",
        manager: "Brianna Scott",
        phoneExtension: "Ext. 214",
        featuredServices: ["Official NCAA Licensed Gear", "Matchday Custom Jerseys", "Tailgate Supplies"],
        trendingKeywords: ["Texas Longhorns hat Austin", "Austin FC jersey near me", "UT football tailgate gear"]
      }
    ],
    inventory: [
      {
        sku: "YETI-TUN-45-NVY",
        gtin: "888830022411",
        name: "Yeti Tundra 45 Hard Cooler - Navy Blue",
        brand: "Yeti",
        category: "Coolers & Ice Chests",
        price: 325.00,
        availability: "InStock",
        quantityOnHand: 8,
        aisle: "Aisle 14B",
        bay: "Bay 3 (Endcap)",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Where can I buy a Yeti cooler near me right now?",
        imageUrl: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=600&q=80",
        highlights: ["Holds 28 cans with 2:1 ice ratio", "Rotomolded bear-proof construction", "Ready for Curbside Pickup in 60 mins"]
      },
      {
        sku: "YETI-ROD-24-WHT",
        gtin: "888830022534",
        name: "Yeti Roadie 24 Hard Cooler - Desert Tan",
        brand: "Yeti",
        category: "Coolers & Ice Chests",
        price: 250.00,
        availability: "InStock",
        quantityOnHand: 14,
        aisle: "Aisle 14B",
        bay: "Bay 1",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Where can I buy a Yeti roadie cooler in Austin today?",
        imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        highlights: ["Fits upright 2-liter bottles", "HeftyHauler handle for easy transport", "10% lighter than predecessor"]
      },
      {
        sku: "YETI-RAM-30-BLK",
        gtin: "888830099120",
        name: "Yeti Rambler 30 oz Stainless Steel Tumbler with MagSlider",
        brand: "Yeti",
        category: "Drinkware",
        price: 38.00,
        availability: "InStock",
        quantityOnHand: 32,
        aisle: "Aisle 14A",
        bay: "Front Display",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Yeti 30 oz tumbler in stock near me",
        imageUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
        highlights: ["Double-wall vacuum insulation", "Dishwasher safe & cupholder friendly", "Austin store exclusive laser-engraved edition"]
      },
      {
        sku: "GAR-ECHO-73SV",
        gtin: "753759310245",
        name: "Garmin ECHOMAP UHD2 73sv Touchscreen Fishfinder",
        brand: "Garmin",
        category: "Marine Electronics",
        price: 849.99,
        salePrice: 799.99,
        availability: "InStock",
        quantityOnHand: 4,
        aisle: "Aisle 21A",
        bay: "Locked Glass Bay 2",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Where to buy Garmin fishfinder near Austin today?",
        imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=600&q=80",
        highlights: ["Ultra High-Definition ClearVü sonar", "Preloaded LakeVü g3 inland maps", "High-contrast vivid color palettes"]
      },
      {
        sku: "RAW-HOH-PRO204",
        gtin: "083321714209",
        name: "Rawlings Heart of the Hide 11.5\" Infield Baseball Glove",
        brand: "Rawlings",
        category: "Baseball & Softball",
        price: 299.95,
        availability: "InStock",
        quantityOnHand: 6,
        aisle: "Aisle 07C",
        bay: "Glove Steaming Bar",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Rawlings baseball glove in stock near me with steaming",
        imageUrl: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=600&q=80",
        highlights: ["Top 5% steer hide leather", "Complimentary in-store break-in steam service", "Pro I-Web infield pattern"]
      },
      {
        sku: "COL-PFG-BAHAMA-XL",
        gtin: "194895821045",
        name: "Columbia PFG Bahama II Short-Sleeve Fishing Shirt",
        brand: "Columbia",
        category: "Outdoor Apparel",
        price: 48.00,
        availability: "InStock",
        quantityOnHand: 24,
        aisle: "Aisle 03D",
        bay: "Rack 4",
        pickupTimeMinutes: 60,
        trendingNearMe: false,
        nearMeQueryIntent: "Columbia PFG fishing shirts near me",
        imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
        highlights: ["Omni-Shade UPF 50 sun protection", "Quick dry mesh-lined back vents", "Rod holder tab on chest"]
      },
      {
        sku: "BLA-GRID-28-STN",
        gtin: "717604160502",
        name: "Blackstone Original 28\" Griddle Cooking Station with Hood",
        brand: "Blackstone",
        category: "Camp & Tailgate Cooking",
        price: 299.99,
        availability: "InStock",
        quantityOnHand: 5,
        aisle: "Aisle 16B",
        bay: "Floor Display",
        pickupTimeMinutes: 90,
        trendingNearMe: true,
        nearMeQueryIntent: "Blackstone griddle near me Austin",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
        highlights: ["34,000 BTUs dual burners", "Rear grease management system", "Free assembly assistance available"]
      },
      {
        sku: "SEL-LUX-AMP-PADDLE",
        gtin: "810052341029",
        name: "Selkirk Amped Epic Pickleball Paddle (Midweight)",
        brand: "Selkirk",
        category: "Pickleball & Racquets",
        price: 149.99,
        availability: "InStock",
        quantityOnHand: 11,
        aisle: "Aisle 09A",
        bay: "Paddle Demo Rack",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Selkirk pickleball paddle in stock Austin",
        imageUrl: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=600&q=80",
        highlights: ["FiberFlex fiberglass face", "X5 Polypropylene Core for vibration control", "USAPA Approved for tournament play"]
      }
    ],
    amenities: [
      "2-Hour Curbside Drive-Up Pickup",
      "Texas Hunting & Fishing License Issuance",
      "Yeti Authorized Premium Dealer & Cooler Staging",
      "In-Store Archery Paper Tuning & Arrow Fletching",
      "Free Fishing Line Spooling (with spool purchase)",
      "Baseball Glove Steaming & Mallet Shaping Machine",
      "Bicycle Assembly & Safety Check Station",
      "Propane Tank Exchange / Purchase",
      "EV Charging Stations in Front Lot",
      "ADA Compliant Wide Aisles & Electric Wheelchair Carts"
    ],
    faqs: [
      {
        question: "Where can I buy a Yeti cooler near me in Austin right now?",
        answer: "Apex Sports + Outdoors at 8944 Research Blvd, Austin, TX 78758 has Yeti Tundra 45, Roadie 24, Hopper Soft Coolers, and Rambler Tumblers physically in stock on Aisle 14B today. You can purchase in store immediately or order online with free Curbside Pickup ready in 60 minutes."
      },
      {
        question: "Can I get my Texas hunting and fishing license printed at this Austin store?",
        answer: "Yes, our Hunting & Archery Depot (Department counter) is an authorized Texas Parks & Wildlife Department (TPWD) agent. We print freshwater/saltwater fishing licenses, super combos, and deer tags immediately at the counter with valid photo ID."
      },
      {
        question: "Do you steam and break in new baseball gloves at this location?",
        answer: "Yes! Our Sports & Fitness department features an industrial hot glove steaming machine. When you purchase a Rawlings, Wilson, or Mizuno glove here, our staff applies conditioning foam, 150°F steam treatment, and mallet shaping free of charge."
      },
      {
        question: "What are the curbside pickup hours at the Austin Research Blvd store?",
        answer: "Curbside pickup is available Monday through Saturday from 9:00 AM to 8:30 PM, and Sunday from 10:00 AM to 7:30 PM. Designated parking spots are located right in front of the main entrance."
      }
    ],
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 1482,
      bestRating: 5
    },
    localAnnouncements: [
      "🔥 High Demand: Yeti Tundra 45 Coolers restocked this morning in Aisle 14B.",
      "🎣 Live bait delivery: Minnows and red worms freshly restocked for Highland Lakes fishing.",
      "⚡ Free Curbside Drive-Up: Orders placed before 6:00 PM ready in under 60 minutes."
    ]
  },
  {
    id: "apex-store-0010",
    slug: "houston",
    name: "Apex Sports + Outdoors - Houston, Texas",
    storeNumber: "Store #0010 (Katy Freeway Flagship)",
    tagline: "Apex Sports Headquarters Flagship - Gulf Coast Fishing & Outdoors",
    brand: "Apex Sports + Outdoors",
    description: "Houston Flagship store featuring massive saltwater marine department, Galveston offshore tackle, Yeti super-center, firearms training simulator, and youth team sports outfitter.",
    establishedYear: 1982,
    squareFootage: 85000,
    telephone: "+1-281-646-5200",
    email: "store0010@apexoutdoors.com",
    priceRange: "$$",
    heroImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    address: {
      streetAddress: "1800 N Mason Rd",
      addressLocality: "Katy / Houston",
      addressRegion: "TX",
      postalCode: "77449",
      addressCountry: "US",
    },
    geo: {
      latitude: 29.791550,
      longitude: -95.750840,
      mapUrl: "https://maps.google.com/?q=29.791550,-95.750840",
    },
    regularHours: [
      { dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Friday", opens: "09:00", closes: "22:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "22:00" },
      { dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
    ],
    departments: [
      {
        id: "dept-gulf-marine",
        name: "Gulf Coast Saltwater & Offshore Marine",
        slug: "fishing-marine",
        description: "Specialized in Galveston Bay trout and redfish tackle, offshore trolling rigs, electric downriggers, and boat maintenance.",
        iconName: "Fish",
        featuredServices: ["Spooling up to 100lb Braid", "Offshore Hook Rigging", "TPWD Saltwater Stamps"],
        trendingKeywords: ["Galveston fishing gear", "saltwater rods", "boat trailers"]
      },
      {
        id: "dept-outdoor-camping-hou",
        name: "Yeti & Extreme Cooler Depot",
        slug: "outdoor-camping",
        description: "Largest Yeti selection in Southeast Texas. Tundra 35 to 250 commercial sizes in stock.",
        iconName: "Tent",
        featuredServices: ["Yeti Commercial Inventory", "Ice Delivery Staging", "Custom Laser Engraving"],
        trendingKeywords: ["Yeti coolers Houston", "ice chests Katy TX", "Yeti commercial cooler"]
      },
      {
        id: "dept-houston-fan",
        name: "Houston Astros & Texans Fan Zone",
        slug: "fan-shop",
        description: "Official MLB Astros replica jerseys, World Series championship gear, and Texans apparel.",
        iconName: "Award",
        featuredServices: ["Astros Name Printing", "Tailgate Tents"],
        trendingKeywords: ["Astros jerseys", "Houston Texans gear", "Minute Maid tailgate"]
      }
    ],
    inventory: [
      {
        sku: "YETI-TUN-65-WHT",
        gtin: "888830022602",
        name: "Yeti Tundra 65 Hard Cooler - White",
        brand: "Yeti",
        category: "Coolers & Ice Chests",
        price: 375.00,
        availability: "InStock",
        quantityOnHand: 18,
        aisle: "Aisle 12B",
        bay: "Main Entrance Display",
        pickupTimeMinutes: 45,
        trendingNearMe: true,
        nearMeQueryIntent: "Where can I buy a Yeti 65 cooler near Houston right now?",
        imageUrl: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=600&q=80",
        highlights: ["Fits 42 cans of beverage", "Marine grade tie-down slots", "Ready in 45 mins at Katy Flagship"]
      },
      {
        sku: "SHI-STRAD-FL4000",
        gtin: "022255225114",
        name: "Shimano Stradic FM 4000 Saltwater Spinning Reel",
        brand: "Shimano",
        category: "Fishing Reels",
        price: 239.99,
        availability: "InStock",
        quantityOnHand: 7,
        aisle: "Aisle 18A",
        pickupTimeMinutes: 45,
        trendingNearMe: true,
        nearMeQueryIntent: "Shimano Stradic reel in stock Houston",
        imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=600&q=80",
        highlights: ["Hagane body gearing", "X-Protect waterproof maze", "Free 30lb braid spooling with purchase"]
      }
    ],
    amenities: [
      "Curbside Drive-Up Ready in 45 Mins",
      "Saltwater Line Spooling up to 100lb",
      "Full TPWD License Agent",
      "Custom Laser Engraving on Yeti Drinkware",
      "Kayak Rigging & Trailer Hitch Install Assistance"
    ],
    faqs: [
      {
        question: "Does the Houston Katy store have large Yeti coolers in stock?",
        answer: "Yes, Store #0010 carries the complete Yeti line up through Tundra 65, 75, and 125 series in white, navy, and desert tan."
      }
    ],
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 2340,
      bestRating: 5
    },
    localAnnouncements: [
      "⚓ Saltwater Tackle Restock: Fresh offshore trolling spoons and braid arrived today.",
      "🚗 45-Minute Curbside Fulfillment guaranteed at Katy Freeway pickup lanes."
    ]
  },
  {
    id: "apex-store-0088",
    slug: "dallas",
    name: "Apex Sports + Outdoors - Dallas, Texas",
    storeNumber: "Store #0088 (Forest Lane / North Dallas)",
    tagline: "North Texas Hub for Whitetail Hunting, Golf, Yeti & Sports",
    brand: "Apex Sports + Outdoors",
    description: "North Dallas location specializing in deer hunting leases, optics, golf club custom fitting, Yeti camp equipment, and Dallas Cowboys official apparel.",
    establishedYear: 1998,
    squareFootage: 70000,
    telephone: "+1-214-349-8800",
    email: "store0088@apexoutdoors.com",
    priceRange: "$$",
    heroImage: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1600&q=80",
    address: {
      streetAddress: "6375 E Northwest Hwy",
      addressLocality: "Dallas",
      addressRegion: "TX",
      postalCode: "75231",
      addressCountry: "US",
    },
    geo: {
      latitude: 32.864720,
      longitude: -96.755490,
      mapUrl: "https://maps.google.com/?q=32.864720,-96.755490",
    },
    regularHours: [
      { dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Friday", opens: "09:00", closes: "22:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "22:00" },
      { dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
    ],
    departments: [
      {
        id: "dept-hunting-dal",
        name: "North Texas Hunting & Gun Library",
        slug: "hunting",
        description: "Deer lease prep headquarters, night vision hog hunting optics, premium ammo stock.",
        iconName: "Target",
        featuredServices: ["Optics Zeroing Assistance", "TPWD Big Game Tags"],
        trendingKeywords: ["hunting rifles Dallas", "hog lights", "deer corn feeders"]
      },
      {
        id: "dept-yeti-dal",
        name: "Yeti & Tailgate Central",
        slug: "outdoor-camping",
        description: "Official tailgating cooler headquarters for AT&T Stadium and Cotton Bowl weekends.",
        iconName: "Tent",
        featuredServices: ["Yeti Ice Demonstration", "Tailgate Packages"],
        trendingKeywords: ["Yeti cooler Dallas", "tailgate coolers AT&T stadium"]
      }
    ],
    inventory: [
      {
        sku: "YETI-TUN-45-WHT",
        gtin: "888830022428",
        name: "Yeti Tundra 45 Hard Cooler - White",
        brand: "Yeti",
        category: "Coolers & Ice Chests",
        price: 325.00,
        availability: "InStock",
        quantityOnHand: 12,
        aisle: "Aisle 15A",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Buy Yeti cooler Dallas near me today",
        imageUrl: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=600&q=80",
        highlights: ["Certified bear-resistant", "Permafrost insulation", "Ready for Curbside Pickup"]
      }
    ],
    amenities: [
      "Curbside Drive-Up Pickup",
      "TPWD License Issuance",
      "Golf Grip Regripping Station",
      "Archery Range Lane"
    ],
    faqs: [
      {
        question: "Can I buy Yeti coolers at the Dallas Northwest Hwy location today?",
        answer: "Yes, this Dallas store has full stock of Yeti Tundra 45 and Roadie coolers in aisle 15A available for immediate walk-in or curbside pickup."
      }
    ],
    aggregateRating: {
      ratingValue: 4.7,
      reviewCount: 1195,
      bestRating: 5
    }
  },
  {
    id: "apex-store-0220",
    slug: "atlanta",
    name: "Apex Sports + Outdoors - Atlanta, Georgia",
    storeNumber: "Store #0220 (Perimeter / Dunwoody)",
    tagline: "Metro Atlanta Outdoor Gear, Lake Lanier Boating & SEC Tailgate",
    brand: "Apex Sports + Outdoors",
    description: "Serving North Atlanta with Lake Lanier marine essentials, Appalachian trail hiking gear, Yeti coolers, Georgia Bulldogs national championship merch, and softball/baseball training.",
    establishedYear: 2008,
    squareFootage: 68000,
    telephone: "+1-770-551-8900",
    email: "store0220@apexoutdoors.com",
    priceRange: "$$",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    address: {
      streetAddress: "1155 Mt Vernon Hwy",
      addressLocality: "Atlanta (Dunwoody)",
      addressRegion: "GA",
      postalCode: "30338",
      addressCountry: "US",
    },
    geo: {
      latitude: 33.931750,
      longitude: -84.341820,
      mapUrl: "https://maps.google.com/?q=33.931750,-84.341820",
    },
    regularHours: [
      { dayOfWeek: "Monday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Tuesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Wednesday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Thursday", opens: "09:00", closes: "21:00" },
      { dayOfWeek: "Friday", opens: "09:00", closes: "22:00" },
      { dayOfWeek: "Saturday", opens: "08:00", closes: "22:00" },
      { dayOfWeek: "Sunday", opens: "10:00", closes: "20:00" },
    ],
    departments: [
      {
        id: "dept-hiking-atl",
        name: "Blue Ridge & Appalachian Trail Outfitters",
        slug: "hiking-camping",
        description: "Backpacking stoves, hydration bladders, trekking poles, and lightweight camp sleep systems.",
        iconName: "Compass",
        featuredServices: ["Pack Weight Sizing", "Hydration System Testing"],
        trendingKeywords: ["hiking gear Atlanta", "trail backpacks", "camping stoves"]
      },
      {
        id: "dept-yeti-atl",
        name: "Yeti Cooler & SEC Tailgate Outpost",
        slug: "outdoor-camping",
        description: "Authorized Yeti retailer featuring red and black tailgate tumblers and Tundra hard coolers.",
        iconName: "Tent",
        featuredServices: ["Yeti Warranty Exchange", "Curbside Loading"],
        trendingKeywords: ["Yeti cooler Atlanta near me", "Georgia tailgate cooler"]
      }
    ],
    inventory: [
      {
        sku: "YETI-TUN-45-RED",
        gtin: "888830022435",
        name: "Yeti Tundra 45 Hard Cooler - Harvest Red",
        brand: "Yeti",
        category: "Coolers & Ice Chests",
        price: 325.00,
        availability: "InStock",
        quantityOnHand: 9,
        aisle: "Aisle 11C",
        pickupTimeMinutes: 60,
        trendingNearMe: true,
        nearMeQueryIntent: "Where to buy Yeti cooler Atlanta right now",
        imageUrl: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=600&q=80",
        highlights: ["SEC Gameday Edition", "ColdLock gasket", "Curbside Pickup in 60 mins"]
      }
    ],
    amenities: [
      "Curbside Drive-Up",
      "Georgia DNR Hunting & Fishing License Desk",
      "Pickleball Demo Court",
      "Tent Pitching Showcase"
    ],
    faqs: [
      {
        question: "Can I buy Yeti coolers near Perimeter Mall in Atlanta?",
        answer: "Yes, Apex Sports at 1155 Mt Vernon Hwy is located right by Perimeter Mall and stocks Yeti Tundra and Hopper coolers daily."
      }
    ],
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 978,
      bestRating: 5
    }
  }
];

export function getStoreBySlug(slug: string): StoreEntity | undefined {
  const normalized = slug.toLowerCase().trim();
  return STORES_DATA.find((s) => s.slug.toLowerCase() === normalized);
}

export function getAllStoreSlugs(): string[] {
  return STORES_DATA.map((s) => s.slug);
}
