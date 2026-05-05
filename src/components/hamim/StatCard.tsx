import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  subtitle: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({ title, subtitle, value, icon: Icon, color }: StatCardProps) {
  return (
    <div className={`${color} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden`}>
      <div className="absolute right-[-10%] top-[-10%] opacity-20 transform rotate-12 scale-150">
        <Icon size={120} />
      </div>
      <div className="relative z-10">
        <h3 className="font-medium text-white/90 text-sm mb-1">{title}</h3>
        <p className="text-white/70 text-xs mb-4">{subtitle}</p>
        <p className="text-3xl font-extrabold tracking-tight">{value}</p>
      </div>
    </div>
  );
}
