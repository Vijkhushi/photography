const fs = require('fs');

const code = fs.readFileSync('.next/server/app/page.js', 'utf8');

// Find all module keys: t.modules = { ... }
const modRegex = /(\d+):\s*\(?(t,e,i|[a-z,]+)\)?\s*=>/g;
let m;
const keys = [];
while ((m = modRegex.exec(code)) !== null) {
  keys.push({ id: m[1], pos: m.index });
}
console.log('Server modules found:', keys);

for (let j = 0; j < keys.length; j++) {
  const start = keys[j].pos;
  const end = j + 1 < keys.length ? keys[j + 1].pos : start + 5000;
  const snippet = code.slice(start, Math.min(start + 500, end));
  console.log(`\n--- Module ${keys[j].id} ---`);
  console.log(snippet);
}
