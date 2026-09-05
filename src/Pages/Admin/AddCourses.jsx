import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../Context/CourseCategoryContext";
import { BiCamera, BiBookOpen, BiLayer, BiBulb } from "react-icons/bi";
import { CourseContext } from "../../Context/CourseContext";

const AddCourse = () => {

    const { loading, addCourse, course, setCourse } = useContext(CourseContext);
    const { categories } = useContext(CategoryContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setCourse({ ...course, thumbnail: file });
    };


    return (
        <div className="min-h-screen bg-[#f5f7fb]">

            <div className="bg-white border-b border-gray-100">

                <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">

                    <div className="flex items-center gap-4">

                        <Link to="/admin/all-course"
                            className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0D47D9] hover:border-[#0D47D9] transition"
                        >
                            ←
                        </Link>

                        <div>

                            <p className="text-xs font-bold uppercase tracking-widest text-[#27B6F8]">
                                Course Management
                            </p>

                            <h1 className="text-2xl font-bold text-gray-900">
                                Create Course
                            </h1>

                        </div>

                    </div>

                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">

                <form onSubmit={addCourse} className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-7"                >

                    <div className="space-y-7">

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-7 py-6 border-b border-gray-100">

                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0D47D9] flex items-center justify-center text-xl">
                                        <BiBookOpen />
                                    </div>

                                    <div>

                                        <h2 className="text-lg font-bold text-gray-900">
                                            Basic Information
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Tell students what this course is about.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="p-7">

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* TITLE */}

                                    <div className="md:col-span-2">

                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>

                                        <input type="text" name="title" value={course?.title || ""} onChange={handleChange} placeholder="e.g. ASP.NET Core Web API"
                                            className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50/50 outline-none transition focus:bg-white focus:border-[#27B6F8] focus:ring-4 focus:ring-[#27B6F8]/10"
                                        />

                                        <p className="text-xs text-gray-400 mt-2">
                                            Choose a clear and memorable title.
                                        </p>

                                    </div>


                                    {/* CATEGORY */}

                                    <div>

                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>

                                        <select name="categoryId" value={course.categoryId || ""} onChange={handleChange}
                                            className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50/50 outline-none capitalize focus:bg-white focus:border-[#27B6F8] focus:ring-4 focus:ring-[#27B6F8]/10"
                                        >

                                            <option value="">Select category</option>
                                            {categories.map(category => (<option key={category.id} value={category.id}>{category.name}</option>))}

                                        </select>

                                    </div>


                                    {/* LEVEL */}

                                    <div>

                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Course Level
                                        </label>

                                        <select name="level" value={course.level || ""} onChange={handleChange}
                                            className="w-full h-14 px-4 rounded-2xl border border-gray-200 bg-gray-50/50 outline-none focus:bg-white focus:border-[#27B6F8] focus:ring-4 focus:ring-[#27B6F8]/10"
                                        >

                                            <option value="">
                                                Select level
                                            </option>

                                            <option value="Beginner">
                                                Beginner
                                            </option>

                                            <option value="Intermediate">
                                                Intermediate
                                            </option>

                                            <option value="Advanced">
                                                Advanced
                                            </option>

                                        </select>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-7 py-6 border-b border-gray-100">

                                <h2 className="text-lg font-bold text-gray-900">
                                    Course Description
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Give students a clear understanding of the course.
                                </p>

                            </div>

                            <div className="p-7 space-y-6">

                                {/* SHORT DESCRIPTION */}

                                <div>

                                    <div className="flex justify-between items-center mb-2">

                                        <label className="text-sm font-semibold text-gray-700">
                                            Short Description
                                        </label>

                                        <span className="text-xs text-gray-400">
                                            {course.shortDescription?.length || 0}/200
                                        </span>

                                    </div>

                                    <textarea name="shortDescription" value={course.shortDescription || ""} onChange={handleChange}
                                        rows="3" maxLength={200} placeholder="A short description students will see before opening the course..."
                                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 outline-none resize-none focus:bg-white focus:border-[#27B6F8] focus:ring-4 focus:ring-[#27B6F8]/10"
                                    />

                                </div>


                                {/* FULL DESCRIPTION */}

                                <div>

                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Description
                                    </label>

                                    <textarea name="description" value={course.description || ""} onChange={handleChange}
                                        rows="9" placeholder="Describe the course in detail..."
                                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 bg-gray-50/50 outline-none resize-none leading-7 focus:bg-white focus:border-[#27B6F8] focus:ring-4 focus:ring-[#27B6F8]/10"
                                    />

                                </div>

                            </div>

                        </div>


                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-7 py-6 border-b border-gray-100">

                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-[#27B6F8] flex items-center justify-center text-xl">
                                        <BiLayer />
                                    </div>

                                    <div>

                                        <h2 className="text-lg font-bold text-gray-900">
                                            Course Details
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Set your course pricing and duration.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="p-7">

                                <div className="grid md:grid-cols-2 gap-5">

                                    {/* PRICE */}

                                    <div className="bg-gray-50 rounded-2xl p-5">

                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            Price
                                        </label>

                                        <div className="relative">

                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500">
                                                ₦
                                            </span>

                                            <input type="number" name="price" value={course.price || ""} onChange={handleChange}
                                                min="0" placeholder="50,000"
                                                className="w-full h-13 pl-10 pr-4 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#27B6F8]"
                                            />

                                        </div>

                                    </div>


                                    {/* DURATION */}

                                    <div className="bg-gray-50 rounded-2xl p-5">

                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            Duration
                                        </label>

                                        <div className="relative">

                                            <input type="number" name="durationInHours" value={course.durationInHours || ""} onChange={handleChange}
                                                min="1" placeholder="40"
                                                className="w-full h-13 px-4 pr-20 rounded-xl border border-gray-200 bg-white outline-none focus:border-[#27B6F8]"
                                            />

                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                                hours
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="space-y-7">

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-6 py-5 border-b border-gray-100">

                                <h2 className="font-bold text-gray-900">
                                    Course Thumbnail
                                </h2>

                                <p className="text-xs text-gray-500 mt-1">
                                    This image represents your course.
                                </p>

                            </div>


                            <div className="p-6">

                                <label className="block cursor-pointer">

                                    <div className="aspect-video rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 overflow-hidden hover:border-[#27B6F8] transition">

                                        {course.thumbnail ? (

                                            <div className="relative w-full h-full group">

                                                <img src={URL.createObjectURL(course.thumbnail)} className="w-full h-full object-cover" alt="Course Preview" />

                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                                                    <span className="bg-white px-4 py-2 rounded-xl text-sm font-semibold">
                                                        Change Image
                                                    </span>

                                                </div>

                                            </div>

                                        ) : (

                                            <div className="h-full flex flex-col items-center justify-center text-center">

                                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D47D9] flex items-center justify-center text-2xl mb-3">

                                                    <BiCamera />

                                                </div>

                                                <p className="font-semibold text-gray-700">
                                                    Choose Course Image
                                                </p>

                                                <p className="text-xs text-gray-400 mt-1">
                                                    JPG, PNG or WebP
                                                </p>

                                            </div>

                                        )}

                                    </div>

                                    <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageChange} className="hidden" />

                                </label>


                                {course.thumbnail && (

                                    <div className="mt-4">

                                        <p className="text-xs text-gray-400">
                                            Selected image
                                        </p>

                                        <p className="text-sm font-semibold text-gray-700 truncate mt-1">
                                            {course.thumbnail.name}
                                        </p>

                                    </div>

                                )}

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

                            <div className="px-6 py-5 border-b border-gray-100">

                                <h2 className="font-bold text-gray-900">
                                    Course Summary
                                </h2>

                            </div>


                            <div className="p-6 space-y-5">


                                <div className="flex justify-between items-center">

                                    <span className="text-sm text-gray-500">
                                        Price
                                    </span>

                                    <span className="font-bold text-gray-900">

                                        {course.price ? `₦${Number(course.price).toLocaleString()}` : "—"}

                                    </span>

                                </div>


                                <div className="flex justify-between items-center">

                                    <span className="text-sm text-gray-500">
                                        Duration
                                    </span>

                                    <span className="font-semibold">

                                        {course.durationInHours ? `${course.durationInHours} hrs` : "—"}

                                    </span>

                                </div>


                                <div className="flex justify-between items-center">

                                    <span className="text-sm text-gray-500">
                                        Level
                                    </span>

                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0D47D9] text-xs font-bold">

                                        {course.level || "Not selected"}

                                    </span>

                                </div>


                                <div className="flex justify-between items-center gap-4">

                                    <span className="text-sm text-gray-500">
                                        Category
                                    </span>

                                    <span className="text-sm font-semibold text-gray-800 truncate">

                                        {categories.find(category => category.id === course.categoryId)?.name || "Not selected"}

                                    </span>

                                </div>


                            </div>

                        </div>

                        <div className="rounded-3xl bg-gradient-to-br from-[#0D47D9] to-[#27B6F8] p-6 text-white">

                            <div className="text-2xl mb-4">
                                <BiBulb />
                            </div>

                            <h3 className="font-bold text-lg">
                                Build a great course
                            </h3>

                            <p className="text-sm text-blue-50 leading-6 mt-2">
                                Use a high-quality thumbnail, a clear title and a detailed description. You can add lessons after creating the course.
                            </p>

                        </div>

                    </div>

                    <div className="mt-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row justify-between items-center gap-4">

                        <p className="text-sm text-gray-500">
                            Review your course information before creating it.
                        </p>


                        <div className="flex gap-3 w-full sm:w-auto">

                            <Link to="/admin/all-course"
                                className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-gray-200 text-center font-semibold text-gray-600 hover:bg-gray-50 transition"
                            >
                                Cancel
                            </Link>

                            <button type="submit"
                                className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-[#0D47D9] text-white font-semibold hover:bg-[#0a3bb5] transition disabled:opacity-50"
                            >
                                {loading ? "Creating..." : "Create Course"}
                            </button>

                        </div>

                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddCourse;