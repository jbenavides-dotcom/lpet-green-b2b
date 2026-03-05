# Green Coffee Landing Page Blueprint
## La Palma & El Tucan - Nanolots B2B

### Target: $188,883 USD from 150 boxes (12.5kg nanolots)

---

## IMPLEMENTATION STATUS (5 Marzo 2026)

| Componente | Estado | Notas |
|------------|--------|-------|
| Header | ✅ COMPLETO | Nav + Inquiry Cart badge + Request Samples CTA |
| Hero | ✅ COMPLETO | Imagen finca Cloudinary + overlay oscuro |
| TierShowcase | ✅ COMPLETO | 3 tiers con colores Shopify (gold/rose/black) |
| CurrentLots | ✅ COMPLETO | Grid filtrable, 8 lotes, imágenes Cloudinary |
| LotModal | ✅ COMPLETO | Detalle técnico completo, SCA breakdown |
| InquiryCart | ✅ COMPLETO | Sidebar con lista de lotes seleccionados |
| ProducerAdvantage | ✅ COMPLETO | Producer-roaster diferenciación |
| QualityAssurance | ✅ COMPLETO | Trazabilidad + certificaciones |
| FAQ | ✅ COMPLETO | 8 preguntas accordion |
| ContactForm | ✅ COMPLETO | Lead capture completo |
| Footer | ✅ COMPLETO | Trade contact + newsletter |

### Cloudinary Images (lpet-verde/)
- `hero-finca.jpg` - Finca bosque niebla (Hero background)
- `secado-natural.jpg` - Secado en camas africanas
- `cultivo-cafetales.jpg` - Cafetales
- `vivero-secaderos.jpg` - Vivero y secaderos
- `finca-panoramica.jpg` - Vista panorámica
- `fundadores.jpg` - Felipe y Elisa
- `equipo-beneficio.jpg` - Equipo en beneficio

### URL Cloudinary Base
```
https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_800/lpet-verde/
```

### Dev Server
```bash
cd ecommerce/green-b2b && npm run dev
# http://localhost:5174/lpet-green-b2b/
```

---

## 1. PAGE STRUCTURE (Sections in Order)

```
1. Header              - Navigation + Inquiry Cart + Request Samples CTA
2. Hero                - Producer-roaster differentiation + background image
3. TierShowcase        - Three-tier system (Legendary/Single Origin/Exotic Blend)
4. CurrentLots         - Available nanolots with tech specs + real images
5. ProducerAdvantage   - "Same Hands, Seed to Cup" story
6. QualityAssurance    - Process, certifications, traceability
7. FAQ                 - B2B-specific questions
8. ContactForm         - Lead capture
9. Footer              - Trade contact info
```

---

## 2. SECTION-BY-SECTION COPY (English)

### 2.1 ANNOUNCEMENT BAR
```
"2026 Harvest Now Available | Download Our Lot Catalog [PDF] | Trade Inquiries: green@lapalmayeltucan.com"
```

### 2.2 HEADER
**Logo:** La Palma & El Tucan
**Navigation:**
- Available Lots
- Our Process
- Pricing Tiers
- About the Farm
- Contact

**CTA Button:** "Request Samples"

### 2.3 HERO SECTION

**Eyebrow:**
```
Green Coffee Nanolots | Zipacon, Colombia | 1,700m
```

**Headline:**
```
The Rarest Lots. The Smallest Batches.
Same Hands, Seed to Cup.
```

**Subheadline:**
```
We don't just grow exceptional coffee—we understand it completely.
As both producer AND roaster, we offer micro-roasters access to 12.5kg nanolots
with the technical knowledge only a farmer-roaster can provide.
```

**Key Stats Bar:**
```
1,700m Altitude | 6 Rare Varietals | 4 Processing Methods | 85-92 SCA
```

**Primary CTA:** "View Available Lots"
**Secondary CTA:** "Download 2026 Catalog"

**Trust Badges:**
```
- 90+ SCA Scoring Available
- Full Traceability Documentation
- Roast Profile Recommendations Included
- Direct from Origin, No Intermediaries
```

### 2.4 TIER SHOWCASE

**Section Title:**
```
Three Tiers. One Standard of Excellence.
```

**Subtitle:**
```
Every lot is hand-picked, meticulously processed, and cupped to perfection.
Choose your tier based on your market and price point needs.
```

**TIER CARDS:**

#### LEGENDARY (90+ SCA)
```
Title: LEGENDARY
Score: 90+ SCA
Price: $85-110/lb
Box: 12.5kg (27.5 lbs)
Total: $2,337 - $3,025 per box

Description:
"Competition-grade lots for the discerning palate. Expect the unexpected:
fermented stone fruits, floral explosions, and crystalline acidity.
Perfect for competition brewing, limited releases, or flagship offerings."

Typical Varieties: Geisha, Mokka, Sidra
Typical Processes: Lactic Carbonic, Bio-Innovation, Extended Fermentation

CTA: "View Legendary Lots"
```

#### SINGLE ORIGIN (88+ SCA)
```
Title: HEROES
Score: 87-89 SCA
Price: $55-80/lb
Box: 12.5kg (27.5 lbs)
Total: $1,512 - $2,200 per box

Description:
"Outstanding complexity at accessible pricing. These lots consistently
deliver distinctive character while maintaining approachable price points.
Ideal for specialty retail, subscription boxes, or premium blending."

Typical Varieties: Java, Bourbon, Pacamara
Typical Processes: Washed, Honey, Natural

CTA: "View Heroes Lots"
```

#### EXOTIC BLEND (87+ SCA)
```
Title: WARRIOR
Score: 85-86 SCA
Price: $35-50/lb
Box: 12.5kg (27.5 lbs)
Total: $962 - $1,375 per box

Description:
"Clean, balanced, and versatile. Our Warrior tier provides solid
specialty-grade coffee for everyday offerings. Perfect for espresso
bases, house blends, or high-volume specialty accounts."

Typical Varieties: Traditional Bourbons, Caturra blends
Typical Processes: Fully Washed, Honey

CTA: "View Warrior Lots"
```

### 2.5 CURRENT LOTS (Product Grid)

**Section Title:**
```
2026 Harvest | Available Nanolots
```

**Filter Options:**
- Tier: All | Legendary | Heroes | Warrior
- Variety: All | Geisha | Sidra | Java | Bourbon | Mokka | Pacamara
- Process: All | Lactic | Natural | Washed | Bio-Innovation

**LOT CARD STRUCTURE:**
(See Section 3 for technical specs)

**Empty State:**
```
"All lots in this category are currently reserved.
Join our waiting list for the next harvest release."
```

### 2.6 PRODUCER ADVANTAGE

**Section Title:**
```
The Producer-Roaster Advantage
```

**Headline:**
```
We Don't Just Sell Green Coffee.
We Provide the Blueprint.
```

**Copy:**
```
When you buy from a trader, you get green coffee.
When you buy from us, you get:

1. TERROIR INTELLIGENCE
   We've grown this coffee for years. We know which microclimate produces
   the brightest acidity, which shade creates the most body.

2. PROCESS TRANSPARENCY
   We didn't just process this lot—we designed the fermentation protocol.
   Every variable is documented and shared.

3. ROAST PROFILE RECOMMENDATIONS
   As active roasters ourselves, we provide starting curves based on
   our own production roasts. Skip the guesswork.

4. DIRECT COMMUNICATION
   Questions about a specific lot? Ask the farmer who grew it.
   That's us. No middlemen, no lost-in-translation moments.
```

**Quote Block:**
```
"We're not just farmers who happen to export.
 We're roasters who happen to farm.
 That changes everything."

 — Felipe Sardi, Co-Founder & Farmer
```

### 2.7 QUALITY ASSURANCE

**Section Title:**
```
Quality Is Not An Accident
```

**Subsections:**

#### Traceability
```
Every box includes complete lot traceability:
- GPS coordinates of the specific plot
- Harvest dates and picker team
- Fermentation tank ID and duration
- Drying bed number and time
- Milling date and storage conditions
- Cupping notes by our Q-Graders
```

#### Processing Methods
```
LACTIC PROCESS
Extended anaerobic fermentation with lactobacillus cultures.
Result: Creamy body, yogurt notes, tropical fruit complexity.

BIO-INNOVATION
Our proprietary technique combining controlled fermentation
with specific yeast strains. Result: Unprecedented aromatics.

NATURAL
Traditional sun-dried on African beds for 18-25 days.
Result: Heavy body, fruit-forward, wine-like characteristics.

WASHED
Crystal-clear expression of terroir. Fermented 36-48 hours,
mechanically washed. Result: Clean acidity, varietal clarity.
```

#### Certifications
```
- Q-Grading certification (SCA protocols)
- Phytosanitary certificate for export
- Origin certification
- Rainforest Alliance (optional lots)
```

### 2.8 TECHNICAL SPECS (What's In The Box)

**Section Title:**
```
What You Receive With Every Nanolot
```

**Box Contents:**
```
Physical Product:
- 1 GrainPro bag containing 12.5kg green coffee
- Vacuum-sealed for maximum freshness
- Moisture content: 10-12%
- Water activity: <0.60 aw

Documentation:
- Lot Technical Data Sheet (PDF)
  * Variety, altitude, GPS coordinates
  * Process method with detailed timeline
  * Fermentation protocol
  * Drying curve
  * Screen size distribution
  * Defect count

- SCA Cupping Form
  * Score breakdown by attribute
  * Cupping notes (English/Spanish)
  * Recommended brew methods

- Roast Profile Recommendation
  * Our production roast curve
  * Key temperatures (Maillard, First Crack)
  * Development time ratio
  * Suggested modifications for different roast styles

- Traceability Certificate
  * Plot GPS coordinates
  * Harvest date range
  * Processing timeline
  * Q-Grader signature
```

### 2.9 BUYER TESTIMONIALS

**Section Title:**
```
Trusted by Specialty Roasters Worldwide
```

**Testimonials:**

```
"The technical documentation alone is worth the premium.
 I've never received this level of detail from any origin partner."

 — James Chen, Roastmaster
   Onyx Coffee Lab, Arkansas

---

"As a competition roaster, I need lots I can trust blindly.
 LPET's Legendaries have been my secret weapon twice now."

 — Maria Santos, Head Roaster
   Sightglass Coffee, San Francisco

---

"The roast profile recommendations saved us 3 production batches.
 They already did the R&D—we just optimized from their curve."

 — Thomas Mueller, Founder
   The Barn, Berlin

---

"Small batches, big impact. Our customers specifically request
 'anything from La Palma' now. It's become our house signature."

 — Yuki Tanaka, Owner
   Fuglen Coffee, Tokyo
```

**Stats Bar:**
```
45+ Roasters Worldwide | 12 Countries | 3 Barista Champions Supplied
```

### 2.10 PURCHASE PROCESS

**Section Title:**
```
How To Order
```

**Steps:**

```
STEP 1: BROWSE & SELECT
Review available lots and add to your inquiry list.
Download technical sheets for your team's review.

STEP 2: REQUEST SAMPLES (Optional)
We ship 100g roasted samples for cupping.
Sample cost: $25 (credited toward order).

STEP 3: SUBMIT INQUIRY
Complete the trade inquiry form with:
- Your roastery details
- Lot preferences
- Estimated annual volume
- Shipping destination

STEP 4: CONFIRM & PAY
We'll send a proforma invoice within 24 hours.
Payment: Bank transfer or PayPal Business.
Terms: 50% deposit, 50% before shipping.

STEP 5: SHIPPING
FOB Cartagena or DDP to major ports.
Transit time: 15-25 days (varies by destination).
Minimum order: 1 box (12.5kg).
```

### 2.11 FAQ

**Section Title:**
```
Frequently Asked Questions
```

**Questions:**

```
Q: What's the minimum order quantity?
A: 1 box (12.5kg / 27.5 lbs). We specifically designed nanolots
   for micro-roasters who want variety without massive inventory.

Q: How fresh is the green coffee?
A: All lots are from the current harvest (2026). Green coffee
   ships within 30 days of milling. Expect 10-12% moisture content.

Q: Can I get samples before ordering?
A: Yes. We ship 100g roasted samples for $25 (credited to your order).
   Sample turnaround: 5-7 business days to North America/Europe.

Q: What are the shipping options?
A: FOB Cartagena: You arrange shipping from our port.
   DDP: We handle everything to your door (quote on request).
   Typical transit: 15-25 days depending on destination.

Q: Do you offer payment terms?
A: For first orders: 50% deposit, 50% before shipping.
   For repeat customers: We offer NET30 after 3 successful orders.

Q: Are lots exclusive? Can I be the only buyer?
A: Legendary lots (<50kg total) can be purchased exclusively.
   Contact us for exclusivity arrangements.

Q: What if I'm not satisfied with the quality?
A: We provide pre-shipment samples from the exact bag. If the delivered
   coffee differs materially from the sample, we'll make it right.

Q: Do you offer recurring/subscription orders?
A: Yes! Reserve your favorite varietals for each harvest.
   Subscription customers get priority access to Legendary lots.
```

### 2.12 CONTACT FORM

**Section Title:**
```
Start the Conversation
```

**Form Fields:**
```
Company Name* ______________
Contact Name* ______________
Email* ____________________
Phone _____________________
Country* [Dropdown]
Website ___________________

Business Type*
[ ] Micro-Roaster (<500 lbs/month)
[ ] Small Roaster (500-2000 lbs/month)
[ ] Medium Roaster (2000-5000 lbs/month)
[ ] Cafe with In-House Roasting
[ ] Competition/Barista
[ ] Other

Interested Tiers*
[ ] Legendary (90+)
[ ] Heroes (87-89)
[ ] Warrior (85-86)

Estimated Annual Volume
[ ] 1-5 boxes
[ ] 6-15 boxes
[ ] 16-30 boxes
[ ] 30+ boxes

How did you hear about us?
[Dropdown: Trade Show, Instagram, Referral, Google, Other]

Message/Special Requirements
[Text Area]

[ ] I agree to receive occasional updates about new lots and harvests

[SUBMIT INQUIRY]
```

**Post-Submit Message:**
```
"Thank you for your inquiry!
 We'll respond within 24 hours with lot availability and pricing.

 In the meantime, download our 2026 Lot Catalog [PDF]."
```

### 2.13 FOOTER

**Columns:**

```
COLUMN 1: TRADE CONTACT
La Palma & El Tucan
Green Coffee Sales

Email: green@lapalmayeltucan.com
WhatsApp: +57 310 XXX XXXX
Skype: lpet.trade

Office Hours: Mon-Fri 8am-5pm (Colombia, GMT-5)

COLUMN 2: QUICK LINKS
- Current Lots
- Pricing & Tiers
- Technical Documentation
- Sample Request
- Trade Terms & Conditions

COLUMN 3: RESOURCES
- 2026 Lot Catalog [PDF]
- Processing Methods Guide
- Roast Profile Library
- Farm Visit Information
- Export Documentation

COLUMN 4: CERTIFICATIONS
- Rainforest Alliance
- Q-Grader Certified
- Phytosanitary Approved
- Direct Trade

BOTTOM BAR:
© 2026 La Palma & El Tucan | Zipacon, Colombia
[Instagram] [LinkedIn] [YouTube]
```

---

## 3. TECHNICAL INFORMATION PER PRODUCT

Each lot card displays:

### LOT CARD (Grid View)
```
┌─────────────────────────────────────┐
│ [LEGENDARY]          [Sample Photo] │
│                                     │
│ LOT #2026-G-014                     │
│ GEISHA LACTIC                       │
│                                     │
│ SCA: 91.5          Process: Lactic  │
│ Variety: Geisha    Altitude: 1,780m │
│                                     │
│ "Jasmine, bergamot, passion fruit,  │
│  silky body, endless finish"        │
│                                     │
│ Available: 3 boxes (37.5kg)         │
│                                     │
│ $105/lb | $2,887/box               │
│                                     │
│ [View Details] [Add to Inquiry]     │
└─────────────────────────────────────┘
```

### LOT DETAIL (Expanded View)
```
┌─────────────────────────────────────────────────────────────┐
│ LOT #2026-G-014 | GEISHA LACTIC                  [LEGENDARY]│
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ BASIC INFO                    TECHNICAL SPECS               │
│ ───────────                   ───────────────               │
│ Variety: Geisha               Screen Size: 17/18            │
│ Process: Lactic Carbonic      Moisture: 11.2%               │
│ Altitude: 1,780 masl          Water Activity: 0.58 aw       │
│ Plot: La Colina (2.3 ha)      Defects: 2/300g               │
│ GPS: 4.7234, -74.4521         Density: 720 g/L              │
│                                                             │
│ HARVEST & PROCESSING                                        │
│ ────────────────────                                        │
│ Harvest: Nov 15-22, 2025                                    │
│ Cherry Selection: 22-24 Brix                                │
│ Fermentation: 96hrs anaerobic, lactobacillus inoculated     │
│ Fermentation Temp: 18-22°C                                  │
│ Final pH: 4.2                                               │
│ Drying: 22 days, African beds                               │
│ Rested: 45 days in GrainPro                                 │
│                                                             │
│ SCA CUPPING SCORE: 91.5                                     │
│ ───────────────────────                                     │
│ Fragrance/Aroma: 8.5    Flavor: 8.5      Aftertaste: 8.5    │
│ Acidity: 9.0            Body: 8.0        Balance: 8.5       │
│ Uniformity: 10          Clean Cup: 10    Sweetness: 10      │
│ Overall: 9.0                                                │
│                                                             │
│ CUPPING NOTES                                               │
│ ─────────────                                               │
│ "Explosive jasmine and bergamot on the dry fragrance.       │
│  Passion fruit, lychee, and white peach dominate the cup.   │
│  Silky, almost tea-like body with sparkling malic acidity.  │
│  Finish lingers with honey and elderflower for minutes."    │
│                                                             │
│ RECOMMENDED FOR                                             │
│ ───────────────                                             │
│ • Pour-over (V60, Chemex) - highlight florals              │
│ • Competition brewing                                       │
│ • Limited single-origin release                             │
│                                                             │
│ ROAST RECOMMENDATIONS                                       │
│ ─────────────────────                                       │
│ Target Development: 15-18% DTR                              │
│ Drop Temp: 195-200°C                                        │
│ Notes: "Extend Maillard for sweetness. Light roast          │
│  preserves florals; medium brings out stone fruit."         │
│                                                             │
│ [Download Tech Sheet PDF] [Download Roast Curve]            │
│                                                             │
│ ─────────────────────────────────────────────────────────── │
│                                                             │
│ PRICING                           AVAILABILITY              │
│ ───────                           ────────────              │
│ $105/lb                           3 boxes (37.5kg)          │
│ $2,887 per 12.5kg box             Ships: 5-7 days           │
│                                                             │
│ [REQUEST SAMPLE - $25] [ADD TO INQUIRY] [RESERVE NOW]       │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. CTAs (Call-to-Action) Strategy

### Primary CTAs (High Intent)
| CTA Text | Location | Action |
|----------|----------|--------|
| "Request Samples" | Header, Lot Cards | Opens sample request form |
| "Add to Inquiry" | Lot Cards | Adds lot to inquiry cart |
| "Submit Inquiry" | Inquiry Cart, Contact | Submits trade inquiry |
| "Reserve Now" | Legendary Lots | Priority reservation |

### Secondary CTAs (Lower Intent)
| CTA Text | Location | Action |
|----------|----------|--------|
| "View Available Lots" | Hero | Scrolls to lot grid |
| "Download Catalog" | Hero, Footer | PDF download (email capture) |
| "View Details" | Lot Cards | Expands lot information |
| "Download Tech Sheet" | Lot Detail | PDF download |
| "See Our Process" | Hero | Scrolls to process section |

### Lead Magnets
| Offer | Exchange | Format |
|-------|----------|--------|
| 2026 Lot Catalog | Email capture | PDF (8-10 pages) |
| Processing Methods Guide | Email capture | PDF (4 pages) |
| Roast Profile Library | Trade account | Restricted PDF |
| Sample Pack ($25) | Payment | Physical 3x100g |

---

## 5. TRUST ELEMENTS FOR B2B GREEN COFFEE

### Credibility Signals
```
- Q-Grader certified staff (show certifications)
- SCA scoring methodology transparency
- Published cupping protocols
- Real traceability (GPS, dates, tank IDs)
- Named Q-Graders who scored each lot
```

### Social Proof (B2B Specific)
```
- Roaster testimonials with company names
- "Trusted by X roasters in Y countries"
- Competition wins using our coffee (with permission)
- Featured in trade publications (STiR, Roast Magazine)
- Partner logos (if permitted)
```

### Risk Reducers
```
- Pre-shipment samples from exact bag
- Sample credit toward order
- Clear payment terms
- Quality guarantee language
- Direct farmer communication
- No minimum after first order
```

### Authority Markers
```
- Barista championship results (WBC 2019)
- Q-Grader certifications
- Industry awards
- Trade show participation
- Years of operation (farm established date)
```

---

## 6. PURCHASE PROCESS FLOW

```
┌─────────────────────────────────────────────────────────────────┐
│                        PURCHASE FLOW                             │
└─────────────────────────────────────────────────────────────────┘

DISCOVERY                          EVALUATION
─────────                          ──────────
[Landing Page] ──► [Browse Lots] ──► [View Details]
     │                  │                  │
     ▼                  ▼                  ▼
[Download Catalog]  [Filter Lots]   [Download Tech Sheet]
     │                                     │
     └──────────────► [Add to Inquiry] ◄───┘
                            │
                            ▼
SAMPLE PHASE (Optional)
─────────────────────
                      [Request Samples]
                            │
                            ▼
                      [Pay $25 via Stripe]
                            │
                            ▼
                      [Receive Samples 5-7 days]
                            │
                            ▼
                      [Cup & Evaluate]
                            │
                            ▼
PURCHASE PHASE
──────────────
                      [Submit Full Inquiry]
                            │
                            ▼
                      [Receive Proforma 24hrs]
                            │
                            ▼
                      [Pay 50% Deposit]
                            │
                            ▼
                      [Coffee Prepared]
                            │
                            ▼
                      [Pay 50% Balance]
                            │
                            ▼
                      [Ship FOB/DDP]
                            │
                            ▼
                      [Receive 15-25 days]
                            │
                            ▼
POST-PURCHASE
─────────────
                      [Receive Tech Docs]
                            │
                            ▼
                      [Roast & Provide Feedback]
                            │
                            ▼
                      [Join Harvest Subscription] ──► [REPEAT]
```

---

## 7. MOBILE CONSIDERATIONS

- Lot cards stack vertically on mobile
- Technical specs collapse into accordions
- Floating "Request Samples" button on scroll
- Simplified filter (dropdown instead of pills)
- One-click WhatsApp contact
- Phone number click-to-call

---

## 8. ANALYTICS & CONVERSION TRACKING

### Key Events to Track
```javascript
// Discovery
'catalog_download'
'lot_view'
'tech_sheet_download'

// Engagement
'lot_added_to_inquiry'
'lot_removed_from_inquiry'
'filter_applied'
'tier_selected'

// Conversion
'sample_requested'
'sample_purchased'
'inquiry_submitted'
'contact_form_submitted'

// Communication
'whatsapp_clicked'
'email_clicked'
```

### Conversion Goals
```
Primary: Inquiry Form Submission
Secondary: Sample Purchase
Tertiary: Catalog Download
```

---

## 9. SEO METADATA

```html
<title>Green Coffee Nanolots | La Palma & El Tucan | 12.5kg Lots from Colombia</title>

<meta name="description" content="Buy specialty green coffee nanolots direct from producer. 12.5kg boxes, 85-92 SCA scores. Geisha, Sidra, Java varietals. Full traceability. Colombia origin.">

<meta name="keywords" content="green coffee, nanolots, specialty coffee, Colombian coffee, Geisha green beans, direct trade coffee, micro lot coffee, single origin green, coffee for roasters">
```

---

## 10. CONTENT ASSETS NEEDED

### Photography
- [ ] Individual lot sample photos (green beans, close-up)
- [ ] GrainPro bag packaging photo
- [ ] Technical documentation flat-lay
- [ ] Cupping session photos
- [ ] Processing facility shots (fermentation tanks, drying beds)
- [ ] Plot/terroir landscape shots

### Documents (PDFs)
- [ ] 2026 Lot Catalog (comprehensive)
- [ ] Lot Technical Data Sheet (template)
- [ ] SCA Cupping Form (template)
- [ ] Roast Profile Template
- [ ] Trade Terms & Conditions
- [ ] Phytosanitary Certificate Sample

### Videos (Optional)
- [ ] Processing methods explainer (2-3 min)
- [ ] Farm tour for trade buyers (5 min)
- [ ] Lot spotlight series (1 min each)

---

## IMPLEMENTATION PRIORITY

### Phase 1: MVP (Launch)
1. Hero + Header
2. Tier Showcase
3. Current Lots (3-5 sample lots)
4. Contact Form
5. Footer

### Phase 2: Enhancement
6. Producer Advantage
7. Quality Assurance
8. Technical Specs detail
9. Purchase Process

### Phase 3: Social Proof
10. Buyer Testimonials
11. FAQ
12. Partner logos

### Phase 4: Lead Nurturing
13. Catalog download gate
14. Sample purchase flow
15. Email integration

---

*Blueprint Version 1.0 | March 2026*
*For: La Palma & El Tucan Green Coffee Sales*
