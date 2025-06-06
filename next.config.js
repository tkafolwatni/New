/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // يمكن إضافة نطاقات الصور الخارجية إذا لزم الأمر
  },
};

module.exports = nextConfig;