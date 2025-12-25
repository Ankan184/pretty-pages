import { Star, Heart, Smile, Music } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const traits = [
  {
    icon: Star,
    title: "Your Smile",
    description: "The way your eyes light up when you smile makes everything feel magical.",
  },
  {
    icon: Heart,
    title: "Your Kindness",
    description: "The gentle way you care for everyone around you inspires me every day.",
  },
  {
    icon: Smile,
    title: "Your Laugh",
    description: "Your laughter is my favorite sound in the entire world.",
  },
  {
    icon: Music,
    title: "Your Spirit",
    description: "Your free spirit and zest for life make every adventure worthwhile.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-soft relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Her
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
            What Makes You Special
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            There are countless reasons why you&apos;re amazing, but here are just a few
            of the things I adore about you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {traits.map((trait, index) => (
            <Card
              key={trait.title}
              className="group bg-card border-border hover:border-primary/30 shadow-card hover:shadow-romantic transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <trait.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {trait.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trait.description}
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
