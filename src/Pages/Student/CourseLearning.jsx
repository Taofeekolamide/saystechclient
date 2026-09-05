import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEnrollmentByCourse } from "../../Services/EnrollmentService";
import { FaChevronRight } from "react-icons/fa";
import { completeLesson, startLesson, updateProgress } from "../../Services/LessonProgressService";
import { BiLock } from "react-icons/bi";
import { AlertContext } from "../../Context/AlertContext";

const CourseLearning = () => {

    const { showAlert } = useContext(AlertContext);

    const { id } = useParams();
    const nav = useNavigate()

    const [course, setCourse] = useState({});
    const [openLessonId, setOpenLessonId] = useState(null);
    const [loading, setLoading] = useState(true);

    const verificationStarted = useRef(false);
    const lastSavedTimes = useRef({});

    useEffect(() => {
        // Prevent the same callback from creating twice
        if (verificationStarted.current) {
            return;
        }
        verificationStarted.current = true;

        loadCourse();
    }, []);

    const loadCourse = async () => {

        try {

            const response = await getEnrollmentByCourse(id);
            setCourse(response.data);

        } catch (error) {
            showAlert(error.message, "error");
            nav("/dashboard/my-courses")
        } finally {
            setLoading(false);
        }
    };

    const handleLoadedMetadata = (e, lesson) => {
        e.currentTarget.currentTime = lesson.watchedSeconds || 0;
    };

    const handleVideoEnded = async (lesson) => {
        await completeLesson(lesson.id);
        await loadCourse()
    };

    const handleTimeUpdate = async (e, lesson) => {
        const currentTime = Math.floor(e.currentTarget.currentTime);

        const lastSaved = lastSavedTimes.current[lesson.id] || 0;

        if (currentTime - lastSaved >= 10) {
            lastSavedTimes.current[lesson.id] = currentTime;

            await updateProgress(lesson.id, currentTime);
        }
    };


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-slate-500">
                    Loading course...
                </p>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Course not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen">

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

                    <div className="flex items-center justify-between">

                        <div className="min-w-0">
                            <h1 className="text-lg sm:text-xl font-bold text-slate-900 truncate capitalize">
                                {course.courseTitle}
                            </h1>

                            <p className="text-xs sm:text-sm text-slate-500 capitalize">
                                {course.category}
                            </p>
                        </div>

                        <span className="hidden sm:block text-sm text-slate-500">
                            Lesson {course.lessons?.length}
                        </span>

                    </div>

                </div>
            </header>


            {/* ================= COURSE CONTENT ================= */}
            <div className="w-full max-w-6xl mx-auto mt-5">

                <div className="rounded-2xl shadow-sm overflow-hidden bg-white">

                    {/* HEADER */}
                    <div className="p-5 sm:p-7 border-b border-slate-100">

                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                            Course Content
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            {course.lessons?.length || 0} lessons
                        </p>

                    </div>


                    {/* LESSONS */}
                    <div className="p-3 sm:p-5">

                        {course.lessons?.map((lesson, index) => {

                            const isOpen = openLessonId === lesson.id;

                            return (
                                <div key={lesson.id} className="border border-slate-200 rounded-2xl mb-3 overflow-hidden" >

                                    {/* ================= LESSON HEADER ================= */}
                                    <button disabled={index !== 0 && course.lessons[index - 1].isCompleted === false} type="button" onClick={async () => {
                                        setOpenLessonId(isOpen ? null : lesson.id);
                                        await startLesson(lesson?.id);
                                    }}
                                        className={`w-full p-4 disabled:opacity/50 sm:p-5 flex items-center gap-4 text-left transition ${isOpen
                                            ? "bg-blue-50"
                                            : "bg-white hover:bg-slate-50"
                                            }  `}>

                                        {/* LESSON NUMBER */}
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${isOpen
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-100 text-slate-600"
                                            }`} >
                                            {index + 1}
                                        </div>


                                        {/* TITLE + DURATION */}
                                        <div className="flex-1 min-w-0">

                                            <h3 className="font-semibold text-slate-900 text-sm sm:text-base capitalize">
                                                {lesson.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                                {lesson.durationInMinutes} mins
                                            </p>

                                        </div>


                                        {/* ARROW */}
                                        <span className={`text-slate-400 text-lg transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} >
                                            {index !== 0 && course.lessons[index - 1].isCompleted === false ? <BiLock /> : <FaChevronRight />}
                                        </span>

                                    </button>


                                    {/* ================= ACCORDION CONTENT ================= */}
                                    {isOpen && (

                                        <div className="p-4 sm:p-6 bg-white transition-transform duration-300">

                                            {/* VIDEO */}
                                            {lesson.videoUrl && (<div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg mb-5 ">
                                                <video
                                                    onLoadedMetadata={(e) => handleLoadedMetadata(e, lesson)}
                                                    src={lesson.videoUrl}
                                                    onContextMenu={(e) => e.preventDefault()}
                                                    controls
                                                    onTimeUpdate={(e) => handleTimeUpdate(e, lesson)}
                                                    onEnded={() => handleVideoEnded(lesson)}
                                                    className="w-full h-full object-contain" controlsList="nodownload" />
                                            </div>
                                            )}

                                            {/* LESSON INFORMATION */}
                                            <div>

                                                <div className=" flex items-center justify-between gap-3 mb-3">
                                                    <div>

                                                        <p className="text-sm font-medium text-blue-600 ">
                                                            Lesson {index + 1}
                                                        </p>

                                                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 capitalize">
                                                            {lesson.title}
                                                        </h4>

                                                    </div>


                                                    <span className=" text-sm text-slate-400 whitespace-nowrap ">
                                                        {lesson.durationInMinutes} mins
                                                    </span>

                                                </div>


                                                {/* DESCRIPTION */}
                                                <p className=" text-slate-600 leading-7 text-sm sm:text-base   ">
                                                    {lesson.description}
                                                </p>

                                            </div>

                                        </div>
                                    )}

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </div>
    );

};

export default CourseLearning;