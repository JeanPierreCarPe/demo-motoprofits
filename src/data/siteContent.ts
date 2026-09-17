export const navLinks = {
  left: [
    { label: "Live Auctions", href: "/auctions" },
    { label: "Collection", href: "/collection" },
  ],
  right: [
    { label: "How it works", href: "/how-it-works" },
  ],
  cta: { label: "Get Started", href: "/auth" },
};

export const hero = {
  headlineLines: ["Motors", "To", "Millions"],
  paragraph:
    "Get an AI-backed valuation, list in minutes, and let verified buyers compete for your vehicle in a live auction. Bank-secured payments and payout within 24 hours of your sale — no hidden fees, no waiting on a buyer.",
  primaryCta: "Get Started Now",
  primaryCtaHref: "/auth",
  secondaryCta: "Sell Your Vehicle",
  secondaryCtaHref: "/sell",
  backgroundImage: "/images/hero-background.webp",
};

export type VehicleStat = {
  icon: string;
  value: string;
  label: string;
};

export type LiveAuction = {
  name: string;
  image: string;
  endsInSeconds: number;
  badge: string;
  model: string;
  specs: string;
  stats: VehicleStat[];
  currentBid: string;
  activeBidders: string;
};

export const liveAuctionsSection = {
  eyebrowLeft: "Live",
  eyebrowRight: "Auctions",
  paragraph:
    "Join thousands of buyers and sellers in our fast-paced live auctions. Premium vehicles, competitive bidding, and instant results.",
  cta: "View All Live Auctions",
  ctaHref: "/auctions",
};

export const liveAuctions: LiveAuction[] = [
  {
    name: "Ford Mustang Fastback",
    image: "/images/ford-mustang-fastback.webp",
    endsInSeconds: 7777,
    badge: "Premium",
    model: "Model 1967",
    specs: "390 V8 Engine • 320hp Performance",
    stats: [
      { icon: "/images/miles-icon.svg", value: "67,420", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Restored", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.7", label: "Rating" },
    ],
    currentBid: "45,200",
    activeBidders: "23",
  },
  {
    name: "Porsche 911 GT3 RS",
    image: "/images/porsche-911-gt3-rs.webp",
    endsInSeconds: 7332,
    badge: "Premium",
    model: "Model 2022",
    specs: "4.0L Flat-6 • 518hp Track-Ready",
    stats: [
      { icon: "/images/miles-icon.svg", value: "1,847", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Like New", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.5", label: "Rating" },
    ],
    currentBid: "189,500",
    activeBidders: "17",
  },
  {
    name: "Harley-Davidson FLH Electra Glide",
    image: "/images/harley-davidson-flh.webp",
    endsInSeconds: 8461,
    badge: "Premium",
    model: "Model 1973",
    specs: "Shovelhead V-Twin • 1200cc Classic Power",
    stats: [
      { icon: "/images/miles-icon.svg", value: "45,230", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Original", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.9", label: "Rating" },
    ],
    currentBid: "28,750",
    activeBidders: "31",
  },
  {
    name: "Range Rover Sport",
    image: "/images/range-rover-sport.webp",
    endsInSeconds: 6154,
    badge: "Premium",
    model: "Model 2022 P530 V8",
    specs: "4.4L Twin-Turbo V8 • AWD",
    stats: [
      { icon: "/images/miles-icon.svg", value: "18,400", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Excellent", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.6", label: "Rating" },
    ],
    currentBid: "87,500",
    activeBidders: "12",
  },
];

export type WhyUsCard = {
  icon: string;
  title: string;
  description: string;
};

export const whyUsSection = {
  eyebrowLeft: "Why",
  eyebrowRight: "us?",
  paragraph: "Your security and satisfaction are our highest priorities",
};

export const whyUsCards: WhyUsCard[] = [
  {
    icon: "/images/secure-payments-icon.svg",
    title: "Secure Payments",
    description: "Bank-level encryption and secure escrow services protect every transaction",
  },
  {
    icon: "/images/fraud-protection-icon.svg",
    title: "Fraud Protection",
    description: "Advanced verification systems and 24/7 monitoring prevent fraudulent activity",
  },
  {
    icon: "/images/vehicle-verification-icon.svg",
    title: "Vehicle Verification",
    description: "Expert inspection and authentication ensure accurate vehicle descriptions",
  },
  {
    icon: "/images/seller-support-icon.svg",
    title: "Seller Support",
    description: "Dedicated support team guides you through every step of the selling process",
  },
];

export const collectionCategories = [
  "Sports Cars",
  "Motorcycles",
  "Trucks & SUVs",
  "Boats & Marine",
  "Terrain Conquerors",
];

export type CollectionVehicle = {
  category: string;
  name: string;
  image: string;
  badge: string;
  model: string;
  specs: string;
  stats: VehicleStat[];
  startingBid: string;
  auctionDate: string;
};

export const premiumCollectionSection = {
  eyebrowLeft: "Premium",
  eyebrowRight: "Collection",
  paragraph:
    "Discover our carefully curated selection of exceptional vehicles. Each one represents the pinnacle of automotive excellence, from classic collectibles to modern performance machines that deliver both style and substance.",
  viewCatalogCta: "View Full Catalog",
  viewCatalogHref: "/collection",
};

