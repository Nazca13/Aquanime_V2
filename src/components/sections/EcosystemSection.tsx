import Image from "next/image";
import { ecosystemCards } from "@/config";

export default function EcosystemSection() {
  return (
    <section id="ekosistem" className="relative">
      <div className="relative aspect-[1440/900] w-full">
        {/* Background layer */}
        <Image
          src="/images/ecosystem-bg.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />

        {/* Diagonal cards artwork (transparent PNG layered on top) */}
        <Image
          src="/images/ecosystem-cards.png"
          alt="Ekosistem AquaNime: Komunitas, Cosplay, Proyek Kreatif, Media, Digital Platform"
          fill
          className="object-cover"
        />

        {/* Heading overlay */}
        <div className="absolute inset-x-0 top-0">
          <div className="mx-auto max-w-7xl px-6 pt-[7%] lg:px-10">
            <h2 className="font-heading text-2xl font-extrabold leading-tight text-navy-950 sm:text-3xl lg:text-4xl">
              JELAJAHI <span className="text-brand-cyan">EKOSISTEM</span> KREATIF
            </h2>
          </div>
        </div>

        {/* Clickable regions over each card */}
        <div className="absolute inset-x-0 bottom-0 top-[28%] mx-auto flex max-w-[1440px]">
          {ecosystemCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              aria-label={card.label}
              className="h-full flex-1 outline-offset-[-4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-cyan"
            />
          ))}
        </div>
      </div>
    </section>
  );
}