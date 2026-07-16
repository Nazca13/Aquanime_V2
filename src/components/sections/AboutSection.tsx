import Image from "next/image";
import { Container, SectionHeading, ButtonLink } from "@/components/ui";

export default function AboutSection() {
  return (
    <section id="tentang" className="bg-navy-950">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div>
          <SectionHeading variant="light">
            MENGHUBUNGKAN{" "}
            <span className="text-brand-cyan-light">KREATIVITAS TANPA BATAS</span>
          </SectionHeading>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            AquaNime lahir dari semangat untuk membangun ruang yang
            mempertemukan orang-orang dengan minat yang sama terhadap budaya
            Jepang. Seiring waktu, kami berkembang menjadi ekosistem kreatif
            yang mendorong anggotanya untuk berkarya, berkolaborasi, dan
            menciptakan dampak melalui berbagai proyek nyata.
          </p>

          <div className="mt-8">
            <ButtonLink href="#tentang-kami" variant="outline">
              JELAJAHI TENTANG KAMI
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <Image
            src="/images/about-pattern.svg"
            alt=""
            fill
            className="object-contain"
            aria-hidden="true"
          />
          <Image
            src="/images/about-character.svg"
            alt="Maskot AquaNime"
            fill
            className="object-contain p-8"
          />
        </div>
      </Container>
    </section>
  );
}
