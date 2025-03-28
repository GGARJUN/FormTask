import { useState, useEffect } from "react";

export default function ParticipantForm({ onFormDataChange }) {
    // Initialize form data (removed local storage)
    const [formData, setFormData] = useState({
        name: "",
        bloodGroup: "O Positive",
        dateOfBirth: "",
        age: "",
        gender: "Male",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        tshirtSize: "XS",
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

    // Handle gender change
    const handleGenderChange = (gender) => {
        setFormData((prev) => ({
            ...prev,
            gender,
        }));
    };

    // Handle t-shirt size change
    const handleTshirtSizeChange = (size) => {
        setFormData((prev) => ({
            ...prev,
            tshirtSize: size,
        }));
    };

    return (
        <div className="bg-[#161616] py-10 md:py-20">
            <div className="max-w-[1099px] w-[76%] mx-auto ">

                {/* Form Content */}
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-3  gap-y-10 gap-x-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 col-span-1 sm:col-span-3">
                            {/* Name */}
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-white heebo_400_20_14 uppercase">Name</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                                />
                            </div>

                            {/* Blood Group */}
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-white heebo_400_20_14 uppercase">Blood Group</h2>
                                <select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleInputChange}
                                    className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMS41TDYgNi41TDExIDEuNSIgc3Ryb2tlPSIjOUM5QzlDIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-no-repeat bg-[position:right_1rem_center] bg-[size:12px_8px]"
                                >
                                    <option value="O Positive">O Positive</option>
                                    <option value="A Positive">A Positive</option>
                                    <option value="B Positive">B Positive</option>
                                    <option value="AB Positive">AB Positive</option>
                                </select>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Date of Birth</h2>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                placeholder="MM/DD/YYYY"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 uppercase appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                            />
                        </div>

                        {/* Age */}
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Age</h2>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                placeholder="00"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                            />
                        </div>

                        {/* Gender */}
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Gender</h2>
                            <div className="flex  mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Male")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2  heebo_400_20_14 ${formData.gender === "Male" ? "bg-[#B6E82A] text-black" : "bg-white text-[#9C9C9C]"
                                        }`}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Female")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2  heebo_400_20_14 ${formData.gender === "Female" ? "bg-[#B6E82A] text-black" : "bg-white text-[#9C9C9C]"
                                        }`}
                                >
                                    Female
                                </button>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="w-full flex flex-col gap-[10px] sm:col-span-3">
                            <h2 className="text-white heebo_400_20_14 uppercase">Address</h2>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Street Address"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                            />
                        </div>

                        {/* City */}
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">City</h2>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                            />
                        </div>

                        {/* State */}
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">State</h2>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                            />
                        </div>

                        {/* Zip Code */}
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Zip Code</h2>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="Zip Code"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                            />
                        </div>

                        {/* T-shirt Size */}
                        <div className="w-full flex flex-col gap-[10px] sm:col-span-2">
                            <h2 className="text-white heebo_400_20_14 uppercase">T-shirt Size: (Select One)</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-2">
                                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => handleTshirtSizeChange(size)}
                                        className={`h-12 sm:h-14 md:h-16  heebo_400_20_14 ${formData.tshirtSize === size ? "bg-[#B6E82A] text-black" : "bg-white text-[#9C9C9C]"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}