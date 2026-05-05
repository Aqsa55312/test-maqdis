import AgNavbar from "@/components/antigravity/AgNavbar";
import AgHero from "@/components/antigravity/AgHero";
import AgFeatures from "@/components/antigravity/AgFeatures";
import AgFooter from "@/components/antigravity/AgFooter";

export default function AntigravityPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-[family-name:var(--font-jakarta)] selection:bg-violet-500/30">
      <AgNavbar />
      <main>
        <AgHero />
        <AgFeatures />
        
        {/* Simple CTA Section */}
        <section className="py-24 relative z-10 border-t border-white/5 bg-[#12121a]/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Ready to Defy Gravity?</h2>
            <p className="text-xl text-zinc-400 mb-10">Let's build something extraordinary together.</p>
            <button className="bg-violet-600 hover:bg-violet-500 text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
      <AgFooter />
    </div>
  );
}
