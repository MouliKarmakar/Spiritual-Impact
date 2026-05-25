import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { FiGlobe, FiHeart, FiAward, FiTrendingUp } from "react-icons/fi";

const stats = [
  { icon: FiHeart, label: "Meals Served", value: 1200000, suffix: "+" },
  { icon: FiGlobe, label: "Cities Reached", value: 40, suffix: "" },
  { icon: FiAward, label: "Awards Received", value: 12, suffix: "" },
  { icon: FiTrendingUp, label: "Annual Growth", value: 38, suffix: "%" },
];

const milestones = [
  { year: "2020", title: "Pandemic Relief", text: "Distributed 500k meals during the COVID crisis." },
  { year: "2022", title: "Elderly Home Inaugurated", text: "Opened Charan Aashray, a 200-bed sanctuary." },
  { year: "2023", title: "Education Initiative", text: "Sponsored 3,000+ students through Vidya Daan." },
  { year: "2024", title: "National Recognition", text: "Honored with the Seva Ratna humanitarian award." },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cream" />
      <motion.div
        className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-saffron/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-teal/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-saffron font-medium">Our Impact</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-maroon">
            Measured in <span className="text-gradient-warm italic">moments of grace</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 text-center hover:shadow-glow transition-shadow"
            >
              <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-warm items-center justify-center text-cream mb-4 shadow-glow">
                <s.icon size={22} />
              </div>
              <div className="font-display text-4xl md:text-5xl font-semibold text-gradient-warm">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-5 hover:shadow-elegant transition-shadow"
            >
              <div className="font-display text-3xl text-gradient-warm font-semibold shrink-0 w-16">{m.year}</div>
              <div>
                <h4 className="font-display text-xl text-maroon">{m.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
