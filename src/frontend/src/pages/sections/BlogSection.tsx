import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/portfolioData";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "motion/react";

const CATEGORY_COLORS: Record<string, string> = {
  Angular: "border-red-400/40 text-red-600 bg-red-50",
  ".NET": "border-blue-400/40 text-blue-600 bg-blue-50",
  "Power Platform": "border-amber-400/40 text-amber-600 bg-amber-50",
};

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24 bg-muted/20 section-glow relative overflow-hidden"
      aria-labelledby="blog-heading"
    >
      {/* Subtle bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, oklch(0.65 0.25 300 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2">
            {"// dev_blog.md"}
          </p>
          <h2
            id="blog-heading"
            className="font-display text-4xl md:text-5xl font-bold"
          >
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Deep dives, tutorials, and opinions on modern web development and
            software architecture.
          </p>
        </motion.div>

        <ul
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto list-none p-0"
          aria-label="Blog articles"
        >
          {blogPosts.map((post, i) => (
            <motion.li
              key={post.id}
              className="glass-card rounded-2xl p-6 hover-lift gradient-border flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <article aria-labelledby={`blog-title-${post.id}`}>
                {/* Category + read time */}
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant="outline"
                    className={`text-xs ${CATEGORY_COLORS[post.category] ?? "border-border text-muted-foreground"}`}
                  >
                    {post.category}
                  </Badge>
                  <span
                    className="flex items-center gap-1 text-xs text-muted-foreground"
                    aria-label={`Estimated reading time: ${post.readTime}`}
                  >
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title + Excerpt */}
                <div className="flex-1 mb-4">
                  <h3
                    id={`blog-title-${post.id}`}
                    className="font-display font-bold text-base leading-snug mb-2"
                  >
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta: author + date */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User
                      className="w-3 h-3 text-primary/60"
                      aria-hidden="true"
                    />
                    Alex Rivera
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar
                      className="w-3 h-3 text-primary/60"
                      aria-hidden="true"
                    />
                    <time dateTime={post.date}>{post.date}</time>
                  </span>
                </div>

                {/* Footer: read more */}
                <div className="pt-3 border-t border-border">
                  <span
                    className="flex items-center gap-1 text-xs text-muted-foreground font-medium group w-fit cursor-default select-none"
                    aria-label={`${post.title} — coming soon`}
                    data-ocid={`blog-read-${post.id}`}
                    title="Full article coming soon"
                  >
                    Coming soon
                    <ArrowRight
                      className="w-3 h-3 opacity-50"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
