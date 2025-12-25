import { Camera, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const memories = [
  {
    title: "Our First Meeting",
    date: "A Day to Remember",
    location: "Where it all began",
    description: "The moment I saw you, I knew my life would never be the same.",
    color: "from-primary/20 to-rose-light",
  },
  {
    title: "Late Night Talks",
    date: "Every Night",
    location: "Under the stars",
    description: "Those endless conversations where time seemed to stand still.",
    color: "from-gold-light/30 to-cream",
  },
  {
    title: "Adventures Together",
    date: "Always",
    location: "Everywhere with you",
    description: "Every journey is better because you're by my side.",
    color: "from-accent/20 to-blush",
  },
  {
    title: "Quiet Moments",
    date: "Precious Times",
    location: "In your arms",
    description: "Sometimes the best memories are made in comfortable silence.",
    color: "from-secondary to-rose-light/50",
  },
];

const MemoriesSection = () => {
  return (
    <section id="memories" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Memories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">
            Our Beautiful Moments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every moment spent with you becomes a cherished memory I hold close to my heart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {memories.map((memory, index) => (
            <Card
              key={memory.title}
              className={`group overflow-hidden border-border hover:border-primary/30 shadow-card hover:shadow-romantic transition-all duration-500 hover:-translate-y-1`}
            >
              <CardContent className="p-0">
                <div className={`h-32 bg-gradient-to-br ${memory.color} flex items-center justify-center`}>
                  <Camera className="w-12 h-12 text-primary/40" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {memory.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {memory.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {memory.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {memory.location}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
