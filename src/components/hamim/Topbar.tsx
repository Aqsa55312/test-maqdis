export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 md:px-10 sticky top-0 z-40">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
      
      <div className="flex items-center gap-4">
        <span className="hidden md:block font-medium text-slate-600">Admin 02. Hamim</span>
        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shadow-md shadow-orange-500/20">
          H
        </div>
      </div>
    </header>
  );
}
