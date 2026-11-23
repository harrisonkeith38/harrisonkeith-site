export interface Artifact {
  id: string;
  title: string;
  category: 'footwear' | 'identity' | 'typography' | 'spaces' | 'objects' | 'endurance';
  categoryLabel: string;
  image: string;
  source: string;
  note: string;
  year?: string;
  featured?: boolean;
}

export const artifacts: Artifact[] = [
  {
    id: 'salomon-xt6',
    title: 'Salomon XT-6',
    category: 'footwear',
    categoryLabel: 'Footwear & Performance',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    source: 'Salomon Advanced Lab',
    note: 'The benchmark for functional trail engineering crossing seamlessly into contemporary fashion. Form follows friction.',
    year: '2013',
    featured: true
  },
  {
    id: 'dieter-rams-principles',
    title: 'Dieter Rams: Ten Principles for Good Design',
    category: 'objects',
    categoryLabel: 'Industrial Design',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    source: 'Braun / Vitsoe Archive',
    note: '"Weniger, aber besser" (Less, but better). The ultimate filter for both physical product design and strategic brand positioning.',
    year: '1976',
    featured: true
  },
  {
    id: 'bandit-running-identity',
    title: 'Bandit Running Editorial Campaign',
    category: 'identity',
    categoryLabel: 'Logos & Identity',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
    source: 'Bandit Running / Brooklyn, NY',
    note: 'Subverting corporate athletic apparel through authentic urban subculture, unpolished editorial photography, and community momentum.',
    year: '2023',
    featured: true
  },
  {
    id: 'akzidenz-grotesk',
    title: 'Akzidenz-Grotesk & Swiss Grid Architecture',
    category: 'typography',
    categoryLabel: 'Typography & Print',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    source: 'Berthold Type Foundry (1896)',
    note: 'Structural discipline that lets ideas communicate without decorative noise. The backbone of enduring visual clarity.',
    year: '1896',
    featured: false
  },
  {
    id: 'texas-hill-country',
    title: 'Texas Hill Country Limestone & Trail Topography',
    category: 'spaces',
    categoryLabel: 'Spaces & Architecture',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    source: 'Austin, Texas',
    note: 'Sun-bleached limestone, cedar, and brutal humidity. The terrain where endurance, discipline, and headspace are built.',
    year: 'Perennial',
    featured: true
  },
  {
    id: 'specialized-sworks',
    title: 'Specialized S-Works Tarmac Geometry',
    category: 'endurance',
    categoryLabel: 'Endurance & Engineering',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    source: 'Specialized Bicycle Components',
    note: 'Zero wasted watts. Every tube profile, carbon layup, and angle exists solely to balance aerodynamic velocity with ruthless structural stiffness.',
    year: '2024',
    featured: true
  },
  {
    id: 'yeti-tundra-cooler',
    title: 'YETI Tundra 45 in Desert Tan',
    category: 'objects',
    categoryLabel: 'Industrial Design',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    source: 'YETI Coolers / Austin, TX',
    note: 'Rotomolded over-engineering elevated into a modern badge of durability and authentic outdoor credibility.',
    year: '2006',
    featured: false
  },
  {
    id: 'nike-mars-yard',
    title: 'Nike Craft Mars Yard (Tom Sachs)',
    category: 'footwear',
    categoryLabel: 'Footwear & Performance',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    source: 'Tom Sachs x NikeCraft',
    note: 'Treating wear, dirt, and honest abrasion as trophies of use rather than flaws. Design built for the workshop, not the pedestal.',
    year: '2017',
    featured: false
  },
  {
    id: 'national-park-maps',
    title: 'USGS Topographic Field Survey Cartography',
    category: 'typography',
    categoryLabel: 'Typography & Print',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
    source: 'U.S. Geological Survey',
    note: 'Information density executed with total hierarchy. Contour lines and elevation markers that make raw data deeply poetic.',
    year: '1954',
    featured: false
  },
  {
    id: 'marfa-judd-spaces',
    title: 'Chinati Foundation & Donald Judd Concrete Works',
    category: 'spaces',
    categoryLabel: 'Spaces & Architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    source: 'Marfa, Texas',
    note: 'Scale, natural light, and raw industrial materials placed in absolute harmony with the West Texas desert horizon.',
    year: '1986',
    featured: false
  },
  {
    id: 'tracksmith-storytelling',
    title: 'Tracksmith Meter Magazine & Heritage Identity',
    category: 'identity',
    categoryLabel: 'Logos & Identity',
    image: 'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?auto=format&fit=crop&w=800&q=80',
    source: 'Tracksmith / Boston, MA',
    note: 'Proof that heritage, collegiate running romance, and craft journalism can build a fiercely loyal DTC movement without discounting.',
    year: '2014',
    featured: false
  },
  {
    id: 'vintage-mechanical-chrono',
    title: 'Field Chronograph & Tool Watches',
    category: 'objects',
    categoryLabel: 'Industrial Design',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    source: 'Military Specification & Horology',
    note: 'Legibility at a glance under harsh lighting. The ultimate marriage of mechanical precision, tactile bezel action, and purpose-built utility.',
    year: '1968',
    featured: false
  }
];
