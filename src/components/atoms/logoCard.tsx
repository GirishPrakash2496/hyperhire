"use client";

import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Url } from "next/dist/shared/lib/router/router";

interface CardProps {
  text: string; // Text to display in the card
  icon: any; // Path to the icon image
}

const LogoCard: React.FC<CardProps> = ({ text, icon }) => {
  return (
    <div className="flex items-center p-4 bg-blue-200/20 rounded-xl shadow-md  text-center min-w-[300px] mx-2">
      <div className="flex-shrink-0 p-2 bg-white rounded-md shadow-inner">
        <Image
          src={icon}
          alt={text}
          width={20} // Adjust size as needed
          height={20}
          className="object-contain"
        />
      </div>
      <span className="ml-4 text-xl font-black items-center text-white">
        {text}
      </span>
    </div>
  );
};

export default LogoCard;
