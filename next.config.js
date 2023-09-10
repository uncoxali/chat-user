/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["reqres.in"], // Add the hostname(s) here
    compiler: {
      styledComponents: true,
    },
  },
};

module.exports = nextConfig;
