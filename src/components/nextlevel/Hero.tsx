import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 font-[family-name:var(--font-jakarta)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-widest mb-8">
            SOLUSI MODERN NEXT.JS 14
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6">
            Kembangkan Bisnis<br />
            <span className="text-blue-600">Tanpa Batas.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Membangun aplikasi web yang super cepat dengan teknologi Server-Side Rendering (SSR). Responsif di semua perangkat dan siap untuk skalabilitas tinggi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group">
              Mulai Proyek <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold transition-all">
              Pelajari Fitur
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
            <Image 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" 
              alt="Team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
