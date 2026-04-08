import { useEffect, useRef } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

/** Custom cursor dot that follows the mouse on desktop */
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only on pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.opacity = "0";
    ring.style.opacity = "0";

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.12);
      ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.12);
      ring.style.transform = `translate(${ringPosRef.current.x - 16}px, ${ringPosRef.current.y - 16}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/40 z-[9999] transition-opacity duration-300"
        style={{ willChange: "transform", opacity: 0 }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[9999] transition-opacity duration-300"
        style={{ willChange: "transform", opacity: 0 }}
      />
    </>
  );
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main id="main-content" className="flex-1 pt-16" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
