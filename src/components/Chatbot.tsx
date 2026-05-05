"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Halo! Ada yang bisa saya bantu hari ini? Anda bisa menanyakan tentang layanan, proyek, atau cara menghubungi kami.", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string) => {
    const userMsg = text.trim() || input.trim();
    if (!userMsg) return;

    // Add user message
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");

    // Simulate bot thinking and reply with templates
    setTimeout(() => {
      let botReply = "Maaf, saya hanya bot sederhana. Silakan hubungi tim kami via halaman Kontak untuk pertanyaan lebih lanjut.";
      
      const lowerMsg = userMsg.toLowerCase();
      if (lowerMsg.includes("layanan") || lowerMsg.includes("service") || lowerMsg.includes("fitur")) {
        botReply = "Kami menawarkan berbagai layanan termasuk Pengembangan Web menggunakan Next.js, Optimasi SEO, dan Integrasi API pihak ketiga. Cek halaman 'Layanan' untuk detailnya!";
      } else if (lowerMsg.includes("proyek") || lowerMsg.includes("portfolio") || lowerMsg.includes("karya")) {
        botReply = "Kami telah membangun berbagai sistem dashboard, aplikasi web responsif, dan e-commerce. Anda bisa melihat beberapa karya kami di halaman 'Proyek'.";
      } else if (lowerMsg.includes("kontak") || lowerMsg.includes("hubungi") || lowerMsg.includes("pesan")) {
        botReply = "Anda dapat mengirimkan pesan langsung kepada tim kami melalui form di halaman 'Kontak'. Kami akan membalas secepatnya!";
      } else if (lowerMsg.includes("halo") || lowerMsg.includes("hi") || lowerMsg.includes("hai")) {
        botReply = "Halo! Silakan ketik 'layanan', 'proyek', atau 'kontak' untuk mengetahui lebih lanjut tentang kami.";
      } else if (lowerMsg.includes("harga") || lowerMsg.includes("biaya")) {
        botReply = "Untuk informasi harga, kami perlu mengetahui detail kebutuhan proyek Anda terlebih dahulu. Silakan diskusikan dengan kami via halaman Kontak.";
      }

      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    }, 600);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-110 transition-all z-50 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chatbot Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 transition-all origin-bottom-right duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-800/50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <MessageSquare size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Asisten Virtual</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-slate-400">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto flex flex-col gap-3 custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.isBot 
                    ? "bg-slate-800 text-slate-200 rounded-tl-sm" 
                    : "bg-blue-600 text-white rounded-tr-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 pb-2 flex gap-2 overflow-x-auto custom-scrollbar no-scrollbar hide-scroll-bar">
          <button onClick={() => handleSend("Apa layanan kalian?")} className="whitespace-nowrap text-xs bg-slate-800 hover:bg-slate-700 text-blue-400 px-3 py-1.5 rounded-full transition-colors border border-slate-700">Layanan</button>
          <button onClick={() => handleSend("Lihat proyek")} className="whitespace-nowrap text-xs bg-slate-800 hover:bg-slate-700 text-blue-400 px-3 py-1.5 rounded-full transition-colors border border-slate-700">Proyek</button>
          <button onClick={() => handleSend("Cara kontak?")} className="whitespace-nowrap text-xs bg-slate-800 hover:bg-slate-700 text-blue-400 px-3 py-1.5 rounded-full transition-colors border border-slate-700">Kontak</button>
        </div>

        {/* Input */}
        <div className="p-3 border-t border-slate-800">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(""); }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              className="flex-1 bg-slate-950 border border-slate-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
            >
              <Send size={16} className="translate-x-[1px]" />
            </button>
          </form>
        </div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
