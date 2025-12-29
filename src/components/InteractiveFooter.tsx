"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import logoImage from "@/assets/logoImage.png";
export function InteractiveFooter() {
  const [isAwake, setIsAwake] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [randomPositions, setRandomPositions] = useState<
    Array<{ left: number; top: number }>
  >([]);

  useEffect(() => {
    const positions = [...Array(5)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));

    // Use requestAnimationFrame to push state update out of synchronous flow
    requestAnimationFrame(() => {
      setRandomPositions(positions);
      setMounted(true);
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsAwake(scrollPosition >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className="relative py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(168 85 247 / 0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Sleeping/Waking Pet Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-8xl mb-4"
            animate={{
              scale: isAwake ? [1, 1.1, 1] : 1,
              rotate: isAwake ? [0, -5, 5, 0] : 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {isAwake ? "🐕" : "😴"}
          </motion.div>
          <h3
            className="text-4xl mb-4 text-gray-900"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            {isAwake ? "We're Awake! Let's Talk" : "Scroll to Wake Us Up"}
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            {isAwake
              ? "Ready to give your pet the best care? Get in touch with us today!"
              : "Keep scrolling down to get in touch"}
          </p>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
              <Image
                src={logoImage}
                alt="Petlytic Logo"
                className="h-10 w-auto object-contain"
                style={{
                  mixBlendMode: "multiply",
                  filter: "brightness(1.1) contrast(1.1)",
                }}
              />
            </motion.div>
            <p className="text-gray-600 leading-relaxed">
              Premium pet care services designed with love for your furry family
              members.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xl mb-4 text-gray-900"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Veterinary Care",
                "Grooming",
                "Pet Hotel",
                "Training",
                "Spa",
                "Nutrition",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#services"
                    className="text-gray-600 hover:text-pink-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xl mb-4 text-gray-900"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Blog",
                "Press",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xl mb-4 text-gray-900"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3 text-gray-600">
              <p>📧 hello@petz.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Pet Street, Pawville</p>

              <div className="flex gap-3 pt-4">
                {["🐦", "📘", "📷", "💼"].map((emoji, index) => (
                  <motion.button
                    key={index}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {emoji}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          className="bg-white rounded-3xl p-8 mb-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4
              className="text-3xl mb-4 text-gray-900"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Join Our Pet Community
            </h4>
            <p className="text-gray-600 mb-6">
              Get pet care tips, special offers, and updates delivered to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 focus:border-pink-500 outline-none text-gray-900"
              />
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300 text-center">
          <p
            className="text-gray-600"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            © 2025 PetZ. All rights reserved. Made with ❤️ for pets everywhere.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
            <motion.a href="#" whileHover={{ color: "#EC4899" }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ color: "#EC4899" }}>
              Terms of Service
            </motion.a>
            <motion.a href="#" whileHover={{ color: "#EC4899" }}>
              Cookie Policy
            </motion.a>
          </div>
        </div>
      </div>

      {/* Floating Paw Prints */}
      {mounted &&
        randomPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 3 + (i % 2) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 3) * 0.5,
            }}
          >
            🐾
          </motion.div>
        ))}
    </footer>
  );
}
