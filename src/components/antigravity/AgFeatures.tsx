import { Zap, Shield, Globe, Cpu } from "lucide-react";

export default function AgFeatures() {
  const features = [
    { icon: Zap, title: "Blazing Fast", description: "Sub-second load times with SSR.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { icon: Shield, title: "Secure by Default", description: "Enterprise-grade security.", color: "text-green-400", bg: "bg-green-400/10" },
    { icon: Globe, title: "Global Scale", description: "Deploy worldwide instantly.", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: Cpu, title: "AI-Powered", description: "Intelligent features seamlessly.", color: "text-violet-400", bg: "bg-violet-400/10" }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Why Antigravity?</h2>
          <p className="text-zinc-400 text-lg">Cutting-edge technology with bold design.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-[#12121a] border border-white/5 rounded-2xl p-8 hover:bg-[#1a1a24] transition-colors group">
                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} className={feature.color} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
