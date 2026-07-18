# 🌌 AquaNime Portal V2

[![Next.js](https://img.shields.io/badge/Next.js-16.0.0-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)

Portal Web Terpadu Komunitas **AquaNime** — Hub digital bagi kreator, cosplayer, dan pencinta kultur pop Jepang di Indonesia. Dibangun dengan fokus utama pada performa tinggi, visual premium bernuansa *Midnight Sapphire*, dan transisi interaktif yang dinamis.

---

## 📂 Struktur Dokumentasi (Wajib Dibaca)

Untuk mempermudah kolaborasi pengembangan, semua dokumentasi arsitektur dan panduan integrasi backend telah dipisahkan ke dalam folder `docs/`:

* 📖 **[Panduan Handoff Backend](docs/backend-handoff.md)**: Instruksi lengkap integrasi database, skema tabel SQL, autentikasi user, formulir kontak, dan referensi environment variables.
* 🛡️ **[Dokumentasi Integrasi Iframe & API Berita](docs/iframe-integration.md)**: Penjelasan alur cross-origin, setup header Content-Security-Policy (CSP) `frame-ancestors`, CORS, dan parameter sandbox iframe.
* 🌐 **[Spesifikasi API OpenAPI (Swagger)](docs/openapi.yaml)**: File OpenAPI 3.0 YAML yang merangkum semua skema request-response endpoint API yang dibutuhkan oleh frontend.

---

## 🛠️ Fitur Halaman & State Saat Ini

| Halaman/Komponen | Deskripsi Fitur | Status Integrasi |
|:---|:---|:---|
| **Beranda (`/`)** | Landing page interaktif lengkap dengan Hero Section, Bento Grid Artikel, Kalender Event, dan Testimoni. | ✨ Visual Ready (Mock Data) |
| **Tentang Kami (`/tentang`)** | Visi, misi, dan tim pengembang. | ⏳ Coming Soon |
| **Ekosistem (`/ekosistem`)** | Portal pilar ekosistem (Komunitas, Cosplay, Media, dsb). | ⏳ Coming Soon |
| **Proyek (`/proyek`)** | Showcase proyek kreatif dengan per-card image carousel (auto-slide, arrows, & dots indicators) beserta tabs filter status. | ✨ Visual Ready (Mock Data) |
| **Kontak (`/kontak`)** | Formulir pesan interaktif dengan panel informasi media sosial yang menggunakan ikon SVG inline premium. | ✨ Front-only (Mock Submit State) |
| **Autentikasi (`/signin` & `/signup`)** | Tampilan split-layout responsif dengan visual character penuh di background sebelah kanan dan form di area bayangan sebelah kiri (termasuk validasi mismatch password & eye-toggle). | ✨ Form Validation Ready |

---

## 🚀 Memulai Pengembangan Lokal

### Prerequisites
Pastikan Anda telah menginstal **Node.js (LTS)** di komputer Anda.

### 1. Kloning Repositori
```bash
git clone https://github.com/Nazca13/Aquanime_V2.git
cd Aquanime_V2
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Jalankan Dev Server
```bash
npm run dev
```
Aplikasi akan berjalan secara otomatis di [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Production
```bash
npm run build
npm run start
```

---

## 🎨 Token & Arsitektur Desain
* **Warna Utama**: Didominasi oleh `navy-950` (`#030712` / `#0b1329`) sebagai latar belakang gelap yang elegan.
* **Warna Aksen**: Menggunakan `brand-cyan` (`#00a8e8`) dan `brand-cyan-light` (`#38bdf8`) untuk tombol, sorotan teks, hover, dan indikator progres.
* **Tipografi**: Menggunakan font **Poppins** (untuk Headings) dan **Inter** (untuk body text) yang dikonfigurasi melalui Next.js Fonts di `src/app/layout.tsx`.
* **Desain Glassmorphism**: Pemanfaatan `backdrop-blur-sm` dipadukan border putih transparan (`border-white/20`) untuk menciptakan nuansa antarmuka modern yang melayang di atas ilustrasi background.
