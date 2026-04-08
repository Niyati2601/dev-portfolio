import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send
} from "lucide-react";
import { motion } from "motion/react";
import { useId, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const CONTACT_METHODS = [
  {
    Icon: Mail,
    label: "Email",
    value: "shahniyati260103@gmail.com",
    href: "mailto:shahniyati260103@gmail.com",
    color: "from-[oklch(0.96_0.06_25)] to-[oklch(0.93_0.04_30)]",
    iconColor: "text-primary",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/Niyati2601",
    href: "https://github.com/Niyati2601",
    color: "from-[oklch(0.96_0.02_260)] to-[oklch(0.93_0.015_260)]",
    iconColor: "text-foreground",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shah-niyati-b26004209",
    href: "https://www.linkedin.com/in/shah-niyati-b26004209",
    color: "from-[oklch(0.94_0.06_230)] to-[oklch(0.91_0.04_230)]",
    iconColor: "text-[oklch(0.55_0.14_240)]",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Ahmedabad, India",
    href: undefined,
    color: "from-[oklch(0.96_0.06_140)] to-[oklch(0.93_0.04_140)]",
    iconColor: "text-secondary",
  },
];

const SOCIAL_LINKS = [
  {
    Icon: Github,
    href: "https://github.com/Niyati2601",
    label: "Niyati Shah on GitHub",
    id: "github",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/shah-niyati-b26004209",
    label: "Niyati Shah on LinkedIn",
    id: "linkedin",
  },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(values: FormData): FormErrors {
  const errs: FormErrors = {};
  if (!values.name.trim()) errs.name = "Name is required.";
  if (!values.email.trim()) {
    errs.email = "Email address is required.";
  } else if (!validateEmail(values.email)) {
    errs.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) {
    errs.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errs.message = "Message must be at least 10 characters.";
  }
  return errs;
}

/** Floating label field wrapper */
function FloatingField({
  id,
  label,
  required,
  error,
  errorId,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <div className="relative">
        {children}
        <label
          htmlFor={id}
          className="absolute left-4 top-3.5 text-muted-foreground text-sm pointer-events-none select-none
            transition-all duration-200 ease-out origin-left
            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-muted-foreground
            peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-primary
            peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75
            peer-[:not(:placeholder-shown)]:text-muted-foreground"
        >
          {label}
          {required && (
            <span aria-hidden="true" className="text-primary ml-0.5">
              *
            </span>
          )}
        </label>
      </div>
      {error && (
        <p
          id={errorId}
          className="text-destructive text-xs pl-1 flex items-center gap-1"
          aria-live="polite"
        >
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  );
}

export function ContactSection() {
  const uid = useId();
  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const messageId = `${uid}-msg`;

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (touched[e.target.name]) setErrors(validate(updated));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setIsSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTouched({});
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div
          className="float-shape absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.92 0.08 25) 0%, oklch(0.96 0.04 35) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="float-shape-delayed absolute bottom-10 -left-24 w-[360px] h-[360px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.90 0.07 140) 0%, oklch(0.95 0.04 150) 50%, transparent 75%)",
            filter: "blur(48px)",
          }}
        />
        {/* Small floating dots */}
        {[
          { top: "12%", left: "8%", size: 10, delay: 0, id: "dot-a" },
          { top: "70%", left: "92%", size: 7, delay: 1.5, id: "dot-b" },
          { top: "40%", left: "4%", size: 6, delay: 2.5, id: "dot-c" },
          { top: "85%", left: "55%", size: 8, delay: 0.8, id: "dot-d" },
        ].map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-primary/20 float-shape"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-3 uppercase opacity-70">
            Let's collaborate
          </p>
          <h2
            id="contact-heading"
            className="font-display text-5xl md:text-6xl font-black tracking-tight"
          >
            Get In <span className="gradient-text italic">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-md mx-auto text-base leading-relaxed">
            Have a project in mind or want to explore new opportunities? Drop me
            a message — I'd love to connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-start">
          {/* Left: contact cards + socials */}
          <motion.aside
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <ul className="space-y-3" aria-label="Contact information">
              {CONTACT_METHODS.map((method, i) => (
                <motion.li
                  key={method.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div
                    className={`group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br ${method.color} border border-border/40 shadow-subtle hover-lift`}
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl bg-card/70 shadow-subtle shrink-0 ${method.iconColor}`}
                      aria-hidden="true"
                    >
                      <method.Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={
                            method.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate block"
                          aria-label={`${method.label}: ${method.value}`}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground truncate">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Social links */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-4">
                Follow me
              </p>
              <ul
                className="flex items-center gap-3"
                aria-label="Social media profiles"
              >
                {SOCIAL_LINKS.map(({ Icon, href, label, id }, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15, rotate: -4 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                      }}
                      className="flex items-center justify-center w-11 h-11 rounded-2xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 shadow-subtle"
                      data-ocid={`contact-social-${id}`}
                    >
                      <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.aside>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.45,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="glass-card rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-[400px] border border-border/30 shadow-elevated"
                aria-live="polite"
                data-ocid="contact-success"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6"
                >
                  <CheckCircle2
                    className="w-10 h-10 text-primary"
                    aria-hidden="true"
                  />
                </motion.div>
                <h3 className="font-display font-black text-3xl mb-3 gradient-text">
                  Message sent!
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-8">
                  Thanks for reaching out, I'll get back to you within 24 hours
                  on business days.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="rounded-xl border-primary/30 hover:border-primary/60 hover:bg-primary/5 text-sm"
                  data-ocid="contact-send-another"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 md:p-10 space-y-6 border border-border/30 shadow-elevated"
                noValidate
                aria-label="Contact form"
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FloatingField
                    id={nameId}
                    label="Full Name"
                    required
                    error={touched.name ? errors.name : undefined}
                    errorId="err-name"
                  >
                    <input
                      id={nameId}
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!(touched.name && errors.name)}
                      aria-describedby={
                        touched.name && errors.name ? "err-name" : undefined
                      }
                      className="peer w-full pt-6 pb-2.5 px-4 rounded-xl bg-card/60 border border-border/50
                        text-sm text-foreground placeholder-transparent
                        focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                        transition-all duration-200
                        aria-invalid:border-destructive aria-invalid:focus:ring-destructive/30"
                      data-ocid="contact-input-name"
                    />
                  </FloatingField>

                  <FloatingField
                    id={emailId}
                    label="Email Address"
                    required
                    error={touched.email ? errors.email : undefined}
                    errorId="err-email"
                  >
                    <input
                      id={emailId}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!(touched.email && errors.email)}
                      aria-describedby={
                        touched.email && errors.email ? "err-email" : undefined
                      }
                      className="peer w-full pt-6 pb-2.5 px-4 rounded-xl bg-card/60 border border-border/50
                        text-sm text-foreground placeholder-transparent
                        focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                        transition-all duration-200
                        aria-invalid:border-destructive aria-invalid:focus:ring-destructive/30"
                      data-ocid="contact-input-email"
                    />
                  </FloatingField>
                </div>

                {/* Message */}
                <FloatingField
                  id={messageId}
                  label="Your Message"
                  required
                  error={touched.message ? errors.message : undefined}
                  errorId="err-message"
                >
                  <textarea
                    id={messageId}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" "
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!(touched.message && errors.message)}
                    aria-describedby={
                      touched.message && errors.message
                        ? "err-message"
                        : undefined
                    }
                    className="peer w-full pt-7 pb-3 px-4 rounded-xl bg-card/60 border border-border/50
                      text-sm text-foreground placeholder-transparent resize-none
                      focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                      transition-all duration-200
                      aria-invalid:border-destructive aria-invalid:focus:ring-destructive/30"
                    data-ocid="contact-input-message"
                  />
                </FloatingField>

                {/* Submit */}
                <div className="pt-1">
                  <motion.div
                    whileHover={isSubmitting ? {} : { scale: 1.015 }}
                    whileTap={isSubmitting ? {} : { scale: 0.975 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-primary text-primary-foreground border-0 h-13 rounded-xl
                        gap-2.5 font-semibold text-sm tracking-wide
                        hover:opacity-90 hover:shadow-glow
                        disabled:opacity-60 disabled:cursor-not-allowed
                        transition-all duration-200"
                      data-ocid="contact-submit-btn"
                      aria-label={
                        isSubmitting ? "Sending message…" : "Send message"
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2
                            className="w-4 h-4 animate-spin"
                            aria-hidden="true"
                          />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    I typically respond within 24 hours on business days.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
