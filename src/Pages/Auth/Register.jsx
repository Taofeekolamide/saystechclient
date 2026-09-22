import registerBg from "../../assets/reg.jpg";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaArrowRight, } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

export default function Register() {
    const { loading, signupForm, handleSignup, setSignupForm, } = useContext(AuthContext);

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

        <div className="lg:min-h-screen bg-white flex">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-[60%] flex items-center justify-center px-6 py-10 sm:px-10">

                <div className="w-full max-w-[440px]"> {/* Logo */}

                    {/* Heading */}
                    <div className="mt-10">
                        <p className="text-sm font-semibold text-[#0D47D9] mb-3"> STUDENT REGISTRATION
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"> Create your account
                        </h1>
                        <p className="mt-3 text-slate-500 leading-7"> Create your student account and start learning practical technology skills with Saystech.
                        </p>
                    </div> {/* Form */}
                    <form onSubmit={handleSignup} className="mt-8 space-y-5" > {/* Email */}
                        <div>
                            <label className=" block text-sm font-medium text-slate-700 mb-2 "> Email address
                            </label>
                            <div className="relative">
                                <FaEnvelope className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm " />
                                <input type="email" name="email" value={signupForm.email} onChange={handleChange} placeholder="you@example.com" required autoComplete="email" className=" w-full h-12 rounded-lg border border-slate-300 bg-slate-50 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0D47D9] focus:ring-2 focus:ring-blue-100 " />
                            </div>
                        </div> {/* Password */}
                        <div>
                            <label className=" block text-sm font-medium text-slate-700 mb-2 "> Password
                            </label>
                            <div className="relative">
                                <FaLock className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm " />
                                <input type={showPassword ? "text" : "password"} name="password" value={signupForm.password} onChange={handleChange} placeholder="Create a password" required autoComplete="new-password" className=" w-full h-12 rounded-lg border border-slate-300 bg-slate-50 pl-11 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0D47D9] focus:ring-2 focus:ring-blue-100 " />
                                <button type="button" onClick={() => setShowPassword((prev) => !prev)} className=" absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition " aria-label={showPassword ? "Hide password" : "Show password"} > {showPassword ? (
                                    <FaEyeSlash />) : (
                                    <FaEye />)}
                                </button>
                            </div>
                        </div> {/* Confirm Password */}
                        <div>
                            <label className=" block text-sm font-medium text-slate-700 mb-2 "> Confirm password
                            </label>
                            <div className="relative">
                                <FaLock className=" absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm " />
                                <input type={showConfirm ? "text" : "password"} name="confirmPassword" value={signupForm.confirmPassword} onChange={handleChange} placeholder="Repeat your password" required autoComplete="new-password" className=" w-full h-12 rounded-lg border border-slate-300 bg-slate-50 pl-11 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#0D47D9] focus:ring-2 focus:ring-blue-100 " />
                                <button type="button" onClick={() => setShowConfirm((prev) => !prev)} className=" absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition " aria-label={showConfirm ? "Hide password" : "Show password"} > {showConfirm ? (
                                    <FaEyeSlash />) : (
                                    <FaEye />)}
                                </button>
                            </div>
                        </div> {/* Terms */}
                        <label className=" flex items-start gap-3 cursor-pointer select-none pt-1 ">
                            <input type="checkbox" name="agree" checked={signupForm.agree} onChange={handleChange} required className=" mt-1 h-4 w-4 rounded accent-[#0D47D9] shrink-0 " />
                            <span className=" text-sm leading-6 text-slate-500 "> I agree to the{" "}
                                <Link to="/terms" className=" font-medium text-[#0D47D9] hover:underline " > Terms & Conditions
                                </Link>{" "} and{" "}
                                <Link to="/privacy" className=" font-medium text-[#0D47D9] hover:underline " > Privacy Policy
                                </Link> .
                            </span>
                        </label> {/* Submit */}
                        <button type="submit" disabled={loading} className=" group w-full h-12 rounded-lg bg-[#0D47D9] text-white font-semibold flex items-center justify-center gap-3 transition hover:bg-[#0b3dbb] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed " > {loading ? ("Creating account...") : (
                            <> Create account
                                <FaArrowRight className=" text-sm transition-transform group-hover:translate-x-1 " />
                            </>)}
                        </button> {/* Login */}
                        <p className=" text-center text-sm text-slate-500 pt-1 "> Already have an account?{" "}
                            <Link to="/login" className=" font-semibold text-[#0D47D9] hover:underline " > Sign in
                            </Link>
                        </p>
                    </form> {/* Footer */}
                    <p className=" text-center text-xs text-slate-400 mt-10 "> © {new Date().getFullYear()} Saystech Computer Hub
                    </p>
                </div>
            </div>


            {/* RIGHT SIDE */}

            <div
                className="
        hidden lg:flex lg:w-[40%]
        relative overflow-hidden
        bg-[#00000] bg-cover bg-center
    "
                style={{ backgroundImage: `url(${registerBg})`, }}            >
                {/* Dark blue overlay */}

                <div className="absolute inset-0 bg-[#000000]/75" />

                {/* Subtle gradient for text readability */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/20 via-[#000000]/20 to-[#000000]/20" />

                {/* Decorative circles */}

                <div
                    className="
            absolute -top-40 -right-40
            w-[600px] h-[600px]
            rounded-full border border-white/10
        "
                />


                <div
                    className="
            absolute -bottom-52 -left-52
            w-[650px] h-[650px]
            rounded-full border border-white/10
        "
                />

                {/* Content */}

                <div
                    className="
            relative z-10 flex flex-col justify-between
            w-full p-14 xl:p-20
        "
                >

                    <div className="max-w-lg">

                        <div className="w-12 h-1 bg-white rounded-full mb-8" />


                        <p
                            className="
                    text-sm font-semibold tracking-[0.2em]
                    text-blue-200 uppercase
                "
                        >
                            Your learning starts here

                        </p>


                        <h2
                            className="
                    mt-5 text-4xl xl:text-5xl font-bold
                    leading-[1.15] text-white
                "
                        >
                            Learn skills.

                            <br />
                            Build projects.

                            <br />
                            Grow your career.

                        </h2>


                        <p className="mt-7 text-blue-100 leading-8 max-w-md">
                            Get access to practical technology courses and
                            learn at your own pace with Saystech Computer Hub.

                        </p>

                    </div>


                    <div className="border-t border-white/20 pt-7 max-w-lg">

                        <p className="text-sm text-blue-200 mb-5">
                            Your student account gives you access to

                        </p>


                        <div className="space-y-4">

                            <div className="flex items-center gap-4">

                                <div
                                    className="
                            flex h-8 w-8 items-center justify-center
                            rounded-full bg-white/10
                        "
                                >

                                    <span className="h-2 w-2 rounded-full bg-white" />

                                </div>


                                <p className="text-sm text-white">
                                    Browse available courses

                                </p>

                            </div>


                            <div className="flex items-center gap-4">

                                <div
                                    className="
                            flex h-8 w-8 items-center justify-center
                            rounded-full bg-white/10
                        "
                                >

                                    <span className="h-2 w-2 rounded-full bg-white" />

                                </div>


                                <p className="text-sm text-white">
                                    Enroll in courses you want to learn

                                </p>

                            </div>


                            <div className="flex items-center gap-4">

                                <div
                                    className="
                            flex h-8 w-8 items-center justify-center
                            rounded-full bg-white/10
                        "
                                >

                                    <span className="h-2 w-2 rounded-full bg-white" />

                                </div>


                                <p className="text-sm text-white">
                                    Watch your lessons anytime

                                </p>

                            </div>


                            <div className="flex items-center gap-4">

                                <div
                                    className="
                            flex h-8 w-8 items-center justify-center
                            rounded-full bg-white/10
                        "
                                >

                                    <span className="h-2 w-2 rounded-full bg-white" />

                                </div>


                                <p className="text-sm text-white">
                                    Keep your courses in one place

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}
