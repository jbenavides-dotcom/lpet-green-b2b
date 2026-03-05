// Asset URLs - Cloudinary optimized for green coffee imagery
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dsylu9a7k/image/upload';
const CLOUDINARY_OPT = 'f_auto,q_auto,w_800';
const CLOUDINARY_OPT_HERO = 'f_auto,q_auto,w_1920';

export const ASSETS = {
  // Logo
  logo: 'https://3ys3kk1igt4wb33d-92559802671.shopifypreview.com/cdn/shop/files/Logo_principal.png',

  // Hero images - Cloudinary lpet-verde
  hero: {
    finca: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT_HERO}/lpet-verde/hero-finca.jpg`,
    panoramica: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT_HERO}/lpet-verde/finca-panoramica.jpg`,
    cultivo: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT_HERO}/lpet-verde/cultivo-cafetales.jpg`,
  },

  // Process images - Cloudinary lpet-verde
  process: {
    secado: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/secado-natural.jpg`,
    vivero: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/vivero-secaderos.jpg`,
    cultivo: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/cultivo-cafetales.jpg`,
    equipo: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/equipo-beneficio.jpg`,
  },

  // Farm images - Cloudinary lpet-verde
  farm: {
    panoramica: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/finca-panoramica.jpg`,
    cultivo: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/cultivo-cafetales.jpg`,
    secado: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/secado-natural.jpg`,
  },

  // Product/Lot images - Use process images for variety
  lots: {
    geisha: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/cultivo-cafetales.jpg`,
    sidra: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/secado-natural.jpg`,
    java: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/vivero-secaderos.jpg`,
    bourbon: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/equipo-beneficio.jpg`,
    mokka: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/finca-panoramica.jpg`,
    pacamara: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/hero-finca.jpg`,
  },

  // Team - Cloudinary lpet-verde
  team: {
    fundadores: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/fundadores.jpg`,
    equipo: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-verde/equipo-beneficio.jpg`,
  },
};

// Tier definitions - Updated March 2026 to match Shopify categories
export const TIERS = {
  legendary: {
    id: 'legendary',
    name: 'LEGENDARY SERIES',
    scoreRange: '90+',
    priceRange: '$85-110/lb',
    boxPriceRange: '$2,337 - $3,025',
    color: 'brand-gold',
    bgColor: 'bg-gradient-to-br from-amber-900 to-amber-700',
    textColor: 'text-amber-100',
    description: 'Competition-grade nanolots and rare varieties. Limited releases with early access for subscription program members.',
    idealFor: 'Competition brewing, limited releases, flagship offerings',
    typicalVarieties: ['Geisha', 'Mokka', 'Sidra'],
    typicalProcesses: ['Lactic Carbonic', 'Bio-Innovation', 'Extended Fermentation'],
  },
  singleOrigin: {
    id: 'singleOrigin',
    name: 'SINGLE ORIGIN',
    scoreRange: '88+',
    priceRange: '$55-80/lb',
    boxPriceRange: '$1,512 - $2,200',
    color: 'brand-pink',
    bgColor: 'bg-gradient-to-br from-rose-800 to-rose-600',
    textColor: 'text-rose-100',
    description: 'Signature varieties from our farm, crafted through rigorous agronomy and fermentation protocols to showcase terroir with precision.',
    idealFor: 'Specialty retail, subscription boxes, premium single origins',
    typicalVarieties: ['Geisha', 'Sidra', 'Java', 'Pacamara'],
    typicalProcesses: ['Washed', 'Honey', 'Lactic'],
  },
  exoticBlend: {
    id: 'exoticBlend',
    name: 'EXOTIC BLEND',
    scoreRange: '87+',
    priceRange: '$35-55/lb',
    boxPriceRange: '$962 - $1,512',
    color: 'brand-green',
    bgColor: 'bg-gradient-to-br from-emerald-800 to-emerald-600',
    textColor: 'text-emerald-100',
    description: 'Traceable, community-grown lots harvested by our trained picking teams and refined at our mill for sweetness, florals, and clarity.',
    idealFor: 'Espresso blends, house coffee, high-volume specialty accounts',
    typicalVarieties: ['Bourbon', 'Caturra', 'Traditional varieties'],
    typicalProcesses: ['Washed', 'Honey', 'Natural'],
  },
};

// Green Coffee Programs (for B2B segmentation)
export const GREEN_COFFEE_PROGRAMS = {
  connect: {
    id: 'connect',
    name: 'CONNECT',
    tagline: 'Nature Leads. We Follow.',
    description: 'Fermentations guided by native microorganisms. True to origin. Estate-grown coffees using regenerative agriculture within an ecosystem of 24+ species.',
    idealFor: 'Roasters seeking authentic terroir expression',
  },
  pulse: {
    id: 'pulse',
    name: 'PULSE',
    tagline: 'Always Testing. Always Learning.',
    description: 'Experimental lots pushing fermentation boundaries. Documented innovation with honest reporting of both successes and failures.',
    idealFor: 'Innovation-focused roasters, competition coffees',
  },
  beat: {
    id: 'beat',
    name: 'BEAT',
    tagline: 'Behind Every Routine, a Shared Heartbeat.',
    description: 'Competition-grade lots for baristas and brewers. Minimum 6kg per program. Intimate support for competitors.',
    idealFor: 'Barista champions, competition roasters',
    minimumOrder: '6kg',
  },
  laAmistad: {
    id: 'laAmistad',
    name: 'LA AMISTAD',
    tagline: 'Small Farms. Big Partnerships.',
    description: 'Coffees from 200+ neighbor families. BioChar program investing in their land. Shared prosperity model.',
    idealFor: 'Social impact roasters, community-focused brands',
  },
};

// Available lots data
export interface Lot {
  id: string;
  lotNumber: string;
  name: string;
  tier: 'legendary' | 'singleOrigin' | 'exoticBlend';
  variety: string;
  process: string;
  altitude: number;
  scaScore: number;
  pricePerLb: number;
  boxPrice: number;
  availableBoxes: number;
  totalKg: number;
  image: string;
  cuppingNotes: string;
  fragrance: number;
  flavor: number;
  aftertaste: number;
  acidity: number;
  body: number;
  balance: number;
  uniformity: number;
  cleanCup: number;
  sweetness: number;
  overall: number;
  plotName: string;
  gpsCoordinates: string;
  harvestDates: string;
  fermentationHours: number;
  fermentationTemp: string;
  finalPH: number;
  dryingDays: number;
  restedDays: number;
  moisture: number;
  waterActivity: number;
  screenSize: string;
  defects: string;
  density: number;
  recommendedFor: string[];
  roastRecommendation: string;
}

