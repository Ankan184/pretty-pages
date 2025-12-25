import { Heart, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-light rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-light rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-3 mb-6 opacity-0 animate-fade-in-up">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" />
            <Sparkles className="w-8 h-8 text-gold" />
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft animation-delay-200" />
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up animation-delay-200">
            <span className="text-gradient">To The Most</span>
            <br />
            <span className="text-foreground">Beautiful Soul</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
            Every moment with you feels like a beautiful dream.
            <br />
            This is my little corner of the internet, dedicated entirely to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
            <Button variant="romantic" size="lg" onClick={() => onNavigate("about")}>
              <Heart className="w-5 h-5 fill-current" />
              Discover More
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate("letter")}>
              Read My Letter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
