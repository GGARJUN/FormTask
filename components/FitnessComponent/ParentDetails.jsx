import React, { useState, useEffect } from "react";

const ParentDetails = ({ onFormDataChange }) => {
    // Initialize form data (removed local storage)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        relationship: "Father",
        phoneNumber: "",
    });

    // Pass data to parent whenever formData changes (removed local storage)
    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="bg-white py-10 md:py-20 px-4 sm:px-8 md:px-40">
            <div className="max-w-5xl mx-auto">

                {/* Form Content */}
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="w-full">
                            <h2 className="text-[#4E008E] text-sm font-medium uppercase">Name</h2>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                className="h-12 sm:h-14 md:h-16 bg-[#E5E5E5] w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div className="w-full">
                            <h2 className="text-[#4E008E] text-sm font-medium uppercase">Email</h2>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email-ID"
                                className="h-12 sm:h-14 md:h-16 bg-[#E5E5E5] w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* Relationship */}
                        <div className="w-full md:mt-5">
                            <h2 className="text-[#4E008E] text-sm font-medium uppercase">Relationship</h2>
                            <select
                                name="relationship"
                                value={formData.relationship}
                                onChange={handleInputChange}
                                className="h-12 sm:h-14 md:h-16 bg-[#E5E5E5] w-full px-5 mt-2 text-gray-500 text-sm appearance-none"
                            >
                                <option>Father</option>
                                <option>Mother</option>
                                <option>Guardian</option>
                            </select>
                        </div>

                        {/* Phone Number */}
                        <div className="w-full md:mt-5">
                            <h2 className="text-[#4E008E] text-sm font-medium uppercase">Phone Number</h2>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="000-00-0000-00"
                                className="h-12 sm:h-14 md:h-16 bg-[#E5E5E5] w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDetails;