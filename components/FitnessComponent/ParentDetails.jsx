import React, { useState, useEffect } from "react";

const ParentDetails = ({ onFormDataChange, errors = {} }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        relationship: "", // Default value
        phoneNumber: "",
    });

    const [localErrors, setLocalErrors] = useState({}); // Local state for real-time errors
    const [touched, setTouched] = useState({}); // Track which fields have been interacted with

    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    // Validation function for individual fields
    const validateField = (name, value) => {
        const errors = {};

        switch (name) {
            case "name":
                if (!value) errors.name = "Name is required";
                else if (!/^[a-zA-Z\s]+$/.test(value)) errors.name = "Only alphabets and spaces allowed";
                break;
            case "email":
                if (!value) errors.email = "Email is required";
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors.email = "Invalid email format";
                break;
            case "relationship":
                if (!value) errors.relationship = "Relationship is required";
                else if (!["Father", "Mother", "Guardian"].includes(value))
                    errors.relationship = "Invalid relationship selected";
                break;
            case "phoneNumber":
                if (!value) errors.phoneNumber = "Phone Number is required";
                else if (!/^\d{10}$/.test(value)) errors.phoneNumber = "Must be exactly 10 digits number";
                break;
            default:
                break;
        }

        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Mark the field as touched
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        // Validate the changed field and update local errors
        const fieldErrors = validateField(name, value);
        setLocalErrors((prev) => ({
            ...prev,
            [name]: fieldErrors[name], // Update only the specific field's error
        }));
    };

    // Display errors only for touched fields or if parent errors are present
    const displayedErrors = {};
    Object.keys(formData).forEach((key) => {
        displayedErrors[key] = touched[key] ? localErrors[key] : errors[key];
    });

    return (
        <div>
            <div className="bg-[#B6E82A]">
                <div className="max-w-[1099px] w-[76%] mx-auto h-[97px] flex justify-center items-center">
                    <h2 className="text-[#4E008E] heebo_500_45_32 uppercase">
                        Parent/Guardian Details
                    </h2>
                </div>
            </div>

            <div className="bg-white py-10 md:py-20">
                <div className="max-w-[1099px] w-[76%] mx-auto">
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-5">
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Name</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none border-2 border-transparent focus:border-[#4E008E] focus:outline-none"
                                />
                                {displayedErrors.name && (
                                    <p className="text-red-500 text-md">{displayedErrors.name}</p>
                                )}
                            </div>

                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Email</h2>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email-ID"
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 border-2 border-transparent focus:border-[#4E008E] focus:outline-none"
                                />
                                {displayedErrors.email && (
                                    <p className="text-red-500 text-md">{displayedErrors.email}</p>
                                )}
                            </div>

                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Relationship</h2>
                                <select
                                    name="relationship"
                                    value={formData.relationship}
                                    onChange={handleInputChange}
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none bg-[url('/downarrow.svg')] bg-no-repeat bg-[position:right_1rem_center] bg-[size:12px_8px]  border-2 border-transparent focus:border-[#4E008E] focus:outline-none"
                                >
                                    <option value="" disabled hidden>Select Relationship</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Guardian">Guardian</option>
                                </select>
                                {displayedErrors.relationship && (
                                    <p className="text-red-500 text-md">{displayedErrors.relationship}</p>
                                )}
                            </div>

                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Phone Number</h2>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="000-00-0000-00"
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 border-2 border-transparent focus:border-[#4E008E] focus:outline-none"
                                />
                                {displayedErrors.phoneNumber && (
                                    <p className="text-red-500 text-md">{displayedErrors.phoneNumber}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDetails;