import React, { useState } from 'react';
import backgroundImage from '../../image/SCE-Full.jpg';
import logoImage from '../../image/loginpagelogo-removebg-preview.png'; 
import refreshIcon from '../../image/reflogo.png'; 
import '../App.css'

const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
};

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        fatherName: "",
        gender: "",
        collegeId: "",
        password: "",
        role: "",
        captchaInput: ""
    });
    
    const [captcha, setCaptcha] = useState(generateCaptcha());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form Submitted", formData);
    };

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden">
            <img
                className="w-full h-full object-cover"
                src={backgroundImage}
                alt="background"
            />

            <div className="absolute inset-0 flex items-center justify-end pr-10 ">
                <form
                    onSubmit={handleSubmit}
                    className="custom-scrollbar bg-white/30 backdrop-blur-xl rounded-lg shadow-lg flex flex-col items-center w-96 max-h-[90vh] p-6 overflow-y-auto"
                >
                    {/* Logo Section */}
                    <div className="w-full mb-4">
                        <img className="mx-auto w-32 h-auto" src={logoImage} alt="logo" />
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col w-full px-3 ">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="username" className="text-gray-700 font-semibold"></label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border rounded bg-white/70 placeholder-gray-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="fatherName" className="text-gray-700 font-semibold"></label>
                            <input
                                type="text"
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border rounded bg-white/70 placeholder-gray-500"
                                placeholder="Father's Name"
                                required
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="gender" className="text-gray-700 font-semibold"></label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border rounded bg-white/70 placeholder-gray-500"
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="collegeId" className="text-gray-700 font-semibold"></label>
                            <input
                                type="text"
                                name="collegeId"
                                value={formData.collegeId}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border rounded bg-white/70 placeholder-gray-500"
                                placeholder="College ID"
                                required
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="password" className="text-gray-700 font-semibold"></label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border rounded bg-white/70 placeholder-gray-500"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="role" className="text-gray-700 font-semibold"></label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-3 py-1 border rounded bg-white/70 placeholder-gray-500"
                                required
                            >
                                <option value="student">Student</option>
                                <option value="faculty">Faculty</option>
                            </select>
                        </div>

                        {/* CAPTCHA Section */}
                        <div className="flex flex-col mb-4">
                            <div className="flex items-center justify-between border rounded bg-white/70 p-1">
                                <img src={refreshIcon} alt="Refresh CAPTCHA" className="cursor-pointer w-6" onClick={refreshCaptcha} />
                                <span className="text-lg font-semibold text-gray-700">{captcha}</span>
                            </div>
                            <input
                                type="text"
                                name="captchaInput"
                                value={formData.captchaInput}
                                onChange={handleChange}
                                className="w-full px-3 py-1 mt-2 border rounded bg-white/70 placeholder-gray-500"
                                placeholder="Enter CAPTCHA"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-1 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Register
                        </button>

                        <div className="mt-4 text-sm text-gray-700 text-center">
                            Already have an account?{" "}
                            <a href="#" className="text-blue-600 hover:underline">Login</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
