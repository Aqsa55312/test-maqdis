import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontakPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Hubungi Kami</h1>
          <p className="text-slate-400 text-center mb-12">
            Punya pertanyaan atau ingin memulai proyek baru bersama kami? Silakan kirimkan pesan Anda.
          </p>
          
          <div className="glass-effect p-8 rounded-2xl">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-slate-300">Nama</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Nama Anda" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                  <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="email@contoh.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Pesan</label>
                <textarea rows={5} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ceritakan tentang proyek Anda..."></textarea>
              </div>
              
              <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto self-end">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
