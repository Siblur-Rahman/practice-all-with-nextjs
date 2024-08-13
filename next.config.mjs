/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https", // or http
            hostname: "**", //all api
          },
        ],
      },
};

export default nextConfig;
