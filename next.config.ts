import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dropithere.nishul.dev'], 
  },
};

export default nextConfig;
