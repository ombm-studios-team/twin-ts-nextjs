const withTwin = require('./withTwin.js');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx']
};

module.exports = withTwin(nextConfig);
