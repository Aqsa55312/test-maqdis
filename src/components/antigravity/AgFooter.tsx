import Link from "next/link";

export default function AgFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f] relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link href="/antigravity" className="font-extrabold text-2xl tracking-tighter text-white">
            ANTI<span className="text-violet-500">GRAVITY.</span>
          </Link>
          <p className="text-zinc-400 mt-2 text-sm font-medium">
            Defying limits, one pixel at a time.
          </p>
          <p className="text-zinc-500 mt-6 text-xs">
            © 2026 Zurisky Aqsa Firmansyah. Powered by Antigravity.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="https://instagram.com/zurisky" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-violet-400 transition-colors">
            Instagram
          </a>
          <a href="https://linkedin.com/in/zurisky" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-violet-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/zurisky" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-violet-400 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
