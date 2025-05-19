import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.cloudly.space",
        pathname: "/resize/**",
      },
      {
        protocol: "https",
        hostname: "cdt34.media.tourinsoft.eu",
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: "montpellier3m.fr",
      },
      {
        protocol: "https",
        hostname: "montpellier3m.ovh",
      },
    ],
  },
  allowedDevOrigins: ["localhost"],
};

export default nextConfig;
