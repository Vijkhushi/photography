const fs = require('fs');

const clientCode = fs.readFileSync('.next/static/chunks/app/page-9b8c8e74d9155380.js', 'utf8');

// Let's write clientCode formatted or formatted parts
fs.writeFileSync('scripts/formatted-client.js', clientCode);
console.log('Saved client code');
