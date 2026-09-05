import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { VerifyPayment } from "../../Services/PaymentService";
import { EnrollmentContext } from "../../Context/EnrollmentContext";

const PaymentCallback = () => {

    const { fetchEnrollments } = useContext(EnrollmentContext)

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const verificationStarted = useRef(false);

    const [status, setStatus] = useState("verifying");
    const [message, setMessage] = useState("Verifying your payment...");

    useEffect(() => {
        // Prevent the same callback from verifying twice
        if (verificationStarted.current) {
            return;
        }
        verificationStarted.current = true;

        verify();
    }, [searchParams]);


    const verify = async () => {
        const reference = searchParams.get("reference");

        if (!reference) {
            setStatus("failed");
            setMessage("Payment reference was not found.");
            return;
        }

        try {
            const response = await VerifyPayment(reference);

            if (response.success) {
                setStatus("success");
                setMessage("Payment successful! You are now enrolled.");
                await fetchEnrollments()
                setTimeout(() => { window.location.href = "/dashboard/my-courses" }, 5000);
            } else {
                setStatus("failed");
                setMessage(response.message || "Payment verification failed.");
            }

        } catch (error) {
            setStatus("failed");
            setMessage(error.message || "Unable to verify payment.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

                {status === "verifying" && (
                    <>
                        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#0D47D9]" />

                        <h1 className="text-xl font-bold text-slate-800">
                            Verifying Payment
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Please wait while we confirm your payment.
                        </p>
                    </>
                )}


                {status === "success" && (
                    <>
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                            ✓
                        </div>

                        <h1 className="text-xl font-bold text-slate-800">
                            Payment Successful
                        </h1>

                        <p className="mt-2 text-slate-500">
                            You have been successfully enrolled
                            in the course.
                        </p>

                        <p className="mt-4 text-sm text-slate-400">
                            Redirecting to your courses...
                        </p>
                    </>
                )}


                {status === "failed" && (
                    <>
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl text-red-600">
                            ×
                        </div>

                        <h1 className="text-xl font-bold text-slate-800">
                            Payment Verification Failed
                        </h1>

                        <p className="mt-2 text-slate-500">
                            {message}
                        </p>

                        <button
                            onClick={() => navigate("/dashboard/courses")}
                            className="mt-6 rounded-xl bg-[#0D47D9] px-6 py-3 font-medium text-white hover:bg-blue-700"
                        >
                            Back to Courses
                        </button>
                    </>
                )}

            </div>

        </div>
    );
};

export default PaymentCallback;