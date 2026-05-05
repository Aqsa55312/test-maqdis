import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zurisky Aqsa | Web Developer",
  description: "Membangun aplikasi web yang super cepat dengan teknologi Server-Side Rendering (SSR).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-50`}>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
