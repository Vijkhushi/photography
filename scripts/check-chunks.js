const fs = require('fs');

const s1 = fs.readFileSync('.next/static/chunks/app/page-9b8c8e74d9155380.js', 'utf8');
console.log('page chunk length:', s1.length);

// Also look at all files in .next/static/chunks
const chunkFiles = fs.readdirSync('.next/static/chunks').filter(f => f.endsWith('.js'));
for (const cf of chunkFiles) {
  const content = fs.readFileSync('.next/static/chunks/' + cf, 'utf8');
  console.log(`Chunk ${cf}: ${content.length} bytes`);
}

// Let's also check .next/server/app/page.js
const serverPage = fs.readFileSync('.next/server/app/page.js', 'utf8');
console.log('serverPage length:', serverPage.length);
