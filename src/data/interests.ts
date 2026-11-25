export interface Artifact {
  id: string;
  title: string;
  category: 'footwear' | 'identity' | 'architecture' | 'endurance' | 'design';
  categoryLabel: string;
  image: string;
  source: string;
  note: string;
  year?: string;
}

export interface ObsessionItem {
  category: 'Reading' | 'Listening' | 'Gear in Test' | 'Object';
  title: string;
  authorOrBrand: string;
  oneLiner: string;
}

export interface EnduranceBenchmark {
  discipline: string;
  focus: string;
  terrain: string;
  notes: string;
}

export const artifacts: Artifact[] = [
  {
    id: 'salomon-xt6',
    title: 'Salomon XT-6',
    category: 'footwear',
    categoryLabel: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    source: 'Salomon Advanced Lab',
    note: 'The benchmark for functional trail engineering crossing seamlessly into contemporary fashion. Form follows friction.',
    year: '2013'
  },
  {
    id: 'dieter-rams-principles',
    title: 'Dieter Rams: Ten Principles for Good Design',
    category: 'design',
    categoryLabel: 'Design',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    source: 'Braun / Vitsoe Archive',
    note: '"Weniger, aber besser" (Less, but better). The ultimate benchmark for both industrial design and strategic messaging.',
    year: '1976'
  },
  {
    id: 'bandit-running-identity',
    title: 'Bandit Running Spring Campaign',
    category: 'identity',
    categoryLabel: 'Logos & Identity',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
    source: 'Bandit Running / Brooklyn, NY',
    note: 'Subverting corporate athletic apparel through authentic urban subculture, unpolished editorial photography, and community momentum.',
    year: '2023'
  },
  {
    id: 'texas-hill-country',
    title: 'Texas Hill Country Limestone Trails',
    category: 'architecture',
    categoryLabel: 'Architecture & Spaces',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    source: 'Barton Creek Greenbelt / Austin, TX',
    note: 'Sun-bleached limestone, cedar roots, and humidity. The terrain where endurance, discipline, and headspace are built.',
    year: 'Perennial'
  },
  {
    id: 'specialized-sworks',
    title: 'Specialized S-Works Tarmac SL8',
    category: 'endurance',
    categoryLabel: 'Endurance',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    source: 'Specialized Bicycle Components',
    note: 'Zero wasted watts. Every tube profile, carbon layup, and angle exists solely to balance aerodynamic velocity with ruthless structural stiffness.',
    year: '2024'
  },
  {
    id: 'yeti-tundra-cooler',
    title: 'YETI Tundra 45 in Desert Tan',
    category: 'design',
    categoryLabel: 'Design',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    source: 'YETI Coolers / Austin, TX',
    note: 'Rotomolded over-engineering elevated into a modern badge of durability and authentic outdoor credibility.',
    year: '2006'
  },
  {
    id: 'nike-mars-yard',
    title: 'NikeCraft Mars Yard 2.0 (Tom Sachs)',
    category: 'footwear',
    categoryLabel: 'Footwear',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    source: 'Tom Sachs x NikeCraft',
    note: 'Treating wear, dirt, and honest abrasion as trophies of use rather than flaws. Design built for the workshop, not the pedestal.',
    year: '2017'
  },
  {
    id: 'tracksmith-storytelling',
    title: 'Tracksmith Meter Magazine & Heritage Identity',
    category: 'identity',
    categoryLabel: 'Logos & Identity',
    image: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&w=800&q=80',
    source: 'Tracksmith / Boston, MA',
    note: 'Proof that heritage, collegiate running romance, and craft journalism can build a fiercely loyal DTC movement without discounting.',
    year: '2014'
  },
  {
    id: 'marfa-judd-spaces',
    title: 'Chinati Foundation & Donald Judd Concrete Works',
    category: 'architecture',
    categoryLabel: 'Architecture & Spaces',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    source: 'Marfa, Texas',
    note: 'Scale, natural light, and raw industrial materials placed in absolute harmony with the West Texas desert horizon.',
    year: '1986'
  }
];

export const currentlyObsessed: ObsessionItem[] = [
  {
    category: 'Reading',
    title: 'Shoe Dog: A Memoir by the Creator of Nike',
    authorOrBrand: 'Phil Knight',
    oneLiner: 'The raw, unfiltered reality of building a category-defining brand through near-bankruptcy and sheer grit.'
  },
  {
    category: 'Listening',
    title: 'Acquired Podcast: Hermès & Nike Deep Dives',
    authorOrBrand: 'Ben Gilbert & David Rosenthal',
    oneLiner: 'Uncompromising examinations of luxury brand equity, operational discipline, and generational moats.'
  },
  {
    category: 'Gear in Test',
    title: 'Satisfy Running Postural Technical Silk',
    authorOrBrand: 'Satisfy Running / Paris',
    oneLiner: 'Pushing fabric engineering and anti-corporate punk aesthetic into ultra-distance running apparel.'
  },
  {
    category: 'Object',
    title: 'Leica M11 Monochrom Rangefinder',
    authorOrBrand: 'Leica Camera / Wetzlar, Germany',
    oneLiner: 'Eliminating the color sensor forces total discipline in light, shadow, texture, and structural geometry.'
  }
];

export const enduranceProfile: EnduranceBenchmark[] = [
  {
    discipline: 'Trail & Ultra Running',
    focus: 'Distance & Vertical Gain',
    terrain: 'Texas Hill Country Limestone, Greenbelt Trails',
    notes: 'Endurance isn’t just cardiovascular; it is the discipline of maintaining calm and focus when fatigue sets in.'
  },
  {
    discipline: 'Road & Gravel Cycling',
    focus: 'Power Sustained & Aerodynamic Efficiency',
    terrain: 'Central Texas Farm-to-Market Routes & Hill Climbing',
    notes: 'Testing equipment limits and experiencing geography at human-powered velocity.'
  }
];
