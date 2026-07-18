"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Fitur login sedang dalam pengembangan!");
  }

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-navy-950">

      {/* ── Full-bleed background character ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-character.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay on the LEFT so form is readable; right side stays vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-transparent" />
      </div>

      {/* ── Form — anchored LEFT ── */}
      <div className="relative z-10 flex w-full flex-col items-start px-6 py-20 sm:px-12 lg:px-20">
        <div className="w-full max-w-sm">

          {/* Back button */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-white/50 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Beranda
          </Link>

          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image src="/logos/aquanime-logo.svg" alt="AquaNime" width={140} height={44} className="h-9 w-auto" />
          </Link>

          <div className="mt-8">
            <h1 className="font-heading text-2xl font-extrabold text-white">Masuk ke Akun</h1>
            <p className="mt-1 text-sm text-white/50">Selamat datang kembali</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label htmlFor="signin-email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-white/40">
                Email
              </label>
              <input
                id="signin-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@kamu.com"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none backdrop-blur-sm transition-all focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/15"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="signin-password" className="text-[11px] font-bold uppercase tracking-widest text-white/40">
                  Password
                </label>
                <Link href="#" className="text-[11px] font-semibold text-brand-cyan hover:text-brand-cyan-light transition-colors">
                  Lupa password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="signin-password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 pr-12 text-sm text-white placeholder-white/25 outline-none backdrop-blur-sm transition-all focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 transition-colors hover:text-white/70"
                  aria-label={showPassword ? "Sembunyikan" : "Tampilkan"}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-cyan py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/25 transition-all hover:bg-brand-cyan-light active:scale-[0.98]"
            >
              Masuk
            </button>
          </form>

          <p className="mt-6 text-sm text-white/40">
            Belum punya akun?{" "}
            <Link href="/signup" className="font-bold text-brand-cyan hover:text-brand-cyan-light transition-colors">
              Daftar sekarang
            </Link>
          </p>

          <p className="mt-10 text-xs text-white/20">
            © {new Date().getFullYear()} AquaNime. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
