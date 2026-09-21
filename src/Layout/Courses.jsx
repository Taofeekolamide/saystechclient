import { Link, useNavigate } from "react-router-dom";
import {
    FaArrowRight,
    FaBookOpen,
    FaCheckCircle,
    FaPlay,
} from "react-icons/fa";

const MyCourses = ({ enrollments = [] }) => {
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

    const getLessons = (course) => {
        return (
            course?.lessons?.length ??
            course?.lessonCount ??
            0
        );
    };

    return (
        <section className="mb-10">

            <div className="mb-4 flex items-end justify-between">

                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        My Courses
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Courses you are currently learning.
                    </p>
                </div>

                {enrollments.length > 0 && (
                    <Link
                        to="/dashboard/my-courses"
                        className="flex items-center gap-2 text-sm font-semibold text-[#0D47D9] hover:underline"
                    >
                        View all
                        <FaArrowRight size={10} />
                    </Link>
                )}

            </div>


            {enrollments.length === 0 ? (

                <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <FaBookOpen size={23} />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-slate-900">
                        You have no courses yet
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Browse the course catalog and enroll in something
                        you would like to learn.
                    </p>

                    <Link
                        to="/dashboard/courses"
                        className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-[#0D47D9] px-4 text-sm font-semibold text-white transition hover:bg-[#0b3dbb]"
                    >
                        Browse Courses
                        <FaArrowRight size={11} />
                    </Link>

                </div>

            ) : (

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {enrollments.slice(0, 3).map((enrollment, index) => {

                        const course = getCourse(enrollment);

                        if (!course) {
                            return null;
                        }

                        const progress = getProgress(enrollment);

                        const lessons = getLessons(course);

                        const category =
                            typeof course.category === "object"
                                ? course.category?.name
                                : course.category;

                        return (
                            <article
                                key={enrollment.id || course.id || index}
                                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
                            >

                                {/* Thumbnail */}
                                <div className="relative h-44 bg-slate-100">

                                    {course.thumbnail ?
                                        (
                                            <img
                                                src={course.thumbnail}
                                                alt={course.title}
                                                className="h-full w-full object-cover"
                                            />
                                        )
                                        :
                                        (
                                            <div className="flex h-full items-center justify-center text-slate-300">
                                                <FaBookOpen size={36} />
                                            </div>
                                        )
                                    }

                                    {progress >= 100 && (
                                        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-sm">
                                            <FaCheckCircle size={11} />
                                            Completed
                                        </div>
                                    )}

                                </div>


                                {/* Body */}
                                <div className="p-5">

                                    {category && (
                                        <p className="text-xs font-semibold uppercase tracking-wide text-[#0D47D9]">
                                            {category}
                                        </p>
                                    )}

                                    <h3 className="mt-2 line-clamp-2 min-h-[48px] text-base font-bold leading-6 text-slate-900">
                                        {course.title || "Untitled Course"}
                                    </h3>


                                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">

                                        <span className="flex items-center gap-1.5">
                                            <FaBookOpen /> {lessons} lessons
                                        </span>

                                        <span className="font-semibold text-slate-700">
                                            {progress}%
                                        </span>

                                    </div>


                                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                                        <div
                                            className="h-full rounded-full bg-[#0D47D9]"
                                            style={{ width: `${progress}%`, }}
                                        />
                                    </div>


                                    <button
                                        type="button"
                                        onClick={() => navigate(`/dashboard/learn/${course.id}`)}

                                        className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 transition hover:border-[#0D47D9] hover:text-[#0D47D9]"
                                    >
                                        <FaPlay size={10} />

                                        {progress >= 100
                                            ? "Review Course"
                                            : progress > 0
                                                ? "Continue Learning"
                                                : "Start Learning"}
                                    </button>

                                </div>

                            </article>
                        );
                    })}

                </div>

            )}

        </section>
    );
};

export default MyCourses;