import { FaBookOpen, FaCheckCircle, FaCertificate, FaClock, } from "react-icons/fa";
import { EnrollmentContext } from "../Context/EnrollmentContext";
import { useContext } from "react";


const Stats = () => {
    const { enrollments, completedEnrollments } = useContext(EnrollmentContext)

    const stats = [
        {
            title: "Enrolled Courses",
            value: enrollments?.length,
            icon: FaBookOpen,
            bg: "from-blue-500 to-blue-600",
        },
        {
            title: "Completed Courses",
            value: completedEnrollments.length,
            icon: FaCheckCircle,
            bg: "from-emerald-500 to-emerald-600",
        },
        {
            title: "Certificates",
            value: completedEnrollments.length,
            icon: FaCertificate,
            bg: "from-amber-500 to-orange-500",
        },
        {
            title: "Learning Hours",
            value: 0,
            icon: FaClock,
            bg: "from-violet-500 to-purple-600",
        },
    ];

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {stats.map((stat) => {

                const Icon = stat.icon;

                return (

                    <div
                        key={stat.title}
                        className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >

                        {/* Background Decoration */}

                        <div
                            className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${stat.bg} opacity-10`}
                        />

                        <div className="relative flex items-center justify-between">

                            <div>

                                <p className="text-sm font-medium text-slate-500">

                                    {stat.title}

                                </p>

                                <h2 className="mt-3 text-4xl font-bold text-slate-800">

                                    {stat.value}

                                </h2>

                                <p className="mt-2 text-sm text-emerald-500">

                                    +12% this month

                                </p>

                            </div>

                            <div
                                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${stat.bg} text-white shadow-lg`}
                            >

                                <Icon className="text-2xl" />

                            </div>

                        </div>

                    </div>

                );

            })}

        </section>
    );
};

export default Stats;