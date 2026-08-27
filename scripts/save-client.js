const fs = require('fs');

const client = fs.readFileSync('.next/static/chunks/app/page-9b8c8e74d9155380.js', 'utf8');

// Let's print the entire client bundle to a formatted file or examine sections
// In client chunk, module 9957 is the whole page
console.log('client file size:', client.length);

fs.writeFileSync('scripts/client-beautified.js', client);
