import { FaClock } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const CourseCardTwo = ({ course }) => {
    const navigate = useNavigate()
    return (
        <div key={course.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">

            {/* Course Image */}

            <div className="relative h-48 overflow-hidden bg-slate-100 ">
                <img src={course.thumbnail} alt={course.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>


            {/* Course Information */}

            <div className="p-5">

                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-slate-800 capitalize ">
                    {course.title}
                </h3>


                <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-500 ">
                    {course.description}
                </p>


                <div className="mb-5 flex flex-wrap gap-4 text-xs text-slate-500">

                    <span className="flex items-center gap-1">

                        <FaClock /> {course.durationInHours} Hours

                    </span>

                </div>

                <button onClick={() => navigate(`/dashboard/course/${course.id}`)}
                    className="w-full rounded-xl bg-[#0D47D9] py-3 font-medium text-white transition hover:bg-blue-700">
                    View Course
                </button>

            </div>

        </div>

    )
}

export default CourseCardTwo