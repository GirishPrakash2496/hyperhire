"use client";

import React, { useState } from "react";
import LogoCard from "../atoms/logoCard";
import ProfileCardCarousel from "../molecules/carousel/profileCard";

import slide2 from "/images/slide2.png";

import slide1 from "/images/slide1.png";
import HeroSection from "../organisms/HeroSection";
import Navbar from "../molecules/nav/Navbar";

const HomePageTemplate: React.FC = () => {
  return (
    <div className="mx-0 bg-gradient-to-br from-[#6259e2] to-[#00cc99] min-h-screen md:h-[20%] text-white flex items-center justify-center">
      <div className="w-full max-w-7xl px-2 pb-8">
        {/* Navgigation */}
        <Navbar />
        {/* Hero Section */}
        <HeroSection />
      </div>
    </div>
  );
};

export default HomePageTemplate;
