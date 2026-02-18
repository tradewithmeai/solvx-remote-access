const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Allow .html files to be required as assets (for WebView pages)
config.resolver.assetExts.push('html');

module.exports = config;
