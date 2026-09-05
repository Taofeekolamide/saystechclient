import { useContext } from "react";
import emptyImage from "../assets/image.png"
import { FaCamera, FaEnvelope, FaPhone, FaUser, FaGraduationCap, FaCertificate, FaClock, FaBookOpen, FaCheckCircle, FaEdit } from "react-icons/fa";

import { AuthContext } from "../Context/AuthContext";
import { EnrollmentContext } from "../Context/EnrollmentContext";
import { UserContext } from "../Context/UserContext";

const Profile = () => {
    const { auth } = useContext(AuthContext);
    const { user, form, setForm, Update, loading } = useContext(UserContext)
    const { enrollments, completedEnrollments } = useContext(EnrollmentContext)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleImageChange = async (e) => {

        const file = e.target.files[0];
        if (!file) return;

        const updatedForm = { ...form, profilePicture: file };
        setForm(updatedForm);

        await Update(updatedForm);
    };

    return (
        <div className="min-h-screen">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                    My Profile
                </h1>

                <p className="mt-2 text-slate-500">
                    Manage your profile, personal information and learning activity.
                </p>
            </div>

            {/* Profile Hero */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0D47D9] via-[#1557E8] to-[#2563EB] p-6 md:p-8 text-white shadow-lg">

                {/* Decorative circles */}
                <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10" />
                <div className="absolute -bottom-24 right-32 h-48 w-48 rounded-full bg-white/5" />

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">

                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 text-center sm:text-left">

                        {/* Avatar */}
                        <div className="relative">

                            <div className="h-28 w-28 md:h-32 md:w-32 rounded-full border-4 border-white/30 bg-white/20 p-1">

                                <img src={user?.profilePicture || emptyImage}
                                    alt="Profile"
                                    className="h-full w-full rounded-full object-cover"
                                />

                            </div>

                            <button
                                className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#1557E8] bg-white text-[#0D47D9] shadow-md transition hover:scale-105"
                            >
                                <FaCamera size={14} />
                            </button>

                        </div>

                        {/* User Info */}
                        <div>

                            <p className="mb-1 text-sm font-medium text-blue-100">
                                Welcome back 👋
                            </p>

                            <h2 className="text-2xl md:text-3xl font-bold">
                                {user?.firstName} {user?.lastName}
                            </h2>

                            <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-3">

                                <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm backdrop-blur">
                                    {auth?.role}
                                </span>

                                <span className="flex items-center gap-2 text-sm text-blue-100">
                                    <FaEnvelope />
                                    {auth?.email}
                                </span>

                            </div>

                        </div>

                    </div>

                    <label className="relative flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#0D47D9] shadow-sm transition hover:bg-blue-50">
                        <FaCamera />
                        Change Photo
                        <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => handleImageChange(e)} className="hidden" />
                    </label>

                </div>

            </div>

            {
                auth?.role === "Student" &&

                < div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

                    <Stat icon={FaBookOpen} title="Courses Enrolled" value={enrollments.length} />

                    <Stat icon={FaCheckCircle} title="Courses Completed" value={completedEnrollments.length} />

                    <Stat icon={FaClock} title="Learning Hours" value="0" />

                    <Stat icon={FaCertificate} title="Certificates" value={completedEnrollments.length} />

                </div>
            }

            
            
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

                <Stat icon={FaBookOpen} title="Courses Enrolled" value={enrollments.length} />

                <Stat icon={FaCheckCircle} title="Courses Completed" value={completedEnrollments.length} />

                <Stat icon={FaClock} title="Learning Hours" value="0" />

                <Stat icon={FaCertificate} title="Certificates" value={completedEnrollments.length} />

            </div>

            {/* Main Content */}
            <div className="mt-8 grid lg:grid-cols-3 gap-8">

                {/* Personal Information */}
                <div className="lg:col-span-2 rounded-3xl bg-white shadow-sm border border-slate-100">

                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 md:px-8">

                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                Personal Information
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Update your personal details.
                            </p>
                        </div>

                        <button className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-[#0D47D9] transition hover:bg-blue-100">
                            <FaEdit />
                            Edit
                        </button>

                    </div>

                    <div className="p-6 md:p-8">

                        <div className="grid md:grid-cols-2 gap-6">

                            <InputField name="firstName" label="First Name" icon={FaUser} value={form?.firstName} onChange={(e) => handleChange(e)} />

                            <InputField name="lastName" label="Last Name" icon={FaUser} value={form?.lastName} onChange={(e) => handleChange(e)} />

                            <InputField label="Email Address" icon={FaEnvelope} value={auth?.email} disabled onChange={(e) => handleChange(e)} />

                            <InputField name="phoneNumber" label="Phone Number" icon={FaPhone} value={form?.phoneNumber} onChange={(e) => handleChange(e)} />

                        </div>

                        <div className="mt-8 flex justify-end">

                            <button onClick={() => Update(form)} disabled={loading} className="disabled:bg-[#0D47D9]/50 rounded-xl bg-[#0D47D9] px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md">
                                Save Changes
                            </button>

                        </div>

                    </div>

                </div>

                {/* Account Information */}
                <div className="rounded-3xl bg-white shadow-sm border border-slate-100">

                    <div className="border-b border-slate-100 px-6 py-5">

                        <h2 className="text-xl font-bold text-slate-900">
                            Account Details
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Your account information.
                        </p>

                    </div>

                    <div className="p-6 space-y-6">

                        <Info
                            title="Account Type"
                            value={auth?.role || "Student"}
                        />

                        <Info
                            title="Email"
                            value={auth?.email || "Not available"}
                        />

                        <Info
                            title="Phone Number"
                            value={user?.phoneNumber || "Not provided"}
                        />

                        <div className="border-t border-slate-100 pt-6">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaGraduationCap />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Learning Status
                                    </p>

                                    <p className="mt-1 font-semibold text-green-600">
                                        Active Learner
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};


/* ---------------- Components ---------------- */

const Stat = ({ icon: Icon, title, value }) => (

    <div className="group rounded-2xl border border-slate-100 bg-white p-5 md:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

        <div className="flex items-center justify-between">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9] transition group-hover:bg-[#0D47D9] group-hover:text-white">
                <Icon size={19} />
            </div>

            <span className="text-2xl font-bold text-slate-900">
                {value}
            </span>

        </div>

        <p className="mt-4 text-sm font-medium text-slate-500">
            {title}
        </p>

    </div>
);


const InputField = ({ name, label, icon: Icon, value, disabled = false, onChange }) => (

    <div>

        <label className="mb-2 block text-sm font-semibold text-slate-600">
            {label}
        </label>

        <div className="relative">

            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Icon size={15} />
            </div>

            <input value={value || ""} disabled={disabled} name={name} onChange={onChange}
                className={`w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition
                    ${disabled
                        ? "cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-white focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-50"
                    }
                `}
            />

        </div>

    </div>
);


const Info = ({ title, value }) => (

    <div>

        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {title}
        </p>

        <h3 className="mt-1.5 break-words text-sm font-semibold text-slate-800">
            {value}
        </h3>

    </div>
);


export default Profile;