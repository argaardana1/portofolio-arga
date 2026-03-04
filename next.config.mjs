/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Memudahkan penggunaan foto lokal di folder public
  },
  // SEO Optimized: Menghapus header yang tidak perlu
  poweredByHeader: false,
};

export default nextConfig;
