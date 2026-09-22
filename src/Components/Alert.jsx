import { useEffect } from "react";
import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

const Alert = ({ type = "success", message, onClose }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const isSuccess = type === "success";

    return (
        <div className="fixed top-6 right-6 z-[9999] lg:w-full w-[350px] ">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex items-start gap-3">

                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isSuccess
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                        }`}
                >
                    {isSuccess ? (
                        <FiCheckCircle size={21} />
                    ) : (
                        <FiAlertCircle size={21} />
                    )}
                </div>

                <div className="flex-1">
                    <h4 className="font-bold text-gray-900">
                        {isSuccess ? "Success" : "Something went wrong"}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                        {message}
                    </p>
                </div>

                <button onClick={onClose}
                    className="text-gray-400 hover:text-gray-700 transition"
                >
                    <FiX size={18} />
                </button>

            </div>
        </div>
    );
};

export default Alert;