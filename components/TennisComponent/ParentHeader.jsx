import React from 'react'

const ParentHeader = () => {
    return (
        <section className='bg-[#161616] hidden xl:block'>
            <div className="relative w-full flex flex-col md:flex-row justify-between fee_gradient gap-[30px] h-[200px] md:h-auto">
                <div className="relative md:w-2/4 hidden md:flex items-center justify-center md:h-auto">
                    <img src="/180.webp" alt="img" className='mr-auto imgstyle'/>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between w-[90%] lg:w-[76%] max-w-[1099px] absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] gap-y-[20px]">
                    <div className='md:mr-[55px]'>
                        <p className='text-[#B6E82A] heebo_400_45_32 text-center uppercase'>PARTICIPANT DETAILS</p>
                    </div>
                    <div className='flex flex-col 2xl:flex-row items-center md:ml-[22px]'>
                        <span className='text-white pr-2 2xl:border-r heebo_400_20_14'>Fee - 4999</span>
                        <div className='flex items-end'>
                            <span className='text-[#B6E82A] heebo_500_35_25 whitespace-pre'> Early bird offer price -</span>
                            <span className='heebo_500_25_25 text-[#B6E82A] flex'>₹</span>
                            <span className='text-[#B6E82A] heebo_500_35_25'>3,999</span>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ParentHeader