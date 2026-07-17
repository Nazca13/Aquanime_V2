"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2.5 shadow-lg backdrop-blur-xl sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/aquanime-logo.svg"
            alt="AquaNime"
            width={140}
            height={44}
            className="h-7 w-auto sm:h-9 lg:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all xl:px-5 ${
                  isActive
                    ? "bg-white text-navy-950 shadow-sm"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#portal"
            className="relative inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-navy-950 shadow-md transition-transform hover:scale-105"
          >
            PORTAL
            <Image
              src="/images/chibi_portal.svg"
              alt=""
              width={48}
              height={48}
              className="pointer-events-none absolute -right-3 -top-4 h-12 w-12 object-contain"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/30 bg-navy-950/90 px-4 pb-4 pt-2 shadow-lg backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-brand-cyan/20 text-brand-cyan-light"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
          <Link
            href="#portal"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-bold text-navy-950 shadow-md"
          >
            PORTAL
          </Link>
        </nav>
      )}
    </header>
  );
}