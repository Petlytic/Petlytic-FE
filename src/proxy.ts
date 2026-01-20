// src/proxy.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 Proxy hỗ trợ default export
export default createMiddleware(routing);

export const config = {
  // Matcher vẫn giữ nguyên
  matcher: ["/", "/(vi|en)/:path*"],
};
