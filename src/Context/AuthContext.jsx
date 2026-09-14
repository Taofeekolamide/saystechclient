import { createContext, useContext, useState } from "react";
import { forgotPassword, login, register, resendVerifyEmail, resetPassword, verifyEmail, verifyPasswordResetCode } from "../Services/AuthServices";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "./AlertContext";
import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const { showAlert } = useContext(AlertContext)


    const nav = useNavigate()

    const [auth, setAuth] = useState(() => {
        return JSON.parse(localStorage.getItem("saystechauth"))
    })

    const [loading, setLoading] = useState(false);
    const [seconds, setSeconds] = useState(60);

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });


    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await login(loginForm);
            localStorage.setItem("saystechauth", JSON.stringify(response.data));
            setAuth(response.data)

            showAlert("Login Successfull", "success");

            if (response.data.role === "Admin") {
                nav("/", { replace: true });
            } else {
                nav("/me", { replace: true });
            }

        } catch (error) {

            showAlert("Login Failed", "error");

        } finally {
            setLoading(false);
        }
    };


    const [signupForm, setSignupForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const handleSignup = async (e) => {
        e.preventDefault();

        if (signupForm.password !== signupForm.confirmPassword) {
            showAlert("Passwords do not match.", "error");
            return;
        }

        if (signupForm.password.length < 8) {
            showAlert("Invalid Password.", "error");
            return;
        }

        if (!signupForm.agree) {
            showAlert("Please accept the Terms & Conditions.", "error");
            return;
        }

        setLoading(true);

        try {
            const response = await register(signupForm);
            localStorage.setItem("pendingVerification", JSON.stringify(response?.data?.email));
            nav("/verify-email")
        } catch (error) {

            showAlert(error.message, "error");

        } finally {

            setLoading(false);

        }
    };

    const handleVerifyEmail = async (e, code) => {

        e.preventDefault();

        const pendingUser = JSON.parse(localStorage.getItem("pendingVerification"));

        if (!pendingUser) {
            showAlert("Verification session expired. Please register again.", "error");
            nav("/register");
            return;
        }

        if (code.length !== 6) {
            showAlert("Enter the 6-digit verification code.", "error");
            return;
        }

        setLoading(true);

        try {
            await verifyEmail(pendingUser, code)
            showAlert("Email verified successfully.", "success");

            nav("/login");
            localStorage.removeItem("pendingVerification");

        } catch (error) {

            if (error.message == "Your email has already been verified.") {
                showAlert(error.message, "error");
                nav("/login");
            }
            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }
    }

    const resendVerifyCode = async () => {

        const pendingUser = JSON.parse(localStorage.getItem("pendingVerification"));

        try {

            await resendVerifyEmail(pendingUser)
            showAlert("Verification code sent.", "success");
            setSeconds(60);

        } catch (error) {

            if (error.message == "Email has already been verified.") {
                showAlert(error.message, "error");
                nav("/login");
            }

        }
    }

    const handleForgotPassword = async (e, email) => {
        e.preventDefault()

        setLoading(true)

        try {

            const data = await forgotPassword(email)
            localStorage.setItem("passwordResetEmail", JSON.stringify(data?.data));

            showAlert(data.message, "success");
            nav("/verify-token")

        } catch (error) {

            showAlert(error.message, "error");

        } finally {

            setLoading(false)

        }
    }

    const handleVerifyPasswordToken = async (e, code) => {
        e.preventDefault();

        const email = JSON.parse(localStorage.getItem("passwordResetEmail"));

        if (!email) {
            showAlert("Account Not Found", "error");

            nav("/forgot-password", { replace: true });
            return;
        }

        if (code.length !== 6) {

            showAlert("Please enter the 6-digit reset code.", "error");
            return;
        }

        setLoading(true);

        try {
            const response = await verifyPasswordResetCode(email, code);
            localStorage.setItem("passwordResetToken", code);

            showAlert(response.message, "success");
            nav("/reset-password", { replace: true });

        } catch (error) {

            showAlert(error.message || "Something went wrong.", "error");

        } finally {

            setLoading(false);

        }
    };


    const [resetForm, setResetForm] = useState({
        newPassword: "",
        confirmPassword: ""
    })

    const handleResetPassword = async (e) => {
        e.preventDefault();

        const email = JSON.parse(localStorage.getItem("passwordResetEmail"));
        const token = localStorage.getItem("passwordResetToken");

        if (!email || !token) {

            showAlert("Your password reset session has expired.", "error");
            nav("/forgot-password", { replace: true });
            return;

        }

        if (!resetForm.newPassword || !resetForm.confirmPassword) {
            showAlert("Please fill in all fields.", "error");
            return;
        }

        if (resetForm.newPassword.length < 8) {
            showAlert("Password must be at least 8 characters long.", "error");
            return;
        }

        if (resetForm.newPassword !== resetForm.confirmPassword) {
            showAlert("Passwords do not match.", "error");
            return;
        }

        setLoading(true);

        try {

            const response = await resetPassword({
                email,
                token,
                newPassword: resetForm.newPassword,
                confirmPassword: resetForm.confirmPassword
            });

            // Clear temporary data
            localStorage.removeItem("passwordResetEmail");
            localStorage.removeItem("passwordResetToken");

            showAlert(response.message, "success");

            nav("/login", { replace: true });

        } catch (error) {

            showAlert(error.message || "Something went wrong.", "error");

        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {

        const result = await Swal.fire({
            title: "?",
            text: "Are you sure you want to logout?.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Logout",
            cancelButtonText: "Cancel"
        });

        if (result.isConfirmed) {
            localStorage.removeItem("saystechauth")
            nav("/login")
        }

    }


    return (
        <AuthContext.Provider value={{
            loading,
            auth,

            loginForm,
            handleLogin,
            setLoginForm,

            signupForm,
            handleSignup,
            setSignupForm,

            handleVerifyEmail,
            seconds,
            setSeconds,
            resendVerifyCode,

            handleForgotPassword,
            handleVerifyPasswordToken,
            logout,

            handleResetPassword,
            resetForm,
            setResetForm
        }}>
            {children}
        </AuthContext.Provider>
    );
}