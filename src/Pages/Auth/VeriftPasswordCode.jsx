import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const VerifyPasswordCode = () => {

    const [code, setCode] = useState("");

    const email = JSON.parse(localStorage.getItem("passwordResetEmail"))

    const { handleVerifyPasswordToken, loading } = useContext(AuthContext)


    return (
        <div className="min-h-screen bg-gray-50 flex">

            {/* Left */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0D47D9] to-[#27B6F8] items-center justify-center p-12">

                <div className="max-w-md text-white">

                    <h1 className="text-5xl font-bold">
                        Verify Reset Code
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        We've sent a secure 6-digit password reset code to your
                        email address. Enter it to continue.
                    </p>

                    <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">

                        <h3 className="font-semibold text-xl">
                            Password Recovery
                        </h3>

                        <p className="mt-3 text-blue-100">
                            Your code expires in 60 minutes for your security.
                        </p>

                    </div>

                </div>

            </div>

            {/* Right */}
            <div className="flex-1 flex items-center justify-center px-6 py-12">

                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

                    <Link
                        to="/forgot-password"
                        className="inline-flex items-center gap-2 text-[#0D47D9] hover:text-[#27B6F8]"
                    >
                        <FaArrowLeft />
                        Back
                    </Link>

                    <div className="mt-8 flex justify-center">

                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] flex items-center justify-center">

                            <FaShieldAlt className="text-white text-3xl" />

                        </div>

                    </div>

                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-800">
                        Verify Code
                    </h2>

                    <p className="mt-3 text-center text-gray-500">
                        Enter the 6-digit code sent to
                    </p>

                    <p className="mt-1 text-center font-semibold text-[#0D47D9] break-all">
                        {email}
                    </p>

                    <form onSubmit={(e) => handleVerifyPasswordToken(e, code)} className="mt-8">

                        <input
                            type="text"
                            maxLength={6}
                            value={code}
                            onChange={(e) =>
                                setCode(
                                    e.target.value.replace(/\D/g, "")
                                )
                            }
                            placeholder="000000"
                            className="w-full rounded-xl border border-gray-300 py-4 text-center text-3xl font-bold tracking-[14px] focus:border-[#27B6F8] focus:ring-2 focus:ring-[#27B6F8] outline-none"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] py-4 text-white font-semibold hover:shadow-xl transition disabled:opacity-60"
                        >
                            {loading ? "Verifying..." : "Verify Code"}
                        </button>

                    </form>

                    <div className="mt-8 text-center">

                        <p className="text-gray-500">
                            Didn't receive the code?
                        </p>

                        <button
                            className="mt-2 font-semibold text-[#0D47D9] hover:text-[#27B6F8]"
                        >
                            Resend Code
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default VerifyPasswordCode;