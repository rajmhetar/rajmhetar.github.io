const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Ensure there's a .nojekyll file in the out directory
const outDir = path.resolve('./out');
const nojekyllPath = path.join(outDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file');
}

// Ensure CSS file is copied to the root directory
console.log('Copying CSS file to root...');
const globalsCssSource = path.join('app', 'globals.css');
const globalsCssDest = path.join(outDir, 'globals.css');
fs.copyFileSync(globalsCssSource, globalsCssDest);

// Create a temporary directory for the deployment
const tempDir = path.resolve('./temp-deploy');
if (fs.existsSync(tempDir)) {
  console.log('Cleaning up existing temp directory...');
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir);

// Clone the repository to the temp directory
console.log('Cloning the GitHub repository...');
try {
  execSync('git clone https://github.com/rajmhetar/rajmhetar.github.io.git temp-deploy', { stdio: 'inherit' });
} catch (error) {
  console.error('Error cloning repository:', error);
  process.exit(1);
}

// Remove all files from the temp directory except .git
const tempDirContents = fs.readdirSync(tempDir);
tempDirContents.forEach(item => {
  if (item !== '.git') {
    const itemPath = path.join(tempDir, item);
    if (fs.lstatSync(itemPath).isDirectory()) {
      fs.rmSync(itemPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(itemPath);
    }
  }
});

// Copy all files from out directory to the temp directory
console.log('Copying build files...');
const copyDir = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  fs.mkdirSync(dest, { recursive: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyDir(outDir, tempDir);

// Add a special file to force GitHub Pages to correctly serve the site
const readmePath = path.join(tempDir, 'README.md');
if (!fs.existsSync(readmePath)) {
  fs.writeFileSync(readmePath, '# Raj Mhetar Portfolio\n\nPowered by Next.js and hosted on GitHub Pages.');
}

// Commit and push changes
console.log('Committing and pushing changes...');
process.chdir(tempDir);
execSync('git add -A', { stdio: 'inherit' });
execSync('git commit -m "Deploy website updates with fixed images and CSS"', { stdio: 'inherit' });
execSync('git push', { stdio: 'inherit' });

// Clean up
console.log('Cleaning up...');
process.chdir('..');
fs.rmSync(tempDir, { recursive: true, force: true });

console.log('Deployment completed successfully!'); 