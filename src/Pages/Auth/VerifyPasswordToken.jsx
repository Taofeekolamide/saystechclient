import { useState } from "react";
import { Link} from "react-router-dom";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const VerifyResetCode = () => {

    const { loading, handleVerifyPasswordToken } = useContext(AuthContext)

    const [code, setCode] = useState("");

    const email = JSON.parse(localStorage.getItem("passwordResetEmail"));



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <Link
                    to="/forgot-password"
                    className="inline-flex items-center gap-2 text-[#0D47D9] mb-8 hover:text-[#27B6F8]"
                >
                    <FaArrowLeft />
                    Back
                </Link>

                <div className="flex justify-center mb-6">

                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] flex items-center justify-center">

                        <FaLock className="text-white text-3xl" />

                    </div>

                </div>

                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Verify Reset Code
                </h2>

                <p className="text-center text-gray-500 mt-3">
                    Enter the 6-digit code sent to
                </p>

                <p className="text-center font-semibold text-[#0D47D9] mb-8">
                    {email}
                </p>

                <form onSubmit={(e) => handleVerifyPasswordToken(e, code)}>

                    <input type="text" maxLength={6} value={code}
                        onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                        placeholder="000000"
                        className="w-full text-center tracking-[12px] text-3xl font-bold py-4 rounded-xl border border-gray-300 focus:border-[#27B6F8] focus:ring-2 focus:ring-[#27B6F8] outline-none"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-8 w-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] text-white py-4 rounded-xl font-semibold hover:shadow-xl transition disabled:opacity-60"
                    >
                        {loading ? "Verifying..." : "Verify Code"}
                    </button>

                </form>

                <p className="mt-6 text-center text-gray-500">

                    Didn't receive the code?{" "}

                    <button
                        type="button"
                        className="font-semibold text-[#0D47D9] hover:text-[#27B6F8]"
                    >
                        Resend Code
                    </button>

                </p>

            </div>

        </div>
    );
};

export default VerifyResetCode;