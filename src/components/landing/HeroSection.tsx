"use client";

import { Button } from "@/components/ui/button";
import dogLandingPage from "@/assets/dogLandingPage.png";
import Link from "next/link";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden  min-h-[500px] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Next Gen Care for Your{" "}
                <span className="text-blue-600">Furry Bestie</span>
              </h1>
              <p className="text-lg text-gray-600">
                Loving services for a happy, healthy pet
              </p>
            </div>

            <Link href="/booking">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8"
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Right - Pet Mascot */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Simple Dog Mascot Circle */}
              <div className="text-center">
                <Image
                  src={dogLandingPage}
                  alt="Happy Pet"
                  width={256}
                  height={256}
                  className="mx-auto w-64 h-64 md:w-80 md:h-80"
                />
                <p className="text-sm font-semibold mt-2">Happy Pet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
