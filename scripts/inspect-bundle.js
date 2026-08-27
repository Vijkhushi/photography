const fs = require('fs');

const pageJs = fs.readFileSync('.next/server/app/page.js', 'utf8');
console.log('pageJs snippet:', pageJs.slice(0, 1000));

const clientChunk = fs.readFileSync('.next/static/chunks/app/page-9b8c8e74d9155380.js', 'utf8');
console.log('clientChunk snippet:', clientChunk.slice(0, 1000));
