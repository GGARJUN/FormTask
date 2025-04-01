import React, { useState, useEffect } from "react";

const ParentDetails = ({ onFormDataChange, errors = {} }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        relationship: "",
        phoneNumber: "",
    });

    useEffect(() => {
        onFormDataChange(formData);
    }, [formData, onFormDataChange]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-md">{errors.name}</p>
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
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-md">{errors.email}</p>
                                )}
                            </div>

                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-[#4E008E] heebo_400_20_14 uppercase">Relationship</h2>
                                <select
                                    name="relationship"
                                    value={formData.relationship}
                                    onChange={handleInputChange}
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOUM5QzlDIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_1rem_center] bg-[size:12px_8px]"
                                >
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Guardian">Guardian</option>
                                </select>
                                {errors.relationship && (
                                    <p className="text-red-500 text-md">{errors.relationship}</p>
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
                                    className="h-12 sm:h-14 md:h-16 bg-[#E8E8E8] w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-md">{errors.phoneNumber}</p>
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