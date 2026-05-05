import { ArrowRight, Zap, Globe } from "lucide-react";
import Image from "next/image";

export default function AgHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/30 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <div className="flex flex-col items-start space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-bold text-violet-300 tracking-wider">NEXT-GEN DIGITAL EXPERIENCE</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1]">
            <span className="text-white block">Break Free From</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-300 to-violet-600">Gravity.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            We craft high-performance web experiences that defy limits. Blazing fast, visually stunning, and built to scale.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:-translate-y-1">
              Launch Project <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md">
              Explore Services
            </button>
          </div>
        </div>

        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
            <Image 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80"
              alt="Futuristic space visual"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-8 top-1/4 bg-[#12121a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-[bounce_4s_infinite]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-medium">Performance Score</p>
                <p className="text-xl font-bold text-white">99/100</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-8 bottom-1/4 bg-[#12121a]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-[bounce_5s_infinite_reverse]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-medium">Global Uptime</p>
                <p className="text-xl font-bold text-white">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
