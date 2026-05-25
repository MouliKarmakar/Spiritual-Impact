import { motion } from "framer-motion";
import { Particles } from "./Particles";
import ctaBg from "@/assets/cta-bg.jpg";

export function CTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover animate-slow-zoom" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/20 to-cream/80" />
      </div>
      <Particles count={30} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative container mx-auto px-6 text-center max-w-3xl"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-maroon/70 font-medium">An Invitation</span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 text-maroon leading-tight">
          Become a part of something{" "}
          <span className="text-gradient-warm italic">meaningful</span>
        </h2>
        <p className="mt-6 text-lg text-foreground/75 max-w-xl mx-auto">
          Your hands. Your heart. Your hour. One small offering can transform a life — and yours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-warm text-cream font-medium shadow-glow hover:scale-105 transition-transform"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-warm blur-xl opacity-50 group-hover:opacity-90 transition" />
            <span className="relative">Donate with Devotion</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full glass text-maroon font-medium border border-maroon/20 hover:bg-saffron/10 transition"
          >
            Volunteer with Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
