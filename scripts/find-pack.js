const fs = require('fs');
const path = require('path');

function searchPackFiles() {
  const webpackDir = '.next/cache/webpack';
  if (!fs.existsSync(webpackDir)) {
    console.log('No webpack cache dir');
    return;
  }
  
  function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) scan(full);
      else if (ent.name.endsWith('.pack')) {
        console.log('Found pack file:', full, 'size:', fs.statSync(full).size);
      }
    }
  }
  scan(webpackDir);
}

searchPackFiles();
