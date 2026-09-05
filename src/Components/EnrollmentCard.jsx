import { FaBookOpen, FaClock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const EnrollmentCard = ({ course }) => {

    const navigate = useNavigate()
    return (
        <div
            key={course.id}
            className="overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition duration-300"
        >

            <img loading="lazy" decoding="async" src={course.thumbnail} alt={course?.courseTitle} className="h-56 w-full object-cover" />

            <div className="p-7">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#0D47D9] capitalize">

                    {course?.category}

                </span>

                <h2 className="mt-4 text-xl font-bold text-slate-800 capitalize">

                    {course.courseTitle}

                </h2>

                <div className="mt-6 flex justify-between text-sm text-slate-500">

                    <span className="flex items-center gap-2">

                        <FaBookOpen />

                        {course?.totalLessons}

                    </span>

                    <span className="flex items-center gap-2">

                        <FaClock />

                        {course?.durationInHours} Hours

                    </span>

                </div>

                {course?.currentTopic &&
                    <p className="mt-5 text-sm text-slate-600">

                        <strong>Current Topic:</strong> {course?.topic}

                    </p>
                }



                {/* Progress */}

                <div className="mt-6">

                    <div className="flex justify-between mb-2 text-sm">

                        <span>Progress</span>

                        <span>{course?.progressPercentage}%</span>

                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-200">

                        <div
                            className="h-full rounded-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8]"
                            style={{
                                width: `${course?.progressPercentage}%`,
                            }}
                        />

                    </div>

                </div>


                <div className="flex gap-3 md:flex-row flex-col mt-6">

                    <button onClick={() => navigate(`/dashboard/course/${course.courseId}`)} className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-50 transition w-full">

                        Details

                    </button>

                    <button onClick={() => navigate(`/dashboard/learn/${course.courseId}`)
                    } className="p-2 rounded-xl bg-[#0D47D9] px-4 py-2 text-white hover:bg-blue-700 transition w-full">

                        {course.progressPercentage > 0
                            ? "Continue Learning"
                            : "Start Learning"}

                    </button>

                </div>

            </div>

        </div>

    )
}