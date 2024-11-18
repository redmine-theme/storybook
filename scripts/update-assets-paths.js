const fs = require('fs');
const path = require('path');

// Get command-line arguments
const args = process.argv.slice(2);
const targetDir = args[0]; // First argument: target directory
const basePath = args[1]; // Second argument: base path for assets with leading/trailing slashes

// Check if required arguments are provided
if (!targetDir || !basePath) {
  console.error('Usage: node update-assets-paths.js <target directory> <base path>');
  process.exit(1);
}

function updateAssetsPaths(targetDir, basePath) {
  const files = fs.readdirSync(targetDir);

  files.forEach((file) => {
    const filePath = path.join(targetDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      updateAssetsPaths(filePath, basePath); // Recursively process subdirectories
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');

      if (content.match(/(["'\(])\/(assets|attachments|images|javascripts|stylesheets)\//g)) {
        // Add base path to assets paths
        const updatedContent = content.replace(
          /(["'\(])\/(assets|attachments|images|javascripts|stylesheets)\//g,
          `$1${basePath}$2/`
        );

        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
}

try {
  updateAssetsPaths(targetDir, basePath);
  console.log('Processing completed successfully.');
} catch (error) {
  console.error('Error during processing:', error);
}
