import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const { handleForgotPassword, loading } = useContext(AuthContext)

    return (
        <div className="min-h-screen flex bg-gray-50">

            {/* Left Side */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0D47D9] to-[#27B6F8] items-center justify-center p-12">

                <div className="max-w-md text-white">

                    <h1 className="text-5xl font-bold">
                        Forgot Your Password?
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        Don't worry. Enter the email address associated with your
                        account and we'll send you instructions to reset your password.
                    </p>

                    <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

                        <h3 className="font-semibold text-xl">
                            Saystech Computer Hub
                        </h3>

                        <p className="mt-3 text-blue-100">
                            Secure, fast, and easy account recovery so you can get
                            back to learning.
                        </p>

                    </div>

                </div>

            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">

                <div className="w-full max-w-md">

                    <Link to="/login"
                        className="inline-flex items-center gap-2 text-[#0D47D9] hover:text-[#27B6F8] mb-8"
                    >
                        <FaArrowLeft />
                        Back to Login
                    </Link>

                    <h2 className="text-4xl font-bold text-gray-800">
                        Reset Password
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Enter your registered email address and we'll send you a
                        password reset link.
                    </p>

                    <form onSubmit={(e) => handleForgotPassword(e, email)} className="mt-10 space-y-6">

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>

                            <div className="relative">

                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                    placeholder="Enter your email"
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#27B6F8] focus:border-transparent outline-none"
                                />

                            </div>

                        </div>

                        <button type="submit" disabled={loading}
                            className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-60"
                        >
                            {loading ?
                                (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                )
                                :
                                (
                                    <>
                                        <FaPaperPlane />
                                        Send Reset Code
                                    </>
                                )
                            }
                        </button>

                    </form>

                    <p className="mt-8 text-center text-gray-600">

                        Remember your password?{" "}

                        <Link to="/login" className="font-semibold text-[#0D47D9] hover:text-[#27B6F8]">
                            Sign In
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
};

export default ForgotPassword;