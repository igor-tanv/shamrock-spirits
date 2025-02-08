"use client";  // Ensure this runs on the client-side

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import en from "./app/locales/en.json";
import vi from "./app/locales/vi.json";

i18next
  .use(resourcesToBackend({ en, vi })) // Load translations locally
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, vi: { translation: vi } }, // Attach translations
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18next;
