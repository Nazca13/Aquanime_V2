import type { HeroStat, EcosystemCard, ArticlePlaceholder } from "@/types";

export const heroStats: readonly HeroStat[] = [
  { icon: "/icons/stat-members.svg", value: "100+", label: "Member Aktif" },
  { icon: "/icons/stat-projects.svg", value: "100+", label: "Proyek" },
  { icon: "/icons/stat-partners.svg", value: "100+", label: "Partner" },
  { icon: "/icons/stat-regional.svg", value: "100+", label: "Regional" },
];

export const ecosystemCards: readonly EcosystemCard[] = [
  { label: "Komunitas", watermark: "KOMUNITAS", href: "#komunitas" },
  { label: "Cosplay", watermark: "COSPLAY", href: "#cosplay" },
  { label: "Proyek Kreatif", watermark: "PROYEK KREATIF", href: "#proyek-kreatif" },
  { label: "Media", watermark: "MEDIA", href: "#media" },
  { label: "Digital Platform", watermark: "DIGITAL PLATFORM", href: "#digital-platform" },
];

export const articlePlaceholders: readonly ArticlePlaceholder[] = [
  { size: "tall", title: "" },
  { size: "wide", title: "" },
  { size: "tall", title: "" },
  { size: "regular", title: "" },
  { size: "regular", title: "" },
  { size: "tall", title: "" },
  { size: "wide", title: "" },
];
