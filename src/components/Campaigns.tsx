import { motion } from "framer-motion";
import { GiMeal, GiLotus, GiBookCover, GiHealing } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Campaign {
  icon: IconType;
  title: string;
  desc: string;
  tag: string;
}

const campaigns: Campaign[] = [
  { icon: GiMeal, title: "Food Donation", desc: "Daily community kitchens nourishing the hungry with love and dignity.", tag: "Annadaan" },
  { icon: GiHealing, title: "Elderly Care", desc: "Homes, healthcare and companionship for those forgotten by time.", tag: "Seva" },
  { icon: GiLotus, title: "Spiritual Gatherings", desc: "Satsangs, bhajans and meditations that elevate the collective spirit.", tag: "Sangha" },
  { icon: GiBookCover, title: "Education Support", desc: "Scholarships, books and mentorship for underprivileged children.", tag: "Vidya" },
  { icon: FaHandsHelping, title: "Community Service", desc: "Disaster relief, cleanliness drives, and volunteer mobilization.", tag: "Karma" },
];

export function Campaigns() {
  return (
    <section id="campaigns" className="relative py-24 md:py-32 overflow-hidden bg-maroon-deep">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_oklch(0.78_0.165_55_/_0.25),_transparent_50%),radial-gradient(circle_at_80%_70%,_oklch(0.55_0.07_200_/_0.18),_transparent_50%)]" style={{ background: "linear-gradient(180deg, var(--maroon-deep), var(--maroon))" }} />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(var(--gold) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Our Campaigns</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-cream">
            Service in <span className="text-gradient-gold italic">every form</span>
          </h2>
          <p className="mt-5 text-cream/70">
            Five pillars of seva — each rooted in devotion, every act a prayer in motion.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {campaigns.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-8 glass-dark overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-saffron/20 via-transparent to-gold/15" />
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-saffron/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center text-cream shadow-glow group-hover:scale-110 transition-transform duration-500">
                    <c.icon size={28} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80 px-3 py-1 rounded-full border border-gold/30">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-cream mb-2 group-hover:text-gradient-gold transition-all">
                  {c.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold font-medium opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300">
                  Learn more →
                </div>
              </div>
            </motion.article>
          ))}

          {/* Final CTA tile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative rounded-3xl p-8 bg-gradient-warm flex flex-col justify-center items-start shadow-glow overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_oklch(0.95_0.05_85_/_0.3),_transparent_60%)]" />
            <div className="relative">
              <h3 className="font-display text-3xl text-cream mb-3">Start your own seva</h3>
              <p className="text-cream/90 mb-6 text-sm">Become a volunteer, sponsor a campaign, or host one in your city.</p>
              <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-cream text-maroon font-medium hover:scale-105 transition-transform">
                Get Involved →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
