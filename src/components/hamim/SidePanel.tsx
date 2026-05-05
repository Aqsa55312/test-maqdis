export default function SidePanel() {
  const panels = [
    { title: "User Hamim Dalam 7 Hari Terakhir", value: "127", label: "User Baru", color: "bg-blue-400" },
    { title: "User Hamim Sedang Aktif", value: "12", label: "User Aktif", color: "bg-green-400" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {panels.map((panel, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-800 mb-6 max-w-[200px] leading-snug">{panel.title}</h3>
          <div className="flex items-end justify-between">
            <p className="text-5xl font-extrabold text-slate-800">{panel.value}</p>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${panel.color}`}></span>
              <span className="text-sm font-medium text-slate-500">{panel.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
