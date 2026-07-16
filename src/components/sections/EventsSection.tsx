import { Container, SectionHeading } from "@/components/ui";

export default function EventsSection() {
  return (
    <section id="event" className="bg-slate-100">
      <Container className="py-16 lg:py-24">
        <SectionHeading
          subtitle="Jangan lewatkan momen seru. Pantau jadwal festival terkini, simpan agenda favoritmu, dan lihat siapa yang akan hadir."
        >
          KALENDER EVENT{" "}
          <span className="text-brand-cyan">POP-KULTUR DI INDONESIA</span>
        </SectionHeading>

        {/* Featured events */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm lg:aspect-auto lg:h-[340px]"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-4">
            <div
              className="aspect-[16/10] rounded-2xl border border-slate-200 bg-white shadow-sm lg:h-[270px] lg:flex-1"
              aria-hidden="true"
            />
            <div
              className="h-16 rounded-2xl border border-slate-200 bg-white shadow-sm"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Upcoming events grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm"
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
