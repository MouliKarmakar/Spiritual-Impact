import { motion } from "framer-motion";
import { FiHeart, FiSun, FiUsers } from "react-icons/fi";
import missionImg from "@/assets/mission.jpg";

const values = [
  { icon: FiHeart, title: "Compassion", text: "Acting with kindness and empathy in every encounter." },
  { icon: FiSun, title: "Devotion", text: "Service rooted in spiritual purpose and reverence." },
  { icon: FiUsers, title: "Community", text: "Building bridges that unite hearts across boundaries." },
];

const journey = [
  { year: "2015", text: "Founded with a single community kitchen" },
  { year: "2018", text: "Expanded to elderly care and education" },
  { year: "2021", text: "Crossed 10,000 lives served annually" },
  { year: "2024", text: "1,200+ volunteers across 40 cities" },
];

export function Mission() {
  return (
    <section id="mission" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cream" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-saffron/10 blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-saffron font-medium">Our Mission</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-maroon">
            Lighting lives with <span className="text-gradient-warm italic">purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={missionImg}
                alt="Compassion in action"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-maroon/40 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:-right-10 max-w-xs glass rounded-2xl p-6 shadow-elegant"
            >
              <p className="font-display italic text-maroon text-lg leading-snug">
                "The best way to find yourself is to lose yourself in the service of others."
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">— Mahatma Gandhi</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              Charan Vandan is a spiritual humanitarian movement dedicated to nurturing the
              forgotten, feeding the hungry, and standing with the vulnerable. We believe true
              devotion blossoms in the service of every soul.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Through community kitchens, elderly homes, education drives, and spiritual
              gatherings, we channel ancient values into modern action — turning compassion
              into a daily practice.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-5 hover:shadow-glow transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-cream mb-3 shadow-glow">
                    <v.icon size={18} />
                  </div>
                  <h3 className="font-display text-xl text-maroon">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="font-display text-3xl md:text-4xl text-center text-maroon mb-12">
            A decade of <span className="text-gradient-warm italic">devotion</span>
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-saffron via-gold to-saffron/30 hidden md:block" />
            <div className="space-y-8 md:space-y-12">
              {journey.map((j, i) => (
                <motion.div
                  key={j.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.05 * i }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 hidden md:block" />
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-warm text-cream font-semibold shadow-glow shrink-0">
                    <span className="text-xs">{j.year}</span>
                  </div>
                  <div className="flex-1 glass rounded-2xl p-5">
                    <p className="font-display text-xl text-maroon">{j.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
