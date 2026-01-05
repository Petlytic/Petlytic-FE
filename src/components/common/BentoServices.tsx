"use client";
import { useState, useRef } from "react";
import { motion } from "motion/react";

interface ServiceCardProps {
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  className?: string;
  index: number;
}

function ServiceCard({
  title,
  description,
  emoji,
  gradient,
  className = "",
  index,
}: ServiceCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -5;
    const tiltY = ((x - centerX) / centerX) * 5;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer rounded-3xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${gradient}`} />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        {/* Emoji Icon */}
        <motion.div
          className="text-7xl mb-4"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>

        <div>
          <h3
            className="text-3xl mb-3 text-gray-900"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>

          {/* Hover Arrow */}
          <motion.div
            className="mt-6 flex items-center gap-2 text-gray-900"
            initial={{ x: 0, opacity: 0.7 }}
            whileHover={{ x: 10, opacity: 1 }}
          >
            <span style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Learn More
            </span>
            <span>→</span>
          </motion.div>
        </div>
      </div>

      {/* 3D Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function BentoServices() {
  const services = [
    {
      title: "Veterinary Care",
      description:
        "Comprehensive health checkups and medical care by certified veterinarians.",
      emoji: "🏥",
      gradient: "bg-gradient-to-br from-pink-200 to-pink-300",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Pet Grooming",
      description:
        "Professional grooming services to keep your pets looking their best.",
      emoji: "✂️",
      gradient: "bg-gradient-to-br from-purple-200 to-purple-300",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Pet Hotel",
      description: "Comfortable boarding with 24/7 supervision and care.",
      emoji: "🏨",
      gradient: "bg-gradient-to-br from-cyan-200 to-cyan-300",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Training",
      description: "Expert training programs for obedience and behavior.",
      emoji: "🎓",
      gradient: "bg-gradient-to-br from-yellow-200 to-yellow-300",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Pet Spa",
      description:
        "Relaxing spa treatments including massages and aromatherapy.",
      emoji: "🧖",
      gradient: "bg-gradient-to-br from-rose-200 to-rose-300",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Nutrition",
      description:
        "Custom meal plans and dietary consultations for optimal health.",
      emoji: "🍖",
      gradient: "bg-gradient-to-br from-orange-200 to-orange-300",
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(236 72 153 / 0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-pink-600 uppercase tracking-widest mb-4"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Our Services
          </p>
          <h2
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-gray-900">Everything Your </span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Pet Needs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From health care to pampering, we offer comprehensive services to
            keep your pets happy, healthy, and thriving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
