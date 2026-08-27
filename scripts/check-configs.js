const fs = require('fs');

const packBuf = fs.readFileSync('.next/cache/webpack/server-production/0.pack');
const str = packBuf.toString('utf8');

// Find occurrences of next.config or tailwind
console.log('tailwind in server 0.pack:', str.indexOf('tailwind'));
console.log('next.config in server 0.pack:', str.indexOf('next.config'));
