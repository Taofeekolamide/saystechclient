import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaEdit, FaEye, FaFilter, FaPlus, FaSearch, FaTrash, FaUsers, FaTimes, } from "react-icons/fa";

import { CourseContext } from "../../Context/CourseContext";
import { CategoryContext } from "../../Context/CourseCategoryContext";
import { AuthContext } from "../../Context/AuthContext";
import CoursecardOne from "../../Components/CourseCardOne";

const Courses = () => {
    const navigate = useNavigate();

    const { courses, loading, loadCourses } = useContext(CourseContext);

    const { categories = [] } = useContext(CategoryContext);

    const { auth } = useContext(AuthContext);

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    /*
     * If your AuthContext stores the user differently,
     * only this line needs to be adjusted.
     */
    const user = auth?.user || auth;

    const isAdmin = user?.role?.toLowerCase() === "admin";

    const filteredCourses = useMemo(() => {
        const searchValue = search.trim().toLowerCase();

        return courses.filter((course) => {
            const matchesSearch =
                !searchValue ||
                course.title?.toLowerCase().includes(searchValue) ||
                course.description?.toLowerCase().includes(searchValue) ||
                course.category?.toLowerCase().includes(searchValue);

            const matchesCategory =
                !selectedCategory ||
                course.category?.toLowerCase() ===
                selectedCategory.toLowerCase();

            return matchesSearch && matchesCategory;
        });
    }, [courses, search, selectedCategory]);

    const clearFilters = () => {
        setSearch("");
        setSelectedCategory("");
    };

    const handleDelete = async (course) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${course.title}" ? `
        );

        if (!confirmed) return;

    };

    return (
        <div className="min-h-screen bg-[#f8fafc]">


            {/* HEADER */}

            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
                    <div className="
                        flex flex-col gap-6
                        lg:flex-row lg:items-end
                        lg:justify-between
                    ">
                        <div className="max-w-2xl">
                            <div className="
                                mb-3 flex items-center gap-2
                                text-sm font-semibold
                                text-[#0D47D9]
                            ">
                                <span className="
                                    h-2 w-2 rounded-full
                                    bg-[#0D47D9]
                                " />

                                {isAdmin
                                    ? "COURSE MANAGEMENT"
                                    : "LEARNING LIBRARY"}
                            </div>

                            <h1 className="
                                text-3xl font-bold tracking-tight
                                text-slate-950 md:text-4xl
                            ">
                                {isAdmin
                                    ? "Manage your courses"
                                    : "Find something worth learning"}
                            </h1>

                            <p className="
                                mt-3 max-w-xl
                                text-sm leading-6 text-slate-500
                                md:text-base
                            ">
                                {isAdmin
                                    ? "Create, organize and maintain the courses available to your learners."
                                    : "Explore practical courses, build useful skills and learn at your own pace."}
                            </p>
                        </div>

                        {isAdmin && (
                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/admin/add-course")
                                }
                                className="
                                    inline-flex h-11
                                    items-center justify-center
                                    gap-2 rounded-lg
                                    bg-[#0D47D9] px-5
                                    text-sm font-semibold text-white
                                    transition hover:bg-[#0b3dbb]
                                    focus:outline-none
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                            >
                                <FaPlus className="text-xs" />
                                Create course
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/*                 SEARCH + FILTERS            */}

            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
                    <div className="flex flex-col gap-3 lg:flex-">

                        {/* Search */}
                        <div className="relative flex-1">
                            <FaSearch className="
                                absolute left-4 top-1/2
                                -translate-y-1/2
                                text-sm text-slate-400
                            " />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder={
                                    isAdmin
                                        ? "Search your courses..."
                                        : "Search courses..."
                                }
                                className="
                                    h-12 w-full
                                    rounded-lg
                                    border border-slate-200
                                    bg-slate-50
                                    pl-11 pr-10
                                    text-sm text-slate-800
                                    placeholder:text-slate-400
                                    outline-none
                                    transition
                                    focus:border-[#0D47D9]
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-blue-50
                                "
                            />

                            {search && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    className="
                                        absolute right-3 top-1/2
                                        -translate-y-1/2
                                        flex h-7 w-7
                                        items-center justify-center
                                        rounded-md
                                        text-slate-400
                                        hover:bg-slate-100
                                        hover:text-slate-600
                                    "
                                >
                                    <FaTimes className="text-xs" />
                                </button>
                            )}
                        </div>

                        {/* Mobile filter */}
                        <button
                            type="button"
                            onClick={() =>
                                setShowFilters(!showFilters)
                            }
                            className="
                                flex h-12 items-center
                                justify-center gap-2
                                rounded-lg
                                border border-slate-200
                                bg-white px-5
                                text-sm font-semibold
                                text-slate-700
                                lg:hidden
                            "
                        >
                            <FaFilter className="text-xs" />
                            Filters
                        </button>

                        {/* Desktop select */}
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                            className="
                                hidden h-12
                                min-w-[210px]
                                rounded-lg
                                border border-slate-200
                                bg-white px-4
                                text-sm text-slate-700
                                outline-none
                                transition
                                focus:border-[#0D47D9]
                                focus:ring-4
                                focus:ring-blue-50
                                lg:block
                            "
                        >
                            <option value="">
                                All categories
                            </option>

                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Mobile categories */}
                    {showFilters && (
                        <div className="
                            mt-4 border-t border-slate-100
                            pt-4 lg:hidden
                        ">
                            <p className="
                                mb-3 text-xs font-semibold
                                uppercase tracking-wider
                                text-slate-400
                            ">
                                Category
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedCategory("")
                                    }
                                    className={`
                                        rounded - full px - 4 py - 2
text - xs font - semibold
                                        ${selectedCategory === ""
                                            ? "bg-[#0D47D9] text-white"
                                            : "bg-slate-100 text-slate-600"
                                        }
`}
                                >
                                    All
                                </button>

                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        type="button"
                                        onClick={() =>
                                            setSelectedCategory(
                                                category.name
                                            )
                                        }
                                        className={`
rounded - full px - 4 py - 2
text - xs font - semibold
                                            ${selectedCategory ===
                                                category.name
                                                ? "bg-[#0D47D9] text-white"
                                                : "bg-slate-100 text-slate-600"
                                            }
`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Desktop category navigation */}
                    <div className="
                        mt-5 hidden items-center
                        gap-2 overflow-x-auto
                        pb-1 lg:flex
                    ">
                        <button
                            type="button"
                            onClick={() =>
                                setSelectedCategory("")
                            }
                            className={`
whitespace - nowrap
rounded - full px - 4 py - 2
text - xs font - semibold
transition
                                ${selectedCategory === ""
                                    ? "bg-[#0D47D9] text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }
`}
                        >
                            All courses
                        </button>

                        {categories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() =>
                                    setSelectedCategory(
                                        category.name
                                    )
                                }
                                className={`
whitespace - nowrap
rounded - full px - 4 py - 2
text - xs font - semibold
transition
                                    ${selectedCategory ===
                                        category.name
                                        ? "bg-[#0D47D9] text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }
`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/*COURSE CONTENT */}
            <main className="
                mx-auto max-w-7xl
                px-5 py-8 md:px-8 md:py-10
            ">
                {/* Results header */}
                <div className="
                    mb-6 flex flex-col gap-3
                    sm:flex-row sm:items-center
                    sm:justify-between
                ">
                    <div>
                        <h2 className="
                            text-xl font-bold
                            text-slate-950
                        ">
                            {isAdmin
                                ? "Course catalog"
                                : "Available courses"}
                        </h2>

                        <p className="
                            mt-1 text-sm text-slate-500
                        ">
                            {filteredCourses.length}{" "}
                            {filteredCourses.length === 1
                                ? "course"
                                : "courses"}{" "}
                            available
                        </p>
                    </div>

                    {(search || selectedCategory) && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="
                                self-start text-sm
                                font-semibold
                                text-[#0D47D9]
                                hover:underline
                                sm:self-auto
                            "
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                {/* Loading */}
                {loading && (
                    <div className="
                        grid grid-cols-1 gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    ">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="
                                    overflow-hidden rounded-xl
                                    border border-slate-200
                                    bg-white
                                "
                            >
                                <div className="
                                    h-48 animate-pulse
                                    bg-slate-200
                                " />

                                <div className="p-5">
                                    <div className="
                                        h-4 w-24
                                        animate-pulse
                                        rounded bg-slate-200
                                    " />

                                    <div className="
                                        mt-4 h-5 w-full
                                        animate-pulse
                                        rounded bg-slate-200
                                    " />

                                    <div className="
                                        mt-2 h-5 w-3/4
                                        animate-pulse
                                        rounded bg-slate-200
                                    " />

                                    <div className="
                                        mt-6 h-10 w-full
                                        animate-pulse
                                        rounded bg-slate-200
                                    " />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Empty */}
                {!loading && filteredCourses.length === 0 && (
                    <div className="
                        flex min-h-[360px]
                        flex-col items-center
                        justify-center
                        rounded-xl
                        border border-dashed
                        border-slate-300
                        bg-white px-6 text-center
                    ">
                        <div className="
                            flex h-14 w-14
                            items-center justify-center
                            rounded-full
                            bg-slate-100
                        ">
                            <FaBookOpen className="
                                text-xl text-slate-400
                            " />
                        </div>

                        <h3 className="
                            mt-5 text-lg font-bold
                            text-slate-900
                        ">
                            No courses found
                        </h3>

                        <p className="
                            mt-2 max-w-md
                            text-sm leading-6
                            text-slate-500
                        ">
                            We couldn't find any courses matching
                            your current search or category.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                clearFilters();
                                loadCourses();
                            }}
                            className="
                                mt-5 rounded-lg
                                bg-[#0D47D9]
                                px-5 py-2.5
                                text-sm font-semibold
                                text-white
                                transition
                                hover:bg-[#0b3dbb]
                            "
                        >
                            Reset search
                        </button>
                    </div>
                )}

                {/* Courses */}
                {!loading && filteredCourses.length > 0 && (
                    <div className="
                        grid grid-cols-1 gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    ">
                        {filteredCourses.map((course) => (
                            <CoursecardOne course={course} />
                        ))}
                    </div >
                )}
            </main >
        </div >
    );
};

export default Courses;
