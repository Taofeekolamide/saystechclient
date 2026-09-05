import { useContext, useMemo, useState } from "react";
import { CategoryContext } from "../../Context/CourseCategoryContext";
import { useNavigate } from "react-router-dom";
import { CourseContext } from "../../Context/CourseContext";
import { FaSearch } from "react-icons/fa";
import CoursecardOne from "../../Components/CourseCardOne";


const CourseList = () => {

    const nav = useNavigate()

    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("");

    const { categories } = useContext(CategoryContext)
    const { courses, loading, loadCourses } = useContext(CourseContext)

    

    const filterCourses = useMemo(() => {

        return courses.filter(c => {
            const matchedCat = !selectedCategory || c.category?.toLowerCase().includes(selectedCategory.toLowerCase())
            const matchedName = !search || c.title?.toLowerCase().includes(search.toLowerCase())

            return matchedCat && matchedName
        })

    }, [search, selectedCategory, courses])


    return (

        <div className="space-y-8">

            {/* Hero */}
            <div className="rounded-3xl bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] p-5 lg:p-10 text-white">

                <h1 className="text-4xl font-bold">

                    Explore Our Courses

                </h1>

                <p className="mt-4 max-w-3xl text-blue-100 text-lg">

                    Learn from industry professionals and build practical skills
                    that prepare you for the tech industry.

                </p>

                <div className="relative mt-8 max-w-2xl">

                    <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                    <input placeholder="Search courses..." onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-2xl bg-white py-4 pl-14 pr-5 text-slate-700 outline-none"
                    />

                </div>

            </div>



            {/* Categories */}
            <div>

                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <h2 className="text-xl font-bold text-slate-800">
                            Explore Categories
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Find courses based on your interests
                        </p>
                    </div>

                </div>


                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">

                    {categories.map((category) => (

                        <button key={category?.name} onClick={() => nav(`/dashboard/category/${category.id}`)}
                            className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-slate-200 bg-white text-slate-700 hover:border-blue-200`}>

                            {/* Category Image */}

                            <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-blue-50 transition group-hover:bg-blue-100">

                                <img src={category.imageUrl} alt={category.name} className="h-full w-full object-cover" />

                            </div>


                            {/* Name */}

                            <h3 className={`font-semibold text-slate-800 capitalize`}> {category.name} </h3>

                            {/* Course count */}

                            <p className={`mt-1 text-xs text-slate-400`}>
                                {category?.courseCount} Courses
                            </p>

                            {/* Decorative circle */}

                            <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-white/5" />

                        </button>

                    ))}

                </div>

            </div>


            {/* Categories */}

            <div className="flex flex-wrap gap-3 items-center">

                <button onClick={() => setSelectedCategory("")} className={`whitespace-nowrap rounded-full px-3 py-1 lg:px-5 lg:py-3 font-medium transition ${selectedCategory === ""
                    ? "bg-[#0D47D9] text-white" : "bg-white hover:bg-slate-100"}`}> All </button>

                {categories.map(category => (

                    <button key={category} onClick={() => setSelectedCategory(category.name)}
                        className={`whitespace-nowrap rounded-full px-3 py-1 lg:px-5 lg:py-3 font-medium transition capitalize ${selectedCategory === category.name
                            ? "bg-[#0D47D9] text-white"
                            : "bg-white hover:bg-slate-100"
                            }`}>

                        {category.name}

                    </button>))
                }

            </div>




            {/* Grid */}
            {loading ?
                (
                    <div className="flex min-h-[60vh] items-center justify-center">

                        <div className="text-center">

                            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#0D47D9] " />

                            <p className="text-slate-500">
                                Loading courses...
                            </p>

                        </div>

                    </div>
                )
                : courses.length == 0 ?
                    (
                        <div className="flex min-h-[60vh] items-center justify-center">

                            <div className="text-center">

                                <h2 className="mb-2 text-2xl font-bold text-slate-800">
                                    No Course Found
                                </h2>

                                <p className="mb-6 text-slate-500">
                                    The category you're looking for doesn't exist.
                                </p>

                                <button onClick={loadCourses} className="rounded-xl bg-[#0D47D9] px-5 py-3 font-medium text-white hover:bg-blue-700" >
                                    Refresh
                                </button>

                            </div>

                        </div>
                    )
                    :
                    (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                            {filterCourses.map(course => (
                                <CoursecardOne course={course} />
                            ))}
                        </div>
                    )
            }

        </div>

    );

};

export default CourseList;