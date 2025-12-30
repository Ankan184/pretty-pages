import { Sparkles, Star } from "lucide-react";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "300ms" }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-secondary/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: "500ms" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center gap-2 mb-6">
            <Star className="w-6 h-6 text-accent fill-accent animate-pulse" />
            <Sparkles className="w-8 h-8 text-primary" />
            <Star className="w-6 h-6 text-accent fill-accent animate-pulse" style={{ animationDelay: "200ms" }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4">
            Hey, <span className="text-primary">Srishti</span>! ✨
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Welcome to your little corner of the internet
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-md mx-auto">
            A tiny dashboard made just for you, filled with all the cute things you deserve 🌸
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate("vibes")}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Explore Your Space
            </button>
            <button
              onClick={() => onNavigate("favorites")}
              className="px-8 py-3 bg-card border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-all hover:scale-105"
            >
              See Favorites
            </button>
          </div>
        </div>

        {/* Cute floating icons */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-8 opacity-50">
          <span className="text-4xl animate-bounce" style={{ animationDelay: "100ms" }}>🧸</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: "200ms" }}>🌷</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: "300ms" }}>🦋</span>
          <span className="text-4xl animate-bounce" style={{ animationDelay: "400ms" }}>🍰</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
