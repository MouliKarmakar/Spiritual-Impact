import { motion } from "framer-motion";
import { FaHandHoldingHeart } from "react-icons/fa6";

export function FloatingDonate() {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "backOut" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Donate"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-warm blur-xl opacity-60 group-hover:opacity-100 animate-pulse-glow" />
      <span className="relative flex items-center gap-2 px-5 py-4 rounded-full bg-gradient-warm text-cream font-medium shadow-glow">
        <FaHandHoldingHeart size={20} />
        <span className="hidden md:inline">Donate</span>
      </span>
    </motion.a>
  );
}