export const premiumCollection: CollectionVehicle[] = [
  {
    category: "Sports Cars",
    name: "Ferrari 488 GTB",
    image: "/images/ferrari-488-gtb.webp",
    badge: "Premium",
    model: "Model 2019 Bianco Italia",
    specs: "3.9L Twin-Turbo V8 • 661 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "6,200", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Mint", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.5", label: "Rating" },
    ],
    startingBid: "298,000",
    auctionDate: "Aug 20, 2025",
  },
  {
    category: "Sports Cars",
    name: "Chevrolet Camaro ZL1",
    image: "/images/chevrolet-camaro-zl1.webp",
    badge: "Premium",
    model: "Model 2020 Coupe",
    specs: "6.2L Supercharged V8 • 650 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "14,700", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Excellent", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.8", label: "Rating" },
    ],
    startingBid: "67,900",
    auctionDate: "Aug 25, 2025",
  },
  {
    category: "Sports Cars",
    name: "Porsche Taycan Turbo",
    image: "/images/porsche-taycan-turbo.webp",
    badge: "Premium",
    model: "Model 2022 Electric Sports Sedan",
    specs: "Dual Electric Motors • 750 hp (overboost)",
    stats: [
      { icon: "/images/miles-icon.svg", value: "5,400", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Like New", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.9", label: "Rating" },
    ],
    startingBid: "182,000",
    auctionDate: "Aug 22, 2025",
  },
  {
    category: "Sports Cars",
    name: "Ford Mustang Mach 1",
    image: "/images/ford-mustang-mach-1.webp",
    badge: "Premium",
    model: "Model 1969 Fastback",
    specs: "428 Cobra Jet V8 • 4-speed manual",
    stats: [
      { icon: "/images/miles-icon.svg", value: "78,200", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Restored", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.7", label: "Rating" },
    ],
    startingBid: "112,500",
    auctionDate: "Aug 28, 2025",
  },
  {
    category: "Motorcycles",
    name: "Ducati Panigale V4",
    image: "/images/moto-extra-01.webp",
    badge: "Premium",
    model: "Model 2023",
    specs: "1103cc V4 • 214 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "850", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Mint", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.9", label: "Rating" },
    ],
    startingBid: "42,500",
    auctionDate: "Sep 2, 2025",
  },
  {
    category: "Motorcycles",
    name: "Energica Ego Electric",
    image: "/images/moto-extra2-01.webp",
    badge: "Premium",
    model: "Model 2024 Concept",
    specs: "Electric Motor • 145 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "1,200", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Like New", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.6", label: "Rating" },
    ],
    startingBid: "28,900",
    auctionDate: "Sep 5, 2025",
  },
  {
    category: "Motorcycles",
    name: "Kawasaki Ninja ZX-10R",
    image: "/images/moto-extra2-03.webp",
    badge: "Premium",
    model: "Model 2021 Gold Edition",
    specs: "998cc Inline-4 • 203 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "3,400", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Excellent", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.7", label: "Rating" },
    ],
    startingBid: "16,800",
    auctionDate: "Sep 8, 2025",
  },
  {
    category: "Motorcycles",
    name: "Harley-Davidson Softail Breakout",
    image: "/images/moto-extra3-01.webp",
    badge: "Premium",
    model: "Model 2015 Custom",
    specs: "1690cc V-Twin • 93 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "8,900", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Custom Build", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.8", label: "Rating" },
    ],
    startingBid: "24,300",
    auctionDate: "Sep 10, 2025",
  },
  {
    category: "Trucks & SUVs",
    name: "Ram 1500 Laramie",
    image: "/images/truck-01.webp",
    badge: "Premium",
    model: "Model 2022",
    specs: "5.7L HEMI V8 • 395 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "22,100", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Excellent", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.6", label: "Rating" },
    ],
    startingBid: "48,200",
    auctionDate: "Sep 3, 2025",
  },
  {
    category: "Trucks & SUVs",
    name: "Ford F-150 Platinum",
    image: "/images/truck-02.webp",
    badge: "Premium",
    model: "Model 2021",
    specs: "3.5L EcoBoost V6 • 400 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "31,500", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Very Good", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.5", label: "Rating" },
    ],
    startingBid: "41,700",
    auctionDate: "Sep 6, 2025",
  },
  {
    category: "Trucks & SUVs",
    name: "Ford F-100 Classic",
    image: "/images/truck-03.webp",
    badge: "Premium",
    model: "Model 1979",
    specs: "351 Windsor V8 • 156 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "68,200", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Restored", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.7", label: "Rating" },
    ],
    startingBid: "19,900",
    auctionDate: "Sep 9, 2025",
  },
  {
    category: "Trucks & SUVs",
    name: "Lexus GX 460 Luxury",
    image: "/images/suv-extra-01.webp",
    badge: "Premium",
    model: "Model 2023",
    specs: "4.6L V8 • 301 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "9,800", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Like New", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.9", label: "Rating" },
    ],
    startingBid: "58,400",
    auctionDate: "Sep 12, 2025",
  },
  {
    category: "Boats & Marine",
    name: "Azimut Grande Superyacht",
    image: "/images/boat-01.webp",
    badge: "Premium",
    model: "Model 2020",
    specs: "Twin MTU Diesel • 2,600 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "340", label: "Hours" },
      { icon: "/images/condition-icon.svg", value: "Mint", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.9", label: "Rating" },
    ],
    startingBid: "1,250,000",
    auctionDate: "Sep 15, 2025",
  },
  {
    category: "Boats & Marine",
    name: "Sunseeker Predator Yacht",
    image: "/images/boat-02.webp",
    badge: "Premium",
    model: "Model 2019",
    specs: "Twin MAN V8 Diesel • 1,200 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "520", label: "Hours" },
      { icon: "/images/condition-icon.svg", value: "Excellent", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.7", label: "Rating" },
    ],
    startingBid: "685,000",
    auctionDate: "Sep 18, 2025",
  },
  {
    category: "Boats & Marine",
    name: "Cigarette Racing Speedboat",
    image: "/images/boat-03.webp",
    badge: "Premium",
    model: "Model 2021",
    specs: "Twin Mercury Racing • 1,350 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "95", label: "Hours" },
      { icon: "/images/condition-icon.svg", value: "Like New", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.8", label: "Rating" },
    ],
    startingBid: "215,000",
    auctionDate: "Sep 20, 2025",
  },
  {
    category: "Boats & Marine",
    name: "Princess Flybridge Yacht",
    image: "/images/boat-04.webp",
    badge: "Premium",
    model: "Model 2018",
    specs: "Twin Volvo Penta IPS • 900 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "610", label: "Hours" },
      { icon: "/images/condition-icon.svg", value: "Very Good", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.6", label: "Rating" },
    ],
    startingBid: "540,000",
    auctionDate: "Sep 22, 2025",
  },
  {
    category: "Terrain Conquerors",
    name: "Baja Trophy Truck",
    image: "/images/offroad-03.webp",
    badge: "Premium",
    model: "Model 2022",
    specs: "V8 Race-Prepped • 850 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "4,200", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Race-Ready", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.8", label: "Rating" },
    ],
    startingBid: "185,000",
    auctionDate: "Sep 14, 2025",
  },
  {
    category: "Terrain Conquerors",
    name: "Jeep Wrangler Rubicon 392",
    image: "/images/offroad2-01.webp",
    badge: "Premium",
    model: "Model 2023",
    specs: "6.4L V8 • 470 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "12,300", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Excellent", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.7", label: "Rating" },
    ],
    startingBid: "62,500",
    auctionDate: "Sep 16, 2025",
  },
  {
    category: "Terrain Conquerors",
    name: "Jeep Gladiator Mojave",
    image: "/images/offroad2-02.webp",
    badge: "Premium",
    model: "Model 2022",
    specs: "3.6L V6 • 285 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "18,700", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Very Good", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.5", label: "Rating" },
    ],
    startingBid: "47,900",
    auctionDate: "Sep 19, 2025",
  },
  {
    category: "Terrain Conquerors",
    name: "Suzuki Jimny Sierra Off-Road",
    image: "/images/offroad3-02.webp",
    badge: "Premium",
    model: "Model 2021",
    specs: "1.5L Inline-4 • 101 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "26,400", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Good", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.4", label: "Rating" },
    ],
    startingBid: "22,600",
    auctionDate: "Sep 21, 2025",
  },
];

