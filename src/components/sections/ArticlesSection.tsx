"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * DOKUMENTASI INTEGRASI BERITA U
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * Bagian ini dirancang untuk menampilkan 6 berita terbaru secara dinamis dari
 * website berita eksternal berbasis Next.js milik AquaNime.
 * 
 * CARA MENGHUBUNGKAN:
 * 1. Masukkan URL endpoint API berita Anda pada konstanta `NEWS_API_URL` di bawah.
 *    Contoh: "https://nama-web-berita-anda.com/api/news"
 * 2. Jika `NEWS_API_URL` dibiarkan kosong (""), komponen otomatis menggunakan
 *    data lokal default (Mock Data) agar website tetap stabil & tidak kosong.
 * 
 * ─────────────────────────────────────────────────────────────────────────────
 * LANGKAH IMPLEMENTASI DI SISI WEBSITE BERITA (NEXT.JS EKSTERNAL):
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * A. Buat API Route baru di Project Web Berita Anda di: `src/app/api/news/route.ts`
 * 
 *    import { NextResponse } from "next/server";
 * 
 *    export async function GET() {
 *      // Ambil data terbaru dari database atau headless CMS Anda
 *      const latestNews = [
 *        {
 *          id: "1",
 *          title: "AquaNime Fest 2025: Rayakan Budaya Pop-Kultur Jepang Bersama Komunitas",
 *          excerpt: "Event tahunan terbesar AquaNime kembali hadir dengan panggung cosplay...",
 *          category: "Event",
 *          date: "15 Jan 2025",
 *          readTime: "4 min read",
 *          image: "https://nama-web-berita-anda.com/images/news-1.png", // URL gambar penuh
 *          url: "https://nama-web-berita-anda.com/posts/aquanime-fest-2025" // URL artikel penuh
 *        },
 *        // ... isi sampai maksimal 6 postingan terbaru
 *      ];
 * 
 *      return NextResponse.json(latestNews, {
 *        headers: {
 *          // Izinkan domain portal AquaNime untuk mengambil data (CORS Bypass)
 *          "Access-Control-Allow-Origin": "*",
 *          "Access-Control-Allow-Methods": "GET, OPTIONS",
 *          "Access-Control-Allow-Headers": "Content-Type",
 *        }
 *      });
 *    }
 * 
 * B. Konfigurasi Iframe Header (Wajib agar Berita Bisa Dibuka dalam Modal Portal):
 *    Secara default, browser memblokir situs Anda dimuat dalam iframe (untuk mencegah clickjacking).
 *    Di `next.config.js` website berita Anda, tambahkan konfigurasi headers berikut:
 * 
 *    const nextConfig = {
 *      async headers() {
 *        return [
 *          {
 *            // Terapkan izin frame ke seluruh halaman artikel berita Anda
 *            source: "/posts/:path*", 
 *            headers: [
 *              {
 *                key: "Content-Security-Policy",
 *                value: "frame-ancestors 'self' https://aquanime.org http://localhost:3000",
 *              },
 *            ],
 *          },
 *        ];
 *      }
 *    };
 *    
 *    module.exports = nextConfig;
 */

// Ubah URL ini ke URL endpoint API web berita eksternal Anda (Next.js)
const NEWS_API_URL = "";

interface Article {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
}

const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    title: "AquaNime Fest 2025: Rayakan Budaya Pop-Kultur Jepang Bersama Komunitas",
    excerpt: "Event tahunan terbesar AquaNime kembali hadir dengan panggung cosplay, pameran kreator lokal, turnamen game, hingga diskusi industri kreatif.",
    category: "Event",
    date: "Jan 15, 2025",
    readTime: "4 min read",
    image: "/images/gallery/image-galery/IMG_9240 1.png",
    url: "https://aquanime.org/news/aquanime-fest-2025",
  },
  {
    id: 2,
    title: "Mengintip Keseruan Weekend Cosplay Gathering Terbesar Awal Tahun Ini",
    excerpt: "Lebih dari ratusan cosplayer dari berbagai daerah berkumpul untuk membagikan antusiasme mereka, melakukan sesi pemotretan, dan berjejaring.",
    category: "Gathering",
    date: "Feb 02, 2025",
    readTime: "3 min read",
    image: "/images/gallery/image-galery/IMG_9260 1.png",
    url: "https://aquanime.org/news/cosplay-gathering-2025",
  },
  {
    id: 3,
    title: "Bagaimana Membangun Karir di Industri Kreatif sebagai Digital Artist",
    excerpt: "Rangkuman dari kelas seni digital bersama para ilustrator profesional yang berbagi tips seputar portofolio, klien, dan adaptasi teknologi baru.",
    category: "Workshop",
    date: "Feb 20, 2025",
    readTime: "5 min read",
    image: "/images/gallery/image-galery/IMG_1012 1.png",
    url: "https://aquanime.org/news/karir-digital-artist",
  },
  {
    id: 4,
    title: "AquaNime Podcast: Menjelajahi Sejarah Musik Budaya Jepang",
    excerpt: "Di episode terbaru podcast kami, host dan bintang tamu mengupas tuntas transformasi lagu anime dari era J-Pop klasik hingga modern.",
    category: "Media",
    date: "Mar 05, 2025",
    readTime: "8 min read",
    image: "/images/gallery/image-galery/IMG-20250122-WA0081 1.png",
    url: "https://aquanime.org/news/aquanime-podcast-jpop",
  },
  {
    id: 5,
    title: "Eksplorasi Budaya Populer Jepang di Indonesia: Dulu dan Sekarang",
    excerpt: "Ulasan mendalam mengenai perkembangan komunitas peminat anime, manga, dan cosplay yang terus berkembang pesat dalam satu dekade terakhir.",
    category: "Budaya",
    date: "Mar 18, 2025",
    readTime: "6 min read",
    image: "/images/gallery/image-galery/IMG_8725 1.png",
    url: "https://aquanime.org/news/eksplorasi-pop-kultur",
  },
  {
    id: 6,
    title: "Merayakan Ulang Tahun Maskot Kita, Aria, yang Penuh dengan Kreativitas",
    excerpt: "Komunitas merayakan ulang tahun Aria dengan mengirimkan ratusan karya seni buatan penggemar (fan-art), merchandise, dan cerita mini.",
    category: "Komunitas",
    date: "Apr 01, 2025",
    readTime: "3 min read",
    image: "/images/gallery/image-galery/Aria's birthday! 2.png",
    url: "https://aquanime.org/news/hbd-aria-2025",
  },
];

