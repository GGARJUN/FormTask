import React, { useState, useEffect } from "react";

const MedicalInfo = ({ onFormDataChange, errors = {} }) => {
    const [formData, setFormData] = useState({
        hasMedicalCondition: false,
        medicalDetails: "",
    });

    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    const handleCheckboxChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            hasMedicalCondition: value,
            medicalDetails: value ? prev.medicalDetails : "",
        }));
    };

    const handleDetailsChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            medicalDetails: e.target.value,
        }));
    };

    return (
        <div className="bg-white py-8 md:py-16">
            <div className="max-w-[1099px] w-[76%] mx-auto">
                <h2 className="text-[#4E008E] heebo_500_45_32 uppercase">
                    Medical Information
                </h2>

                <div className="mt-6 sm:mt-8 md:mt-10">
                    <p className="text-black heebo_400_20_14">
                        Does the participant have any medical conditions, allergies, or dietary restrictions we should be aware of?
                    </p>

                    <div className="flex gap-[20px] mt-4 sm:mt-6">
                        <label className="flex items-center gap-[11px] cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.hasMedicalCondition}
                                onChange={() => handleCheckboxChange(true)}
                                className="opacity-0 absolute w-[18px] h-[18px] decoration"
                            />
                            <span className="w-[18px] h-[18px] border border-[#B6E82A] flex items-center justify-center">
                                {formData.hasMedicalCondition && (
                                    <svg
                                        className="w-[18px] h-[18px] bg-[#B6E82A] text-[#4E008E]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                            </span>
                            <span className="text-black heebo_400_18_29">YES</span>
                        </label>
                        <label className="flex items-center gap-[11px] cursor-pointer">
                            <input
                                type="checkbox"
                                checked={!formData.hasMedicalCondition}
                                onChange={() => handleCheckboxChange(false)}
                                className="opacity-0 absolute w-[18px] h-[18px] decoration"
                            />
                            <span className="w-[18px] h-[18px] border border-[#B6E82A]  flex items-center justify-center">
                                {!formData.hasMedicalCondition && (
                                    <svg
                                        className="w-[18px] h-[18px] bg-[#B6E82A] text-[#4E008E]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                )}
                            </span>
                            <span className="text-black heebo_400_18_29">NO</span>
                        </label>
                    </div>


                    <div className="h-[79px] mt-4 sm:mt-14">
                        <p className="text-black heebo_400_20_14">
                            If yes, please provide details
                        </p>
                        <textarea
                            value={formData.medicalDetails}
                            onChange={handleDetailsChange}
                            className="w-full border-b text-gray-500 heebo_400_20_14  resize-none mt-6"
                        />
                        {errors.medicalDetails && (
                            <p className="text-red-500 text-md">{errors.medicalDetails}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalInfo;