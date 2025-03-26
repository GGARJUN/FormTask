import React, { useState, useCallback } from "react";
import ParticipantForm from './FitnessComponent/ParticipantForm';
import ParentDetails from './FitnessComponent/ParentDetails';
import MedicalInfo from './FitnessComponent/MedicalInfo';
import Banner from './FitnessComponent/Banner';
import SelectLocation from "./FitnessComponent/SelectLocaltion";

const Fitness = () => {
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
    const [locationFormData, setLocationFormData] = useState({
        batch: "First Batch: April 1st - April 18th",
        location: "Santhome HSS",
        timing: "",
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

    const handleLocationFormDataChange = useCallback((data) => {
        setLocationFormData(data);
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
            locationDetails: locationFormData,
            medicalInfo: medicalFormData,
            declaration: formData,
        };
        console.log("Fitness All Form Data:", allData);
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
                            <div className='px-4 sm:px-6 md:px-10 text-start absolute top-0 mt-4 md:mt-7 w-full flex sm:flex-row items-start sm:items-center gap-3 sm:gap-5'>
                                <p className='text-white font-normal text-sm sm:text-xl'>Fee - 4999</p>
                                <div className='h-5 sm:h-7 border border-white w-0'></div>
                                <h2 className='text-[#B6E82A] font-medium text-sm sm:text-3xl md:text-4xl'>
                                    Early bird offer price - ₹3,999
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

            <SelectLocation onFormDataChange={handleLocationFormDataChange} />

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
    );
};

export default Fitness;