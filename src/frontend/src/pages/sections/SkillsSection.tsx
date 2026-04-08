import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiCss,
  SiDocker,
  SiDotnet,
  SiFastify,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// ── Types ────────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  Icon: IconType | null;
  color: string;
  detail: string;
}

interface Category {
  name: string;
  emoji: string;
  bgClass: string;
  headingColor: string;
  glowColor: string;
  skills: Skill[];
}

// ── Icon + detail map ────────────────────────────────────────────────────────

const SKILL_META: Record<
  string,
  { Icon: IconType | null; color: string; detail: string }
> = {
  Angular: {
    Icon: SiAngular,
    color: "#DD0031",
    detail: "Component-driven SPA framework",
  },
  React: {
    Icon: SiReact,
    color: "#61DAFB",
    detail: "UI library with hooks & concurrent mode",
  },
  "Next.js": {
    Icon: SiNextdotjs,
    color: "#000000",
    detail: "Full-stack React meta-framework",
  },
  TypeScript: {
    Icon: SiTypescript,
    color: "#3178C6",
    detail: "Typed superset of JavaScript",
  },
  HTML5: {
    Icon: SiHtml5,
    color: "#E34F26",
    detail: "Semantic markup & accessibility",
  },
  CSS3: {
    Icon: SiCss,
    color: "#1572B6",
    detail: "Cascading styles & animations",
  },
  "Tailwind CSS": {
    Icon: SiTailwindcss,
    color: "#06B6D4",
    detail: "Utility-first CSS framework",
  },
  ".NET Core": {
    Icon: SiDotnet,
    color: "#512BD4",
    detail: "High-performance backend runtime",
  },
  "Node.js": {
    Icon: SiNodedotjs,
    color: "#339933",
    detail: "JavaScript server-side runtime",
  },
  Fastify: {
    Icon: SiFastify,
    color: "#000000",
    detail: "Blazing-fast Node.js web framework",
  },
  "REST APIs": {
    Icon: null,
    color: "#FF6B35",
    detail: "Stateless API architecture",
  },
  GraphQL: {
    Icon: SiGraphql,
    color: "#E535AB",
    detail: "Query language for APIs",
  },
  "SQL Server": {
    Icon: null,
    color: "#CC2927",
    detail: "Enterprise relational database",
  },
  PostgreSQL: {
    Icon: SiPostgresql,
    color: "#336791",
    detail: "Advanced open-source RDBMS",
  },
  MongoDB: {
    Icon: SiMongodb,
    color: "#47A248",
    detail: "Flexible document database",
  },
  Redis: {
    Icon: SiRedis,
    color: "#DC382D",
    detail: "In-memory data structure store",
  },
  AWS: {
    Icon: null,
    color: "#FF9900",
    detail: "Leading cloud provider",
  },
  Docker: {
    Icon: SiDocker,
    color: "#2496ED",
    detail: "Containerisation platform",
  },
  Kubernetes: {
    Icon: SiKubernetes,
    color: "#326CE5",
    detail: "Container orchestration at scale",
  },
  "CI/CD": {
    Icon: null,
    color: "#F97316",
    detail: "Continuous integration & delivery",
  },
  Git: { Icon: SiGit, color: "#F05032", detail: "Distributed version control" },
  "GitHub Actions": {
    Icon: SiGithubactions,
    color: "#2088FF",
    detail: "Automated CI/CD workflows",
  },
  "Power Apps": {
    Icon: null,
    color: "#742774",
    detail: "Low-code app development",
  },
  "Power Automate": {
    Icon: null,
    color: "#0078D4",
    detail: "Workflow automation platform",
  },
  "Power Pages": {
    Icon: null,
    color: "#9B59B6",
    detail: "Professional web portal builder",
  },
  Dataverse: {
    Icon: null,
    color: "#742774",
    detail: "Enterprise data platform",
  },
  "Power BI": {
    Icon: null,
    color: "#F2C811",
    detail: "Business intelligence & analytics",
  },
};

// ── Category definitions ─────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    name: "Frontend",
    emoji: "🎨",
    bgClass: "bg-[oklch(0.97_0.03_300)]",
    headingColor: "text-[oklch(0.55_0.22_295)]",
    glowColor: "oklch(0.72_0.18_295)",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ].map((n) => ({
      name: n,
      ...SKILL_META[n],
    })),
  },
  {
    name: "Backend",
    emoji: "⚙️",
    bgClass: "bg-[oklch(0.97_0.03_175)]",
    headingColor: "text-[oklch(0.48_0.18_175)]",
    glowColor: "oklch(0.68_0.18_175)",
    skills: [".NET Core", "Node.js", "Fastify", "REST APIs", "GraphQL"].map(
      (n) => ({
        name: n,
        ...SKILL_META[n],
      }),
    ),
  },
  {
    name: "Databases",
    emoji: "🗄️",
    bgClass: "bg-[oklch(0.97_0.03_250)]",
    headingColor: "text-[oklch(0.50_0.22_255)]",
    glowColor: "oklch(0.65_0.2_255)",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"].map((n) => ({
      name: n,
      ...SKILL_META[n],
    })),
  },
  {
    name: "Cloud & Tools",
    emoji: "☁️",
    bgClass: "bg-[oklch(0.97_0.03_40)]",
    headingColor: "text-[oklch(0.52_0.18_30)]",
    glowColor: "oklch(0.70_0.18_30)",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub Actions",
    ].map((n) => ({
      name: n,
      ...SKILL_META[n],
    })),
  },
  {
    name: "Power Platform",
    emoji: "⚡",
    bgClass: "bg-[oklch(0.97_0.03_325)]",
    headingColor: "text-[oklch(0.48_0.22_320)]",
    glowColor: "oklch(0.65_0.20_320)",
    skills: [
      "Power Apps",
      "Power Automate",
      "Power Pages",
      "Dataverse",
      "Power BI",
    ].map((n) => ({
      name: n,
      ...SKILL_META[n],
    })),
  },
];

// ── Scatter offsets (organic, non-uniform) ───────────────────────────────────
// Each row of offsets is: [translateX%, rotate, scale, delay-offset]
const SCATTER_OFFSETS = [
  [0, -4, 1.0, 0.0],
  [12, 3, 1.0, 0.05],
  [-8, 6, 1.0, 0.1],
  [18, -5, 1.0, 0.15],
  [-5, 2, 1.0, 0.2],
  [9, -7, 1.0, 0.25],
  [-14, 4, 1.0, 0.3],
] as const;

// ── SkillPill ────────────────────────────────────────────────────────────────

interface SkillPillProps {
  skill: Skill;
  offsetIndex: number;
  categoryIndex: number;
  skillIndex: number;
  glowColor: string;
}

function SkillPill({
  skill,
  offsetIndex,
  categoryIndex,
  skillIndex,
  glowColor,
}: SkillPillProps) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const showTooltip = hovered || focused;

  const offset = SCATTER_OFFSETS[offsetIndex % SCATTER_OFFSETS.length];
  const xPercent = offset[0];
  const rotate = offset[1];
  const delayBase = categoryIndex * 0.12 + skillIndex * 0.06;

  const { Icon } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: delayBase,
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      style={{ x: `${xPercent}%`, rotate: `${rotate}deg` }}
      className="relative inline-flex"
      data-ocid={`skill-pill-${skill.name.toLowerCase().replace(/[\s.&/]+/g, "-")}`}
    >
      <motion.button
        type="button"
        className="relative flex items-center gap-2 px-3.5 py-2 rounded-full border border-border/60 bg-card shadow-subtle text-sm font-medium text-foreground cursor-default outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
        style={{ "--pill-glow": glowColor } as React.CSSProperties}
        whileHover={{
          scale: 1.12,
          rotate: 0,
          boxShadow: `0 0 18px ${glowColor}55, 0 4px 16px rgba(0,0,0,0.10)`,
        }}
        whileFocus={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-label={`${skill.name}: ${skill.detail}`}
        aria-describedby={
          showTooltip ? `tt-${skill.name.replace(/[\s.&/]+/g, "-")}` : undefined
        }
      >
        {Icon ? (
          <span aria-hidden="true" className="shrink-0">
            <Icon size={16} color={skill.color} />
          </span>
        ) : (
          <span
            aria-hidden="true"
            className="w-3.5 h-3.5 rounded-full shrink-0 opacity-80"
            style={{ background: skill.color }}
          />
        )}
        <span>{skill.name}</span>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            id={`tt-${skill.name.replace(/[\s.&/]+/g, "-")}`}
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.92 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 pointer-events-none"
          >
            <div className="bg-foreground text-background text-xs px-3 py-1.5 rounded-lg whitespace-nowrap max-w-48 text-center leading-snug shadow-elevated">
              {skill.detail}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── CategoryCluster ──────────────────────────────────────────────────────────

interface CategoryClusterProps {
  category: Category;
  catIndex: number;
  reverse?: boolean;
}

function CategoryCluster({
  category,
  catIndex,
  reverse = false,
}: CategoryClusterProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: reverse ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: catIndex * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`relative rounded-3xl p-6 sm:p-8 ${category.bgClass} shadow-subtle overflow-visible`}
      aria-labelledby={`cat-${catIndex}`}
    >
      {/* Soft glow blob behind cluster */}
      <div
        aria-hidden="true"
        className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-30 pointer-events-none"
        style={{ background: category.glowColor }}
      />

      {/* Category header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl leading-none" aria-hidden="true">
          {category.emoji}
        </span>
        <h3
          id={`cat-${catIndex}`}
          className={`font-display font-bold text-xl sm:text-2xl ${category.headingColor}`}
        >
          {category.name}
        </h3>
      </div>

      {/* Organic scattered pills */}
      <div
        className="flex flex-wrap gap-x-3 gap-y-4"
        aria-label={`${category.name} skills`}
      >
        {category.skills.map((skill, si) => (
          <SkillPill
            key={skill.name}
            skill={skill}
            offsetIndex={si}
            categoryIndex={catIndex}
            skillIndex={si}
            glowColor={category.glowColor}
          />
        ))}
      </div>
    </motion.article>
  );
}

// ── SkillsSection ────────────────────────────────────────────────────────────

// Floating decorative shapes
const SHAPES = [
  { size: 64, top: "8%", left: "4%", color: "oklch(0.85 0.10 300)", delay: 0 },
  {
    size: 44,
    top: "15%",
    right: "6%",
    color: "oklch(0.85 0.10 175)",
    delay: 1.2,
  },
  {
    size: 52,
    top: "45%",
    left: "2%",
    color: "oklch(0.85 0.10 40)",
    delay: 2.4,
  },
  {
    size: 36,
    bottom: "20%",
    right: "3%",
    color: "oklch(0.85 0.10 255)",
    delay: 0.8,
  },
  {
    size: 48,
    bottom: "10%",
    left: "8%",
    color: "oklch(0.85 0.10 320)",
    delay: 1.8,
  },
] as const;

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Floating decorative shapes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {SHAPES.map((shape, i) => (
          <motion.div
            key={`shape-${shape.color}-${i}`}
            className="absolute rounded-full blur-xl opacity-60 float-shape"
            style={{
              width: shape.size,
              height: shape.size,
              background: shape.color,
              top: "top" in shape ? shape.top : undefined,
              bottom: "bottom" in shape ? shape.bottom : undefined,
              left: "left" in shape ? shape.left : undefined,
              right: "right" in shape ? shape.right : undefined,
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            The Toolkit
          </p>
          <h2
            id="skills-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl text-foreground leading-tight"
          >
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 mx-auto w-20 h-1 rounded-full gradient-primary origin-left"
            aria-hidden="true"
          />
          <p className="mt-5 text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            A curated stack across five domains — built for{" "}
            <span className="text-primary font-medium">scale</span>,{" "}
            <span className="text-secondary font-medium">performance</span>, and{" "}
            great developer experience.
          </p>
        </motion.div>

        {/* Two-column layout on tablet, single on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.name}
              className={
                /* Last item (Power Platform) spans full width if odd total */
                i === CATEGORIES.length - 1 && CATEGORIES.length % 2 !== 0
                  ? "sm:col-span-2"
                  : ""
              }
            >
              <CategoryCluster
                category={cat}
                catIndex={i}
                reverse={i % 2 !== 0}
              />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Always learning — currently exploring{" "}
          <span className="text-primary font-semibold">AI/ML integrations</span>{" "}
          and{" "}
          <span
            className="font-semibold"
            style={{ color: "oklch(0.55 0.18 175)" }}
          >
            Rust for WebAssembly
          </span>
          .
        </motion.p>
      </div>
    </section>
  );
}
