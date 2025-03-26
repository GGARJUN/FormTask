import React from 'react';

const ProgramDetails = () => {
    return (
        <div className="bg-[#161616] py-10 sm:py-16 md:py-20 relative">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-20 px-4 sm:px-6 md:px-20 lg:px-40">
                <h2 className="text-white font-medium text-3xl sm:text-4xl md:text-5xl">
                    Program Details
                </h2>

                <div className="relative w-full sm:w-auto">
                    <img src="/Union (2).png" alt="" className="w-full h-auto" />
                    <div className="absolute top-0 py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:pl-20 w-full">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10">
                            <div>
                                <h2 className="text-[#4E008E] text-lg sm:text-xl font-bold">Duration</h2>
                                <p className="font-normal text-base sm:text-lg">4 Weeks (April 14th – May 10th)</p>
                            </div>
                            <div>
                                <h2 className="text-[#4E008E] text-lg sm:text-xl font-bold">Ages</h2>
                                <p className="font-normal text-base sm:text-lg">5 to 7 years</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10 mt-3 sm:mt-5">
                            <div>
                                <h2 className="text-[#4E008E] text-lg sm:text-xl font-bold">Schedule</h2>
                                <p className="font-normal text-base sm:text-lg">Tuesday to Saturday (5 days a week)</p>
                            </div>
                            <div>
                                <h2 className="text-[#4E008E] text-lg sm:text-xl font-bold">Location</h2>
                                <p className="font-normal text-base sm:text-lg">Chennai Tennis Stadium, Nungambakkam</p>
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-5">
                            <h2 className="text-[#4E008E] text-lg sm:text-xl font-bold">Timing</h2>
                            <p className="font-normal text-base sm:text-lg">6:30 PM – 7:15 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-4 sm:right-10 md:right-20">
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <img src="Group.png" alt="" className="w-8 sm:w-auto" />
                    <img src="Group-1.png" alt="" className="w-8 sm:w-auto" />
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;