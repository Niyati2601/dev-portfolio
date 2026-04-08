# Design Brief

## Direction

Light, Playful, Artistic Developer Portfolio — Inviting and memorable. Soft cream background with warm pastel accents (coral, sage, lavender) and floating animated elements as the signature visual experience.

## Tone

Creative and approachable with refined elegance. Playful interactive details (animated floating shapes, parallax scrolling) paired with sophisticated serif typography create an award-winning portfolio aesthetic.

## Differentiation

Floating animated geometric shapes, creative card layouts (scattered, not grid), and scroll-triggered parallax effects create visual playfulness. Warm pastel palette with artful serif display typography (Fraunces) signals creative craft and intentional design.

## Color Palette

| Token       | OKLCH              | Role                          |
| ----------- | ------------------ | ----------------------------- |
| background  | 0.98 0.008 270     | Soft cream primary surface    |
| foreground  | 0.25 0.04 255      | Deep navy text                |
| card        | 0.985 0.01 270     | Elevated light surface        |
| primary     | 0.65 0.16 25       | Warm coral accent             |
| accent      | 0.72 0.14 35       | Peachy-pink interactive       |
| secondary   | 0.78 0.12 140      | Soft sage green               |
| muted       | 0.92 0.01 270      | Light neutral background      |
| destructive | 0.55 0.18 25       | Warm red error state          |

## Typography

- Display: Fraunces — Hero text, section headings (serif, artistic, elegant)
- Body: Figtree — Content, descriptions, UI labels (light weight, modern, friendly)
- Mono: JetBrains Mono — Code blocks, inline tech references
- Scale: Hero `text-6xl md:text-7xl font-bold`, H2 `text-3xl md:text-5xl font-bold`, Label `text-xs font-semibold uppercase tracking-widest`, Body `text-base md:text-lg`

## Elevation & Depth

Soft, subtle shadows create gentle depth without heavy contrast. Floating animated shapes and parallax scrolling add visual movement. Cards lift on hover with smooth transitions (no harsh shadows on light background).

## Structural Zones

| Zone           | Treatment                              | Border                           | Notes                            |
| -------------- | -------------------------------------- | -------------------------------- | -------------------------------- |
| Header/Nav     | oklch(0.98 0.008 270) glass effect    | Soft bottom border, warm tint     | Sticky top, semi-transparent     |
| Hero Section   | Soft gradient background + floating shapes | None (bleeds to edge)            | Full viewport, parallax enabled  |
| Content Cards  | oklch(0.985 0.01 270) with soft shadow | Subtle warm accent border         | Hover-lift with gentle scale     |
| Sections       | Alternating: card + muted backgrounds  | Soft dividers (no harsh lines)   | Smooth transitions between zones |
| Footer         | oklch(0.92 0.01 270) light neutral     | Top border soft accent           | Copyright, links, social         |

## Spacing & Rhythm

Base 8px grid. Spacious section gaps (5-8 rem between sections) create breathing room. Cards grouped with 1.5-2rem padding inside. Micro-spacing (4-8px) between UI elements. Staggered animations on card entrance (100ms per card) create visual rhythm.

## Component Patterns

- Buttons: Primary (gradient bg, rounded 8px, hover-lift), Ghost (transparent, border, hover color change)
- Cards: Glass effect (backdrop blur 20px, gradient border), hover-lift (transform -8px, shadow-elevated)
- Badges: Rounded full, small padding, accent color with semi-transparent background
- Links: Gradient underline on hover, smooth transition

## Motion

- Entrance: Fade-in + scale (0.6s ease-out) on scroll reveal, staggered per element
- Floating shapes: Continuous gentle floating animation (6-8s cycle), slightly rotated
- Hover: Lift (transform -6px, soft shadow) on cards/buttons, smooth 0.3s
- Parallax: Hero section scrolls slower than viewport (subtle depth effect)
- Scroll-triggered: Cards scale-in as they enter viewport, creative stagger per section
- All animations respect prefers-reduced-motion

## Constraints

- Light theme default (no dark mode toggle needed)
- Soft shadows only — max blur 12px, opacity 6-8%
- Warm palette accent range (coral 25°, peach 35°, sage 140°) — no cool purples
- Border radius: 16px standard, 24px for large cards, 8px for small UI elements
- Floating shapes use CSS animations, parallax on scroll handlers (not CSS-only)
- High contrast enforced (L diff >= 0.73 on background/foreground for WCAG AA+)
- Mobile-first breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- Lighthouse target: 90+ (optimized images, lazy loading, minimal CLS)

## Signature Detail

Floating animated geometric shapes with parallax scrolling and creative card scatter layouts create an immediately recognizable, playful-yet-refined portfolio aesthetic that stands out from template designs.

---

## Token References

**Font-Face declarations** in `index.css`: Fraunces (serif display), Figtree (body), JetBrains Mono  
**Gradient tokens**: `--gradient-primary` (135deg, coral → peach → sage), reduced opacity for light backgrounds  
**Utility classes**: `.glass-card` (light theme), `.hover-lift`, `.shadow-subtle`, `.gradient-text`, `.float-shape`, `.float-shape-delayed`  
**Animation keyframes**: `fade-in`, `slide-up`, `scale-in`, `float` (all respect prefers-reduced-motion)  
**Palette**: Warm OKLCH values (25°–35° hue for accent, 140° for secondary), low chroma (0.14–0.16) for pastels
