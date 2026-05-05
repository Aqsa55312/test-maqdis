"use client";
import Link from "next/link";
import { LayoutDashboard, BarChart2, BookOpen, AppWindow, Menu, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white border-r border-slate-100 z-50">
      <div className="p-6 pb-2 border-b border-slate-100">
        <Link href="/dashboard" className="text-2xl font-bold text-orange-500 tracking-tight">
          HAMIM
        </Link>
        <p className="text-xs text-slate-500 mt-1 font-medium">Hafalan Al-Quran</p>
      </div>
      
      <nav className="flex-grow p-4 flex flex-col gap-2 overflow-y-auto">
        <Link href="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${pathname === "/dashboard" ? "bg-orange-50 text-orange-600" : "text-slate-600 hover:bg-slate-50 hover:text-orange-500"}`}>
          <LayoutDashboard size={20} className={pathname === "/dashboard" ? "text-orange-500" : "text-slate-400"} />
          Dashboard
        </Link>
        <Link href="/dashboard/statistik" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-slate-600 hover:bg-slate-50 hover:text-orange-500`}>
          <BarChart2 size={20} className="text-slate-400" />
          Statistik
        </Link>
        <Link href="/dashboard/setoran" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-slate-600 hover:bg-slate-50 hover:text-orange-500`}>
          <BookOpen size={20} className="text-slate-400" />
          Setoran
        </Link>
        
        <div className="mt-4 mb-2 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Apps And Content</div>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 font-medium cursor-pointer hover:bg-slate-50">
          <AppWindow size={20} className="text-slate-400" />
          <span>Kelola Apps</span>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 transition-colors font-medium">
          <LogOut size={20} />
          Keluar
        </button>
      </div>
    </aside>
  );
}
