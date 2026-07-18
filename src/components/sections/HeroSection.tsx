import Image from "next/image";
import { heroStats } from "@/config";
import { Container, ButtonLink } from "@/components/ui";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-navy-950 pt-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-character.png"
          alt=""
          fill
          priority
          className="object-cover object-right-top opacity-60 sm:opacity-80 sm:object-right"
        />
        {/* Dark gradient overlay – stronger on mobile so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent sm:from-navy-950/80 sm:via-navy-950/30" />
      </div>

      <Container className="relative z-10 pb-16 pt-16 lg:pb-24 lg:pt-20">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            DARI KOMUNITAS
            <br />
            JEJEPANGAN MENUJU
            <br />
            <span className="text-brand-cyan-light">EKOSISTEM KREATIF</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 lg:text-lg">
            AquaNime adalah ruang kolaborasi bagi komunitas, kreator, dan
            pelaku industri kreatif yang ingin berkembang bersama melalui
            proyek, event, media, dan inovasi digital.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#gabung">GABUNG KOMUNITAS</ButtonLink>
            <ButtonLink href="#ekosistem" variant="outline">
              JELAJAHI EKOSISTEM
            </ButtonLink>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2.5">
                <Image
                  src={stat.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 shrink-0"
                />
                <div>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-lg font-bold text-white">
                    {stat.value}
                  </dd>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
