import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import en from "@/messages/en.json";
import vi from "@/messages/vi.json";

type MessageKeys = "en" | "vi";

const messages: Record<MessageKeys, Record<string, unknown>> = {
  en,
  vi,
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as MessageKeys],
  };
});
