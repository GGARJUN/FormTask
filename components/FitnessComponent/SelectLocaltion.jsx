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
        <div className="bg-[#161616] py-10 md:py-20 relative">
            <div className="max-w-[1099px] w-[76%] mx-auto  z-50">
                {/* Title */}
                <h2 className="text-white heebo_500_45_32 uppercase ">
                    Select Your Preferred Batch & Location
                </h2>
                <p className="text-white heebo_400_20_29 mt-2">
                    *<span className="text-[#B6E82A] heebo_400_20_29">(Fitness & Athletics are default for all participants)</span>
                </p>

                {/* Batch Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 mt-6 sm:mt-8 md:mt-10">
                    <button
                        onClick={() => handleBatchChange("First Batch: April 1st - April 18th")}
                        className={`flex-1 py-6  heebo_700_20_14 text-center  max-w-[1099px] w-[76vw] md:w-[37.5vw] ${formData.batch === "First Batch: April 1st - April 18th"
                            ? "bg-[#B6E82A] text-[#4E008E] border-4 border-white"
                            : "bg-[#4E008E] text-[#B6E82A]"
                            }`}
                    >
                        First Batch: April 1st - April 18th
                    </button>
                    <button
                        onClick={() => handleBatchChange("Second Batch: May 1st - May 18th")}
                        className={`flex-1 py-6  heebo_700_20_14 text-center not-focus-visible:max-w-[1099px] w-[76vw] md:w-[37.5vw]  ${formData.batch === "Second Batch: May 1st - May 18th"
                            ? "bg-[#B6E82A] text-[#4E008E] border-4 border-white"
                            : "bg-[#4E008E] text-[#B6E82A]"
                            }`}
                    >
                        Second Batch: May 1st - May 18th
                    </button>
                </div>



                {/* Location Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-16 mt-6 sm:mt-8 md:mt-10 z-50">
                    {/* Santhome HSS */}
                    <div className="max-w-[1099px] w-[76vw] md:w-[36vw] z-50">
                        <div>
                            <h2 className="heebo_500_20_38 text-white">
                                FittGen Sports Academy
                            </h2>
                            <h2 className="text-[#B6E82A] heebo_500_35_38">
                                Santhome HSS
                            </h2>
                        </div>
                        <div className="relative mt-5 h-[368px] max-w-[1099px] w-[76vw] md:w-[37.5vw]">
                            <img
                                src={formData.location === "Santhome HSS" ? "/Union.webp" : "/Union (1).webp"}
                                alt="Santhome HSS Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 md:top-0 py-6 sm:py-8 md:py-16 px-3 sm:px-4 md:px-5 w-full">
                                <h2
                                    className={`heebo_700_20_29 ${formData.location === "Santhome HSS"
                                        ? "text-[#4E008E]"
                                        : "text-[#B6E82A]"
                                        }`}
                                >
                                    Location:
                                </h2>
                                <p
                                    className={`heebo_400_18_29 ${formData.location === "Santhome HSS"
                                        ? "text-[#353535]"
                                        : "text-[#B4B4B4]"
                                        } mt-1 sm:mt-2`}
                                >
                                    27,JG+XHP, Sullivan St, Kutil Thoppu, Mylapore, <br /> Chennai,
                                    Tamil Nadu 600004
                                </p>
                                <h2
                                    className={`heebo_700_20_29 mt-2 sm:mt-3 ${formData.location === "Santhome HSS"
                                        ? "text-[#4E008E]"
                                        : "text-[#B6E82A]"
                                        }`}
                                >
                                    Timings (Please select any one):
                                </h2>
                                <div className="mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                                    <label className="flex items-center gap-[11px]">
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
                                            className="w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Santhome HSS"}
                                        />
                                        <p
                                            className={`font-normal text-sm sm:text-base md:text-lg ${formData.location === "Santhome HSS"
                                                ? "text-[#353535]"
                                                : "text-[#B4B4B4]"
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
                                            className="w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Santhome HSS"}
                                        />
                                        <p
                                            className={`font-normal text-sm sm:text-base md:text-lg ${formData.location === "Santhome HSS"
                                                ? "text-[#353535]"
                                                : "text-[#B4B4B4]"
                                                }`}
                                        >
                                            Evening: 4:30 PM - 6:00 PM
                                        </p>
                                    </label>
                                </div>
                                <p
                                    className={`heebo_400_18_29 mt-1 sm:mt-2 ${formData.location === "Santhome HSS"
                                        ? "text-[#4E008E]"
                                        : "text-[#B6E82A]"
                                        }`}
                                >
                                    (6 days a week - Monday to Saturday, with Saturday <br /> beach
                                    training)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Nehru Park */}
                    <div className="max-w-[1099px] w-[76vw] md:w-[36vw] z-50">
                        <div>
                            <h2 className="heebo_500_20_38 text-white">
                                FittGen Sports Academy
                            </h2>
                            <h2 className="text-[#B6E82A] heebo_500_35_38">
                                Nehru Park
                            </h2>
                        </div>
                        <div className="relative mt-5 h-[368px] max-w-[1099px] w-[76vw] md:w-[37.5vw]">
                            <img
                                src={formData.location === "Nehru Park" ? "/Union.webp" : "/Union (1).webp"}
                                alt="Nehru Park Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 md:top-0 py-6 sm:py-8 md:py-16 px-3 sm:px-4 md:px-5 w-full">
                                <h2
                                    className={`heebo_700_20_29 ${formData.location === "Nehru Park"
                                        ? "text-[#4E008E]"
                                        : "text-[#B6E82A]"
                                        }`}
                                >
                                    Location:
                                </h2>
                                <p
                                    className={`heebo_400_18_29 ${formData.location === "Nehru Park"
                                        ? "text-[#353535]"
                                        : "text-[#B4B4B4]"
                                        } mt-1 sm:mt-2`}
                                >
                                    Flowers Rd, Sastri Nagar, Chetpet, Chennai, <br /> Tamil Nadu
                                    600031
                                </p>
                                <h2
                                    className={`heebo_700_20_29 mt-2 sm:mt-3 ${formData.location === "Nehru Park"
                                        ? "text-[#4E008E]"
                                        : "text-[#B6E82A]"
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
                                            className="w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Nehru Park"}
                                        />
                                        <p
                                            className={`font-normal text-sm sm:text-base md:text-lg ${formData.location === "Nehru Park"
                                                ? "text-[#353535]"
                                                : "text-[#B4B4B4]"
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
                                            className="w-[18px] h-[18px] heebo_400_18_29"
                                            disabled={formData.location !== "Nehru Park"}
                                        />
                                        <p
                                            className={`font-normal text-sm sm:text-base md:text-lg ${formData.location === "Nehru Park"
                                                ? "text-[#353535]"
                                                : "text-[#B4B4B4]"
                                                }`}
                                        >
                                            Evening: 4:30 PM - 6:00 PM
                                        </p>
                                    </label>
                                </div>
                                <p
                                    className={`heebo_400_18_29 mt-1 sm:mt-2 ${formData.location === "Nehru Park"
                                        ? "text-[#4E008E]"
                                        : "text-[#B6E82A]"
                                        }`}
                                >
                                    (5 days a week - Monday to Friday)
                                </p>
                            </div>
                        </div>
                    </div>
                <div className="absolute -bottom-20 right-4 sm:right-10 md:right-20 xl:block hidden ">
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                        <img src="Group.webp" alt="" className="w-8 sm:w-auto" />
                        {/* <img src="Group-1.webp" alt="" className="w-8 sm:w-auto" /> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SelectLocation;