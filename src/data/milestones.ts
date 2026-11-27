// Draft timeline content, newest first. "need" lists what is still missing for each entry.
export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  mark: string;
  details: string[];
  need: string[];
}

export const milestones: Milestone[] = [
  { year: '2027', title: 'Texas McCombs', subtitle: 'MBA Graduation', location: 'Austin, TX', description: 'Management Science and Quantitative Methods (STEM)\nFocus in Brand Management and Strategy\nExpected May 2027', mark: 'ut-longhorn', details: [], need: ['Confirm concentration name'] },
  { year: '2026', title: 'YETI', subtitle: 'Brand Strategy Practicum', location: 'Austin, TX', description: 'Advised product leadership on growth in the Home & Hydration business.', mark: 'yeti', details: ['YETI Brand Strategy Practicum, Texas McCombs Marketing Fellows (Fall 2026)'], need: ['Your role on the team'] },
  { year: '2026', title: 'Suntory Global Spirits', subtitle: 'Global Brand Manager Intern, Jim Beam', location: 'New York, NY', description: 'Built a global responsible-consumption sponsorship strategy and activation roadmap presented to senior leadership.', mark: 'jim-beam', details: ['Partnered across brand, analytics, innovation and global market teams on sponsorship recommendations'], need: [] },
  { year: '2025', title: 'Marketing Fellows', subtitle: 'Marketing Fellow', location: 'Austin, TX', description: 'Joined the Texas McCombs Marketing Fellows program.', mark: 'marketing-fellows', details: [], need: ['What you did in the program'] },
  { year: '2025', title: 'Texas McCombs', subtitle: 'MBA Candidate', location: 'Austin, TX', description: 'Left the Army and started an MBA.', mark: 'ut-longhorn', details: ['Graduate Consulting Group', 'VP of Communications, Texas Veterans in Business'], need: [] },
  { year: '2024', title: '101st Airborne Division', subtitle: 'Company Commander, Operations & Personnel Readiness', location: 'Fort Campbell, KY', description: '2024 – 2025', mark: '101st-airborne', details: [], need: [] },
  { year: '2022', title: '101st Airborne Division', subtitle: 'Logistics Platoon Leader', location: 'Fort Campbell, KY', description: '2022 – 2024', mark: '101st-airborne', details: [], need: [] },
  { year: '2021', title: 'Officer Candidate School', subtitle: 'Earned Commission as a Logistics Officer', location: 'Fort Benning, GA', description: 'Commissioned into the U.S. Army Transportation Corps.', mark: 'ocs', details: [], need: ['What OCS was like'] },
  { year: '2021', title: 'University of Kentucky', subtitle: 'BBA, Business Management\nBBA, Marketing', location: 'Lexington, KY', description: 'Graduated from the Gatton College of Business and Economics.', mark: 'uk', details: [], need: ['Honors or activities'] },
  { year: '2020', title: 'Greek Sing', subtitle: 'Overall Chair', location: 'Lexington, KY', description: 'Chaired Greek Sing, benefiting Make-A-Wish.', mark: 'uk-ifc', details: [], need: ['Amount raised'] },
  { year: '2020', title: 'Big Ass Fans', subtitle: 'Procurement Intern', location: 'Lexington, KY', description: 'Worked as a buyer on the supply chain team.', mark: 'big-ass-fans', details: [], need: ['One accomplishment'] },
  { year: '2019', title: 'Interfraternity Council', subtitle: 'President', location: 'Lexington, KY', description: 'Led the council and founded the UK IFC Endowment Fund.', mark: 'uk-ifc', details: ['Elected president of UK IFC', 'Founded the UK IFC Endowment Fund'], need: ['Amount raised or members led', 'Photo'] },
  { year: '2018', title: 'Interfraternity Council', subtitle: 'VP of Finance', location: 'Lexington, KY', description: 'Served as vice president of finance.', mark: 'uk-ifc', details: [], need: ['What you managed'] },
  { year: '2017', title: 'University of Kentucky', subtitle: 'Undergraduate Studies', location: 'Lexington, KY', description: 'Started at the Gatton College of Business and Economics.', mark: 'uk', details: [], need: [] },
  { year: '2017', title: 'Woodford County High School', subtitle: 'High School Graduation', location: 'Versailles, KY', description: 'Graduated from high school in Versailles.', mark: 'woodford-yellowjacket', details: ['Varsity baseball, golf and cross country', 'School news', 'DECA'], need: ['Photo'] },
];

// Ironman races, taken off the timeline to be shown somewhere else later. Not rendered.
export const races: Milestone[] = [
  { year: '2026', title: '70.3 Dallas Little Elm', subtitle: 'Half-Distance Finisher', location: 'Dallas, TX', description: 'Completed a 70.3-mile triathlon.', mark: 'im-dallas', details: [], need: ['Race photo'] },
  { year: '2026', title: 'Ironman Texas', subtitle: '140.6 Finisher', location: 'The Woodlands, TX', description: 'Completed a full-distance triathlon and became an Ironman.', mark: 'im-texas', details: ['2.4-mile swim, 112-mile bike, 26.2-mile run'], need: ['Race photo', 'Finish time (optional)'] },
  { year: '2025', title: '70.3 Eagleman', subtitle: 'Half-Distance Finisher', location: 'Cambridge, MD', description: 'Completed a 70.3-mile triathlon.', mark: 'im-eagleman', details: [], need: ['Race photo'] },
  { year: '2025', title: '70.3 Chattanooga', subtitle: 'Half-Distance Finisher', location: 'Chattanooga, TN', description: 'Completed a 70.3-mile triathlon.', mark: 'im-chattanooga', details: [], need: ['Race photo'] },
  { year: '2024', title: '70.3 Louisville', subtitle: 'Half-Distance Finisher', location: 'Louisville, KY', description: 'Completed a 70.3-mile triathlon.', mark: 'im-louisville', details: [], need: ['Race photo'] },
];

export const years = [...new Set(milestones.map((m) => m.year))];
export const yearLabel = (y: string) => (y === 'TBD' ? 'Year TBD' : y);
