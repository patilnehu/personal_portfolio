import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TechnologiesSection } from "@/components/technologies-section";
import ProjectsSection from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
