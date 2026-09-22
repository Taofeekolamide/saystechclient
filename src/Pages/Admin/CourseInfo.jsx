import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack, BiEdit, BiPlus, BiBookOpen, BiTime, BiPlayCircle, BiTrash, BiUser } from "react-icons/bi";

import { getCourse } from "../../Services/CourseService";
import { AlertContext } from "../../Context/AlertContext";


const CourseInfo = () => {

    const { showAlert } = useContext(AlertContext);

    const { courseId } = useParams();
    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getCourseById(courseId)
    }, [courseId])

    const getCourseById = async (id) => {
        setLoading(true);
        try {

            const response = await getCourse(id);
            setCourse(response.data)

        } catch (error) {

            showAlert(error.message, "error");
            
        } finally {
            setLoading(false);
        }

    };


    useEffect(() => {

        if (courseId) {
            getCourse(courseId);
        }

    }, [courseId]);


    if (loading) {

        return (

            <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">

                <div className="text-center">

                    <div className="w-12 h-12 border-4 border-gray-200 border-t-[#0D47D9] rounded-full animate-spin mx-auto" />

                    <p className="mt-4 text-sm text-gray-500">
                        Loading course...
                    </p>

                </div>

            </div>

        );

    }


    if (!course) {

        return (

            <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center">

                <div className="text-center">

                    <h2 className="text-2xl font-bold text-gray-900">
                        Course not found
                    </h2>

                    <Link
                        to="/admin/all-course"
                        className="inline-flex items-center gap-2 mt-4 text-[#0D47D9] font-semibold"
                    >
                        <BiArrowBack />
                        Back to courses
                    </Link>

                </div>

            </div>

        );

    }


    return (

        <div className="min-h-screen bg-[#f5f7fb]">

            <header className="bg-white border-b border-gray-100">

                <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">


                        {/* LEFT */}

                        <div className="flex items-center gap-4">

                            <Link to="/admin/all-course"
                                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0D47D9] hover:border-[#0D47D9] transition"
                            >
                                <BiArrowBack />
                            </Link>

                            <div>

                                <p className="text-xs font-bold uppercase tracking-widest text-[#27B6F8]">
                                    Course Management
                                </p>

                                <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                                    Course Details
                                </h1>

                            </div>

                        </div>


                        {/* ACTIONS */}

                        <div className="flex items-center gap-3">

                            <Link to={`/edit-course/${course.id}`}
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold hover:bg-gray-50 transition"
                            >
                                <BiEdit /> Edit Course
                            </Link>

                            <Link to={`/add-lesson/${course.id}`}
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5] transition"
                            >
                                <BiPlus className="text-xl" /> Add Lesson
                            </Link>

                        </div>

                    </div>

                </div>

            </header>


            {/* =====================================================
                MAIN
            ====================================================== */}

            <main className="max-w-7xl mx-auto px-6 md:px-8 py-8">

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-7">

                    <div className="grid lg:grid-cols-[380px_1fr]">


                        {/* IMAGE */}

                        <div className="h-64 lg:h-full min-h-[300px] bg-gray-100">

                            {course.thumbnail ? (

                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />

                            ) : (

                                <div className="w-full h-full flex items-center justify-center text-gray-300">

                                    <BiBookOpen className="text-7xl" />

                                </div>

                            )}

                        </div>


                        {/* INFO */}

                        <div className="p-7 md:p-9">

                            {course.category && (

                                <span className="px-3 py-1.5 rounded-full bg-blue-50 text-[#0D47D9] text-xs font-bold">
                                    {course.category}
                                </span>

                            )}

                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                {course.title}
                            </h2>


                            <p className="text-gray-500 mt-4 leading-7 max-w-3xl">
                                {course.description}
                            </p>


                            {/* STATS */}

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-7">


                                <div className="p-4 rounded-2xl bg-gray-50">

                                    <BiBookOpen className="text-[#0D47D9] text-xl mb-2" />

                                    <p className="text-xs text-gray-400">
                                        Lessons
                                    </p>

                                    <p className="text-xl font-bold text-gray-900">
                                        {course.lessons?.length || 0}
                                    </p>

                                </div>


                                <div className="p-4 rounded-2xl bg-gray-50">

                                    <BiTime className="text-[#0D47D9] text-xl mb-2" />

                                    <p className="text-xs text-gray-400">
                                        Duration
                                    </p>

                                    <p className="text-xl font-bold text-gray-900">
                                        {course.durationInHours || 0}h
                                    </p>

                                </div>


                                <div className="p-4 rounded-2xl bg-gray-50">

                                    <BiUser className="text-[#0D47D9] text-xl mb-2" />

                                    <p className="text-xs text-gray-400">
                                        Students
                                    </p>

                                    <p className="text-xl font-bold text-gray-900">
                                        {course.enrollmentCount || 0}
                                    </p>

                                </div>


                                <div className="p-4 rounded-2xl bg-gray-50">

                                    <p className="text-[#0D47D9] text-xl font-bold mb-1">
                                        ₦
                                    </p>

                                    <p className="text-xs text-gray-400">
                                        Price
                                    </p>

                                    <p className="text-xl font-bold text-gray-900">
                                        {Number(course.price || 0).toLocaleString()}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="grid lg:grid-cols-[1fr_320px] gap-7">

                    <section className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                        {/* HEADER */}

                        <div className="px-6 md:px-7 py-6 border-b border-gray-100 flex items-center justify-between">

                            <div>

                                <h2 className="text-xl font-bold text-gray-900">
                                    Course Lessons
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Manage the content students will learn.
                                </p>

                            </div>


                            <Link to={`/admin/add-lesson/${course.id}`}
                                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 text-[#0D47D9] font-semibold hover:bg-blue-100 transition"
                            >
                                <BiPlus />
                                Add Lesson
                            </Link>

                        </div>



                        {/* LESSON LIST */}

                        <div className="divide-y divide-gray-100">


                            {course.lessons?.length > 0 ? (

                                course.lessons.map((lesson, index) => (

                                    <div key={lesson.id} className="px-6 md:px-7 py-5 flex items-center gap-4 hover:bg-gray-50 transition group"                                    >

                                        {/* NUMBER */}

                                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0D47D9] flex items-center justify-center font-bold flex-shrink-0">
                                            {index + 1}
                                        </div>


                                        {/* ICON */}

                                        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">

                                            <BiPlayCircle className="text-xl" />

                                        </div>

                                        {/* INFO */}

                                        <div className="flex-1 min-w-0">

                                            <h3 className="font-semibold text-gray-900 truncate capitalize">
                                                {lesson.title}
                                            </h3>

                                            {/* <span className="text-xs text-gray-400">
                                                {lesson.durationInMinutes || 0} min
                                            </span> */}

                                        </div>

                                    </div>

                                ))

                            ) : (

                                <div className="py-16 px-6 text-center">

                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0D47D9] flex items-center justify-center text-3xl mx-auto mb-4">
                                        <BiBookOpen />
                                    </div>

                                    <h3 className="font-bold text-gray-900">
                                        No lessons yet
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Start building your course by adding your first lesson.
                                    </p>

                                    <Link to={`/admin/add-lesson/${course.id}`}
                                        className="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold"
                                    >
                                        <BiPlus />
                                        Add First Lesson
                                    </Link>

                                </div>

                            )}

                        </div>

                    </section>



                    {/* =================================================
                        SIDEBAR
                    ================================================== */}

                    <aside className="space-y-7">

                        {/* COURSE DETAILS */}

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

                            <h3 className="font-bold text-gray-900 mb-5">
                                Course Information
                            </h3>

                            <div className="space-y-5">

                                <div>

                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Level
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1">
                                        {course.level || "Not specified"}
                                    </p>

                                </div>


                                <div>

                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Category
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1 capitalize">
                                        {course.category || "Not specified"}
                                    </p>

                                </div>


                                <div>

                                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                                        Duration
                                    </p>

                                    <p className="font-semibold text-gray-800 mt-1">
                                        {course.durationInHours || 0} hours
                                    </p>

                                </div>

                            </div>

                        </div>



                        {/* DESCRIPTION */}

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

                            <h3 className="font-bold text-gray-900 mb-4">
                                About this course
                            </h3>

                            <p className="text-sm text-gray-500 leading-7">
                                {course.description ||
                                    "No course description has been added yet."}
                            </p>

                        </div>



                        {/* DANGER ZONE */}

                        <div className="bg-white rounded-3xl border border-red-100 shadow-sm p-6">

                            <div className="flex items-center gap-3">

                                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                                    <BiTrash />
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-900">
                                        Course Actions
                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">
                                        Manage this course.
                                    </p>

                                </div>

                            </div>


                            <button
                                type="button"
                                className="w-full mt-5 py-3 rounded-xl border border-red-200 text-red-500 font-semibold hover:bg-red-50 transition"
                            >
                                Delete Course
                            </button>

                        </div>

                    </aside>

                </div>

            </main>

        </div>
    );
};

export default CourseInfo;