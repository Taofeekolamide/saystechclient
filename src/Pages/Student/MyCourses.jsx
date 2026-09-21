import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

import { EnrollmentContext } from "../../Context/EnrollmentContext";
import { EnrollmentCard } from "../../Components/EnrollmentCard";

const MyCourses = () => {
    const { enrollments = [], loading } = useContext(EnrollmentContext);
    const navigate = useNavigate();

    // Loading state
    if (loading) {
        return (
            <main className="min-h-screen">
                <div className="mx-auto max-w-7xl">
                    {/* Header skeleton */}
                    <div className="mb-10">
                        <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />
                        <div className="mt-3 h-4 w-72 animate-pulse rounded bg-slate-200" />
                    </div>

                    {/* Course skeletons */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="overflow-hidden rounded-2xl border border-slate-100 bg-white"
                            >
                                <div className="h-48 animate-pulse bg-slate-200" />

                                <div className="space-y-3 p-5">
                                    <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />
                                    <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                                    <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    // Empty state
    if (enrollments.length === 0) {
        return (
            <main className="min-h-screen">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            My Courses
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Courses you enroll in will appear here.
                        </p>
                    </div>

                    {/* Empty state */}
                    <div className="flex min-h-[450px] items-center justify-center rounded-3xl border border-slate-200 bg-white px-6">
                        <div className="max-w-md text-center">
                            {/* Icon */}
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                                <FiBookOpen
                                    size={36}
                                    className="text-[#0D47D9]"
                                />
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-slate-900">
                                No courses yet
                            </h2>

                            <p className="mt-3 leading-7 text-slate-500">
                                You haven't enrolled in any courses yet. Explore
                                our courses and find something you would like to
                                learn.
                            </p>

                            <button
                                type="button"
                                onClick={() => navigate("/dashboard/courses")}
                                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0D47D9] px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#0b3dbb]"
                            >
                                Browse Courses
                                <FiArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    // Courses state
    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#0D47D9]">
                            Learning
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            My Courses
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Continue learning from where you stopped.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => navigate("/dashboard/courses")}
                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#0D47D9] px-5 py-2.5 font-semibold text-[#0D47D9] transition hover:bg-blue-50"
                    >
                        Browse More Courses
                        <FiArrowRight size={17} />
                    </button>
                </div>

                {/* Summary */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-500">
                        {enrollments.length}{" "}
                        {enrollments.length === 1
                            ? "course"
                            : "courses"}{" "}
                        enrolled
                    </p>
                </div>

                {/* Courses */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {enrollments.map((enrollment) => (
                        <EnrollmentCard key={enrollment.id || enrollment.courseId || enrollment.course?.id} course={enrollment} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default MyCourses;
