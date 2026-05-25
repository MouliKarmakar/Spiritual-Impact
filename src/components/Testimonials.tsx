import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";

const items = [
  {
    name: "Aanya Sharma",
    role: "Volunteer · Mumbai",
    avatar: "AS",
    text: "Charan Vandan taught me that devotion isn't a ritual — it's the warmth you bring to another's plate, the dignity you restore in another's eyes.",
  },
  {
    name: "Rajesh Iyer",
    role: "Donor · Bengaluru",
    avatar: "RI",
    text: "I came searching for meaning. I found a family. Every campaign here is a quiet revolution of compassion.",
  },
  {
    name: "Meera Patel",
    role: "Beneficiary · Ahmedabad",
    avatar: "MP",
    text: "They didn't just feed my children. They made us feel seen, loved, and human again. Forever grateful.",
  },
  {
    name: "Vikram Singh",
    role: "Partner NGO · Delhi",
    avatar: "VS",
    text: "Their work is rooted in sincerity. There is no theatre — only seva, silently transforming thousands of lives.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);

  const active = items[i];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden bg-maroon-deep">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--maroon), var(--maroon-deep))" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_oklch(0.78_0.165_55_/_0.18),_transparent_60%)]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Voices of Devotion</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-cream">
            Stories from the <span className="text-gradient-gold italic">heart</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark rounded-3xl p-8 md:p-12 text-center shadow-soft"
            >
              <ImQuotesLeft className="mx-auto text-gold/60 mb-6" size={40} />
              <p className="font-display text-xl md:text-2xl text-cream/95 italic leading-relaxed">
                {active.text}
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-warm flex items-center justify-center text-cream font-display text-lg shadow-glow">
                  {active.avatar}
                </div>
                <div>
                  <div className="font-medium text-cream">{active.name}</div>
                  <div className="text-xs text-cream/60 uppercase tracking-wider">{active.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              aria-label="Previous"
              onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
              className="w-10 h-10 rounded-full glass-dark text-cream hover:bg-saffron/20 transition flex items-center justify-center"
            >
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-warm" : "w-1.5 bg-cream/30"}`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((p) => (p + 1) % items.length)}
              className="w-10 h-10 rounded-full glass-dark text-cream hover:bg-saffron/20 transition flex items-center justify-center"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
