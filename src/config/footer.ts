import type { SocialLink, FooterColumn, RegionalOffice } from "@/types";

export const socialLinks: readonly SocialLink[] = [
  { icon: "/icons/social-facebook.svg", label: "Facebook", href: "#" },
  { icon: "/icons/social-instagram.svg", label: "Instagram", href: "#" },
  { icon: "/icons/social-tiktok.svg", label: "TikTok", href: "#" },
  { icon: "/icons/social-youtube.svg", label: "YouTube", href: "#" },
  { icon: "/icons/social-discord.svg", label: "Discord", href: "#" },
];

export const footerColumns: readonly FooterColumn[] = [
  {
    title: "Explore",
    links: ["Community", "Projects", "Events", "Media", "Partnership"],
  },
  {
    title: "Content",
    links: ["News", "Articles", "Editorial", "Stories", "Gallery"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Support", "Press Kit", "Brand Assets"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Licenses", "Guidelines"],
  },
];

export const regionalOffices: readonly RegionalOffice[] = [
  { region: "Jabodetabek (ID)" },
  { region: "Bandung, Jawa Barat (ID)" },
  { region: "Kanto (JP)" },
];

export const contactEmails: readonly string[] = [
  "projects@aquanime.id",
  "contact@aquanime.id",
  "marketing@aquanime.id",
];
