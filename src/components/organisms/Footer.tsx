"use client";

import React from "react";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${props.className} w-full mt-28 px-14 lg:py-8 md:p-5 sm:p-4 z-[2] relative bg-white`}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Container for Row 1 and Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Row 1 */}
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              {/* Logo Section */}
              <img
                src="images/footer_logo.png"
                width={186}
                height={34}
                alt="footer logo"
                className="h-[34px] w-[186px] object-contain"
              />
              <p className="mt-4 w-[70%] text-[14px] font-black leading-[150%] text-[#343741]">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </p>
              <p className="mt-[18px] text-[13px] font-extrabold text-[#5E626F]">
                010-0000-0000
              </p>
              <p className="mt-2 text-[13px] font-extrabold text-[#5E626F]">
                aaaaa@naver.com
              </p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 col-span-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-start gap-4 rounded-[12px] bg-white p-4 shadow-lg">
              <div className="flex flex-col items-start gap-3">
                <button className="w-[80px] rounded-lg px-2 bg-blue_gray-50 text-xl">
                  <img
                    src="images/footericon1.png"
                    width={35}
                    height={35}
                    alt="Settings Icon"
                  />
                </button>
                <p className="text-[14px] font-black text-[#000000]">
                  한국어 가능 외국인 채용
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[12px] font-semibold text-[#343741]">
                  바로가기
                </p>
                <span className="font-light text-lg ml-1 pt-0.5 shadow-lg">
                  <a href="#">
                    <BsArrowRightSquare />
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-[12px] bg-white p-4 shadow-lg">
              <div className="flex flex-col items-start gap-3">
                <button className="w-[80px] rounded-lg px-2 bg-blue_gray-50 text-xl">
                  <img
                    src="images/footericon2.png"
                    width={35}
                    height={35}
                    alt="Settings Icon"
                  />
                </button>
                <p className="text-[12px] font-black text-[#000000]">
                  외국인 원격 채용 (비개발)
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[12px] font-semibold text-[#343741]">
                  바로가기
                </p>
                <span className="font-light text-lg ml-1 pt-0.5 shadow-lg">
                  <a href="#">
                    <BsArrowRightSquare />
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-[12px] bg-white p-4 shadow-lg">
              <div className="flex flex-col items-start gap-3">
                <button className="w-[80px] rounded-lg px-2 bg-blue_gray-50 text-xl">
                  <img
                    src="images/footericon1.png"
                    width={35}
                    height={35}
                    alt="Search Icon"
                  />
                </button>
                <p className="text-[14px] font-black text-[#000000]">
                  한국어 가능 외국인 채용
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[12px] font-semibold text-[#343741]">
                  바로가기
                </p>
                <span className="font-light text-lg ml-1 pt-0.5 shadow-lg">
                  <a href="#">
                    <BsArrowRightSquare />
                  </a>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 rounded-[12px] bg-white p-4 bg-white shadow-lg">
              <div className="flex flex-col items-start gap-3">
                <button className="w-[80px] rounded-lg px-2 bg-blue_gray-50 text-xl">
                  <img
                    src="images/footericon4.png"
                    width={35}
                    height={35}
                    alt="Search Icon"
                  />
                </button>
                <p className="text-[14px] font-black text-[#000000]">
                  해외 개발자 활용 서비스
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-[12px] font-semibold text-[#343741]">
                  바로가기
                </p>
                <span className="font-light text-lg ml-1 pt-0.5 shadow-lg">
                  <a href="#">
                    <BsArrowRightSquare />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer information */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20 w-full">
          {/* Left section: 상호명 and 대표 CEO */}
          <div className="flex flex-col items-start">
            <p className="text-[12px] font-black text-blue_gray-80">상호명</p>
            <p className="mt-2.5 text-[13px] font-black text-[#5E626F]">
              하이퍼하이어
            </p>
            <p className="mt-1 text-[13px] font-black text-[#5E626F]">
              HyperHire India Private Limited
            </p>
          </div>

          {/* Right section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 col-span-3 md:col-span-2 w-full">
            <div className="flex flex-col items-start mt-none sm:mt-4 w-full">
              <p className="text-[12px] font-black text-gray-800">대표 CEO</p>
              <p className="text-[13px] font-black text-[#5E626F] mt-2">
                김주현
              </p>
              <p className="text-[13px] font-black text-[#5E626F] mt-2">
                Juhyun Kim
              </p>
            </div>
            <div className="flex flex-col items-start mt-7 md:mt-none lg:mt-none w-full">
              <p className="text-[12px] font-black text-gray-800">
                사업자등록번호 CIN
              </p>
              <p className="text-[13px] font-black text-[#5E626F] mt-2">
                427-86-01187
              </p>
              <p className="text-[13px] font-black text-[#5E626F] mt-2">
                U74110DL2016PTC290812
              </p>
            </div>
            <div className="flex flex-col items-start col-span-1 t-7 mt-7 md:mt-none lg:mt-none w-full">
              <p className="text-[12px] font-black text-gray-800">
                주소 ADDRESS
              </p>
              <p className="text-[13px] font-black text-[#5E626F]">
                서울특별시 강남대로 479, 지하 1층 238호
              </p>
              <p className="text-[13px] font-black leading-[150%] text-[#5E626F]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                Delhi, 110053 India
              </p>
            </div>
          </div>
        </div>

        <p className="text-[14px] font-black text-[#5E626F] mt-11">
          ⓒ 2023 Hyperhire
        </p>
      </div>
    </footer>
  );
}
