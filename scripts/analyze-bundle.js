const fs = require('fs');

const code = fs.readFileSync('.next/static/chunks/app/page-9b8c8e74d9155380.js', 'utf8');

// The bundle has (self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9127:..., 9957:...}])
// Let's extract module 9957
console.log('Module 9957 starts around index:', code.indexOf('9957:function'));
