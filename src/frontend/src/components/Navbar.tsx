import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={`Navigate to ${label} section`}
      className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group py-1"
    >
      {label}
      <span
        className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 ease-out group-hover:w-full"
        aria-hidden="true"
      />
    </a>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-subtle" : "bg-transparent"
      }`}
    >
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-2"
          aria-label="Alex Rivera — Full Stack Developer, return to top"
        >
          {/* Playful monogram */}
          <span
            className="flex items-center justify-center w-9 h-9 rounded-xl gradient-primary text-white font-display font-black text-base leading-none shadow-subtle transition-smooth group-hover:scale-110 group-hover:rotate-3"
            aria-hidden="true"
          >
            AR
          </span>
          <span className="font-display font-bold text-lg gradient-text hidden sm:inline-block">
            Alex Rivera
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            size="sm"
            onClick={handleContactClick}
            className="gradient-primary text-white border-0 hover:opacity-90 transition-smooth shadow-subtle hover:shadow-glow rounded-xl px-5 font-medium"
            data-ocid="nav-contact-cta"
          >
            Hire Me ✨
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-muted rounded-xl"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="nav-mobile-trigger"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="glass-card border-border/50 w-72 shadow-elevated"
          >
            {/* Mobile logo */}
            <div className="flex items-center gap-2 pb-6 border-b border-border/50">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl gradient-primary text-white font-display font-black text-base leading-none">
                AR
              </span>
              <span className="font-display font-bold text-lg gradient-text">
                Alex Rivera
              </span>
            </div>
            <nav
              className="flex flex-col gap-5 mt-6"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <Button
                className="gradient-primary text-white border-0 mt-2 rounded-xl shadow-subtle hover:shadow-glow transition-smooth"
                onClick={() => {
                  setMobileOpen(false);
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="nav-mobile-contact-cta"
              >
                Hire Me ✨
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
