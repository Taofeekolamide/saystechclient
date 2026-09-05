import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex items-center justify-center px-6">

            <div className="max-w-lg w-full text-center">

                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] flex items-center justify-center shadow-xl">
                    <FaExclamationTriangle className="text-white text-4xl" />
                </div>

                <h1 className="mt-8 text-8xl font-black bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-500 leading-7">
                    Oops! The page you're looking for doesn't exist or may have
                    been moved. Let's get you back to learning.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                    <Link to="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <FaHome />
                        Go Home
                    </Link>

                    <button onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#0D47D9] text-[#0D47D9] font-semibold hover:bg-blue-50 transition-all duration-300"
                    >
                        <FaArrowLeft />
                        Go Back
                    </button>

                </div>

                <div className="mt-12 text-sm text-gray-400">
                    © {new Date().getFullYear()} Saystech Computer Hub
                </div>

            </div>

        </div>
    );
};

export default NotFound;