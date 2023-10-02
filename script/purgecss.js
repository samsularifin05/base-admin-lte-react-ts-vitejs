const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// Function to get file size in kilobytes
function getFilesizeInKiloBytes(filename) {
  const stats = fs.statSync(filename);
  return (stats.size / 1024).toFixed(2) + "kb";
}

// Function to get files with a specific extension from a directory
function getFilesFromPath(dir, extension) {
  const files = fs.readdirSync(dir);
  return files.filter((e) => path.extname(e).toLowerCase() === extension);
}

// Define the CSS files and initialize data array
const cssDirectory = "./build/assets/css/";
const cssFiles = getFilesFromPath(cssDirectory, ".css");
const data = [];

if (!cssFiles || cssFiles.length === 0) {
  console.log("Cannot find CSS files to purge.");
  return;
}

// Loop through CSS files to collect original sizes
for (const file of cssFiles) {
  const originalSize = getFilesizeInKiloBytes(path.join(cssDirectory, file));
  data.push({ file, originalSize, newSize: "" });
}

console.log("Running PurgeCSS...");

// Execute PurgeCSS
exec(
  `./node_modules/purgecss/bin/purgecss.js -css ${cssDirectory}/*.css --content build/index.html build/assets/js/*.js -o ${cssDirectory}`,
  function (error, stdout, stderr) {
    if (error) {
      console.error("Error running PurgeCSS:", error);
      return;
    }

    console.log("PurgeCSS done");

    // Update data with new sizes
    for (const d of data) {
      d.newSize = getFilesizeInKiloBytes(path.join(cssDirectory, d.file));
    }

    console.table(data);
  }
);
