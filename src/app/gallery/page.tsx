"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

/* ─── Gallery Data ──────────────────────────────────── */
interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  event: string;
  date: string;
  height: "tall" | "medium" | "short";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/image-galery/IMG_8725 1.png",
    alt: "Kegiatan komunitas AquaNime",
    category: "Event",
    event: "Community Gathering",
    date: "Jan 2025",
    height: "tall",
  },
  {
    id: 2,
    src: "/images/gallery/image-galery/IMG_9212 1.png",
    alt: "Sesi foto gathering komunitas",
    category: "Gathering",
    event: "Weekend Meetup",
    date: "Feb 2025",
    height: "medium",
  },
  {
    id: 3,
    src: "/images/gallery/image-galery/IMG_9240 1.png",
    alt: "Festival budaya Jepang",
    category: "Festival",
    event: "J-Culture Fest",
    date: "Mar 2025",
    height: "tall",
  },
  {
    id: 4,
    src: "/images/gallery/image-galery/IMG_9260 1.png",
    alt: "Sesi foto bersama anggota",
    category: "Gathering",
    event: "Annual Meet",
    date: "Mar 2025",
    height: "short",
  },
  {
    id: 5,
    src: "/images/gallery/image-galery/IMG_1012 1.png",
    alt: "Workshop kreatif digital",
    category: "Workshop",
    event: "Digital Art Class",
    date: "Apr 2025",
    height: "medium",
  },
  {
    id: 6,
    src: "/images/gallery/image-galery/Aria's birthday! 2.png",
    alt: "Perayaan ulang tahun Aria",
    category: "Event",
    event: "Aria's Birthday",
    date: "May 2025",
    height: "tall",
  },
  {
    id: 7,
    src: "/images/gallery/image-galery/IMG-20250122-WA0081 1.png",
    alt: "Kegiatan bersama komunitas",
    category: "Gathering",
    event: "New Year Meetup",
    date: "Jan 2025",
    height: "medium",
  },
];

const CATEGORIES = ["Semua", "Event", "Gathering", "Festival", "Workshop"];

const HEIGHT_MAP = {
  tall: "h-80 sm:h-96",
  medium: "h-56 sm:h-72",
  short: "h-48 sm:h-56",
};

/* ─── Component ─────────────────────────────────────── */
export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "Semua" || item.category === activeCategory;
      const matchesSearch =
        search === "" ||
        item.alt.toLowerCase().includes(search.toLowerCase()) ||
        item.event.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  // Split into columns for masonry
  const columns = useMemo(() => {
    const cols: GalleryItem[][] = [[], [], []];
    filtered.forEach((item, i) => {
      cols[i % 3].push(item);
    });
    return cols;
  }, [filtered]);

  const columnsMobile = useMemo(() => {
    const cols: GalleryItem[][] = [[], []];
    filtered.forEach((item, i) => {
      cols[i % 2].push(item);
    });
    return cols;
  }, [filtered]);

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ecosystem-bg.png')" }}
      >
        {/* Hero header */}
        <div className="bg-gradient-to-b from-navy-950 via-navy-950/90 to-transparent pb-12 pt-24 sm:pb-16 sm:pt-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Link
                  href="/"
                  className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white/80"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Beranda
                </Link>
                <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  GALLERY{" "}
                  <span className="text-brand-cyan-light">KOMUNITAS</span>
                </h1>
                <p className="mt-2 max-w-lg text-sm text-white/60 sm:text-base">
                  Momen-momen terbaik dari kegiatan komunitas AquaNime. Lihat, cari, dan terinspirasi.
                </p>
              </div>
              <p className="text-sm font-medium text-white/40">
                {filtered.length} foto
              </p>
            </div>

            {/* Search + Filters */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              {/* Search bar */}
              <div className="relative flex-1 sm:max-w-sm">
                <svg
                  className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari foto, event, kategori..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/40 outline-none backdrop-blur-sm transition-colors focus:border-brand-cyan/50 focus:bg-white/15"
                />
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                      activeCategory === cat
                        ? "bg-brand-cyan text-white shadow-md shadow-brand-cyan/25"
                        : "border border-white/20 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center py-20 text-center">
              <div className="mb-4 rounded-full bg-white/10 p-4">
                <svg className="h-8 w-8 text-white/30" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-navy-950/70">
                Tidak ada foto ditemukan
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Coba ubah kata kunci atau filter kategori
              </p>
            </div>
          ) : (
            <>
              {/* Desktop: 3 columns */}
              <div className="hidden gap-4 sm:flex">
                {columns.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-1 flex-col gap-4">
                    {col.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setLightbox(item)}
                        className={`group relative w-full overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl ${HEIGHT_MAP[item.height]}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                          <span className="mb-1.5 inline-block rounded-full bg-brand-cyan/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase text-white">
                            {item.category}
                          </span>
                          <p className="text-sm font-bold text-white">
                            {item.event}
                          </p>
                          <p className="text-xs text-white/60">{item.date}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              {/* Mobile: 2 columns */}
              <div className="flex gap-3 sm:hidden">
                {columnsMobile.map((col, colIdx) => (
                  <div key={colIdx} className="flex flex-1 flex-col gap-3">
                    {col.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setLightbox(item)}
                        className={`group relative w-full overflow-hidden rounded-xl shadow-md ${HEIGHT_MAP[item.height]}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <span className="mb-1 inline-block rounded-full bg-brand-cyan/90 px-2 py-0.5 text-[9px] font-semibold uppercase text-white">
                            {item.category}
                          </span>
                          <p className="text-xs font-bold text-white">
                            {item.event}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Lightbox Modal */}
        {lightbox && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Tutup"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-2xl bg-navy-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container (flex-1 and min-h-0 to scale down on short screens) */}
              <div className="relative flex-1 min-h-[150px] sm:min-h-[300px] w-full bg-black/20">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain p-2"
                  sizes="90vw"
                  priority
                />
              </div>

              {/* Details Container (shrink-0 to guarantee visibility) */}
              <div className="border-t border-white/10 bg-navy-900/90 px-5 py-4 sm:px-6 shrink-0">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-brand-cyan px-3 py-1 text-[11px] font-semibold uppercase text-white">
                    {lightbox.category}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {lightbox.event}
                    </p>
                    <p className="text-xs text-white/50">{lightbox.date}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-white/40">{lightbox.alt}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
