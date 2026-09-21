import { FaBookOpen, FaPlayCircle, FaCheckCircle, FaGraduationCap, } from "react-icons/fa";

const LearningStats = ({ totalCourses = 0, inProgress = 0, completed = 0, certificates = 0 }) => {

    const stats = [
        {
            label: "My Courses",
            value: totalCourses,
            description: "Courses you're enrolled in",
            icon: FaBookOpen,
            iconClass: "bg-blue-50 text-[#0D47D9]",
        },
        {
            label: "In Progress",
            value: inProgress,
            description: "Courses you're currently learning",
            icon: FaPlayCircle,
            iconClass: "bg-amber-50 text-amber-600",
        },
        {
            label: "Completed",
            value: completed,
            description: "Courses you've completed",
            icon: FaCheckCircle,
            iconClass: "bg-emerald-50 text-emerald-600",
        },
        // {
        //     label: "Certificates",
        //     value: certificates,
        //     description: "Certificates you've earned",
        //     icon: FaGraduationCap,
        //     iconClass: "bg-violet-50 text-violet-600",
        // },
    ];

    return (
        <section className="mb-10">

            <div className="mb-4">
                <h2 className="text-lg font-bold text-slate-900">
                    Learning Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    A quick look at your learning activity.
                </p>
            </div>


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.label}
                            className="rounded-xl border border-slate-200 bg-white p-5"
                        >

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-sm font-medium text-slate-500">
                                        {stat.label}
                                    </p>

                                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                                        {stat.value}
                                    </p>
                                </div>

                                <div
                                    className={`flex h-11 w-11 items-center justify-center rounded-lg ${stat.iconClass}`}
                                >
                                    <Icon size={18} />
                                </div>

                            </div>

                            <p className="mt-4 text-xs leading-5 text-slate-500">
                                {stat.description}
                            </p>

                        </div>
                    );
                })}

            </div>

        </section>
    );
};

export default LearningStats;