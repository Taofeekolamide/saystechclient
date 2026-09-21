import { FaBookOpen, FaCheckCircle, FaPlayCircle, } from "react-icons/fa";

const RecentActivity = ({ enrollments = [], completedEnrollments = [] }) => {

    const activities = [];

    /* Build activity from real enrollment information. */

    enrollments.forEach((enrollment) => {
        const course = enrollment?.course || enrollment;

        if (!course) {
            return;
        }

        const progress = Number(enrollment?.progressPercentage ?? enrollment?.progress ?? 0);

        if (progress >= 100) {
            return;
        }

        activities.push({
            id: `learning-${enrollment.id || course.id}`,
            type: "learning",
            title: course.title || "Course",
            description: progress > 0 ? `You are ${progress}% through this course.` : "You have started this course.",
            icon: FaPlayCircle,
            iconClass: "bg-blue-50 text-[#0D47D9]",
        });
    });


    completedEnrollments.forEach((enrollment) => {
        const course = enrollment?.course || enrollment;

        if (!course) {
            return;
        }

        activities.push({
            id: `completed-${enrollment.id || course.id}`,
            type: "completed",
            title: course.title || "Course",
            description: "You completed this course.",
            icon: FaCheckCircle,
            iconClass: "bg-emerald-50 text-emerald-600",
        });
    });


    const visibleActivities = activities.slice(0, 5);


    return (
        <section className="pb-8">

            <div className="mb-4">

                <h2 className="text-lg font-bold text-slate-900">
                    Recent Activity
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Your latest learning activity.
                </p>

            </div>


            {visibleActivities.length === 0 ?
                (

                    <div className="rounded-xl border border-slate-200 bg-white px-6 py-10 text-center">

                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                            <FaBookOpen size={19} />
                        </div>

                        <p className="mt-3 text-sm font-medium text-slate-700">
                            No recent activity
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            Your course activity will appear here.
                        </p>

                    </div>

                )
                :
                (

                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

                        {visibleActivities.map((activity, index) => {

                            const Icon = activity.icon;

                            return (
                                <div
                                    key={activity.id}
                                    className={`flex items-center gap-4 p-5 ${index !== visibleActivities.length - 1
                                        ? "border-b border-slate-100"
                                        : ""
                                        }`}
                                >

                                    <div
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${activity.iconClass}`}
                                    >
                                        <Icon size={16} />
                                    </div>


                                    <div className="min-w-0 flex-1">

                                        <p className="text-sm font-semibold text-slate-900">
                                            {activity.type === "completed"
                                                ? "Completed course"
                                                : "Learning in progress"}
                                        </p>

                                        <p className="mt-1 truncate text-sm text-slate-600">
                                            {activity.title}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                            {activity.description}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                )
            }

        </section>
    );
};

export default RecentActivity;