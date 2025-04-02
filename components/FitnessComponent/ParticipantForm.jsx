import { useState, useEffect } from "react";

export default function ParticipantForm({ onFormDataChange, errors }) {
    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        age: "",
        gender: "Male",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        tshirtSize: "XS",
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
            case "dateOfBirth":
                if (!value) errors.dateOfBirth = "Date of Birth is required";
                else if (isNaN(new Date(value).getTime())) errors.dateOfBirth = "Invalid date";
                break;
            case "age":
                if (!value) errors.age = "Age is required";
                else if (!/^\d+$/.test(value) || parseInt(value) < 10 || parseInt(value) > 20)
                    errors.age = "Age must be between 10 and 20";
                break;
            case "address":
                if (!value) errors.address = "Address is required";
                break;
            case "city":
                if (!value) errors.city = "City is required";
                else if (!/^[a-zA-Z\s]+$/.test(value)) errors.city = "Only alphabets and spaces allowed";
                break;
            case "state":
                if (!value) errors.state = "State is required";
                else if (!/^[a-zA-Z\s]+$/.test(value)) errors.state = "Only alphabets and spaces allowed";
                break;
            case "zipCode":
                if (!value) errors.zipCode = "Zip Code is required";
                else if (!/^\d{6}$/.test(value)) errors.zipCode = "Must be exactly 6 digits";
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

    const handleGenderChange = (gender) => {
        setFormData((prev) => ({ ...prev, gender }));
    };

    const handleTshirtSizeChange = (size) => {
        setFormData((prev) => ({ ...prev, tshirtSize: size }));
    };

    // Display errors only for touched fields or if parent errors are present
    const displayedErrors = {};
    Object.keys(formData).forEach((key) => {
        displayedErrors[key] = touched[key] ? localErrors[key] : errors[key];
    });

    return (
        <div className="bg-[#161616] py-10 md:py-20">
            <div className="max-w-[1099px] w-[76%] mx-auto">
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-5">
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 col-span-1 sm:col-span-3">
                            <div className="w-full flex flex-col gap-[10px]">
                                <h2 className="text-white heebo_400_20_14 uppercase">Name</h2>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 border-2 border-transparent focus:border-[#B6E82A] focus:outline-none"
                                />
                                {displayedErrors.name && <p className="text-red-500 text-md">{displayedErrors.name}</p>}
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Date of Birth</h2>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 uppercase border-2 border-transparent focus:border-[#B6E82A] focus:outline-none"
                            />
                            {displayedErrors.dateOfBirth && <p className="text-red-500 text-md">{displayedErrors.dateOfBirth}</p>}
                        </div>
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Age</h2>
                            <select
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none bg-[url('/downarrow.svg')] bg-no-repeat bg-[position:right_1rem_center] bg-[size:12px_8px] border-2 border-transparent focus:border-[#B6E82A] focus:outline-none"
                            >
                                <option value="" disabled hidden>Select Age</option>
                                {Array.from({ length: 11 }, (_, i) => 10 + i).map((age) => (
                                    <option key={age} value={age}>{age}</option>
                                ))}
                            </select>
                            {displayedErrors.age && <p className="text-red-500 text-md">{displayedErrors.age}</p>}
                        </div>
                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Gender</h2>
                            <div className="flex mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Male")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2 heebo_400_20_14 ${formData.gender === "Male" ? "bg-[#B6E82A] text-black" : "bg-white text-[#9C9C9C]"}`}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Female")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2 heebo_400_20_14 ${formData.gender === "Female" ? "bg-[#B6E82A] text-black" : "bg-white text-[#9C9C9C]"}`}
                                >
                                    Female
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[10px] sm:col-span-3">
                            <h2 className="text-white heebo_400_20_14 uppercase">Address</h2>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Street Address"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 border-2 border-transparent focus:border-[#B6E82A] focus:outline-none"
                            />
                            {displayedErrors.address && <p className="text-red-500 text-md">{displayedErrors.address}</p>}
                        </div>
                        <div className="w-full flex flex-col gap-[10px] -mt-5">
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 text-[#9C9C9C] heebo_400_20_14 border-2 border-transparent focus:border-[#B6E82A] focus:outline-none"
                            />
                            {displayedErrors.city && <p className="text-red-500 text-md">{displayedErrors.city}</p>}
                        </div>
                        <div className="w-full flex flex-col gap-[10px] -mt-5">
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 text-[#9C9C9C] heebo_400_20_14 border-2 border-transparent focus:border-[#B6E82A] focus:outline-none"
                            />
                            {displayedErrors.state && <p className="text-red-500 text-md">{displayedErrors.state}</p>}
                        </div>
                        <div className="w-full flex flex-col gap-[10px] -mt-5">
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="Zip Code"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 text-[#9C9C9C] heebo_400_20_14 border-2 border-transparent focus:border-[#B6E82A] focus:outline-none"
                            />
                            {displayedErrors.zipCode && <p className="text-red-500 text-md">{displayedErrors.zipCode}</p>}
                        </div>
                        <div className="w-full flex flex-col gap-[10px] sm:col-span-2">
                            <h2 className="text-white heebo_400_20_14 uppercase">T-shirt Size: (Select One)</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-2">
                                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => handleTshirtSizeChange(size)}
                                        className={`h-12 sm:h-14 md:h-16 heebo_400_20_14 ${formData.tshirtSize === size ? "bg-[#B6E82A] text-black" : "bg-white text-[#9C9C9C]"}`}
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