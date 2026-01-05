// src/app/page.tsx
import { AnimatedHeader } from '@/components/common/AnimatedHeader';
import { HeroSection } from '@/components/common/HeroSection';
import { BentoServices } from '@/components/common/BentoServices';
import { TestimonialsSection } from '@/components/common/TestimonialsSection';
import { InteractiveFooter } from '@/components/common/InteractiveFooter';
import { ScrollAnimations } from '@/components/common/ScrollAnimations';

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