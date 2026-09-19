import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaLock, FaEye, FaEyeSlash, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";

const ResetPassword = () => {
    const { loading, handleResetPassword, resetForm, setResetForm } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setResetForm((prev) => ({
            ...prev,
            newPassword: e.target.value,
        }));
    };

    const handleConfirmPasswordChange = (e) => {
        setResetForm((prev) => ({
            ...prev,
            confirmPassword: e.target.value,
        }));
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-[440px]">

                {/* Logo */}
                <div className="flex justify-center">
                    <Link to="/" className="inline-block">
                        <img
                            src={logo}
                            alt="Saystech Computer Hub"
                            className="w-40 sm:w-44"
                        />
                    </Link>
                </div>

                {/* Back */}
                <Link
                    to="/verify-reset-code"
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
                    Back
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
                        <FaLock className="text-xl" />
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
                        Create a new password
                    </h1>

                    <p className="
                        mt-3
                        text-slate-500
                        leading-7
                    ">
                        Choose a new password for your account. Make sure
                        it's something secure that you can remember.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={(e) => handleResetPassword(e, resetForm)}
                    className="mt-9 space-y-6"
                >

                    {/* New Password */}
                    <div>
                        <label className="
                            block
                            text-sm
                            font-medium
                            text-slate-700
                            mb-2
                        ">
                            New password
                        </label>

                        <div className="relative">

                            <FaLock className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                                text-sm
                            " />

                            <input
                                type={showPassword ? "text" : "password"}
                                value={resetForm.newPassword}
                                onChange={handlePasswordChange}
                                placeholder="Enter new password"
                                required
                                autoComplete="new-password"
                                className="
                                    w-full
                                    h-12
                                    rounded-lg
                                    border
                                    border-slate-300
                                    bg-slate-50
                                    pl-11
                                    pr-12
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

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
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

                    {/* Confirm Password */}
                    <div>
                        <label className="
                            block
                            text-sm
                            font-medium
                            text-slate-700
                            mb-2
                        ">
                            Confirm new password
                        </label>

                        <div className="relative">

                            <FaLock className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                                text-sm
                            " />

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                value={resetForm.confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                placeholder="Repeat your password"
                                required
                                autoComplete="new-password"
                                className="
                                    w-full
                                    h-12
                                    rounded-lg
                                    border
                                    border-slate-300
                                    bg-slate-50
                                    pl-11
                                    pr-12
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

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword((prev) => !prev)
                                }
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
                                    showConfirmPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>

                        </div>
                    </div>

                    {/* Password Requirements */}
                    <div className="
                        rounded-lg
                        bg-slate-50
                        border
                        border-slate-100
                        p-4
                    ">
                        <p className="
                            text-xs
                            font-semibold
                            text-slate-700
                            mb-2
                        ">
                            For a stronger password
                        </p>

                        <div className="
                            grid
                            grid-cols-2
                            gap-y-2
                            text-xs
                            text-slate-500
                        ">
                            <span>• At least 8 characters</span>
                            <span>• Uppercase letter</span>
                            <span>• Lowercase letter</span>
                            <span>• Number or symbol</span>
                        </div>
                    </div>

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
                            "Updating password..."
                        ) : (
                            <>
                                Reset password

                                <FaArrowRight className="
                                    text-sm
                                    transition-transform
                                    group-hover:translate-x-1
                                " />
                            </>
                        )}
                    </button>

                </form>

                {/* Security Message */}
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
                        After resetting your password, you'll be able
                        to sign in to your Saystech account with your
                        new credentials.
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

export default ResetPassword;
