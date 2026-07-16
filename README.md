# AquaNime Landing Page

Landing page komunitas AquaNime — dibangun dengan **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Struktur folder

```
src/
├── app/
│   ├── layout.tsx        # Root layout, font (Poppins + Inter), metadata
│   ├── page.tsx          # Halaman utama — merangkai semua section
│   └── globals.css       # Design token warna brand + util
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Header + nav responsif (hamburger di mobile)
│   │   └── Footer.tsx     # Footer lengkap: link, regional, email, sosmed
│   └── sections/
│       ├── Hero.tsx              # Hero + statistik
│       ├── AboutSection.tsx      # "Menghubungkan Kreativitas Tanpa Batas"
│       ├── EcosystemSection.tsx  # 5 kartu ekosistem
│       ├── ArticlesSection.tsx   # Bento grid artikel (placeholder)
│       ├── EventsSection.tsx     # Kalender event (placeholder)
│       ├── TestimonialsSection.tsx
│       ├── PartnersSection.tsx
│       └── CTASection.tsx        # "Build The Future With Us"
└── data/
    └── site.ts           # Semua konten (nav, stats, footer, dll) terpusat

public/
├── logos/    # Logo AquaNime & lockup AquaNime x Animae
├── images/   # Ilustrasi karakter, banner, background
└── icons/    # Icon statistik & sosial media
```

## Catatan

- **Konten placeholder**: kartu di section Wawasan, Kalender Event, Testimoni, dan Partner masih berupa kotak kosong — tinggal isi gambar/teks aslinya.
- **Warna brand** didefinisikan sebagai design token di `globals.css` (cyan `#00a8e8`, navy `#0f172a`, dll), diambil langsung dari file desain.
- **Semua teks/link konten** terpusat di `src/data/site.ts` — ubah di sana, gak perlu sentuh komponen.
- **Nav** memakai anchor link ke section di halaman ini. Kalau nanti mau jadi halaman terpisah, tinggal ganti `href` di `site.ts` & tambah route.
