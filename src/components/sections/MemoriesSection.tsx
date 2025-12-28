import { Card, CardContent } from "@/components/ui/card";

const MemoriesSection = () => {
  const favorites = [
    {
      emoji: "🎵",
      category: "Current Jam",
      item: "Your favorite song goes here",
      bg: "from-pink-500/20 to-purple-500/20",
    },
    {
      emoji: "🍵",
      category: "Go-to Drink",
      item: "Matcha latte with oat milk",
      bg: "from-green-500/20 to-emerald-500/20",
    },
    {
      emoji: "🎬",
      category: "Comfort Show",
      item: "That show you rewatch",
      bg: "from-blue-500/20 to-indigo-500/20",
    },
    {
      emoji: "🌸",
      category: "Favorite Season",
      item: "Spring vibes forever",
      bg: "from-rose-500/20 to-pink-500/20",
    },
    {
      emoji: "📚",
      category: "Reading Now",
      item: "A cozy book title",
      bg: "from-amber-500/20 to-orange-500/20",
    },
    {
      emoji: "🍰",
      category: "Sweet Treat",
      item: "Strawberry anything",
      bg: "from-red-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="favorites" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">💖</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Favorite Things
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A collection of things that bring you joy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {favorites.map((fav, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:scale-105 transition-all duration-300 border-border/50 hover:shadow-xl"
            >
              <CardContent className={`p-6 bg-gradient-to-br ${fav.bg}`}>
                <span className="text-4xl mb-4 block">{fav.emoji}</span>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                  {fav.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground">
                  {fav.item}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
