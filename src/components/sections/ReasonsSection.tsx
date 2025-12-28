import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const ReasonsSection = () => {
  const affirmations = [
    "You're doing amazing, even when it doesn't feel like it ✨",
    "Your energy is magnetic and people love being around you 🌸",
    "It's okay to rest. You deserve soft days too 🧸",
    "You bring so much light wherever you go ☀️",
    "Your feelings are valid, always 💝",
    "You're stronger than you think, braver than you believe 🦋",
  ];

  const todaysMood = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😴", label: "Sleepy" },
    { emoji: "🥰", label: "Loved" },
    { emoji: "😌", label: "Peaceful" },
    { emoji: "🤗", label: "Cozy" },
    { emoji: "✨", label: "Sparkly" },
  ];

  return (
    <section id="affirmations" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🌷</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Daily Reminders
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Little notes to brighten your day
          </p>
        </div>

        {/* Affirmations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {affirmations.map((affirmation, index) => (
            <Card
              key={index}
              className="bg-card/60 backdrop-blur border-border/50 hover:bg-card transition-all"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <Quote className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-foreground text-lg">{affirmation}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mood Tracker */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6 text-center">
                How are you feeling today? 💭
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {todaysMood.map((mood, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-secondary/50 hover:bg-primary/20 transition-all hover:scale-110 min-w-[80px]"
                  >
                    <span className="text-3xl">{mood.emoji}</span>
                    <span className="text-sm text-muted-foreground">
                      {mood.label}
                    </span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
