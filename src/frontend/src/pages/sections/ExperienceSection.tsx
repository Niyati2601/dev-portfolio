import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolioData";
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const dotColors = ["bg-primary", "bg-secondary", "bg-accent"];

// Each card is offset vertically for a playful, non-uniform feel
const cardOffsets = [0, 40, 16];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-24 left-1/4 w-80 h-80 rounded-full opacity-[0.06] bg-primary blur-3xl" />
        <div className="absolute bottom-24 right-1/4 w-72 h-72 rounded-full opacity-[0.05] bg-secondary blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full opacity-[0.04] bg-accent blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-4">
            Where I've Been
          </p>
          <h2
            id="experience-heading"
            className="font-display text-5xl lg:text-6xl font-black text-foreground leading-none"
          >
            Experience{" "}
            <em className="gradient-text not-italic font-black">Timeline</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center gradient line — desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-px"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.65 0.16 25 / 0), oklch(0.65 0.16 25 / 0.65) 15%, oklch(0.78 0.12 140 / 0.65) 85%, oklch(0.78 0.12 140 / 0))",
            }}
          />

          {/* Left-edge line — mobile */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute left-5 top-4 bottom-4 w-px"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.65 0.16 25 / 0), oklch(0.65 0.16 25 / 0.5) 15%, oklch(0.78 0.12 140 / 0.5) 85%, oklch(0.78 0.12 140 / 0))",
            }}
          />

          <div className="flex flex-col gap-14 lg:gap-20">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const verticalOffset = cardOffsets[index % cardOffsets.length];

              return (
                <div key={exp.id} className="relative">
                  {/* ── Desktop timeline dot (center) ── */}
                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center"
                    style={{ top: `${verticalOffset + 28}px` }}
                    aria-hidden="true"
                  >
                    {exp.current ? (
                      <span className="relative flex">
                        <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-primary opacity-35" />
                        <span className="relative inline-flex h-6 w-6 rounded-full bg-primary shadow-glow border-[3px] border-background" />
                      </span>
                    ) : (
                      <span
                        className={`w-5 h-5 rounded-full border-[3px] border-background shadow-subtle ${dotColors[index % dotColors.length]}`}
                      />
                    )}
                  </div>

                  {/* ── Mobile timeline dot (left) ── */}
                  <div
                    className="lg:hidden absolute left-5 top-7 -translate-x-1/2 z-10"
                    aria-hidden="true"
                  >
                    {exp.current ? (
                      <span className="relative flex">
                        <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-primary opacity-35" />
                        <span className="relative inline-flex h-5 w-5 rounded-full bg-primary shadow-subtle border-2 border-background" />
                      </span>
                    ) : (
                      <span
                        className={`w-4 h-4 rounded-full border-2 border-background shadow-subtle ${dotColors[index % dotColors.length]}`}
                      />
                    )}
                  </div>

                  {/* ── Mobile: full-width card offset from dot ── */}
                  <div className="lg:hidden pl-12">
                    <ExperienceCard
                      exp={exp}
                      index={index}
                      side="left"
                      verticalOffset={0}
                    />
                  </div>

                  {/* ── Desktop: alternating left / right card ── */}
                  <div className="hidden lg:block">
                    <ExperienceCard
                      exp={exp}
                      index={index}
                      side={isLeft ? "left" : "right"}
                      verticalOffset={verticalOffset}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="hidden lg:flex absolute left-1/2 -bottom-3 -translate-x-1/2 items-center justify-center"
            aria-hidden="true"
          >
            <span className="w-3 h-3 rounded-full bg-secondary border-2 border-background shadow-subtle" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── */
/*  Individual experience card                 */
/* ─────────────────────────────────────────── */

interface Exp {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

function ExperienceCard({
  exp,
  index,
  side,
  verticalOffset,
}: {
  exp: Exp;
  index: number;
  side: "left" | "right";
  verticalOffset: number;
}) {
  const isLeft = side === "left";

  return (
    <motion.article
      data-ocid={`experience-card-${exp.id}`}
      initial={{ opacity: 0, x: isLeft ? -56 : 56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ marginTop: verticalOffset }}
      className={`relative ${
        // Desktop: each card takes ~45% width, pushed to its side
        "lg:w-[45%]"
      } ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}`}
      aria-label={`${exp.role} at ${exp.company}`}
    >
      {/* Diagonal connector to timeline (desktop only) */}
      <div
        aria-hidden="true"
        className={`hidden lg:block absolute top-9 h-px w-14 ${
          isLeft ? "-right-14" : "-left-14"
        }`}
        style={{
          background: exp.current
            ? "oklch(0.65 0.16 25 / 0.55)"
            : "oklch(0.65 0.16 25 / 0.22)",
          transform: isLeft ? "rotate(-3deg)" : "rotate(3deg)",
          transformOrigin: isLeft ? "right center" : "left center",
        }}
      />

      <div
        className={`rounded-2xl p-6 transition-smooth hover-lift ${
          exp.current
            ? "bg-card border-2 border-primary/25 shadow-glow"
            : "bg-card border border-border shadow-subtle"
        }`}
      >
        {/* Current role badge */}
        {exp.current && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.35 }}
            className="absolute -top-3.5 left-5"
          >
            <Badge className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 shadow-subtle flex items-center gap-1.5">
              <Sparkles size={10} aria-hidden="true" />
              Current Role
            </Badge>
          </motion.div>
        )}

        {/* Role + company */}
        <div className="mt-1 mb-3">
          <h3 className="font-display text-xl font-bold text-foreground leading-tight">
            {exp.role}
          </h3>
          <p className="text-primary font-semibold text-base mt-1">
            {exp.company}
          </p>
        </div>

        {/* Period + location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays
              size={13}
              className="shrink-0 opacity-60"
              aria-hidden="true"
            />
            <time dateTime={exp.period}>{exp.period}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin
              size={13}
              className="shrink-0 opacity-60"
              aria-hidden="true"
            />
            {exp.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Highlights */}
        <ul
          className="space-y-2"
          aria-label={`Key achievements at ${exp.company}`}
        >
          {exp.highlights.map((highlight, hi) => (
            <motion.li
              key={highlight}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1 + hi * 0.07 + 0.25,
                duration: 0.4,
              }}
              className="flex items-start gap-2.5 text-sm text-foreground/80"
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                  ["bg-primary", "bg-secondary", "bg-accent"][index % 3]
                }`}
                aria-hidden="true"
              />
              <span className="leading-relaxed">{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
