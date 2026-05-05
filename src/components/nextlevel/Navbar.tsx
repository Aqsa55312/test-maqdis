"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Beranda", href: "#" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proyek", href: "#proyek" },
    { label: "Kontak", href: "#kontak" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter text-slate-800 font-[family-name:var(--font-jakarta)]">
          NEXT<span className="text-blue-600">LEVEL.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600 font-[family-name:var(--font-jakarta)]">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="#kontak" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-600/20">
            Hubungi Kami
          </Link>
        </nav>

        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 font-[family-name:var(--font-jakarta)] shadow-xl">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-slate-600 font-medium py-2 border-b border-slate-100" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
