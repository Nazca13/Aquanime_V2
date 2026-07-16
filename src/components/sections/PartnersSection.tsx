import { Container, SectionHeading } from "@/components/ui";

export default function PartnersSection() {
  return (
    <section className="bg-slate-100">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <SectionHeading>
          DIPERCAYA UNTUK{" "}
          <span className="text-brand-cyan">TUMBUH BERSAMA</span>
        </SectionHeading>

        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/2] rounded-xl border border-slate-200 bg-white shadow-sm"
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
