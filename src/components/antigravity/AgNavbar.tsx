"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function AgNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/antigravity" },
    { label: "Services", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/antigravity" className="font-extrabold text-2xl tracking-tighter text-white">
          ANTI<span className="text-violet-500">GRAVITY.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-zinc-400">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="#" className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(139,92,246,0.5)]">
            Get Started
          </Link>
        </nav>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#12121a] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-zinc-400 hover:text-white font-medium py-2 border-b border-white/5" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
