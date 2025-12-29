// src/app/page.tsx
import { AnimatedHeader } from '@/components/AnimatedHeader';
import { HeroSection } from '@/components/HeroSection';
import { BentoServices } from '@/components/BentoServices';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { InteractiveFooter } from '@/components/InteractiveFooter';
import { ScrollAnimations } from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <ScrollAnimations />
      <AnimatedHeader />
      <HeroSection />
      <BentoServices />
      <TestimonialsSection />
      <InteractiveFooter />
    </main>
  );
}