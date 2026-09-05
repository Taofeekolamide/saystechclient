import { useContext, useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBookOpen, FaSearch, FaGraduationCap } from "react-icons/fa";

import { getCategory } from "../../Services/CourseCategoryService";
import CourseCardTwo from "../../Components/CourseCardTwo";
import { getCoursesByCategory } from "../../Services/CourseService";
import { AlertContext } from "../../Context/AlertContext";


const CategoryDetail = () => {

    const { showAlert } = useContext(AlertContext);

    const { id } = useParams();
    const navigate = useNavigate();

    const [category, setCategory] = useState(null);
    const [courses, setCourses] = useState([])

    const [search, setSearch] = useState("");
    const [categoryLoading, setCategoryLoading] = useState(false)

    useEffect(() => {
        getCategoryById(id)
    }, [id]);


    // GET CATEGORY
    const getCategoryById = async (id) => {
        setCategoryLoading(true);

        try {

            const response = await getCategory(id);
            setCategory(response.data)
            const result = await getCoursesByCategory(id)
            setCourses(result.data || [])

        } catch (error) {

            showAlert(error.message, "error");
            
        } finally {
            setCategoryLoading(false);
        }
    };


    const filteredCourses = useMemo(() => {
        return courses.filter(course => course.title?.toLowerCase().includes(search.toLowerCase()));
    }, [category, search, courses]);


    if (categoryLoading) {

        return (
            <div className="flex min-h-[60vh] items-center justify-center">

                <div className="text-center">

                    <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#0D47D9] " />

                    <p className="text-slate-500">
                        Loading category...
                    </p>

                </div>

            </div>
        );

    }


    if (!category) {

        return (
            <div className="flex min-h-[60vh] items-center justify-center">

                <div className="text-center">

                    <h2 className="mb-2 text-2xl font-bold text-slate-800">
                        Category Not Found
                    </h2>

                    <p className="mb-6 text-slate-500">
                        The category you're looking for doesn't exist.
                    </p>

                    <button onClick={() => navigate("/dashboard/courses")} className="rounded-xl bg-[#0D47D9] px-5 py-3 font-medium text-white hover:bg-blue-700" >
                        Browse Courses
                    </button>

                </div>

            </div>
        );

    }


    return (

        <div className="space-y-8">

            {/* Back Button */}

            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-[#0D47D9] ">

                <FaArrowLeft />  Back

            </button>


            {/* Category Hero */}

            <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] ">

                <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_280px] md:p-12 ">

                    {/* Information */}

                    <div className="text-white">

                        <div className=" mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur ">

                            <FaGraduationCap /> Course Category

                        </div>


                        <h1 className="mb-4 text-3xl font-bold md:text-5xl capitalize ">
                            {category.name}

                        </h1>


                        <p className="max-w-2xl text-base leading-7 text-blue-50 md:text-lg">
                            {category.description}
                        </p>


                        <div className=" mt-7 flex flex-wrap gap-6 text-sm text-blue-50">

                            <div className="flex items-center gap-2">

                                <FaBookOpen />

                                <span>{category?.courseCount} Courses</span>

                            </div>

                            <div className="flex items-center gap-2">

                                <FaGraduationCap />

                                <span>Learn at your own pace</span>

                            </div>

                        </div>

                    </div>


                    {/* Category Image */}

                    <div className="hidden overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl md:block">

                        <img src={category.imageUrl} alt={category.name} className="h-64 w-full object-cover" />

                    </div>

                </div>

            </section>


            {/* Courses Header */}

            <section>

                <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between ">

                    <div>

                        <h2 className=" text-2xl font-bold text-slate-800 capitalize ">

                            Courses in {category.name}

                        </h2>

                        <p className="mt-1 text-sm text-slate-500">

                            Explore courses and start learning.

                        </p>

                    </div>


                    {/* Search */}

                    <div className="relative w-full md:w-80">

                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search courses..."
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                py-3
                                pl-11
                                pr-4
                                text-sm
                                outline-none
                                transition
                                focus:border-[#0D47D9]
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        />

                    </div>

                </div>


                {/* Courses */}

                {filteredCourses.length === 0 ?
                    (
                        <>
                            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center ">

                                <FaBookOpen className="mx-auto mb-4 text-4xl text-slate-300" />

                                <h3 className="mb-2 text-lg font-bold text-slate-700">
                                    No Courses Found
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Try another search term.
                                </p>

                            </div>
                        </>

                    )
                    :
                    (

                        <div className=" grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                            {filteredCourses.map(course => (
                                <CourseCardTwo course={course} />
                            ))}

                        </div>

                    )
                }

            </section >

        </div >

    );

};

export default CategoryDetail;