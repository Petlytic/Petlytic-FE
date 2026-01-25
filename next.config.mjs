import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bật View Transitions để chuyển trang mượt hơn
  experimental: {
    viewTransition: true,
  },
  // Cấu hình cũ của bạn (nếu có)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Cho phép ảnh từ mọi nguồn (demo)
      },
    ],
  },
};

export default withNextIntl(nextConfig);
