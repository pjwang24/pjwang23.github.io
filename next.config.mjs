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
  basePath: '/pjwang23.github.io',         // 👈 add this
  assetPrefix: '/pjwang23.github.io',      // 👈 optional but recommended
}

export default nextConfig;
