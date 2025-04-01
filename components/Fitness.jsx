"use client"
import React, { useState, useCallback, useRef } from "react";
import ParticipantForm from './FitnessComponent/ParticipantForm';
import ParentDetails from './FitnessComponent/ParentDetails';
import MedicalInfo from './FitnessComponent/MedicalInfo';
import Banner from './FitnessComponent/Banner';
import SelectLocation from "./FitnessComponent/SelectLocaltion";
import ParentHeader from "./FitnessComponent/ParentHeader";
import Footer from "./FitnessComponent/Footer";

const Fitness = () => {
    const [formData, setFormData] = useState({
        agreed: false,
    });

    const [participantFormData, setParticipantFormData] = useState({
        name: "",
        age: "",
        gender: "Male",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        tshirtSize: "XS",
    });

    const [parentFormData, setParentFormData] = useState({
        name: "",
        email: "",
        relationship: "Father",
        phoneNumber: "",
    });

    const [locationFormData, setLocationFormData] = useState({
        batch: "First Batch: April 1st - April 18th",
        location: "Santhome HSS",
        timing: "",
    });

    const [medicalFormData, setMedicalFormData] = useState({
        hasMedicalCondition: false,
        medicalDetails: "",
    });

    const [participantErrors, setParticipantErrors] = useState({
        name: "",
        dateOfBirth: "",
        age: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
    });

    const [parentErrors, setParentErrors] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        relationship: "",
    });

    const [locationErrors, setLocationErrors] = useState({
        timing: "",
        batch: "",
    });

    const [medicalErrors, setMedicalErrors] = useState({
        medicalDetails: "",
    });

    const [formErrors, setFormErrors] = useState([]); // To store all missing fields for display

    const participantFormRef = useRef(null);
    const parentFormRef = useRef(null);
    const locationFormRef = useRef(null);
    const medicalFormRef = useRef(null);

    const validateParticipantForm = () => {
        const errors = {};
        const missingFields = [];
        let hasErrors = false;

        if (!participantFormData.name) {
            errors.name = "Enter a valid name (only alphabets allowed)";
            missingFields.push("Participant Name");
            hasErrors = true;
        } else if (!/^[a-zA-Z\s]+$/.test(participantFormData.name)) {
            errors.name = "Enter a valid name (only alphabets allowed)";
            hasErrors = true;
        }

        if (!participantFormData.dateOfBirth) {
            errors.dateOfBirth = "This field cannot be empty";
            missingFields.push("Participant Date of Birth");
            hasErrors = true;
        }

        if (!participantFormData.age) {
            errors.age = "Please select an option";
            missingFields.push("Participant Age");
            hasErrors = true;
        }

        if (!participantFormData.address) {
            errors.address = "This field cannot be empty";
            missingFields.push("Participant Address");
            hasErrors = true;
        }

        if (!participantFormData.city) {
            errors.city = "This field cannot be empty";
            missingFields.push("Participant City");
            hasErrors = true;
        }

        if (!participantFormData.state) {
            errors.state = "This field cannot be empty";
            missingFields.push("Participant State");
            hasErrors = true;
        }

        if (!participantFormData.zipCode) {
            errors.zipCode = "Enter a valid zip code (only numbers allowed)";
            missingFields.push("Participant Zip Code");
            hasErrors = true;
        } else if (!/^\d+$/.test(participantFormData.zipCode)) {
            errors.zipCode = "Enter a valid zip code (only numbers allowed)";
            hasErrors = true;
        }

        setParticipantErrors(errors);
        return { isValid: !hasErrors, missingFields };
    };

    const validateParentForm = () => {
        const errors = {};
        const missingFields = [];
        let hasErrors = false;

        if (!parentFormData.name) {
            errors.name = "This field cannot be empty";
            missingFields.push("Parent Name");
            hasErrors = true;
        } else if (!/^[a-zA-Z\s]+$/.test(parentFormData.name)) {
            errors.name = "Enter a valid name (only alphabets allowed)";
            hasErrors = true;
        }

        if (!parentFormData.relationship || parentFormData.relationship === "") {
            errors.relationship = "Please select a relationship";
            missingFields.push("Parent Relationship");
            hasErrors = true;
        }

        if (!parentFormData.email) {
            errors.email = "This field cannot be empty";
            missingFields.push("Parent Email");
            hasErrors = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentFormData.email)) {
            errors.email = "Enter a valid email address";
            hasErrors = true;
        }

        if (!parentFormData.phoneNumber) {
            errors.phoneNumber = "This field cannot be empty";
            missingFields.push("Parent Mobile");
            hasErrors = true;
        } else if (!/^\d{10}$/.test(parentFormData.phoneNumber)) {
            errors.phoneNumber = "Enter a valid phone number (format: 9876543210)";
            hasErrors = true;
        }

        setParentErrors(errors);
        return { isValid: !hasErrors, missingFields };
    };

    const validateLocationForm = () => {
        const errors = {};
        const missingFields = [];
        let hasErrors = false;

        if (!locationFormData.batch) {
            errors.batch = "Please select a batch";
            missingFields.push("Preferred Batch");
            hasErrors = true;
        }

        if (!locationFormData.timing) {
            errors.timing = "Please select a timing";
            missingFields.push("Preferred Location & Timings");
            hasErrors = true;
        }

        setLocationErrors(errors);
        return { isValid: !hasErrors, missingFields };
    };

    const validateMedicalForm = () => {
        const errors = {};
        const missingFields = [];
        let hasErrors = false;

        if (medicalFormData.hasMedicalCondition && !medicalFormData.medicalDetails) {
            errors.medicalDetails = "Please provide details of the medical condition";
            missingFields.push("Participant Medical Condition");
            hasErrors = true;
        }

        setMedicalErrors(errors);
        return { isValid: !hasErrors, missingFields };
    };

    const handleParticipantFormDataChange = useCallback((data) => {
        setParticipantFormData(data);
    }, []);

    const handleParentFormDataChange = useCallback((data) => {
        setParentFormData(data);
    }, []);

    const handleLocationFormDataChange = useCallback((data) => {
        setLocationFormData(data);
    }, []);

    const handleMedicalFormDataChange = useCallback((data) => {
        setMedicalFormData(data);
    }, []);

    const handleCheckboxChange = () => {
        setFormData((prev) => ({
            ...prev,
            agreed: !prev.agreed,
        }));
        setFormErrors([]); // Clear errors when checkbox state changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormErrors([]); // Clear previous errors

        if (!formData.agreed) {
            setFormErrors(["Terms & Conditions"]);
            return;
        }

        const participantValidation = validateParticipantForm();
        const parentValidation = validateParentForm();
        const locationValidation = validateLocationForm();
        const medicalValidation = validateMedicalForm();

        const allMissingFields = [
            ...participantValidation.missingFields,
            ...parentValidation.missingFields,
            ...locationValidation.missingFields,
            ...medicalValidation.missingFields,
        ];

        if (allMissingFields.length > 0) {
            setFormErrors(allMissingFields);
            return;
        }

        const allData = {
            participantDetails: participantFormData,
            parentDetails: parentFormData,
            locationDetails: locationFormData,
            medicalInfo: medicalFormData,
            declaration: formData,
        };
        console.log("Fitness All Form Data:", allData);
    };

    return (
        <div className="">
            <Banner />

            <ParentHeader />

            <div ref={participantFormRef}>
                <ParticipantForm
                    onFormDataChange={handleParticipantFormDataChange}
                    errors={participantErrors}
                />
            </div>

            <div ref={parentFormRef}>
                <ParentDetails
                    onFormDataChange={handleParentFormDataChange}
                    errors={parentErrors}
                />
            </div>

            <div ref={locationFormRef}>
                <SelectLocation
                    onFormDataChange={handleLocationFormDataChange}
                    errors={locationErrors}
                />
            </div>

            <div ref={medicalFormRef}>
                <MedicalInfo
                    onFormDataChange={handleMedicalFormDataChange}
                    errors={medicalErrors}
                />
            </div>

            <div className="bg-[#161616] py-8 md:pt-24">
                <div className="max-w-[1099px] w-[76%] mx-auto md:h-[712px]">
                    <h2 className="text-[#B6E82A] heebo_500_45_32 uppercase text-center">
                        Declaration Form
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-20">
                        <ul className="list-disc pl-5 space-y-2 sm:space-y-5 text-white heebo_400_20_40">
                            <li>My child is physically fit and capable of participating in all activities at the FitGen Summer Camp 2025.</li>
                            <li>I understand and acknowledge the inherent risks involved in physical activities and sports.</li>
                            <li>
                                I authorise the FitGen Sports Academy and its staff to provide first aid and, if necessary, seek medical attention in case of an emergency.
                            </li>
                            <li>
                                I will not hold FitGen Sports Academy, its coaches, or organisers responsible for any injuries or accidents that may occur during the camp.
                            </li>
                            <li>
                                I authorise the use of my child’s photographs and videos taken during the camp for promotional and marketing purposes.
                            </li>
                        </ul>
                        <div className="flex items-start md:items-center gap-2 mt-4 sm:mt-10">
                            <label className="relative flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={formData.agreed}
                                    onChange={handleCheckboxChange}
                                    className="opacity-0 absolute w-[18px] h-[18px] declaration"
                                />
                                <span className="w-[18px] h-[18px] border border-[#B6E82A] bg-[#161616] flex items-center justify-center">
                                    {formData.agreed && (
                                        <svg
                                            className="w-[18px] h-[18px] bg-[#B6E82A] text-[#4E008E]"
                                            fill="full"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </label>
                            <span className="text-white heebo_500_20_29">
                                I have read and understood the above terms and hereby agree to abide by them.
                            </span>
                        </div>
                        {formErrors.length > 0 && (
                            <p className="text-red-500 text-md mt-2">
                                {formData.agreed ? <span className="font-bold">Missing fields: </span> : "You must accept the terms and conditions"}
                                {formData.agreed && formErrors.join(", ")}
                            </p>
                        )}
                        <div className="w-full flex justify-start mt-8 sm:mt-10 md:mt-20">
                            <button
                                type="submit"
                                className="h-[47.19px] w-[205.69px] bg-[#B6E82A] text-[#4E008E] heebo_400_16_11 uppercase"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Fitness;