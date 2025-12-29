"use client";

import { motion, useTransform, MotionValue } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  text: string;
  speed: number;
  color: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  scrollYProgress: MotionValue<number>;
}
function TestimonialCard({
  testimonial,
  index,
  scrollYProgress,
}: TestimonialCardProps) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * testimonial.speed]);

  return (
    <motion.div
      key={testimonial.id}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <motion.div
        className="relative p-6 rounded-3xl bg-white shadow-lg border border-gray-100"
        whileHover={{
          scale: 1.03,
          boxShadow: `0 20px 40px ${testimonial.color}20`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            style={{
              backgroundColor: `${testimonial.color}20`,
            }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {testimonial.avatar}
          </motion.div>
          <div>
            <h4
              className="text-gray-900"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {testimonial.name}
            </h4>
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {testimonial.username}
            </p>
          </div>
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>

        {/* Decorative Corner */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
          style={{
            backgroundColor: testimonial.color,
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default TestimonialCard;
