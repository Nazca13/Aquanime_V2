import type { NavLink } from "@/types";

export const navLinks: readonly NavLink[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang",
    href: "/tentang",
    dropdown: [
      { label: "Tentang Kami", href: "/tentang" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Ekosistem", href: "/ekosistem" },
  { label: "Proyek", href: "/proyek" },
  { label: "Kontak", href: "/kontak" },
];
