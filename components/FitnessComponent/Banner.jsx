import React from 'react'

const Banner = () => {
    return (
        <div className='md:flex '>
            <img src="https://s3-alpha-sig.figma.com/img/9670/226a/981ca45d4501c0b6ba42a14b4181034a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kHbD6zgtnKRN5hePvvABqX7nC83Mf8fsOXYd8uFiYylMmJbPIiq1rnNPvzybmNTJlxi1fTeRHyGm4Cgn6IQ0VHt2sXbD4Ml1pBHOjhEc2weLMVSM8bjTzTyXf5iZ3ewy-5MOYnKaWMcdiv8nl7FUbnuf5bGdkygIIt8Lz61MOwJLTdfdY0hc2IoRXRAa9ILaAZOocNv-Dt7Oy8HLP-pt9eClc~IWJb1S8b-8NxcNl5Vt0N~RlBGmzKBYfbsQwUN2sl0OE1QIHa~tWUTwNG7~ud3cm0-RR90FTy~KwfWVKdcVb87fgdAoUm5f9yrHWJVEwIyB1Xwyu8ND6C0zNrTYog__" alt="" className=' h-[366px] w-full ' />
            <div className='bg-[#B6E82A] h-[366px]  w-full flex flex-col justify-center relative'>
                <div className='p-10 z-50'>
                    <h2 className='md:text-4xl text-2xl font-medium text-[#2B2B2B] md:max-w-md'>Make This Summer Active, Fun & Unstoppable! </h2>
                    <p className='md:text-xl font-normal text-[#353535] mt-5 md:max-w-lg'>This summer, help your kids move, learn, and grow with  FittGen Summer Camp 2025. Dubai’s top fitness program featuring expert coaching, fun workouts, and team activities for a stronger, fitter future!</p>
                </div>
                <div className='absolute bottom-0 -left-8 '>
                    <img src="/vector/1.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Banner
