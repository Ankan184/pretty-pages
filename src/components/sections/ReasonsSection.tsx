import { Heart } from "lucide-react";

const reasons = [
  "The way you make me feel like the luckiest person alive",
  "Your infectious laughter that brightens any room",
  "How you always know the right thing to say",
  "The way you believe in me, even when I don't",
  "Your beautiful heart that cares so deeply",
  "The adventures we share, big and small",
  "How you make ordinary moments extraordinary",
  "Your strength that inspires me every day",
  "The comfort I feel just being near you",
  "Simply because you're you, and that's everything",
];

const ReasonsSection = () => {
  return (
    <section id="reasons" className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-light rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-light rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            10 Reasons
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
            Why I Love You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            There are infinite reasons, but here are just a few that make my heart overflow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-card"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Heart className="w-5 h-5 text-primary fill-primary group-hover:text-primary-foreground group-hover:fill-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-primary font-semibold">Reason #{index + 1}</span>
                  <p className="text-foreground font-medium mt-1">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
