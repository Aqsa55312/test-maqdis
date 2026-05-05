"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-effect mb-6 border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-blue-200 uppercase">
                SOLUSI MODERN NEXT.JS 14
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Kembangkan Bisnis <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                Tanpa Batas.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Membangun aplikasi web yang super cepat dengan teknologi Server-Side Rendering (SSR). Responsif di semua perangkat dan siap untuk skalabilitas tinggi.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/kontak"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transform hover:-translate-y-1"
              >
                Mulai Proyek
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/layanan"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-semibold text-slate-300 hover:text-white glass-effect hover:bg-slate-800/60 transition-all"
              >
                Pelajari Fitur
              </Link>
            </div>
          </div>

          {/* Media/Image */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none relative z-10">
            <div className="relative rounded-2xl overflow-hidden glass-effect p-2 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                  alt="Team collaboration using Next.js technology"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              
              {/* Floating UI Element */}
              <div className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl flex items-center gap-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Status Sistem</p>
                  <p className="text-sm font-bold text-white">Online & Super Cepat</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
