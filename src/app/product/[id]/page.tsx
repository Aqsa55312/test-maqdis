import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, CheckCircle2, BookOpen, Star, Award, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";

const icons: any = { BookOpen, Star, Award };

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const Icon = icons[product.icon] || BookOpen;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
          <ArrowLeft size={16} />
          Hafalan
        </Link>
        <ChevronRight size={14} />
        <span className="text-slate-800 font-medium truncate">{product.name}</span>
      </nav>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center mb-8 border-b border-slate-100 pb-8">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 flex-shrink-0 ${product.color}`}>
            <Icon size={36} />
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white ${product.badge_color} tracking-wider`}>
                {product.badge}
              </span>
              {product.duration && (
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  {product.duration}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
              {product.name}
            </h1>
          </div>
        </div>

        {/* Details section */}
        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-lg font-bold text-slate-800 mb-3">Tentang Program</h2>
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Yang Anda Dapatkan</h2>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Pricing Card */}
          <div className="bg-[#f9f9f9] p-6 rounded-2xl border border-slate-100 h-fit">
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Investasi</p>
            <p className="text-3xl font-extrabold text-slate-800 mb-6">{product.price}</p>
            
            <button className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all hover:-translate-y-1 ${
              product.type === "free" ? "bg-orange-500 shadow-orange-500/30 hover:bg-orange-600" : "bg-slate-800 shadow-slate-800/30 hover:bg-slate-900"
            }`}>
              {product.type === "free" ? "Mulai Sekarang" : "Daftar Sekarang"}
            </button>
            
            <p className="text-xs text-center text-slate-400 mt-4">
              {product.type === "free" ? "100% Gratis selamanya" : "Pembayaran aman & terenkripsi"}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
