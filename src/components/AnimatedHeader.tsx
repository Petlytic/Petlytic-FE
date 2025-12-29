"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import logoImage from "@/assets/logoImage.png";

export function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.button
        className="relative px-8 py-3 bg-gradient-to-r from-[#FF6B9D] to-[#A855F7] rounded-full overflow-hidden cursor-pointer text-white"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 font-bold tracking-wide">
          {children}
        </span>
      </motion.button>
    );
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(20px)",
        boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-pink-100/30"
        style={{ opacity }}
      />

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={logoImage.src}
            alt="Petlytic Logo"
            className="h-12 w-auto object-contain"
            style={{
              mixBlendMode: "multiply",
              filter: "brightness(1.1) contrast(1.1)",
            }}
          />
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {["Services", "Shop", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 hover:text-gray-900 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B9D] to-[#A855F7]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <MagneticButton>Book Now</MagneticButton>
      </div>
    </motion.header>
  );
}
