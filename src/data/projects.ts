export interface ProjectIndexItem {
  id: string;
  brand: string;
  name: string;
  discipline: string;
  year: string;
  status: 'Public Case' | 'Confidential / Gated';
}

export interface DetailedProject {
  id: string;
  brand: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  challenge: string;
  insight: string;
  strategy: string;
  impact: string;
  frameworkSummary: string;
}

export interface StrategicFramework {
  id: string;
  name: string;
  subtitle: string;
  problemSolved: string;
  pillars: { label: string; description: string }[];
}

export interface ConfidentialDeck {
  id: string;
  title: string;
  client: string;
  year: string;
  scope: string;
  confidentialityNote: string;
}

export const projectIndex: ProjectIndexItem[] = [
  {
    id: 'jim-beam-strategy',
    brand: 'Jim Beam',
    name: 'Heritage Spirits Repositioning',
    discipline: 'Brand Strategy & Portfolio Architecture',
    year: '2023–2024',
    status: 'Public Case'
  },
  {
    id: 'yeti-elasticity',
    brand: 'YETI',
    name: 'Brand Elasticity & Cult Retention Dynamics',
    discipline: 'Consumer Insights & Growth Advisory',
    year: '2023',
    status: 'Public Case'
  },
  {
    id: 'army-ops',
    brand: 'U.S. Army',
    name: 'Mission Command & Logistical Systems',
    discipline: 'Operational Execution & Risk Architecture',
    year: '2017–2022',
    status: 'Public Case'
  },
  {
    id: 'deck-consumer-packaged-goods',
    brand: 'Global CPG Client',
    name: 'Next-Gen Occasion & Beverage Portfolio Architecture',
    discipline: 'Confidential Brand Advisory',
    year: '2024',
    status: 'Confidential / Gated'
  },
  {
    id: 'deck-outdoor-direct-to-consumer',
    brand: 'Performance Outdoor Brand',
    name: 'Category Expansion & Premiumization Strategy',
    discipline: 'Growth & Merchandising Strategy',
    year: '2024',
    status: 'Confidential / Gated'
  }
];

export const detailedProjects: DetailedProject[] = [
  {
    id: 'jim-beam-strategy',
    brand: 'Jim Beam',
    title: 'Heritage Spirits Brand Repositioning',
    tagline: 'Bridging 200+ years of American heritage with next-generation consumers without eroding brand equity.',
    year: '2023–2024',
    role: 'Brand Strategist & Consumer Insights Lead',
    challenge: 'Generational transition: 25–34 LDA consumers prioritize premium craft, occasion versatility, and modern convivial rituals over dusty heritage tropes.',
    insight: 'Heritage is dead weight unless it feels living. Consumers do not buy bourbon for the nostalgia of barrels; they buy it for authentic hospitality, craft, and unpretentious confidence.',
    strategy: 'Shifted the strategic narrative from historical preservation to active hospitality. Designed an occasion-based portfolio framework mapping premiumization tiers to emerging social rituals.',
    impact: 'Established an actionable strategic foundation for global brand cycles, harmonizing regional marketing activations while protecting core brand equity.',
    frameworkSummary: 'Occasion-Based Demand Space Model (mapping social velocity vs. premiumization tier).'
  },
  {
    id: 'yeti-elasticity',
    brand: 'YETI',
    title: 'Brand Elasticity & Cult Retention Dynamics',
    tagline: 'Analyzing brand stretch, community retention, and category expansion for category-defining durable goods.',
    year: '2023',
    role: 'Lead Strategic Consultant (McCombs MBA)',
    challenge: 'How an ultra-premium outdoor brand expands from core utilitarian dominance (coolers) into everyday lifestyle categories without diluting its rugged credibility.',
    insight: 'Brand elasticity is earned through emotional authenticity, not SKU proliferation. When consumers trust a brand on backcountry expeditions, that trust converts into everyday pride of ownership.',
    strategy: 'Synthesized quantitative customer segmentation with ethnographic field research. Mapped the lifecycle journey from utilitarian tool to cultural badge.',
    impact: 'Delivered an executive-ready strategic advisory report and presentation analyzing product adjacency criteria, community storytelling channels, and DTC retention.',
    frameworkSummary: 'Category Elasticity Matrix (evaluating technical utility threshold vs. cultural badge value).'
  },
  {
    id: 'army-ops',
    brand: 'U.S. Army',
    title: 'High-Stakes Operational Execution & Mission Command',
    tagline: 'Leading cross-functional teams, multi-echelon resource logistics, and decentralized decision-making under uncertainty.',
    year: '2017–2022',
    role: 'Army Officer / Operations Lead',
    challenge: 'Executing complex, multi-variable operations involving millions of dollars in equipment, personnel welfare, and time-critical missions where communication degrades and error margins are zero.',
    insight: 'Centralized control fails under pressure. Clarity of intent ("commander’s intent") empowers front-line leaders to adapt instantaneously without waiting for permission.',
    strategy: 'Instituted disciplined operational rhythms, rigorous contingency planning (PACE planning), and flattened communication channels across functional teams.',
    impact: 'Consistently earned top evaluations for mission readiness, unit morale, and logistical precision in high-pressure operational environments.',
    frameworkSummary: 'Mission Command Architecture (Intent, Decentralized Authority, PACE Risk Mitigation).'
  }
];

export const strategicFrameworks: StrategicFramework[] = [
  {
    id: 'occasion-demand-model',
    name: 'Occasion-Driven Portfolio Architecture',
    subtitle: 'Structuring brand portfolios around consumer consumption rituals rather than internal corporate categories.',
    problemSolved: 'Prevents product cannibalization and aligns premiumization tiers with real-world consumer behavior.',
    pillars: [
      { label: 'Demand Space Mapping', description: 'Isolating emotional need states (high-energy celebration vs. intimate craft unwinding).' },
      { label: 'Tier Partitioning', description: 'Assigning specific SKUs to price and occasion thresholds to eliminate shelf confusion.' },
      { label: 'Ritual Amplification', description: 'Designing marketing touchpoints that anchor the product into repeatable social habits.' }
    ]
  },
  {
    id: 'brand-elasticity-matrix',
    name: 'The Brand Elasticity & Stretch Filter',
    subtitle: 'Evaluating adjacent category expansion without diluting core brand equity.',
    problemSolved: 'Stops undisciplined SKU proliferation before it destroys consumer trust.',
    pillars: [
      { label: 'Credibility Anchor', description: 'Does the brand’s core extreme-use proof transfer logically to the new category?' },
      { label: 'Utilitarian Integrity', description: 'Does the new product offer genuine performance superiority or is it just branded merch?' },
      { label: 'Cultural Resonance', description: 'Does owning the product serve as a badge of values for the core community?' }
    ]
  }
];

export const confidentialDecks: ConfidentialDeck[] = [
  {
    id: 'deck-cpg-spirits',
    title: 'Next-Gen Beverage Portfolio Architecture & White Space Analysis',
    client: 'Confidential Consumer Goods Client',
    year: '2024',
    scope: '42-Slide Executive Strategy Deck • Quantitative Segmentation & Brand Architecture',
    confidentialityNote: 'Client NDA restricted. Available for verified recruiters and executive clients via passcode.'
  },
  {
    id: 'deck-outdoor-retention',
    title: 'DTC Retention & Community Ecosystem Advisory',
    client: 'Premium Outdoor & Active Lifestyle Brand',
    year: '2024',
    scope: '35-Slide Strategic Advisory Deck • Go-To-Market & Merchandising Roadmap',
    confidentialityNote: 'Client NDA restricted. Available for verified recruiters and executive clients via passcode.'
  }
];
