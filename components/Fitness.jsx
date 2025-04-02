"use client";
import React, { useState, useCallback, useRef } from "react";
import ParticipantForm from './FitnessComponent/ParticipantForm';
import ParentDetails from './FitnessComponent/ParentDetails';
import MedicalInfo from './FitnessComponent/MedicalInfo';
import Banner from './FitnessComponent/Banner';
import ParentHeader from "./FitnessComponent/ParentHeader";
import Footer from "./FitnessComponent/Footer";
import SelectLocation from "./FitnessComponent/SelectLocation";

const Fitness = () => {
    const [formData, setFormData] = useState({ agreed: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [resetForm, setResetForm] = useState(false);

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

    const [participantErrors, setParticipantErrors] = useState({});
    const [parentErrors, setParentErrors] = useState({});
    const [locationErrors, setLocationErrors] = useState({});
    const [medicalErrors, setMedicalErrors] = useState({});
    const [formErrors, setFormErrors] = useState([]);

    const participantFormRef = useRef(null);
    const parentFormRef = useRef(null);
    const locationFormRef = useRef(null);
    const medicalFormRef = useRef(null);

    // Validation Functions with detailed error messages
    const validateParticipantForm = () => {
        const errors = {};
        const detailedErrors = [];

        if (!participantFormData.name) {
            errors.name = "Name is required";
            detailedErrors.push("Enter the participant's name");
        } else if (!/^[a-zA-Z\s]+$/.test(participantFormData.name)) {
            errors.name = "Only alphabets and spaces allowed";
            detailedErrors.push("Correct the participant's name to use only alphabets and spaces");
        }

        if (!participantFormData.dateOfBirth) {
            errors.dateOfBirth = "Date of Birth is required";
            detailedErrors.push("Enter the participant's date of birth");
        } else {
            const dob = new Date(participantFormData.dateOfBirth);
            if (isNaN(dob.getTime())) {
                errors.dateOfBirth = "Invalid date";
                detailedErrors.push("Correct the participant's date of birth to a valid date");
            }
        }

        if (!participantFormData.age) {
            errors.age = "Age is required";
            detailedErrors.push("Select the participant's age");
        } else if (!/^\d+$/.test(participantFormData.age) || parseInt(participantFormData.age) < 10 || parseInt(participantFormData.age) > 20) {
            errors.age = "Age must be between 10 and 20";
            detailedErrors.push("Correct the participant's age to be between 10 and 20");
        }

        if (!participantFormData.address) {
            errors.address = "Address is required";
            detailedErrors.push("Enter the participant's address");
        }

        if (!participantFormData.city) {
            errors.city = "City is required";
            detailedErrors.push("Enter the participant's city");
        } else if (!/^[a-zA-Z\s]+$/.test(participantFormData.city)) {
            errors.city = "Only alphabets and spaces allowed";
            detailedErrors.push("Correct the participant's city to use only alphabets and spaces");
        }

        if (!participantFormData.state) {
            errors.state = "State is required";
            detailedErrors.push("Enter the participant's state");
        } else if (!/^[a-zA-Z\s]+$/.test(participantFormData.state)) {
            errors.state = "Only alphabets and spaces allowed";
            detailedErrors.push("Correct the participant's state to use only alphabets and spaces");
        }

        if (!participantFormData.zipCode) {
            errors.zipCode = "Zip Code is required";
            detailedErrors.push("Enter the participant's zip code");
        } else if (!/^\d{6}$/.test(participantFormData.zipCode)) {
            errors.zipCode = "Must be exactly 6 digits";
            detailedErrors.push("Correct the participant's zip code to exactly 6 digits");
        }

        return { errors, detailedErrors };
    };

    const validateParentForm = () => {
        const errors = {};
        const detailedErrors = [];

        if (!parentFormData.name) {
            errors.name = "Name is required";
            detailedErrors.push("Enter the parent's name");
        } else if (!/^[a-zA-Z\s]+$/.test(parentFormData.name)) {
            errors.name = "Only alphabets and spaces allowed";
            detailedErrors.push("Correct the parent's name to use only alphabets and spaces");
        }

        if (!parentFormData.email) {
            errors.email = "Email is required";
            detailedErrors.push("Enter the parent's email");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parentFormData.email)) {
            errors.email = "Invalid email format";
            detailedErrors.push("Correct the parent's email to a valid format");
        }

        if (!parentFormData.phoneNumber) {
            errors.phoneNumber = "Phone Number is required";
            detailedErrors.push("Enter the parent's phone number");
        } else if (!/^\d{10}$/.test(parentFormData.phoneNumber)) {
            errors.phoneNumber = "Must be exactly 10 digits";
            detailedErrors.push("Correct the parent's phone number to exactly 10 digits");
        }

        if (!parentFormData.relationship) {
            errors.relationship = "Relationship is required";
            detailedErrors.push("Select the parent's relationship");
        } else if (!["Father", "Mother", "Guardian"].includes(parentFormData.relationship)) {
            errors.relationship = "Invalid relationship selected";
            detailedErrors.push("Correct the parent's relationship to Father, Mother, or Guardian");
        }

        return { errors, detailedErrors };
    };

    const validateLocationForm = () => {
        const errors = {};
        const detailedErrors = [];

        if (!locationFormData.timing) {
            errors.timing = "Timing is required";
            detailedErrors.push("Select a preferred timing for the location");
        }

        return { errors, detailedErrors };
    };

    const validateMedicalForm = () => {
        const errors = {};
        const detailedErrors = [];

        if (medicalFormData.hasMedicalCondition && !medicalFormData.medicalDetails) {
            errors.medicalDetails = "Details are required";
            detailedErrors.push("Enter medical details since a condition is indicated");
        } else if (medicalFormData.hasMedicalCondition && medicalFormData.medicalDetails.length < 10) {
            errors.medicalDetails = "Must be at least 10 characters";
            detailedErrors.push("Correct the medical details to at least 10 characters");
        }

        return { errors, detailedErrors };
    };

    const handleParticipantFormDataChange = useCallback((data) => {
        setParticipantFormData(data);
        if (hasSubmitted) {
            const { errors } = validateParticipantForm();
            setParticipantErrors(errors);
        }
    }, [hasSubmitted]);

    const handleParentFormDataChange = useCallback((data) => {
        setParentFormData(data);
        if (hasSubmitted) {
            const { errors } = validateParentForm();
            setParentErrors(errors);
        }
    }, [hasSubmitted]);

    const handleLocationFormDataChange = useCallback((data) => {
        setLocationFormData(data);
        if (hasSubmitted) {
            const { errors } = validateLocationForm();
            setLocationErrors(errors);
        }
    }, [hasSubmitted]);

    const handleMedicalFormDataChange = useCallback((data) => {
        setMedicalFormData(data);
        if (hasSubmitted) {
            const { errors } = validateMedicalForm();
            setMedicalErrors(errors);
        }
    }, [hasSubmitted]);

    const handleCheckboxChange = () => {
        setFormData((prev) => ({ ...prev, agreed: !prev.agreed }));
        setFormErrors([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors([]);
        setIsSubmitting(true);
        setHasSubmitted(true);

        if (!formData.agreed) {
            setFormErrors(["You must accept the terms and conditions"]);
            setIsSubmitting(false);
            return;
        }

        const participantValidation = validateParticipantForm();
        const parentValidation = validateParentForm();
        const locationValidation = validateLocationForm();
        const medicalValidation = validateMedicalForm();

        setParticipantErrors(participantValidation.errors);
        setParentErrors(parentValidation.errors);
        setLocationErrors(locationValidation.errors);
        setMedicalErrors(medicalValidation.errors);

        const allDetailedErrors = [
            ...participantValidation.detailedErrors,
            ...parentValidation.detailedErrors,
            ...locationValidation.detailedErrors,
            ...medicalValidation.detailedErrors,
        ];

        if (allDetailedErrors.length > 0) {
            setFormErrors(allDetailedErrors);
            setIsSubmitting(false);
            return;
        }

        const allData = {
            participantDetails: participantFormData,
            parentDetails: parentFormData,
            locationDetails: locationFormData,
            medicalInfo: medicalFormData,
            declaration: formData,
        };

        setTimeout(() => {
            console.log("Fitness All Form Data:", JSON.stringify(allData, null, 2));
            
            // Reset all form data to initial states
            setParticipantFormData({
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
            setParentFormData({
                name: "",
                email: "",
                relationship: "Father",
                phoneNumber: "",
            });
            setLocationFormData({
                batch: "First Batch: April 1st - April 18th",
                location: "Santhome HSS",
                timing: "",
            });
            setMedicalFormData({
                hasMedicalCondition: false,
                medicalDetails: "",
            });
            setFormData({ agreed: false });

            // Clear errors and submission states
            setParticipantErrors({});
            setParentErrors({});
            setLocationErrors({});
            setMedicalErrors({});
            setFormErrors([]);
            setHasSubmitted(false);

            // Trigger reset in child components
            setResetForm(true);
            setTimeout(() => setResetForm(false), 100); // Increased delay to ensure reset propagates
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="">
            <Banner />
            <ParentHeader />
            <div ref={participantFormRef}>
                <ParticipantForm onFormDataChange={handleParticipantFormDataChange} errors={hasSubmitted ? participantErrors : {}} resetForm={resetForm} />
            </div>
            <div ref={parentFormRef}>
                <ParentDetails onFormDataChange={handleParentFormDataChange} errors={hasSubmitted ? parentErrors : {}} resetForm={resetForm} />
            </div>
            <div ref={locationFormRef}>
                <SelectLocation onFormDataChange={handleLocationFormDataChange} errors={hasSubmitted ? locationErrors : {}} resetForm={resetForm} />
            </div>
            <div ref={medicalFormRef}>
                <MedicalInfo onFormDataChange={handleMedicalFormDataChange} errors={hasSubmitted ? medicalErrors : {}} resetForm={resetForm} />
            </div>
            <div className="bg-[#161616] py-8 md:pt-24">
                <div className="max-w-[1099px] w-[76%] mx-auto md:h-[712px]">
                    <h2 className="text-[#B6E82A] heebo_500_45_32 uppercase text-center">Declaration Form</h2>
                    <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-20">
                        <ul className="list-disc pl-5 space-y-2 sm:space-y-5 text-white heebo_400_20_40">
                            <li>My child is physically fit and capable of participating in all activities at the FitGen Summer Camp 2025.</li>
                            <li>I understand and acknowledge the inherent risks involved in physical activities and sports.</li>
                            <li>I authorise the FitGen Sports Academy and its staff to provide first aid and, if necessary, seek medical attention in case of an emergency.</li>
                            <li>I will not hold FitGen Sports Academy, its coaches, or organisers responsible for any injuries or accidents that may occur during the camp.</li>
                            <li>I authorise the use of my child’s photographs and videos taken during the camp for promotional and marketing purposes.</li>
                        </ul>
                        <div className="flex items-start md:items- gap-2 mt-4 sm:mt-10">
                            <label className="relative flex items-center cursor-pointer mt-1">
                                <input
                                    type="checkbox"
                                    checked={formData.agreed}
                                    onChange={handleCheckboxChange}
                                    className="opacity-0 absolute w-[18px] h-[18px] declaration"
                                />
                                <span className="w-[18px] h-[18px] border border-[#B6E82A] flex items-center justify-center">
                                    {formData.agreed && (
                                        <svg className="w-[18px] h-[18px] bg-[#B6E82A] text-[#4E008E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </span>
                            </label>
                            <span className="text-white heebo_500_20_29">I have read and understood the above terms and hereby agree to abide by them.</span>
                        </div>
                        {formErrors.length > 0 && (
                            <div className="mt-2">
                                {!formData.agreed ? (
                                    <p className="text-red-500 text-md">
                                        You must accept the terms and conditions
                                    </p>
                                ) : (
                                    <p className="text-red-500 text-md">
                                        <span className="font-bold">Please fix: </span>
                                        {formErrors.join(", ")}
                                    </p>
                                )}
                            </div>
                        )}
                        <div className="w-full flex justify-start mt-8 sm:mt-10 md:mt-20">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`h-[47.19px] w-[205.69px] bg-[#B6E82A] text-[#4E008E] heebo_400_16_11 uppercase flex items-center justify-center ${isSubmitting ? "opacity-75" : ""}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin h-5 w-5 mr-2 text-[#4E008E]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h-8z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Submit"
                                )}
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