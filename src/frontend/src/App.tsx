import { Toaster } from "@/components/ui/sonner";
import { Layout } from "./components/Layout";
import { AboutSection } from "./pages/sections/AboutSection";
import { BlogSection } from "./pages/sections/BlogSection";
import { ContactSection } from "./pages/sections/ContactSection";
import { ExperienceSection } from "./pages/sections/ExperienceSection";
import { HeroSection } from "./pages/sections/HeroSection";
import { ProjectsSection } from "./pages/sections/ProjectsSection";
import { SkillsSection } from "./pages/sections/SkillsSection";

export default function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </Layout>
      <Toaster position="bottom-right" richColors />
    </>
  );
}
