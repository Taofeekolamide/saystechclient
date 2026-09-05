import { BiBookOpen, BiFolderPlus, BiPlus, BiUserPlus, BiWallet } from "react-icons/bi";
import { FiArrowUpRight, FiMoreHorizontal } from "react-icons/fi";
import { FaGraduationCap, FaUsers } from "react-icons/fa";

const AdminDashboard = () => {

    const stats = [
        {
            title: "Total Students",
            value: "1,248",
            change: "+12.5%",
            icon: FaUsers
        },
        {
            title: "Total Tutors",
            value: "24",
            change: "+4.2%",
            icon: FaGraduationCap
        },
        {
            title: "Total Courses",
            value: "86",
            change: "+8.4%",
            icon: BiBookOpen
        },
        {
            title: "Total Revenue",
            value: "₦2.4M",
            change: "+18.7%",
            icon: BiWallet
        }
    ];

    const recentEnrollments = [
        {
            student: "John Michael",
            course: "Full Stack Web Development",
            date: "Today, 10:32 AM",
            status: "Active"
        },
        {
            student: "Sarah Johnson",
            course: "JavaScript Mastery",
            date: "Today, 09:15 AM",
            status: "Active"
        },
        {
            student: "David Williams",
            course: "C# & ASP.NET Core",
            date: "Yesterday",
            status: "Active"
        },
        {
            student: "Michael Brown",
            course: "UI/UX Design",
            date: "Yesterday",
            status: "Pending"
        }
    ];

    const recentUsers = [
        {
            name: "Sarah Johnson",
            email: "sarah@example.com",
            role: "Student"
        },
        {
            name: "David Williams",
            email: "david@example.com",
            role: "Student"
        },
        {
            name: "Michael Brown",
            email: "michael@example.com",
            role: "Tutor"
        },
        {
            name: "Daniel Smith",
            email: "daniel@example.com",
            role: "Student"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f5f8fc] p-6 lg:p-8">

            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">

                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">
                        Good morning, Admin 👋
                    </h1>

                    <p className="text-slate-500 mt-1">
                        Here's what's happening with Saystech today.
                    </p>
                </div>

                <div className="flex gap-3">

                    <button className="
                        flex items-center gap-2
                        px-4 py-2.5
                        rounded-xl
                        bg-white
                        border border-slate-200
                        text-slate-700
                        font-medium
                        hover:bg-slate-50
                    ">
                        <BiFolderPlus size={18} />
                        Add Category
                    </button>

                    <button className="
                        flex items-center gap-2
                        px-4 py-2.5
                        rounded-xl
                        bg-[#0D47D9]
                        text-white
                        font-medium
                        shadow-sm
                        hover:bg-[#0a3bb5]
                    ">
                        <BiPlus size={18} />
                        Add Course
                    </button>

                </div>
            </div>


            {/* Statistics */}
            <div className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-5
                mb-8
            ">

                {stats.map((stat, index) => {

                    const Icon = stat.icon;

                    return (
                        <div
                            key={index}
                            className="
                                bg-white
                                rounded-2xl
                                border border-slate-100
                                p-5
                                shadow-sm
                                hover:shadow-md
                                transition
                            "
                        >

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm text-slate-500">
                                        {stat.title}
                                    </p>

                                    <h2 className="
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                        mt-2
                                    ">
                                        {stat.value}
                                    </h2>
                                </div>

                                <div className="
                                    w-11 h-11
                                    rounded-xl
                                    bg-blue-50
                                    text-[#0D47D9]
                                    flex
                                    items-center
                                    justify-center
                                ">
                                    <Icon />
                                </div>

                            </div>

                            <div className="flex items-center gap-1 mt-4 text-sm">

                                <FiArrowUpRight
                                    size={16}
                                    className="text-emerald-500"
                                />

                                <span className="text-emerald-500 font-medium">
                                    {stat.change}
                                </span>

                                <span className="text-slate-400">
                                    vs last month
                                </span>

                            </div>

                        </div>
                    );
                })}

            </div>


            {/* Main Grid */}
            <div className="
                grid
                grid-cols-1
                xl:grid-cols-3
                gap-6
                mb-8
            ">

                {/* Enrollment Chart */}
                <div className="
                    xl:col-span-2
                    bg-white
                    rounded-2xl
                    border border-slate-100
                    p-6
                    shadow-sm
                ">

                    <div className="
                        flex
                        items-center
                        justify-between
                        mb-6
                    ">

                        <div>
                            <h2 className="font-bold text-lg text-slate-900">
                                Enrollment Overview
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Student enrollments over the last 6 months
                            </p>
                        </div>

                        <select className="
                            border
                            border-slate-200
                            rounded-lg
                            px-3
                            py-2
                            text-sm
                            text-slate-600
                            outline-none
                        ">
                            <option>Last 6 months</option>
                            <option>Last 12 months</option>
                            <option>This year</option>
                        </select>

                    </div>


                    {/* Chart Placeholder */}
                    <div className="
                        h-[280px]
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-slate-50
                        border border-dashed border-slate-200
                    ">
                        <div className="text-center">

                            <div className="
                                w-14 h-14
                                rounded-full
                                bg-blue-100
                                text-[#0D47D9]
                                mx-auto
                                flex
                                items-center
                                justify-center
                                mb-3
                            ">
                                <BiBookOpen size={25} />
                            </div>

                            <p className="font-medium text-slate-700">
                                Enrollment chart
                            </p>

                            <p className="text-sm text-slate-400">
                                Connect this to your analytics API
                            </p>

                        </div>
                    </div>

                </div>


                {/* Quick Actions */}
                <div className="
                    bg-white
                    rounded-2xl
                    border border-slate-100
                    p-6
                    shadow-sm
                ">

                    <h2 className="font-bold text-lg text-slate-900">
                        Quick Actions
                    </h2>

                    <p className="text-sm text-slate-500 mt-1 mb-5">
                        Frequently used admin actions
                    </p>


                    <div className="space-y-3">

                        <button className="
                            w-full
                            flex
                            items-center
                            gap-4
                            p-4
                            rounded-xl
                            bg-blue-50
                            text-left
                            hover:bg-blue-100
                            transition
                        ">

                            <div className="
                                w-10 h-10
                                rounded-lg
                                bg-[#0D47D9]
                                text-white
                                flex
                                items-center
                                justify-center
                            ">
                                <BiPlus size={19} />
                            </div>

                            <div>
                                <p className="font-semibold text-slate-800">
                                    Create Course
                                </p>

                                <p className="text-xs text-slate-500">
                                    Add a new course
                                </p>
                            </div>

                        </button>


                        <button className="
                            w-full
                            flex
                            items-center
                            gap-4
                            p-4
                            rounded-xl
                            bg-slate-50
                            text-left
                            hover:bg-slate-100
                            transition
                        ">

                            <div className="
                                w-10 h-10
                                rounded-lg
                                bg-white
                                border border-slate-200
                                text-[#0D47D9]
                                flex
                                items-center
                                justify-center
                            ">
                                <BiUserPlus size={19} />
                            </div>

                            <div>
                                <p className="font-semibold text-slate-800">
                                    Add User
                                </p>

                                <p className="text-xs text-slate-500">
                                    Create a student or tutor
                                </p>
                            </div>

                        </button>


                        <button className="
                            w-full
                            flex
                            items-center
                            gap-4
                            p-4
                            rounded-xl
                            bg-slate-50
                            text-left
                            hover:bg-slate-100
                            transition
                        ">

                            <div className="
                                w-10 h-10
                                rounded-lg
                                bg-white
                                border border-slate-200
                                text-[#0D47D9]
                                flex
                                items-center
                                justify-center
                            ">
                                <BiFolderPlus size={19} />
                            </div>

                            <div>
                                <p className="font-semibold text-slate-800">
                                    Add Category
                                </p>

                                <p className="text-xs text-slate-500">
                                    Organize your courses
                                </p>
                            </div>

                        </button>

                    </div>

                </div>

            </div>


            {/* Bottom Section */}
            <div className="
                grid
                grid-cols-1
                xl:grid-cols-2
                gap-6
            ">

                {/* Recent Enrollments */}
                <div className="
                    bg-white
                    rounded-2xl
                    border border-slate-100
                    shadow-sm
                    overflow-hidden
                ">

                    <div className="
                        p-6
                        flex
                        items-center
                        justify-between
                    ">

                        <div>
                            <h2 className="font-bold text-lg text-slate-900">
                                Recent Enrollments
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Latest student enrollments
                            </p>
                        </div>

                        <button className="text-[#0D47D9] text-sm font-medium">
                            View all
                        </button>

                    </div>


                    <div className="divide-y divide-slate-100">

                        {recentEnrollments.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    px-6 py-4
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div className="
                                        w-10 h-10
                                        rounded-full
                                        bg-blue-100
                                        text-[#0D47D9]
                                        flex
                                        items-center
                                        justify-center
                                        font-semibold
                                    ">
                                        {item.student.charAt(0)}
                                    </div>

                                    <div>

                                        <p className="
                                            font-medium
                                            text-slate-800
                                        ">
                                            {item.student}
                                        </p>

                                        <p className="
                                            text-xs
                                            text-slate-500
                                            mt-1
                                        ">
                                            {item.course}
                                        </p>

                                    </div>

                                </div>


                                <div className="text-right">

                                    <span className="
                                        inline-block
                                        px-2.5
                                        py-1
                                        rounded-full
                                        text-xs
                                        bg-emerald-50
                                        text-emerald-600
                                    ">
                                        {item.status}
                                    </span>

                                    <p className="
                                        text-xs
                                        text-slate-400
                                        mt-1
                                    ">
                                        {item.date}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Recent Users */}
                <div className="
                    bg-white
                    rounded-2xl
                    border border-slate-100
                    shadow-sm
                    overflow-hidden
                ">

                    <div className="
                        p-6
                        flex
                        items-center
                        justify-between
                    ">

                        <div>
                            <h2 className="font-bold text-lg text-slate-900">
                                Recent Users
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Newly registered users
                            </p>
                        </div>

                        <button className="text-[#0D47D9] text-sm font-medium">
                            View all
                        </button>

                    </div>


                    <div className="divide-y divide-slate-100">

                        {recentUsers.map((user, index) => (

                            <div
                                key={index}
                                className="
                                    px-6 py-4
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div className="flex items-center gap-3">

                                    <div className="
                                        w-10 h-10
                                        rounded-full
                                        bg-slate-100
                                        flex
                                        items-center
                                        justify-center
                                        font-semibold
                                        text-slate-600
                                    ">
                                        {user.name.charAt(0)}
                                    </div>

                                    <div>

                                        <p className="
                                            font-medium
                                            text-slate-800
                                        ">
                                            {user.name}
                                        </p>

                                        <p className="
                                            text-xs
                                            text-slate-500
                                        ">
                                            {user.email}
                                        </p>

                                    </div>

                                </div>


                                <div className="flex items-center gap-3">

                                    <span className="
                                        px-3 py-1
                                        rounded-full
                                        bg-blue-50
                                        text-[#0D47D9]
                                        text-xs
                                        font-medium
                                    ">
                                        {user.role}
                                    </span>

                                    <button className="text-slate-400">
                                        <FiMoreHorizontal size={19} />
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboard;