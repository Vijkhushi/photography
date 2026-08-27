const fs = require('fs');

const code = fs.readFileSync('.next/server/app/page.js', 'utf8');

// Module 4321 starts at pos 1830 and ends before 2029 (pos 275596)
const mod4321 = code.slice(1830, 275596);
fs.writeFileSync('scripts/mod4321.js', mod4321);
console.log('Saved mod4321.js, size:', mod4321.length);
