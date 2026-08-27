const fs = require('fs');
const path = require('path');

const packFiles = [
  '.next/cache/webpack/client-production/0.pack',
  '.next/cache/webpack/client-production/1.pack',
  '.next/cache/webpack/client-production/2.pack',
  '.next/cache/webpack/client-production/index.pack',
  '.next/cache/webpack/server-production/0.pack',
  '.next/cache/webpack/server-production/1.pack',
  '.next/cache/webpack/server-production/2.pack',
  '.next/cache/webpack/server-production/index.pack'
];

for (const pf of packFiles) {
  if (!fs.existsSync(pf)) continue;
  const buf = fs.readFileSync(pf);
  const str = buf.toString('utf8');
  console.log(`Checking ${pf}... contains "useFramePreloader"?`, str.includes('useFramePreloader'), 'contains "CameraHero"?', str.includes('CameraHero'));
}
