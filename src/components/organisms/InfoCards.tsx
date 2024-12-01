"use client";

import React, { useEffect, useState } from "react";
import LogoCard from "../atoms/logoCard";

type Card = {
  text: string;
  icon: string;
};

const InfoCards: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/cards");
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div className="hidden mt-10 pt-16 absolute md:flex lg:flex items-center justify-center tooltip-fade-in">
      <div className="overflow-hidden w-full">
        {/* Wrapping the cards to create a smooth horizontal scroll */}
        <div className="flex space-x-4 infinite-scroll">
          {cards.map((card, index) => (
            <LogoCard key={index} text={card.text} icon={card.icon} />
          ))}
          {/* Duplicate cards for seamless looping */}
          {cards.map((card, index) => (
            <LogoCard
              key={index + cards.length}
              text={card.text}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
