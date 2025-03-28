"use client"
import React, { useState, useCallback } from "react";
import ParticipantForm from './FitnessComponent/ParticipantForm';
import ParentDetails from './FitnessComponent/ParentDetails';
import MedicalInfo from './FitnessComponent/MedicalInfo';
import Banner from './FitnessComponent/Banner';
import SelectLocation from "./FitnessComponent/SelectLocaltion";
import ParentHeader from "./FitnessComponent/ParentHeader";
import Footer from "./FitnessComponent/Footer";


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
        <div className=''>
            <Banner />

            <ParentHeader />

            <ParticipantForm onFormDataChange={handleParticipantFormDataChange} />

            <ParentDetails onFormDataChange={handleParentFormDataChange} />

            <SelectLocation onFormDataChange={handleLocationFormDataChange} />

            <MedicalInfo onFormDataChange={handleMedicalFormDataChange} />


            <div className="bg-[#161616] py-8 md:pt-24 ">
                <div className="max-w-[1099px] w-[76%] mx-auto  md:h-[712px]">
                    <h2 className="text-[#B6E82A] heebo_500_45_32 uppercase text-center">
                        Declaration Form
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-20">
                        <ul className="list-disc pl-5 space-y-2 sm:space-y-5 text-white heebo_400_20_40">
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
                        <div className="flex items-start md:items-center gap-2 mt-4 sm:mt-10">
                            <input
                                type="checkbox"
                                checked={formData.agreed}
                                onChange={handleCheckboxChange}
                                className="w-[18px] h-[18px] bg-black border-2 border-[#B6E82A] text-[#B6E82A] focus:ring-[#B6E82A] focus:ring-offset-2"
                            />
                            <span className="text-white heebo_500_20_29">
                                I have read and understood the above terms and hereby agree to abide by them.
                            </span>
                        </div>
                        <div className="w-full flex justify-start mt-8 sm:mt-10 md:mt-20">
                            <button
                                type="submit"
                                className="h-[47.19px] w-[205.69px] bg-[#B6E82A] text-[#4E008E] heebo_400_16_11 uppercase"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Fitness;