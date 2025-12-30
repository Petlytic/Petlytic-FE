// src/app/layout.tsx
import type { Metadata } from "next";
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}