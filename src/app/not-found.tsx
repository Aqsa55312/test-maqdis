import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-500">
        <AlertCircle size={48} />
      </div>
      <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">404 - Tidak Ditemukan</h2>
      <p className="text-slate-500 max-w-md mx-auto mb-8 text-lg">
        Maaf, halaman atau produk yang Anda cari tidak dapat ditemukan di sistem kami.
      </p>
      <Link 
        href="/"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1"
      >
        Kembali ke Hafalan
      </Link>
    </div>
  );
}
