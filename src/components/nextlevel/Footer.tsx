import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white font-[family-name:var(--font-jakarta)]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link href="/" className="font-extrabold text-2xl tracking-tighter text-slate-800">
            NEXT<span className="text-blue-600">LEVEL.</span>
          </Link>
          <p className="text-slate-500 mt-2 text-sm">
            © 2026 Zurisky Aqsa Firmansyah. Made with Next.js.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="https://instagram.com/zurisky" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
            Instagram
          </a>
          <a href="https://linkedin.com/in/zurisky" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/zurisky" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
