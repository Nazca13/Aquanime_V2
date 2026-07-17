import { Container, SectionHeading } from "@/components/ui";

const boxes = ["a", "b", "c", "d", "e", "f", "g"];

export default function ArticlesSection() {
  return (
    <section
      id="wawasan"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ecosystem-bg.png')" }}
    >
      <Container className="relative z-10 py-16 lg:py-24">
        <SectionHeading
          subtitle="Temukan berbagai artikel pilihan, liputan event, budaya Jepang, hingga perkembangan terbaru dari komunitas dan industri kreatif yang kami kurasi untuk memperluas wawasan dan menginspirasi karya berikutnya."
        >
          WAWASAN, CERITA, DAN{" "}
          <span className="text-brand-cyan">INSPIRASI TERBARU</span>
        </SectionHeading>

        <div className="bento-articles mt-10">
          {boxes.map((area) => (
            <div
              key={area}
              data-area={area}
              className="rounded-2xl border border-white/60 bg-white/80 shadow-sm backdrop-blur-sm"
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
