// This file is auto-generated during build process
// Do not edit manually

interface BuildInfo {
  buildDate: string;
  buildTime: string;
  timestamp: number;
}

// Import the JSON file generated during build
let buildInfo: BuildInfo;

try {
  // Dynamic import to avoid build-time issues
  buildInfo = require('./buildInfo.json') as BuildInfo;
} catch (error) {
  // Fallback for development or if build info doesn't exist
  const now = new Date();
  buildInfo = {
    buildDate: now.toISOString().split('T')[0],
    buildTime: now.toISOString(),
    timestamp: now.getTime(),
  };
}

export const BUILD_DATE = buildInfo.buildDate;
export const BUILD_TIME = buildInfo.buildTime;
export const BUILD_TIMESTAMP = buildInfo.timestamp;

// Format the date for display
export const getFormattedBuildDate = (): string => {
  const date = new Date(BUILD_DATE);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
