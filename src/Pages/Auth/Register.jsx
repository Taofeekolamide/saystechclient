import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaEye, FaEyeSlash, FaLock, } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";

export default function Register() {

    const { loading, signupForm, handleSignup, setSignupForm } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);


    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setSignupForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
            {/* LEFT */}
            <div className="flex items-center justify-center p-8">
                <div className="w-full max-w-lg">
                    <div className="flex justify-center">
                        <img
                            src={logo}
                            alt="Saystech"
                            className="w-48"
                        />
                    </div>

                    <div className="mt-8 text-center">
                        <h1 className="text-4xl font-bold text-slate-900">
                            Create Account
                        </h1>

                        <p className="mt-3 text-slate-500">
                            Start your journey with Saystech Computer Hub.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSignup}
                        className="mt-8 space-y-5"
                    >
                        {/* First & Last Name */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    First Name
                                </label>

                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                    <input
                                        type="text"
                                        name="firstName"
                                        value={signupForm.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="First Name"
                                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-slate-700">
                                    Last Name
                                </label>

                                <div className="relative">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                    <input
                                        type="text"
                                        name="lastName"
                                        value={signupForm.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="Last Name"
                                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-sm font-semibold">
                                Email Address
                            </label>

                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                <input
                                    type="email"
                                    name="email"
                                    value={signupForm.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email Address"
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100 outline-none"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-2 text-sm font-semibold">
                                Phone Number
                            </label>

                            <div className="relative">
                                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={signupForm.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100 outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-2 text-sm font-semibold">
                                Password
                            </label>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={signupForm.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="Password"
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100 outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block mb-2 text-sm font-semibold">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                <input
                                    type={showConfirm ? "text" : "password"}
                                    name="confirmPassword"
                                    value={signupForm.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    placeholder="Confirm Password"
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100 outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                                >
                                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex items-start gap-3 text-sm text-slate-600 cursor-pointer">
                            <input type="checkbox" name="agree" checked={signupForm.agree} onChange={handleChange} className="mt-1 accent-[#0D47D9]" />

                            <span>I agree to the{" "}<span className="font-semibold text-[#0D47D9]">Terms & Conditions</span>{" "}and{" "}<span className="font-semibold text-[#0D47D9]">
                                Privacy Policy
                            </span>.
                            </span>
                        </label>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#0D47D9] py-3 text-white font-semibold transition hover:bg-blue-800 disabled:opacity-50"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>

                        <p className="text-center text-slate-500">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="font-semibold text-[#0D47D9]"
                            >
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#0D47D9] via-[#1E63F2] to-[#21B4F8] p-16">
                <div className="max-w-xl text-white w-full">
                    <h1 className="text-6xl font-bold leading-tight">
                        Build Your
                        <br />
                        Future
                        <br />
                        Today.
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-blue-100">
                        Enroll in practical technology courses taught by experienced
                        instructors. Learn web development, cybersecurity, networking,
                        graphics design, data analysis, and many more career-focused
                        skills.
                    </p>

                    <div className="mt-10 rounded-2xl bg-white/15 backdrop-blur p-4">
                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <h2 className="text-3xl font-bold">20+</h2>
                                <p className="text-blue-100 text-sm">Courses</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">500+</h2>
                                <p className="text-blue-100 text-sm">Students</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">95%</h2>
                                <p className="text-blue-100 text-sm">Completion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}