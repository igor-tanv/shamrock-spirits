import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { dir } from "i18next";
import i18nextConfig from "../../next-i18next.config";
import "./globals.css";
import AgeVerification from "./components/AgeVerification";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shamrock Spirits",
  description: "Explore Shamrock Spirits' premium selection of whiskey, bourbon and other products.",
  icons: {
    icon: "/shamrock.ico", 
  },
};

// Detect language from URL or default to "en"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = i18nextConfig.i18n.defaultLocale;
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AgeVerification />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
