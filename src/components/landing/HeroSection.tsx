"use client";

import { Button } from "@/components/ui/button";
import dogLandingPage from "@/assets/dogLandingPage.png";
import Image from "next/image";
// 1. Nhớ đổi Link sang loại support i18n
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  // 2. Khai báo hook
  const t = useTranslations("LandingPage.HeroSection");

  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 justify-items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {t("titleLine1")}
              </h1>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {t("titleLine2Prefix")}{" "}
                <span>
                  <span className="text-blue-600">
                    {t("titleLine2Highlight")}
                  </span>
                </span>
              </h1>

              <p className="text-lg text-gray-600">{t("description")}</p>
            </div>

            <Link href="/booking">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-12 py-6 text-xl"
              >
                {t("bookBtn")}
              </Button>
            </Link>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="text-center">
              <Image
                src={dogLandingPage}
                alt="Happy Pet"
                width={256}
                height={256}
                className="mx-auto w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
