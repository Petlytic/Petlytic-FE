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
import petlytic from "@/assets/petlytic.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User as UserIcon, Settings } from "lucide-react";

import { useGetProfile } from "@/hooks/useUser";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/store/slices/authSlice";
import { useLogout } from "@/hooks/useAuth";

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
  const isActive =
    pathname === href ||
    (href === "/" && pathname === "/") ||
    href === "/services";

  return (
    <Link
      href={href}
      className={`relative group text-lg md:text-xl transition-colors duration-300 ${
        isActive
          ? "font-bold text-brand-blue-500" // Active: Chữ đậm đen
          : "font-semibold text-gray-600 hover:text-brand-green-600" // Inactive: Hover đổi màu xanh
      }`}
    >
      {children}
      {/* Hiệu ứng gạch chân (Animated Underline) */}
      <span
        className={`absolute -bottom-1 left-0 h-1 rounded-full bg-brand-green-500 ${
          isActive ? "w-full" : ""
        }`}
      />
    </Link>
  );
}

function HeaderContent() {
  const { data: profileData, isLoading } = useGetProfile();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { mutate: logout } = useLogout();

  return (
    <div className="px-4 sm:px-8 h-20 md:h-24 flex items-center justify-between w-full max-w-none">
      {/* --- LOGO SECTION --- */}
      <Link href="/" className="flex items-center gap-3 md:gap-4">
        <div className="relative w-14 h-14 md:w-48 md:h-20">
          <Image
            src={petlytic}
            alt="Petlytic Logo"
            fill
            className="object-contain object-left md:object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* --- DESKTOP NAV --- */}
      <nav className="hidden xl:flex items-center gap-12 2xl:gap-16">
        {" "}
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/shop">Shop</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>

      {/* --- AUTH BUTTONS (Desktop) --- */}
      <div className="hidden xl:flex items-center">
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-3 pl-2 pr-4 py-2 h-auto rounded-full hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
              >
                {/* Avatar Section */}
                <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                  <AvatarImage
                    src={profileData?.result?.avatarUrl || ""}
                    alt={profileData?.result?.username}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-brand-green-100 text-brand-green-700 font-bold">
                    {profileData?.result?.username
                      ?.substring(0, 1)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                {/* Text Section */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-bold text-gray-800 leading-none">
                    {profileData?.result?.username}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {profileData?.result?.role || "Member"}
                  </span>
                </div>

                <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-64 p-2 rounded-xl shadow-xl border-gray-100"
              align="end"
            >
              <DropdownMenuLabel className="font-normal p-3 bg-gray-50 rounded-lg mb-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-bold text-gray-900 leading-none">
                    {profileData?.result?.username}
                  </p>
                  <p className="text-xs leading-none text-gray-500 break-all">
                    {profileData?.result?.email}
                  </p>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 focus:bg-gray-50">
                <UserIcon className="mr-3 h-4 w-4 text-gray-500" />
                <span className="font-medium text-gray-700">My Profile</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 focus:bg-gray-50">
                <Settings className="mr-3 h-4 w-4 text-gray-500" />
                <span className="font-medium text-gray-700">Settings</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-1 bg-gray-100" />

              <DropdownMenuItem
                onClick={() => logout()}
                className="cursor-pointer rounded-lg py-2.5 text-red-600 focus:text-red-600 focus:bg-red-50 mt-1"
              >
                <LogOut className="mr-3 h-4 w-4" />
                <span className="font-bold">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link href="/login">
              <Button
                asChild
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-xl px-8 py-6 text-lg font-bold h-12 md:h-14 transition-all"
              >
                <span>Login</span>
              </Button>
            </Link>
            <Link href="/register">
              <Button
                asChild
                className="bg-brand-green-500 hover:bg-brand-green-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-xl px-8 py-6 text-lg font-bold h-12 md:h-14"
              >
                <span>Sign Up</span>
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* --- MOBILE MENU (Hamburger) --- */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="xl:hidden w-12 h-12">
            <Menu className="w-8 h-8 md:w-10 md:h-10" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[340px] sm:w-[450px]">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-8 mt-12 px-4">
            {/* Sử dụng map để render links gọn gàng và đồng bộ hiệu ứng */}
            {[
              { href: "/services", label: "Services" },
              { href: "/shop", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-bold text-gray-800 transition-all duration-200 hover:text-brand-green-600 hover:pl-2"
              >
                {link.label}
              </Link>
            ))}

            {/* Phần Authentication cho Mobile (Giữ nguyên logic cũ của bạn) */}
            <div className="flex flex-col gap-4 mt-8 px-4">
              {isAuthenticated ? (
                <div className="flex flex-col gap-6">
                  {/* User Profile Card */}
                  {!isLoading && profileData?.result && (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                      <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                        <AvatarImage
                          src={profileData.result.avatarUrl || ""}
                          alt={profileData.result.username}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-brand-green-100 text-brand-green-700 font-bold">
                          {profileData.result.username
                            ?.substring(0, 1)
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col overflow-hidden">
                        <span className="text-lg font-bold text-gray-900 truncate">
                          {profileData.result.username}
                        </span>
                        <span className="text-sm text-gray-500 truncate">
                          {profileData.result.email}
                        </span>
                        <span className="text-xs font-medium text-brand-green-600 bg-brand-green-50 px-2 py-0.5 rounded-full w-fit mt-1">
                          {profileData.result.role}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <Button
                    onClick={() => logout()}
                    variant="destructive"
                    className="rounded-xl w-full py-6 text-lg font-bold h-14 shadow-sm hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Log Out</span>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-900 text-gray-900 rounded-xl py-6 text-xl font-bold h-14 hover:bg-gray-50"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register" className="w-full">
                    <Button className="w-full bg-brand-green-500 hover:bg-brand-green-600 text-white rounded-xl py-6 text-xl font-bold h-14 shadow-md transition-all active:scale-[0.98]">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
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
