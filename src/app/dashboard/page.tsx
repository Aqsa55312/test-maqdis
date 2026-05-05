import { Users, Key, Building2 } from "lucide-react";
import StatCard from "@/components/hamim/StatCard";
import AreaChart from "@/components/hamim/AreaChart";
import SidePanel from "@/components/hamim/SidePanel";

export default function DashboardPage() {
  const stats = [
    { title: "Total User", subtitle: "Keseluruhan", value: "50.050", icon: Users, color: "bg-orange-400" },
    { title: "Kode Aktivasi", subtitle: "Tersedia", value: "63.123", icon: Key, color: "bg-green-400" },
    { title: "Total Pendapatan / Tahun", subtitle: "Tahun 2025", value: "Rp.17.144.000", icon: Building2, color: "bg-blue-500" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AreaChart />
        </div>
        <div>
          <SidePanel />
        </div>
      </div>
    </div>
  );
}
