"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Istok_Web } from "next/font/google";
import logoImage from "@/assets/logoImage.png";

const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
});

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href === "/" && pathname === "/");

  return (
    <Link
      href={href}
      className={`text-lg md:text-xl transition-colors ${
        isActive
          ? "font-bold text-gray-900 border-b-4 border-brand-green-500 pb-1"
          : "font-semibold text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}

function HeaderContent() {
  return (
    <div className="container mx-auto px-6 h-28 md:h-32 flex items-center justify-between">
      {/* --- LOGO SECTION --- */}
      <Link href="/" className="flex items-center gap-3 md:gap-4">
        <div className="relative w-14 h-14 md:w-20 md:h-20">
          {" "}
          {/* CHANGE: Tăng khung chứa ảnh */}
          <Image
            src={logoImage}
            alt="Petlytic Logo"
            fill
            className="object-contain"
          />
        </div>
        {/* CHANGE: Tăng font size logo lên text-3xl và text-4xl */}
        <span className="font-bold text-3xl md:text-5xl tracking-tight">
          <span className="text-brand-blue-500">Pet</span>
          <span className="text-brand-green-500">lytic</span>
        </span>
      </Link>

      {/* --- DESKTOP NAV --- */}
      <nav className="hidden xl:flex items-center gap-12 2xl:gap-16">
        {" "}
        {/* Tăng khoảng cách các link */}
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/shop">Shop</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>

      {/* --- AUTH BUTTONS (Desktop) --- */}
      <div className="hidden xl:flex items-center gap-6">
        <Link href="/login">
          <Button
            asChild
            variant="outline"
            // CHANGE: Áp dụng class button lớn, tăng border
            className={`border-2 border-gray-900 text-gray-900 hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-bold h-12 md:h-14`}
          >
            <span>Login</span>
          </Button>
        </Link>
        <Link href="/register">
          <Button
            asChild
            // CHANGE: Áp dụng class button lớn
            className={`bg-brand-green-500 hover:bg-brand-green-600 text-white shadow-lg hover:shadow-xl transition-all rounded-xl px-8 py-6 text-lg font-bold h-12 md:h-14`}
          >
            <span>Sign Up</span>
          </Button>
        </Link>
      </div>

      {/* --- MOBILE MENU (Hamburger) --- */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="xl:hidden w-12 h-12">
            {" "}
            {/* Tăng nút menu mobile */}
            <Menu className="w-8 h-8 md:w-10 md:h-10" /> {/* Icon to hơn */}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[340px] sm:w-[450px]">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-8 mt-12 px-4">
            <Link
              href="/services"
              className="text-2xl font-bold text-gray-800 hover:text-brand-green-500"
            >
              Services
            </Link>
            <Link
              href="/shop"
              className="text-2xl font-bold text-gray-800 hover:text-brand-green-500"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-2xl font-bold text-gray-800 hover:text-brand-green-500"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-2xl font-bold text-gray-800 hover:text-brand-green-500"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-8 px-4">
              <Link href="/login">
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 rounded-xl w-full py-6 text-xl font-bold h-14"
                >
                  <span>Login</span>
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  asChild
                  className="bg-brand-green-500 text-white rounded-xl w-full py-6 text-xl font-bold h-14"
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function Header() {
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${istokWeb.className}`}
    >
      <HeaderContent />
    </header>
  );
}
