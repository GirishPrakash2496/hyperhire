import React from "react";
import LogoCard from "../atoms/logoCard";

const cards = [
  { text: "해외 마케팅", icon: "/images/slide.svg" },
  { text: "퍼블리셔", icon: "/images/slide2.png" },
  { text: "캐드원(제도사)", icon: "/images/slide3.png" },
  { text: "해외 세일즈", icon: "/images/slide4.png" },
  { text: "해외 CS", icon: "/images/slide5.png" },
];

const InfoCards: React.FC = () => {
  return (
    <div className=" hidden mt-10 pt-16 absolute md:flex lg:flex items-center justify-center tooltip-fade-in">
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
