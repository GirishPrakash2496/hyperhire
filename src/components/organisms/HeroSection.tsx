"use client";

import React from "react";
import InfoCards from "../organisms/InfoCards";
import ProfileCardCarousel from "../molecules/carousel/profileCard";
import TooltipLeft from "../atoms/TooltipLeft";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-full pb-16 px-4 text-center text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Heading and content */}
        <div className="w-full md:w-1/2 space-y-5 mt-52 lg:mt-0 md:mt-0">
          {/* Tooltip */}
          <div className="relative -mt-6">
            <TooltipLeft />
          </div>
          <h1 className="text-[38px] md:text-[48px] lg:text-[48px] text-start font-bold leading-tight heading-fadeup">
            최고의 실력을 가진 외국인 인재를 찾고 계신가요?
          </h1>
          <div>
            <h1 className="mt-6 md:mt-9 text-[20px] md:text-[24px] text-start font-bold leading-tight heading-fadeup">
              법률 및 인사관리 부담없이
              <br />
              1주일 이내에 원격으로 채용해보세요.
            </h1>
          </div>
          <div className="mt-12 md:mt-20 heading-fadeup hidden md:block">
            <h1 className="text-[16px] md:text-[18px] text-yellow-200 underline md:text-white lg:text-white md:underline lg:underline text-start font-bold leading-tight">
              개발자가 필요하신가요?
            </h1>
          </div>

          <div className="w-[130%] pr-6 mt-12 md:mt-24 tooltip-fade-in">
            {/* Underline Above */}
            <div className="hidden md:flex flex-col md:flex-row mt-12 md:mt-24 items-start space-y-8 md:space-y-0 md:space-x-16">
              <div className="w-full md:w-52">
                <div className="w-full border-b-2 border-gray-300"></div>
                <h1 className="mt-4 text-[14px] md:text-[16px] text-start font-bold leading-tight">
                  <span className="underline mt-6">평균 월 120만원</span>
                </h1>
                <h1 className="text-[14px] md:text-[16px] text-start font-bold leading-tight">
                  임금을 해당 국가를 기준으로 계산합니다.
                </h1>
              </div>
              <div className="w-full md:w-52">
                <div className="w-full border-b-2 border-gray-300"></div>
                <h1 className="mt-4 text-[14px] md:text-[18px] text-start font-bold leading-tight">
                  <span className="underline mt-6">최대 3회 인력교체</span>
                </h1>
                <h1 className="text-[14px] md:text-[16px] text-start font-bold leading-tight">
                  막상 채용해보니 맞지 않아도 걱정하지 마세요.
                </h1>
              </div>
              <div className="w-full md:w-52">
                <div className="w-full border-b-2 border-gray-300"></div>
                <h1 className="mt-4 text-[14px] md:text-[16px] text-start font-bold leading-tight">
                  <span className="underline mt-6">평균 3일, 최대 10일</span>
                </h1>
                <h1 className="text-[14px] md:text-[16px] text-start font-bold leading-tight">
                  급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                </h1>
              </div>
            </div>
          </div>

          <InfoCards />
        </div>

        {/* Card on the Right */}
        <div className="-mt-28 lg:md-0 md:mt-0 w-full text-center">
          <ProfileCardCarousel />
        </div>

        <div className="p-4 rounded-lg text-white text-sm md:hidden lg:hidden">
          {/* Checkbox Section */}
          <div className="flex flex-wrap gap-y-2">
            {/* Row 1 */}
            <div className="flex items-center w-1/2">
              <input
                type="checkbox"
                className="form-checkbox bg-black text-blue-700 "
                checked
                readOnly
              />
              <span className="ml-2 text-xl font-black">한국어 능력</span>
            </div>
            <div className="flex items-center w-1/2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-700"
                checked
                readOnly
              />
              <span className="ml-2 text-xl font-black">업무 수행 능력</span>
            </div>

            {/* Row 2 */}
            <div className="flex items-center w-1/2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-700"
                checked
                readOnly
              />
              <span className="ml-2 text-xl font-black">검업 여부</span>
            </div>
            <div className="flex items-center w-1/2">
              <input
                type="checkbox"
                className="form-checkbox text-blue-700"
                checked
                readOnly
              />
              <span className="ml-2 text-xl font-black">평판 조회</span>
            </div>
          </div>

          {/* Link Section (Hidden on Desktop and Larger Screens) */}
          <div className="mt-12 md:mt-20 heading-fadeup md:hidden lg:hidden">
            <h1 className="text-[16px] md:text-[18px] text-yellow-200 underline md:text-white lg:text-white md:underline lg:underline text-start font-bold leading-tight">
              개발자가 필요하신가요?
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
