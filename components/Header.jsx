"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("fitness");

  return (
    <div className="bg-[#4E008E]">
      <div className="max-w-[1099px] w-[76%] mx-auto md:h-[229px] md:flex justify-between items-center py-10 md:py-0 ">
        <div className="">
          <h2 className="text-[#B6E82A] heebo_800_58_41">
            FITTGEN SUMMER CAMP 2025
          </h2>
          <h2 className="text-[#E5FF9D] heebo_300_58_41 mt-2 md:mt-5">
            REGISTRATION FORM
          </h2>
        </div>
        <div className="flex flex-col gap-4 md:gap-[18px] mt-5 md:mt-0">
          <Link href="/fitness">
            <button
              className={`w-[170px] h-[39px] text-[14px] md:text-[16px] font-normal text-center transition-all duration-300 border-2  ${
                activeSection === "fitness"
                  ? "bg-[#B6E82A] text-[#4E008E] shadow-lg border-[#B6E82A]"
                  : "bg-transparent text-white  "
              }`}
              onClick={() => setActiveSection("fitness")}
            >
              FITNESS
            </button>
          </Link>
          <Link href="/tennis">
            <button
              className={`w-[170px] h-[39px] text-[14px] md:text-[16px] font-normal text-center transition-all duration-300 border-2 ${
                activeSection === "tennis"
                  ? "bg-[#B6E82A] text-[#4E008E] shadow-lg border-[#B6E82A]"
                  : "bg-transparent text-white  "
              }`}
              onClick={() => setActiveSection("tennis")}
            >
              TENNIS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}