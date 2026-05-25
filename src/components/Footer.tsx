import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
];

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-maroon-deep text-cream/80 pt-16 pb-8 overflow-hidden" style={{ background: "var(--maroon-deep)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_oklch(0.78_0.165_55_/_0.2),_transparent_50%)]" />
      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm shadow-glow">
                <span className="font-display text-xl text-cream font-bold">ॐ</span>
              </span>
              <span className="font-display text-2xl text-cream">Charan Vandan</span>
            </div>
            <p className="text-sm text-cream/60 max-w-md leading-relaxed">
              A spiritual movement turning compassion into action — feeding, healing,
              teaching, and uplifting communities through devoted service.
            </p>
            <p className="font-display italic text-gold mt-6 text-lg">
              "सेवा परमो धर्म:" — Service is the highest virtue.
            </p>
          </div>
          <div>
            <h4 className="font-display text-cream mb-4 text-lg">Explore</h4>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-cream mb-4 text-lg">Follow</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-saffron/20 hover:text-gold transition"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Charan Vandan Foundation. All rights reserved.</p>
          <p>Built with devotion 🪔</p>
        </div>
      </div>
    </footer>
  );
}
