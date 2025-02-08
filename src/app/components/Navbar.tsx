'use client';

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18next from "@/i18n"; // Import from initialized i18n.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const changeLanguage = (lang: string) => {
    if (!i18next.isInitialized) {
      console.warn("i18next is not initialized yet.");
      return;
    }
    i18next.changeLanguage(lang);
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">Shamrock Spirits</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/#about" className="hover:text-gray-400">About</Link>
          <Link href="/#products" className="hover:text-gray-400">Products</Link>
          <Link href="/#contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Language Toggle (Desktop) */}
        <div className="hidden md:flex space-x-3">
          <button onClick={() => changeLanguage("en")} className="px-2 py-1 rounded bg-gray-700">
            EN
          </button>
          <button onClick={() => changeLanguage("vi")} className="px-2 py-1 rounded bg-gray-700">
            VI
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black flex flex-col space-y-4 p-4">
          <Link href="/" className="hover:text-gray-400" onClick={handleLinkClick}>Home</Link>
          <Link href="/#about" className="hover:text-gray-400" onClick={handleLinkClick}>About</Link>
          <Link href="/#products" className="hover:text-gray-400" onClick={handleLinkClick}>Products</Link>
          <Link href="/#contact" className="hover:text-gray-400" onClick={handleLinkClick}>Contact</Link>

          {/* Language Toggle (Mobile) */}
          <div className="flex space-x-3">
            <button onClick={() => changeLanguage("en")} className="px-2 py-1 rounded bg-gray-700">
              EN
            </button>
            <button onClick={() => changeLanguage("vi")} className="px-2 py-1 rounded bg-gray-700">
              VI
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
