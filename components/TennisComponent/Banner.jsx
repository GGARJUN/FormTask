
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col xl:flex-row bg-[#B6E82A] relative">
      {/* Image Section */}
      <div className=" xl:w-[50%]  xl:h-[24vw]">
        <img
        loading="lazy"
          src="/tennisbanner.webp"
          alt="Banner"
          className="w-full object-cover object-top h-[24vw] bg-transparent"
        />
      </div>

      {/* Text Section */}
      <div className=" xl:w-[50%]  xl:h-[24vw] flex  items-center ">
        <div className="flex flex-col gap-[32px]  z-[2] mt-[32px] xl:mt-0 ml-[5%] md:ml-[48px] mb-[32px] xl:mb-0 mr-[5%] md:mr-[24%] md:max-w-[520px]">
          <h2 className="text-[#2B2B2B] heebo_500_35_38">
            Make This Summer Active, <br className="hidden xl:block"/> Fun & Unstoppable!
          </h2>
          <p className="heebo_400_20_29 text-[#353535] ">
            This summer, help your kids move, learn, and grow with FittGen
            Summer Camp 2025. Dubai’s top fitness program featuring expert
            coaching, fun workouts, and team activities for a stronger, fitter
            future!
          </p>
        </div>

          <img src="Group (1).webp" alt="Vector" className=" img_bg absolute bottom-0 top-0 right-0 w-full xl:block hidden object-cover h-[24vw]"/>

      </div>
    </div>
  );
};

export default Banner;