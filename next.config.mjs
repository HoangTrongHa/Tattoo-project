/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // Ignore fs and other Node.js modules in the browser environment
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Ignore fs module in the browser
        path: false, // Ignore path module
        os: false, // Ignore os module
        // Add any other Node.js modules that you don't want to include in the browser
      };
    }
    return config;
  },
};

export default nextConfig;