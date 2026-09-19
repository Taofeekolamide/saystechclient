import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaPaperPlane, FaShieldAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const { handleForgotPassword, loading } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-white flex">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-[52%] flex items-center justify-center px-6 py-10 sm:px-10">
                <div className="w-full max-w-[440px]">

                    {/* Logo */}
                    <Link to="/" className="inline-block">
                        <img
                            src={logo}
                            alt="Saystech Computer Hub"
                            className="w-40 sm:w-44"
                        />
                    </Link>

                    {/* Back */}
                    <Link
                        to="/login"
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
                        Back to login
                    </Link>

                    {/* Heading */}
                    <div className="mt-9">

                        <div className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-50
                            text-[#0D47D9]
                        ">
                            <FaEnvelope className="text-xl" />
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
                            Forgot your password?
                        </h1>

                        <p className="
                            mt-3
                            text-slate-500
                            leading-7
                        ">
                            No worries. Enter the email address associated
                            with your account and we'll send you a reset code.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={(e) =>
                            handleForgotPassword(e, email)
                        }
                        className="mt-9"
                    >

                        <label className="
                            block
                            text-sm
                            font-medium
                            text-slate-700
                            mb-2
                        ">
                            Email address
                        </label>

                        <div className="relative">

                            <FaEnvelope
                                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-slate-400
                                    text-sm
                                "
                            />

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                                autoComplete="email"
                                placeholder="you@example.com"
                                className="
                                    w-full
                                    h-12
                                    rounded-lg
                                    border
                                    border-slate-300
                                    bg-slate-50
                                    pl-11
                                    pr-4
                                    text-slate-900
                                    placeholder:text-slate-400
                                    outline-none
                                    transition
                                    focus:bg-white
                                    focus:border-[#0D47D9]
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
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
                                <>
                                    <span className="
                                        h-4
                                        w-4
                                        rounded-full
                                        border-2
                                        border-white
                                        border-t-transparent
                                        animate-spin
                                    " />

                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send reset code

                                    <FaPaperPlane className="
                                        text-sm
                                        transition-transform
                                        group-hover:translate-x-1
                                    " />
                                </>
                            )}
                        </button>

                    </form>

                    {/* Remember password */}
                    <p className="
                        mt-8
                        text-center
                        text-sm
                        text-slate-500
                    ">
                        Remember your password?{" "}
                        <Link
                            to="/login"
                            className="
                                font-semibold
                                text-[#0D47D9]
                                hover:underline
                            "
                        >
                            Sign in
                        </Link>
                    </p>

                    {/* Security message */}
                    <div className="
                        mt-10
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
                            For your security, we'll only send password
                            recovery instructions to the email address
                            registered with your account.
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

            {/* RIGHT SIDE */}
            <div className="
                hidden
                lg:flex
                lg:w-[48%]
                bg-[#0D47D9]
                relative
                overflow-hidden
            ">

                {/* Background circles */}
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

                <div className="
                    relative
                    z-10
                    flex
                    flex-col
                    justify-between
                    w-full
                    p-14
                    xl:p-20
                ">

                    {/* Main content */}
                    <div className="max-w-lg">

                        <div className="
                            w-12
                            h-1
                            bg-white
                            rounded-full
                            mb-8
                        " />

                        <p className="
                            text-sm
                            font-semibold
                            tracking-[0.2em]
                            text-blue-200
                            uppercase
                        ">
                            We'll help you get back in
                        </p>

                        <h2 className="
                            mt-5
                            text-4xl
                            xl:text-5xl
                            font-bold
                            leading-[1.15]
                            text-white
                        ">
                            Your learning
                            <br />
                            doesn't have
                            <br />
                            to stop.
                        </h2>

                        <p className="
                            mt-7
                            text-blue-100
                            leading-8
                            max-w-md
                        ">
                            Reset your password securely and get back to
                            your courses, lessons, and learning progress.
                        </p>

                    </div>

                    {/* Bottom */}
                    <div className="
                        border-t
                        border-white/20
                        pt-7
                        max-w-lg
                    ">

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
                                <p className="
                                    text-sm
                                    font-semibold
                                    text-white
                                ">
                                    Secure account recovery
                                </p>

                                <p className="
                                    mt-1
                                    text-sm
                                    leading-6
                                    text-blue-200
                                ">
                                    Your account remains protected while
                                    you recover access.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ForgotPassword;