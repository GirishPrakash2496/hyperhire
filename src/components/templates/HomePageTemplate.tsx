"use client";

import React, { useState } from "react";
import HeroSection from "../organisms/HeroSection";
import Navbar from "../molecules/nav/Navbar";

const HomePageTemplate: React.FC = () => {
  return (
    /*     Background img not working with your */

    /*  // <div
    //   className="mx-0 bg-cover bg-center min-h-screen md:h-[20%] text-white flex items-center justify-center"
    //   style={{ backgroundImage: 'url("/images/banner_bg.png")' }}
    // ></div> */

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
