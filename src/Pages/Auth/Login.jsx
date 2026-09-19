import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaArrowRight, } from "react-icons/fa";
import logo from "../../assets/logo.png";

import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { loading, loginForm, handleLogin, setLoginForm, } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setLoginForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

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

                    {/* Heading */}
                    <div className="mt-14">
                        <p className="text-sm font-semibold text-[#0D47D9] mb-3">
                            STUDENT PORTAL
                        </p>

                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                            Welcome back
                        </h1>

                        <p className="mt-3 text-slate-500 leading-7">
                            Sign in to access your courses and continue learning
                            where you left off.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="mt-9 space-y-6">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Email address
                            </label>

                            <div className="relative">
                                <FaEnvelope
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={loginForm.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                    autoComplete="email"
                                    className="
                                        w-full
                                        h-12
                                        rounded-lg
                                        border border-slate-300
                                        bg-slate-50
                                        pl-11 pr-4
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
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="text-sm font-medium text-slate-700">
                                    Password
                                </label>

                                <Link to="/forgot-password"
                                    className="text-sm font-medium text-[#0D47D9] hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <div className="relative">
                                <FaLock
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
                                />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={loginForm.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="current-password"
                                    className="
                                        w-full
                                        h-12
                                        rounded-lg
                                        border border-slate-300
                                        bg-slate-50
                                        pl-11 pr-12
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

                                <button type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="
                                        absolute
                                        right-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-slate-400
                                        hover:text-slate-600
                                        transition
                                    "
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember */}
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={loginForm.rememberMe}
                                onChange={handleChange}
                                className="h-4 w-4 rounded accent-[#0D47D9]"
                            />

                            <span className="text-sm text-slate-600">
                                Keep me signed in
                            </span>
                        </label>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                group
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
                                "Signing in..."
                            ) : (
                                <>
                                    Sign in

                                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>

                        {/* Register */}
                        <p className="text-center text-sm text-slate-500 pt-2">
                            New to Saystech?{" "}
                            <Link
                                to="/register"
                                className="font-semibold text-[#0D47D9] hover:underline"
                            >
                                Create an account
                            </Link>
                        </p>
                    </form>

                    {/* Bottom */}
                    <p className="text-center text-xs text-slate-400 mt-12">
                        © {new Date().getFullYear()} Saystech Computer Hub
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex lg:w-[48%] bg-[#0D47D9] relative overflow-hidden">

                {/* Background shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3" />

                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border border-white/10 -translate-x-1/3 translate-y-1/3" />

                <div className="relative z-10 flex flex-col justify-between w-full p-14 xl:p-20">

                    {/* Small heading */}
                    <div>
                        <div className="w-12 h-1 bg-white rounded-full mb-8" />

                        <p className="text-sm font-semibold tracking-[0.2em] text-blue-200 uppercase">
                            Learn with confidence
                        </p>

                        <h2 className="mt-5 text-4xl xl:text-5xl font-bold text-white leading-[1.15] max-w-lg">
                            Build skills that move you forward.
                        </h2>

                        <p className="mt-6 text-blue-100 leading-8 max-w-md">
                            Access practical technology courses designed to
                            help you learn useful skills, build real projects,
                            and grow professionally.
                        </p>
                    </div>

                    {/* Bottom information */}
                    <div>
                        <div className="border-t border-white/20 pt-7">

                            <p className="text-sm text-blue-200 mb-4">
                                What you can do from your student account
                            </p>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-md">

                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-white" />
                                    <span className="text-sm text-white">
                                        Browse courses
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-white" />
                                    <span className="text-sm text-white">
                                        Enroll in courses
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-white" />
                                    <span className="text-sm text-white">
                                        Watch lessons
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-white" />
                                    <span className="text-sm text-white">
                                        Track your courses
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
