import { Container, SectionHeading, ButtonLink } from "@/components/ui";

export default function CTASection() {
  return (
    <section className="bg-navy-950">
      <Container className="flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-xl">
          <SectionHeading variant="light">
            BUILD THE <span className="text-brand-cyan-light">FUTURE</span>
            <br />
            WITH US
          </SectionHeading>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Setiap dukungan membantu kami mengembangkan platform,
            menghadirkan pengalaman yang lebih baik, dan mempercepat
            pertumbuhan ekosistem kreatif untuk semua.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:min-w-[280px]">
          <ButtonLink href="#saweria" className="text-center">
            DUKUNG MELALUI SAWERIA
          </ButtonLink>
          <ButtonLink href="#roadmap" variant="outline" className="text-center">
            LIHAT ROADMAP KAMI
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
