"use client";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="py-20 px-10 bg-gray-50">
     <h2 className="text-4xl font-bold text-center mb-10 text-black">
          {t("aboutUs.title")}
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
        {t("aboutUs.description")}
      </p>
    </div>
  );
}
