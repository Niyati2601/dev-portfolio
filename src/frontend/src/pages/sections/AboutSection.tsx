import { Code2, Layers, TrendingUp, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ── Journey milestones ────────────────────────────────────────────────────────
const MILESTONES = [
  {
    number: "01",
    emoji: "🌱",
    title: "The Beginning",
    years: "2019 — 2020",
    description:
      "Fell in love with code through curiosity. Built first projects with HTML, CSS, and vanilla JavaScript — turning ideas into things people could actually click.",
    // soft lavender
    bg: "bg-[oklch(0.93_0.04_280)]",
    border: "border-[oklch(0.82_0.07_280)]",
    accent: "text-[oklch(0.50_0.14_280)]",
    offsetY: "lg:translate-y-0",
  },
  {
    number: "02",
    emoji: "⚡",
    title: "Going Full Stack",
    years: "2020 — 2021",
    description:
      "Mastered Angular and React on the frontend while diving into Node.js and .NET Core on the backend. Learned that the best experiences live at the intersection of both.",
    // soft peach
    bg: "bg-[oklch(0.93_0.04_50)]",
    border: "border-[oklch(0.83_0.07_40)]",
    accent: "text-[oklch(0.55_0.16_35)]",
    offsetY: "lg:translate-y-10",
  },
  {
    number: "03",
    emoji: "🏢",
    title: "Enterprise Solutions",
    years: "2021 — 2023",
    description:
      "Joined enterprise teams building scalable .NET systems and Microsoft Power Platform apps — automating workflows and saving organisations hundreds of hours every year.",
    // soft mint
    bg: "bg-[oklch(0.93_0.04_160)]",
    border: "border-[oklch(0.82_0.07_155)]",
    accent: "text-[oklch(0.45_0.12_155)]",
    offsetY: "lg:translate-y-4",
  },
  {
    number: "04",
    emoji: "🚀",
    title: "Today",
    years: "2023 — Now",
    description:
      "5+ years in, 20+ projects shipped, still learning every day. From cloud-native microservices to Power Platform, the mission is always the same: software that actually matters.",
    // soft cream / gold
    bg: "bg-[oklch(0.93_0.04_80)]",
    border: "border-[oklch(0.83_0.07_75)]",
    accent: "text-[oklch(0.52_0.13_70)]",
    offsetY: "lg:translate-y-14",
  },
];

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Building production-grade web apps",
  },
  {
    icon: <Layers className="h-5 w-5" aria-hidden="true" />,
    value: 20,
    suffix: "+",
    label: "Projects Shipped",
    description: "From startup MVPs to enterprise systems",
  },
  {
    icon: <Code2 className="h-5 w-5" aria-hidden="true" />,
    value: 15,
    suffix: "+",
    label: "Technologies",
    description: "Across frontend, backend, and cloud",
  },
  {
    icon: <Zap className="h-5 w-5" aria-hidden="true" />,
    value: 100,
    suffix: "s",
    label: "Hours Saved",
    description: "Via Power Platform automation",
  },
];

// ── Animated counter ──────────────────────────────────────────────────────────
function AnimatedCounter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-5 shadow-subtle hover-lift text-center"
      aria-label={`${stat.value}${stat.suffix} ${stat.label}: ${stat.description}`}
    >
      <div className="flex items-center justify-center gap-2 mb-3 text-primary">
        {stat.icon}
      </div>
      <p className="text-3xl font-display font-extrabold gradient-text mb-0.5">
        <AnimatedCounter
          target={stat.value}
          suffix={stat.suffix}
          active={inView}
        />
      </p>
      <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
      <p className="text-xs text-muted-foreground leading-snug">
        {stat.description}
      </p>
    </motion.li>
  );
}

// ── Milestone card ────────────────────────────────────────────────────────────
function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[number];
  index: number;
}) {
  // Alternate entrance direction: even → left, odd → right
  const xFrom = index % 2 === 0 ? -30 : 30;

  return (
    <motion.article
      initial={{ opacity: 0, x: xFrom, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={[
        "relative rounded-2xl border p-6 shadow-subtle cursor-default",
        "transition-shadow hover:shadow-elevated",
        milestone.bg,
        milestone.border,
        milestone.offsetY,
      ].join(" ")}
      aria-label={`Journey milestone: ${milestone.title}`}
    >
      {/* Big decorative number — background watermark */}
      <span
        className="absolute top-3 right-4 font-display font-extrabold text-[4.5rem] leading-none opacity-[0.08] select-none pointer-events-none"
        aria-hidden="true"
      >
        {milestone.number}
      </span>

      {/* Emoji badge */}
      <div
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/60 backdrop-blur-sm shadow-subtle mb-4 text-xl"
        aria-hidden="true"
      >
        {milestone.emoji}
      </div>

      {/* Years pill */}
      <p
        className={`text-xs font-semibold tracking-wider uppercase mb-1 ${milestone.accent}`}
      >
        {milestone.years}
      </p>

      {/* Title */}
      <h3 className="text-lg font-display font-bold text-foreground mb-2">
        {milestone.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {milestone.description}
      </p>

      {/* Connector dot — hidden on mobile */}
      <div
        className={[
          "absolute hidden lg:block w-3 h-3 rounded-full bg-white border-2 border-border",
          "bottom-[-6px] left-1/2 -translate-x-1/2",
        ].join(" ")}
        aria-hidden="true"
      />
    </motion.article>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full blur-[120px] opacity-25 pointer-events-none -translate-y-1/2"
        style={{ background: "oklch(0.88 0.08 280)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none translate-y-1/2"
        style={{ background: "oklch(0.88 0.08 50)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
            A little story
          </p>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-display font-extrabold text-foreground"
          >
            My Developer <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Five years of writing code, shipping products, and learning
            something new every single week.
          </p>
          <div
            className="mt-5 mx-auto w-16 h-1 rounded-full gradient-primary"
            aria-hidden="true"
          />
        </motion.div>

        {/* ── Milestone cards — non-linear staggered grid ── */}
        <div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 lg:items-start"
          aria-label="Developer journey milestones"
        >
          {MILESTONES.map((m, i) => (
            <MilestoneCard key={m.number} milestone={m} index={i} />
          ))}
        </div>

        {/* ── Connector line (desktop only) ── */}
        <div className="hidden lg:block relative mt-0 mx-8" aria-hidden="true">
          <div className="absolute top-0 left-0 right-0 h-px bg-border" />
        </div>

        {/* ── Stats counters ── */}
        <div className="mt-16">
          <ul
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0"
            aria-label="Developer statistics"
          >
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
