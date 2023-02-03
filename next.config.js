const withPlugins = require('next-compose-plugins');
const withTwin = require('./withTwin.js');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [],
    rehypePlugins: []
  }
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
};

module.exports = withPlugins([[withMDX, withTwin]], nextConfig);
