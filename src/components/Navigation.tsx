import { Heart } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Her" },
  { id: "memories", label: "Memories" },
  { id: "reasons", label: "Why I Love You" },
  { id: "letter", label: "Love Letter" },
];

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-primary hover:scale-105 transition-transform"
          >
            <Heart className="w-6 h-6 fill-primary animate-pulse-soft" />
            <span className="font-display text-xl font-semibold">For You</span>
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "navActive" : "nav"}
                size="sm"
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