export type HowItWorksStep = {
  number: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
};

export const howItWorksSection = {
  eyebrowLeft: "How It",
  eyebrowRight: "Works",
  paragraph:
    "Three simple steps to turn your vehicle into cash. Our streamlined process makes selling fast, secure, and profitable for everyone.",
  backgroundImage: "/images/how-it-works-background.webp",
  cta: "Get Started Today",
  ctaHref: "/sell",
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    image: "/images/list-your-vehicle.webp",
    title: "List Your Vehicle",
    description:
      "Upload photos and details of your vehicle through our simple listing process. Our team of experts verifies authenticity and helps you set the perfect price to maximize your return.",
    tags: ["Photo upload", "Vehicle details", "Expert verification", "Price optimization"],
  },
  {
    number: "02",
    image: "/images/connect-with-buyers.webp",
    title: "Connect with buyers",
    description:
      "Qualified buyers compete for your vehicle through our secure auction platform. We verify all participants and protect every transaction with advanced security and fraud prevention systems.",
    tags: ["Buyer verification", "Secure platform", "Live bidding", "Fraud protection"],
  },
  {
    number: "03",
    image: "/images/get-paid-fast.webp",
    title: "Get Paid Fast",
    description:
      "Receive your payment within 24 hours of sale completion. Our secure payment system ensures instant transfers with zero hidden fees or complicated processes.",
    tags: ["Fast Payment", "24-Hour Transfer", "Bank-level security", "Zero Hidden Fees"],
  },
];

export type RecentSale = {
  image: string;
  name: string;
  price: string;
};

export type TrendingCategory = {
  title: string;
  growth: string;
};

export const marketIntelligenceSection = {
  eyebrowLeft: "Market",
  eyebrowRight: "Intelligence",
  paragraph:
    "Real data drives real results. Check out our latest sales success stories and trending market insights that help sellers maximize their vehicle's value.",
};

export const recentSales: RecentSale[] = [
  { image: "/images/ferrari-488-gtb.webp", name: "Ferrari 488 GTB", price: "$298,500" },
  {
    image: "/images/custom-harley-street-glide.webp",
    name: "Custom Harley Street Glide",
    price: "$34,750",
  },
  {
    image: "/images/lamborghini-huracan.webp",
    name: "Lamborghini Huracán EVO",
    price: "$245,000",
  },
  { image: "/images/ducati-panigale-v4.webp", name: "Ducati Panigale V4 SP2", price: "$39,800" },
];

// Closed sales that aren't part of the active catalog — exist only so a
// "recent sale" reference (recentSales, testimonials) resolves to a real,
// sold-state vehicle detail page instead of a dead link back to /collection.
export const soldVehicles: CollectionVehicle[] = [
  {
    category: "Motorcycles",
    name: "Custom Harley Street Glide",
    image: "/images/custom-harley-street-glide.webp",
    badge: "Premium",
    model: "Model 2016 Custom Build",
    specs: "103ci V-Twin • Full Custom Build",
    stats: [
      { icon: "/images/miles-icon.svg", value: "12,400", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Custom Build", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.9", label: "Rating" },
    ],
    startingBid: "34,750",
    auctionDate: "Closed",
  },
  {
    category: "Sports Cars",
    name: "Lamborghini Huracán EVO",
    image: "/images/lamborghini-huracan.webp",
    badge: "Premium",
    model: "Model 2021 Coupe",
    specs: "5.2L V10 • 631 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "3,100", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Like New", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.9", label: "Rating" },
    ],
    startingBid: "245,000",
    auctionDate: "Closed",
  },
  {
    category: "Motorcycles",
    name: "Ducati Panigale V4 SP2",
    image: "/images/ducati-panigale-v4.webp",
    badge: "Premium",
    model: "Model 2022 Track Edition",
    specs: "1103cc V4 • 224 hp",
    stats: [
      { icon: "/images/miles-icon.svg", value: "620", label: "Miles" },
      { icon: "/images/condition-icon.svg", value: "Track-Ready", label: "Condition" },
      { icon: "/images/rating-icon.svg", value: "4.8", label: "Rating" },
    ],
    startingBid: "39,800",
    auctionDate: "Closed",
  },
];

export const trendingCategories: TrendingCategory[] = [
  { title: "Vintage Motorcycles", growth: "+23% Growth" },
  { title: "Electric Vehicles", growth: "+18% Increase" },
  { title: "Marine Vehicles", growth: "+15% Uptick" },
  { title: "Classic Cars", growth: "+12% Steady Growth" },
];