export default function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);
  const [loading, setLoading] = useState(false);
  const [activeIframeUrl, setActiveIframeUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  useEffect(() => {
    if (!NEWS_API_URL) return;

    setLoading(true);
    async function fetchExternalNews() {
      try {
        const res = await fetch(NEWS_API_URL);
        if (!res.ok) throw new Error("Gagal mengambil data dari API Berita");
        
        const data = await res.json();
        // Validasi struktur data array dari API
        if (Array.isArray(data)) {
          setArticles(data.slice(0, 6));
        } else {
          throw new Error("Format API berita harus berupa Array");
        }
      } catch (err) {
        console.error("Gagal memuat berita eksternal, menggunakan data lokal:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchExternalNews();
  }, []);

  const handleCardClick = (title: string, url: string) => {
    setActiveTitle(title);
    setActiveIframeUrl(url);
  };

  return (
    <section
      id="wawasan"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ecosystem-bg.png')" }}
    >
      <Container className="relative z-10 py-16 lg:py-24">
        <SectionHeading
          subtitle="Temukan berbagai artikel pilihan, liputan event, budaya Jepang, hingga perkembangan terbaru dari komunitas dan industri kreatif yang kami kurasi untuk memperluas wawasan dan menginspirasi karya berikutnya."
        >
          WAWASAN, CERITA, DAN{" "}
          <span className="text-brand-cyan">INSPIRASI TERBARU</span>
        </SectionHeading>

        {loading ? (
          /* Premium Skeleton Loader */
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col h-[400px] rounded-2xl border border-white/60 bg-white/40 animate-pulse overflow-hidden"
              >
                <div className="h-48 w-full bg-slate-200/50" />
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="h-4 w-24 bg-slate-200/60 rounded" />
                  <div className="h-6 w-full bg-slate-200/70 rounded mt-2" />
                  <div className="h-4 w-3/4 bg-slate-200/60 rounded" />
                  <div className="h-4 w-full bg-slate-200/50 rounded mt-auto" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 6 Grid Cards */
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => handleCardClick(article.title, article.url)}
                className="group flex flex-col h-full rounded-2xl border border-white/60 bg-white/80 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-md overflow-hidden cursor-pointer"
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-brand-cyan/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                    {article.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4
                    className="mt-2 text-base font-bold text-navy-950 line-clamp-2 group-hover:text-brand-cyan transition-colors"
                    dangerouslySetInnerHTML={{ __html: article.title }}
                  />
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Read More button at the bottom */}
                  <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-bold text-brand-cyan group-hover:text-brand-cyan-light transition-colors">
                    BACA SELENGKAPNYA
                    <svg
                      className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Embedded Iframe Reader Modal */}
        {activeIframeUrl && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md"
            onClick={() => setActiveIframeUrl(null)}
          >
            <div
              className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between bg-navy-950 px-6 py-4 text-white shrink-0">
                <h3 className="text-sm sm:text-base font-bold truncate pr-4" dangerouslySetInnerHTML={{ __html: activeTitle }} />
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeIframeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-brand-cyan hover:bg-brand-cyan-light px-4 py-1.5 text-xs font-semibold text-white transition shadow-sm"
                  >
                    Buka di Tab Baru
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveIframeUrl(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                    aria-label="Tutup"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Informative Note for Cross-Origin frames */}
              <div className="bg-slate-100 px-6 py-2 text-[11px] text-slate-500 border-b border-slate-200 shrink-0">
                💡 <span className="font-semibold">Catatan:</span> Halaman ini dimuat langsung dari portal berita utama kami. Jika halaman tidak termuat, klik tombol <span className="font-semibold text-brand-cyan">"Buka di Tab Baru"</span> di kanan atas.
              </div>

              {/* Iframe Container */}
              <div className="flex-1 min-h-0 w-full bg-slate-50 relative">
                <iframe
                  src={activeIframeUrl}
                  title={activeTitle}
                  className="h-full w-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
