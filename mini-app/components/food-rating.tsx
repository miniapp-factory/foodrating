"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FoodRating() {
  const [food, setFood] = useState("");
  const [rating, setRating] = useState<string | null>(null);

  const generateRating = () => {
    // Simple funny rating logic: random emoji + score
    const emojis = ["🍕", "🍔", "🍣", "🍰", "🥗", "🍜"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const score = Math.floor(Math.random() * 10) + 1;
    setRating(`${emoji} ${score}/10`);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <input
        type="text"
        placeholder="What did you eat?"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        className="border rounded px-3 py-1"
      />
      <Button onClick={generateRating} disabled={!food.trim()}>
        Rate it!
      </Button>
      {rating && (
        <p className="text-xl font-semibold">
          Your meal: <span className="font-mono">{food}</span> → {rating}
        </p>
      )}
    </div>
  );
}
