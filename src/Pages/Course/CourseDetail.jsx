import { useContext, useEffect, useState } from "react";
import { FaPlay, FaClock, FaBookOpen, FaUser, FaGraduationCap, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { getCourse } from "../../Services/CourseService";
import { PaymentContext } from "../../Context/PaymentContext";


const CourseDetail = () => {

    const { showAlert } = useContext(PaymentContext);

    const { id } = useParams();

    const { startPay, loading } = useContext(PaymentContext)

    const [course, setCourse] = useState(null)

    useEffect(() => {
        getCourseById(id)
    }, [id])

    const getCourseById = async (id) => {

        try {

            const response = await getCourse(id);
            setCourse(response.data)

        } catch (error) {

            showAlert(error.message, "error");

        }

    };

    return (

        <div className="min-h-screen">

            {/* Back */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/dashboard/courses"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0D47D9] transition"
                >
                    <FaArrowLeft /> Back to Courses

                </Link>

            </div>


            {/* Hero */}

            <section className="bg-slate-900 text-white mt-6 rounded-md">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    <div className="grid lg:grid-cols-3 gap-10 items-center">

                        {/* Course information */}

                        <div className="lg:col-span-2">

                            <div className="flex flex-wrap gap-3 mb-5">

                                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium capitalize">

                                    {course?.category}

                                </span>

                                <span className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium">

                                    {course?.level}

                                </span>

                            </div>


                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 capitalize">

                                {course?.title}

                            </h1>


                            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-7">

                                {course?.description}

                            </p>


                            {/* Rating */}

                            <div className="flex flex-wrap items-center gap-6 text-sm">

                                <div className="flex items-center gap-2">

                                    <FaUser />

                                    <span>
                                        {course?.enrollmentCount} students
                                    </span>

                                </div>


                                <div className="flex items-center gap-2">

                                    <FaBookOpen />

                                    <span>
                                        {course?.lessons.length} lessons
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Course image */}

                        <div className="lg:col-span-1">

                            <div className="rounded-2xl overflow-hidden shadow-2xl">

                                <img src={course?.thumbnail} alt={course?.title} className="w-full h-64 object-cover"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Main */}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <div className="grid lg:grid-cols-3 gap-8">


                    <div className="lg:col-span-2 space-y-8">

                        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">

                            <h2 className="text-2xl font-bold text-slate-800 mb-6">

                                What You'll Learn

                            </h2>


                            <div className="grid md:grid-cols-2 gap-4">

                                {course?.lessons.map(
                                    (point, index) => (

                                        <div key={index} className="flex items-start gap-3">

                                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />

                                            <p className="text-slate-600 capitalize">
                                                {point?.title}
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        </section>


                        <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">

                            <h2 className="text-2xl font-bold text-slate-800 mb-5">

                                About This Course

                            </h2>

                            <p className="text-slate-600 leading-8">

                                {course?.description}

                                {" "}

                                This course is designed to take you through
                                practical concepts step by step. You will work
                                with real examples and gradually build your
                                understanding of modern software development.

                            </p>

                        </section>

                    </div>

                    <div>

                        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 lg:sticky lg:top-6">

                            <div className="mb-6">

                                <p className="text-3xl font-bold text-slate-900">

                                    ₦{course?.price.toLocaleString()}

                                </p>

                            </div>


                            <button disabled={loading} onClick={() => startPay(course.id)} className="
                                    w-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2
                                    hover:opacity-90 transition
                                "
                            >

                                <FaPlay />

                                Enroll Now

                            </button>


                            <p className="text-center text-sm text-slate-400 mt-4">

                                Start learning today

                            </p>




                            <div className="border-t border-slate-200 mt-6 pt-6 space-y-5">

                                <div className="flex justify-between">

                                    <div className="flex items-center gap-3 text-slate-500">

                                        <FaBookOpen /> Lessons

                                    </div>

                                    <span className="font-medium text-slate-800">

                                        {course?.lessons?.length}

                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <div className="flex items-center gap-3 text-slate-500">

                                        <FaGraduationCap /> Level

                                    </div>

                                    <span className="font-medium text-slate-800">

                                        {course?.level}

                                    </span>

                                </div>


                                <div className="flex justify-between">

                                    <div className="flex items-center gap-3 text-slate-500">

                                        <FaUser /> Students

                                    </div>

                                    <span className="font-medium text-slate-800">

                                        {course?.enrollmentCount}

                                    </span>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </main>

        </div>

    );

};


export default CourseDetail;