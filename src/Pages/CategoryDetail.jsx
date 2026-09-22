import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiBookOpen, FiEdit2, FiPlus, FiChevronRight, FiClock, FiLayers, } from "react-icons/fi";
import { AuthContext } from "../Context/AuthContext";
import { CourseContext } from "../Context/CourseContext";
import { CategoryContext } from "../Context/CourseCategoryContext";

export const CategoryDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { auth } = useContext(AuthContext);
    const { categories, loading: categoryLoading } = useContext(CategoryContext);
    const { courses, loading: courseLoading } = useContext(CourseContext);

    const user = auth?.user || auth;
    const isAdmin = user?.role?.toLowerCase() === "admin";
    const category = useMemo(
        () => {
            if (!categories || !id) return null; return categories.find((item) => String(item.id) === String(id));
        }, [categories, id]);

    const categoryCourses = useMemo(
        () => {
            if (!courses || !category) return [];
            return courses.filter((course) => {
                const courseCategoryId = course.categoryId || course.category?.id || course.categoryID;
                return String(courseCategoryId) === String(category.id);
            });
        }, [courses, category]);

    const loading = categoryLoading || courseLoading;

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl animate-pulse">
                    <div className="mb-8 h-5 w-32 rounded bg-slate-200" />
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                        <div className="h-4 w-28 rounded bg-slate-200" />
                        <div className="mt-4 h-9 w-72 rounded bg-slate-200" />
                        <div className="mt-4 h-4 w-full max-w-2xl rounded bg-slate-200" />
                    </div>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[1, 2, 3, 4].map(
                            (item) => (
                                <div key={item} className="overflow-hidden rounded-2xl border border-slate-200 bg-white" >
                                    <div className="h-44 bg-slate-200" />
                                    <div className="space-y-3 p-5">
                                        <div className="h-4 w-24 rounded bg-slate-200" />
                                        <div className="h-5 w-full rounded bg-slate-200" />
                                        <div className="h-4 w-3/4 rounded bg-slate-200" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>);

    }

    if (!category) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
                <div className="text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                        <FiLayers className="text-2xl text-slate-400" />
                    </div>

                    <h1 className="mt-5 text-xl font-bold text-slate-900"> Category not found </h1>
                    <p className="mt-2 text-sm text-slate-500"> The category you're looking for doesn't exist. </p>
                    <button onClick={() => navigate(-1)} className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-[#0D47D9] px-5 text-sm font-semibold text-white transition hover:bg-[#0b3dbb]" >
                        <FiArrowLeft /> Go Back
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Back */}
                <button onClick={() => navigate(-1)} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#0D47D9]" >
                    <FiArrowLeft /> Back
                </button>

                {/* Category Header */}
                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <div className="h-1.5 bg-[#0D47D9]" />
                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-3xl">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0D47D9]">
                                    <FiLayers /> Category
                                </div>
                                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"> {category.name} </h1>
                                <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base"> {category.description || `Explore courses available in ${category.name} and build practical skills at your own pace.`} </p>
                                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                                    <FiBookOpen /> <span> {categoryCourses.length}{" "} {categoryCourses.length === 1 ? "course" : "courses"} </span>
                                </div>
                            </div>

                            {/* Admin Action */}
                            {isAdmin && (
                                <div className="flex shrink-0 flex-wrap gap-3">
                                    <button onClick={() => navigate(`/admin/add-course?categoryId=${category.id}`)} className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#0D47D9] px-4 text-sm font-semibold text-white transition hover:bg-[#0b3dbb]" >
                                        <FiPlus /> Add Course
                                    </button>

                                    <button onClick={() => navigate(`/admin/edit-category/${category.id}`)} className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50" >
                                        <FiEdit2 /> Edit Category
                                    </button>
                                </div>)
                            }
                        </div>
                    </div>

                </section>

                {/* Courses */}
                <section className="mt-8">
                    <div className="mb-5 flex items-end justify-between gap-4">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D47D9]"> Courses </p>
                            <h2 className="mt-1 text-xl font-bold text-slate-900"> {isAdmin ? "Manage category courses" : "Explore courses"} </h2>
                        </div>

                        <span className="text-sm text-slate-500"> {categoryCourses.length} available </span>
                    </div> {categoryCourses.length === 0 ?
                        (

                            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                                    <FiBookOpen className="text-2xl text-slate-400" />
                                </div>
                                <h3 className="mt-4 text-base font-semibold text-slate-900"> No courses in this category </h3>
                                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                    {isAdmin ? "There are no courses here yet. Add a course to start building this category." : "There are currently no courses available in this category."}
                                </p>

                                {isAdmin && (
                                    <button onClick={() => navigate(`/admin/add-course?categoryId=${category.id}`)} className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-[#0D47D9] px-4 text-sm font-semibold text-white hover:bg-[#0b3dbb]" >
                                        <FiPlus /> Add Course
                                    </button>)
                                }
                            </div>
                        )
                        :
                        (
                            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> {categoryCourses.map((course) => (
                                <CourseCardTwo key={course.id} course={course} isAdmin={isAdmin} onStudentClick={() => navigate(`/dashboard/courses/${course.id}`)} onAdminClick={() => navigate(`/admin/course/${course.id}`)} />))}
                            </div>
                        )
                    }
                </section>
            </div>
        </main>
    );
};

const CourseCardTwo = ({ course, isAdmin, onStudentClick, onAdminClick, }) => {
    const thumbnail = course.thumbnail || course.imageUrl || course.image || null;
    const lessons = course.lessons || course.lessonCount || [];

    const lessonCount = Array.isArray(lessons) ? lessons.length : typeof lessons === "number" ? lessons : null;

    const duration = course.duration || course.totalDuration || null;

    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">
            {/* Thumbnail */}
            <div className="relative h-44 overflow-hidden bg-slate-100">
                {thumbnail ?
                    (
                        <img src={thumbnail} alt={course.title || "Course"} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                    )
                    :
                    (
                        <div className="flex h-full items-center justify-center">
                            <FiBookOpen className="text-4xl text-slate-300" />
                        </div>
                    )
                }
                <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
                    {isAdmin ? "Course" : "Available"}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="line-clamp-2 min-h-[48px] text-base font-bold leading-6 text-slate-900"> {course.title || course.name || "Untitled Course"} </h3>
                <p className="mt-2 line-clamp-2 min-h-[40px] text-sm leading-5 text-slate-500"> {course.description || "Learn practical skills through this course."} </p>

                {/* Metadata */}
                {(lessonCount !== null || duration) && (
                    <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                        {lessonCount !== null && (
                            <span className="inline-flex items-center gap-1.5">
                                <FiBookOpen /> {lessonCount}{" "} {lessonCount === 1 ? "lesson" : "lessons"}
                            </span>)
                        }
                        {duration && (
                            <span className="inline-flex items-center gap-1.5"> <FiClock /> {duration} </span>
                        )}
                    </div>
                )}

                {/* Action */}
                <button onClick={isAdmin ? onAdminClick : onStudentClick} className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 transition hover:border-[#0D47D9] hover:bg-blue-50 hover:text-[#0D47D9]" >
                    {isAdmin ? "Manage Course" : "View Course"} <FiChevronRight />\
                </button>
            </div>
        </article>
    );
};