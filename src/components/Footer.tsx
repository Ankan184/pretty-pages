import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-soft border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-soft" />
          <span className="font-display text-xl font-semibold text-foreground">
            Made with Love
          </span>
          <Heart className="w-5 h-5 text-primary fill-primary animate-pulse-soft" />
        </div>
        <p className="text-muted-foreground text-sm">
          Every pixel of this website was crafted with you in mind.
        </p>
        <p className="text-muted-foreground text-xs mt-4">
          Forever yours • Always and forever
        </p>
      </div>
    </footer>
  );
};

export default Footer;
