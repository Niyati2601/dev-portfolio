import { developerInfo, socialLinks } from "@/data/portfolioData";
import { Linkedin } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";

const ICON_MAP: Record<string, React.ReactNode> = {
  github: <SiGithub className="w-4 h-4" aria-hidden="true" />,
  linkedin: <Linkedin className="w-4 h-4" aria-hidden="true" />,
  twitter: <SiX className="w-4 h-4" aria-hidden="true" />,
};

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-card border-t border-border/60 relative overflow-hidden"
      aria-label="Site footer"
    >
      {/* Soft background accent */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 120%, oklch(0.65 0.16 25 / 0.08), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="/"
              className="group flex items-center gap-2 w-fit"
              aria-label="Niyati Shah — return to top"
            >
              <span
                className="flex items-center justify-center w-9 h-9 rounded-xl gradient-primary text-white font-display font-black text-base leading-none transition-smooth group-hover:scale-110 group-hover:rotate-3"
                aria-hidden="true"
              >
                AR
              </span>
              <span className="font-display font-bold text-lg gradient-text">
                {developerInfo.name}
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full Stack Developer crafting modern, scalable web experiences
              with Angular, .NET Core, Node.js, and Power Platform.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation" className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-foreground tracking-wide">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-0.5 inline-block transition-transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-foreground tracking-wide">
              Connect
            </h3>
            <ul className="flex gap-3" aria-label="Social media links">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-muted/60 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/30 transition-smooth hover:-translate-y-1"
                  >
                    {ICON_MAP[link.icon]}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${developerInfo.email}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 block"
            >
              {developerInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year}{" "}
            <span className="font-medium text-foreground/70">
              {developerInfo.name}
            </span>
            . All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
