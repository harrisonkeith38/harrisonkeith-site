export interface Milestone {
  year: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  category: 'strategy' | 'education' | 'military';
  summary: string;
  responsibilities: string[];
  capabilitiesUnlocked: string[];
}

export const timeline: Milestone[] = [
  {
    year: '2024–Present',
    period: '2024 – PRESENT',
    role: 'Brand Strategist & Strategic Advisor',
    organization: 'Brand Advisory & Consumer Insights',
    location: 'Austin, TX',
    category: 'strategy',
    summary: 'Advising consumer brands, outdoor lifestyle businesses, and high-growth ventures on brand positioning, consumer insights, and go-to-market architecture. Bridging quantitative business rigor with cultural discernment.',
    responsibilities: [
      'Framing brand positioning architectures and occasion-based consumer segmentations.',
      'Translating ethnographic customer insights into actionable marketing and product roadmaps.',
      'Partnering with executive teams to pressure-test creative strategy against commercial realities.'
    ],
    capabilitiesUnlocked: [
      'Brand Architecture',
      'Consumer Research',
      'Go-To-Market Execution',
      'Cultural Relevance'
    ]
  },
  {
    year: '2022–2024',
    period: '2022 – 2024',
    role: 'Master of Business Administration (MBA)',
    organization: 'The University of Texas at Austin — McCombs School of Business',
    location: 'Austin, TX',
    category: 'education',
    summary: 'Concentrated in Brand Management, Marketing Strategy, and Consumer Insights. Immersed in brand equity analysis, consumer psychology, corporate strategy, and venture creation.',
    responsibilities: [
      'Led strategic consulting initiatives for iconic brands including Jim Beam and YETI-focused academic research.',
      'Synthesized complex market datasets into intuitive strategic narratives and executive presentations.',
      'Active leader within the veteran community and graduate marketing associations.'
    ],
    capabilitiesUnlocked: [
      'Financial & Market Analysis',
      'Brand Equity Evaluation',
      'Strategic Negotiation',
      'Cross-Functional Synthesis'
    ]
  },
  {
    year: '2017–2022',
    period: '2017 – 2022',
    role: 'Commissioned Officer',
    organization: 'United States Army',
    location: 'Various Operational Commands',
    category: 'military',
    summary: 'Led diverse teams through complex, high-stakes operational environments. Responsible for multi-million-dollar equipment allocations, logistical architecture, operational planning, and the tactical leadership and welfare of soldiers.',
    responsibilities: [
      'Exercised Mission Command: articulated intent, empowered decentralized execution, and made rapid decisions under pressure.',
      'Designed and executed complex multi-echelon logistical operations, training programs, and readiness evaluations.',
      'Built high-trust, mission-first cultures within cross-functional teams under adverse conditions.'
    ],
    capabilitiesUnlocked: [
      'Crisis Leadership',
      'High Agency & Decision Velocity',
      'Logistical Operations',
      'People & Team Development'
    ]
  }
];
