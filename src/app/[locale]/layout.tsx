import type { Metadata } from "next";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { TanstackQueryProvider } from "@/components/providers/TanstackQueryProvider";
import { LocaleProvider, Locale } from "@/components/providers/LocaleProvider";
import "../../styles/index.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Petlytic - Premium Pet Care",
  description: "Where Your Pets Thrive",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <ReduxProvider>
            <TanstackQueryProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
              >
                <LocaleProvider initialLocale={locale as Locale}>
                  <AuthProvider>{children}</AuthProvider>
                </LocaleProvider>
              </ThemeProvider>
            </TanstackQueryProvider>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