export const AVAILABLE_LOTS: Lot[] = [
  {
    id: 'lot-2026-g-014',
    lotNumber: '2026-G-014',
    name: 'GEISHA LACTIC',
    tier: 'legendary',
    variety: 'Geisha',
    process: 'Lactic Carbonic',
    altitude: 1780,
    scaScore: 91.5,
    pricePerLb: 105,
    boxPrice: 2887,
    availableBoxes: 3,
    totalKg: 37.5,
    image: ASSETS.lots.geisha,
    cuppingNotes: 'Explosive jasmine and bergamot on the dry fragrance. Passion fruit, lychee, and white peach dominate the cup. Silky, almost tea-like body with sparkling malic acidity. Finish lingers with honey and elderflower for minutes.',
    fragrance: 8.5,
    flavor: 8.5,
    aftertaste: 8.5,
    acidity: 9.0,
    body: 8.0,
    balance: 8.5,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 9.0,
    plotName: 'La Colina',
    gpsCoordinates: '4.7234, -74.4521',
    harvestDates: 'Nov 15-22, 2025',
    fermentationHours: 96,
    fermentationTemp: '18-22C',
    finalPH: 4.2,
    dryingDays: 22,
    restedDays: 45,
    moisture: 11.2,
    waterActivity: 0.58,
    screenSize: '17/18',
    defects: '2/300g',
    density: 720,
    recommendedFor: ['Pour-over (V60, Chemex)', 'Competition brewing', 'Limited single-origin release'],
    roastRecommendation: 'Target Development: 15-18% DTR. Drop Temp: 195-200C. Extend Maillard for sweetness. Light roast preserves florals; medium brings out stone fruit.',
  },
  {
    id: 'lot-2026-s-008',
    lotNumber: '2026-S-008',
    name: 'SIDRA BIO-INNOVATION',
    tier: 'legendary',
    variety: 'Sidra',
    process: 'Bio-Innovation',
    altitude: 1750,
    scaScore: 90.5,
    pricePerLb: 95,
    boxPrice: 2612,
    availableBoxes: 4,
    totalKg: 50,
    image: ASSETS.lots.sidra,
    cuppingNotes: 'Strawberry yogurt, damascus rose, and tropical guava. Creamy texture with vibrant citric acidity. Complex fermentation creates unique candy-like sweetness. WBC 2019 champion varietal expression.',
    fragrance: 8.5,
    flavor: 8.5,
    aftertaste: 8.0,
    acidity: 8.5,
    body: 8.5,
    balance: 8.5,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 8.5,
    plotName: 'El Mirador',
    gpsCoordinates: '4.7198, -74.4489',
    harvestDates: 'Nov 8-15, 2025',
    fermentationHours: 120,
    fermentationTemp: '16-20C',
    finalPH: 4.0,
    dryingDays: 25,
    restedDays: 60,
    moisture: 10.8,
    waterActivity: 0.56,
    screenSize: '16/17',
    defects: '3/300g',
    density: 710,
    recommendedFor: ['Specialty retail flagship', 'Competition preparation', 'Premium subscription'],
    roastRecommendation: 'Target Development: 17-20% DTR. Drop Temp: 200-205C. Medium roast develops yogurt notes beautifully.',
  },
  {
    id: 'lot-2026-m-003',
    lotNumber: '2026-M-003',
    name: 'MOKKA NATURAL',
    tier: 'legendary',
    variety: 'Mokka',
    process: 'Natural',
    altitude: 1760,
    scaScore: 90.0,
    pricePerLb: 85,
    boxPrice: 2337,
    availableBoxes: 2,
    totalKg: 25,
    image: ASSETS.lots.mokka,
    cuppingNotes: 'Intense blueberry jam and dark chocolate. Wine-like complexity with notes of dried fig and molasses. Heavy, syrupy body. Ethiopian heritage shines through Colombian terroir.',
    fragrance: 8.5,
    flavor: 8.5,
    aftertaste: 8.0,
    acidity: 8.0,
    body: 9.0,
    balance: 8.0,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 8.5,
    plotName: 'La Reserva',
    gpsCoordinates: '4.7256, -74.4534',
    harvestDates: 'Oct 25 - Nov 5, 2025',
    fermentationHours: 0,
    fermentationTemp: 'N/A - Natural',
    finalPH: 0,
    dryingDays: 28,
    restedDays: 45,
    moisture: 11.0,
    waterActivity: 0.57,
    screenSize: '15/16',
    defects: '4/300g',
    density: 680,
    recommendedFor: ['Espresso single origin', 'Natural lovers', 'Limited release'],
    roastRecommendation: 'Target Development: 18-22% DTR. Drop Temp: 205-210C. Can handle slightly darker roast to develop chocolate.',
  },
  {
    id: 'lot-2026-j-012',
    lotNumber: '2026-J-012',
    name: 'JAVA WASHED',
    tier: 'singleOrigin',
    variety: 'Java',
    process: 'Washed',
    altitude: 1720,
    scaScore: 88.5,
    pricePerLb: 65,
    boxPrice: 1787,
    availableBoxes: 6,
    totalKg: 75,
    image: ASSETS.lots.java,
    cuppingNotes: 'Clean and elegant with notes of green apple, lime zest, and white tea. Delicate floral aromatics. Bright, juicy acidity with a clean, refreshing finish.',
    fragrance: 8.0,
    flavor: 8.0,
    aftertaste: 8.0,
    acidity: 8.5,
    body: 7.5,
    balance: 8.5,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 8.0,
    plotName: 'Los Pinos',
    gpsCoordinates: '4.7189, -74.4467',
    harvestDates: 'Nov 1-10, 2025',
    fermentationHours: 42,
    fermentationTemp: '20-24C',
    finalPH: 4.8,
    dryingDays: 18,
    restedDays: 30,
    moisture: 11.5,
    waterActivity: 0.59,
    screenSize: '16/17',
    defects: '5/300g',
    density: 700,
    recommendedFor: ['Filter coffee', 'Blending for brightness', 'Everyday specialty'],
    roastRecommendation: 'Target Development: 15-18% DTR. Drop Temp: 195-200C. Keep light to preserve delicate florals.',
  },
  {
    id: 'lot-2026-b-019',
    lotNumber: '2026-B-019',
    name: 'BOURBON HONEY',
    tier: 'singleOrigin',
    variety: 'Bourbon',
    process: 'Honey',
    altitude: 1700,
    scaScore: 87.5,
    pricePerLb: 55,
    boxPrice: 1512,
    availableBoxes: 8,
    totalKg: 100,
    image: ASSETS.lots.bourbon,
    cuppingNotes: 'Caramel, brown sugar, and ripe plum. Medium body with pleasant tartaric acidity. Comforting and approachable with good complexity. Crowd-pleaser with depth.',
    fragrance: 7.5,
    flavor: 8.0,
    aftertaste: 7.5,
    acidity: 8.0,
    body: 8.0,
    balance: 8.5,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 8.0,
    plotName: 'El Bosque',
    gpsCoordinates: '4.7212, -74.4498',
    harvestDates: 'Nov 5-18, 2025',
    fermentationHours: 24,
    fermentationTemp: '22-26C',
    finalPH: 5.0,
    dryingDays: 20,
    restedDays: 30,
    moisture: 11.3,
    waterActivity: 0.58,
    screenSize: '16/17',
    defects: '6/300g',
    density: 695,
    recommendedFor: ['Espresso blends', 'Retail bags', 'Subscription coffee'],
    roastRecommendation: 'Target Development: 18-22% DTR. Drop Temp: 200-208C. Versatile - works light through medium-dark.',
  },
  {
    id: 'lot-2026-p-007',
    lotNumber: '2026-P-007',
    name: 'PACAMARA LACTIC',
    tier: 'singleOrigin',
    variety: 'Pacamara',
    process: 'Lactic',
    altitude: 1740,
    scaScore: 89.0,
    pricePerLb: 75,
    boxPrice: 2062,
    availableBoxes: 5,
    totalKg: 62.5,
    image: ASSETS.lots.pacamara,
    cuppingNotes: 'Big, bold, and creamy. Mango, papaya, and coconut cream. Full body with smooth lactic sweetness. Lingering tropical finish.',
    fragrance: 8.0,
    flavor: 8.5,
    aftertaste: 8.0,
    acidity: 8.0,
    body: 8.5,
    balance: 8.0,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 8.0,
    plotName: 'La Cumbre',
    gpsCoordinates: '4.7267, -74.4512',
    harvestDates: 'Nov 10-20, 2025',
    fermentationHours: 72,
    fermentationTemp: '18-22C',
    finalPH: 4.3,
    dryingDays: 24,
    restedDays: 45,
    moisture: 11.0,
    waterActivity: 0.57,
    screenSize: '18/19',
    defects: '3/300g',
    density: 690,
    recommendedFor: ['Single origin espresso', 'Iced coffee', 'Bold filter presentations'],
    roastRecommendation: 'Target Development: 17-20% DTR. Drop Temp: 200-205C. Medium roast maximizes body and tropical notes.',
  },
  {
    id: 'lot-2026-c-022',
    lotNumber: '2026-C-022',
    name: 'CATURRA BLEND WASHED',
    tier: 'exoticBlend',
    variety: 'Caturra',
    process: 'Washed',
    altitude: 1680,
    scaScore: 87.5,
    pricePerLb: 42,
    boxPrice: 1155,
    availableBoxes: 12,
    totalKg: 150,
    image: ASSETS.lots.bourbon,
    cuppingNotes: 'Clean and balanced. Milk chocolate, toasted almonds, and citrus. Medium body with pleasant sweetness. Reliable everyday specialty.',
    fragrance: 7.5,
    flavor: 7.5,
    aftertaste: 7.5,
    acidity: 7.5,
    body: 8.0,
    balance: 8.0,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 7.5,
    plotName: 'Multi-plot blend',
    gpsCoordinates: 'Multiple',
    harvestDates: 'Oct 20 - Nov 25, 2025',
    fermentationHours: 36,
    fermentationTemp: '22-26C',
    finalPH: 5.2,
    dryingDays: 15,
    restedDays: 30,
    moisture: 11.8,
    waterActivity: 0.60,
    screenSize: '15/16',
    defects: '8/300g',
    density: 680,
    recommendedFor: ['House espresso blend', 'High-volume accounts', 'Entry specialty'],
    roastRecommendation: 'Target Development: 20-25% DTR. Drop Temp: 205-212C. Forgiving roast profile. Great for blending.',
  },
  {
    id: 'lot-2026-t-015',
    lotNumber: '2026-T-015',
    name: 'TRADITIONAL HONEY',
    tier: 'exoticBlend',
    variety: 'Traditional Bourbon/Caturra',
    process: 'Honey',
    altitude: 1690,
    scaScore: 87.0,
    pricePerLb: 38,
    boxPrice: 1045,
    availableBoxes: 15,
    totalKg: 187.5,
    image: ASSETS.lots.bourbon,
    cuppingNotes: 'Sweet and approachable. Brown sugar, dried apricot, and cocoa. Smooth body with mild acidity. Perfect daily drinker.',
    fragrance: 7.5,
    flavor: 7.5,
    aftertaste: 7.0,
    acidity: 7.0,
    body: 8.0,
    balance: 8.0,
    uniformity: 10,
    cleanCup: 10,
    sweetness: 10,
    overall: 7.5,
    plotName: 'Multi-plot blend',
    gpsCoordinates: 'Multiple',
    harvestDates: 'Oct 15 - Nov 20, 2025',
    fermentationHours: 18,
    fermentationTemp: '24-28C',
    finalPH: 5.5,
    dryingDays: 18,
    restedDays: 30,
    moisture: 11.5,
    waterActivity: 0.59,
    screenSize: '15/16',
    defects: '10/300g',
    density: 675,
    recommendedFor: ['Espresso base', 'Cafe accounts', 'Blend component'],
    roastRecommendation: 'Target Development: 22-27% DTR. Drop Temp: 208-215C. Handles darker roasts well for espresso.',
  },
];

// Processing methods descriptions
export const PROCESSING_METHODS = {
  lactic: {
    name: 'Lactic Process',
    description: 'Extended anaerobic fermentation with lactobacillus cultures. Result: Creamy body, yogurt notes, tropical fruit complexity.',
    duration: '72-120 hours',
    characteristics: ['Creamy body', 'Yogurt notes', 'Tropical complexity'],
  },
  bioInnovation: {
    name: 'Bio-Innovation',
    description: 'Our proprietary technique combining controlled fermentation with specific yeast strains. Result: Unprecedented aromatics.',
    duration: '96-144 hours',
    characteristics: ['Complex aromatics', 'Unique sweetness', 'Layered flavor'],
  },
  natural: {
    name: 'Natural',
    description: 'Traditional sun-dried on African beds for 18-25 days. Result: Heavy body, fruit-forward, wine-like characteristics.',
    duration: '18-28 days drying',
    characteristics: ['Heavy body', 'Fruit-forward', 'Wine-like'],
  },
  washed: {
    name: 'Washed',
    description: 'Crystal-clear expression of terroir. Fermented 36-48 hours, mechanically washed. Result: Clean acidity, varietal clarity.',
    duration: '36-48 hours fermentation',
    characteristics: ['Clean acidity', 'Varietal clarity', 'Bright flavors'],
  },
  honey: {
    name: 'Honey',
    description: 'Partial mucilage retained during drying. Balance between washed clarity and natural sweetness.',
    duration: '15-22 days drying',
    characteristics: ['Sweetness', 'Medium body', 'Balanced'],
  },
};

