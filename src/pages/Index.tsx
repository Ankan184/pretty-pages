import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MemoriesSection from "@/components/sections/MemoriesSection";
import ReasonsSection from "@/components/sections/ReasonsSection";
import LetterSection from "@/components/sections/LetterSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "vibes", "favorites", "affirmations", "goals"];
      const navHeight = 64;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 100 && rect.bottom > navHeight + 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <FloatingHearts />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="pt-16">
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <MemoriesSection />
        <ReasonsSection />
        <LetterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
