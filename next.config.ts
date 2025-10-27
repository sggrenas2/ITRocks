import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Specify the protocol (e.g., 'https')
        hostname: 'pbs.twimg.com', // Specify the exact hostname
        pathname: '/profile_images/**',
      },
      new URL('https://xsgames.co/randomusers/assets/avatars/female/**'),
      new URL('https://xsgames.co/randomusers/assets/avatars/male/**'),
      new URL('https://picsum.photos/id/**/200/300.webp'),
    ]
  }
};

export default nextConfig;
