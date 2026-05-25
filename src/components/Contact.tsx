import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

const info = [
  { icon: FiMail, label: "Email", value: "seva@charanvandan.org" },
  { icon: FiPhone, label: "Phone", value: "+91 98765 43210" },
  { icon: FiMapPin, label: "Address", value: "Charan Aashray, Rishikesh, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please share your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Tell us a bit more (10+ chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-gradient-cream">
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-saffron font-medium">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-maroon">
            Begin your <span className="text-gradient-warm italic">journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {info.map((c) => (
              <div key={c.label} className="glass rounded-2xl p-5 flex gap-4 items-start hover:shadow-glow transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-gradient-warm flex items-center justify-center text-cream shrink-0 shadow-glow">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium text-maroon mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-6 mt-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-warm opacity-10" />
              <div className="relative">
                <div className="text-5xl">🪔</div>
                <p className="font-display italic text-lg text-maroon mt-3">
                  "Where there is devotion, there is light."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 shadow-elegant space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-maroon">Name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-xl bg-cream/70 border border-border px-4 py-3 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30 transition"
                placeholder="Your full name"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-maroon">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full rounded-xl bg-cream/70 border border-border px-4 py-3 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30 transition"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-maroon">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-xl bg-cream/70 border border-border px-4 py-3 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30 transition resize-none"
                placeholder="How would you like to serve?"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-warm text-cream font-medium shadow-glow"
            >
              {sent ? (
                <>
                  <FiCheckCircle /> Message Sent with Gratitude
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
