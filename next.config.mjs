import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',
  disable: process.env.NEXT_PUBLIC_ENV === 'development',
  register: true,
  skipWaiting: true,
  reactStrictMode: true,
});

export default nextConfig;
