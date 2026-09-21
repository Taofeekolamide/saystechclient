import { Link } from "react-router-dom";
import { FaArrowRight, FaBookOpen, FaUserCircle, } from "react-icons/fa";

const Welcome = ({ user }) => {

    const getFirstName = () => {
        const name =
            user?.firstName ||
            user?.name ||
            user?.fullName ||
            user?.email?.split("@")[0] ||
            "Student";

        return name.split(" ")[0];
    };

    return (
        <section className="mb-8">
            <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#0D47D9]">
                        Student Dashboard
                    </p>

                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Welcome back, {getFirstName()}.
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                        Continue your learning journey and pick up where
                        you left off.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">

                    <Link
                        to="/courses"
                        className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#0D47D9] px-5 text-sm font-semibold text-white transition hover:bg-[#0b3dbb]"
                    >
                        <FaBookOpen size={13} />
                        Browse Courses
                        <FaArrowRight size={11} />
                    </Link>

                    <Link
                        to="/profile"
                        className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                        <FaUserCircle size={16} />
                        Profile
                    </Link>

                </div>

            </div>
        </section>
    );
};

export default Welcome;