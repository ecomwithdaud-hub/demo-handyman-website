// Mock Database for Apex Pro Handyman Services
// Sourced from regional competitor benchmarks (NH/New England)

export const COMPANY_INFO = {
  name: "Apex Pro Handyman Services",
  tagline: "Honest, Reliable Home Repairs & Remodeling — Done Right the First Time",
  phone: "(603) 555-0192",
  phoneRaw: "6035550192",
  email: "estimates@apexprohandyman.com",
  hours: "Mon – Sat: 7:00 AM – 6:30 PM",
  emergencyNote: "24/7 Priority Emergency Repairs Available",
  license: "NH HIC #89420-A • Fully Licensed & $2M Insured",
  rating: 4.9,
  reviewCount: 382,
  yearsInBusiness: 14,
  jobsCompleted: 3450,
  warranty: "1-Year Full Workmanship Guarantee"
};

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "carpentry", label: "Carpentry & Trim" },
  { id: "drywall-paint", label: "Drywall & Painting" },
  { id: "fixtures", label: "Fixtures & Assembly" },
  { id: "exterior-decks", label: "Decks & Exterior" },
  { id: "odd-jobs", label: "Small Odd Jobs" }
];

export const SERVICES_DATA = [
  {
    id: "finish-carpentry",
    category: "carpentry",
    title: "Finish Carpentry & Custom Trim",
    priceEstimate: "$140 – $480",
    unit: "per project / room",
    duration: "2 – 6 hours",
    badge: "Most Requested",
    description: "Baseboards, crown molding, door casings, custom wainscoting, and decorative interior woodwork installed with seamless 45-degree cuts.",
    commonJobs: [
      "Interior door hanging & latch alignment",
      "Baseboard and quarter-round installation",
      "Custom shiplap & accent walls",
      "Window stool and apron trim repair",
      "Built-in shelving and closet organizers"
    ],
    popular: true
  },
  {
    id: "drywall-repair",
    category: "drywall-paint",
    title: "Drywall Patching & Water Damage Repair",
    priceEstimate: "$120 – $350",
    unit: "per damaged area",
    duration: "1 – 4 hours",
    badge: "Fast Dispatch",
    description: "Invisible hole repairs, stress crack remediation, ceiling water leak patching, and flawless level-4/5 texture matching.",
    commonJobs: [
      "Door handle wall punctures patched",
      "Ceiling water leak repair and re-taping",
      "Drywall anchor blowout repair",
      "Seamless spray texture matching (orange peel/knockdown)",
      "Settlement crack taping and sanding"
    ],
    popular: true
  },
  {
    id: "deck-repair",
    category: "exterior-decks",
    title: "Deck Board Repair & Railing Upgrades",
    priceEstimate: "$220 – $850",
    unit: "typical repair scope",
    duration: "Half day – 2 days",
    badge: "Outdoor Pro",
    description: "Rotted deck board replacement, loose handrail tightening, stair stringer reinforcement, and power wash prep.",
    commonJobs: [
      "Replacing rotted pressure-treated and composite boards",
      "Securing wobbly posts and stair railings",
      "Joist reinforcement and ledger board flashing checks",
      "Gate hinge and latch alignment",
      "Deck sanding and seasonal wood sealing"
    ],
    popular: true
  },
  {
    id: "fixture-installation",
    category: "fixtures",
    title: "Vanity, Sink & Fixture Replacements",
    priceEstimate: "$95 – $290",
    unit: "per fixture",
    duration: "1 – 3 hours",
    badge: "Plumbing-Safe",
    description: "Updating outdated kitchen and bath fixtures, garbage disposals, toilets, and modern bathroom vanities without high plumbing fees.",
    commonJobs: [
      "Kitchen faucet and pull-down sprayer installation",
      "Bathroom vanity and mirror swap-out",
      "Toilet rebuild, wax ring replacement, and re-setting",
      "Garbage disposal installation",
      "Showerhead and handheld wand upgrades"
    ],
    popular: true
  },
  {
    id: "interior-painting",
    category: "drywall-paint",
    title: "Touch-Up & Accent Interior Painting",
    priceEstimate: "$180 – $600",
    unit: "per room / accent",
    duration: "3 – 8 hours",
    badge: "Precision Clean",
    description: "High-precision trim cutting, room color refreshes, cabinet painting, and high-traffic entryway rejuvenation with zero paint splatters.",
    commonJobs: [
      "Single room walls and ceiling painting",
      "Scuffed trim, doors, and baseboard repainting",
      "Front entry door staining and painting",
      "Kitchen cabinet door hardware repainting",
      "Caulking and gap sealing"
    ],
    popular: false
  },
  {
    id: "door-window-repairs",
    category: "carpentry",
    title: "Sticking Doors & Window Hardware",
    priceEstimate: "$85 – $210",
    unit: "per door / window",
    duration: "1 – 2 hours",
    badge: "Draft Blocker",
    description: "Fixing sticking interior and exterior doors, replacing worn weatherstripping, mortise locks, sliding screen doors, and sash cords.",
    commonJobs: [
      "Planing door bottoms for new flooring clearance",
      "Adjusting sagging hinges and strike plates",
      "Installing deadbolts and electronic smart locks",
      "Replacing drafty door bottom sweeps and weatherstripping",
      "Pocket door roller adjustments"
    ],
    popular: false
  },
  {
    id: "home-entertainment-assembly",
    category: "fixtures",
    title: "TV Wall Mounting & Heavy Mirror Hanging",
    priceEstimate: "$90 – $195",
    unit: "per mount / item",
    duration: "1 – 2 hours",
    badge: "Stud-Locked",
    description: "Secure mounting of large 55\"–85\" televisions into wood or metal studs, hidden in-wall cable routing, and heavy mirror anchors.",
    commonJobs: [
      "Tilting & articulating TV bracket wall installations",
      "Heavy ornate mirror and art gallery wall mounting",
      "Soundbar bracket and shelf installation",
      "Curtain rod, Roman shade, and blind hanging",
      "Overhead garage storage rack installation"
    ],
    popular: true
  },
  {
    id: "small-odd-jobs",
    category: "odd-jobs",
    title: "Half-Day Punch List & General Odd Jobs",
    priceEstimate: "$280 – $490",
    unit: "4-hour punch block",
    duration: "4 hours block",
    badge: "Best Value",
    description: "Hand over your running honey-do checklist! We tackle 4 to 8 small household repairs in a single consolidated afternoon visit.",
    commonJobs: [
      "Fix squeaky stairs and floorboards",
      "Re-caulking bathtub and shower grout lines",
      "Child safety gate and cabinet latch setup",
      "Smoke detector & carbon monoxide battery swap",
      "Furniture assembly (IKEA, Wayfair, Pottery Barn)"
    ],
    popular: true
  }
];

export const GALLERY_PROJECTS = [
  {
    id: "proj-1",
    category: "carpentry",
    title: "Mudroom Custom Built-In Bench & Cubbies",
    location: "Bedford, NH",
    duration: "1.5 Days",
    cost: "$820",
    beforeText: "Cluttered entryway with coats piled on floor and scuffed drywall.",
    afterText: "Custom beadboard back, solid birch bench with storage cubbies, and brass coat hooks.",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    afterImg: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
    scope: ["Custom Beadboard", "4 Double Hooks", "Shoe Storage Shelf", "Satin White Finish"]
  },
  {
    id: "proj-2",
    category: "drywall-paint",
    title: "Ceiling Water Damage Restoration",
    location: "Manchester, NH",
    duration: "4 Hours",
    cost: "$290",
    beforeText: "Sagging 2ft drywall square from second-floor bathroom pipe condensation.",
    afterText: "Rotted insulation removed, new moisture-resistant greenboard taped, skimmed, and painted.",
    beforeImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    scope: ["Moisture Remediation", "Drywall Patch", "3-Coat Mudding", "Ceiling Paint Match"]
  },
  {
    id: "proj-3",
    category: "exterior-decks",
    title: "Pressure-Treated Deck Railing Rebuild",
    location: "Concord, NH",
    duration: "1 Day",
    cost: "$640",
    beforeText: "Unsafe, loose 1990s wooden balusters failed local safety code inspection.",
    afterText: "Structural 4x4 posts reinforced with Simpson Strong-Tie brackets and black aluminum balusters.",
    beforeImg: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80",
    afterImg: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=700&q=80",
    scope: ["Structural Post Brackets", "Code-Compliant Railing", "Cedar Stain Coat", "Permit Checked"]
  },
  {
    id: "proj-4",
    category: "fixtures",
    title: "Guest Bath Vanity & Brushed Nickel Plumbing Swap",
    location: "Nashua, NH",
    duration: "3.5 Hours",
    cost: "$340",
    beforeText: "1980s oak veneer cabinet with corroded leaky chrome faucet.",
    afterText: "Modern navy 36\" freestanding vanity, quartz top, brushed nickel faucet and new P-trap.",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80",
    afterImg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=700&q=80",
    scope: ["Vanity Assembly & Anchor", "Plumbing Reconnection", "Silicone Backsplash Seal", "Old Unit Disposal"]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Dave & Cheryl M.",
    town: "Bedford, NH",
    service: "Mudroom Carpentry & Trim",
    rating: 5,
    date: "November 2026",
    text: "Apex Pro was a breath of fresh air compared to contractors who ghost you. Arrived at 7:45 AM, protected our hardwood floors with drop cloths, and finished our built-in entryway bench ahead of time. Pricing was exact to the penny quoted.",
    verified: true
  },
  {
    id: 2,
    name: "Sarah Lindquist",
    town: "Manchester, NH",
    service: "Drywall & Ceiling Patch",
    rating: 5,
    date: "October 2026",
    text: "Had a basketball-sized hole from a moving incident right before family arrived for Thanksgiving. You literally cannot tell where the repair happened. The texture match was art.",
    verified: true
  },
  {
    id: 3,
    name: "Robert H.",
    town: "Concord, NH",
    service: "Deck Stair & Board Repair",
    rating: 5,
    date: "September 2026",
    text: "Other companies wanted to tear down our entire 20x16 deck for $12k. Apex inspected the framing, told us the frame was solid, and replaced only the damaged boards and railings for a fraction. Honest craftsmen.",
    verified: true
  },
  {
    id: 4,
    name: "Elena Rostova",
    town: "Nashua, NH",
    service: "Half-Day Punch List",
    rating: 5,
    date: "November 2026",
    text: "They knocked out 6 separate items in four hours: sticking front door, 2 ceiling fans, toilet valve, and drywall patching. Super polite and left the house spotless.",
    verified: true
  }
];

export const SERVICE_AREAS = [
  { town: "Manchester", zip: "03101 - 03109", eta: "Same-Day / Next-Day", active: true },
  { town: "Bedford", zip: "03110", eta: "Same-Day Dispatch", active: true },
  { town: "Concord", zip: "03301 - 03305", eta: "Next-Day", active: true },
  { town: "Nashua", zip: "03060 - 03064", eta: "Same-Day Dispatch", active: true },
  { town: "Merrimack", zip: "03054", eta: "Same-Day / Next-Day", active: true },
  { town: "Derry", zip: "03038", eta: "Next-Day", active: true },
  { town: "Londonderry", zip: "03053", eta: "Same-Day Dispatch", active: true },
  { town: "Salem", zip: "03079", eta: "Next-Day", active: true },
  { town: "Hooksett", zip: "03106", eta: "Same-Day Dispatch", active: true },
  { town: "Amherst", zip: "03031", eta: "Next-Day", active: true },
  { town: "Milford", zip: "03055", eta: "Next-Day", active: true },
  { town: "Portsmouth / Seacoast", zip: "03801", eta: "Scheduled Route", active: true }
];

export const TRUST_PILLARS = [
  {
    title: "100% Upfront Pricing",
    desc: "Detailed written quotes before any tool is lifted. No hidden truck fees or surprise hourly creeps.",
    icon: "ShieldCheck"
  },
  {
    title: "1-Year Warranty",
    desc: "If any repair fails or loosens within 365 days, we return and rectify it free of charge.",
    icon: "Award"
  },
  {
    title: "Licensed & $2M Insured",
    desc: "Complete liability and worker protection so your home is always in fully safe, certified hands.",
    icon: "BadgeCheck"
  },
  {
    title: "Clean Floor Guarantee",
    desc: "We wear protective shoe covers, lay neoprene floor runners, and vacuum thoroughly upon finish.",
    icon: "Sparkles"
  }
];

// Persistent Local Database Helper for Submitted Estimates/Quotes
const STORAGE_KEY = "apex_handyman_quotes_v1";

export const getStoredQuotes = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed default demo quotes
      const seed = [
        {
          id: "EST-8921",
          name: "Michael Sullivan",
          phone: "(603) 845-1920",
          email: "m.sullivan@gmail.com",
          town: "Bedford",
          service: "Finish Carpentry & Custom Trim",
          details: "Need interior baseboards replaced in living room and hallway after hardwood floor installation.",
          preferredTime: "Morning (8am - 12pm)",
          status: "Estimate Sent",
          estimatedAmount: "$320 - $450",
          dateSubmitted: "2026-11-19 14:30"
        },
        {
          id: "EST-8922",
          name: "Jessica Alvarez",
          phone: "(603) 712-4411",
          email: "jess.alvarez@outlook.com",
          town: "Manchester",
          service: "Vanity, Sink & Fixture Replacements",
          details: "Purchased a 30-inch vanity from Lowe's, need old one removed and new one connected to existing plumbing.",
          preferredTime: "Afternoon (1pm - 5pm)",
          status: "Booked for Friday",
          estimatedAmount: "$180 - $240",
          dateSubmitted: "2026-11-20 09:15"
        }
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
};

export const saveNewQuote = (quoteData) => {
  try {
    const existing = getStoredQuotes();
    const newQuote = {
      id: "EST-" + Math.floor(1000 + Math.random() * 9000),
      ...quoteData,
      status: "New Request",
      dateSubmitted: new Date().toLocaleString()
    };
    const updated = [newQuote, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newQuote;
  } catch (e) {
    console.error("Storage error:", e);
    return null;
  }
};
