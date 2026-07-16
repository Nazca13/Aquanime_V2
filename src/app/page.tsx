import { Navbar, Footer } from "@/components/layout";
import {
  AboutSection,
  ArticlesSection,
  CTASection,
  EcosystemSection,
  EventsSection,
  HeroSection,
  PartnersSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EcosystemSection />
        <ArticlesSection />
        <EventsSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
