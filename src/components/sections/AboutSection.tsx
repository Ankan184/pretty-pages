import { Card, CardContent } from "@/components/ui/card";
import { Palette, Music, Coffee, Camera, Book, Sparkles } from "lucide-react";

const AboutSection = () => {
  const vibes = [
    {
      icon: Palette,
      title: "Creative Soul",
      description: "Always dreaming up beautiful things",
      color: "text-pink-400",
    },
    {
      icon: Music,
      title: "Music Lover",
      description: "Vibing to the perfect playlist",
      color: "text-purple-400",
    },
    {
      icon: Coffee,
      title: "Cozy Moments",
      description: "Warm drinks & soft blankets",
      color: "text-amber-400",
    },
    {
      icon: Camera,
      title: "Memory Keeper",
      description: "Capturing the little moments",
      color: "text-rose-400",
    },
    {
      icon: Book,
      title: "Daydreamer",
      description: "Lost in wonderful stories",
      color: "text-indigo-400",
    },
    {
      icon: Sparkles,
      title: "Magic Maker",
      description: "Finding joy everywhere",
      color: "text-yellow-400",
    },
  ];

  return (
    <section id="vibes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🌟</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Your Vibes
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            All the little things that make you, you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {vibes.map((vibe, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur border-border/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <vibe.icon className={`w-8 h-8 ${vibe.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {vibe.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {vibe.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
