"use client";

import { useState } from "react";
import { Navbar, Footer } from "@/components/layout";
import { Container } from "@/components/ui";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/aquanime",
    icon: (
      <svg className="h-5 w-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/aquanime",
    icon: (
      <svg className="h-5 w-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@aquanime",
    icon: (
      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 00.5 6.163C0 8.07 0 12 0 12s0 3.93.5 5.837a3.003 3.003 0 002.11 2.108c1.858.555 9.388.555 9.388.555s7.53 0 9.388-.555a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/aquanime",
    icon: (
      <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 127.14 96.36">
        <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.56-.41,1.11-.84,1.64-1.29a75.64,75.64,0,0,0,67.6,0c.53.45,1.08.88,1.64,1.29a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,122.84,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
      </svg>
    ),
  },
];

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy-950">

        {/* ── Header ── */}
        <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-brand-cyan/10" />
          <Container className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-cyan">KONTAK</p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              HUBUNGI<br />
              <span className="text-brand-cyan-light">TIM KAMI</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
              Ada pertanyaan, ide kolaborasi, atau ingin bergabung sebagai mitra? Kami senang
              mendengar dari Anda. Tim AquaNime siap merespons dalam 1×24 jam.
            </p>
          </Container>
        </section>

        {/* ── Contact Area ── */}
        <section className="py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-5">

              {/* Left: Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <h2 className="font-heading text-xl font-bold text-white">Informasi Kontak</h2>
                  <ul className="mt-5 space-y-4 text-sm text-white/70">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand-cyan shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <span>Jl. Kreativitas No. 1, Indonesia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand-cyan shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span>hello@aquanime.org</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand-cyan shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <span>+62 812-3456-7890</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-brand-cyan shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>Senin – Jumat, 09.00 – 17.00 WIB</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <h2 className="font-heading text-xl font-bold text-white">Media Sosial</h2>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white/80 transition-all hover:bg-white/15 hover:text-white"
                      >
                        {s.icon}
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                  {sent ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="mb-4 text-brand-cyan">
                        <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-white">Pesan Terkirim!</h3>
                      <p className="mt-2 text-white/60">Kami akan menghubungi kamu dalam 1×24 jam.</p>
                      <button
                        onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                        className="mt-6 rounded-full bg-brand-cyan px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-cyan-light transition-all"
                      >
                        Kirim Pesan Lain
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="font-heading text-xl font-bold text-white">Kirim Pesan</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Nama Lengkap</label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Nama kamu"
                            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/15"
                          />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Email</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="email@kamu.com"
                            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/15"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Subjek</label>
                        <input
                          required
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="Subjek pesan"
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/15"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Pesan</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tulis pesan kamu di sini..."
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/15 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-full bg-brand-cyan py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/25 transition-all hover:bg-brand-cyan-light active:scale-[0.98]"
                      >
                        Kirim Pesan
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
