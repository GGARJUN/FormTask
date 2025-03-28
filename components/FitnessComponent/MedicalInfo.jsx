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
        <div className="bg-white py-8 md:py-16 ">
            <div className="max-w-[1099px] w-[76%] mx-auto">
                {/* Title */}
                <h2 className="text-[#4E008E] heebo_500_45_32 uppercase ">
                    Medical Information
                </h2>

                {/* Form Content */}
                <div className="mt-6 sm:mt-8 md:mt-10">
                    {/* Question */}
                    <p className="text-black heebo_400_20_14">
                        Does the participant have any medical conditions, allergies, or dietary restrictions we should be aware of?
                    </p>

                    {/* YES/NO Checkboxes */}
                    <div className="flex gap-[20px] mt-4 sm:mt-6">
                        <label className="flex items-center gap-[11px]">
                            <input
                                type="checkbox"
                                checked={formData.hasMedicalCondition}
                                onChange={() => handleCheckboxChange(true)}
                                className="w-[18px] h-[18px] "
                            />
                            <span className="text-black heebo_400_18_29">
                                YES
                            </span>
                        </label>
                        <label className="flex items-center gap-[11px]">
                            <input
                                type="checkbox"
                                checked={!formData.hasMedicalCondition}
                                onChange={() => handleCheckboxChange(false)}
                                className="w-[18px] h-[18px] "
                            />
                            <span className="text-black heebo_400_18_29">
                                NO
                            </span>
                        </label>
                    </div>

                    {/* Details Text Area (Visible if YES is selected) */}
                    {formData.hasMedicalCondition && (
                        <>
                            <div className="h-[79px] mt-4 sm:mt-14">
                                <p className="text-black heebo_400_20_14 ">
                                    If yes, please provide details
                                </p>
                                <textarea
                                    value={formData.medicalDetails}
                                    onChange={handleDetailsChange}
                                    // placeholder="Enter details here..."
                                    className="w-full  border-b text-gray-500 heebo_400_20_14 p-3 sm:p-4 resize-none"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MedicalInfo;