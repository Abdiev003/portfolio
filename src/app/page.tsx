import { Navbar } from "@/components/navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { Home, User, Code2, FolderGit2, Mail } from "lucide-react";

const navItems = [
  { name: "Home", link: "#home", icon: <Home className="h-4 w-4" /> },
  { name: "About", link: "#about", icon: <User className="h-4 w-4" /> },
  { name: "Skills", link: "#skills", icon: <Code2 className="h-4 w-4" /> },
  {
    name: "Projects",
    link: "#projects",
    icon: <FolderGit2 className="h-4 w-4" />,
  },
  { name: "Contact", link: "#contact", icon: <Mail className="h-4 w-4" /> },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <FloatingNav navItems={navItems} />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