// Buyer testimonials
export const TESTIMONIALS = [
  {
    quote: 'The technical documentation alone is worth the premium. I\'ve never received this level of detail from any origin partner.',
    author: 'James Chen',
    title: 'Roastmaster',
    company: 'Onyx Coffee Lab',
    location: 'Arkansas, USA',
  },
  {
    quote: 'As a competition roaster, I need lots I can trust blindly. LPET\'s Legendaries have been my secret weapon twice now.',
    author: 'Maria Santos',
    title: 'Head Roaster',
    company: 'Sightglass Coffee',
    location: 'San Francisco, USA',
  },
  {
    quote: 'The roast profile recommendations saved us 3 production batches. They already did the R&D—we just optimized from their curve.',
    author: 'Thomas Mueller',
    title: 'Founder',
    company: 'The Barn',
    location: 'Berlin, Germany',
  },
  {
    quote: 'Small batches, big impact. Our customers specifically request \'anything from La Palma\' now. It\'s become our house signature.',
    author: 'Yuki Tanaka',
    title: 'Owner',
    company: 'Fuglen Coffee',
    location: 'Tokyo, Japan',
  },
];

// Social proof stats
export const SOCIAL_PROOF = {
  roastersWorldwide: '45+',
  countries: 12,
  baristaChampions: 3,
  avgRating: 4.9,
  yearsOperating: 12,
};

// Shipping configuration
export const SHIPPING = {
  fobPort: 'Cartagena, Colombia',
  transitTime: '15-25 days',
  minimumOrder: '1 box (12.5kg)',
  paymentTerms: '50% deposit, 50% before shipping',
  repeatCustomerTerms: 'NET30 after 3 successful orders',
  sampleCost: 25,
  sampleCreditToOrder: true,
};

// Contact information
export const CONTACT = {
  email: 'green@lapalmayeltucan.com',
  whatsapp: '+57 310 XXX XXXX',
  skype: 'lpet.trade',
  officeHours: 'Mon-Fri 8am-5pm (Colombia, GMT-5)',
  location: 'Zipacon, Cundinamarca, Colombia',
};

// SEO data
export const SEO = {
  title: 'Green Coffee Nanolots | La Palma & El Tucan | 12.5kg Lots from Colombia',
  description: 'Buy specialty green coffee nanolots direct from producer. 12.5kg boxes, 85-92 SCA scores. Geisha, Sidra, Java varietals. Full traceability. Colombia origin.',
  keywords: 'green coffee, nanolots, specialty coffee, Colombian coffee, Geisha green beans, direct trade coffee, micro lot coffee, single origin green, coffee for roasters',
  ogImage: ASSETS.hero.finca,
  canonical: 'https://green.lapalmayeltucan.com',
};

// FAQ data
export const FAQ_DATA = [
  {
    question: 'What\'s the minimum order quantity?',
    answer: '1 box (12.5kg / 27.5 lbs). We specifically designed nanolots for micro-roasters who want variety without massive inventory.',
  },
  {
    question: 'How fresh is the green coffee?',
    answer: 'All lots are from the current harvest (2026). Green coffee ships within 30 days of milling. Expect 10-12% moisture content.',
  },
  {
    question: 'Can I get samples before ordering?',
    answer: 'Yes. We ship 100g roasted samples for $25 (credited to your order). Sample turnaround: 5-7 business days to North America/Europe.',
  },
  {
    question: 'What are the shipping options?',
    answer: 'FOB Cartagena: You arrange shipping from our port. DDP: We handle everything to your door (quote on request). Typical transit: 15-25 days depending on destination.',
  },
  {
    question: 'Do you offer payment terms?',
    answer: 'For first orders: 50% deposit, 50% before shipping. For repeat customers: We offer NET30 after 3 successful orders.',
  },
  {
    question: 'Are lots exclusive? Can I be the only buyer?',
    answer: 'Legendary lots (<50kg total) can be purchased exclusively. Contact us for exclusivity arrangements.',
  },
  {
    question: 'What if I\'m not satisfied with the quality?',
    answer: 'We provide pre-shipment samples from the exact bag. If the delivered coffee differs materially from the sample, we\'ll make it right.',
  },
  {
    question: 'Do you offer recurring/subscription orders?',
    answer: 'Yes! Reserve your favorite varietals for each harvest. Subscription customers get priority access to Legendary lots.',
  },
];

// Business types for form
export const BUSINESS_TYPES = [
  'Micro-Roaster (<500 lbs/month)',
  'Small Roaster (500-2000 lbs/month)',
  'Medium Roaster (2000-5000 lbs/month)',
  'Cafe with In-House Roasting',
  'Competition/Barista',
  'Other',
];

// Volume options for form
export const VOLUME_OPTIONS = [
  '1-5 boxes/year',
  '6-15 boxes/year',
  '16-30 boxes/year',
  '30+ boxes/year',
];

// Referral sources for form
export const REFERRAL_SOURCES = [
  'Trade Show',
  'Instagram',
  'Referral from another roaster',
  'Google Search',
  'Barista Competition',
  'Coffee Publication',
  'Other',
];
