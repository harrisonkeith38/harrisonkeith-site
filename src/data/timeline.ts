export interface DetailedMilestone {
  period: string;
  role: string;
  organization: string;
  location: string;
  category: 'strategy' | 'education' | 'military';
  summary: string;
  bullets: string[];
}

export interface Credential {
  institution: string;
  degreeOrCert: string;
  year: string;
  location: string;
  details?: string;
}

export const detailedTimeline: DetailedMilestone[] = [
  {
    period: '2024 — PRESENT',
    role: 'Brand Strategist & Strategic Advisor',
    organization: 'Brand Strategy & Consumer Advisory',
    location: 'Austin, TX',
    category: 'strategy',
    summary: 'Advising consumer and active lifestyle brands on brand positioning, consumer insights, and portfolio architecture.',
    bullets: [
      'Engineered occasion-based demand models and consumer segmentation frameworks for high-growth and heritage consumer brands.',
      'Conducted qualitative ethnographic research and quantitative market analysis to identify unserved white space in consumer packaged goods and outdoor lifestyle categories.',
      'Partnered directly with executive leadership teams to align commercial go-to-market strategies with brand equity and product pipelines.'
    ]
  },
  {
    period: '2022 — 2024',
    role: 'Master of Business Administration (MBA)',
    organization: 'The University of Texas at Austin — McCombs School of Business',
    location: 'Austin, TX',
    category: 'education',
    summary: 'Focused on Brand Management, Consumer Insights, and Marketing Strategy.',
    bullets: [
      'Led strategic consulting engagements for premier brands, including global positioning strategy for Jim Beam and category elasticity research for YETI.',
      'Synthesized market research, financial modeling, and consumer psychology into executive-level strategic deliverables and brand playbooks.',
      'Active leadership in the McCombs Veteran Association and Graduate Marketing Network.'
    ]
  },
  {
    period: '2017 — 2022',
    role: 'Commissioned Officer',
    organization: 'United States Army',
    location: 'Various Operational Commands',
    category: 'military',
    summary: 'Led cross-functional operational teams, logistical architecture, and decentralized mission execution.',
    bullets: [
      'Exercised Mission Command: translated senior strategic directives into clear operational intent, empowering decentralized execution across multi-functional units.',
      'Accountable for the welfare, tactical readiness, and professional development of dozens of service members across demanding operational environments.',
      'Managed multi-million-dollar equipment allocations, complex supply-chain logistics, and risk mitigation protocols with zero tolerance for failure.'
    ]
  }
];

export const credentials: Credential[] = [
  {
    institution: 'The University of Texas at Austin — McCombs School of Business',
    degreeOrCert: 'Master of Business Administration (MBA)',
    year: '2024',
    location: 'Austin, TX',
    details: 'Concentration in Brand Management & Marketing Strategy'
  },
  {
    institution: 'Undergraduate University',
    degreeOrCert: 'Bachelor of Science (B.S.)',
    year: '2017',
    location: 'United States',
    details: 'Commissioned as U.S. Army Officer upon graduation'
  },
  {
    institution: 'United States Army',
    degreeOrCert: 'Officer Leadership & Operations Certifications',
    year: '2017–2022',
    location: 'Fort Moore & Operational Commands',
    details: 'Advanced Operational Planning, Cross-Functional Logistics, Mission Command'
  }
];
