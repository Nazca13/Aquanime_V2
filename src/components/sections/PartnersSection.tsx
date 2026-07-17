import { Container, SectionHeading } from "@/components/ui";

export default function PartnersSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ecosystem-bg.png')" }}
    >
      <Container className="relative z-10 grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <SectionHeading>
          DIPERCAYA UNTUK{" "}
          <span className="text-brand-cyan">TUMBUH BERSAMA</span>
        </SectionHeading>

        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-xl border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm"
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
