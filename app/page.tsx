import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ResumeSection } from "@/components/resume-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FEFAE0]">
      {/* Mobile Navigation - Only visible on small screens */}
      <MobileNav />

      {/* Sidebar - Hidden on small screens */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-[280px]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
