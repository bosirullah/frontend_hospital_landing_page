/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    middleware: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          families: ["Inter"],
          subsets: ["latin"],
        },
      },
    ],
  },
};

export default nextConfig;
