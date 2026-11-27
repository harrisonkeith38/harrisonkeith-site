// Draws public/brand/topography-contours.svg: true contour lines from a fixed height field.
// Re-run with: node scripts/topography.mjs
import { writeFileSync } from 'node:fs';

const W = 1600;
const H = 1200;
const STEP = 10;
// [x, y, radius, height]: positive values are hills, negative are hollows.
const peaks = [
  [1290, 230, 300, 1.0],
  [1520, 560, 220, 0.6],
  [980, 90, 200, 0.45],
  [240, 900, 340, 0.95],
  [520, 1130, 230, 0.55],
  [1180, 980, 300, 0.7],
  [160, 150, 260, 0.5],
  [760, 560, 320, -0.45],
];
const height = (x, y) => {
  // Bend the coordinates so the rings are irregular, like real terrain.
  const wx = x + 55 * Math.sin(y / 130) + 25 * Math.sin((x + y) / 71);
  const wy = y + 55 * Math.cos(x / 150) + 25 * Math.cos((x - y) / 83);
  return peaks.reduce((z, [px, py, r, h]) => z + h * Math.exp(-((wx - px) ** 2 + (wy - py) ** 2) / (r * r)), 0);
};

const cols = W / STEP;
const rows = H / STEP;
const grid = Array.from({ length: rows + 1 }, (_, j) =>
  Array.from({ length: cols + 1 }, (_, i) => height(i * STEP, j * STEP)),
);

const paths = [];
for (let level = -0.35; level <= 1.15; level += 0.085) {
  const points = new Map();
  const links = new Map();
  const edge = (i0, j0, i1, j1) => {
    const key = `${i0},${j0},${i1},${j1}`;
    if (!points.has(key)) {
      const t = (level - grid[j0][i0]) / (grid[j1][i1] - grid[j0][i0]);
      points.set(key, [(i0 + (i1 - i0) * t) * STEP, (j0 + (j1 - j0) * t) * STEP]);
    }
    return key;
  };
  const link = (a, b) => {
    for (const [p, q] of [[a, b], [b, a]]) links.set(p, [...(links.get(p) ?? []), q]);
  };
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const above = [grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i]].map((v) => v > level);
      const sides = [
        [above[0] !== above[1], () => edge(i, j, i + 1, j)],
        [above[1] !== above[2], () => edge(i + 1, j, i + 1, j + 1)],
        [above[3] !== above[2], () => edge(i, j + 1, i + 1, j + 1)],
        [above[0] !== above[3], () => edge(i, j, i, j + 1)],
      ];
      const hit = sides.filter(([crosses]) => crosses).map(([, make]) => make());
      for (let k = 0; k + 1 < hit.length; k += 2) link(hit[k], hit[k + 1]);
    }
  }
  // Chain segments into lines, starting from open ends first.
  const used = new Set();
  const starts = [...links.keys()].sort((a, b) => links.get(a).length - links.get(b).length);
  for (const start of starts) {
    if (used.has(start)) continue;
    const line = [start];
    used.add(start);
    let next = links.get(start).find((n) => !used.has(n));
    while (next) {
      line.push(next);
      used.add(next);
      next = links.get(next).find((n) => !used.has(n));
    }
    if (line.length < 4) continue;
    const closed = links.get(line.at(-1)).includes(start);
    const d = line.map((k) => points.get(k).map((v) => Math.round(v)).join(' ')).join('L');
    paths.push(`M${d}${closed ? 'Z' : ''}`);
  }
}

writeFileSync(
  'public/brand/topography-contours.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#141414" stroke-opacity="0.11" stroke-width="1.1" stroke-linejoin="round"><path d="${paths.join('')}"/></svg>\n`,
);
console.log(`${paths.length} contour lines`);
