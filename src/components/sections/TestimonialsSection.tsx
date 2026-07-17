import { Container, SectionHeading } from "@/components/ui";

const testimonials = [
  {
    name: "Akira Tanaka",
    role: "Community Lead",
    quote:
      "AquaNime memberikan ruang yang luar biasa untuk berkolaborasi dan berkembang bersama komunitas kreatif.",
  },
  {
    name: "Rina Sato",
    role: "Cosplayer",
    quote:
      "Melalui AquaNime, saya bisa terhubung dengan sesama kreator dan mendapatkan exposure yang lebih luas.",
  },
  {
    name: "Hiro Yamamoto",
    role: "Illustrator",
    quote:
      "Platform yang sangat mendukung para kreator untuk terus berkarya dan berinovasi.",
  },
  {
    name: "Yuki Endo",
    role: "Event Organizer",
    quote:
      "Kolaborasi dengan AquaNime selalu menghasilkan event yang memorable dan berdampak besar.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ecosystem-bg.png')" }}
    >
      <Container className="relative z-10 py-16 text-center lg:py-24">
        <SectionHeading>
          SETIAP MOMEN MEMILIKI{" "}
          <span className="text-brand-cyan">CERITANYA SENDIRI</span>
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div key={i} className="relative pt-8">
              {/* Profile circle - overlapping the card */}
              <div className="absolute left-4 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-400 text-lg font-bold text-white shadow-md ring-4 ring-white/80">
                {t.name.charAt(0)}
              </div>

              {/* Card body */}
              <div className="rounded-2xl border border-white/60 bg-white/80 px-5 pb-5 pt-10 text-left shadow-sm backdrop-blur-sm">
                <p className="text-sm font-bold text-navy-950">{t.name}</p>
                <p className="text-xs text-brand-cyan">{t.role}</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
