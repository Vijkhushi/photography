const fs = require('fs');

const code = fs.readFileSync('scripts/mod4321.js', 'utf8');

// Find all `c=h("Name", ...)` or `(0,s.createElement)` icon definitions
const regex = /([A-Za-z0-9_$]+)=h\("([^"]+)"/g;
let m;
const icons = [];
while ((m = regex.exec(code)) !== null) {
  icons.push({ varName: m[1], name: m[2] });
}
console.log('Icons found:', icons);
