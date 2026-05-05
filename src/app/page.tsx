import Navbar from "@/components/nextlevel/Navbar";
import Hero from "@/components/nextlevel/Hero";
import Footer from "@/components/nextlevel/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-[family-name:var(--font-jakarta)]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
