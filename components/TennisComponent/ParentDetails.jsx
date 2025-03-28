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
        <div >
            <div className="bg-[#B6E82A]  ">
                <div className="max-w-[1099px] w-[76%] mx-auto h-[97px] flex justify-center items-center">
                    <h2 className="text-[#4E008E] heebo_500_45_32  uppercase ">
                        Parent/Guardian Details
                    </h2>
                </div>
            </div>


            <div className="bg-white py-10 md:py-20">
                <div className="max-w-[1099px] w-[76%] mx-auto">
                    {/* Form Content */}
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-10 gap-x-5">
                            {/* Name */}
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Name</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOUM5QzlDIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_1rem_center] bg-[size:12px_8px]"
                                />
                            </div>

                            {/* Email */}
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Email</h2>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email-ID"
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                                />
                            </div>

                            {/* Relationship */}
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Relationship</h2>
                                <select
                                    name="relationship"
                                    value={formData.relationship}
                                    onChange={handleInputChange}
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOUM5QzlDIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_1rem_center] bg-[size:12px_8px]"
                                >
                                    <option>Father</option>
                                    <option>Mother</option>
                                    <option>Guardian</option>
                                </select>
                            </div>

                            {/* Phone Number */}
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Phone Number</h2>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="000-00-0000-00"
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDetails;