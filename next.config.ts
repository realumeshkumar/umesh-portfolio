import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Uncomment to build a plain static site into ./out (for Nginx or any static host):
  // output: "export",

  allowedDevOrigins: ['192.168.31.195'],


};

export default nextConfig;
