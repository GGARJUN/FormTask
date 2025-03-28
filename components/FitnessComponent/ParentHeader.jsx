import React from 'react'

const ParentHeader = () => {
    return (
        <div className='bg-[#161616]'>
            <div className='flex flex-col md:flex-row justify-center items-center '>
                <div className="relative  max-w-[1099px]   w-full md:w-[48%] ">
                    <div style={{ backgroundImage: `url(/180.webp)` }} className="bg-cover bg-center h-[97px] flex  justify-center items-center">
                        <h2 className='text-[#B6E82A] heebo_400_45_32  text-center'>
                            PARTICIPANT DETAILS
                        </h2>
                    </div>
                </div>
                <div className="relative max-w-[1099px]   w-full md:w-[52%]">
                    <div style={{ backgroundImage: `url(/184.webp)` }} className="bg-cover bg-center  h-[97px] flex flex-col md:flex-row  justify-center items-center gap-5 md:gap-10 ">
                        <p className='text-white heebo_400_20_14'>Fee - 4999</p>
                        <div className='h-5 sm:h-7 border border-white w-0 md:block hidden'></div>
                        <h2 className='text-[#B6E82A] heebo_500_35_25 '>
                            Early bird offer price - <span className="heebo_500_25_25">₹</span>3,999
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParentHeader
