import React from 'react'

const Coah = () => {
    return (
        <div
            style={{ backgroundImage: `url(/image%2030.png)` }}
            className="w-full  bg-cover bg-center flex justify-center items-end md:pt-20"
        >
            <div className="max-w-[1099px] w-[76%] mx-auto">
                <div className="bg-[#4E008E] p-4 sm:p-8 md:p-12 lg:p-20 h-auto sm:h-[486px] flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
                    <div>
                        <h2 className="text-[#B6E82A] heebo_500_45_98">
                            Meet Coach
                        </h2>
                        <h2 className="text-[#B6E82A] heebo_500_45_98">
                            Ajai Selvaraj
                        </h2>
                        <p className="text-base sm:text-lg font-normal text-white max-w-xl mt-3 sm:mt-5">
                            Ajai Selvaraj is a seasoned international tennis player turned professional coach with over 11 years of coaching experience. With a 20-year career in tennis, he is committed to nurturing the next generation of players through a high-performance development program. Ranked No.12 in India and achieving an international ranking of 925 in Doubles and 1104 in Singles, Ajai brings both expertise and passion to the court. As a certified ITF Level 1 (CBI) Coach, he blends technical precision with strategic training, ensuring young athletes develop the skills, discipline, and mindset needed to excel in the sport.
                        </p>
                    </div>
                    <div className="max-w-[1099px] md:w-[422px] w-full md:h-[366px] h-[200px]">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/705e/b66c/3a525a789def71c205a0ffae00b16961?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T4skEj5kA5ZY9WoJZBY9mBAQV9bYujsZEUWjThHLxaMSu2KSbYIH5oEFfl4brkS~QPiqf3natgQANo9NZ5GwaoxXKjCiIwQuATVRHyOpqYDnUbFlWVjJZFJJzX-FLXjV2aw3obufdZIhVvtLQV53iaot-Dur7qRhaWDihKDdtVIMT~ji-KdzYMBptuHJZPHAuv8xiOZ-nqBJcQNugaBJFyBTzM8U9rNPyFgSUsVoKRS5jYe8nJJHm7nEaibOX-RHB3yidWHSBFR91wEXNXUoMjCgvwkX4~5O7h3u96fTnwuzkGz4MtLTFeQ~fXEuUnde7I7KiXnSzBCLq890mjVZtg__"
                            alt="Coach Ajai Selvaraj"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coah
