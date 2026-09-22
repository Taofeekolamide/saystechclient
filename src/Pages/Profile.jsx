import { useContext, useState } from "react";
import { FaCamera, FaEnvelope, FaPhone, FaUser, FaGraduationCap, FaCertificate, FaBookOpen, FaCheckCircle, FaEdit, FaSave, FaShieldAlt, FaChevronRight, } from "react-icons/fa";

import emptyImage from "../assets/image.png";

import { AuthContext } from "../Context/AuthContext";
import { EnrollmentContext } from "../Context/EnrollmentContext";
import { UserContext } from "../Context/UserContext";

const Profile = () => {
    const { auth } = useContext(AuthContext);
    const { user, form, setForm, Update, loading, } = useContext(UserContext);

    const { enrollments = [], completedEnrollments = [], } = useContext(EnrollmentContext);

    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const updatedForm = { ...form, profilePicture: file, };

        setForm(updatedForm);

        await Update(updatedForm);
    };

    const handleSave = async () => {
        await Update(form);
        setEditing(false);
    };

    const firstName = user?.firstName || form?.firstName || "Student";

    const lastName = user?.lastName || form?.lastName || "";

    const fullName = `${firstName} ${lastName} `.trim();

    const role = auth?.role || "Student";

    return (
        <main className="min-h-screen bg-slate-50/60">
            <div className="mx-auto max-w-7xl">

                {/* PAGE HEADER */}

                <div className="mb-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#0D47D9]">
                            Account
                        </p>

                        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            My Profile
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
                            Manage your personal information and keep track of
                            your learning activity.
                        </p>
                    </div>
                </div>

                {/* PROFILE  */}

                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                    {/* Top accent */}
                    <div className="h-2 bg-[#0D47D9]" />

                    <div className="p-6 md:p-8">

                        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                            {/* User */}
                            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">

                                {/* Avatar */}
                                <div className="relative shrink-0">

                                    <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-slate-100 bg-slate-100 shadow-sm md:h-32 md:w-32">

                                        <img
                                            src={
                                                user?.profilePicture ||
                                                emptyImage
                                            }
                                            alt={fullName}
                                            className="h-full w-full object-cover"
                                        />

                                    </div>

                                    <label className="absolute bottom-1 right-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-[#0D47D9] text-white shadow-md transition hover:bg-[#0b3dbb] hover:scale-105">

                                        <FaCamera size={14} />

                                        <input
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />

                                    </label>

                                </div>

                                {/* User information */}
                                <div className="text-center sm:text-left">

                                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">

                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0D47D9]">
                                            {role}
                                        </span>

                                        <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                                            <FaShieldAlt size={11} />
                                            Account active
                                        </span>

                                    </div>

                                    <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                                        {fullName}
                                    </h2>

                                    <div className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-500 sm:justify-start">
                                        <FaEnvelope
                                            size={13}
                                            className="text-slate-400"
                                        />
                                        <span className="break-all">
                                            {auth?.email || "Email unavailable"}
                                        </span>
                                    </div>

                                </div>

                            </div>

                            {/* Change photo */}
                            <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0D47D9]">

                                <FaCamera size={14} />

                                Change Photo

                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />

                            </label>

                        </div>

                    </div>
                </section>

                {/* LEARNING OVERVIEW */}

                {role?.toLowerCase() === "student" && (
                    <section className="mt-8">

                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-slate-900">
                                Learning Overview
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                A summary of your learning activity.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">

                            <StatCard
                                icon={FaBookOpen}
                                title="Courses Enrolled"
                                value={enrollments.length}
                            />

                            <StatCard
                                icon={FaCheckCircle}
                                title="Courses Completed"
                                value={completedEnrollments.length}
                            />

                            {/* <StatCard
                                icon={FaCertificate}
                                title="Certificates"
                                value={completedEnrollments.length}
                            /> */}

                        </div>

                    </section>
                )}

                {/* MAIN CONTENT */}

                <div className="mt-8 grid gap-6 lg:grid-cols-3">

                    {/* PERSONAL INFORMATION */}

                    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
                        {/* Header */}
                        <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900"> Personal Information </h2>
                                <p className="mt-1 text-sm text-slate-500"> Keep your personal information up to date. </p>
                            </div>
                            {!editing && (
                                <button type="button" onClick={() => setEditing(true)} className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0D47D9]" >
                                    <FaEdit size={13} /> Edit Details
                                </button>)}
                        </div>

                        {/* Fields */}
                        <div className="p-6 md:p-8">
                            <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">
                                <InputField name="firstName" label="First Name" value={form?.firstName} onChange={handleChange} disabled={!editing} />
                                <InputField name="lastName" label="Last Name" value={form?.lastName} onChange={handleChange} disabled={!editing} />
                                <InputField name="email" label="Email Address" value={auth?.email} disabled />
                                <InputField name="phoneNumber" label="Phone Number" value={form?.phoneNumber} onChange={handleChange} disabled={!editing} />
                            </div>

                            {/* Actions */}
                            {editing && (
                                <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
                                    <button type="button" onClick={() => setEditing(false)} disabled={loading} className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50" > Cancel

                                    </button>
                                    <button type="button" onClick={handleSave} disabled={loading} className="rounded-xl bg-[#0D47D9] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b3dbb] disabled:cursor-not-allowed disabled:opacity-50" > {loading ? "Saving..." : "Save Changes"}
                                    </button>
                                </div>)}
                        </div>
                    </section>

                    {/*ACCOUNT DETAILS */}

                    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                        <div className="border-b border-slate-100 px-6 py-5">
                            <h2 className="text-lg font-bold text-slate-900">
                                Account Details
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                Information about your account.
                            </p>
                        </div>

                        <div className="p-6">

                            <div className="space-y-5">

                                <InfoRow
                                    label="Account Type"
                                    value={role}
                                />

                                <InfoRow
                                    label="Email Address"
                                    value={
                                        auth?.email ||
                                        "Not available"
                                    }
                                />

                                <InfoRow
                                    label="Phone Number"
                                    value={
                                        user?.phoneNumber ||
                                        form?.phoneNumber ||
                                        "Not provided"
                                    }
                                />

                            </div>

                            {/* Learning status */}
                            <div className="mt-7 border-t border-slate-100 pt-6">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                        <FaGraduationCap size={18} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                            Learning Status
                                        </p>

                                        <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-emerald-600">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                            Active Learner
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>

            </div>
        </main>
    );
};


/* STAT CARD */

const StatCard = ({ icon: Icon, title, value }) => {
    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9] transition group-hover:bg-[#0D47D9] group-hover:text-white">
                    <Icon size={17} />
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
};


/* INPUT FIELD */

const InputField = ({ name, label, value, disabled = false, onChange, }) => {
    return (
        <div className="group">
            <label htmlFor={name} className="mb-2.5 block text-sm font-semibold text-slate-700" > {label} </label>
            <input id={name} name={name} type="text" value={value || ""} disabled={disabled} onChange={onChange} placeholder={`Enter your ${label.toLowerCase()}`} className={` h-13 w-full rounded-xl border px-4 text-[15px] font-medium outline-none transition-all duration-200 ${disabled ? ` cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400 ` : ` border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 hover:border-slate-400 focus:border-[#0D47D9] focus:ring-4 focus:ring-blue-50 `} `} />
            {disabled && name === "email" && (<p className="mt-2 text-xs text-slate-400"> Your email address cannot be changed here. </p>)}
        </div>
    );
};

/* ACCOUNT INFO  */

const InfoRow = ({ label, value, }) => {
    return (
        <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                {label}
            </p>

            <p className="mt-1.5 break-words text-sm font-semibold text-slate-800">
                {value}
            </p>
        </div>
    );
};


export default Profile;
