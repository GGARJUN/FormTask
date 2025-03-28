import React from 'react';

const ProgramDetails = () => {
    return (
        <div className="bg-[#161616] py-10 sm:py-16 md:py-20 relative">
            <div className='max-w-[1099px] w-[76%] mx-auto'>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-20 ">
                    <h2 className="text-white heebo_500_45_32">
                        Program Details
                    </h2>

                    <div className="relative w-full sm:w-[682px] md:h-[335px] h-[450px]">
                        <div className='w-full h-full'>
                            <img src="/Union (2).webp" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-0 py-4 sm:py-6 md:py-8 lg:py-16 px-2 sm:px-3 md:px-4 lg:pl-20 w-full">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 md:gap-10">
                                <div>
                                    <h2 className="text-[#4E008E] heebo_700_20_29">Duration</h2>
                                    <p className="heebo_400_18_29 text-[#353535]">4 Weeks (April 14th – May 10th)</p>
                                </div>
                                <div>
                                    <h2 className="text-[#4E008E] heebo_700_20_29">Ages</h2>
                                    <p className="heebo_400_18_29 text-[#353535]">5 to 7 years</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 md:gap-10 mt-3 sm:mt-5">
                                <div>
                                    <h2 className="text-[#4E008E] heebo_700_20_29">Schedule</h2>
                                    <p className="heebo_400_18_29 text-[#353535]">Tuesday to Saturday (5 days a week)</p>
                                </div>
                                <div>
                                    <h2 className="text-[#4E008E] heebo_700_20_29">Location</h2>
                                    <p className="heebo_400_18_29 text-[#353535]">Chennai Tennis Stadium, Nungambakkam</p>
                                </div>
                            </div>
                            <div className="mt-3 sm:mt-5">
                                <h2 className="text-[#4E008E] heebo_700_20_29">Timing</h2>
                                <p className="heebo_400_18_29 text-[#353535]">6:30 PM – 7:15 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-4 sm:right-10 md:right-20 xl:block hidden">
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                        <img src="Group.webp" alt="" className="w-8 sm:w-auto" />
                        {/* <img src="Group-1.webp" alt="" className="w-8 sm:w-auto" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetails;