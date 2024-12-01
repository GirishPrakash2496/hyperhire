"use client";

import { useState, useEffect, useCallback } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import tooltip_dollar from "../../../../public/images/tooltip.svg";
import Image from "next/image";

type Profile = {
  id: number;
  name: string;
  role: string;
  image: string;
  position: string;
};

const ProfileCarousel = () => {
  const profiles = [
    {
      id: 1,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      image: "images/profile.png",
    },
    {
      id: 2,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      image: "images/profile.png",
    },
    {
      id: 3,
      name: "Abhishek Gupta",
      role: "마케팅 · 2y+",
      image: "images/profile.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1,
    );
  }, [profiles.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1,
    );
  }, [profiles.length]);

  const handleKeyDown = useCallback(
    (e: any) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    },
    [handleNext, handlePrev],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) handleNext();
    if (touchStart - touchEnd < -75) handlePrev();
  };

  const getVisibleProfiles = () => {
    const result: Profile[] = [];
    const length = profiles.length;

    // Previous profile
    const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
    result.push({ ...profiles[prevIndex], position: "left" });

    // Current profile
    result.push({ ...profiles[currentIndex], position: "center" });

    // Next profile
    const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    result.push({ ...profiles[nextIndex], position: "right" });

    return result;
  };

  const getPositionClass = (position) => {
    switch (position) {
      case "left":
        return "translate-x-[-40%] scale-90 opacity-70 z-0"; // Slightly shifted left and reduced opacity
      case "right":
        return "translate-x-[40%] scale-90 opacity-70 z-0"; // Slightly shifted right and reduced opacity
      default:
        return "translate-x-0 scale-100 opacity-100 z-10"; // Center card stays in place
    }
  };

  return (
    <div
      className="relative mb-56 ml-24 h-screen w-full overflow-hidden"
      role="region"
      aria-label="Profile Carousel"
    >
      <div
        className="flex items-center justify-center h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={handlePrev}
          className="absolute -left-3 z-10 p-3 rounded-full transition-all"
          aria-label="Previous profile"
        >
          <SlArrowLeft className="text-white" />
        </button>

        <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
          {getVisibleProfiles().map((profile) => (
            <div
              key={profile.id}
              className={`absolute w-[300px] transform transition-all duration-500 ease-in-out ${getPositionClass(
                profile.position,
              )}`}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative h-28 mt-20 mb-4">
                  {/* India Flag Icon at the Top */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" // India flag icon URL
                    alt="India Flag"
                    className="w-8 h-8 object-cover z-10 rounded-full absolute bottom-0 right-1/4 transform -translate-x-1/2"
                  />
                  {/* Circular Profile Image */}
                  <img
                    src={`https://${profile.image}`}
                    alt={profile.name}
                    className="w-40 h-40 object-cover rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "images/profile.png";
                    }}
                  />
                </div>

                <div className="p-6 ">
                  <h2 className="text-2xl font-black text-gray-800 ">
                    {profile.name}
                  </h2>
                  <p className="text-purple-600 font-black text-xl mt-1">
                    {profile.role}
                  </p>

                  {/* Tooltip for Active Card */}

                  {profile.position === "center" && (
                    <div className=" bg-[#E9F7EF] text-xs rounded py-2 px-4 absolute top-[-50px] left-24 -mt-5 z-20 tooltip-fade-in">
                      <span className="font-black text-[#00C696] flex items-center space-x-2">
                        <Image
                          src="/images/tooltip.svg"
                          alt="Tooltip"
                          width={24} // Set desired width
                          height={24}
                          className="mr-3" // Set desired height
                        />
                        월 100만원
                      </span>

                      <svg
                        className={` absolute text-[#E9F7EF] h-2 w-full left-0 top-full tooltip-arrow-fade-in`}
                        x="0px"
                        y="0px"
                        viewBox="0 0 255 255"
                        xmlSpace="preserve"
                      >
                        <polygon
                          className="fill-current"
                          points="0,0 127.5,127.5 255,0"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Transparent Box */}
                  <div className="mt-11 p-4 shadwo-lg rounded-md space-y-1">
                    <div className="flex justify-center">
                      {/* Single Box Row */}
                      <div className="w-full border shadow-sm py-1 rounded-md text-center">
                        <span className="text-gray-600 text-[14px] font-black">
                          마케팅 콘텐츠 제작
                        </span>
                      </div>
                    </div>
                    <div className="w-full border py-1 shadow-sm rounded-md text-center">
                      <span className="text-gray-600 text-[14px] font-black">
                        인스타그램 관리
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      {/* Two Box Row */}
                      <div className="w-full border  py-1 shadow-sm rounded-md text-center">
                        <span className="text-gray-600 text-[14px] font-black">
                          트위터 관리
                        </span>
                      </div>
                      <div className="w-full border py-1 shadow-sm rounded-md text-center">
                        <span className="text-gray-600 text-[14px] font-black">
                          블로그 글 작성
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute -right-3 z-10 p-3 rounded-full  hover:text-black transition-all"
          aria-label="Next profile"
        >
          <SlArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCarousel;
