const fs = require('fs');

const code = fs.readFileSync('scripts/mod4321.js', 'utf8');

// Find all string literals longer than 15 chars
const strRegex = /"([^"\\]{15,})"/g;
let m;
const strings = new Set();
while ((m = strRegex.exec(code)) !== null) {
  strings.add(m[1]);
}

console.log('Sample strings found:', Array.from(strings).slice(0, 50));
