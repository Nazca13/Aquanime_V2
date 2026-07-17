import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";

interface ComingSoonPageProps {
  title: string;
  subtitle?: string;
}

export default function ComingSoonPage({
  title,
  subtitle = "Halaman ini sedang dalam pengembangan. Kami sedang mempersiapkan sesuatu yang istimewa untukmu!",
}: ComingSoonPageProps) {
  return (
    <>
      <Navbar />
      <main
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 pt-20"
        style={{ backgroundImage: "url('/images/ecosystem-bg.png')" }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/50 to-navy-950/80" />

        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          {/* Character SVG */}
          <div className="relative mb-8 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64">
            <Image
              src="/images/aria-coming-soon.svg"
              alt="Aria - Coming Soon"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Badge */}
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-cyan-light backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
            Segera Hadir
          </span>

          {/* Title */}
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
            {subtitle}
          </p>

          {/* Back button */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-3 text-sm font-bold text-white shadow-lg shadow-brand-cyan/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand-cyan/30"
          >
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            KEMBALI KE BERANDA
          </Link>

          {/* Decorative dots */}
          <div className="mt-12 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-brand-cyan/40" />
            <div className="h-2 w-8 rounded-full bg-brand-cyan/60" />
            <div className="h-2 w-2 rounded-full bg-brand-cyan/40" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
