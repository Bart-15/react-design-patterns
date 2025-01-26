"use client";

import { shuffleArray } from "@/utils/const";
import { useState } from "react";
import Image from "next/image";

type Card = {
  id: number;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
};

type MemoryGameProps = {
  images: string[];
};
const MemoryGame = ({ images }: MemoryGameProps) => {
  const [cards, setCards] = useState<Card[]>(() => {
    const duplicatedImages = [...images, ...images];
    const shuffledImages = shuffleArray(duplicatedImages);
    return shuffledImages.map((imageUrl, index) => ({
      id: index,
      imageUrl,
      isFlipped: false,
      isMatched: false,
    }));
  });

  function handleCardMatch(card1: Card, card2: Card) {
    const isMatch = card1.imageUrl === card2.imageUrl;

    setTimeout(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];

        if (isMatch) {
          newCards[card1.id].isMatched = true;
          newCards[card2.id].isMatched = true;
        } else {
          newCards[card1.id].isFlipped = false;
          newCards[card2.id].isFlipped = false;
        }

        return newCards;
      });
    }, 500);
  }

  function handleCardClick(card: Card) {
    if (card.isFlipped || card.isMatched) return;

    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[card.id].isFlipped = true;

      const flippedCards = cards.filter(
        (card) => card.isFlipped && !card.isMatched
      );

      if (flippedCards.length === 2) {
        handleCardMatch(flippedCards[0], flippedCards[1]);
      }
      return newCards;
    });
  }

  return (
    <div className="grid grid-cols-4 gap-4 px-3">
      {cards?.map((card) => (
        <div
          key={card.id}
          onClick={() => handleCardClick(card)}
          className={`aspect-square cursor-pointer rounded-lg border-2 border-grayscale-700 transition-all duration-300 ${
            card.isFlipped || card.isMatched
              ? "rotate-0"
              : "rotate-180 bg-primary-700"
          }`}
        >
          {(card.isFlipped || card.isMatched) && (
            <Image
              src={card.imageUrl}
              alt="Card"
              width="100"
              height="100"
              priority
              className="h-full w-full rounded-lg object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
