import { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../../Context/CourseContext";
import { CategoryContext } from "../../Context/CourseCategoryContext";

const Courses = () => {

    const { courses } = useContext(CourseContext)
    const { categories } = useContext(CategoryContext)

    return (
        <div className="min-h-screen bg-[#f6f8fc] p-6 md:p-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Courses</h1>

                    <p className="text-gray-500 mt-1">
                        Create, organize and manage your courses.
                    </p>
                </div>

                <Link to="/admin/add-course"
                    className="px-5 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5]" >
                    + Create Course
                </Link>

            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <input placeholder="Search courses..."
                        className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                    />

                    <select className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none capitalize">
                        <option>All Categories</option>
                        {categories.map((item) => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>

                </div>

            </div>

            {/* Courses */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {courses.map(course => (

                    <div key={course.id}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
                    >

                        <div className="flex flex-col sm:flex-row">

                            <img src={course.thumbnail} alt={course.title} className="w-full sm:w-52 h-48 sm:h-auto object-cover" />

                            <div className="p-5 flex-1">

                                <span className="text-xs font-bold text-[#0D47D9] bg-blue-50 px-3 py-1 rounded-full capitalize">
                                    {course.category}
                                </span>

                                <h2 className="text-xl font-bold mt-4 text-gray-900 capitalize">
                                    {course.title}
                                </h2>

                                <div className="flex gap-5 mt-4 text-sm text-gray-500">

                                    <span>📚 {course.lessons.length} Lessons</span>

                                    <span>👥 {course.enrollmentCount} Students</span>

                                </div>

                                <div className="mt-5 flex gap-3">

                                    <Link to={`/admin/course/${course.id}`}
                                        className="px-4 py-2 rounded-lg bg-[#0D47D9] text-white text-sm font-semibold"
                                    >
                                        Manage
                                    </Link>

                                    <button className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold">
                                        Edit
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Courses;