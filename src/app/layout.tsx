// src/app/layout.tsx
import type { Metadata } from "next";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TanstackQueryProvider } from "@/components/providers/TanstackQueryProvider";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Petlytic - Premium Pet Care",
  description: "Where Your Pets Thrive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <ReduxProvider>
          <TanstackQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
          </TanstackQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
