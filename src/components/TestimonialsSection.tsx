"use client";

import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  text: string;
  speed: number;
  color: string;
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah M.",
      username: "@sarahpawsome",
      avatar: "🐕",
      text: "PetZ changed my life! My dog absolutely loves the spa treatments. Best decision ever! 🌟",
      speed: 0.5,
      color: "#FF6B9D",
    },
    {
      id: 2,
      name: "Alex K.",
      username: "@alexcatlover",
      avatar: "🐱",
      text: "The vet services are top-notch. Professional, caring, and modern. Highly recommend!",
      speed: 0.3,
      color: "#A855F7",
    },
    {
      id: 3,
      name: "Jamie R.",
      username: "@jamiewithpets",
      avatar: "🐰",
      text: "My bunny stayed at their hotel and came back so happy. The staff is amazing! 💜",
      speed: 0.7,
      color: "#22D3EE",
    },
    {
      id: 4,
      name: "Chris P.",
      username: "@chrispup",
      avatar: "🐶",
      text: "Finally found a place that treats pets like family. The facilities are incredible!",
      speed: 0.4,
      color: "#FCD34D",
    },
    {
      id: 5,
      name: "Taylor B.",
      username: "@taylorsbestie",
      avatar: "🦮",
      text: "Been using PetZ for over a year now. Consistent quality and care every single time! ✨",
      speed: 0.6,
      color: "#FF6B9D",
    },
    {
      id: 6,
      name: "Morgan L.",
      username: "@morganthepet",
      avatar: "🐕‍🦺",
      text: "The toy shop has everything! My pup's favorite place to pick new toys from.",
      speed: 0.35,
      color: "#A855F7",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-hidden"
      id="testimonials"
    >
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-pink-600 uppercase tracking-widest mb-4"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            What Pet Parents Say
          </p>
          <h2
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-gray-900">Loved by </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-300/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.3, 1, 1.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
    </section>
  );
}
