"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface ToyItem {
  id: number;
  name: string;
  price: string;
  image: string;
  color: string;
}

export function ToyShopCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toys: ToyItem[] = [
    {
      id: 1,
      name: "Squeaky Ball",
      price: "$12.99",
      image:
        "https://images.unsplash.com/photo-1744608257939-1ecbd90f1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3lzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NjgzNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#FF6B9D",
    },
    {
      id: 2,
      name: "Plush Buddy",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1732277347628-28234f55c951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcGV0fGVufDF8fHx8MTc2Njc1OTg5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#A855F7",
    },
    {
      id: 3,
      name: "Chew Bone",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1669423919953-689420c08a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBldHxlbnwxfHx8fDE3NjY3NDU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#22D3EE",
    },
    {
      id: 4,
      name: "Rope Toy",
      price: "$15.99",
      image:
        "https://images.unsplash.com/photo-1744608257939-1ecbd90f1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjB0b3lzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY2NjgzNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#39FF14",
    },
    {
      id: 5,
      name: "Puzzle Feeder",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1732277347628-28234f55c951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcGV0fGVufDF8fHx8MTc2Njc1OTg5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "#FF6B9D",
    },
  ];

  // Duplicate toys for seamless loop
  const duplicatedToys = [...toys, ...toys, ...toys];

  return (
    <section className="relative py-32 bg-black overflow-hidden" id="shop">
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-[#39FF14] uppercase tracking-widest mb-4"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Toy Shop
          </p>
          <h2
            className="text-5xl md:text-7xl mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-white">Trendy</span>{" "}
            <span className="bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] bg-clip-text text-transparent">
              Pet Toys
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8"
          animate={{
            x: isPaused ? 0 : [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedToys.map((toy, index) => (
            <motion.div
              key={`${toy.id}-${index}`}
              className="relative flex-shrink-0 w-80 h-96 group cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 3 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={toy.image}
                  alt={toy.name}
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Rotating Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    border: `3px solid ${toy.color}`,
                  }}
                  animate={{
                    rotate: isPaused ? 0 : 360,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="inline-block px-4 py-1 rounded-full mb-3 text-sm uppercase tracking-wider"
                      style={{
                        backgroundColor: toy.color,
                        color: "#000",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      New
                    </div>
                  </motion.div>

                  <h3
                    className="text-3xl mb-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {toy.name}
                  </h3>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="text-2xl"
                      style={{
                        color: toy.color,
                        fontFamily: "Space Grotesk, sans-serif",
                      }}
                    >
                      {toy.price}
                    </span>

                    <motion.button
                      className="px-6 py-2 rounded-full border-2 uppercase tracking-wider text-sm"
                      style={{
                        borderColor: toy.color,
                        color: toy.color,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                      whileHover={{
                        backgroundColor: toy.color,
                        color: "#000",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </motion.div>
                </div>

                {/* 3D Effect Overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${toy.color}33 0%, transparent 70%)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
      </div>

      {/* Instructions */}
      <motion.div
        className="container mx-auto px-6 mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p
          className="text-white/50 uppercase tracking-widest"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          Hover to pause • Click to add to cart
        </p>
      </motion.div>
    </section>
  );
}
