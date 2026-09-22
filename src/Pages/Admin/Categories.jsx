import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../Context/CourseCategoryContext";
import { BiSearch } from "react-icons/bi";

const Categories = () => {
    const { categories } = useContext(CategoryContext)

    return (
        <div className="min-h-screen bg-[#f6f8fc] p-6 md:p-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Categories
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage the learning categories available on Saystech.
                    </p>
                </div>

                <Link to="/add-category"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5] transition"
                >
                    <span className="text-xl">+</span>
                    Add Category
                </Link>

            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-8">

                <div className="relative">

                    <input
                        type="text"
                        placeholder="Search categories..."
                        className="w-full px-4 py-3 pl-11 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-[#27B6F8]"
                    />

                    <span className="absolute left-4 top-3.5 text-gray-400">
                        <BiSearch />
                    </span>

                </div>

            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">

                {categories.map((category) => (

                    <div
                        key={category.id}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                    >

                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">

                            <img src={category.imageUrl} alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 text-[#0D47D9] text-xs font-bold">
                                {category.courseCount} Courses
                            </span>

                        </div>

                        {/* Content */}
                        <div className="p-5">

                            <div className="flex justify-between items-start">

                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 capitalize">
                                        {category.name}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-2 leading-6">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">

                                <Link
                                    to={`/category/${category.id}`}
                                    className="text-[#0D47D9] font-semibold text-sm hover:underline"
                                >
                                    View Courses
                                </Link>

                                <button className="text-sm font-medium text-gray-500 hover:text-red-500">
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Categories;