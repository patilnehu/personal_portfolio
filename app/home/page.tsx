import { Header } from "@/components/header";
import AboutSection from "../about-section/page";

import HeroSection from "../hero-section/page";
import ProjectsSection from "../project-section/page";
import TechnologiesSection from "../technologies-section/page";
import ContactSection from "../contact-section/page";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
