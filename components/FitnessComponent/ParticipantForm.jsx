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
        <div className="bg-[#161616] py-10 md:py-20 px-4 sm:px-8 md:px-40">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase text-start">
                    Participant Details
                </h2>

                {/* Form Content */}
                <div className="mt-6 sm:mt-8 md:mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 col-span-1 sm:col-span-3">
                            {/* Name */}
                            <div className="w-full">
                                <h2 className="text-white text-sm font-medium uppercase">Name</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm"
                                />
                            </div>

                            {/* Blood Group */}
                            <div className="w-full">
                                <h2 className="text-white text-sm font-medium uppercase">Blood Group</h2>
                                <select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleInputChange}
                                    className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm appearance-none"
                                >
                                    <option>O Positive</option>
                                    <option>A Positive</option>
                                    <option>B Positive</option>
                                    <option>AB Positive</option>
                                </select>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="w-full">
                            <h2 className="text-white text-sm font-medium uppercase">Date of Birth</h2>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                placeholder="MM/DD/YYYY"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* Age */}
                        <div className="w-full">
                            <h2 className="text-white text-sm font-medium uppercase">Age</h2>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                placeholder="00"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* Gender */}
                        <div className="w-full">
                            <h2 className="text-white text-sm font-medium uppercase">Gender</h2>
                            <div className="flex gap-3 mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Male")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2 text-sm font-medium ${
                                        formData.gender === "Male" ? "bg-[#B6E82A] text-black" : "bg-white text-gray-500"
                                    }`}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Female")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2 text-sm font-medium ${
                                        formData.gender === "Female" ? "bg-[#B6E82A] text-black" : "bg-white text-gray-500"
                                    }`}
                                >
                                    Female
                                </button>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="w-full sm:col-span-3">
                            <h2 className="text-white text-sm font-medium uppercase">Address</h2>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Street Address"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* City */}
                        <div className="w-full">
                            <h2 className="text-white text-sm font-medium uppercase">City</h2>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* State */}
                        <div className="w-full">
                            <h2 className="text-white text-sm font-medium uppercase">State</h2>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* Zip Code */}
                        <div className="w-full">
                            <h2 className="text-white text-sm font-medium uppercase">Zip Code</h2>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="Zip Code"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-gray-500 text-sm"
                            />
                        </div>

                        {/* T-shirt Size */}
                        <div className="w-full sm:col-span-2">
                            <h2 className="text-white text-sm font-medium uppercase">T-shirt Size: (Select One)</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-2">
                                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => handleTshirtSizeChange(size)}
                                        className={`h-12 sm:h-14 md:h-16 text-sm font-medium ${
                                            formData.tshirtSize === size ? "bg-[#B6E82A] text-black" : "bg-white text-gray-500"
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