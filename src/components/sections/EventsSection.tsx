"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";

/* ─── Sample Events ─────────────────────────────────── */
interface EventItem {
  id: number;
  title: string;
  date: string; // ISO yyyy-mm-dd
  location: string;
  category: string;
  color: string;
}

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Comic Frontier 20",
    date: "2025-08-03",
    location: "ICE BSD, Tangerang",
    category: "Festival",
    color: "#00a8e8",
  },
  {
    id: 2,
    title: "Clas:h Matsuri 2025",
    date: "2025-08-10",
    location: "JIExpo, Jakarta",
    category: "Convention",
    color: "#3394f0",
  },
  {
    id: 3,
    title: "Animae Night Market",
    date: "2025-08-16",
    location: "Summarecon Bekasi",
    category: "Market",
    color: "#44c7f3",
  },
  {
    id: 4,
    title: "Indonesia Comic Con",
    date: "2025-09-06",
    location: "ICE BSD, Tangerang",
    category: "Convention",
    color: "#00a8e8",
  },
  {
    id: 5,
    title: "Cosplay Grand Prix",
    date: "2025-09-14",
    location: "Trans Studio, Bandung",
    category: "Competition",
    color: "#3394f0",
  },
  {
    id: 6,
    title: "J-Fest Bandung",
    date: "2025-09-21",
    location: "Sasana Budaya, Bandung",
    category: "Festival",
    color: "#44c7f3",
  },
];

/* ─── Calendar Helpers ──────────────────────────────── */
const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const DAYS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

/* ─── Bento Grid Items (gallery photos) ─────────────── */
const bentoItems = [
  { area: "a", src: "/images/gallery/image-galery/IMG_8725 1.png", alt: "Kegiatan komunitas" },
  { area: "b", src: "/images/gallery/image-galery/IMG_9212 1.png", alt: "Event gathering", position: "object-top" },
  { area: "c", src: "/images/gallery/image-galery/Aria's birthday! 2.png", alt: "Perayaan komunitas" },
  { area: "d", src: "/images/gallery/image-galery/IMG_9260 1.png", alt: "Sesi foto bersama" },
  { area: "e", src: "/images/gallery/image-galery/IMG_1012 1.png", alt: "Workshop kreatif" },
  { area: "f", src: "/images/gallery/image-galery/IMG_9240 1.png", alt: "Festival komunitas" },
  { area: "g", src: "/images/gallery/image-galery/IMG-20250122-WA0081 1.png", alt: "Kegiatan bersama" },
];

/* ─── Component ─────────────────────────────────────── */
export default function EventsSection() {
  const today = new Date();
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(7); // August (0-indexed)
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = useMemo(() => getDaysInMonth(year, month), [year, month]);
  const firstDay = useMemo(() => getFirstDayOfMonth(year, month), [year, month]);

  // Event dates set for quick lookup
  const eventDatesMap = useMemo(() => {
    const map = new Map<string, EventItem>();
    EVENTS.forEach((ev) => map.set(ev.date, ev));
    return map;
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedDate(null);
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else {
      setMonth((m) => m - 1);
    }
  }, [month]);

  const handleNext = useCallback(() => {
    setSelectedDate(null);
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else {
      setMonth((m) => m + 1);
    }
  }, [month]);

  const handleEventClick = (dateStr: string) => {
    const d = new Date(dateStr);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
    setSelectedDate(dateStr);
  };

  // Generate calendar grid cells
  const calendarCells = useMemo(() => {
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  }, [firstDay, daysInMonth]);

  return (
    <section
      id="event"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/ecosystem-bg.png')" }}
    >
      <Container className="relative z-10 py-16 lg:py-24">
        <SectionHeading
          subtitle="Jangan lewatkan momen seru. Pantau jadwal festival terkini, simpan agenda favoritmu, dan lihat siapa yang akan hadir."
        >
          KALENDER EVENT{" "}
          <span className="text-brand-cyan">POP-KULTUR DI INDONESIA</span>
        </SectionHeading>

        {/* ── Main Grid: Event List (left) + Calendar (right) ── */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* ── Left: Event List ── */}
          <div className="flex flex-col gap-3">
            <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
              Upcoming Events
            </h3>
            {EVENTS.map((ev) => {
              const evDate = new Date(ev.date);
              const isActive = selectedDate === ev.date;
              return (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => handleEventClick(ev.date)}
                  className={`group flex items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-brand-cyan bg-brand-cyan/10 shadow-md shadow-brand-cyan/10"
                      : "border-white/60 bg-white/80 shadow-sm backdrop-blur-sm hover:border-brand-cyan/40 hover:shadow-md"
                  }`}
                >
                  {/* Date badge */}
                  <div
                    className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: ev.color }}
                  >
                    <span className="text-lg font-bold leading-none">
                      {evDate.getDate()}
                    </span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase leading-none opacity-80">
                      {MONTHS[evDate.getMonth()]?.slice(0, 3)}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-navy-950">
                      {ev.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-slate-500">
                      {ev.location}
                    </p>
                    <span
                      className="mt-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white"
                      style={{ backgroundColor: ev.color }}
                    >
                      {ev.category}
                    </span>
                  </div>

                  {/* Arrow indicator */}
                  <svg
                    className={`mt-4 h-4 w-4 shrink-0 transition-transform ${
                      isActive
                        ? "translate-x-0 text-brand-cyan"
                        : "-translate-x-1 text-slate-300 group-hover:translate-x-0 group-hover:text-brand-cyan"
                    }`}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* ── Right: Calendar ── */}
          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-sm backdrop-blur-sm">
              {/* Calendar Header */}
              <div className="flex items-center justify-between bg-navy-950 px-6 py-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Bulan sebelumnya"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <h3 className="text-sm font-bold tracking-wide text-white">
                  {MONTHS[month]} {year}
                </h3>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Bulan berikutnya"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 border-b border-slate-100">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="py-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Date Grid */}
              <div className="grid grid-cols-7 gap-px bg-slate-50 p-2">
                {calendarCells.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} className="h-10" />;
                  }

                  const dateStr = `${year}-${pad(month + 1)}-${pad(day)}`;
                  const event = eventDatesMap.get(dateStr);
                  const isSelected = selectedDate === dateStr;
                  const isToday =
                    day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear();

                  return (
                    <button
                      key={dateStr}
                      type="button"
                      onClick={() => {
                        if (event) setSelectedDate(dateStr);
                      }}
                      className={`relative flex h-10 items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? "bg-brand-cyan text-white shadow-md shadow-brand-cyan/30 scale-110"
                          : event
                          ? "cursor-pointer bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20 hover:scale-105"
                          : isToday
                          ? "bg-navy-950/10 font-bold text-navy-950"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {day}
                      {event && !isSelected && (
                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand-cyan" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected event detail */}
              {selectedDate && eventDatesMap.get(selectedDate) && (
                <div className="border-t border-slate-100 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{
                        backgroundColor: eventDatesMap.get(selectedDate)!.color,
                      }}
                    />
                    <div>
                      <p className="text-sm font-bold text-navy-950">
                        {eventDatesMap.get(selectedDate)!.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {eventDatesMap.get(selectedDate)!.location}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>


          </div>
        </div>

        {/* ── Bento Gallery Grid ── */}
        <div className="bento-articles mt-10">
          {bentoItems.map((item) => (
            <div
              key={item.area}
              data-area={item.area}
              className="group relative overflow-hidden rounded-2xl border border-white/40 shadow-md"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`object-cover ${item.position || "object-center"} transition-transform duration-500 group-hover:scale-110`}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-3 left-4 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.alt}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
