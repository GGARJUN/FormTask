import React from 'react'

const Banner = () => {
    return (
        <div className='md:flex'>
            <img src="https://s3-alpha-sig.figma.com/img/f339/39fb/e3357f4c7b632f1a6d6acd22073b0c0a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=at1T8PA8Kif2T~Mw-nrfUbux68Xz6gGuqYyF06yByTsMvjv40gnQMxBIHNt3mrVql0YtXdYSIXDVRo2bL9teR-zOClIZZRUmUIzKicC0v-unHlsNkcaJD00W7tWKXRbIkGHyVexipQUqRHFtF1T3geiZHwTUAjspXl2uDSgua1a6QPSQbrGhIEMdwAzEu0H4ZyEoUjo8jBYrgInJIa9Q4kXOUA9tEJvrFE50SaJDdmAXBa2YiYd7NVEyR107lkOdZAdbiirLBl4q5lfzFsRu-fi1VGf2ZFFD~1ZoEveh5H5DhhO39H9eOqpZwe8oPie2ekdZqmrMzaW8jQs3iFHVnQ__" alt="" className=' h-[366px] w-full ' />
            <div className='bg-[#B6E82A] h-[366px]  w-full flex flex-col justify-center relative'>
                <div className='p-10 z-50'>
                    <h2 className='text-4xl font-medium text-[#2B2B2B] max-w-md'>Ace the Summer with FittGen Tennis Camp!</h2>
                    <p className='text-xl font-normal text-[#353535] mt-5 max-w-lg'>This 4-week camp introduces kids (5-7 years) to tennis fundamentals, enhancing footwork, agility, and coordination while promoting physical and mental well-being through engaging, movement-based learning.</p>
                </div>
                <div className='absolute bottom-0 -left-8 '>
                    <img src="/vector/1.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Banner
