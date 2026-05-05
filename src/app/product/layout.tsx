import Sidebar from "@/components/hamim/Sidebar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1a1a] font-[family-name:var(--font-inter)]">
      <Sidebar />
      <div className="md:ml-64 flex flex-col min-h-screen">
        <main className="flex-grow p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
