"use client";

import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl -mb-20 items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo - Always visible */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="images/navlogo.svg" alt="Logo" />
          </a>
        </div>

        {/* Mobile Menu Toggle (This will be hidden on mobile) */}
        <div className="lg:hidden">
          {/* Just remove the button for mobile */}
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Dropdown Menu with 3 submenus */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg font-black text-white flex items-center"
            >
              채용
              <svg
                className="ml-2 w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Toggle the visibility based on `isDropdownOpen` */}
            {isDropdownOpen && (
              <div className="absolute mt-2 space-y-2 rounded-lg bg-white shadow-lg w-64 left-0 z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-[16px] font-black text-gray-700 hover:bg-gray-100"
                >
                  해외 개발자 원격 채용
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-[16px] font-black text-gray-700 hover:bg-gray-100"
                >
                  외국인 원격 채용 (비개발 직군)
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-[16px] font-black text-gray-700 hover:bg-gray-100"
                >
                  한국어 가능 외국인 채용
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-lg font-black text-white">
            해외 개발자 활용 서비스
          </a>
        </div>

        {/* Mobile Menu (Hidden entirely on mobile) */}
        <div className="lg:hidden hidden">
          {/* Nothing will be displayed here */}
        </div>

        {/* Contact Button (Always visible on Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="block w-28 rounded-lg px-3 py-2.5 shadow-lg text-xl text-blue-700 font-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400">
            문의하기
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
