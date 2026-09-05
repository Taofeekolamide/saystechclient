import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { loading, loginForm, handleLogin, setLoginForm } = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setLoginForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
            {/* LEFT */}
            <div className="flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <img
                            src={logo}
                            alt="Saystech"
                            className="w-48"
                        />
                    </div>

                    <div className="mt-10">
                        <h1 className="text-4xl font-bold text-slate-900">
                            Welcome Back
                        </h1>

                        <p className="text-slate-500 mt-3">
                            Sign in to continue your learning journey.
                        </p>
                    </div>

                    <form
                        onSubmit={handleLogin}
                        className="mt-8 space-y-5"
                    >
                        {/* Email */}
                        <div>
                            <label className="block mb-2 text-sm font-semibold text-slate-700">
                                Email Address
                            </label>

                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                <input
                                    type="email"
                                    name="email"
                                    value={loginForm.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block mb-2 text-sm font-semibold text-slate-700">
                                Password
                            </label>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={loginForm.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-100"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={loginForm.rememberMe}
                                    onChange={handleChange}
                                    className="accent-[#0D47D9]"
                                />

                                Remember me
                            </label>

                            <Link to="/forgot-password"
                                className="font-semibold text-[#0D47D9] hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login */}
                        <button disabled={loading}
                            className="w-full rounded-xl bg-[#0D47D9] py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-50"
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>

                        {/* Register */}
                        <p className="text-center text-slate-500">
                            Don't have an account?{" "}
                            <Link to="/register"
                                className="font-semibold text-[#0D47D9]"
                            >
                                Create Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#0D47D9] via-[#1E63F2] to-[#21B4F8] p-16">
                <div className="max-w-lg text-white">
                    <h1 className="text-6xl font-bold leading-tight">
                        Learn. <br /> Build. <br /> Succeed.
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-blue-100">
                        Gain practical technology skills with Saystech Computer Hub.
                        Learn programming, networking, cybersecurity, graphics design,
                        data analysis, and more through hands-on training designed for
                        students and professionals.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <div className="rounded-2xl bg-white/15 px-6 py-4 backdrop-blur">
                            <h2 className="text-3xl font-bold">500+</h2>
                            <p className="text-blue-100">Students Trained</p>
                        </div>

                        <div className="rounded-2xl bg-white/15 px-6 py-4 backdrop-blur">
                            <h2 className="text-3xl font-bold">20+</h2>
                            <p className="text-blue-100">Professional Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}