import { FaBookOpen, FaClock, FaArrowRight, FaSignal } from "react-icons/fa";
import { EnrollmentContext } from "../Context/EnrollmentContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Courses = () => {

    const { enrollments } = useContext(EnrollmentContext)
    const nav = useNavigate()

    if (enrollments?.length == 0) {
        return
    }

    return (

        <section>

            <div className="flex flex-col md:flex-row items-center justify-between mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">
                        My Courses
                    </h2>

                    <p className="text-slate-500">
                        Continue learning from your enrolled courses.
                    </p>

                </div>

                <button className="hidden md:block text-[#0D47D9] font-semibold hover:underline">

                    View All

                </button>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {enrollments.slice(0, 4).map(course => (

                    <div key={course.id}
                        className="overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
                    >

                        <img src={course.thumbnail} alt={course.title} className="h-44 w-full object-cover" />

                        <div className="p-6">

                            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#0D47D9]">

                                {course?.category}

                            </span>

                            <h3 className="mt-4 text-xl font-bold text-slate-800 line-clamp-2">

                                {course?.courseTitle}

                            </h3>

                            <div className="mt-5 flex justify-between text-sm text-slate-500">

                                <span className="flex items-center gap-2">

                                    <FaBookOpen />

                                    {course?.totalLessons} Lessons

                                </span>

                                <span className="flex items-center gap-2">

                                    <FaClock />

                                    {course?.durationInHours} Hours

                                </span>

                            </div>

                            {/* Progress */}

                            <div className="mt-6">

                                <div className="flex justify-between text-sm font-medium">

                                    <span>Progress</span>

                                    <span>{course?.progressPercentage}%</span>

                                </div>

                                <div className="mt-2 h-2 rounded-full bg-slate-200 overflow-hidden">

                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8]"
                                        style={{
                                            width: `${course?.progressPercentage}%`
                                        }}
                                    />

                                </div>

                            </div>

                            <div className="mt-6 flex items-center justify-between">

                                <span className="flex items-center gap-2 text-sm text-green-600">

                                    <FaSignal />

                                    Active

                                </span>

                                <button onClick={() => nav(`/dashboard/learn/${course?.courseId}`)} className="flex items-center gap-2 rounded-xl bg-[#0D47D9] px-4 py-2 text-white hover:bg-blue-700 transition">

                                    Continue

                                    <FaArrowRight />

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

};

export default Courses;