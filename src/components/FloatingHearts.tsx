import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 16 + 12,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 3,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-primary fill-primary"
          style={{
            width: heart.size,
            height: heart.size,
            left: `${heart.left}%`,
            top: `${Math.random() * 100}%`,
            opacity: heart.opacity,
            animation: `float ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
