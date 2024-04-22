/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ymtaz.sa",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
