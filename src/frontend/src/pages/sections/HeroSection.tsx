import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { developerInfo, socialLinks } from "@/data/portfolioData";
import { MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  github: <SiGithub className="h-5 w-5" aria-hidden="true" />,
  linkedin: <FaLinkedin className="h-5 w-5" aria-hidden="true" />,
  twitter: <SiX className="h-5 w-5" aria-hidden="true" />,
};

// Geometric floating shapes — soft pastel, playful
const floatingShapes = [
  {
    id: "circle-coral",
    shape: "circle",
    size: 110,
    top: "8%",
    left: "5%",
    color: "oklch(0.88 0.10 25)",
    delay: 0,
    rotation: 0,
  },
  {
    id: "circle-peach",
    shape: "circle",
    size: 64,
    top: "22%",
    right: "7%",
    color: "oklch(0.90 0.09 35)",
    delay: 1.5,
    rotation: 0,
  },
  {
    id: "square-sage",
    shape: "square",
    size: 44,
    top: "15%",
    left: "25%",
    color: "oklch(0.87 0.10 140)",
    delay: 0.8,
    rotation: 18,
  },
  {
    id: "tri-lavender",
    shape: "triangle",
    size: 50,
    top: "55%",
    right: "12%",
    color: "oklch(0.85 0.09 280)",
    delay: 2.2,
    rotation: 12,
  },
  {
    id: "circle-mint",
    shape: "circle",
    size: 38,
    bottom: "18%",
    left: "8%",
    color: "oklch(0.89 0.08 180)",
    delay: 1,
    rotation: 0,
  },
  {
    id: "square-coral",
    shape: "square",
    size: 28,
    bottom: "30%",
    right: "20%",
    color: "oklch(0.86 0.10 25)",
    delay: 3,
    rotation: 30,
  },
  {
    id: "squiggle",
    shape: "pill",
    size: 72,
    top: "42%",
    left: "2%",
    color: "oklch(0.88 0.09 55)",
    delay: 2,
    rotation: -20,
  },
  {
    id: "dot-sage",
    shape: "circle",
    size: 18,
    top: "70%",
    left: "42%",
    color: "oklch(0.84 0.11 140)",
    delay: 1.2,
    rotation: 0,
  },
  {
    id: "dot-peach2",
    shape: "circle",
    size: 22,
    top: "12%",
    right: "30%",
    color: "oklch(0.88 0.09 40)",
    delay: 3.5,
    rotation: 0,
  },
  {
    id: "rect-lavender",
    shape: "square",
    size: 34,
    bottom: "12%",
    right: "5%",
    color: "oklch(0.86 0.08 290)",
    delay: 2.8,
    rotation: -10,
  },
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero — Full Stack Developer Portfolio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.98 0.012 60) 0%, oklch(0.96 0.014 290) 45%, oklch(0.97 0.012 25) 100%)",
      }}
    >
      {/* Floating geometric shapes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {floatingShapes.map((s) => {
          const style: React.CSSProperties = {
            position: "absolute",
            top: s.top,
            bottom: (s as { bottom?: string }).bottom,
            left: s.left,
            right: (s as { right?: string }).right,
            width: s.size,
            height: s.shape === "pill" ? s.size * 0.35 : s.size,
            background: s.color,
            opacity: 0.62,
            rotate: `${s.rotation}deg`,
            borderRadius:
              s.shape === "circle"
                ? "50%"
                : s.shape === "pill"
                  ? "999px"
                  : "16%",
          };

          return (
            <motion.div
              key={s.id}
              style={style}
              className={
                s.delay % 2 === 0 ? "float-shape" : "float-shape-delayed"
              }
              animate={{
                y: [0, s.delay % 2 === 0 ? -18 : -12, 0],
                rotate: [s.rotation, s.rotation + 8, s.rotation],
              }}
              transition={{
                duration: 6 + s.delay,
                delay: s.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(180,120,90,0.07) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Large soft glow blobs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full blur-3xl opacity-30"
          style={{ background: "oklch(0.88 0.12 35)" }}
        />
        <div
          className="absolute bottom-[-8%] left-[-5%] w-[420px] h-[420px] rounded-full blur-3xl opacity-25"
          style={{ background: "oklch(0.87 0.10 280)" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center mb-8"
        >
          <Badge
            className="border border-primary/30 px-4 py-1.5 text-sm font-medium gap-2 rounded-full shadow-subtle"
            style={{
              background: "oklch(0.96 0.04 25 / 0.6)",
              color: "oklch(0.50 0.14 25)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Available for opportunities"
            data-ocid="hero-available-badge"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-2 h-2 rounded-full bg-primary"
              aria-hidden="true"
            />
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Available for opportunities
          </Badge>
        </motion.div>

        {/* Giant name — staggered letter-by-letter */}
        <h1
          className="font-display font-black leading-none mb-4 select-none"
          aria-label={developerInfo.name}
        >
          <motion.span
            aria-hidden="true"
            className="flex flex-wrap justify-center gap-x-[0.06em]"
          >
            {[
              { char: "N", id: "first-A" },
              { char: "I", id: "first-L" },
              { char: "Y", id: "first-E" },
              { char: "A", id: "first-X" },
              { char: "T", id: "first-T" },
              { char: "I", id: "first-I2" },
            ].map(({ char, id }, i) => (
              <motion.span
                key={id}
                initial={{ opacity: 0, y: 60, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
                style={{
                  fontSize: "clamp(4rem, 14vw, 9rem)",
                  color: "oklch(0.32 0.05 255)",
                  letterSpacing: "-0.02em",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>

          <motion.span
            aria-hidden="true"
            className="flex flex-wrap justify-center gap-x-[0.06em] -mt-2"
          >
            {[
              { char: "S", id: "last-R" },
              { char: "H", id: "last-I" },
              { char: "A", id: "last-V" },
              { char: "H", id: "last-E" },
            ].map(({ char, id }, i) => (
              <motion.span
                key={id}
                initial={{ opacity: 0, y: 60, rotate: 8 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.55 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block gradient-text"
                style={{
                  fontSize: "clamp(4rem, 14vw, 9rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Subtitle: Full Stack Developer */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-body text-xl sm:text-2xl font-light tracking-[0.22em] uppercase mb-2"
          style={{ color: "oklch(0.52 0.06 255)" }}
        >
          Full Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="font-body text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed"
        >
          Crafting scalable web experiences with{" "}
          <span className="font-semibold text-foreground">Angular</span>,{" "}
          <span className="font-semibold text-foreground">.NET Core</span>, &{" "}
          <span className="font-semibold text-foreground">Power Platform</span>.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.45 }}
          className="flex items-center justify-center gap-1.5 text-muted-foreground text-sm mb-10"
          aria-label={`Based in ${developerInfo.location}`}
        >
          <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          <span>{developerInfo.location}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="gradient-primary text-white border-0 px-10 py-4 text-base font-semibold rounded-full shadow-glow hover-lift w-full sm:w-auto"
            onClick={() => scrollTo("projects")}
            data-ocid="hero-cta-projects"
            aria-label="View my projects"
            style={{ minHeight: 52 }}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 px-10 py-4 text-base font-semibold rounded-full hover-lift w-full sm:w-auto transition-smooth"
            style={{
              borderColor: "oklch(0.65 0.16 25)",
              color: "oklch(0.45 0.10 25)",
              background: "oklch(0.97 0.01 25 / 0.5)",
              backdropFilter: "blur(8px)",
              minHeight: 52,
            }}
            onClick={() => scrollTo("contact")}
            data-ocid="hero-cta-contact"
            aria-label="Contact me"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.75 }}
          aria-label="Social media links"
        >
          <ul className="flex items-center justify-center gap-4 list-none p-0 m-0">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="flex items-center justify-center w-11 h-11 rounded-full transition-smooth hover-lift shadow-subtle"
                  style={{
                    background: "oklch(0.99 0.005 60 / 0.8)",
                    border: "1.5px solid oklch(0.88 0.02 270)",
                    color: "oklch(0.50 0.08 255)",
                    backdropFilter: "blur(8px)",
                  }}
                  data-ocid={`hero-social-${link.platform.toLowerCase()}`}
                >
                  {iconMap[link.icon]}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-smooth cursor-pointer bg-transparent border-0 group"
        onClick={() => scrollTo("about")}
        aria-label="Scroll down to About section"
        data-ocid="hero-scroll-indicator"
        style={{ color: "oklch(0.55 0.06 255)" }}
      >
        <span
          className="text-[10px] tracking-widest uppercase font-body"
          style={{ letterSpacing: "0.18em" }}
        >
          Scroll
        </span>
        {/* Animated pill track */}
        <div
          className="relative w-6 h-10 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "oklch(0.65 0.10 25 / 0.5)" }}
          aria-hidden="true"
        >
          <motion.div
            className="w-1.5 h-2.5 rounded-full"
            style={{ background: "oklch(0.65 0.16 25)" }}
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.button>
    </section>
  );
}
