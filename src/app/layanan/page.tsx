import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayananPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-slate-400 max-w-2xl">
            Kami menawarkan berbagai layanan pengembangan aplikasi web dengan teknologi Next.js untuk memastikan performa yang cepat, SEO yang baik, dan pengalaman pengguna yang luar biasa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Pengembangan Web", desc: "Membangun website responsif dan modern." },
              { title: "Optimasi SEO", desc: "Meningkatkan visibilitas website di mesin pencari." },
              { title: "Integrasi API", desc: "Menghubungkan layanan pihak ketiga dengan aman." }
            ].map((service, idx) => (
              <div key={idx} className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
