import { useContext } from "react"
import { FaBookOpen, FaClock, FaStar, FaUsers } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { PaymentContext } from "../Context/PaymentContext"

const CoursecardOne = ({ course }) => {

    const navigate = useNavigate()
    const { startPay, loading } = useContext(PaymentContext)

    return (
        <div key={course.id} className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <img src={course.thumbnail} alt={course.title} loading="lazy" decoding="async" className="h-56 w-full object-cover" onClick={() => navigate(`/dashboard/course/${course.id}`)} />

            <div className="p-6">

                <div className="flex justify-between items-center">

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#0D47D9] capitalize">

                        {course.category}

                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs capitalize">

                        {course.level}

                    </span>

                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-800 capitalize">

                    {course.title}

                </h2>

                <div className="mt-6 flex justify-between text-sm text-slate-500">

                    <span className="flex items-center gap-2">

                        <FaBookOpen />

                        {course.lessons.length} Lessons

                    </span>

                    <span className="flex items-center gap-2">

                        <FaClock />

                        {course.durationInHours} Hours

                    </span>

                </div>

                <div className="mt-4 flex justify-between text-sm">

                    <span className="flex items-center gap-2">

                        <FaUsers />

                        {course.enrollmentCount}

                    </span>

                </div>

                <div className="mt-8 flex items-center justify-between">

                    <h3 className="text-2xl font-bold text-[#0D47D9]">

                        ₦{course.price?.toLocaleString()}

                    </h3>

                    <button disabled={loading} onClick={() => startPay(course.id)} className="rounded-xl bg-[#0D47D9] px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50">

                        Enroll Now

                    </button>

                </div>

            </div>

        </div>
    )
}

export default CoursecardOne