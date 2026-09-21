import { useNavigate } from "react-router-dom";
import { FiBookOpen, FiClock, FiArrowRight, FiPlayCircle, } from "react-icons/fi";

const EnrollmentCard = ({ course: enrollment }) => {
    const navigate = useNavigate();

    if (!enrollment) return null;

    const course = enrollment.course || enrollment;

    const courseId =
        course.id ||
        enrollment.courseId ||
        enrollment.course?.id;

    const title =
        course.title ||
        course.name ||
        "Untitled Course";

    const description =
        course.description ||
        "Continue learning and build your skills with this course.";

    const thumbnail =
        course.thumbnail ||
        course.imageUrl ||
        course.image ||
        null;

    const lessons =
        course.lessons ||
        course.lessonCount ||
        [];

    const lessonCount = Array.isArray(lessons)
        ? lessons.length
        : typeof lessons === "number"
            ? lessons
            : null;

    const handleContinue = () => {
        if (!courseId) return;

        navigate(`/learn/ ${courseId} `);
    };

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden bg-slate-100">
                {thumbnail ? (
                    <img
                        src={thumbnail}
                        alt={title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100">
                        <FiBookOpen
                            size={42}
                            className="text-slate-300"
                        />
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Enrolled badge */}
                <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0D47D9] shadow-sm backdrop-blur">
                        <FiPlayCircle size={13} />
                        Enrolled
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-slate-900 transition group-hover:text-[#0D47D9]">
                    {title}
                </h3>

                <p className="mt-2 line-clamp-2 min-h-[3rem] text-sm leading-6 text-slate-500">
                    {description}
                </p>

                {/* Course information */}
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-500">
                    {lessonCount !== null && (
                        <div className="flex items-center gap-1.5">
                            <FiBookOpen size={15} />
                            <span>
                                {lessonCount}{" "}
                                {lessonCount === 1
                                    ? "lesson"
                                    : "lessons"}
                            </span>
                        </div>
                    )}
                </div>

                {/* Continue button */}
                <button
                    type="button"
                    onClick={handleContinue}
                    disabled={!courseId}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D47D9] px-4 py-3 font-semibold text-white transition hover:bg-[#0b3dbb] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <FiPlayCircle size={18} />
                    Continue Learning
                    <FiArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5"
                    />
                </button>
            </div>
        </article>
    );
};

export default EnrollmentCard;