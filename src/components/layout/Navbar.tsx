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

        {/* ── Logo ── */}
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

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-0 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.dropdown?.some((sub) => pathname === sub.href) ?? false);

            if (link.dropdown) {
              return (
                <div key={link.href} className="group relative">
                  {/* Trigger button */}
                  <button
                    type="button"
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all xl:px-5 ${
                      isActive
                        ? "bg-white text-navy-950 shadow-sm"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label.toUpperCase()}
                    <svg
                      className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div className="invisible absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 rounded-2xl border border-white/20 bg-navy-950/95 p-1.5 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {/* Small arrow */}
                    <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/20 bg-navy-950/95" />
                    {link.dropdown.map((sublink) => {
                      const isSubActive = pathname === sublink.href;
                      return (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            isSubActive
                              ? "bg-brand-cyan/20 text-brand-cyan-light"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {sublink.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

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

        {/* ── Desktop Right Actions: Masuk / Daftar ── */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/signin"
            className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide text-white/90 transition-all hover:text-white"
          >
            Masuk
          </Link>
          <Link
            href="/signup"
            className="relative inline-flex items-center rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-navy-950 shadow-md transition-transform hover:scale-105"
          >
            Daftar
            <Image
              src="/images/chibi_portal.svg"
              alt=""
              width={48}
              height={48}
              className="pointer-events-none absolute -right-3 -top-4 h-12 w-12 object-contain"
            />
          </Link>
        </div>


        {/* ── Mobile Hamburger ── */}
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

      {/* ── Mobile Nav Panel ── */}
      {open && (
        <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-white/30 bg-navy-950/90 px-4 pb-4 pt-2 shadow-lg backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.href} className="flex flex-col">
                  {/* Section label */}
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {link.label}
                  </div>
                  {link.dropdown.map((sublink) => {
                    const isSubActive = pathname === sublink.href;
                    return (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-lg py-3 pl-8 pr-4 text-xs font-semibold uppercase tracking-wider transition-colors ${
                          isSubActive
                            ? "bg-brand-cyan/20 text-brand-cyan-light"
                            : "text-white/80 hover:bg-white/10"
                        }`}
                      >
                        {sublink.label}
                      </Link>
                    );
                  })}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "bg-brand-cyan/20 text-brand-cyan-light"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* ── Mobile Auth buttons ── */}
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/25 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/5"
            >
              Masuk
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-cyan py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/30 transition-colors hover:bg-brand-cyan-light"
            >
              Daftar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}