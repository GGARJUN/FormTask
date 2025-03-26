import React, { useState, useCallback } from "react";
import Banner from './TennisComponent/Banner'
import ParticipantForm from './TennisComponent/ParticipantForm';
import ParentDetails from './TennisComponent/ParentDetails';
import MedicalInfo from './TennisComponent/MedicalInfo';
import ProgramDetails from "./TennisComponent/ProgramDetails";

const Tennis = () => {
    // State for DeclarationForm (removed local storage)
    const [formData, setFormData] = useState({
        agreed: false,
    });

    // States to store form data from child components
    const [participantFormData, setParticipantFormData] = useState({
        name: "",
        age: "",
        gender: "Male",
    });
    const [parentFormData, setParentFormData] = useState({
        name: "",
        email: "",
        relationship: "Father",
        phoneNumber: "",
    });

    const [medicalFormData, setMedicalFormData] = useState({
        hasMedicalCondition: false,
        medicalDetails: "",
    });

    // Memoized callback functions for child components
    const handleParticipantFormDataChange = useCallback((data) => {
        setParticipantFormData(data);
    }, []);

    const handleParentFormDataChange = useCallback((data) => {
        setParentFormData(data);
    }, []);


    const handleMedicalFormDataChange = useCallback((data) => {
        setMedicalFormData(data);
    }, []);

    // Handle checkbox change for DeclarationForm
    const handleCheckboxChange = () => {
        setFormData((prev) => ({
            ...prev,
            agreed: !prev.agreed,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agreed) {
            alert("Please agree to the terms before submitting.");
            return;
        }
        // Combine all form data
        const allData = {
            participantDetails: participantFormData,
            parentDetails: parentFormData,
            medicalInfo: medicalFormData,
            declaration: formData,
        };
        console.log("Tennis All Form Data:", allData);
    };
    return (
        <div className='w-full'>
            <Banner />

            <div className='bg-[#161616]'>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='w-full md:w-[48%]'>
                        <div className='relative'>
                            <img src="/180.png" alt="" className='w-full h-auto object-cover' />
                            <h2 className='text-[#B6E82A] font-medium text-3xl sm:text-4xl md:text-5xl p-2 md:p-4 text-center absolute top-0 md:top-2 w-full'>
                                PARTICIPANT DETAILS
                            </h2>
                        </div>
                    </div>
                    <div className='w-full md:w-[52%]'>
                        <div className='relative'>
                            <img src="/184.png" alt="" className='w-full h-auto object-cover' />
                            <div className='px-4 sm:px-6 md:px-10  absolute top-0 mt-4 md:mt-7 w-full flex justify-center'>
                                <h2 className='text-[#B6E82A] font-medium text-sm sm:text-3xl md:text-4xl '>
                                    Fee - ₹12,500
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ParticipantForm onFormDataChange={handleParticipantFormDataChange} />

            <h2 className="text-[#4E008E] text-3xl sm:text-4xl md:text-5xl font-medium uppercase bg-[#B6E82A] p-4 text-center">
                Parent/Guardian Details
            </h2>

            <ParentDetails onFormDataChange={handleParentFormDataChange} />

            <ProgramDetails />
            <div
    style={{ backgroundImage: `url(/image%2030.png)` }}
    className="w-full h-[566px] sm:h-auto bg-cover bg-center px-4 sm:px-8 md:px-20 lg:px-40 flex justify-center items-end md:pt-20"
>
    <div className="bg-[#4E008E] p-4 sm:p-8 md:p-12 lg:p-20 h-auto sm:h-[486px] w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div>
            <h2 className="text-[#B6E82A] text-3xl sm:text-4xl md:text-5xl font-medium">
                Meet Coach <br />Ajai Selvaraj
            </h2>
            <p className="text-base sm:text-lg font-normal text-white max-w-xl mt-3 sm:mt-5">
                Ajai Selvaraj is a seasoned international tennis player turned professional coach with over 11 years of coaching experience. With a 20-year career in tennis, he is committed to nurturing the next generation of players through a high-performance development program. Ranked No.12 in India and achieving an international ranking of 925 in Doubles and 1104 in Singles, Ajai brings both expertise and passion to the court. As a certified ITF Level 1 (CBI) Coach, he blends technical precision with strategic training, ensuring young athletes develop the skills, discipline, and mindset needed to excel in the sport.
            </p>
        </div>
        <img
            src="https://s3-alpha-sig.figma.com/img/705e/b66c/3a525a789def71c205a0ffae00b16961?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T4skEj5kA5ZY9WoJZBY9mBAQV9bYujsZEUWjThHLxaMSu2KSbYIH5oEFfl4brkS~QPiqf3natgQANo9NZ5GwaoxXKjCiIwQuATVRHyOpqYDnUbFlWVjJZFJJzX-FLXjV2aw3obufdZIhVvtLQV53iaot-Dur7qRhaWDihKDdtVIMT~ji-KdzYMBptuHJZPHAuv8xiOZ-nqBJcQNugaBJFyBTzM8U9rNPyFgSUsVoKRS5jYe8nJJHm7nEaibOX-RHB3yidWHSBFR91wEXNXUoMjCgvwkX4~5O7h3u96fTnwuzkGz4MtLTFeQ~fXEuUnde7I7KiXnSzBCLq890mjVZtg__"
            alt="Coach Ajai Selvaraj"
            className="w-full sm:w-[300px] md:w-[422px] h-auto sm:h-[260px] md:h-[366px] object-cover"
        />
    </div>
</div>



            <MedicalInfo onFormDataChange={handleMedicalFormDataChange} />


            <div className="bg-[#161616] py-8 md:py-16 px-4 sm:px-6 md:px-20 lg:px-40">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[#B6E82A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase text-center">
                        Declaration Form
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-20">
                        <ul className="list-disc pl-5 space-y-2 sm:space-y-5 text-white text-sm sm:text-base md:text-xl font-normal">
                            <li>My child is physically fit and capable of participating in all activities at the FitGen Summer Camp 2025.</li>
                            <li>I understand and acknowledge the inherent risks involved in physical activities and sports.</li>
                            <li>
                                I authorise the FitGen Sports Academy and its staff to provide first aid and, if necessary, seek medical attention in case of an emergency.
                            </li>
                            <li>
                                I will not hold FitGen Sports Academy, its coaches, or organisers responsible for any injuries or accidents that may occur during the camp.
                            </li>
                            <li>
                                I authorise the use of my child’s photographs and videos taken during the camp for promotional and marketing purposes.
                            </li>
                        </ul>
                        <div className="flex items-center gap-2 mt-4 sm:mt-10">
                            <input
                                type="checkbox"
                                checked={formData.agreed}
                                onChange={handleCheckboxChange}
                                className="w-5 h-5 sm:w-6 sm:h-6 border bg-transparent border-[#B6E82A]"
                            />
                            <span className="text-white text-sm sm:text-base md:text-lg font-normal">
                                I have read and understood the above terms and hereby agree to abide by them.
                            </span>
                        </div>
                        <div className="w-full flex justify-start mt-8 sm:mt-10 md:mt-20">
                            <button
                                type="submit"
                                className="h-12 sm:h-14 md:h-16 w-full sm:w-80 bg-[#B6E82A] text-black text-sm sm:text-base md:text-lg font-medium uppercase"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-[#4E008E] flex flex-col md:flex-row items-center justify-center h-auto md:h-32 py-6 md:py-0 px-4 gap-4 md:gap-16 lg:gap-68">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-normal text-center md:text-left">
                    For any queries, contact us at
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 mt-2 md:mt-4">
                    <p className="text-[#B6E82A] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                        +91-9585561212
                    </p>
                    <p className="text-[#B6E82A] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                        howie@fittgen.in
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tennis
