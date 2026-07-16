/* ═══════════════════════════════════════════════════════════
   AquaNime V2 — Shared Type Definitions
   ═══════════════════════════════════════════════════════════ */

/** Navigation link used in Navbar */
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

/** Stat badge displayed in the Hero section */
export interface HeroStat {
  readonly icon: string;
  readonly value: string;
  readonly label: string;
}

/** Ecosystem card for the diagonal grid section */
export interface EcosystemCard {
  readonly label: string;
  readonly watermark: string;
  readonly href: string;
}

/** Bento article placeholder sizing */
export interface ArticlePlaceholder {
  readonly size: "tall" | "wide" | "regular";
  readonly title: string;
}

/** Social media link */
export interface SocialLink {
  readonly icon: string;
  readonly label: string;
  readonly href: string;
}

/** Footer column with grouped links */
export interface FooterColumn {
  readonly title: string;
  readonly links: readonly string[];
}

/** Regional office entry */
export interface RegionalOffice {
  readonly region: string;
}
