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

    const handleGenderChange = (gender) => {
        setFormData((prev) => ({
            ...prev,
            gender,
        }));
    };

    const handleTshirtSizeChange = (size) => {
        setFormData((prev) => ({
            ...prev,
            tshirtSize: size,
        }));
    };

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
                                    className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-md">{errors.name}</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Date of Birth</h2>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 uppercase"
                            />
                            {errors.dateOfBirth && (
                                <p className="text-red-500 text-md">{errors.dateOfBirth}</p>
                            )}
                        </div>

                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Age</h2>
                            <select
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14 appearance-none bg-[url('/downarrow.svg')] bg-no-repeat bg-[position:right_1rem_center] bg-[size:12px_8px]"
                            >
                                <option value="" disabled hidden>
                                    Select Age
                                </option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
                            {errors.age && (
                                <p className="text-red-500 text-md">{errors.age}</p>
                            )}
                        </div>

                        <div className="w-full flex flex-col gap-[10px]">
                            <h2 className="text-white heebo_400_20_14 uppercase">Gender</h2>
                            <div className="flex mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Male")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2 heebo_400_20_14 ${
                                        formData.gender === "Male"
                                            ? "bg-[#B6E82A] text-black"
                                            : "bg-white text-[#9C9C9C]"
                                    }`}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleGenderChange("Female")}
                                    className={`h-12 sm:h-14 md:h-16 w-1/2 heebo_400_20_14 ${
                                        formData.gender === "Female"
                                            ? "bg-[#B6E82A] text-black"
                                            : "bg-white text-[#9C9C9C]"
                                    }`}
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
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 mt-2 text-[#9C9C9C] heebo_400_20_14"
                            />
                            {errors.address && (
                                <p className="text-red-500 text-md">{errors.address}</p>
                            )}
                        </div>

                        <div className="w-full flex flex-col gap-[10px] -mt-5">
                            {/* <h2 className="text-white heebo_400_20_14 uppercase">City</h2> */}
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 text-[#9C9C9C] heebo_400_20_14"
                            />
                            {errors.city && (
                                <p className="text-red-500 text-md">{errors.city}</p>
                            )}
                        </div>

                        <div className="w-full flex flex-col gap-[10px] -mt-5">
                            {/* <h2 className="text-white heebo_400_20_14 uppercase">State</h2> */}
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5  text-[#9C9C9C] heebo_400_20_14"
                            />
                            {errors.state && (
                                <p className="text-red-500 text-md">{errors.state}</p>
                            )}
                        </div>

                        <div className="w-full flex flex-col gap-[10px] -mt-5">
                            {/* <h2 className="text-white heebo_400_20_14 uppercase">Zip Code</h2> */}
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="Zip Code"
                                className="h-12 sm:h-14 md:h-16 bg-white w-full px-5 text-[#9C9C9C] heebo_400_20_14"
                            />
                            {errors.zipCode && (
                                <p className="text-red-500 text-md">{errors.zipCode}</p>
                            )}
                        </div>

                        <div className="w-full flex flex-col gap-[10px] sm:col-span-2">
                            <h2 className="text-white heebo_400_20_14 uppercase">
                                T-shirt Size: (Select One)
                            </h2>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-2">
                                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => handleTshirtSizeChange(size)}
                                        className={`h-12 sm:h-14 md:h-16 heebo_400_20_14 ${
                                            formData.tshirtSize === size
                                                ? "bg-[#B6E82A] text-black"
                                                : "bg-white text-[#9C9C9C]"
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