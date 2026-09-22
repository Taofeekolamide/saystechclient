import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText, FaArrowRight, FaShieldAlt, } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

export default function VerifyEmail() {
    const [code, setCode] = useState("");

    const { handleVerifyEmail, seconds, setSeconds, loading, resendVerifyCode, } = useContext(AuthContext);

    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds, setSeconds]);

    const pendingVerification = localStorage.getItem("pendingVerification");

    return (
        <div className="lg:min-h-screen bg-white flex">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-[52%] flex items-center justify-center px-6 py-10 sm:px-10">
                <div className="w-full max-w-[440px]">

                    {/* Icon */}
                    <div className="mt-14">
                        <div className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-50
                            text-[#0D47D9]
                        ">
                            <FaEnvelopeOpenText className="text-2xl" />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mt-7">
                        <p className="text-sm font-semibold text-[#0D47D9] mb-3">
                            EMAIL VERIFICATION
                        </p>

                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                            Check your email
                        </h1>

                        <p className="mt-3 text-slate-500 leading-7">
                            We've sent a 6-digit verification code to:
                        </p>

                        <p className="mt-2 font-semibold text-slate-900 break-all">
                            {pendingVerification || "your email address"}
                        </p>
                    </div>

                    {/* Verification Form */}
                    <form onSubmit={(e) =>
                        handleVerifyEmail(e, code)
                    }
                        className="mt-9"
                    >
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Verification code
                        </label>

                        <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={6}
                            value={code}
                            onChange={(e) =>
                                setCode(
                                    e.target.value
                                        .replace(/\D/g, "")
                                        .slice(0, 6)
                                )
                            }
                            placeholder="000000"
                            required
                            className="
                                w-full
                                h-16
                                rounded-lg
                                border
                                border-slate-300
                                bg-slate-50
                                text-center
                                tracking-[0.65em]
                                text-2xl
                                font-bold
                                text-slate-900
                                placeholder:text-slate-300
                                outline-none
                                transition
                                focus:bg-white
                                focus:border-[#0D47D9]
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        />

                        <p className="mt-3 text-xs text-slate-400">
                            Enter the 6-digit code sent to your email.
                        </p>

                        {/* Verify Button */}
                        <button
                            type="submit"
                            disabled={loading || code.length !== 6}
                            className="
                                group
                                mt-7
                                w-full
                                h-12
                                rounded-lg
                                bg-[#0D47D9]
                                text-white
                                font-semibold
                                flex
                                items-center
                                justify-center
                                gap-3
                                transition
                                hover:bg-[#0b3dbb]
                                active:scale-[0.99]
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                        >
                            {loading ? (
                                "Verifying..."
                            ) : (
                                <>
                                    Verify email
                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Resend */}
                    <div className="mt-7 text-center">
                        {seconds > 0 ? (
                            <p className="text-sm text-slate-500">
                                Didn't receive the code?{" "}
                                <span className="font-semibold text-slate-700">
                                    Resend in {seconds}s
                                </span>
                            </p>
                        ) : (
                            <button
                                type="button"
                                onClick={resendVerifyCode}
                                disabled={loading}
                                className="
                                    text-sm
                                    font-semibold
                                    text-[#0D47D9]
                                    hover:underline
                                    disabled:opacity-50
                                "
                            >
                                Didn't receive the code? Resend
                            </button>
                        )}
                    </div>

                    {/* Back */}
                    <div className="mt-8 pt-7 border-t border-slate-100 text-center">
                        <Link
                            to="/login"
                            className="text-sm font-medium text-slate-500 hover:text-[#0D47D9] transition"
                        >
                            Back to login
                        </Link>
                    </div>

                    {/* Security Note */}
                    <div className="
                        mt-8
                        flex
                        items-start
                        gap-3
                        rounded-lg
                        bg-slate-50
                        p-4
                    ">
                        <FaShieldAlt className="mt-0.5 text-slate-400 shrink-0" />

                        <p className="text-xs leading-5 text-slate-500">
                            Never share your verification code with anyone.
                            Saystech will never ask you for this code by phone
                            or message.
                        </p>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-xs text-slate-400 mt-10">
                        © {new Date().getFullYear()} Saystech Computer Hub
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex lg:w-[48%] bg-[#0D47D9] relative overflow-hidden">

                {/* Background shapes */}
                <div className="
                    absolute
                    -top-40
                    -right-40
                    w-[600px]
                    h-[600px]
                    rounded-full
                    border
                    border-white/10
                " />

                <div className="
                    absolute
                    -bottom-52
                    -left-52
                    w-[650px]
                    h-[650px]
                    rounded-full
                    border
                    border-white/10
                " />

                <div className="relative z-10 flex flex-col justify-between w-full p-14 xl:p-20">

                    {/* Main content */}
                    <div className="max-w-lg">

                        <div className="w-12 h-1 bg-white rounded-full mb-8" />

                        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">
                            Almost there
                        </p>

                        <h2 className="
                            mt-5
                            text-4xl
                            xl:text-5xl
                            font-bold
                            leading-[1.15]
                            text-white
                        ">
                            One small step
                            <br />
                            before you
                            <br />
                            start learning.
                        </h2>

                        <p className="mt-7 text-blue-100 leading-8 max-w-md">
                            Verify your email address to secure your account
                            and get access to your Saystech student dashboard.
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className="border-t border-white/20 pt-7 max-w-lg">

                        <div className="flex items-start gap-4">

                            <div className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                            ">
                                <FaShieldAlt className="text-white" />
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-white">
                                    Your account, protected
                                </p>

                                <p className="mt-1 text-sm leading-6 text-blue-200">
                                    Email verification helps keep your
                                    student account secure.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}