import { Card, CardContent } from "@/components/ui/card";
import { Target, Sparkles } from "lucide-react";

const LetterSection = () => {
  const wishes = [
    { text: "Learn something new", done: false },
    { text: "Take more photos", done: true },
    { text: "Read 12 books this year", done: false },
    { text: "Try a new recipe", done: true },
    { text: "Start a journal", done: false },
    { text: "Have more adventures", done: false },
  ];

  const quickLinks = [
    { emoji: "📝", label: "Notes", color: "bg-yellow-500/20" },
    { emoji: "🎵", label: "Playlist", color: "bg-purple-500/20" },
    { emoji: "📸", label: "Gallery", color: "bg-pink-500/20" },
    { emoji: "✨", label: "Wishlist", color: "bg-blue-500/20" },
  ];

  return (
    <section id="goals" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🎯</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Dreams & Goals
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Little things you want to do
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Wishlist */}
          <Card className="bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  2024 Wishlist
                </h3>
              </div>
              <ul className="space-y-3">
                {wishes.map((wish, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        wish.done
                          ? "bg-primary border-primary"
                          : "border-muted-foreground/30"
                      }`}
                    >
                      {wish.done && (
                        <span className="text-primary-foreground text-xs">
                          ✓
                        </span>
                      )}
                    </div>
                    <span
                      className={`${
                        wish.done
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      }`}
                    >
                      {wish.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Quick Links
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className={`${link.color} p-6 rounded-2xl hover:scale-105 transition-all flex flex-col items-center gap-2`}
                  >
                    <span className="text-3xl">{link.emoji}</span>
                    <span className="text-foreground font-medium">
                      {link.label}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fun Note */}
        <div className="max-w-2xl mx-auto mt-12">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-2xl mb-2">🌸</p>
              <p className="text-foreground text-lg font-display">
                "You're exactly where you need to be. Keep going, cutie!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LetterSection;
