const fs = require('fs');

const code = fs.readFileSync('scripts/mod4321.js', 'utf8');

// Search for `lucide-` in mod4321
const regex = /lucide-([a-z0-9-]+)/g;
let m;
const icons = new Set();
while ((m = regex.exec(code)) !== null) {
  icons.add(m[1]);
}
console.log('Lucide icons used:', Array.from(icons));
