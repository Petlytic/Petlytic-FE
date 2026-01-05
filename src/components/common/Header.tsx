"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Istok_Web } from "next/font/google";
import logoImage from "@/assets/logoImage.png";

const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white ${istokWeb.className}`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImage}
            alt="Petlytic Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="font-bold text-xl md:text-2xl lg:text-3xl">
            <span className="text-brand-blue-500">Pet</span>
            <span className="text-brand-green-500">lytic</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className={`text-sm md:text-base lg:text-lg ${
              pathname === "/services" || pathname === "/"
                ? "font-bold text-gray-900 border-b-2 border-brand-green-500 pb-1"
                : "font-medium text-gray-700 hover:text-gray-900"
            }`}
          >
            Services
          </Link>
          <Link
            href="/shop"
            className={`text-sm md:text-base lg:text-lg ${
              pathname === "/shop"
                ? "font-bold text-gray-900 border-b-2 border-brand-green-500 pb-1"
                : "font-medium text-gray-700 hover:text-gray-900"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className={`text-sm md:text-base lg:text-lg ${
              pathname === "/about"
                ? "font-bold text-gray-900 border-b-2 border-brand-green-500 pb-1"
                : "font-medium text-gray-700 hover:text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm md:text-base lg:text-lg ${
              pathname === "/contact"
                ? "font-bold text-gray-900 border-b-2 border-brand-green-500 pb-1"
                : "font-medium text-gray-700 hover:text-gray-900"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 rounded-lg px-6"
          >
            Login
          </Button>
          <Button className="bg-brand-green-500 hover:bg-brand-green-600 text-white rounded-lg px-6">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-6 mt-8">
              <Link
                href="/services"
                className="text-base md:text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                Services
              </Link>
              <Link
                href="/shop"
                className="text-base md:text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-base md:text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-base md:text-lg font-medium text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 rounded-lg"
                >
                  Login
                </Button>
                <Button className="bg-brand-green-500 hover:bg-brand-green-600 text-white rounded-lg">
                  Sign Up
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
