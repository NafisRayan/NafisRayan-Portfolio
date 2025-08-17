import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import DotGrid from "@/components/react-bites/DotGrid/DotGrid"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="absolute inset-0 z-[2]">
        <DotGrid/>
      </div>

      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
