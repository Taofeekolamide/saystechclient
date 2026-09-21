import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaArrowRight,
    FaBookOpen,
    FaClock,
    FaPlay,
} from "react-icons/fa";

const ContinueLearning = ({ enrollments = [] }) => {
    const navigate = useNavigate();

    const getCourse = (enrollment) => {
        return enrollment?.course || enrollment;
    };

    const getProgress = (enrollment) => {
        const value =
            enrollment?.progressPercentage ??
            enrollment?.progress ??
            enrollment?.course?.progress ??
            0;

        const progress = Number(value);

        if (Number.isNaN(progress)) {
            return 0;
        }

        return Math.min(100, Math.max(0, progress));
    };

    const course = useMemo(() => {
        if (!enrollments.length) {
            return null;
        }

        const inProgress = enrollments.find((enrollment) => {
            const progress = getProgress(enrollment);

            return progress > 0 && progress < 100;
        });

        return inProgress || enrollments[0];
    }, [enrollments]);

    if (!course) {
        return (
            <section className="mb-10">

                <div className="mb-4">
                    <h2 className="text-lg font-bold text-slate-900">
                        Continue Learning
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Pick up where you left off.
                    </p>
                </div>

                <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <FaBookOpen size={23} />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-slate-900">
                        Nothing to continue yet
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Enroll in a course and your learning progress will
                        appear here.
                    </p>

                    <Link
                        to="/dashboard/courses"
                        className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-[#0D47D9] px-4 text-sm font-semibold text-white transition hover:bg-[#0b3dbb]"
                    >
                        Browse Courses
                        <FaArrowRight size={11} />
                    </Link>

                </div>

            </section>
        );
    }

    const currentCourse = getCourse(course);

    const progress = getProgress(course);

    const lessons =
        currentCourse?.lessons?.length ??
        currentCourse?.lessonCount ??
        0;

    const duration =
        currentCourse?.duration ||
        currentCourse?.totalDuration ||
        "Self-paced";

    const category =
        typeof currentCourse?.category === "object"
            ? currentCourse?.category?.name
            : currentCourse?.category;

    return (
        <section className="mb-10">

            <div className="mb-4 flex items-end justify-between">

                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        Continue Learning
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Pick up where you left off.
                    </p>
                </div>

                <Link
                    to="/dashboard/my-courses"
                    className="hidden items-center gap-2 text-sm font-semibold text-[#0D47D9] hover:underline sm:flex"
                >
                    View all
                    <FaArrowRight size={10} />
                </Link>

            </div>


            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                <div className="grid lg:grid-cols-[320px_1fr]">

                    {/* Thumbnail */}
                    <div className="relative h-56 bg-slate-100 lg:h-full">

                        {currentCourse?.thumbnail ? (
                            <img
                                src={currentCourse.thumbnail}
                                alt={currentCourse.title}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-slate-300">
                                <FaBookOpen size={42} />
                            </div>
                        )}

                    </div>


                    {/* Content */}
                    <div className="p-6 sm:p-7">

                        <div className="flex flex-wrap items-center gap-2">

                            {category && (
                                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0D47D9]">
                                    {category}
                                </span>
                            )}

                            {currentCourse?.level && (
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                    {currentCourse.level}
                                </span>
                            )}

                        </div>


                        <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
                            {currentCourse?.title || "Untitled Course"}
                        </h3>


                        {currentCourse?.description && (
                            <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-6 text-slate-500">
                                {currentCourse.description}
                            </p>
                        )}


                        <div className="mt-5 flex flex-wrap gap-5 text-xs text-slate-500">

                            <span className="flex items-center gap-2">
                                <FaBookOpen className="text-slate-400" />
                                {lessons} lessons
                            </span>

                            <span className="flex items-center gap-2">
                                <FaClock className="text-slate-400" />
                                {duration}
                            </span>

                        </div>


                        {/* Progress */}
                        <div className="mt-6">

                            <div className="mb-2 flex items-center justify-between">

                                <span className="text-xs font-medium text-slate-500">
                                    Course progress
                                </span>

                                <span className="text-xs font-bold text-slate-700">
                                    {progress}%
                                </span>

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="h-full rounded-full bg-[#0D47D9] transition-all"
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />
                            </div>

                        </div>


                        <div className="mt-6 flex flex-wrap gap-3">

                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        `/dashboard/learn/${currentCourse?.id}`
                                    )
                                }
                                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#0D47D9] px-5 text-sm font-semibold text-white transition hover:bg-[#0b3dbb]"
                            >
                                <FaPlay size={11} />

                                {progress > 0
                                    ? "Continue Learning"
                                    : "Start Learning"}
                            </button>

                            <Link
                                to={`/dashboard/courses/${currentCourse?.id}`}
                                className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                Course Details
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContinueLearning;