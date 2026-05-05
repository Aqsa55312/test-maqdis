"use client";
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", newUser: 4000, activeUser: 2400 },
  { name: "Feb", newUser: 3000, activeUser: 1398 },
  { name: "Mar", newUser: 2000, activeUser: 9800 },
  { name: "Apr", newUser: 2780, activeUser: 3908 },
  { name: "Mei", newUser: 1890, activeUser: 4800 },
  { name: "Jun", newUser: 2390, activeUser: 3800 },
  { name: "Jul", newUser: 3490, activeUser: 4300 },
  { name: "Agu", newUser: 4000, activeUser: 2400 },
  { name: "Sep", newUser: 3000, activeUser: 1398 },
  { name: "Okt", newUser: 2000, activeUser: 9800 },
  { name: "Nov", newUser: 2780, activeUser: 3908 },
  { name: "Des", newUser: 3490, activeUser: 4300 },
];

export default function AreaChart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800">Statistik User Hamim Dalam Satu Tahun</h3>
        <select className="bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-lg px-3 py-1.5 outline-none focus:border-orange-500">
          <option>2024</option>
          <option>2025</option>
        </select>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area type="monotone" dataKey="activeUser" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorActive)" />
            <Area type="monotone" dataKey="newUser" stroke="#60a5fa" strokeWidth={3} fillOpacity={1} fill="url(#colorNew)" />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
