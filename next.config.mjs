/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    JSON_PLACEHOLDER_URL: process.env.JSON_PLACEHOLDER_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
