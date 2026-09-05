import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiBookOpen, BiVideo, BiTime, BiArrowBack } from "react-icons/bi";
import { LessonContext } from "../../Context/LessonContext";
import { CourseContext } from "../../Context/CourseContext";


const AddLesson = () => {

    const nav = useNavigate();
    const { courseId } = useParams();

    const { lesson, setLesson, addLesson, loading } = useContext(LessonContext);
    const { courses } = useContext(CourseContext)

    const course = courses.find(course => course.id === courseId)

    const handleChange = (e) => {

        setLesson({ ...lesson, courseId: courseId })

        const { name, value, type, checked } = e.target;

        setLesson(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

    };

    const handleVideoChange = (e) => {
        setLesson({ ...lesson, courseId: courseId })

        const file = e.target.files[0];
        if (!file) return;

        setLesson({ ...lesson, videoUrl: file });
    };

    if (!courseId || !course) {
        nav("/admin/all-course")
        return
    }

    return (

        <div className="min-h-screen bg-[#f5f7fb]">

            <div className="bg-white border-b border-gray-100">

                <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-4">

                            <Link to={`/admin/course/${courseId}`}
                                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0D47D9] hover:border-[#0D47D9] transition"
                            >
                                <BiArrowBack />
                            </Link>

                            <div>

                                <p className="text-xs font-bold uppercase tracking-widest text-[#27B6F8]">
                                    Course Management
                                </p>

                                <h1 className="text-2xl font-bold text-gray-900">
                                    Add Lesson
                                </h1>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">

                <form id="lessonForm" onSubmit={addLesson} className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-7">

                    <div className="space-y-7">

                        {/* COURSE */}

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0D47D9] flex items-center justify-center text-xl">
                                    <BiBookOpen />
                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-wider font-bold text-gray-400">
                                        Adding lesson to
                                    </p>

                                    <h2 className="text-lg font-bold text-gray-900 capitalize">
                                        {course?.title || "Course"}
                                    </h2>

                                </div>

                            </div>

                        </div>


                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-7 py-6 border-b border-gray-100">

                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0D47D9] flex items-center justify-center text-xl">
                                        <BiBookOpen />
                                    </div>

                                    <div>

                                        <h2 className="text-lg font-bold">
                                            Lesson Information
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Give your lesson a clear title and description.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="p-7 space-y-6">


                                {/* TITLE */}

                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Lesson Title
                                    </label>

                                    <input type="text" name="title" value={lesson?.title || ""} onChange={handleChange} placeholder="e.g. Introduction to ASP.NET Core"
                                        className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50/50 outline-none focus:bg-white focus:border-[#27B6F8] focus:ring-4 focus:ring-[#27B6F8]/10"
                                        required
                                    />

                                </div>


                                {/* CONTENT */}

                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Lesson Content
                                    </label>

                                    <textarea name="description" value={lesson?.description || ""} onChange={handleChange} rows="14"
                                        placeholder="Write the lesson content here..."
                                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 outline-none resize-none leading-7 focus:bg-white focus:border-[#27B6F8] focus:ring-4 focus:ring-[#27B6F8]/10"
                                        required
                                    />

                                    <p className="text-xs text-gray-400 mt-2">
                                        You can later replace this with a rich text editor.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row justify-between items-center gap-4">

                            <Link to={`/admin/course/${courseId}`} className="text-sm font-semibold text-gray-500 hover:text-[#0D47D9]"                    >
                                Back to course
                            </Link>


                            <div className="flex gap-3 w-full sm:w-auto">

                                <Link to={`/admin/course/${courseId}`}
                                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-gray-200 text-center font-semibold text-gray-600 hover:bg-gray-50"
                                >
                                    Cancel
                                </Link>


                                <button type="submit" disabled={loading}
                                    className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5] transition disabled:opacity-50"
                                >
                                    {loading ? "Creating..." : "Create Lesson"}
                                </button>

                            </div>

                        </div>

                    </div>



                    {/* =================================================
                        RIGHT
                    ================================================== */}

                    <div className="space-y-7">

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-6 py-5 border-b border-gray-100">

                                <h2 className="font-bold text-gray-900">
                                    Course Video
                                </h2>

                                <p className="text-xs text-gray-500 mt-1">
                                    This video represents your course.
                                </p>

                            </div>


                            <div className="p-6">

                                <label className="block cursor-pointer">

                                    <div className="aspect-video rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 overflow-hidden hover:border-[#27B6F8] transition">

                                        {lesson?.videoUrl ? (

                                            <div className="relative w-full h-full group">

                                                <video src={URL.createObjectURL(lesson?.videoUrl)} className="w-full h-full object-cover" alt="Course Preview"></video>

                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                                                    <span className="bg-white px-4 py-2 rounded-xl text-sm font-semibold">
                                                        Change Video
                                                    </span>

                                                </div>

                                            </div>

                                        ) : (

                                            <div className="h-full flex flex-col items-center justify-center text-center">

                                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D47D9] flex items-center justify-center text-2xl mb-3">

                                                    <BiVideo />

                                                </div>

                                                <p className="font-semibold text-gray-700">
                                                    Choose Course Video
                                                </p>

                                                <p className="text-s text-gray-400 mt-1">
                                                    mp4, mov, avi
                                                </p>

                                            </div>

                                        )}

                                    </div>

                                    <input type="file" accept="video/mp4" onChange={handleVideoChange} className="hidden" />

                                </label>


                                {lesson?.videoUrl && (

                                    <div className="mt-4">

                                        <p className="text-xs text-gray-400">
                                            Selected image
                                        </p>

                                        <p className="text-sm font-semibold text-gray-700 truncate mt-1">
                                            {lesson?.videoUrl?.name}
                                        </p>

                                    </div>

                                )}

                            </div>

                        </div>


                        {/* LESSON SETTINGS */}

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-6 py-5 border-b border-gray-100">

                                <h2 className="font-bold text-gray-900">
                                    Lesson Settings
                                </h2>

                                <p className="text-xs text-gray-500 mt-1">
                                    Configure how this lesson appears.
                                </p>

                            </div>


                            <div className="p-6 space-y-6">

                                {/* ORDER */}

                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Lesson Number
                                    </label>

                                    <input type="number" name="order" value={lesson?.order || ""} onChange={handleChange} min="1" placeholder="1"
                                        className="w-full h-13 px-4 rounded-xl border border-gray-200 outline-none focus:border-[#27B6F8]"
                                    />

                                </div>


                                {/* DURATION */}

                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Duration
                                    </label>

                                    <div className="relative">

                                        <BiTime className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                        <input type="number" name="durationInMinutes" dvalue={lesson?.durationInMinutes || ""} onChange={handleChange} min="1" placeholder="30"
                                            className="w-full h-13 pl-12 pr-20 rounded-xl border border-gray-200 outline-none focus:border-[#27B6F8]"
                                        />

                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                            minutes
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* TIP */}

                        <div className="rounded-3xl bg-gradient-to-br from-[#0D47D9] to-[#27B6F8] p-6 text-white">

                            <div className="text-2xl mb-3">
                                💡
                            </div>

                            <h3 className="font-bold text-lg">
                                Make it engaging
                            </h3>

                            <p className="text-sm text-blue-50 leading-6 mt-2">
                                Break your lesson into clear sections, explain concepts simply and give students something practical to work on.
                            </p>

                        </div>

                    </div>

                </form>





            </div>

        </div>
    );
};

export default AddLesson;