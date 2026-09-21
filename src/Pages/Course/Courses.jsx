import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaEdit, FaEye, FaFilter, FaSearch, FaTimes, FaTrash, } from "react-icons/fa";

import { CourseContext } from "../../Context/CourseContext";
import { CategoryContext } from "../../Context/CourseCategoryContext";
import { AuthContext } from "../../Context/AuthContext";

const Courses = () => {
    const navigate = useNavigate();

    const { courses = [], loading, loadCourses, } = useContext(CourseContext);

    const { categories = [], } = useContext(CategoryContext);

    const { auth, } = useContext(AuthContext);

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const user = auth?.user || auth;

    const isAdmin = user?.role?.toLowerCase() === "admin";


    /* FILTER COURSES */

    const filteredCourses = useMemo(() => {
        const searchValue = search.trim().toLowerCase();

        return courses.filter((course) => {
            const categoryName =
                typeof course.category === "object"
                    ? course.category?.name
                    : course.category;

            const matchesSearch =
                !searchValue ||
                course.title
                    ?.toLowerCase()
                    .includes(searchValue) ||
                course.description
                    ?.toLowerCase()
                    .includes(searchValue) ||
                categoryName
                    ?.toLowerCase()
                    .includes(searchValue);

            const matchesCategory =
                !selectedCategory ||
                categoryName?.toLowerCase() ===
                selectedCategory.toLowerCase();

            return (
                matchesSearch &&
                matchesCategory
            );
        });
    }, [courses, search, selectedCategory,]);


    /* HELPERS */

    const clearFilters = () => {
        setSearch("");
        setSelectedCategory("");
    };

    const getCategoryName = (course) => {
        if (!course?.category) {
            return null;
        }

        if (typeof course.category === "object") {
            return course.category?.name;
        }

        return course.category;
    };

    const getLessonsCount = (course) => {
        return (
            course?.lessons?.length ??
            course?.lessonCount ??
            0
        );
    };

    const getDuration = (course) => {
        return (
            course?.duration ||
            course?.totalDuration ||
            null
        );
    };




    /* COURSE CARD */

    const CourseCard = ({ course }) => {
        const category = getCategoryName(course);
        const lessons = getLessonsCount(course);
        const duration = getDuration(course);

        return (
            <article
                className="
                    group overflow-hidden
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    transition-all duration-200
                    hover:-translate-y-1
                    hover:border-slate-300
                    hover:shadow-lg
                "
            >

                {/* Thumbnail */}
                <div className="
                    relative h-52
                    overflow-hidden
                    bg-slate-100
                ">

                    {course.thumbnail ? (
                        <img src={course.thumbnail} alt={course.title}
                            className="
                                h-full w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />
                    ) : (
                        <div className="
                            flex h-full w-full
                            items-center justify-center
                            bg-slate-100
                        ">
                            <FaBookOpen
                                className="text-3xl text-slate-300"
                            />
                        </div>
                    )}

                    {/* Image overlay */}
                    <div className="
                        pointer-events-none
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/30
                        via-transparent
                        to-transparent
                    " />


                    {/* Category */}
                    {category && (
                        <div className="
                            absolute left-4 top-4
                        ">
                            <span className="
                                inline-flex
                                rounded-full
                                bg-white/95
                                px-3 py-1.5
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-wide
                                text-slate-700
                                shadow-sm
                            ">
                                {category}
                            </span>
                        </div>
                    )}


                    {/* Admin actions */}
                    {isAdmin && (
                        <>

                            <div className="
                            absolute right-3 top-3
                            flex items-center gap-1
                        ">

                                <button
                                    type="button"
                                    title="Edit course"
                                    onClick={() => navigate(`/admin/course/${course.id}/edit`)}
                                    className=" flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-slate-600 shadow-sm transition hover:bg-white hover:text-[#0D47D9]"    >
                                    <FaEdit size={12} />
                                </button >

                                <button
                                    type="button"
                                    title="Delete course"
                                    onClick={() =>
                                        handleDelete(course)
                                    }
                                    className="
                                    flex h-9 w-9
                                    items-center justify-center
                                    rounded-lg
                                    bg-white/95
                                    text-slate-600
                                    shadow-sm
                                    transition
                                    hover:bg-white
                                    hover:text-red-600
                                "
                                >
                                    <FaTrash size={11} />
                                </button>

                            </div >

                        </>
                    )}

                </div >


                {/* Content */}
                < div className="p-5" >

                    {/* Title */}
                    < h3 className="min-h-[52px] line-clamp-2 text-[17px] font-bold leading-6 text-slate-900 ">
                        {course.title}
                    </h3 >


                    {/* Description */}
                    {
                        course.description && (
                            <p className="
                            mt-2
                            line-clamp-2
                            text-sm
                            leading-5
                            text-slate-500
                        ">
                                {course.description}
                            </p>
                        )
                    }


                    {/* Metadata */}
                    <div className="
                        mt-5
                        flex items-center
                        gap-4
                        border-t
                        border-slate-100
                        pt-4
                        text-xs
                        text-slate-500
                    ">

                        <span className="
                            flex items-center gap-1.5
                        ">
                            <FaBookOpen
                                className="text-slate-400"
                            />

                            {lessons}{" "}
                            {lessons === 1
                                ? "lesson"
                                : "lessons"}
                        </span>


                        {duration && (
                            <>
                                <span className="
                                    h-1 w-1
                                    rounded-full
                                    bg-slate-300
                                " />

                                <span>
                                    {duration}
                                </span>
                            </>
                        )}

                    </div>


                    {/* Action */}
                    <div className="mt-5">

                        {isAdmin ? (

                            <button
                                type="button"
                                onClick={() =>
                                    navigate(`/admin/course/${course.id}`)
                                }
                                className="
                                    flex h-11 w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    bg-slate-900
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-slate-800
                                "
                            >
                                <FaEye size={13} />
                                Manage Course
                            </button>

                        ) : (

                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        `/dashboard/courses/${course.id}`
                                    )
                                }
                                className="
                                    flex h-11 w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    bg-[#0D47D9]
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-[#0b3dbb]
                                "
                            >
                                View Course
                                <FaArrowRight size={11} />
                            </button>

                        )}

                    </div>

                </div >

            </article >
        );
    };


    return (
        <div className="
            min-h-screen
            bg-[#f7f9fc]
        ">

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}

            <header className="
                border-b
                border-slate-200
                bg-white
            ">

                <div className="
                    mx-auto
                    max-w-7xl
                    px-5
                    py-10
                    sm:px-6
                    lg:px-8
                ">

                    <div className="
                        flex
                        flex-col
                        gap-6
                        lg:flex-row
                        lg:items-end
                        lg:justify-between
                    ">

                        <div className="max-w-2xl">

                            <div className="
                                mb-3
                                flex items-center gap-2
                            ">

                                <span className="
                                    h-2 w-2
                                    rounded-full
                                    bg-[#0D47D9]"
                                />

                                <span className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.14em]
                                text-[#0D47D9]
                                ">
                                    {isAdmin
                                        ? "Course Management"
                                        : "Learning Library"}
                                </span>

                            </div>


                            <h1 className="
                                text-3xl
                                font-bold
                                tracking-tight
                                text-slate-950
                                sm:text-4xl
                            ">
                                {isAdmin
                                    ? "Courses"
                                    : "Find your next course"}
                            </h1>


                            <p className="
                                mt-3
                                max-w-xl
                                text-sm
                                leading-6
                                text-slate-500
                                sm:text-base
                            ">
                                {isAdmin
                                    ? "Create, organize and manage the courses available on your learning platform."
                                    : "Explore courses designed to help you build practical skills and keep learning at your own pace."}
                            </p>

                        </div>


                        {isAdmin && (
                            <button
                                type="button"
                                onClick={() =>
                                    navigate(
                                        "/admin/add-course"
                                    )
                                }
                                className="
                                    inline-flex
                                    h-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-lg
                                    bg-[#0D47D9]
                                    px-5
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:bg-[#0b3dbb]
                                    focus:outline-none
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                            >
                                <FaPlus size={12} />
                                Create Course
                            </button>
                        )}

                    </div>

                </div>

            </header >


            {/* == SEARCH AREA == */}

            <section className="border-b border-slate-200 bg-white">

                <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8 ">

                    <div className="flex flex-col gap-3 md:flex-row ">

                        {/* Search */}
                        <div className=" relative flex-1">

                            <FaSearch className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    text-sm
                                    text-slate-400
                                "
                            />

                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                                placeholder={isAdmin ? "Search courses by title, description or category..." : "Search courses..."}
                                className="h-12
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    pl-11
                                    pr-10
                                    text-sm
                                    text-slate-800
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-[#0D47D9]
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-blue-50
                                "
                            />


                            {search && (
                                <button type="button" onClick={() => setSearch("")}
                                    className="
                                        absolute
                                        right-3
                                        top-1/2
                                        flex
                                        h-7 w-7
                                        -translate-y-1/2
                                        items-center
                                        justify-center
                                        rounded-md
                                        text-slate-400
                                        transition
                                        hover:bg-slate-100
                                        hover:text-slate-700
                                    "
                                >
                                    <FaTimes size={11} />
                                </button>
                            )}

                        </div>


                        {/* Category select */}
                        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                            className="
                                hidden
                                h-12
                                min-w-[220px]
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-4
                                text-sm
                                font-medium
                                text-slate-700
                                outline-none
                                transition
                                focus:border-[#0D47D9]
                                focus:ring-4
                                focus:ring-blue-50
                                md:block
                            "
                        >

                            <option value="">
                                All categories
                            </option>

                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            )
                            )}

                        </select>


                        {/* Mobile filter */}
                        <button
                            type="button"
                            onClick={() =>
                                setShowFilters(
                                    !showFilters
                                )
                            }
                            className="flex
                                h-12
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-5
                                text-sm
                                font-semibold
                                text-slate-700
                                md:hidden
                            "
                        >
                            <FaFilter size={12} />
                            Filters
                        </button>

                    </div >


                    {/* Mobile filters */}
                    {
                        showFilters && (
                            <div className="
                            mt-4
                            border-t
                            border-slate-100
                            pt-4
                            md:hidden
                        ">

                                <p className="
                                mb-3
                                text-xs
                                font-bold
                                uppercase
                                tracking-wider
                                text-slate-400
                            ">
                                    Categories
                                </p>


                                <div className="
                                flex
                                flex-wrap
                                gap-2
                            ">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedCategory("")
                                        }
                                        className={`
                                        rounded-full
                                        px-4 py-2
                                        text-xs
                                        font-semibold
                                        transition
                                        ${selectedCategory === ""
                                                ? "bg-[#0D47D9] text-white"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                            }
                                    `}
                                    >
                                        All
                                    </button>


                                    {categories.map(
                                        (category) => (
                                            <button
                                                key={
                                                    category.id
                                                }
                                                type="button"
                                                onClick={() =>
                                                    setSelectedCategory(
                                                        category.name
                                                    )
                                                }
                                                className={`
                                                rounded-full
                                                px-4 py-2
                                                text-xs
                                                font-semibold
                                                transition
                                                ${selectedCategory.toLowerCase() ===
                                                        category.name.toLowerCase()
                                                        ? "bg-[#0D47D9] text-white"
                                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                                    }
                                            `}
                                            >
                                                {category.name}
                                            </button>
                                        )
                                    )}

                                </div>

                            </div>
                        )
                    }


                    {/* Desktop category pills */}
                    <div className="
                        mt-5
                        hidden
                        items-center
                        gap-2
                        overflow-x-auto
                        pb-1
                        md:flex
                    ">

                        <button
                            type="button"
                            onClick={() =>
                                setSelectedCategory("")
                            }
                            className={`
                                shrink-0
                                rounded-full
                                px-4 py-2
                                text-xs
                                font-semibold
                                transition
                                ${selectedCategory === ""
                                    ? "bg-[#0D47D9] text-white"
                                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                }
                            `}
                        >
                            All Courses
                        </button>


                        {categories.map(
                            (category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() =>
                                        setSelectedCategory(
                                            category.name
                                        )
                                    }
                                    className={`
                                        shrink-0
                                        rounded-full
                                        px-4 py-2
                                        text-xs
                                        font-semibold
                                        transition
                                        ${selectedCategory.toLowerCase() ===
                                            category.name.toLowerCase()
                                            ? "bg-[#0D47D9] text-white"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }
                                    `}
                                >
                                    {category.name}
                                </button>
                            )
                        )}

                    </div>

                </div >

            </section >


            {/* =====================================================
                COURSE CONTENT
            ====================================================== */}

            < main className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10 ">

                {/* Results header */}
                <div className="
                    mb-6
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                ">

                    <div>

                        <p className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            text-slate-400
                        ">
                            {isAdmin
                                ? "Your catalog"
                                : "Explore"}
                        </p>

                        <h2 className="
                            mt-1
                            text-xl
                            font-bold
                            text-slate-950
                        ">
                            {selectedCategory ||
                                (isAdmin
                                    ? "All courses"
                                    : "Available courses")}
                        </h2>

                        <p className="
                            mt-1
                            text-sm
                            text-slate-500
                        ">
                            {filteredCourses.length}{" "}
                            {filteredCourses.length === 1
                                ? "course"
                                : "courses"}
                        </p>

                    </div>


                    {(search ||
                        selectedCategory) && (
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="
                                inline-flex
                                items-center
                                gap-2
                                self-start
                                text-sm
                                font-semibold
                                text-[#0D47D9]
                                hover:underline
                                sm:self-auto
                            "
                            >
                                <FaTimes size={10} />
                                Clear filters
                            </button>
                        )}

                </div>


                {/* Loading */}
                {
                    loading && (
                        <div className="
                        grid
                        grid-cols-1
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    ">

                            {[1, 2, 3, 4, 5, 6, 7, 8].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-white
                                    "
                                    >

                                        <div className="
                                        h-52
                                        animate-pulse
                                        bg-slate-200
                                    " />

                                        <div className="p-5">

                                            <div className="
                                            h-3
                                            w-20
                                            animate-pulse
                                            rounded
                                            bg-slate-200
                                        " />

                                            <div className="
                                            mt-4
                                            h-5
                                            w-full
                                            animate-pulse
                                            rounded
                                            bg-slate-200
                                        " />

                                            <div className="
                                            mt-2
                                            h-5
                                            w-3/4
                                            animate-pulse
                                            rounded
                                            bg-slate-200
                                        " />

                                            <div className="
                                            mt-6
                                            h-4
                                            w-1/2
                                            animate-pulse
                                            rounded
                                            bg-slate-200
                                        " />

                                            <div className="
                                            mt-5
                                            h-11
                                            w-full
                                            animate-pulse
                                            rounded-lg
                                            bg-slate-200
                                        " />

                                        </div>

                                    </div>
                                )
                            )}

                        </div>
                    )
                }


                {/* Empty state */}
                {
                    !loading &&
                    filteredCourses.length === 0 && (
                        <div className="
                            flex
                            min-h-[400px]
                            flex-col
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-dashed
                            border-slate-300
                            bg-white
                            px-6
                            text-center
                        ">

                            <div className="
                                flex
                                h-16 w-16
                                items-center
                                justify-center
                                rounded-full
                                bg-slate-100
                            ">
                                <FaBookOpen
                                    className="
                                        text-2xl
                                        text-slate-400
                                    "
                                />
                            </div>


                            <h3 className="
                                mt-5
                                text-lg
                                font-bold
                                text-slate-900
                            ">
                                No courses found
                            </h3>


                            <p className="
                                mt-2
                                max-w-md
                                text-sm
                                leading-6
                                text-slate-500
                            ">
                                Try changing your search
                                or selecting a different
                                category.
                            </p>


                            <button
                                type="button"
                                onClick={() => {
                                    clearFilters();
                                    loadCourses();
                                }}
                                className="
                                    mt-6
                                    inline-flex
                                    h-10
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-[#0D47D9]
                                    px-5
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-[#0b3dbb]
                                "
                            >
                                Reset Search
                                <FaArrowRight size={10} />
                            </button>

                        </div>
                    )
                }


                {/* Courses */}
                {
                    !loading &&
                    filteredCourses.length > 0 && (
                        <div className="
                            grid
                            grid-cols-1
                            gap-6
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                        ">

                            {filteredCourses.map(
                                (course) => (
                                    <CourseCard
                                        key={course.id}
                                        course={course}
                                    />
                                )
                            )}

                        </div>
                    )
                }

            </main >

        </div >
    );
};

export default Courses;