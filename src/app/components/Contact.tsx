"use client";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="py-20 px-10 bg-green-200 text-center">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">
            {t("contact.title")}
      </h2>
      <p className="text-lg mb-4 text-black">{t("contact.address")}</p>
      <p className="text-lg mb-4 text-black">{t("contact.email")}</p>
      <p className="text-lg text-black">{t("contact.phone")}</p>
      <p className="text-lg">
        🔗 <a href="https://www.facebook.com/profile.php?id=61571893030670" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{t("contact.facebook")}</a>
      </p>
    </div>
  );
}