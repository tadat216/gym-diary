const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add .sql to source extensions for Drizzle migrations
config.resolver.sourceExts.push("sql");

module.exports = withNativeWind(config, { input: "./global.css" });
