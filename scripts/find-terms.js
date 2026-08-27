const fs = require('fs');

const code = fs.readFileSync('scripts/mod4321.js', 'utf8');

// Find variable names and component names or strings
const searchTerms = [
  'useFramePreloader',
  'CameraHero',
  'CameraCanvas',
  'Navbar',
  'HeroText',
  'ArtOfTheFrame',
  'AtmosphericLights',
  'ExplodedHotspots',
  'FeatureSection',
  'FinalCTA',
  'Particles',
  'Preloader',
  'SmoothScroll',
  'TechSpecsModal',
  'cameraData',
  'audio'
];

for (const term of searchTerms) {
  let idx = 0;
  const indices = [];
  while ((idx = code.indexOf(term, idx)) !== -1) {
    indices.push(idx);
    idx += term.length;
  }
  console.log(`${term}: found ${indices.length} times`);
}
