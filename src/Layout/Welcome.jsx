import { useContext } from "react";
import { FaBookReader } from "react-icons/fa";
import { EnrollmentContext } from "../Context/EnrollmentContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Welcome = () => {

    const { enrollments, completedEnrollments } = useContext(EnrollmentContext)
    const { user } = useContext(UserContext)

    const nav = useNavigate()

    const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric", });
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

    return (

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0D47D9] via-[#1565F5] to-[#27B6F8] text-white p-5 md:p-10">

            {/* Background circles */}

            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full"></div>

            <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-white/5 rounded-full"></div>

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                {/* Left */}

                <div>

                    <p className="text-blue-100 text-sm tracking-wide">

                        {today}

                    </p>

                    <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">

                        {greeting}, {user?.firstName} 👋

                    </h1>

                    <p className="mt-4 max-w-2xl text-blue-100 text-lg leading-8">

                        Welcome back to <span className="font-semibold text-white">
                            Saystech Computer Hub
                        </span>.
                        Continue your learning journey and stay one step closer
                        to becoming a tech professional.

                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        {enrollments.length > 0 &&
                            <button onClick={() => nav(`/dashboard/learn/${enrollments[0]?.courseId}`)} className="bg-white text-[#0D47D9] font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
                                Continue Learning
                            </button>
                        }


                        <button onClick={() => nav("/dashboard/courses")} className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 transition">

                            Browse Courses

                        </button>

                    </div>

                </div>

                {/* Right */}

                <div className="hidden lg:flex items-center justify-center">

                    <div className="w-44 h-44 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center">

                        <FaBookReader className="text-7xl text-white" />

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Welcome;