export type Testimonial = {
  image: string;
  quote: string;
  author: string;
  role: string;
  stats: { value: string; label: string }[];
};

export const testimonialsSection = {
  headline: "From Garage Project to Top Dollar",
};

export const testimonials: Testimonial[] = [
  {
    image: "/images/testimonials-marcus-johnson.webp",
    quote:
      "I never expected my vintage Mustang restoration project to achieve such incredible results. Through Motoprofits' platform, I connected with serious collectors who really appreciated the car's true value. What started as a garage project turned into an amazing $85,000 sale.",
    author: "Marcus Johnson",
    role: "Classic Car Enthusiast",
    stats: [
      { value: "$85,000", label: "Final Sale Price" },
      { value: "47", label: "Bidders" },
      { value: "3 Days", label: "Auction duration" },
    ],
  },
  {
    image: "/images/ferrari-488-gtb.webp",
    quote:
      "Selling a Ferrari isn't something you trust to just anyone. Motoprofits connected me with verified collectors who understood exactly what this car was worth. The bidding war exceeded every expectation I had.",
    author: "Elena Rodriguez",
    role: "Sports Car Collector",
    stats: [
      { value: "$298,500", label: "Final Sale Price" },
      { value: "62", label: "Bidders" },
      { value: "5 Days", label: "Auction duration" },
    ],
  },
  {
    image: "/images/custom-harley-street-glide.webp",
    quote:
      "Years of custom work went into that Street Glide, and I was worried buyers wouldn't see the value. Motoprofits' verification process proved them wrong — serious bikers showed up ready to bid.",
    author: "Tony Reyes",
    role: "Custom Bike Builder",
    stats: [
      { value: "$34,750", label: "Final Sale Price" },
      { value: "28", label: "Bidders" },
      { value: "2 Days", label: "Auction duration" },
    ],
  },
  {
    image: "/images/lamborghini-huracan.webp",
    quote:
      "I listed my Huracán expecting a slow process for such a niche vehicle. Instead, Motoprofits put it in front of exactly the right buyers, and the final number blew past my reserve within days.",
    author: "David Chen",
    role: "Exotic Car Investor",
    stats: [
      { value: "$245,000", label: "Final Sale Price" },
      { value: "71", label: "Bidders" },
      { value: "4 Days", label: "Auction duration" },
    ],
  },
  {
    image: "/images/ducati-panigale-v4.webp",
    quote:
      "My Panigale was built for the track, not the showroom, so I figured it'd be a hard sell. Motoprofits' buyers knew exactly what they were looking at, and the auction closed faster than I ever imagined.",
    author: "Sofia Marchetti",
    role: "Motorsport Enthusiast",
    stats: [
      { value: "$39,800", label: "Final Sale Price" },
      { value: "19", label: "Bidders" },
      { value: "18 Hours", label: "Auction duration" },
    ],
  },
];

export const valueEstimatorSection = {
  eyebrowLeft: "AI-Powered",
  eyebrowRight: "Value Estimator",
  paragraph: "Get an instant valuation for your vehicle using our advanced AI technology",
  fields: [
    { label: "Vehicle Type", placeholder: "Choose Vehicle Type" },
    { label: "Mark and Model", placeholder: "Mark and model" },
    { label: "Year", placeholder: "Year" },
    { label: "Mileage", placeholder: "Mileage" },
  ],
  cta: "Get Estimate",
};

