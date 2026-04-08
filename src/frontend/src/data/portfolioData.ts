import type {
  BlogPost,
  Experience,
  Project,
  SkillCategory,
  SocialLink,
} from "../types/portfolio";

export const developerInfo = {
  name: "Alex Rivera",
  title: "Full Stack Developer",
  tagline: "Building modern, scalable web experiences with code and design.",
  bio: "I'm a passionate Full Stack Developer with 5+ years of experience crafting end-to-end solutions across the web stack. My expertise spans Angular, React, .NET Core, and Node.js—with a special focus on Microsoft Power Platform for enterprise automation. I care deeply about clean architecture, developer experience, and shipping products that users actually love.",
  location: "San Francisco, CA",
  email: "alex@alexrivera.dev",
  resumeUrl: "#",
  avatarUrl: "/assets/generated/avatar-developer-transparent.dim_200x200.png",
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [".NET Core", "Node.js", "Fastify", "REST APIs", "GraphQL"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions"],
  },
  {
    name: "Power Platform",
    icon: "⚡",
    skills: [
      "Power Apps",
      "Power Automate",
      "Power Pages",
      "Dataverse",
      "Power BI",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "travel-booking",
    title: "Travel Booking Microservices System",
    description:
      "A cloud-native travel booking platform built with microservices architecture. Handles real-time flight search, hotel reservations, and payment processing at scale. Features event-driven communication via message queues and distributed caching for high performance.",
    image: "/assets/generated/project-travel-booking.dim_600x400.jpg",
    techStack: [
      ".NET Core",
      "Angular",
      "RabbitMQ",
      "Docker",
      "PostgreSQL",
      "AWS",
    ],
    githubUrl: "https://github.com/alexrivera/travel-booking",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    description:
      "Enterprise inventory solution with real-time tracking, automated reorder triggers, and supplier management. Built for multi-warehouse operations with barcode scanning integration and detailed analytics dashboards.",
    image: "/assets/generated/project-inventory.dim_600x400.jpg",
    techStack: ["React", "Node.js", "Fastify", "MongoDB", "Power BI", "Docker"],
    githubUrl: "https://github.com/alexrivera/inventory-system",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "helpdesk-tickets",
    title: "Helpdesk Ticket Management System",
    description:
      "Full-featured support desk platform with SLA tracking, automated routing, and Priority queue management. Integrates with email and Slack for seamless team collaboration. Built on Power Platform with custom Dataverse tables.",
    image: "/assets/generated/project-helpdesk.dim_600x400.jpg",
    techStack: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Power Pages",
      "TypeScript",
    ],
    githubUrl: "https://github.com/alexrivera/helpdesk-system",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "jewelry-ecommerce",
    title: "Jewelry E-commerce Platform",
    description:
      "Luxury jewelry shopping platform with AR try-on features, 3D product visualization, and personalized recommendations engine. Includes multi-currency support, wishlist, and a polished admin dashboard for catalog management.",
    image: "/assets/generated/project-jewelry-ecommerce.dim_600x400.jpg",
    techStack: [
      "Next.js",
      ".NET Core",
      "SQL Server",
      "Stripe",
      "AWS S3",
      "Redis",
    ],
    githubUrl: "https://github.com/alexrivera/jewelry-platform",
    liveUrl: "#",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "tech-corp",
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    period: "Jan 2023 – Present",
    location: "San Francisco, CA",
    description:
      "Leading frontend architecture and backend API development for enterprise clients. Mentor junior developers and establish coding standards across the team.",
    highlights: [
      "Architected Angular microfrontend platform reducing deployment time by 60%",
      "Built .NET Core microservices handling 500K+ daily transactions",
      "Led Power Platform adoption saving 1,200+ man-hours per month",
      "Introduced automated testing pipeline achieving 90%+ code coverage",
    ],
    current: true,
  },
  {
    id: "innovate-solutions",
    company: "Innovate Solutions",
    role: "Full Stack Developer",
    period: "Mar 2021 – Dec 2022",
    location: "Austin, TX",
    description:
      "Developed customer-facing web applications and internal tools for mid-size enterprise clients. Specialized in Angular SPA development and Node.js backend services.",
    highlights: [
      "Delivered 12+ client projects on time with zero critical post-launch bugs",
      "Built real-time dashboard using WebSockets reducing page refresh cycles by 100%",
      "Migrated legacy jQuery codebase to Angular 14 with zero downtime",
      "Integrated Dataverse and Power Automate for workflow automation",
    ],
  },
  {
    id: "startup-labs",
    company: "StartupLabs Inc.",
    role: "Junior Frontend Developer",
    period: "Jun 2019 – Feb 2021",
    location: "Remote",
    description:
      "Focused on building responsive UI components and improving web performance. Worked closely with design team to implement pixel-perfect interfaces.",
    highlights: [
      "Improved Lighthouse performance score from 54 to 92 across 8 products",
      "Built reusable React component library adopted by 4 internal teams",
      "Implemented lazy-loading and code splitting reducing initial bundle by 45%",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "angular-signals",
    title: "Angular Signals Deep Dive: Reactive State Without RxJS Complexity",
    excerpt:
      "Signals are Angular's new reactive primitive that simplifies state management. Learn how to migrate from BehaviorSubjects and write cleaner, more performant Angular apps.",
    category: "Angular",
    readTime: "8 min read",
    date: "Mar 15, 2026",
    slug: "angular-signals-deep-dive",
  },
  {
    id: "dotnet-minimal-apis",
    title: "Building Lightning-Fast APIs with .NET 9 Minimal APIs",
    excerpt:
      "Minimal APIs in .NET 9 have evolved significantly. This guide covers best practices, validation, authentication, and structuring production-ready endpoints.",
    category: ".NET",
    readTime: "12 min read",
    date: "Feb 28, 2026",
    slug: "dotnet-9-minimal-apis",
  },
  {
    id: "power-platform-devs",
    title: "Power Platform for Developers: Beyond No-Code",
    excerpt:
      "Power Platform isn't just for citizen developers. Explore PCF components, connector development, and how to extend capabilities with TypeScript and Azure Functions.",
    category: "Power Platform",
    readTime: "10 min read",
    date: "Jan 20, 2026",
    slug: "power-platform-for-developers",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/alexrivera",
    ariaLabel: "Alex Rivera on GitHub",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/alexrivera",
    ariaLabel: "Alex Rivera on LinkedIn",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/alexrivera_dev",
    ariaLabel: "Alex Rivera on Twitter",
    icon: "twitter",
  },
];
