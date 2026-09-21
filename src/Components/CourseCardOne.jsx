/* COURSE CARD */

import { FaArrowRight, FaBookOpen, FaEye, FaTrash } from "react-icons/fa";

export const CourseCardOne = ({ course, isAdmin }) => {
    const getCategoryName = (course) => {
        if (!course?.category) {
            return null;
        }

        if (typeof course.category === "object") {
            return course.category?.name;
        }

        return course.category;
    };

    const getLessonsCount = (course) => {
        return (
            course?.lessons?.length ??
            course?.lessonCount ??
            0
        );
    };

    const getDuration = (course) => {
        return (
            course?.duration ||
            course?.totalDuration ||
            null
        );
    };

    const category = getCategoryName(course);
    const lessons = getLessonsCount(course);
    const duration = getDuration(course);

    return (
        <article
            className="
                    group overflow-hidden
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:shadow-lg
                "
        >

            {/* Thumbnail */}
            <div className="
                    relative h-52
                    overflow-hidden
                    bg-slate-100
                ">

                {course.thumbnail ? (
                    <img src={course.thumbnail} alt={course.title}
                        className="
                                h-full w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                    />
                ) : (
                    <div className="
                            flex h-full w-full
                            items-center justify-center
                            bg-slate-100
                        ">
                        <FaBookOpen
                            className="text-3xl text-slate-300"
                        />
                    </div>
                )}

                {/* Image overlay */}
                <div className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/30
                        via-transparent
                        to-transparent
                    " />


                {/* Category */}
                {category && (
                    <div className="
                            absolute left-4 top-4
                        ">
                        <span className="
                                inline-flex
                                rounded-full
                                bg-white/95
                                px-3 py-1.5
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-wide
                                text-slate-700
                                shadow-sm
                            ">
                            {category}
                        </span>
                    </div>
                )}


                {/* Admin actions */}
                {isAdmin && (
                    <>

                        <div className="
                            absolute right-3 top-3
                            flex items-center gap-1
                        ">

                            <button
                                type="button"
                                title="Edit course"
                                onClick={() => navigate(`/admin/course/${course.id}/edit`)}
                                className=" flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-slate-600 shadow-sm transition hover:bg-white hover:text-[#0D47D9]"    >
                                <FaEdit size={12} />
                            </button >

                            <button
                                type="button"
                                title="Delete course"
                                // onClick={() =>
                                //     handleDelete(course)
                                // }
                                className="
                                    flex h-9 w-9
                                    items-center justify-center
                                    rounded-lg
                                    bg-white/95
                                    text-slate-600
                                    shadow-sm
                                    transition
                                    hover:bg-white
                                    hover:text-red-600
                                "
                            >
                                <FaTrash size={11} />
                            </button>

                        </div >

                    </>
                )}

            </div >


            {/* Content */}
            < div className="p-5" >

                {/* Title */}
                < h3 className="min-h-[52px] line-clamp-2 text-[17px] font-bold leading-6 text-slate-900 ">
                    {course.title}
                </h3 >


                {/* Description */}
                {
                    course.description && (
                        <p className="
                            mt-2
                            line-clamp-2
                            text-sm
                            leading-5
                            text-slate-500
                        ">
                            {course.description}
                        </p>
                    )
                }


                {/* Metadata */}
                <div className="
                        mt-5
                        flex items-center
                        gap-4
                        border-t
                        border-slate-100
                        pt-4
                        text-xs
                        text-slate-500
                    ">

                    <span className="
                            flex items-center gap-1.5
                        ">
                        <FaBookOpen
                            className="text-slate-400"
                        />

                        {lessons}{" "}
                        {lessons === 1
                            ? "lesson"
                            : "lessons"}
                    </span>


                    {duration && (
                        <>
                            <span className="
                                    h-1 w-1
                                    rounded-full
                                    bg-slate-300
                                " />

                            <span>
                                {duration}
                            </span>
                        </>
                    )}

                </div>


                {/* Action */}
                <div className="mt-5">

                    {isAdmin ? (

                        <button
                            type="button"
                            onClick={() =>
                                navigate(`/admin/course/${course.id}`)
                            }
                            className="
                                    flex h-11 w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    bg-slate-900
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-slate-800
                                "
                        >
                            <FaEye size={13} />
                            Manage Course
                        </button>

                    ) : (

                        <button
                            type="button"
                            onClick={() => navigate(`/courses/${course.id}`)}
                            className="
                                    flex h-11 w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    bg-[#0D47D9]
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-[#0b3dbb]
                                "
                        >
                            View Course
                            <FaArrowRight size={11} />
                        </button>

                    )}

                </div>

            </div >

        </article >
    );
};