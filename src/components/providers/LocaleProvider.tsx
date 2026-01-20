"use client";

import { createContext, useContext, useCallback } from "react";
import { IntlProvider } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import en from "@/messages/en.json";
import vi from "@/messages/vi.json";

export type Locale = "en" | "vi";

const allMessages = { en, vi } as const;

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocaleContext() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocaleContext must be used within LocaleProvider");
  }
  return context;
}

interface LocaleProviderProps {
  children: React.ReactNode;
  initialLocale: Locale;
}

export function LocaleProvider({
  children,
  initialLocale,
}: LocaleProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (newLocale: Locale) => {
      // Replace current locale in pathname with new locale
      const newPathname = pathname.replace(/^\/(en|vi)/, `/${newLocale}`);
      router.replace(newPathname);
    },
    [router, pathname],
  );

  const toggleLocale = useCallback(() => {
    const newLocale = initialLocale === "en" ? "vi" : "en";
    const newPathname = pathname.replace(/^\/(en|vi)/, `/${newLocale}`);
    router.replace(newPathname);
  }, [router, pathname, initialLocale]);

  return (
    <LocaleContext.Provider
      value={{ locale: initialLocale, setLocale, toggleLocale }}
    >
      <IntlProvider
        locale={initialLocale}
        messages={allMessages[initialLocale]}
        timeZone="Asia/Ho_Chi_Minh"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
