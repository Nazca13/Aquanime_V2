"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="#beranda" className="shrink-0">
          <Image
            src="/logos/aquanime-logo.svg"
            alt="AquaNime"
            width={140}
            height={44}
            className="h-9 w-auto lg:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-white/90 transition-colors hover:text-brand-cyan-light"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#portal"
            className="relative inline-flex items-center rounded-full bg-white py-2.5 pl-5 pr-9 text-sm font-bold text-navy-950 shadow-lg transition-transform hover:scale-105"
          >
            PORTAL
            <Image
              src="/images/portal-button-badge.png"
              alt=""
              width={40}
              height={40}
              className="pointer-events-none absolute -right-2 -top-3 h-10 w-10 object-contain"
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/5"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Link
            href="#portal"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-white px-5 py-2.5 text-center text-sm font-bold text-navy-950"
          >
            PORTAL
          </Link>
        </nav>
      )}
    </header>
  );
}
