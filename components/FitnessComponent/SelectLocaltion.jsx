import React, { useState, useEffect } from "react";

const SelectLocation = ({ onFormDataChange }) => {
    // Initialize state (removed local storage)
    const [formData, setFormData] = useState({
        batch: "First Batch: April 1st - April 18th",
        location: "Santhome HSS",
        timing: "",
    });

    // Pass data to parent whenever formData changes (removed local storage)
    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    // Handle batch change
    const handleBatchChange = (batch) => {
        setFormData((prev) => ({
            ...prev,
            batch,
            location: batch === "First Batch: April 1st - April 18th" ? "Santhome HSS" : "Nehru Park",
            timing: "", // Reset timing when batch changes
        }));
    };

    // Handle timing change
    const handleTimingChange = (timing) => {
        setFormData((prev) => ({
            ...prev,
            timing,
        }));
    };

    return (
        <div className="bg-[#161616] py-8 md:py-16 px-4 sm:px-6 md:px-20 lg:px-40">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase text-start">
                    Select Your Preferred Batch & Location
                </h2>
                <p className="text-white text-xs sm:text-sm md:text-base mt-2">
                    *<span className="text-[#B6E82A]">(Fitness & Athletics are default for all participants)</span>
                </p>

                {/* Batch Selection */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10 md:mt-14">
                    <button
                        onClick={() => handleBatchChange("First Batch: April 1st - April 18th")}
                        className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm md:text-lg lg:text-xl font-medium text-center transition-all duration-300 ${
                            formData.batch === "First Batch: April 1st - April 18th"
                                ? "bg-[#B6E82A] text-[#4E008E] border-4 border-white shadow-lg"
                                : "bg-[#4E008E] text-[#B6E82A]"
                        }`}
                    >
                        First Batch: April 1st - April 18th
                    </button>
                    <button
                        onClick={() => handleBatchChange("Second Batch: May 1st - May 18th")}
                        className={`flex-1 py-2 sm:py-3 text-xs sm:text-sm md:text-lg lg:text-xl font-medium text-center transition-all duration-300 ${
                            formData.batch === "Second Batch: May 1st - May 18th"
                                ? "bg-[#B6E82A] text-[#4E008E] border-4 border-white shadow-lg"
                                : "bg-[#4E008E] text-[#B6E82A]"
                        }`}
                    >
                        Second Batch: May 1st - May 18th
                    </button>
                </div>

                {/* Location Titles */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10 md:mt-14">
                    <div className="flex-1">
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium">
                            FittGen Sports Academy
                        </h2>
                        <h2 className="text-[#B6E82A] font-medium text-2xl sm:text-3xl md:text-4xl">
                            Santhome HSS
                        </h2>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium">
                            FittGen Sports Academy
                        </h2>
                        <h2 className="text-[#B6E82A] font-medium text-2xl sm:text-3xl md:text-4xl">
                            Nehru Park
                        </h2>
                    </div>
                </div>

                {/* Location Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-8 md:mt-10">
                    {/* Santhome HSS */}
                    <div className="relative">
                        <img
                            src={formData.location === "Santhome HSS" ? "/Union.png" : "/Union (1).png"}
                            alt="Santhome HSS Background"
                            className="w-full h-auto object-cover transition-all duration-300"
                        />
                        <div className="absolute top-0 py-6 sm:py-8 md:py-16 px-3 sm:px-4 md:px-5 w-full">
                            <h2
                                className={`text-lg sm:text-xl md:text-xl font-bold ${
                                    formData.location === "Santhome HSS" ? "text-[#4E008E]" : "text-[#B6E82A]"
                                }`}
                            >
                                Location:
                            </h2>
                            <p
                                className={`font-normal text-sm sm:text-base md:text-lg ${
                                    formData.location === "Santhome HSS" ? "text-[#353535]" : "text-[#B4B4B4]"
                                } mt-1 sm:mt-2`}
                            >
                                27,JG+XHP, Sullivan St, Kutil Thoppu, Mylapore, <br /> Chennai, Tamil Nadu 600004
                            </p>
                            <h2
                                className={`text-lg sm:text-xl md:text-xl font-bold mt-2 sm:mt-3 ${
                                    formData.location === "Santhome HSS" ? "text-[#4E008E]" : "text-[#B6E82A]"
                                }`}
                            >
                                Timings (Please select any one):
                            </h2>
                            <div className="mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={
                                            formData.location === "Santhome HSS" &&
                                            formData.timing === "Morning: 6:00 AM - 7:30 AM"
                                        }
                                        onChange={() =>
                                            handleTimingChange(
                                                formData.timing === "Morning: 6:00 AM - 7:30 AM"
                                                    ? ""
                                                    : "Morning: 6:00 AM - 7:30 AM"
                                            )
                                        }
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        disabled={formData.location !== "Santhome HSS"}
                                    />
                                    <p
                                        className={`font-normal text-sm sm:text-base md:text-lg ${
                                            formData.location === "Santhome HSS" ? "text-[#353535]" : "text-[#B4B4B4]"
                                        }`}
                                    >
                                        Morning: 6:00 AM - 7:30 AM
                                    </p>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={
                                            formData.location === "Santhome HSS" &&
                                            formData.timing === "Evening: 4:30 PM - 6:00 PM"
                                        }
                                        onChange={() =>
                                            handleTimingChange(
                                                formData.timing === "Evening: 4:30 PM - 6:00 PM"
                                                    ? ""
                                                    : "Evening: 4:30 PM - 6:00 PM"
                                            )
                                        }
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        disabled={formData.location !== "Santhome HSS"}
                                    />
                                    <p
                                        className={`font-normal text-sm sm:text-base md:text-lg ${
                                            formData.location === "Santhome HSS" ? "text-[#353535]" : "text-[#B4B4B4]"
                                        }`}
                                    >
                                        Evening: 4:30 PM - 6:00 PM
                                    </p>
                                </label>
                            </div>
                            <p
                                className={`font-normal text-sm sm:text-base md:text-lg mt-1 sm:mt-2 ${
                                    formData.location === "Santhome HSS" ? "text-[#4E008E]" : "text-[#B6E82A]"
                                }`}
                            >
                                (6 days a week - Monday to Saturday, with Saturday <br /> beach training)
                            </p>
                        </div>
                    </div>

                    {/* Nehru Park */}
                    <div className="relative">
                        <img
                            src={formData.location === "Nehru Park" ? "/Union.png" : "/Union (1).png"}
                            alt="Nehru Park Background"
                            className="w-full h-auto object-cover transition-all duration-300"
                        />
                        <div className="absolute top-0 py-6 sm:py-8 md:py-16 px-3 sm:px-4 md:px-5 w-full">
                            <h2
                                className={`text-lg sm:text-xl md:text-xl font-bold ${
                                    formData.location === "Nehru Park" ? "text-[#4E008E]" : "text-[#B6E82A]"
                                }`}
                            >
                                Location:
                            </h2>
                            <p
                                className={`font-normal text-sm sm:text-base md:text-lg ${
                                    formData.location === "Nehru Park" ? "text-[#353535]" : "text-[#B4B4B4]"
                                } mt-1 sm:mt-2`}
                            >
                                Flowers Rd, Sastri Nagar, Chetpet, <br /> Chennai, Tamil Nadu 600031
                            </p>
                            <h2
                                className={`text-lg sm:text-xl md:text-xl font-bold mt-2 sm:mt-3 ${
                                    formData.location === "Nehru Park" ? "text-[#4E008E]" : "text-[#B6E82A]"
                                }`}
                            >
                                Timings (Please select any one):
                            </h2>
                            <div className="mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={
                                            formData.location === "Nehru Park" &&
                                            formData.timing === "Morning: 6:00 AM - 7:30 AM"
                                        }
                                        onChange={() =>
                                            handleTimingChange(
                                                formData.timing === "Morning: 6:00 AM - 7:30 AM"
                                                    ? ""
                                                    : "Morning: 6:00 AM - 7:30 AM"
                                            )
                                        }
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        disabled={formData.location !== "Nehru Park"}
                                    />
                                    <p
                                        className={`font-normal text-sm sm:text-base md:text-lg ${
                                            formData.location === "Nehru Park" ? "text-[#353535]" : "text-[#B4B4B4]"
                                        }`}
                                    >
                                        Morning: 6:00 AM - 7:30 AM
                                    </p>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={
                                            formData.location === "Nehru Park" &&
                                            formData.timing === "Evening: 4:30 PM - 6:00 PM"
                                        }
                                        onChange={() =>
                                            handleTimingChange(
                                                formData.timing === "Evening: 4:30 PM - 6:00 PM"
                                                    ? ""
                                                    : "Evening: 4:30 PM - 6:00 PM"
                                            )
                                        }
                                        className="w-5 h-5 sm:w-6 sm:h-6"
                                        disabled={formData.location !== "Nehru Park"}
                                    />
                                    <p
                                        className={`font-normal text-sm sm:text-base md:text-lg ${
                                            formData.location === "Nehru Park" ? "text-[#353535]" : "text-[#B4B4B4]"
                                        }`}
                                    >
                                        Evening: 4:30 PM - 6:00 PM
                                    </p>
                                </label>
                            </div>
                            <p
                                className={`font-normal text-sm sm:text-base md:text-lg mt-1 sm:mt-2 ${
                                    formData.location === "Nehru Park" ? "text-[#4E008E]" : "text-[#B6E82A]"
                                }`}
                            >
                                (5 days a week - Monday to Friday)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectLocation;