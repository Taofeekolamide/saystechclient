import { Link } from "react-router-dom";
import { FiAward, FiDownload, FiEye, FiSearch, FiCheckCircle, FiCalendar } from "react-icons/fi";

const Certificates = () => {

    const certificates = [
        {
            id: "CERT-2026-001",
            course: "ASP.NET Core Web API",
            issuedDate: "August 20, 2026",
            instructor: "Saystech Computer Hub",
            level: "Intermediate",
            duration: "100 Hours"
        },
        {
            id: "CERT-2026-002",
            course: "React.js Frontend Development",
            issuedDate: "July 14, 2026",
            instructor: "Saystech Computer Hub",
            level: "Intermediate",
            duration: "100 Hours"
        },
        {
            id: "CERT-2026-003",
            course: "C# Programming Masterclass",
            issuedDate: "June 05, 2026",
            instructor: "Saystech Computer Hub",
            level: "Beginner",
            duration: "80 Hours"
        }
    ];

    return (
        <div className="min-h-screen">

            {/* Header */}
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0D47D9] to-[#27B6F8] flex items-center justify-center text-white shadow-lg">

                                <FiAward size={24} />

                            </div>

                            <div>

                                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                    My Certificates
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Your achievements and completed courses.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-72">

                        <FiSearch
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />

                        <input
                            type="text"
                            placeholder="Search certificates..."
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-gray-200 outline-none focus:border-[#27B6F8] focus:ring-2 focus:ring-[#27B6F8]/10 transition"
                        />

                    </div>

                </div>


                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Certificates Earned
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mt-1">
                                    {certificates.length}
                                </h2>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0D47D9] flex items-center justify-center">
                                <FiAward size={21} />
                            </div>

                        </div>

                    </div>


                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Completed Courses
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mt-1">
                                    {certificates.length}
                                </h2>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                                <FiCheckCircle size={21} />
                            </div>

                        </div>

                    </div>


                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm text-gray-500">
                                    Learning Status
                                </p>

                                <h2 className="text-lg font-bold text-green-600 mt-2">
                                    Excellent
                                </h2>
                            </div>

                            <div className="w-11 h-11 rounded-xl bg-cyan-50 text-[#27B6F8] flex items-center justify-center">
                                <FiCheckCircle size={21} />
                            </div>

                        </div>

                    </div>

                </div>


                {/* Certificates */}
                <div className="mb-5">

                    <h2 className="text-xl font-bold text-gray-900">
                        Your Achievements
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Certificates you've earned from Saystech courses.
                    </p>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {certificates.map((certificate) => (

                        <div
                            key={certificate.id}
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >

                            {/* Certificate Preview */}
                            <div className="relative bg-gradient-to-br from-[#0D47D9] via-[#1262dc] to-[#27B6F8] p-7">

                                {/* Decorative circles */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10" />

                                <div className="absolute -left-10 -bottom-12 w-36 h-36 rounded-full bg-white/10" />

                                <div className="relative border border-white/30 rounded-2xl p-6 text-center text-white">

                                    <div className="flex justify-center mb-3">

                                        <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 flex items-center justify-center">

                                            <FiAward size={24} />

                                        </div>

                                    </div>

                                    <p className="text-xs uppercase tracking-[4px] text-blue-100">
                                        Saystech Computer Hub
                                    </p>

                                    <h3 className="text-2xl font-serif font-bold mt-4">
                                        Certificate of Completion
                                    </h3>

                                    <p className="text-sm text-blue-100 mt-4">
                                        This certificate is proudly awarded for successfully
                                        completing
                                    </p>

                                    <h4 className="text-xl font-bold mt-2">
                                        {certificate.course}
                                    </h4>

                                    <div className="flex justify-center items-center gap-2 mt-5 text-xs text-blue-100">
                                        <FiCalendar />
                                        Issued {certificate.issuedDate}
                                    </div>

                                </div>

                            </div>


                            {/* Details */}
                            <div className="p-6">

                                <div className="flex items-start justify-between gap-4">

                                    <div>

                                        <h3 className="font-bold text-lg text-gray-900">
                                            {certificate.course}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Certificate ID: {certificate.id}
                                        </p>

                                    </div>

                                    <span className="shrink-0 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
                                        Completed
                                    </span>

                                </div>


                                <div className="grid grid-cols-2 gap-4 mt-5">

                                    <div>

                                        <p className="text-xs text-gray-400">
                                            Level
                                        </p>

                                        <p className="text-sm font-semibold text-gray-700 mt-1">
                                            {certificate.level}
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-xs text-gray-400">
                                            Duration
                                        </p>

                                        <p className="text-sm font-semibold text-gray-700 mt-1">
                                            {certificate.duration}
                                        </p>

                                    </div>

                                </div>


                                {/* Actions */}
                                <div className="flex gap-3 mt-6">

                                    <Link
                                        to={`/certificate/${certificate.id}`}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-[#27B6F8] hover:text-[#0D47D9] transition"
                                    >
                                        <FiEye />
                                        View
                                    </Link>

                                    <button
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5] transition"
                                    >
                                        <FiDownload />
                                        Download
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>


                {/* Empty state */}
                {certificates.length === 0 && (

                    <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">

                        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-[#0D47D9] flex items-center justify-center text-3xl">

                            <FiAward />

                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mt-5">
                            No certificates yet
                        </h2>

                        <p className="text-gray-500 max-w-md mx-auto mt-2">
                            Complete your first course to earn a certificate
                            and showcase your achievement.
                        </p>

                        <Link
                            to="/courses"
                            className="inline-flex mt-6 px-6 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5] transition"
                        >
                            Explore Courses
                        </Link>

                    </div>

                )}

            </div>

        </div>
    );
};

export default Certificates;