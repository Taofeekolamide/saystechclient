import { useContext } from "react";
import { FaArrowRight, FaPlayCircle, FaClock, FaBookOpen, } from "react-icons/fa";
import { EnrollmentContext } from "../Context/EnrollmentContext";
import { useNavigate } from "react-router-dom";

const ContinueLearning = () => {

    const { enrollments } = useContext(EnrollmentContext)
    const nav = useNavigate()
    const course = enrollments[0]

    if (!course) {
        return
    }

    return (

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0D47D9] via-[#1565F5] to-[#27B6F8] text-white shadow-xl">

            {/* Background */}

            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-white/5" />

            <div className="relative p-5 lg:p-10">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                    {/* Left */}

                    <div className="flex-1">

                        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">

                            <FaBookOpen />

                            Continue Learning

                        </span>

                        <h2 className="mt-6 text-3xl lg:text-4xl font-bold capitalize">

                            {course?.courseTitle}

                        </h2>

                        <p className="mt-2 text-blue-100 capitalize">

                            {course?.category}

                        </p>


                        {course.currentTopic && <div>

                            <p className="text-blue-200">
                                Topic
                            </p>

                            <h4 className="font-semibold">

                                {course?.currentTopic}

                            </h4>

                        </div>}


                        {/* Progress */}

                        <div className="mt-8">

                            <div className="flex justify-between text-sm mb-2">

                                <span>Course Progress</span>

                                <span>{course?.progressPercentage}%</span>

                            </div>

                            <div className="h-3 rounded-full bg-white/20 overflow-hidden">

                                <div
                                    className="h-full rounded-full bg-white"
                                    style={{
                                        width: `${course?.progressPercentage}%`
                                    }}
                                />

                            </div>

                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <button onClick={() => nav(`/dashboard/learn/${course?.courseId}`)} className="flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-[#0D47D9] transition hover:scale-105">

                                <FaPlayCircle />

                                Resume Course

                            </button>

                            <button onClick={() => nav(`/dashboard/course/${course?.courseId}`)} className="flex items-center gap-3 rounded-xl border border-white/40 px-6 py-3 transition hover:bg-white/10">

                                View Course

                                <FaArrowRight />

                            </button>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="lg:w-80">

                        <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20">

                            <h3 className="text-xl font-semibold">

                                Course Details

                            </h3>

                            <div className="mt-6 space-y-5">

                                <div>

                                    <p className="text-blue-200 text-sm">

                                        Completion

                                    </p>

                                    <h4 className="font-semibold">

                                        {course?.progressPercentage}% Completed

                                    </h4>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default ContinueLearning;