export const footer = {
  tagline: "Where Speed Meets Value",
  links: [
    { label: "Auctions", href: "/auctions" },
    { label: "Collection", href: "/collection" },
    { label: "Process", href: "/how-it-works" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { icon: "/images/facebook-icon.svg", label: "Facebook" },
    { icon: "/images/instagram-icon.svg", label: "Instagram" },
    { icon: "/images/linkedin-icon.svg", label: "LinkedIn" },
    { icon: "/images/x-icon.svg", label: "X" },
  ],
};

// ---------------------------------------------------------------------------
// /auctions — Live Auctions (full feed)
// ---------------------------------------------------------------------------

export const auctionsHero = {
  eyebrow: "Live Right Now",
  title: "Every Auction, In Real Time",
  paragraph:
    "Verified vehicles, competitive bidding, and a clock that never lies. Filter by category, watch the price move, and place your bid.",
  backgroundImage: "/images/auction-hero-01.webp",
};

export const auctionsStatusBar = [
  { value: `${liveAuctions.length}`, label: "Live Now" },
  {
    value: liveAuctions.reduce((sum, a) => sum + Number(a.activeBidders), 0).toString(),
    label: "Active Bidders",
  },
  { value: "1", label: "Ending Within the Hour" },
];

export const auctionsSortOptions = ["Ending Soonest", "Most Bidders", "Newest Listed", "Highest Bid"];

export const auctionsSellerCta = {
  eyebrow: "Have Something Worth Bidding On?",
  title: "List It. Let Buyers Compete.",
  paragraph: "Get an AI-backed estimate and see what serious bidders would pay.",
  cta: "Start Your Listing",
  ctaHref: "/sell",
};

export const auctionsFaqs = [
  {
    question: "How do bid increments work?",
    answer:
      "Each auction sets a minimum increment based on the vehicle's current bid range — typically 1-3% of the current bid. The next valid bid amount is always shown next to the bid input.",
  },
  {
    question: "Do I need a deposit to bid?",
    answer:
      "Yes. A refundable verification deposit is held (not charged) when you place your first bid on the platform, confirming you're a qualified, serious buyer before you can compete on any auction.",
  },
  {
    question: "What if I get outbid?",
    answer:
      "You'll get an instant outbid alert so you can respond before the clock runs out. If you don't re-bid, your deposit hold is released automatically once the auction closes.",
  },
  {
    question: "What happens when an auction ends with no reserve met?",
    answer:
      "If a seller set a reserve price and it isn't reached, the vehicle doesn't sell automatically — the seller can accept the top bid, counter, or relist.",
  },
];

// ---------------------------------------------------------------------------
// /collection — Premium Collection (full catalog)
// ---------------------------------------------------------------------------

export const collectionHero = {
  eyebrow: "The Premium Collection",
  title: "Curated. Verified. Exceptional.",
  paragraph:
    "Every vehicle in this catalog passed expert inspection before it earned a listing. Browse five verticals, one standard.",
  backgroundImage: "/images/showroom-01.webp",
};

export const collectionCategoryInfo: Record<string, { image: string; description: string }> = {
  "Sports Cars": {
    image: "/images/ferrari-488-gtb.webp",
    description: "Flagship performance — the vehicles that define the platform's reputation.",
  },
  Motorcycles: {
    image: "/images/moto-extra-01.webp",
    description: "The most active category on the platform — fast sales, deep bidder pools.",
  },
  "Trucks & SUVs": {
    image: "/images/truck-01.webp",
    description: "Everyday premium utility, from daily drivers to restored classics.",
  },
  "Boats & Marine": {
    image: "/images/boat-01.webp",
    description: "The platform's highest average ticket — yachts, cruisers, and race boats.",
  },
  "Terrain Conquerors": {
    image: "/images/offroad-03.webp",
    description: "Off-road and adventure builds for a loyal, community-driven buyer base.",
  },
};

export const collectionVerification = {
  title: "What 'Verified' Actually Means Here",
  paragraph:
    "Before any Premium Collection vehicle goes live, an inspector confirms title status, cross-checks mileage against service records, and documents condition with a written report — available to every serious bidder before they commit.",
  points: [
    "Title & ownership history check",
    "Mileage cross-referenced against records",
    "Written condition report per vehicle",
    "Category-specific inspection (marine survey, powertrain teardown notes, etc.)",
  ],
};

export const collectionNewsletter = {
  eyebrow: "Never Miss a Drop",
  title: "Get Notified When Your Category Opens",
  paragraph: "Set an alert for Sports Cars, Motorcycles, Boats & Marine, or any vertical you're watching.",
  cta: "Notify Me",
};

// ---------------------------------------------------------------------------
// /marketplace — unified browse & search hub
// ---------------------------------------------------------------------------

export const marketplaceHero = {
  eyebrow: "The Full Marketplace",
  title: "Search Everything. Miss Nothing.",
  paragraph:
    "Live auctions, upcoming listings, and closed sales in one place — filter by category, price, year, and sale type.",
  backgroundImage: "/images/auction-hero-03.webp",
};

export const marketplaceSaleTypes = ["Live Auction", "Upcoming", "Sold Archive"];

export const marketplaceSavedSearchExample = {
  query: "Porsche 911 — under $200,000",
  status: "2 new matches this week",
};

export const marketplaceSoldArchiveNote = {
  title: "Every Closed Sale, On the Record",
  paragraph:
    "Final hammer prices stay public after an auction closes — real pricing data for anyone researching what a vehicle like theirs is actually worth.",
};

// ---------------------------------------------------------------------------
// /how-it-works — deep process page
// ---------------------------------------------------------------------------

export const processHero = {
  eyebrow: "The Full Process",
  title: "How Motoprofits Works",
  paragraph:
    "From first estimate to final payout — every stage, every fee, no surprises. This is the platform's operating manual.",
  backgroundImage: "/images/how-it-works-background.webp",
};

export const processTimeline = ["Estimate", "List & Verify", "Live Auction", "Sale & Payout"];

export const sellerWalkthrough = [
  {
    title: "Get Your AI Estimate",
    description:
      "Enter your vehicle's make, model, year, and mileage. The estimator returns a realistic price range in seconds, based on recent comparable sales on the platform.",
    details: ["Free, no listing commitment", "Range refines as you add photos & condition notes", "Category-specific pricing model"],
  },
  {
    title: "Upload & Verify",
    description:
      "Add photos, title, and service history. An inspector reviews the submission and either confirms it remotely or schedules an in-person check for higher-value vehicles.",
    details: ["Typical verification: 24–48 hours", "Written condition report generated", "You set a reserve price, or none at all"],
  },
  {
    title: "Live Auction Window",
    description:
      "Your listing goes live for a set duration (typically 3–7 days). Verified bidders compete in real time; you get notified at every new high bid.",
    details: ["You choose the auction length", "Reserve price protects your minimum", "Full bid history visible to you throughout"],
  },
  {
    title: "Get Paid",
    description:
      "Once the auction closes, funds move from escrow to your account within 24 hours — the success fee is deducted automatically, no invoice to chase.",
    details: ["Payout within 24 hours of close", "Fee deducted automatically, shown upfront", "Buyer handles pickup/shipping logistics"],
  },
];

export const buyerWalkthrough = [
  {
    title: "Verify Your Account",
    description:
      "A one-time identity check unlocks bidding platform-wide. This is what keeps sellers confident that every bidder is real.",
    details: ["Government ID + payment method on file", "Usually takes under 10 minutes"],
  },
  {
    title: "Set Your Bidding Limit",
    description:
      "A refundable deposit hold sets how high you can bid — protects both you and sellers from bids nobody can actually back up.",
    details: ["Deposit is a hold, not a charge", "Raise your limit any time"],
  },
  {
    title: "Bid Live",
    description:
      "Watch the countdown, place bids, get instant outbid alerts. Every vehicle's condition report and inspection notes are visible before you commit.",
    details: ["Real-time bid history", "Outbid notifications by push or email"],
  },
  {
    title: "Win & Receive",
    description:
      "Winning bid is charged through secure escrow. Coordinate pickup or shipping directly with the seller, with Motoprofits support available if anything's unclear.",
    details: ["Escrow releases funds only after you confirm receipt", "Pickup/delivery logistics support"],
  },
];

export const feeTable = [
  { tier: "Under $25,000", sellerFee: "8%", note: "Minimum $250" },
  { tier: "$25,000 – $100,000", sellerFee: "6%", note: "" },
  { tier: "$100,000 – $500,000", sellerFee: "4.5%", note: "" },
  { tier: "Over $500,000", sellerFee: "3%", note: "Custom terms available" },
];

export const buyerPremium = "5% of winning bid, capped at $15,000";

export const membershipTiers = [
  { name: "Standard", price: "Free", perks: ["Bid on any auction", "Standard bidding limit"] },
  { name: "Verified Buyer", price: "$29/mo", perks: ["Early access, 24h before public listing", "Higher bidding limit", "Priority support"] },
];

export const processTimelineExample = [
  { day: "Day 0", event: "Ferrari 488 GTB listed, AI estimate confirmed" },
  { day: "Day 2", event: "Expert verification complete, condition report published" },
  { day: "Day 5", event: "Live auction opens, 62 bidders participate" },
  { day: "Day 10", event: "Auction closes at $298,500" },
  { day: "Day 11", event: "Seller paid in full via escrow" },
];

export const processFaqs = {
  Sellers: [
    { question: "What if my vehicle doesn't sell?", answer: "You can relist at no extra cost, adjust your reserve, or accept the top bid even if it's below reserve — entirely your call." },
    { question: "Can I set a reserve price?", answer: "Yes, or list with no reserve for maximum bidder interest. Reserve auctions typically take slightly longer to close." },
  ],
  Buyers: [
    { question: "Can I inspect a vehicle before bidding?", answer: "Every listing includes the full condition report and inspection photos. In-person viewing can be arranged directly with the seller for high-value vehicles." },
    { question: "What happens if the vehicle isn't as described?", answer: "Every sale is covered by our dispute process — funds stay in escrow until you confirm the vehicle matches its listing." },
  ],
  Payments: [
    { question: "How fast is payout after a sale?", answer: "Within 24 hours of the auction closing, directly to your account on file." },
    { question: "Are there hidden fees?", answer: "No. Seller success fee and buyer's premium are the only fees, both shown before you list or bid." },
  ],
};

// ---------------------------------------------------------------------------
// /sell — Sell Your Vehicle (conversion funnel)
// ---------------------------------------------------------------------------

export const sellHero = {
  headline: "List It. Let The Bidding Decide.",
  paragraph:
    "Get an AI-backed estimate in seconds, then let verified buyers compete for your vehicle in a live auction.",
};

export const sellComparison = [
  { label: "Buyer verification", motoprofits: "Every bidder verified", others: "Anonymous inquiries" },
  { label: "Price discovery", motoprofits: "Competitive live bidding", others: "Fixed asking price" },
  { label: "Payout speed", motoprofits: "24 hours after sale", others: "Days to weeks" },
  { label: "Dealer margin", motoprofits: "None — direct to buyer", others: "15–25% typical" },
];

export const sellCategoryGuidance = [
  { category: "Sports Cars", tip: "Track use, service intervals, and any modifications matter more here than mileage alone." },
  { category: "Motorcycles", tip: "Original parts vs. custom builds sell differently — flag custom work explicitly in your listing." },
  { category: "Trucks & SUVs", tip: "Towing history and drivetrain condition are the first things buyers ask about." },
  { category: "Boats & Marine", tip: "Engine hours matter more than age. A recent marine survey speeds up verification significantly." },
  { category: "Terrain Conquerors", tip: "Off-road builds sell on documented capability — suspension, lift, and armor specs." },
];

export const earningsExample = {
  salePrice: 85000,
  feeRate: 0.06,
  get fee() {
    return Math.round(this.salePrice * this.feeRate);
  },
  get net() {
    return this.salePrice - this.fee;
  },
};

export const sellDocumentChecklist = [
  "Vehicle title (or lien payoff statement)",
  "Service and maintenance records",
  "Recent photos — exterior, interior, engine bay",
  "Any modification or restoration documentation",
];

// ---------------------------------------------------------------------------
// /about — Trust Center
// ---------------------------------------------------------------------------

export const aboutHero = {
  eyebrow: "Our Story",
  title: "Built for the Sale You Can't Trust to Just Anyone",
  paragraph:
    "Motoprofits exists because private sellers of serious vehicles deserve better than classifieds, and buyers deserve better than guessing.",
  backgroundImage: "/images/showroom-03.webp",
};

export const aboutMission =
  "Classifieds underprice serious vehicles. Dealer trade-in takes a margin nobody sees coming. Classic-only auction houses are closed to everyday sellers. Motoprofits was built to sit between all three — open enough to list a well-kept truck, serious enough that a Ferrari owner trusts it with a six-figure sale.";

export const aboutStats = [
  { value: "$14.2M+", label: "Value Transacted" },
  { value: "1,240+", label: "Vehicles Sold" },
  { value: "9 Days", label: "Avg. Time to Sale" },
  { value: "18,000+", label: "Verified Buyers" },
];

export const verificationStandards = [
  { category: "Sports & Classic Cars", detail: "Title check, VIN history, compression/leak-down notes on request, full exterior/interior condition report." },
  { category: "Motorcycles", detail: "Frame and engine number match, service history review, custom-build documentation where applicable." },
  { category: "Trucks & SUVs", detail: "Drivetrain and towing-history check, frame/rust inspection, mileage cross-reference." },
  { category: "Boats & Marine", detail: "Marine survey partnership, engine-hours verification, hull and structural inspection." },
  { category: "Terrain Conquerors", detail: "Suspension and armor documentation, off-road capability verification, build-sheet review." },
];

export const aboutTeam = [
  { name: "Dana Whitfield", role: "Head of Verification", bio: "Runs the inspection standards behind every listing.", image: "/images/team-01.webp" },
  { name: "Marcus Ihejirika", role: "Head of Buyer Trust", bio: "Built the fraud-monitoring and bidder-verification systems.", image: "/images/team-02.webp" },
  { name: "Priya Nandakumar", role: "Seller Success Lead", bio: "Guides sellers from first estimate to final payout.", image: "/images/team-03.webp" },
  { name: "Theo Marsh", role: "Market Intelligence Lead", bio: "Owns the pricing data behind every AI estimate.", image: "/images/team-04.webp" },
];

export const aboutPartnershipCta = {
  eyebrow: "Work With Us",
  title: "Partnerships & Careers",
  paragraph: "Dealers, inspectors, and escrow partners — we're always looking to extend the network.",
  cta: "Get in Touch",
  ctaHref: "/contact",
};

// ---------------------------------------------------------------------------
// /contact — Support hub
// ---------------------------------------------------------------------------

export const contactHero = {
  eyebrow: "We're Here to Help",
  title: "Talk to a Real Person",
  paragraph: "Average response time under 2 hours — under 15 minutes if you're bidding on something ending soon.",
  backgroundImage: "/images/support-02.webp",
};

export const contactIntents = [
  { label: "Buyer Support", description: "Bidding, payments, or a vehicle you've won.", action: "Start a Buyer Ticket" },
  { label: "Seller Support", description: "Listing help, verification status, payout questions.", action: "Start a Seller Ticket" },
  { label: "Dispute / Escrow", description: "A sale that didn't go as described.", action: "Open a Dispute" },
  { label: "Press & Partnerships", description: "Media inquiries, dealer or inspection partnerships.", action: "Contact the Team" },
];

export const contactChannels = {
  email: "support@motoprofits.com",
  phone: "+1 (800) 555-0134",
  hours: "Mon–Sat, 7am–9pm ET · Live chat during active auction closings",
};

// ---------------------------------------------------------------------------
// /account — Account Dashboard (demo data)
// ---------------------------------------------------------------------------

export const accountUser = {
  name: "Alex Rivera",
  memberSince: "March 2024",
  verified: true,
  stats: [
    { value: "3", label: "Active Bids" },
    { value: "1", label: "Active Listings" },
    { value: "$127,400", label: "Total Transacted" },
  ],
};

export const accountActiveBids = [
  { vehicle: liveAuctions[0], status: "Winning" },
  { vehicle: liveAuctions[1], status: "Outbid" },
  { vehicle: liveAuctions[2], status: "Winning" },
];

export const accountWatchlist = [premiumCollection[0], premiumCollection[2], premiumCollection[9]];

export const accountListings = [
  { name: "1988 BMW E30 M3", status: "Live Auction", currentBid: "$52,400", daysLeft: 2 },
  { name: "Yamaha Waverunner FX", status: "Pending Verification", currentBid: "—", daysLeft: null },
];

export const accountPayoutHistory = [
  { vehicle: "Custom Harley Street Glide", salePrice: "$34,750", fee: "$2,085", net: "$32,665", date: "Aug 2, 2025", status: "Paid" },
  { vehicle: "Ford F-100 Classic", salePrice: "$19,900", fee: "$1,592", net: "$18,308", date: "Jun 14, 2025", status: "Paid" },
];

export const accountBidHistory = [
  { vehicle: "Lamborghini Huracán EVO", result: "Won", finalPrice: "$245,000", date: "May 2, 2025" },
  { vehicle: "Ducati Panigale V4 SP2", result: "Lost", finalPrice: "$39,800", date: "Apr 18, 2025" },
];

export const accountNotificationSettings = [
  "Outbid alerts",
  "Auction ending soon (under 1 hour)",
  "Saved search matches",
  "Payout confirmations",
];

// ---------------------------------------------------------------------------
// /blog — editorial + market intelligence
// ---------------------------------------------------------------------------

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: { name: string; role: string };
  date: string;
  readTime: string;
  image: string;
  body: string[];
  relatedVehicleName?: string;
  bottomCtaHref: string;
  bottomCtaLabel: string;
};

