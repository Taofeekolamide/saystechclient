import { useContext } from "react";
import { FaBars, FaSearch, FaChevronDown, } from "react-icons/fa";

import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";

const Header = ({ setMobileOpen }) => {
    const { auth } = useContext(AuthContext);
    const { user } = useContext(UserContext);

    const firstName = user?.firstName || "User";
    const profileImage = user?.profilePicture || `https://placehold.co/150x150?text=${firstName.charAt(0).toUpperCase()}`;

    return (
        <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">

            {/* LEFT */}

            <div className="flex min-w-0 items-center gap-4">

                {/* Mobile menu */}
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 lg:hidden"
                    aria-label="Open menu"
                >
                    <FaBars size={18} />
                </button>

                {/* Search */}
                <div className="relative hidden sm:block">

                    <FaSearch
                        size={14}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="
                            h-10 w-[280px] rounded-xl
                            border border-slate-200
                            bg-slate-50
                            pl-10 pr-4
                            text-sm text-slate-800
                            outline-none
                            transition-all
                            placeholder:text-slate-400
                            hover:border-slate-300
                            focus:border-[#0D47D9]
                            focus:bg-white
                            focus:ring-4
                            focus:ring-blue-50
                            md:w-[340px]
                            lg:w-[380px]
                        "
                    />

                </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center">

                {/* User profile */}
                <button
                    type="button"
                    className="
                        group flex items-center gap-3
                        rounded-xl px-2 py-1.5
                        transition
                        hover:bg-slate-50
                    "
                >

                    {/* Avatar */}
                    <div className="relative shrink-0">

                        <img
                            src={profileImage}
                            alt={`${firstName}'s profile`}
                            className="h-9 w-9 rounded-full border border-slate-200 object-cover"
                        />

                        {/* Online indicator */}
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />

                    </div>

                    {/* User information */}
                    <div className="hidden text-left md:block">

                        <p className="max-w-[130px] truncate text-sm font-semibold text-slate-800">
                            {firstName}
                        </p>

                        <p className="text-xs text-slate-400">
                            {auth?.role || "Student"}
                        </p>

                    </div>

                    {/* Dropdown indicator */}
                    <FaChevronDown
                        size={11}
                        className="ml-1 hidden text-slate-400 transition group-hover:text-slate-600 md:block"
                    />

                </button>

            </div>

        </header>
    );
};

export default Header;
