import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProyekPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl font-bold mb-6">Proyek Kami</h1>
          <p className="text-slate-400 max-w-2xl mb-12">
            Berikut adalah beberapa karya terbaik yang telah kami kerjakan menggunakan teknologi web terkini.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="glass-effect rounded-2xl overflow-hidden group">
                <div className="h-48 bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Proyek #{item}</h3>
                  <p className="text-slate-400 text-sm">Sistem dashboard dan analisis data untuk klien perusahaan.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
