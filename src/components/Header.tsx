"use client";

import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/avizeler", label: "Avizeler" },
    { href: "/lambalar", label: "Lambalar" },
    { href: "/led-aydinlatma", label: "LED Aydınlatma" },
    { href: "/dis-mekan", label: "Dış Mekan" },
    { href: "/hakkimizda", label: "Hakkımızda" },
  ];

  return (
    <header className="fixed top-0 w-full bg-coal/95 backdrop-blur-md z-50 border-b border-ivory/10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-coal font-playfair font-bold text-xl">M</span>
            </div>
            <span className="text-ivory font-playfair font-semibold text-xl">
              Marka Aydınlatma
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ivory/90 hover:text-gold transition-colors duration-200 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sapphire hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="text-ivory/90 hover:text-gold transition-colors duration-200"
              aria-label="Arama"
            >
              <FiSearch className="w-5 h-5" />
            </button>
            <button
              className="text-ivory/90 hover:text-gold transition-colors duration-200"
              aria-label="Kullanıcı hesabı"
            >
              <FiUser className="w-5 h-5" />
            </button>
            <button
              className="relative text-ivory/90 hover:text-gold transition-colors duration-200"
              aria-label="Sepet"
            >
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-gold text-coal text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-ivory/90 hover:text-gold transition-colors duration-200"
              aria-label="Menü"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-coal/95 backdrop-blur-md z-40 animate-fade-in">
          <nav className="container mx-auto px-4 py-8">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-ivory/90 hover:text-gold transition-colors duration-200 text-2xl font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}