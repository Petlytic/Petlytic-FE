// src/app/page.tsx

import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesBento } from "@/components/landing/ServicesBento";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <div className="bg-gradient-to-br from-amber-50 via-white to-blue-50">
          <Header />
          {/* Hero Section */}
          <HeroSection />

          {/* Services Section */}
          <ServicesBento />
        </div>

        {/* Products Showcase */}
        <ProductShowcase />
        <Footer />  
      </main>
    </div>
  );
}
