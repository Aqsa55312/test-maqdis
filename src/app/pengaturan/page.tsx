import { Settings, User, Bell, Shield, Smartphone } from "lucide-react";

export default function PengaturanPage() {
  const sections = [
    {
      title: "Akun",
      icon: User,
      items: ["Profil Pribadi", "Kata Sandi", "Metode Pembayaran"]
    },
    {
      title: "Notifikasi",
      icon: Bell,
      items: ["Pengingat Hafalan", "Pembaruan Program", "Pesan dari Mentor"]
    },
    {
      title: "Privasi & Keamanan",
      icon: Shield,
      items: ["Kebijakan Privasi", "Syarat dan Ketentuan", "Perangkat Terhubung"]
    },
    {
      title: "Aplikasi",
      icon: Smartphone,
      items: ["Tema Gelap (Akan Datang)", "Bahasa", "Versi 1.0.0"]
    }
  ];

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <header className="mb-10 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
          <Settings size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Pengaturan</h1>
          <p className="text-slate-500">Kelola preferensi dan pengaturan akun Anda.</p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-bold text-slate-800">{section.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-600 group-hover:text-orange-500 transition-colors font-medium">
                      {item}
                    </span>
                    <span className="text-slate-300 group-hover:text-orange-500 transition-colors">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
