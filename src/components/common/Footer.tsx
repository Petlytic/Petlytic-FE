"use client";

import Link from "next/link";
import Image from "next/image";
import catLandingPage from "@/assets/catLandingPage.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gradient-to-b from-[#FFE9DC] to-[#F8D5C1] py-10">
      <div className="container mx-auto px-4">
        {/* --- TITLE --- */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* --- Explore --- */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4">
              {t("explore")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-sm md:text-base lg:text-lg hover:underline"
              >
                {t("services")}
              </Link>
              <Link
                href="/shop"
                className="text-sm md:text-base lg:text-lg hover:underline"
              >
                {t("shop")}
              </Link>
            </div>
          </div>

          {/* --- Company --- */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4">
              {t("company")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm md:text-base lg:text-lg hover:underline"
              >
                {t("about")}
              </Link>
              <Link
                href="/team"
                className="text-sm md:text-base lg:text-lg hover:underline"
              >
                {t("team")}
              </Link>
            </div>
          </div>

          {/* --- Connect --- */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4">
              {t("connect")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="text-sm md:text-base lg:text-lg hover:underline"
              >
                {t("contact")}
              </Link>
              <Link
                href="https://zalo.me"
                target="_blank"
                className="text-sm md:text-base lg:text-lg hover:underline"
              >
                Zalo
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-sm md:text-base lg:text-lg hover:underline"
              >
                Facebook
              </Link>
            </div>
          </div>

          {/* --- Newsletter --- */}
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-3 md:mb-4">
              {t("newsletterTitle")}
            </h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="bg-white border-none placeholder:text-gray-400"
              />
              <Button className="bg-[#FF9B7E] hover:bg-[#FF8A6B] text-white px-3">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* --- Image --- */}
          <div className="flex justify-center items-center">
            <Image
              src={catLandingPage}
              alt="Category Landing Page"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
