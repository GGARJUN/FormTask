import React, { useState, useEffect } from "react";

const SelectLocation = ({ onFormDataChange, errors = {} }) => {
    const [formData, setFormData] = useState({
        batch: "First Batch: April 1st - April 18th",
        location: "Santhome HSS",
        timing: "",
    });

    const [localErrors, setLocalErrors] = useState({}); // Local state for real-time errors
    const [touched, setTouched] = useState({ timing: false }); // Track if timing has been interacted with

    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    // Validation function for the timing field
    const validateTiming = (timing) => {
        const errors = {};
        if (!timing) errors.timing = "Timing is required";
        return errors;
    };

    const handleBatchChange = (batch) => {
        setFormData((prev) => ({
            ...prev,
            batch,
            location: batch === "First Batch: April 1st - April 18th" ? "Santhome HSS" : "Nehru Park",
            timing: "",
        }));
        // Reset timing errors and touched state when batch changes
        setLocalErrors({});
        setTouched({ timing: false });
    };

    const handleTimingChange = (timing) => {
        setFormData((prev) => ({
            ...prev,
            timing: prev.timing === timing ? "" : timing,
        }));

        // Mark timing as touched
        setTouched((prev) => ({
            ...prev,
            timing: true,
        }));

        // Validate timing and update local errors
        const fieldErrors = validateTiming(formData.timing === timing ? "" : timing);
        setLocalErrors((prev) => ({
            ...prev,
            timing: fieldErrors.timing,
        }));
    };

    // Display errors only for touched fields or if parent errors are present
    const displayedErrors = {
        timing: touched.timing ? localErrors.timing : errors.timing,
    };

    return (
        <div className="bg-[#161616] py-6 sm:py-10 md:py-20 relative">
            <div className="max-w-[1099px] w-[76%] mx-auto z-50">
                <h2 className="text-white heebo_500_45_32 uppercase">Select Your Preferred Batch & Location</h2>
                <p className="text-white heebo_400_20_29 mt-2">
                    *<span className="text-[#B6E82A] heebo_400_20_29">(Fitness & Athletics are default for all participants)</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 mt-6 sm:mt-8 md:mt-10 py-[40px]">
                    <button
                        onClick={() => handleBatchChange("First Batch: April 1st - April 18th")}
                        className={`flex-1 py-4 sm:py-6 heebo_700_20_14 text-center ${formData.batch === "First Batch: April 1st - April 18th" ? "bg-[#B6E82A] text-[#4E008E] border-4 border-white" : "bg-[#4E008E] text-[#B6E82A]"}`}
                    >
                        First Batch: April 1st - April 18th
                    </button>
                    <button
                        onClick={() => handleBatchChange("Second Batch: May 1st - May 18th")}
                        className={`flex-1 py-4 sm:py-6 heebo_700_20_14 text-center ${formData.batch === "Second Batch: May 1st - May 18th" ? "bg-[#B6E82A] text-[#4E008E] border-4 border-white" : "bg-[#4E008E] text-[#B6E82A]"}`}
                    >
                        Second Batch: May 1st - May 18th
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 mt-6 sm:mt-8 md:mt-10 z-50">
                    <div className="max-w-[1099px] w-full z-50">
                        <div>
                            <h2 className="heebo_500_20_38 text-white text-center sm:text-left">FittGen Sports Academy</h2>
                            <h2 className="text-[#B6E82A] heebo_500_35_38 text-center sm:text-left">Santhome HSS</h2>
                        </div>
                        <div className={`relative mt-14 min-h-[300px] sm:min-h-[368px] ${formData.location === "Nehru Park" ? "bg-[#4E008E]" : "bg-[#B6E82A]"}`}>
                            <div className="absolute top-4 sm:top-6 md:top-0 py-4 sm:py-6 md:py-8 lg:py-16 px-3 sm:px-4 md:px-5 w-full">
                                <h2 className={`heebo_700_20_29 ${formData.location === "Santhome HSS" ? "text-[#4E008E]" : "text-[#B6E82A]"} text-center sm:text-left`}>Location:</h2>
                                <p className={`heebo_400_18_29 ${formData.location === "Santhome HSS" ? "text-[#353535]" : "text-[#B4B4B4]"} mt-1 sm:mt-2 text-center sm:text-left text-sm sm:text-base`}>
                                    27,JG+XHP, Sullivan St, Kutil Thoppu, Mylapore, <br /> Chennai, Tamil Nadu 600004
                                </p>
                                <h2 className={`heebo_700_20_29 mt-2 sm:mt-3 ${formData.location === "Santhome HSS" ? "text-[#4E008E]" : "text-[#B6E82A]"} text-center sm:text-left`}>Timings (Please select any one):</h2>
                                <div className="mt-1 sm:mt-2 space-y-1 sm:space-y-2 flex flex-col items-center sm:items-start">
                                    <label className="flex items-center gap-2 sm:gap-[11px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.location === "Santhome HSS" && formData.timing === "Morning: 6:00 AM - 7:30 AM"}
                                            onChange={() => handleTimingChange("Morning: 6:00 AM - 7:30 AM")}
                                            className="opacity-0 absolute w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Santhome HSS"}
                                        />
                                        <span className="w-[18px] h-[18px] border border-[#B6E82A] bg-[#ffffff] flex items-center justify-center">
                                            {formData.location === "Santhome HSS" && formData.timing === "Morning: 6:00 AM - 7:30 AM" && (
                                                <svg className="w-[18px] h-[18px] text-[#B6E82A] bg-[#4E008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </span>
                                        <p className={`font-normal text-xs sm:text-sm md:text-base lg:text-lg ${formData.location === "Santhome HSS" ? "text-[#353535]" : "text-[#B4B4B4]"}`}>Morning: 6:00 AM - 7:30 AM</p>
                                    </label>
                                    <label className="flex items-center gap-2 sm:gap-[11px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.location === "Santhome HSS" && formData.timing === "Evening: 4:30 PM - 6:00 PM"}
                                            onChange={() => handleTimingChange("Evening: 4:30 PM - 6:00 PM")}
                                            className="opacity-0 absolute w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Santhome HSS"}
                                        />
                                        <span className="w-[18px] h-[18px] border border-[#B6E82A] bg-[#ffffff] flex items-center justify-center">
                                            {formData.location === "Santhome HSS" && formData.timing === "Evening: 4:30 PM - 6:00 PM" && (
                                                <svg className="w-[18px] h-[18px] text-[#B6E82A] bg-[#4E008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </span>
                                        <p className={`font-normal text-xs sm:text-sm md:text-base lg:text-lg ${formData.location === "Santhome HSS" ? "text-[#353535]" : "text-[#B4B4B4]"}`}>Evening: 4:30 PM - 6:00 PM</p>
                                    </label>
                                </div>
                                {formData.location === "Santhome HSS" && displayedErrors.timing && (
                                    <p className="text-red-500 text-xs sm:text-sm mt-2 text-center sm:text-left">{displayedErrors.timing}</p>
                                )}
                                <p className={`heebo_400_18_29 mt-1 sm:mt-2 ${formData.location === "Santhome HSS" ? "text-[#4E008E]" : "text-[#B6E82A]"} text-center sm:text-left text-sm sm:text-base`}>
                                    (6 days a week - Monday to Saturday, with Saturday <br /> beach training)
                                </p>
                            </div>
                            <div className={`h-10 w-10 shadow-2xl rotate-45 absolute -top-5 left-10 ${formData.location === "Nehru Park" ? "bg-[#4E008E]" : "bg-[#B6E82A]"}`}></div>
                        </div>
                    </div>
                    <div className="max-w-[1099px] w-full z-50">
                        <div>
                            <h2 className="heebo_500_20_38 text-white text-center sm:text-left">FittGen Sports Academy</h2>
                            <h2 className="text-[#B6E82A] heebo_500_35_38 text-center sm:text-left">Nehru Park</h2>
                        </div>
                        <div className={`relative mt-14 min-h-[300px] sm:min-h-[368px] ${formData.location === "Nehru Park" ? "bg-[#B6E82A]" : "bg-[#4E008E]"}`}>
                            <div className="absolute top-4 sm:top-6 md:top-0 py-4 sm:py-6 md:py-8 lg:py-16 px-3 sm:px-4 md:px-5 w-full">
                                <h2 className={`heebo_700_20_29 ${formData.location === "Nehru Park" ? "text-[#4E008E]" : "text-[#B6E82A]"} text-center sm:text-left`}>Location:</h2>
                                <p className={`heebo_400_18_29 ${formData.location === "Nehru Park" ? "text-[#353535]" : "text-[#B4B4B4]"} mt-1 sm:mt-2 text-center sm:text-left text-sm sm:text-base`}>
                                    Flowers Rd, Sastri Nagar, Chetpet, Chennai, <br /> Tamil Nadu 600031
                                </p>
                                <h2 className={`heebo_700_20_29 mt-2 sm:mt-3 ${formData.location === "Nehru Park" ? "text-[#4E008E]" : "text-[#B6E82A]"} text-center sm:text-left`}>Timings (Please select any one):</h2>
                                <div className="mt-1 sm:mt-2 space-y-1 sm:space-y-2 flex flex-col items-center sm:items-start">
                                    <label className="flex items-center gap-2 sm:gap-[11px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.location === "Nehru Park" && formData.timing === "Morning: 6:00 AM - 7:30 AM"}
                                            onChange={() => handleTimingChange("Morning: 6:00 AM - 7:30 AM")}
                                            className="opacity-0 absolute w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Nehru Park"}
                                        />
                                        <span className="w-[18px] h-[18px] border border-[#B6E82A] bg-[#ffffff] flex items-center justify-center">
                                            {formData.location === "Nehru Park" && formData.timing === "Morning: 6:00 AM - 7:30 AM" && (
                                                <svg className="w-[18px] h-[18px] text-[#B6E82A] bg-[#4E008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </span>
                                        <p className={`font-normal text-xs sm:text-sm md:text-base lg:text-lg ${formData.location === "Nehru Park" ? "text-[#353535]" : "text-[#B4B4B4]"}`}>Morning: 6:00 AM - 7:30 AM</p>
                                    </label>
                                    <label className="flex items-center gap-2 sm:gap-[11px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.location === "Nehru Park" && formData.timing === "Evening: 4:30 PM - 6:00 PM"}
                                            onChange={() => handleTimingChange("Evening: 4:30 PM - 6:00 PM")}
                                            className="opacity-0 absolute w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Nehru Park"}
                                        />
                                        <span className="w-[18px] h-[18px] border border-[#B6E82A] bg-[#ffffff] flex items-center justify-center">
                                            {formData.location === "Nehru Park" && formData.timing === "Evening: 4:30 PM - 6:00 PM" && (
                                                <svg className="w-[18px] h-[18px] text-[#B6E82A] bg-[#4E008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </span>
                                        <p className={`font-normal text-xs sm:text-sm md:text-base lg:text-lg ${formData.location === "Nehru Park" ? "text-[#353535]" : "text-[#B4B4B4]"}`}>Evening: 4:30 PM - 6:00 PM</p>
                                    </label>
                                </div>
                                {formData.location === "Nehru Park" && displayedErrors.timing && (
                                    <p className="text-red-500 text-xs sm:text-sm mt-2 text-center sm:text-left">{displayedErrors.timing}</p>
                                )}
                                <p className={`heebo_400_18_29 mt-1 sm:mt-2 ${formData.location === "Nehru Park" ? "text-[#4E008E]" : "text-[#B6E82A]"} text-center sm:text-left text-sm sm:text-base`}>
                                    (5 days a week - Monday to Friday)
                                </p>
                            </div>
                            <div className={`h-10 w-10 shadow-2xl rotate-45 absolute -top-5 left-10 ${formData.location === "Nehru Park" ? "bg-[#B6E82A]" : "bg-[#4E008E]"}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectLocation;