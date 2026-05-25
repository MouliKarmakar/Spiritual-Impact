import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { Particles } from "./Particles";
import { Counter } from "./Counter";
import heroBg from "@/assets/hero-spiritual.jpg";

const stats = [
  { label: "Lives Impacted", value: 25000, suffix: "+" },
  { label: "Volunteers", value: 1200, suffix: "+" },
  { label: "Campaigns", value: 86, suffix: "" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/70 via-maroon/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_oklch(0.85_0.17_65_/_0.25),_transparent_60%)]" />
      </div>

      <Particles count={40} />

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-24 left-10 w-24 h-24 rounded-full bg-gradient-warm opacity-30 blur-2xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-12 w-32 h-32 rounded-full bg-gold opacity-25 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-24"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-cream/90 text-xs uppercase tracking-[0.2em] mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-saffron animate-pulse-glow" />
          A Spiritual Movement of Compassion
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-[1.05] mb-6"
        >
          Serving Humanity Through{" "}
          <span className="text-gradient-gold italic">Compassion</span>
          <br />& Devotion
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Where ancient wisdom meets modern purpose — uplifting lives, restoring dignity,
          and lighting the path of selfless service, one soul at a time.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#mission"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-warm text-cream font-medium shadow-glow hover:scale-105 transition-transform"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-warm blur-xl opacity-60 group-hover:opacity-100 transition" />
            <span className="relative">Join the Mission</span>
          </a>
          <a
            href="#campaigns"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-dark text-cream font-medium border border-gold/40 hover:bg-gold/10 transition"
          >
            Explore Campaigns
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-dark rounded-2xl p-4 md:p-6 text-center">
              <div className="font-display text-3xl md:text-5xl font-semibold text-gradient-gold">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-cream/70 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#mission"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={28} />
      </motion.a>
    </section>
  );
}
