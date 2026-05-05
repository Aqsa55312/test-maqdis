# Zurisky Aqsa - Next.js Landing Page & Portfolio

Proyek ini adalah sebuah aplikasi web modern yang dibangun menggunakan **Next.js 14 (App Router)**, **Tailwind CSS**, dan **Lucide React**. Website ini didesain sebagai *landing page* dan *portfolio* yang responsif, cepat, dan elegan.

## Fitur Utama

- **Modern & Responsive UI**: Menggunakan Tailwind CSS untuk *styling* dengan pendekatan *mobile-first*, efek *glassmorphism*, *gradient*, dan animasi interaktif.
- **Server-Side Rendering (SSR)**: Menggunakan fitur App Router terbaru dari Next.js untuk performa yang optimal dan SEO-*friendly*.
- **Asisten Virtual (Chatbot)**: Dilengkapi dengan fitur *chatbot* mengambang yang dapat merespons otomatis berdasarkan kata kunci tertentu untuk membantu pengunjung menavigasi layanan, proyek, dan kontak.
- **Multi-Halaman**: Terdapat halaman Beranda (`/`), Layanan (`/layanan`), Proyek (`/proyek`), dan Kontak (`/kontak`).
- **Komponen Kustom**: Komponen *Navbar*, *Hero*, dan *Footer* dibuat khusus agar sesuai dengan *design system* yang modern.
- **Ikon Kustom**: Menggunakan kombinasi dari `lucide-react` dan desain SVG kustom untuk tampilan yang lebih rapi (terutama pada ikon media sosial).

## Teknologi yang Digunakan

- [Next.js 14](https://nextjs.org/) (React Framework)
- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Lucide React](https://lucide.dev/) (Icons)
- [TypeScript](https://www.typescriptlang.org/)

## Cara Menjalankan Secara Lokal

1. Pastikan Anda telah menginstal Node.js di komputer Anda.
2. Buka terminal dan arahkan ke direktori proyek ini.
3. Instal semua dependensi:
   ```bash
   npm install
   ```
4. Jalankan *development server*:
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## Cara Build untuk Produksi

Untuk melakukan proses *build* proyek agar siap dideploy ke Vercel, Netlify, atau layanan hosting lainnya:

```bash
npm run build
```

---
*Dibuat oleh Zurisky Aqsa Firmansyah © 2026.*
