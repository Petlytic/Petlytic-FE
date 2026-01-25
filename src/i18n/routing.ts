import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Danh sách ngôn ngữ hỗ trợ
  locales: ["en", "vi"],
  // Ngôn ngữ mặc định nếu không có trong URL
  defaultLocale: "en",
});

// Xuất ra các hàm Link, redirect, usePathname, useRouter để dùng trong components
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
