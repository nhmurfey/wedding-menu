"use client";

import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  drift: number;
  emoji: string;
  opacity: number;
}

const leafEmojis = ["🍂", "🍁", "🍃"];

function createLeaf(id: number): Leaf {
  return {
    id,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 12 + Math.random() * 10,
    size: 10 + Math.random() * 10,
    rotation: Math.random() * 360,
    drift: -30 + Math.random() * 60,
    emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
    opacity: 0.15 + Math.random() * 0.15,
  };
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    setLeaves(Array.from({ length: 12 }, (_, i) => createLeaf(i)));
  }, []);

  if (leaves.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="absolute animate-leaf-fall"
          style={{
            left: `${leaf.left}%`,
            top: "-5%",
            fontSize: `${leaf.size}px`,
            opacity: leaf.opacity,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            "--drift": `${leaf.drift}px`,
            "--rotation": `${leaf.rotation}deg`,
          } as React.CSSProperties}
        >
          {leaf.emoji}
        </span>
      ))}
    </div>
  );
}
