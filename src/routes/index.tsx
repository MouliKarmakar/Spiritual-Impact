import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Campaigns } from "@/components/Campaigns";
import { Impact } from "@/components/Impact";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingDonate } from "@/components/FloatingDonate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charan Vandan — Serving Humanity Through Compassion & Devotion" },
      {
        name: "description",
        content:
          "A spiritual humanitarian movement uplifting lives through food, education, elderly care, and selfless service across India.",
      },
      { property: "og:title", content: "Charan Vandan — Compassion in Action" },
      { property: "og:description", content: "Join a movement of devotion, service, and human upliftment." },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-hidden">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Campaigns />
        <Impact />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
