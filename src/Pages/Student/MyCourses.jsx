import { useContext } from "react";
import { EnrollmentContext } from "../../Context/EnrollmentContext";
import { EnrollmentCard } from "../../Components/EnrollmentCard";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {

    const { enrollments, loading } = useContext(EnrollmentContext)
    const navigate = useNavigate()

    return (
        <>
            <div className="min-h-screen" >
                {
                    loading ?
                        (

                            <div className="mx-auto max-w-7xl">

                                <div className="mb-8">
                                    <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />
                                    <div className="mt-3 h-4 w-72 animate-pulse rounded bg-slate-200" />
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {[1, 2, 3].map((item) => (
                                        <div
                                            key={item}
                                            className="overflow-hidden rounded-2xl bg-white shadow-sm"
                                        >
                                            <div className="h-48 animate-pulse bg-slate-200" />

                                            <div className="p-5">
                                                <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
                                                <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-200" />
                                                <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        )
                        :
                        enrollments.length == 0 ?
                            (
                                <div className="mx-auto max-w-7xl">

                                    <div className="mb-10">
                                        <h1 className="text-3xl font-bold text-slate-900">
                                            My Courses
                                        </h1>

                                        <p className="mt-2 text-slate-500">
                                            Courses you have enrolled in will appear here.
                                        </p>
                                    </div>

                                    <div className="flex min-h-[450px] items-center justify-center rounded-3xl border border-slate-200 bg-white px-6">
                                        <div className="max-w-md text-center">

                                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                                                <svg
                                                    className="h-10 w-10 text-[#0D47D9]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.7"
                                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                                                    />
                                                </svg>
                                            </div>

                                            <h2 className="mt-6 text-2xl font-bold text-slate-900">
                                                No courses yet
                                            </h2>

                                            <p className="mt-3 leading-7 text-slate-500">
                                                You haven't enrolled in any courses yet.
                                                Explore our courses and start learning something
                                                new today.
                                            </p>

                                            <button
                                                onClick={() => navigate("/dashboard/courses")}
                                                className="mt-7 rounded-xl bg-[#0D47D9] px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700"
                                            >
                                                Browse Courses
                                            </button>

                                        </div>
                                    </div>

                                </div>

                            )
                            :
                            (
                                <div className="mx-auto max-w-7xl">

                                    {/* Header */}
                                    <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                                        <div>
                                            <h1 className="text-3xl font-bold text-slate-900">
                                                My Courses
                                            </h1>

                                            <p className="mt-2 text-slate-500">
                                                Continue learning from where you stopped.
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => navigate("/dashboard/courses")}
                                            className="w-fit rounded-xl border border-[#0D47D9] px-5 py-2.5 font-medium text-[#0D47D9] transition hover:bg-blue-50"
                                        >
                                            Browse More Courses
                                        </button>
                                    </div>

                                    {/* Course count */}
                                    <div className="mb-6">
                                        <p className="text-sm font-medium text-slate-500">
                                            {enrollments.length}{" "}
                                            {enrollments.length === 1 ? "course" : "courses"} enrolled
                                        </p>
                                    </div>

                                    {/* Course cards */}
                                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                                        {enrollments.map((course) => (
                                            <EnrollmentCard course={course} />
                                        ))}

                                    </div>
                                </div>

                            )
                }
            </div>
        </>
    );
};

export default MyCourses;