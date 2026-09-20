import { useContext } from "react"
import { FaBookOpen, FaUsers } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { PaymentContext } from "../Context/PaymentContext"

const CoursecardOne = ({ course, isAdmin = false }) => {

    const navigate = useNavigate()

    return (
        <article
            key={course.id}
            className="
                                    group overflow-hidden
                                    rounded-xl
                                    border border-slate-200
                                    bg-white
                                    transition duration-200
                                    hover:-translate-y-1
                                    hover:border-slate-300
                                    hover:shadow-xl
                                "
        >
            {/* Thumbnail */}
            <div className="
                                    relative h-48
                                    overflow-hidden
                                    bg-slate-100
                                ">
                {course.thumbnail ?
                    (
                        <img src={course.thumbnail} alt={course.title}
                            className="
                                                h-full w-full
                                                object-cover
                                                transition duration-500
                                                group-hover:scale-105
                                            "
                        />
                    )
                    :
                    (
                        <div className="
                                            flex h-full
                                            items-center justify-center
                                            bg-slate-100
                                        ">
                            <FaBookOpen className="
                                                text-4xl
                                                text-slate-300
                                            " />
                        </div>
                    )}

                {/* Category */}
                {course.category && (
                    <span className="
                                            absolute left-4 top-4
                                            rounded-md
                                            bg-white px-3 py-1.5
                                            text-[11px]
                                            font-bold uppercase
                                            tracking-wide
                                            text-[#0D47D9]
                                            shadow-sm
                                        ">
                        {course.category}
                    </span>
                )}
            </div>

            {/* Card body */}
            <div className="p-5">
                <h3 className="
                                        min-h-[52px]
                                        text-base font-bold
                                        leading-6
                                        text-slate-900
                                        transition
                                        group-hover:text-[#0D47D9]
                                    ">
                    {course.title}
                </h3>

                {course.description && (
                    <p className="
                                            mt-2 line-clamp-2
                                            text-sm leading-5
                                            text-slate-500
                                        ">
                        {course.description}
                    </p>
                )}

                {/* Course metadata */}
                <div className="
                                        mt-5 flex
                                        items-center gap-4
                                        border-t
                                        border-slate-100
                                        pt-4
                                        text-xs
                                        text-slate-500
                                    ">
                    <span className="
                                            flex items-center gap-1.5
                                        ">
                        <FaBookOpen className="
                                                text-slate-400
                                            " />
                        {course.lessons?.length || 0}{" "} lessons
                    </span>

                    <span className="flex items-center gap-1.5">
                        <FaUsers className="text-slate-400" />{course.enrollmentCount || 0}
                    </span>
                </div>

                {/* ADMIN ACTIONS */}
                {isAdmin ?
                    (
                        <div className="mt-5 flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => navigate(`course/${course.id} `)}
                                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-[#0D47D9] px-3 text-xs font-semibold text-white transition hover:bg-[#0b3dbb]">
                                <FaEye className="text-xs" /> Manage
                            </button>

                            <button type="button"
                                onClick={() => navigate(`/course/${course.id}/edit`)}
                                title="Edit course"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"    >
                                <FaEdit />
                            </button >

                            <button
                                type="button"
                                //onClick={() => handleDelete(course)}
                                title="Delete course"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-100 text-red-500 transition hover:bg-red-50">
                                <FaTrash />
                            </button>
                        </div >
                    )
                    :
                    (
                        /* STUDENT ACTION */
                        <button type="button"
                            onClick={() => navigate(`courses/${course.id}`)}
                            className="
                                                mt-5 flex h-10 w-full
                                                items-center
                                                justify-center
                                                gap-2 rounded-lg
                                                border
                                                border-[#0D47D9]
                                                bg-[#0D47D9]
                                                px-4
                                                text-sm font-semibold
                                                text-white
                                                transition
                                                hover:bg-[#0b3dbb]
                                            "
                        >
                            View course <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                        </button>
                    )}
            </div >
        </article >
    )
}

export default CoursecardOne