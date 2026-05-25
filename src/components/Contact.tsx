import { useRef, useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const info = [
  { icon: FiMail, label: "Email", value: "seva@charanvandan.org" },
  { icon: FiPhone, label: "Phone", value: "+91 98765 43210" },
  {
    icon: FiMapPin,
    label: "Address",
    value: "Charan Aashray, Rishikesh, India",
  },
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sent, setSent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: {
    name: string;
    email: string;
    message: string;
  }) => {
    const e: Record<string, string> = {};

    if (!form.name.trim()) {
      e.name = "Please share your name";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email";
    }

    if (form.message.trim().length < 10) {
      e.message = "Tell us a bit more (10+ chars)";
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = ev.target;

    setErrors((current) => {
      if (!current[field.name]) return current;

      const next = { ...current };

      delete next[field.name];

      return next;
    });
  };

  const submit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);

    const form = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    if (!validate(form)) return;

    setSent(true);

    setTimeout(() => {
      setSent(false);
      formRef.current?.reset();
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-cream"
    >
      {/* Decorative Background Blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-saffron font-medium">
            Get in Touch
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl text-maroon">
            Begin your{" "}
            <span className="text-gradient-warm italic">journey</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4 lg:col-span-2"
          >
            {info.map((c) => (
              <div
                key={c.label}
                className="glass flex items-start gap-4 rounded-2xl p-5 transition-shadow hover:shadow-glow"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-warm text-cream shadow-glow">
                  <c.icon size={18} />
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>

                  <div className="mt-0.5 font-medium text-maroon">
                    {c.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Quote Card */}
            <div className="glass relative mt-2 overflow-hidden rounded-2xl p-6">
              <div className="pointer-events-none absolute inset-0 bg-gradient-warm opacity-10" />

              <div className="relative z-10">
                <div className="text-5xl">🪔</div>

                <p className="mt-3 font-display text-lg italic text-maroon">
                  "Where there is devotion, there is light."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass relative z-20 space-y-5 rounded-3xl p-8 shadow-elegant md:p-10 lg:col-span-3"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-maroon"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                onChange={handleChange}
                className="relative z-50 mt-2 w-full rounded-xl border border-border bg-cream/70 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30 transition"
                placeholder="Your full name"
              />

              {errors.name && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-maroon"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                className="relative z-50 mt-2 w-full rounded-xl border border-border bg-cream/70 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30 transition"
                placeholder="you@example.com"
              />

              {errors.email && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-maroon"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                autoComplete="off"
                onChange={handleChange}
                className="relative z-50 mt-2 w-full resize-none rounded-xl border border-border bg-cream/70 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/30 transition"
                placeholder="How would you like to serve?"
              />

              {errors.message && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-4 font-medium text-cream shadow-glow"
            >
              {sent ? (
                <>
                  <FiCheckCircle />
                  Message Sent with Gratitude
                </>
              ) : (
                <>
                  Send Message
                  <FiSend />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}