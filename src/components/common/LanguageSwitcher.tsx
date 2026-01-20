"use client";

import { useLocaleContext } from "@/components/providers/LocaleProvider";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { locale, toggleLocale } = useLocaleContext();

  return (
    <Button
      variant="ghost"
      onClick={toggleLocale}
      className="flex items-center gap-2 font-bold text-gray-700 hover:bg-gray-100 rounded-full px-4 border border-transparent hover:border-gray-200 transition-all min-w-[140px] justify-center"
    >
      {locale === "vi" ? (
        <>
          <span className="text-lg">🇻🇳</span>
          <span>Tiếng Việt</span>
        </>
      ) : (
        <>
          <span className="text-lg">🇺🇸</span>
          <span>English</span>
        </>
      )}
    </Button>
  );
}
