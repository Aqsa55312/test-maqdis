"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Layanan", href: "/layanan" },
    { label: "Proyek", href: "/proyek" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-bold text-2xl tracking-tighter text-white group-hover:text-slate-200 transition-colors">
            Zurisky
          </span>
          <span className="font-bold text-2xl tracking-tighter text-blue-500">
            Aqsa.
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/kontak"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-effect border-t border-slate-800 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-center font-medium mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
