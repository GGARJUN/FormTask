"use client"
import { useState } from "react";
import Fitness from "@/components/Fitness";
import Tennis from "@/components/Tennis";

export default function Home() {
  const [activeSection, setActiveSection] = useState("fitness");

  return (
    <div className='w-full'>
      <div className='bg-[#4E008E] w-full md:flex justify-center items-center gap-32 px-8 md:px-40 py-5'>
        <div>
          <h2 className='md:text-6xl text-3xl text-[#B6E82A] font-bold'>FITTGEN SUMMER CAMP 2025</h2>
          <h2 className='md:text-6xl text-3xl text-[#E5FF9D] font-light'>REGISTRATION FORM</h2>
        </div>
        <div className='flex flex-col gap-5 mt-10 md:mt-0'>
          <button
            className={`md:px-16 py-3 text-[16px] font-normal text-center transition-all duration-300 border-2 ${
              activeSection === "fitness"
                ? "bg-[#B6E82A] text-[#4E008E] shadow-lg border-[#B6E82A]"
                : "bg-transparent text-white border-white"
            }`}
            onClick={() => setActiveSection("fitness")}
          >
            FITNESS
          </button>
          <button
            className={`md:px-16 px-10 py-3 text-[16px] font-normal text-center transition-all duration-300 border-2 ${
              activeSection === "tennis"
                ? "bg-[#B6E82A] text-[#4E008E] shadow-lg border-[#B6E82A]"
                : "bg-transparent text-white border-white"
            }`}
            onClick={() => setActiveSection("tennis")}
          >
            TENNIS
          </button>
        </div>
      </div>
      
      {activeSection === "fitness" && <Fitness />}
      {activeSection === "tennis" && <Tennis />}
    </div>
  );
}