import Link from "next/link";
import { BookOpen, Star, Award } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    badge: string;
    badge_color: string;
    circle_number: string;
    description: string;
    price: string;
    icon: string;
    color: string;
  };
}

const icons: any = {
  BookOpen,
  Star,
  Award
};

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = icons[product.icon] || BookOpen;

  return (
    <Link href={`/product/${product.id}`} className="block group">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all h-full flex flex-col relative overflow-hidden group-hover:border-orange-200">
        <div className="flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${product.color}`}>
            <Icon size={24} />
          </div>
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white ${product.badge_color} tracking-wider`}>
            {product.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-orange-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>

        <div className="flex justify-between items-end pt-4 border-t border-slate-100 mt-auto">
          <div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">Harga</p>
            <p className="font-bold text-lg text-slate-800">{product.price}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
            <span className="font-arabic text-lg font-bold">{product.circle_number}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
