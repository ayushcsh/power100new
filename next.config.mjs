/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb', // Increase body size limit to 10MB
    },
  },
};

export default nextConfig;
