import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  ">
      {/* Image Section */}
      <div className="max-w-[1099px] w-full md:w-[50%]  md:h-[366px]">
        <img
          src="/tennisbanner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-[1099px] w-full md:w-[50%] bg-[#B6E82A] h-auto md:h-[366px] flex flex-col justify-center items-center relative">
        <div className="p-5 md:p-10 z-50">
          <h2 className="text-[#2B2B2B] heebo_500_35_38">
            Make This Summer Active, Fun & Unstoppable!
          </h2>
          <p className="heebo_400_20_29 text-[#353535] mt-3 md:mt-5  xl:w-[519px]">
            This summer, help your kids move, learn, and grow with FittGen
            Summer Camp 2025. Dubai’s top fitness program featuring expert
            coaching, fun workouts, and team activities for a stronger, fitter
            future!
          </p>
        </div>
        <div className="absolute bottom-0 -left-4 lg:-left-8 w-full lg:block hidden">
          <img src="Group (1).webp" alt="Vector" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;