export const blogCategories = [
  "Market Insights",
  "Buying Guides",
  "Selling Guides",
  "Vehicle Spotlights",
  "Platform Updates",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-valuation-actually-prices-your-vehicle",
    category: "Selling Guides",
    title: "How AI Valuation Actually Prices Your Vehicle",
    excerpt:
      "The estimator isn't guessing — it's comparing your vehicle against real, recent sale prices on the platform. Here's what goes into the number.",
    author: { name: "Theo Marsh", role: "Market Intelligence Lead" },
    date: "Aug 14, 2025",
    readTime: "5 min read",
    image: "/images/editorial-01.webp",
    body: [
      "Every estimate starts with comparable sales — not list prices, actual closed auctions for the same make, model, and condition tier over the last 90 days. That's the single biggest difference between our number and a classifieds 'suggested price': ours is anchored to what buyers actually paid, not what sellers hoped for.",
      "From there, the model adjusts for mileage, documented condition, and category-specific factors — engine hours instead of mileage for boats, custom-build documentation for motorcycles, service history for everything. A vehicle with a complete paper trail consistently estimates higher than an identical one without it, because verified history reduces buyer risk, and buyers pay for reduced risk.",
      "The range you see is intentionally a range, not a single number. Live auctions are competitive by design — the estimate tells you where serious bidding is likely to start, not where it has to end. Sellers on the platform average landing near the top of their estimated range once bidding closes, because the AI number sets a credible floor, not a ceiling.",
      "One thing the model won't do: inflate your estimate to win your listing. The number you see before you list is the same logic that prices every vehicle on the platform, sellers and buyers included.",
    ],
    bottomCtaHref: "/sell",
    bottomCtaLabel: "Get Your Estimate",
  },
  {
    slug: "5-questions-before-your-first-live-bid",
    category: "Buying Guides",
    title: "5 Questions to Ask Before Your First Live Auction Bid",
    excerpt:
      "Live bidding moves fast. A few minutes of prep before the countdown starts saves you from an emotional overbid — or a missed win.",
    author: { name: "Marcus Ihejirika", role: "Head of Buyer Trust" },
    date: "Jul 30, 2025",
    readTime: "4 min read",
    image: "/images/editorial-02.webp",
    body: [
      "1. Have I actually read the condition report? Every listing includes a written inspection report — not just photos. If a boat's engine hours or a car's service history changes your number, decide that before the clock is running, not during.",
      "2. What's my real ceiling? Set it before bidding opens. Live auctions create momentum, and momentum makes people bid past what they'd have paid in a calm negotiation. Write your number down.",
      "3. Is my bidding limit high enough? Your deposit hold sets your maximum. Raising it mid-auction takes a few minutes — plan ahead if you're eyeing something at the top of your range.",
      "4. Do I understand the buyer's premium? The winning bid isn't the final price — a percentage is added at checkout. Factor it in before you bid, not after you win.",
      "5. What's my pickup or shipping plan? Decide this before you win, not after. Sellers appreciate a buyer who already knows how the vehicle is leaving their driveway.",
    ],
    bottomCtaHref: "/auctions",
    bottomCtaLabel: "View Live Auctions",
  },
  {
    slug: "inside-the-298500-ferrari-sale",
    category: "Vehicle Spotlights",
    title: "Inside a $298,500 Sale: The Ferrari 488 GTB Auction",
    excerpt:
      "62 bidders, five days, and a final number that blew past reserve. A look at what made this auction move so fast.",
    author: { name: "Priya Nandakumar", role: "Seller Success Lead" },
    date: "Aug 24, 2025",
    readTime: "6 min read",
    image: "/images/ferrari-488-gtb.webp",
    body: [
      "\"Selling a Ferrari isn't something you trust to just anyone,\" said seller Elena Rodriguez when she listed her 2019 488 GTB. The car had 6,200 miles, a clean verified history, and a starting bid set right where the AI estimate suggested.",
      "The listing opened with the full condition report attached — mint exterior, documented service history, zero accident record. That transparency mattered: within the first 48 hours, the auction had already drawn more bidders than a typical Sports Cars listing sees in its full run.",
      "By day three, competitive bidding had pushed the price well past the reserve. \"The bidding war exceeded every expectation I had,\" Rodriguez said after the sale closed at $298,500 — roughly 12% above the top of its original estimate range.",
      "The pattern holds across high-value listings: full documentation plus a realistic starting price consistently outperforms an unverified listing priced to seem like a bargain. Buyers aren't looking for the lowest number — they're looking for the least risk.",
    ],
    relatedVehicleName: "Ferrari 488 GTB",
    bottomCtaHref: "/collection",
    bottomCtaLabel: "Browse Sports Cars",
  },
  {
    slug: "why-verified-listings-sell-for-more",
    category: "Selling Guides",
    title: "Why Verified Listings Sell for More",
    excerpt:
      "Verification isn't a formality — it's the single biggest lever a seller has over their final price.",
    author: { name: "Dana Whitfield", role: "Head of Verification" },
    date: "Jul 8, 2025",
    readTime: "4 min read",
    image: "/images/inspection-01.webp",
    body: [
      "Buyers on any auction platform are pricing in risk, whether they realize it or not. An unverified listing forces every bidder to discount their offer for the unknown — is the mileage real, is the title clean, does the engine run the way the photos suggest.",
      "A verified listing removes that discount. Once an inspector confirms title status, cross-checks mileage, and publishes a written condition report, bidders can compete on the vehicle's actual merits instead of hedging against the seller's word.",
      "The data backs this up: verified listings on the platform close, on average, closer to the top of their AI-estimated range, while unverified or partially-documented listings tend to land in the lower third. The inspection isn't a hurdle before you sell — it's what lets buyers bid with confidence.",
    ],
    bottomCtaHref: "/how-it-works",
    bottomCtaLabel: "See the Verification Process",
  },
  {
    slug: "electric-vehicles-fastest-growing-category",
    category: "Market Insights",
    title: "Electric Vehicles Are the Fastest-Growing Auction Category",
    excerpt:
      "Electric sports cars and motorcycles posted the sharpest growth on the platform this quarter — here's what's driving it.",
    author: { name: "Theo Marsh", role: "Market Intelligence Lead" },
    date: "Sep 1, 2025",
    readTime: "3 min read",
    image: "/images/porsche-taycan-turbo.webp",
    body: [
      "Electric vehicles posted an 18% increase in listing volume this quarter, the fastest growth of any tracked category — ahead of vintage motorcycles (+23% is still the overall leader, but off a smaller base) and marine vehicles (+15%).",
      "Two things are driving it. First, early EV adopters from 2019–2021 are reaching the point where they're ready to sell, and they're discovering there's no established classifieds market that prices performance EVs accurately. Second, buyers specifically searching for verified battery health and drivetrain condition are finding that information hard to get anywhere except a platform that inspects for it.",
      "A Porsche Taycan Turbo listed this quarter demonstrates the pattern: starting bid set from comparable EV sales data, verified battery capacity included in the condition report, and a bidder pool that skewed younger and more numerous than a comparable gas-powered listing in the same price range.",
      "Expect this category to keep climbing — it's the clearest example yet of AI valuation solving a problem classifieds genuinely can't: pricing a fast-moving, historically thin market with real data instead of guesswork.",
    ],
    bottomCtaHref: "/marketplace",
    bottomCtaLabel: "Browse the Marketplace",
  },
  {
    slug: "what-happens-in-24-hours-after-you-win",
    category: "Platform Updates",
    title: "What Happens in the 24 Hours After You Win",
    excerpt:
      "The auction closing is the beginning of the process, not the end. Here's exactly what happens next, on both sides.",
    author: { name: "Marcus Ihejirika", role: "Head of Buyer Trust" },
    date: "Jun 22, 2025",
    readTime: "4 min read",
    image: "/images/handoff-01.webp",
    body: [
      "The moment the countdown hits zero, the winning bid plus buyer's premium is charged and held in escrow — not released to the seller yet. This is the step that makes the next 24 hours low-risk for both sides.",
      "The buyer gets full contact details for the seller and a checklist for confirming the vehicle matches its listing and condition report. The seller gets confirmation of the sale and payout timing — funds move within 24 hours of close, fee already deducted, no invoice required.",
      "If pickup or shipping needs coordination, that happens directly between buyer and seller, with support available if anything's unclear. Escrow only fully releases to the seller once the buyer confirms the vehicle arrived as described — the same protection that made the buyer comfortable bidding in the first place.",
    ],
    bottomCtaHref: "/account",
    bottomCtaLabel: "View Your Account",
  },
];
