/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
      ignoreDuringBuilds: true,
  },
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ["v0.blob.com","hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
  reactStrictMode: true,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    // ... any other existing configurations
}

module.exports = nextConfig

