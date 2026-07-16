import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaNime — Dari Komunitas Jejepangan Menuju Ekosistem Kreatif",
  description:
    "AquaNime adalah ruang kolaborasi bagi komunitas, kreator, dan pelaku industri kreatif yang ingin berkembang bersama melalui proyek, event, media, dan inovasi digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
