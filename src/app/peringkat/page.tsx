import { Trophy, Medal, Star } from "lucide-react";

export default function PeringkatPage() {
  const rankings = [
    { rank: 1, name: "Ahmad", score: 2500, avatar: "bg-orange-500" },
    { rank: 2, name: "Fatimah", score: 2350, avatar: "bg-blue-500" },
    { rank: 3, name: "Umar", score: 2100, avatar: "bg-green-500" },
    { rank: 4, name: "Aisyah", score: 1950, avatar: "bg-purple-500" },
    { rank: 5, name: "Ali", score: 1800, avatar: "bg-rose-500" },
  ];

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <header className="mb-10 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
          <Trophy size={24} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Peringkat</h1>
          <p className="text-slate-500">Papan peringkat penghafal Al-Quran minggu ini.</p>
        </div>
      </header>

      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <div className="flex flex-col gap-4">
          {rankings.map((user) => (
            <div key={user.rank} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="w-8 flex justify-center">
                {user.rank === 1 ? (
                  <Medal size={28} className="text-yellow-500" />
                ) : user.rank === 2 ? (
                  <Medal size={28} className="text-slate-400" />
                ) : user.rank === 3 ? (
                  <Medal size={28} className="text-amber-600" />
                ) : (
                  <span className="text-xl font-bold text-slate-400">{user.rank}</span>
                )}
              </div>
              
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${user.avatar}`}>
                {user.name.charAt(0)}
              </div>
              
              <div className="flex-grow">
                <h3 className="font-bold text-slate-800">{user.name}</h3>
                <p className="text-sm text-slate-500">Santri Reguler</p>
              </div>
              
              <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl">
                <Star size={16} className="text-orange-500 fill-orange-500" />
                <span className="font-bold text-orange-600">{user.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
