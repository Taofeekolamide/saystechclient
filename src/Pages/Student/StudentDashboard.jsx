import { useContext, useMemo } from "react";

import { AuthContext } from "../../Context/AuthContext";
import { EnrollmentContext } from "../../Context/EnrollmentContext";
import { UserContext } from "../../Context/UserContext";

import RecentActivity from "./Dashboard/RecentActivity";
import Welcome from "../../Layout/Welcome";
import ProfileCompletion from "../../Layout/ProfileCompletion";
import LearningStats from "../../Layout/LearningStats";
import Courses from "../Course/Courses";

const StudentDashboard = () => {
    const { user: authUser } = useContext(AuthContext);
    const { user } = useContext(UserContext);
    const { enrollments = [], completedEnrollments } = useContext(EnrollmentContext);

    const currentUser = user || authUser;

    const inProgressEnrollments = useMemo(() => {
        return enrollments.filter((enrollment) => {
            const progress = enrollment.progressPercentage ?? enrollment.progress ?? 0;

            return Number(progress) > 0 && Number(progress) < 100;
        });
    }, [enrollments]);


    /*
     * Certificates are not part of the current MVP.
     *
     * Keep this as an empty array for now so the dashboard
     * structure can easily support certificates later.
     */
    const certificates = [];

    return (
        <main className="w-full bg-[#f6f8fc]">

            <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

                {/* Welcome */}
                <Welcome user={currentUser} />


                {/* Profile */}
                <ProfileCompletion user={currentUser} />


                {/* Statistics */}
                <LearningStats
                    totalCourses={enrollments.length}
                    inProgress={inProgressEnrollments.length}
                    completed={completedEnrollments.length}
                />


                {/* Continue Learning */}
                <ContinueLearning enrollments={enrollments} />


                {/* My Courses */}
                <Courses enrollments={enrollments} />


                {/* Recent Activity */}
                <RecentActivity enrollments={enrollments} completedEnrollments={completedEnrollments} />

            </div>

        </main>
    );
};

export default StudentDashboard;
