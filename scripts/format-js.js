const fs = require('fs');

const raw = fs.readFileSync('.next/static/chunks/app/page-9b8c8e74d9155380.js', 'utf8');

// Basic formatter
let formatted = '';
let indent = 0;
let inString = false;
let stringChar = '';

for (let i = 0; i < raw.length; i++) {
  const c = raw[i];
  const prev = raw[i - 1];
  
  if (inString) {
    formatted += c;
    if (c === stringChar && prev !== '\\') {
      inString = false;
    }
    continue;
  }
  
  if (c === '"' || c === "'" || c === '`') {
    inString = true;
    stringChar = c;
    formatted += c;
    continue;
  }
  
  if (c === '{' || c === '[') {
    indent++;
    formatted += c + '\n' + '  '.repeat(indent);
  } else if (c === '}' || c === ']') {
    indent = Math.max(0, indent - 1);
    formatted += '\n' + '  '.repeat(indent) + c;
  } else if (c === ';') {
    formatted += c + '\n' + '  '.repeat(indent);
  } else {
    formatted += c;
  }
}

fs.writeFileSync('scripts/client-formatted.js', formatted);
console.log('Formatted client code written. Lines:', formatted.split('\n').length);
