import React, { useState, useEffect } from "react";

const MedicalInfo = ({ onFormDataChange, errors = {} }) => {
    const [formData, setFormData] = useState({
        hasMedicalCondition: false,
        medicalDetails: "",
    });

    const [localErrors, setLocalErrors] = useState({}); // Local state for real-time errors
    const [touched, setTouched] = useState({ medicalDetails: false }); // Track if textarea has been interacted with

    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    // Validation function for medicalDetails
    const validateMedicalDetails = (hasCondition, details) => {
        const errors = {};
        if (hasCondition && !details) errors.medicalDetails = "Details are required";
        else if (hasCondition && details.length < 10) errors.medicalDetails = "Must be at least 10 characters";
        return errors;
    };

    const handleCheckboxChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            hasMedicalCondition: value,
            medicalDetails: value ? prev.medicalDetails : "",
        }));

        // Validate when checkbox changes to "YES" and reset if "NO"
        const fieldErrors = validateMedicalDetails(value, formData.medicalDetails);
        setLocalErrors((prev) => ({
            ...prev,
            medicalDetails: fieldErrors.medicalDetails,
        }));
    };

    const handleDetailsChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            medicalDetails: value,
        }));

        // Mark textarea as touched
        setTouched((prev) => ({
            ...prev,
            medicalDetails: true,
        }));

        // Validate textarea and update local errors
        const fieldErrors = validateMedicalDetails(formData.hasMedicalCondition, value);
        setLocalErrors((prev) => ({
            ...prev,
            medicalDetails: fieldErrors.medicalDetails,
        }));
    };

    // Display errors only for touched fields or if parent errors are present
    const displayedErrors = {
        medicalDetails: touched.medicalDetails ? localErrors.medicalDetails : errors.medicalDetails,
    };

    return (
        <div className="bg-white py-8 md:py-16">
            <div className="max-w-[1099px] w-[76%] mx-auto">
                <h2 className="text-[#4E008E] heebo_500_45_32 uppercase">Medical Information</h2>
                <div className="mt-6 sm:mt-8 md:mt-10">
                    <p className="text-black heebo_400_20_14">Does the participant have any medical conditions, allergies, or dietary restrictions we should be aware of?</p>
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
                                    <svg className="w-[18px] h-[18px] bg-[#B6E82A] text-[#4E008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
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
                            <span className="w-[18px] h-[18px] border border-[#B6E82A] flex items-center justify-center">
                                {!formData.hasMedicalCondition && (
                                    <svg className="w-[18px] h-[18px] bg-[#B6E82A] text-[#4E008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </span>
                            <span className="text-black heebo_400_18_29">NO</span>
                        </label>
                    </div>
                    <div className="h-[79px] mt-4 sm:mt-14">
                        <p className="text-black heebo_400_20_14">If yes, please provide details</p>
                        <textarea
                            value={formData.medicalDetails}
                            onChange={handleDetailsChange}
                            className="w-full border-0 border-b text-gray-500 heebo_400_20_14 resize-none mt-6 focus:outline-none"
                            disabled={!formData.hasMedicalCondition}
                        />
                        {displayedErrors.medicalDetails && (
                            <p className="text-red-500 text-md">{displayedErrors.medicalDetails}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalInfo;