/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'docs',
  basePath: '/pjwang23.github.io',
  assetPrefix: '/pjwang23.github.io',
}
export default nextConfig;
