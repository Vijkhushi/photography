const fs = require('fs');

const packFiles = [
  '.next/cache/webpack/client-production/0.pack',
  '.next/cache/webpack/client-production/1.pack',
  '.next/cache/webpack/client-production/2.pack',
  '.next/cache/webpack/server-production/0.pack',
  '.next/cache/webpack/server-production/1.pack',
  '.next/cache/webpack/server-production/2.pack',
];

for (const pf of packFiles) {
  if (!fs.existsSync(pf)) continue;
  const buf = fs.readFileSync(pf);
  
  // Find occurrences of "CameraHero"
  let pos = 0;
  const needle = Buffer.from('export default function CameraHero');
  const needle2 = Buffer.from('function CameraHero');
  
  while ((pos = buf.indexOf(needle, pos)) !== -1) {
    console.log(`Found 'export default function CameraHero' in ${pf} at ${pos}`);
    console.log(buf.subarray(pos - 100, pos + 1000).toString('utf8'));
    pos += needle.length;
  }
  
  pos = 0;
  while ((pos = buf.indexOf(needle2, pos)) !== -1) {
    console.log(`Found 'function CameraHero' in ${pf} at ${pos}`);
    console.log(buf.subarray(pos - 50, pos + 500).toString('utf8'));
    pos += needle2.length;
  }
}
