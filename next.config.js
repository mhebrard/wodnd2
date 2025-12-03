/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/wodnd2' : '',
  assetPrefix: isGithubPages ? '/wodnd2/' : '',
  images: { unoptimized: true },
};

module.exports = nextConfig;
