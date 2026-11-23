export interface Project {
  id: string;
  title: string;
  clientCategory: string;
  tagline: string;
  period: string;
  role: string;
  tags: string[];
  challenge: string;
  insight: string;
  strategy: string;
  execution: string;
  impact: string;
  reflection: string;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'global-spirits-strategy',
    title: 'Heritage Spirits Brand Repositioning',
    clientCategory: 'Global Consumer Brand (Jim Beam)',
    tagline: 'Bridging 200+ years of American heritage with contemporary consumer culture without diluting brand equity.',
    period: '2023 – 2024',
    role: 'Brand Strategist & Consumer Insights Lead',
    tags: ['Brand Strategy', 'Consumer Insights', 'Market Architecture'],
    challenge: 'Legacy bourbon brands face a generational transition: younger legal-drinking-age consumers prioritize versatility, cultural relevance, and premium craftsmanship over traditional masculine heritage tropes.',
    insight: 'Heritage is only valuable when it feels living, not archival. Modern consumers do not buy bourbon for the nostalgia of dusty barrels; they buy it for authentic conviviality, craftsmanship, and unpretentious confidence.',
    strategy: 'Shifted the strategic narrative from historical preservation to active hospitality. Designed an occasion-based portfolio framework that mapped premiumization tiers to emerging social rituals.',
    execution: 'Developed a comprehensive strategic deck defining 3 core consumer archetypes, optimized message hierarchy across experiential activations, and established brand guardrails for cultural collaborations.',
    impact: 'Established an actionable strategic foundation for subsequent global marketing cycles, harmonizing regional activations while protecting core brand equity.',
    reflection: 'The hardest part of legacy brand strategy is knowing what not to change. Respect the roots, but prune the obsolete conventions.',
    metrics: [
      { label: 'Strategic Focus', value: 'Occasion-Driven' },
      { label: 'Consumer Core', value: '25–34 LDA' },
      { label: 'Deliverable', value: 'Brand Architecture' }
    ]
  },
  {
    id: 'outdoor-brand-equity',
    title: 'Outdoor Lifestyle Brand Retention & Ecosystem',
    clientCategory: 'Premium Consumer Products (YETI Academic Advisory)',
    tagline: 'Analyzing brand elasticity, cult loyalty, and community retention dynamics for category-defining durable goods.',
    period: '2023',
    role: 'Lead Strategic Consultant (McCombs MBA)',
    tags: ['Consumer Insights', 'Brand Elasticity', 'Go-To-Market'],
    challenge: 'How does an ultra-premium outdoor brand expand from core utilitarian dominance (coolers) into everyday lifestyle categories (drinkware, bags, apparel) without alienating its rugged core community?',
    insight: 'Brand elasticity is earned through emotional authenticity, not SKU proliferation. When consumers trust a brand with their most extreme backcountry expeditions, that trust converts into everyday pride of ownership.',
    strategy: 'Synthesized quantitative customer segmentation with ethnographic field interviews. Mapped the lifecycle journey from utilitarian tool to cultural badge and identified high-leverage friction points in customer retention.',
    execution: 'Delivered an executive-ready strategic advisory report and presentation analyzing product adjacency criteria, community storytelling channels, and direct-to-consumer ecosystem synergies.',
    impact: 'Delivered high-value strategic frameworks adopted into academic case curriculum and presented to brand strategy stakeholders.',
    reflection: 'True brand loyalty lives in the tension between technical utility and cultural belonging.',
    metrics: [
      { label: 'Methodology', value: 'Mixed-Method' },
      { label: 'Scope', value: 'Category Expansion' },
      { label: 'Setting', value: 'Austin, TX' }
    ]
  },
  {
    id: 'mission-command-operations',
    title: 'High-Stakes Operational Execution & Logistics',
    clientCategory: 'Defense & Operational Command (U.S. Army)',
    tagline: 'Leading cross-functional teams, multi-echelon resource logistics, and decentralized decision-making under uncertainty.',
    period: '2017 – 2022',
    role: 'Army Officer / Operations Lead',
    tags: ['Operational Leadership', 'Crisis Management', 'Systems Design'],
    challenge: 'Executing complex, multi-variable operations involving millions of dollars in equipment, personnel welfare, and time-critical missions where communication channels can degrade and error margins are zero.',
    insight: 'Centralized control guarantees failure in dynamic environments. Clarity of intent ("commander’s intent") empowers front-line leaders to adapt instantaneously without waiting for permission.',
    strategy: 'Instituted disciplined operational rhythms, rigorous contingency planning (PACE planning), and flattened communication channels across diverse functional teams.',
    execution: 'Orchestrated large-scale movements, supply chain continuity, and mission rehearsals. Mentored and developed junior leaders, maintaining 100% accountability across all mission-critical resources.',
    impact: 'Consistently earned top evaluations for mission readiness, unit morale, and logistical precision in high-pressure operational environments.',
    reflection: 'True leadership is not charismatic authority; it is the deliberate removal of obstacles so your people can perform at their highest level.',
    metrics: [
      { label: 'Leadership', value: 'Cross-Functional' },
      { label: 'Decision Model', value: 'Mission Command' },
      { label: 'Focus', value: 'High Agency' }
    ]
  },
  {
    id: 'endurance-community-culture',
    title: 'Endurance Culture & Community Brand Activation',
    clientCategory: 'Performance Culture & Athletic Communities',
    tagline: 'Connecting grassroots endurance athletics with modern editorial storytelling and community momentum.',
    period: '2024 – Present',
    role: 'Independent Brand Advisor',
    tags: ['Community Growth', 'Culture & Taste', 'Experiential'],
    challenge: 'Traditional running and cycling brands often rely on clinical performance metrics, alienating runners and cyclists who view the sport as an artistic, communal, and mental discipline.',
    insight: 'Modern endurance athletes run toward community and identity, not just PRs. The convergence of running clubs, specialty coffee, design-forward apparel, and documentary media is redefining the category.',
    strategy: 'Developed community activation blueprints centering grassroots storytelling, micro-events, and curated merchandise capsules over standard corporate sponsorships.',
    execution: 'Framed narrative architectures for independent community events, bridging local athletes with forward-thinking consumer brands.',
    impact: 'Demonstrated how cultural credibility drives brand affinity far more sustainably than top-of-funnel paid advertising.',
    reflection: 'Culture cannot be bought through ad spend; it can only be earned through authentic participation.',
    metrics: [
      { label: 'Focus', value: 'Endurance Athletics' },
      { label: 'Approach', value: 'Grassroots First' },
      { label: 'Channel', value: 'Community & Media' }
    ]
  }
];
