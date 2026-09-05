import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const ResetPassword = () => {

    const { loading, handleResetPassword, resetForm, setResetForm } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);




    return (
        <div className="min-h-screen flex bg-gray-50">

            {/* Left Side */}

            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0D47D9] to-[#27B6F8] items-center justify-center p-12">

                <div className="max-w-md text-white">

                    <h1 className="text-5xl font-bold">
                        Create New Password
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        You're almost done. Choose a strong password to secure
                        your Saystech Computer Hub account.
                    </p>

                    <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">

                        <h3 className="text-xl font-semibold">
                            Password Tips
                        </h3>

                        <ul className="mt-4 space-y-2 text-blue-100">
                            <li>• At least 8 characters</li>
                            <li>• Use uppercase & lowercase letters</li>
                            <li>• Include numbers</li>
                            <li>• Add special characters</li>
                        </ul>

                    </div>

                </div>

            </div>

            {/* Right Side */}

            <div className="flex-1 flex items-center justify-center px-6 py-12">

                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

                    <Link
                        to="/verify-reset-code"
                        className="inline-flex items-center gap-2 text-[#0D47D9] hover:text-[#27B6F8]"
                    >
                        <FaArrowLeft />
                        Back
                    </Link>

                    <div className="mt-8 flex justify-center">

                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] flex items-center justify-center">

                            <FaLock className="text-white text-3xl" />

                        </div>

                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-center text-gray-800">
                        Reset Password
                    </h2>

                    <p className="mt-3 text-center text-gray-500">
                        Enter your new password below.
                    </p>

                    <form onSubmit={(e) => handleResetPassword(e, resetForm)} className="mt-8 space-y-6">

                        {/* Password */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>

                            <div className="relative">

                                <input type={showPassword ? "text" : "password"} value={resetForm.newPassword} onChange={(e) => setResetForm({ ...resetForm, newPassword: e.target.value })}
                                    placeholder="Enter new password"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 pr-12 focus:ring-2 focus:ring-[#27B6F8] focus:border-transparent outline-none"
                                />

                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
                                    {showPassword ?
                                        (
                                            <FaEyeSlash />
                                        )
                                        :
                                        (
                                            <FaEye />
                                        )
                                    }
                                </button>

                            </div>

                        </div>

                        {/* Confirm Password */}

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm Password
                            </label>

                            <div className="relative">

                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={resetForm.confirmPassword}
                                    onChange={(e) => setResetForm({ ...resetForm, confirmPassword: e.target.value })}
                                    placeholder="Confirm password"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-4 pr-12 focus:ring-2 focus:ring-[#27B6F8] focus:border-transparent outline-none"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>

                            </div>

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-60"
                        >
                            {loading ? "Updating Password..." : "Reset Password"}
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default ResetPassword;