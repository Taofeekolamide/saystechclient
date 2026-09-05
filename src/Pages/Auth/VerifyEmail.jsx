import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";

export default function VerifyEmail() {
    const [code, setCode] = useState("");

    const { handleVerifyEmail, seconds, setSeconds, loading, resendVerifyCode } = useContext(AuthContext)

    useEffect(() => {
        if (seconds === 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    const email = JSON.parse(localStorage.getItem("pendingVerification"));
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-10">

                <div className="flex justify-center">
                    <img
                        src={logo}
                        alt="Saystech"
                        className="w-36"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                        <FaEnvelopeOpenText className="text-4xl text-[#0D47D9]" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center mt-6">
                    Verify Email
                </h1>

                <p className="text-center text-slate-500 mt-3">
                    We've sent a verification code to
                </p>

                <p className="text-center font-semibold text-[#0D47D9] break-all mt-1">
                    {email}
                </p>

                <form onSubmit={(e) => handleVerifyEmail(e, code)} className="mt-8">
                    <input type="text" maxLength={6} value={code}
                        onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
                        className="w-full text-center tracking-[10px] text-2xl font-bold border rounded-xl py-4 outline-none focus:ring-4 focus:ring-blue-100 focus:border-[#0D47D9]"
                    />

                    <button disabled={loading} className="mt-6 w-full bg-[#0D47D9] hover:bg-blue-700 text-white font-semibold rounded-xl py-3 transition">
                        {loading ? "Verifying..." : "Verify Email"}
                    </button>
                </form>

                <div className="mt-6 text-center">

                    {seconds > 0 ?
                        (
                            <p className="text-slate-500">Resend code in{" "}<span className="font-semibold">{seconds}s</span></p>
                        )
                        :
                        (
                            <button onClick={resendVerifyCode} className="text-[#0D47D9] font-semibold hover:underline">Resend Verification Code</button>
                        )
                    }

                </div>

                <div className="mt-8 text-center">
                    <Link to="/login" className="text-slate-600 hover:text-[#0D47D9]">Back to Login</Link>
                </div>

            </div>

        </div>
    );
}