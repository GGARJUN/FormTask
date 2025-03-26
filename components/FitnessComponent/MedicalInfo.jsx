import React, { useState, useEffect } from "react";

const MedicalInfo = ({ onFormDataChange }) => {
    // Initialize state (removed local storage)
    const [formData, setFormData] = useState({
        hasMedicalCondition: false,
        medicalDetails: "",
    });

    // Pass data to parent whenever formData changes (removed local storage)
    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    // Handle YES/NO checkbox change
    const handleCheckboxChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            hasMedicalCondition: value,
            medicalDetails: value ? prev.medicalDetails : "", // Clear details if NO is selected
        }));
    };

    // Handle medical details text area change
    const handleDetailsChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            medicalDetails: e.target.value,
        }));
    };

    return (
        <div className="bg-white py-8 md:py-16 px-4 sm:px-6 md:px-20 lg:px-40">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-[#4E008E] text-2xl sm:text-3xl md:text-4xl font-medium uppercase text-start">
                    Medical Information
                </h2>

                {/* Form Content */}
                <div className="mt-6 sm:mt-8 md:mt-10">
                    {/* Question */}
                    <p className="text-black text-sm sm:text-base md:text-lg font-normal">
                        Does the participant have any medical conditions, allergies, or dietary restrictions we should be aware of?
                    </p>

                    {/* YES/NO Checkboxes */}
                    <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.hasMedicalCondition}
                                onChange={() => handleCheckboxChange(true)}
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                            <span className="text-black text-sm sm:text-base md:text-lg font-normal">
                                YES
                            </span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={!formData.hasMedicalCondition}
                                onChange={() => handleCheckboxChange(false)}
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                            <span className="text-black text-sm sm:text-base md:text-lg font-normal">
                                NO
                            </span>
                        </label>
                    </div>

                    {/* Details Text Area (Visible if YES is selected) */}
                    {formData.hasMedicalCondition && (
                        <>
                            <p className="text-black text-sm sm:text-base md:text-lg font-normal mt-4 sm:mt-6">
                                If yes, please provide details
                            </p>
                            <textarea
                                value={formData.medicalDetails}
                                onChange={handleDetailsChange}
                                placeholder="Enter details here..."
                                className="w-full h-20 mt-2 sm:mt-4 border-b text-gray-500 text-sm sm:text-base md:text-lg font-normal p-3 sm:p-4 resize-none"
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MedicalInfo;