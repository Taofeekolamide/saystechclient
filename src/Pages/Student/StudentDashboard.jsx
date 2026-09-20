import { useContext } from "react";

import { EnrollmentContext } from "../../Context/EnrollmentContext";
import { UserContext } from "../../Context/UserContext";

// import Welcome from ".../Layout/Welcome";
// import ProfileCompletion from "./components/ProfileCompletion";
// import LearningStats from "./components/LearningStats";
// import ContinueLearning from "./components/ContinueLearning";
// import MyCourses from "./components/MyCourses";
// import RecentActivity from "./components/RecentActivity";

const StudentDashboard = () => {
    const { enrollments, completedEnrollments } = useContext(EnrollmentContext);

    const { user } = useContext(UserContext);

    const inProgressEnrollments = enrollments.filter((enrollment) => {
        const progress = enrollment.progress ?? 0;
        return progress > 0 && progress < 100;
    });

    const certificates = completedEnrollments.filter(
        (enrollment) =>
            enrollment.certificateId ||
            enrollment.certificate ||
            enrollment.certificateUrl
    );

    return (
        <main className="w-full">

            {/* Welcome */}
            {/* <Welcome /> */}

            {/* Profile */}
            {/* <ProfileCompletion user={user} /> */}

            {/* Statistics */}
            {/* <LearningStats
                totalCourses={enrollments.length}
                inProgress={inProgressEnrollments.length}
                completed={completedEnrollments.length}
                certificates={certificates.length}
            /> */}

            {/* Continue Learning */}
            {/* <ContinueLearning
                enrollments={enrollments}
            /> */}

            {/* My Courses */}
            {/* <MyCourses
                enrollments={enrollments}
            /> */}

            {/* Recent Activity */}
            {/* <RecentActivity
                enrollments={enrollments}
                completedEnrollments={completedEnrollments}
            /> */}

        </main>
    );
};

export default StudentDashboard;