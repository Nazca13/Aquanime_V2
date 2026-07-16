import { Container, SectionHeading } from "@/components/ui";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-100">
      <Container className="py-16 text-center lg:py-24">
        <SectionHeading>
          SETIAP MOMEN MEMILIKI{" "}
          <span className="text-brand-cyan">CERITANYA SENDIRI</span>
        </SectionHeading>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-8 sm:gap-14">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-24 w-24 shrink-0 rounded-full bg-slate-300 sm:h-28 sm:w-28"
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
