import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt, FaArrowRight, } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";

const VerifyPasswordCode = () => {
    const [code, setCode] = useState("");

    const { handleVerifyPasswordToken, loading, } = useContext(AuthContext);

    const storedEmail = localStorage.getItem("passwordResetEmail");

    let email = "";

    try {
        email = storedEmail ? JSON.parse(storedEmail) : "";
    } catch {
        email = storedEmail || "";
    }

    return (
        <div className="lg:min-h-screen bg-white flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-[440px]">


                {/* Back */}
                <Link
                    to="/forgot-password"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        mt-12
                        text-sm
                        font-medium
                        text-slate-500
                        hover:text-[#0D47D9]
                        transition
                    "
                >
                    <FaArrowLeft className="text-xs" />
                    Back to forgot password
                </Link>

                {/* Heading */}
                <div className="mt-9">

                    <div className="
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        bg-blue-50
                        text-[#0D47D9]
                    ">
                        <FaShieldAlt className="text-xl" />
                    </div>

                    <p className="
                        mt-7
                        text-sm
                        font-semibold
                        text-[#0D47D9]
                    ">
                        ACCOUNT RECOVERY
                    </p>

                    <h1 className="
                        mt-3
                        text-3xl
                        sm:text-4xl
                        font-bold
                        tracking-tight
                        text-slate-900
                    ">
                        Verify your code
                    </h1>

                    <p className="
                        mt-3
                        text-slate-500
                        leading-7
                    ">
                        Enter the 6-digit password reset code we sent
                        to your email address.
                    </p>

                    {email && (
                        <p className="
                            mt-2
                            text-sm
                            font-semibold
                            text-slate-700
                            break-all
                        ">
                            {email}
                        </p>
                    )}
                </div>

                {/* Form */}
                <form
                    onSubmit={(e) =>
                        handleVerifyPasswordToken(e, code)
                    }
                    className="mt-9"
                >
                    <div>
                        <label className="
                            block
                            text-sm
                            font-medium
                            text-slate-700
                            mb-2
                        ">
                            Verification code
                        </label>

                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            value={code}
                            onChange={(e) =>
                                setCode(
                                    e.target.value.replace(/\D/g, "")
                                )
                            }
                            placeholder="000000"
                            required
                            autoComplete="one-time-code"
                            className="
                                w-full
                                h-14
                                rounded-lg
                                border
                                border-slate-300
                                bg-slate-50
                                px-4
                                text-center
                                tracking-[0.65em]
                                text-2xl
                                font-semibold
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
                    </div>

                    {/* Verify Button */}
                    <button
                        type="submit"
                        disabled={loading || code.length !== 6}
                        className="
                            group
                            mt-6
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
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                        "
                    >
                        {loading ? (
                            "Verifying..."
                        ) : (
                            <>
                                Verify code
                                <FaArrowRight className="
                                    text-sm
                                    transition-transform
                                    group-hover:translate-x-1
                                " />
                            </>
                        )}
                    </button>
                </form>

                {/* Resend */}
                <div className="mt-7 text-center">
                    <p className="text-sm text-slate-500">
                        Didn't receive the code?
                    </p>

                    <button
                        type="button"
                        className="
                            mt-2
                            text-sm
                            font-semibold
                            text-[#0D47D9]
                            hover:text-[#0b3dbb]
                            transition
                        "
                    >
                        Resend code
                    </button>
                </div>

                {/* Security */}
                <div className="
                    mt-8
                    flex
                    items-start
                    gap-3
                    rounded-lg
                    bg-slate-50
                    p-4
                ">
                    <FaShieldAlt className="
                        mt-0.5
                        text-slate-400
                        shrink-0
                    " />

                    <p className="
                        text-xs
                        leading-5
                        text-slate-500
                    ">
                        Your verification code is temporary. Never share
                        this code with anyone.
                    </p>
                </div>

                {/* Footer */}
                <p className="
                    text-center
                    text-xs
                    text-slate-400
                    mt-10
                ">
                    © {new Date().getFullYear()} Saystech Computer Hub
                </p>

            </div>
        </div>
    );
};

export default VerifyPasswordCode;
