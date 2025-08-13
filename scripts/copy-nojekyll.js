const fs = require('fs');
const path = require('path');

// Ensure the out directory exists
const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Create .nojekyll file in the out directory
const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

// Ensure 404.html exists in output
const sourceHtmlFile = path.join(process.cwd(), 'public', '404.html');
const destHtmlFile = path.join(outDir, '404.html');
if (fs.existsSync(sourceHtmlFile)) {
  fs.copyFileSync(sourceHtmlFile, destHtmlFile);
  console.log('Copied 404.html to the out directory');
}

console.log('Created .nojekyll file in the out directory'); 