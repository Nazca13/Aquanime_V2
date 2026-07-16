import Image from "next/image";
import Link from "next/link";
import {
  contactEmails,
  footerColumns,
  regionalOffices,
  socialLinks,
} from "@/config";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Image
              src="/logos/aquanime-x-animae-footer.svg"
              alt="AquaNime X Animae"
              width={372}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Creative Digital Ecosystem yang menghubungkan komunitas, media,
              proyek kreatif, event, dan platform digital dalam satu
              ekosistem.
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/50">
                Regional
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                {regionalOffices.map((office) => (
                  <li key={office.region}>{office.region}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/50">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-white/70 transition-colors hover:text-brand-cyan-light"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1 text-sm text-white/60 sm:flex-row sm:gap-4">
            {contactEmails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="hover:text-brand-cyan-light"
              >
                {email}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-cyan"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px] invert"
                />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-white/40">
          © 2017 - 2024 Komunitas AquaNime x AniMae Platform. Digunakan oleh
          Komunitas untuk komunitas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
