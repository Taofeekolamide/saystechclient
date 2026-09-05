import { FaBookOpen, FaCertificate, FaCheckCircle, FaCalendarAlt, FaClock } from "react-icons/fa";

const activities = [
    {
        id: 1,
        title: "Completed Authentication & JWT",
        time: "2 hours ago",
        icon: FaCheckCircle,
        color: "text-green-500",
        bg: "bg-green-100",
    },
    {
        id: 2,
        title: "Started React Fundamentals",
        time: "Yesterday",
        icon: FaBookOpen,
        color: "text-blue-600",
        bg: "bg-blue-100",
    },
    {
        id: 3,
        title: "Certificate Issued",
        time: "2 days ago",
        icon: FaCertificate,
        color: "text-yellow-500",
        bg: "bg-yellow-100",
    },
];

const classes = [
    {
        id: 1,
        course: "ASP.NET Core Web API",
        day: "Monday",
        time: "10:00 AM",
    },
    {
        id: 2,
        course: "UI / UX Design",
        day: "Wednesday",
        time: "2:00 PM",
    },
    {
        id: 3,
        course: "Networking",
        day: "Friday",
        time: "9:00 AM",
    },
];

const BottomSection = () => {
    return (
        <section className="grid gap-6 lg:grid-cols-3">

            {/* ================= Recent Activity ================= */}

            <div className="lg:col-span-2 rounded-3xl bg-white shadow-sm p-6">

                <div className="flex items-center justify-between mb-6">

                    <h2 className="text-2xl font-bold text-slate-800">
                        Recent Activity
                    </h2>

                    <button className="hidden md:block text-[#0D47D9] font-medium hover:underline">
                        View All
                    </button>

                </div>

                <div className="space-y-5">

                    {activities.map((activity) => {

                        const Icon = activity.icon;

                        return (

                            <div
                                key={activity.id}
                                className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition"
                            >

                                <div
                                    className={`w-14 h-14 rounded-2xl ${activity.bg} flex items-center justify-center`}
                                >

                                    <Icon className={`text-xl ${activity.color}`} />

                                </div>

                                <div className="flex-1">

                                    <h3 className="font-semibold text-slate-800">
                                        {activity.title}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        {activity.time}
                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

            {/* ================= Upcoming Classes ================= */}

            <div className="rounded-3xl bg-white shadow-sm p-6">

                <h2 className="text-2xl font-bold text-slate-800 mb-6">

                    Upcoming Classes

                </h2>

                <div className="space-y-5">

                    {classes.map((item) => (

                        <div
                            key={item.id}
                            className="rounded-2xl border border-slate-100 p-4 hover:border-[#27B6F8] transition"
                        >

                            <h3 className="font-semibold text-slate-800">

                                {item.course}

                            </h3>

                            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

                                <FaCalendarAlt />

                                {item.day}

                            </div>

                            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

                                <FaClock />

                                {item.time}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default BottomSection;