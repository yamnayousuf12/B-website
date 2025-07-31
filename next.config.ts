/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <-- this disables automatic image optimization
  },
};

module.exports = nextConfig;

