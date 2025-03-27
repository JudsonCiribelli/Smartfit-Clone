import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "www.smartfit.com.br",
      "assets.smartfit.com.br",
      "assets3.smartfit.com.br",
      "landing-pages-smart.s3.amazonaws.com",
      "s3.amazonaws.com",
    ],
  },
};

export default nextConfig;
