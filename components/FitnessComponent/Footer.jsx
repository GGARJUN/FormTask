import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[#4E008E] ">
            <div className="max-w-[1099px] w-[76%] mx-auto  flex flex-col md:flex-row items-center justify-between h-auto md:h-[137px] py-6 md:py-0  ">
                <h2 className="heebo_400_45_54 text-white">
                    For any queries, contact us at
                </h2>
                <div className="md:flex  gap-4 sm:gap-8 md:gap-12 lg:gap-20 mt-2">
                    <div className="flex gap-2.5 items-center">
                        <img src="/call.svg" alt="calllogo" className="h-5 w-5" />
                        <p className="text-[#B6E82A] heebo_400_15_28 text-start">
                            +91-9585561212
                        </p>
                    </div>
                    <div className="flex gap-2.5 items-center">
                        <img src="/mail.svg" alt="calllogo" className="h-5 w-5" />
                        <p className="text-[#B6E82A] heebo_400_15_28">
                            howie@fittgen.in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
