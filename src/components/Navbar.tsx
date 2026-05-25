import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    handle();
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-elegant py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm shadow-glow">
            <span className="absolute inset-0 rounded-full bg-gradient-warm blur-md opacity-60 group-hover:opacity-100 transition" />
            <span className="relative font-display text-xl text-cream font-bold">ॐ</span>
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-maroon">
            Charan<span className="text-gradient-warm"> Vandan</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-warm transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="relative inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-warm text-cream text-sm font-medium shadow-glow hover:scale-105 transition-transform"
          >
            Donate Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-full glass text-maroon"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass mx-6 mt-3 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-foreground/80 hover:bg-saffron/10 hover:text-maroon transition"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 mx-4 px-5 py-3 rounded-full bg-gradient-warm text-center text-cream font-medium shadow-glow"
              >
                Donate Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
