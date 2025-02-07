'use client'
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
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
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
