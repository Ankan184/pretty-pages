import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [elements, setElements] = useState<
    Array<{ id: number; left: number; delay: number; duration: number; emoji: string }>
  >([]);

  const emojis = ["✨", "🌸", "💫", "🦋", "⭐", "🌷", "💖", "🧸"];

  useEffect(() => {
    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-xl opacity-40"
          style={{
            left: `${element.left}%`,
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
