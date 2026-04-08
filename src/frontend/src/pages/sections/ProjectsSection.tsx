import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolioData";
import type { Project } from "@/types/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

/* ─── Pastel badge palette (light theme) ─── */
const techColorMap: Record<string, string> = {
  Angular: "bg-red-50    border-red-200   text-red-700",
  React: "bg-sky-50    border-sky-200   text-sky-700",
  "Next.js": "bg-stone-50  border-stone-300 text-stone-700",
  TypeScript: "bg-blue-50   border-blue-200  text-blue-700",
  ".NET Core": "bg-violet-50 border-violet-200 text-violet-700",
  "Node.js": "bg-green-50  border-green-200  text-green-700",
  Fastify: "bg-amber-50  border-amber-200  text-amber-700",
  PostgreSQL: "bg-blue-50   border-blue-200   text-blue-700",
  MongoDB: "bg-emerald-50 border-emerald-200 text-emerald-700",
  "SQL Server": "bg-orange-50 border-orange-200 text-orange-700",
  Redis: "bg-red-50    border-red-200   text-red-700",
  Docker: "bg-sky-50    border-sky-200   text-sky-700",
  AWS: "bg-amber-50  border-amber-200  text-amber-700",
  "AWS S3": "bg-amber-50  border-amber-200  text-amber-700",
  RabbitMQ: "bg-orange-50 border-orange-200 text-orange-700",
  Stripe: "bg-violet-50 border-violet-200 text-violet-700",
  "Power Apps": "bg-primary/8 border-primary/30 text-primary",
  "Power Automate": "bg-primary/8 border-primary/30 text-primary",
  "Power Pages": "bg-primary/8 border-primary/30 text-primary",
  Dataverse: "bg-primary/8 border-primary/30 text-primary",
  "Power BI": "bg-amber-50  border-amber-200  text-amber-700",
};

function getTechBadgeClass(tech: string): string {
  return (
    techColorMap[tech] ??
    "bg-secondary/10 border-secondary/30 text-secondary-foreground"
  );
}

/* ─── Card accent colours per index ─── */
const cardAccents = [
  {
    glow: "from-orange-200/40 via-amber-100/30 to-transparent",
    num: "text-orange-200/50",
  },
  {
    glow: "from-violet-200/40 via-purple-100/30 to-transparent",
    num: "text-violet-200/50",
  },
  {
    glow: "from-sky-200/40   via-blue-100/30   to-transparent",
    num: "text-sky-200/50",
  },
  {
    glow: "from-emerald-200/40 via-teal-100/30 to-transparent",
    num: "text-emerald-200/50",
  },
];

/* ─── JSON-LD structured data ─── */
function ProjectJsonLd({ project }: { project: Project }) {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    image: project.image,
    url: project.liveUrl !== "#" ? project.liveUrl : undefined,
    codeRepository: project.githubUrl,
    programmingLanguage: project.techStack,
    author: {
      "@type": "Person",
      name: "Niyati Shah",
      url: "https://alexrivera.dev",
    },
  });
  const props = {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: schema },
  } as React.ScriptHTMLAttributes<HTMLScriptElement> & {
    dangerouslySetInnerHTML: { __html: string };
  };
  return <script {...props} />;
}

/* ─── Individual project card ─── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = cardAccents[index % cardAccents.length];
  /* Stagger offset: cards 0 & 2 sit slightly higher, 1 & 3 slightly lower */
  const verticalOffset = index % 2 === 0 ? "md:mt-0" : "md:mt-10";

  return (
    <motion.article
      key={project.id}
      data-ocid={`project-card-${project.id}`}
      className={`group relative ${verticalOffset}`}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.13,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Card shell */}
      <div
        className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-subtle
                   transition-all duration-500 ease-out
                   hover:-translate-y-3 hover:shadow-[0_24px_48px_-10px_rgba(0,0,0,0.12),0_0_0_1.5px_rgba(200,120,80,0.18)]
                   focus-within:-translate-y-3 focus-within:shadow-[0_24px_48px_-10px_rgba(0,0,0,0.12)]
                   flex flex-col h-full"
      >
        {/* ── Image block ── */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={project.image}
            alt={`${project.title} — screenshot featuring ${project.techStack.slice(0, 2).join(" and ")}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
            width={600}
            height={375}
          />

          {/* Permanent soft gradient at bottom of image */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Hover colour glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            aria-hidden="true"
          />

          {/* Project number watermark */}
          <span
            className={`absolute top-4 right-5 font-display font-black text-6xl leading-none select-none pointer-events-none ${accent.num} transition-all duration-500 group-hover:scale-110 group-hover:opacity-80`}
            aria-hidden="true"
          >
            0{index + 1}
          </span>
        </div>

        {/* ── Content ── */}
        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="min-w-0">
            <h3 className="font-display font-bold text-xl leading-snug text-card-foreground group-hover:gradient-text transition-all duration-300 line-clamp-2">
              {project.title}
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tech badges */}
          <ul
            className="flex flex-wrap gap-1.5 list-none p-0 m-0"
            aria-label={`Technologies used in ${project.title}`}
          >
            {project.techStack.map((tech) => (
              <li key={tech}>
                <Badge
                  variant="outline"
                  className={`text-xs font-mono px-2.5 py-0.5 border font-medium tracking-wide transition-smooth ${getTechBadgeClass(tech)}`}
                >
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>

          {/* Action buttons — slide-up on hover */}
          <div
            className="flex items-center gap-3 pt-1
                       translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                       transition-all duration-400 ease-out
                       focus-within:translate-y-0 focus-within:opacity-100"
          >
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-border hover:border-primary/50 hover:bg-primary/5 text-xs gap-1.5 transition-smooth flex-1 sm:flex-none"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  data-ocid={`project-github-${project.id}`}
                >
                  <Github className="w-3.5 h-3.5" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                size="sm"
                asChild
                className="gradient-primary text-white border-0 text-xs gap-1.5 hover:opacity-90 transition-smooth shadow-glow flex-1 sm:flex-none"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title} (opens in new tab)`}
                  data-ocid={`project-demo-${project.id}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Bottom accent line — scales in on hover */}
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500 ease-out"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}

/* ─── Section ─── */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28 bg-background relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* JSON-LD */}
      {projects.map((p) => (
        <ProjectJsonLd key={p.id} project={p} />
      ))}

      {/* Decorative background blobs */}
      <div
        className="absolute top-1/4 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.12 140 / 0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.16 25 / 0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-primary font-body text-sm font-semibold mb-3 tracking-widest uppercase">
            What I've built
          </p>
          <h2
            id="projects-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
          >
            Featured <em className="not-italic gradient-text">Projects</em>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed text-base">
            Real-world applications crafted with modern architectures,
            production-grade engineering, and a relentless focus on user
            experience.
          </p>
        </motion.div>

        {/* Cards grid — intentional vertical stagger on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 md:items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
