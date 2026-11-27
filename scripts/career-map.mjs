// Draws src/assets/career-map.svg. Edit the lists below, then run: node scripts/career-map.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { geoAlbers, geoPath } from 'd3-geo';
import { feature, mesh } from 'topojson-client';

const us = JSON.parse(readFileSync('node_modules/us-atlas/states-10m.json'));
const states = feature(us, us.objects.states);
const borders = mesh(us, us.objects.states, (a, b) => a !== b);
const state = (name) => states.features.find((f) => f.properties.name === name);

const carbon = '#141414';
const concrete = '#A6A6A6';
const chalk = '#F4F4F4';
// One entry per state: [fill, point inside the state, place named under the point, abbreviation]
const visited = {
  Kentucky: ['#E4BD25', [-85.3, 37.5], '', 'KY'],
  Georgia: ['#B74438', [-83.4, 32.6], 'Fort Benning', 'GA'],
  Virginia: ['#B74438', [-78.6, 37.5], 'Fort Lee', 'VA'],
  Texas: ['#438CA9', [-99.0, 31.4], 'Austin', 'TX'],
  'New York': ['#141414', [-75.4, 42.9], 'New York City', 'NY'],
};
// Travel order, state to state
const route = ['Kentucky', 'Georgia', 'Virginia', 'Kentucky', 'Texas', 'New York'];

const W = 1100;
const H = 700;
const projection = geoAlbers().fitExtent(
  [[10, 10], [W - 10, H - 10]],
  { type: 'MultiPoint', coordinates: [[-106.8, 26], [-70.5, 26], [-106.8, 44.5], [-70.5, 44.5]] },
);
const path = geoPath(projection);
const at = (name) => projection(visited[name][1]);

const text = (x, y, anchor, label, size = 20) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="700" fill="${carbon}" stroke="${chalk}" stroke-width="5" paint-order="stroke" font-family="'Martian Mono Variable', monospace">${label}</text>`;
const dot = ([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${carbon}" stroke="#fff" stroke-width="3"/>`;

const trail = route
  .slice(1)
  .map((to, i) => {
    const a = at(route[i]);
    const b = at(to);
    const bend = i % 2 ? 0.16 : -0.16;
    const mid = [(a[0] + b[0]) / 2 - (b[1] - a[1]) * bend, (a[1] + b[1]) / 2 + (b[0] - a[0]) * bend];
    return `<path d="M${a}Q${mid} ${b}" fill="none" stroke="${carbon}" stroke-width="3.5" stroke-dasharray="2 9" stroke-linecap="round" vector-effect="non-scaling-stroke" pointer-events="none"/>`;
  })
  .join('');

const pins = Object.entries(visited)
  .map(([name, [, , place, code]]) => {
    const [x, y] = at(name);
    return `<g class="pin" data-state="${code}" data-x="${x}" data-y="${y}">${dot([x, y])}${place ? text(x, y + 34, 'middle', place, 19) : ''}</g>`;
  })
  .join('');

// The view each state zooms to, keeping the map's proportions.
const view = (name) => {
  const [[x0, y0], [x1, y1]] = path.bounds(state(name));
  const w = Math.max((x1 - x0) * 1.35, ((y1 - y0) * 1.35 * W) / H);
  const h = (w * H) / W;
  return [(x0 + x1) / 2 - w / 2, (y0 + y1) / 2 - h / 2, w, h].map((v) => v.toFixed(1)).join(' ');
};

const land =
  `<path d="${path(states)}" fill="#fff"/>` +
  `<path d="${path(borders)}" fill="none" stroke="${concrete}" vector-effect="non-scaling-stroke"/>` +
  Object.entries(visited)
    .map(([name, [fill, , place, code]]) =>
      `<path class="state" data-state="${code}" data-name="${name}" data-view="${view(name)}" tabindex="0" role="button" aria-pressed="false" aria-label="Show ${name} on the timeline" d="${path(state(name))}" fill="${fill}"/>`)
    .join('');

writeFileSync(
  'src/assets/career-map.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="group" aria-label="Map of where I have been: Kentucky; Fort Benning, Georgia; Fort Lee, Virginia; Austin, Texas; and New York City, New York">${land}${trail}${pins}</svg>\n`
    .replace(/(\d+\.\d{2})\d+/g, '$1'),
);
console.log('map written');
