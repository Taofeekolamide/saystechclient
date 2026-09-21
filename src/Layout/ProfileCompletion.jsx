import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaUser, } from "react-icons/fa";

const ProfileCompletion = ({ user }) => {
    if (!user) {
        return null;
    }

    const fields = [user.firstName, user.lastName, user.email, user.phoneNumber, user.profilePicture];

    const completedFields = fields.filter(Boolean).length;

    const percentage = Math.round((completedFields / fields.length) * 100);

    const isComplete = percentage >= 100;

    return (
        <section className="mb-8">

            <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-start gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0D47D9]">
                            {isComplete ? (
                                <FaCheckCircle size={19} />
                            ) : (
                                <FaUser size={17} />
                            )}
                        </div>

                        <div>
                            <h2 className="text-sm font-bold text-slate-900">
                                {isComplete
                                    ? "Your profile is complete"
                                    : "Complete your profile"}
                            </h2>

                            <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                                {isComplete
                                    ? "Your account information is up to date."
                                    : "Add your information so your learning account is up to date."}
                            </p>
                        </div>

                    </div>

                    {!isComplete && (
                        <Link
                            to="/profile"
                            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-[#0D47D9] hover:text-[#0D47D9]"
                        >
                            Complete profile
                            <FaArrowRight size={11} />
                        </Link>
                    )}

                </div>


                {/* Progress */}
                <div className="mt-6">

                    <div className="mb-2 flex items-center justify-between">

                        <span className="text-xs font-medium text-slate-500">
                            Profile completion
                        </span>

                        <span className="text-xs font-bold text-slate-700">
                            {percentage}%
                        </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                            className="h-full rounded-full bg-[#0D47D9] transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProfileCompletion;