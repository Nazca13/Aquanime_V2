"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Navbar, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

/* ─────────────────────────────────────────────
   DATA — ganti placeholder_* dengan foto nyata
   Setiap proyek bisa punya 1 – N foto di images[]
───────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    status: "Aktif",
    title: "AquaNime Digital Platform",
    desc: "Platform digital terpadu untuk menghubungkan kreator, penggemar, dan industri kreatif Indonesia dalam satu ekosistem. Dibangun dengan teknologi modern dan desain yang mengutamakan pengalaman pengguna.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    progress: 65,
    images: [
      "/images/gallery/image-galery/IMG_9240 1.png",
      "/images/gallery/image-galery/IMG_1012 1.png",
      "/images/gallery/image-galery/IMG_8725 1.png",
    ],
  },
  {
    id: 2,
    status: "Selesai",
    title: "AquaNime Fest 2025",
    desc: "Event tahunan komunitas dengan 1000+ peserta. Menampilkan panggung cosplay, pameran seni, turnamen game, workshop industri kreatif, dan sesi networking antar kreator.",
    tech: ["Event Management", "Sponsorship", "Live Streaming"],
    progress: 100,
    images: [
      "/images/gallery/image-galery/IMG_9260 1.png",
      "/images/gallery/image-galery/IMG-20250122-WA0081 1.png",
      "/images/gallery/image-galery/Aria's birthday! 2.png",
    ],
  },
  {
    id: 3,
    status: "Aktif",
    title: "AquaNime Podcast",
    desc: "Podcast mingguan membahas budaya Jepang, anime, industri kreatif, dan perkembangan komunitas. Tersedia di Spotify, YouTube, dan Apple Podcasts.",
    tech: ["Audio Production", "Spotify", "YouTube"],
    progress: 80,
    images: [
      "/images/gallery/image-galery/IMG_1012 1.png",
      "/images/gallery/image-galery/IMG_8725 1.png",
    ],
  },
  {
    id: 4,
    status: "Perencanaan",
    title: "Merchandise Store",
    desc: "Toko resmi merchandise AquaNime dengan produk-produk edisi terbatas eksklusif komunitas: apparel, aksesori, art print, dan koleksi kolaborasi dengan kreator lokal.",
    tech: ["E-Commerce", "Desain Produk", "Fulfillment"],
    progress: 20,
    images: [
      "/images/gallery/image-galery/IMG-20250122-WA0081 1.png",
      "/images/gallery/image-galery/IMG_9240 1.png",
    ],
  },
  {
    id: 5,
    status: "Selesai",
    title: "Cosplay Photography Book",
    desc: "Buku fotografi cosplay terbaik komunitas tahun ini. Menampilkan 50+ cosplayer, fotografer profesional, dan desainer kostum dari seluruh Indonesia.",
    tech: ["Fotografi", "Desain Grafis", "Percetakan"],
    progress: 100,
    images: [
      "/images/gallery/image-galery/IMG_9260 1.png",
      "/images/gallery/image-galery/IMG_9240 1.png",
      "/images/gallery/image-galery/IMG_1012 1.png",
    ],
  },
  {
    id: 6,
    status: "Perencanaan",
    title: "AquaNime Academy",
    desc: "Platform kursus online untuk kreator muda komunitas. Materi meliputi ilustrasi digital, desain kostum, videografi, content creation, dan manajemen komunitas.",
    tech: ["EdTech", "Video Production", "LMS"],
    progress: 10,
    images: [
      "/images/gallery/image-galery/Aria's birthday! 2.png",
      "/images/gallery/image-galery/IMG_8725 1.png",
    ],
  },
];

const STATUS_STYLES: Record<string, { badge: string; dot: string }> = {
  Aktif:       { badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", dot: "bg-emerald-400" },
  Selesai:     { badge: "bg-brand-cyan/20 text-brand-cyan-light border-brand-cyan/30",     dot: "bg-brand-cyan-light" },
  Perencanaan: { badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",       dot: "bg-amber-400" },
};

/* ── Per-card image carousel ── */
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (animating || images.length <= 1) return;
      setAnimating(true);
      setTimeout(() => {
        setIdx((next + images.length) % images.length);
        setAnimating(false);
      }, 200);
    },
    [animating, images.length]
  );

  // Auto-advance every 4 s
  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => go(idx + 1), 4000);
    return () => clearInterval(t);
  }, [idx, go, images.length]);

  return (
    <div className="group/carousel relative h-56 w-full overflow-hidden rounded-t-3xl bg-navy-950/40">
      {/* Image */}
      <div
        className={`h-full w-full transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={images[idx]}
          alt={`${title} — foto ${idx + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover/carousel:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Arrows — only when >1 image */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(idx - 1); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100 hover:bg-black/60"
            aria-label="Foto sebelumnya"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); go(idx + 1); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100 hover:bg-black/60"
            aria-label="Foto berikutnya"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); go(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-5 bg-white" : "w-1.5 bg-white/40"
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter badge */}
          <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-bold text-white/80 backdrop-blur-sm">
            {idx + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Single project card ── */
function ProjectCard({ project, delay }: { project: typeof PROJECTS[0]; delay: number }) {
  const style = STATUS_STYLES[project.status] ?? STATUS_STYLES["Aktif"];

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/20 bg-navy-950/80 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-2xl hover:shadow-brand-cyan/15"
      style={{ animationDelay: `${delay}ms` }}
    >
      <ImageCarousel images={project.images} title={project.title} />

      <div className="flex flex-1 flex-col p-6">
        {/* Status badge */}
        <span className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${style.badge}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          {project.status}
        </span>

        <h3 className="mt-3 font-heading text-lg font-extrabold text-white group-hover:text-brand-cyan-light transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/75 flex-1">{project.desc}</p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/70">
              {t}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="mb-1.5 flex justify-between text-[11px] font-semibold text-white/60">
            <span>Progress</span>
            <span className={project.progress === 100 ? "text-brand-cyan-light font-bold" : ""}>{project.progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-cyan to-brand-cyan-light"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Filter tabs ── */
const FILTERS = ["Semua", "Aktif", "Selesai", "Perencanaan"] as const;

export default function ProyekPage() {
  const [filter, setFilter] = useState<string>("Semua");

  const visible = filter === "Semua"
    ? PROJECTS
    : PROJECTS.filter((p) => p.status === filter);

  const counts = {
    Semua: PROJECTS.length,
    Aktif: PROJECTS.filter((p) => p.status === "Aktif").length,
    Selesai: PROJECTS.filter((p) => p.status === "Selesai").length,
    Perencanaan: PROJECTS.filter((p) => p.status === "Perencanaan").length,
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy-950">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-navy-950 pt-28 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-brand-cyan/10" />
          {/* Decorative blur orbs */}
          <div className="absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-cyan/8 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-48 w-48 rounded-full bg-purple-500/8 blur-3xl" />

          <Container className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan">PROYEK</p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              KARYA YANG KAMI<br />
              <span className="text-brand-cyan-light">BANGUN BERSAMA</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Dari event skala besar hingga platform digital inovatif — setiap proyek
              AquaNime adalah wujud nyata dari semangat kolaborasi komunitas kami.
            </p>

            {/* Stats row */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { label: "Total Proyek", value: PROJECTS.length },
                { label: "Sedang Berjalan", value: counts.Aktif },
                { label: "Sudah Selesai", value: counts.Selesai },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-3xl font-extrabold text-brand-cyan-light">{s.value}</div>
                  <div className="mt-0.5 text-xs text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Filter + Grid ── */}
        <section className="py-16 bg-[#060c1a]">
          <Container>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    filter === f
                      ? "border-brand-cyan bg-brand-cyan/20 text-brand-cyan-light shadow-lg shadow-brand-cyan/20"
                      : "border-white/20 bg-white/8 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {f}
                  <span className="ml-1.5 text-[10px] opacity-70">
                    ({counts[f as keyof typeof counts] ?? counts.Semua})
                  </span>
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((project, i) => (
                <ProjectCard key={project.id} project={project} delay={i * 60} />
              ))}
            </div>

            {visible.length === 0 && (
              <div className="mt-20 text-center text-white/50">
                <p className="text-lg font-semibold">Tidak ada proyek ditemukan.</p>
              </div>
            )}
          </Container>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#060c1a] pb-20">
          <Container>
            <div className="rounded-3xl border border-brand-cyan/40 bg-brand-cyan/15 px-8 py-12 text-center">
              <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                Punya Ide Proyek?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Kami selalu terbuka untuk kolaborasi baru. Hubungi tim kami dan mari wujudkan ide kreatifmu bersama AquaNime.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/kontak"
                  className="rounded-full bg-brand-cyan px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/25 transition-all hover:scale-105 hover:bg-brand-cyan-light"
                >
                  Hubungi Kami
                </a>
                <a
                  href="/signup"
                  className="rounded-full border border-white/25 bg-white/8 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-white/15"
                >
                  Bergabung Sekarang
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
