const fs = require('fs');
const path = require('path');

// Generate current timestamp
const now = new Date();
const buildDate = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
const buildTime = now.toISOString(); // Full ISO string

// Create build info object
const buildInfo = {
  buildDate,
  buildTime,
  timestamp: now.getTime()
};

// Write to a JSON file that can be imported in the app
const buildInfoPath = path.join(__dirname, 'src', 'constants', 'buildInfo.json');
fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));

console.log(`Build info generated: ${buildDate} at ${buildTime}`); 