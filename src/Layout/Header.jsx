import { useContext } from "react";
import { FaBars, FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";

const Header = ({ setMobileOpen }) => {

    const { auth } = useContext(AuthContext)
    const { user } = useContext(UserContext)

    return (
        <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-4">

                <button onClick={() => setMobileOpen(true)}
                    className="lg:hidden text-gray-600 text-xl"
                >
                    <FaBars />
                </button>

                <div className="relative hidden md:block">

                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-96 pl-11 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D47D9]"
                    />

                </div>

            </div>

            {/* Right */}
            <div className="flex items-center gap-6">

                Notification
                <button className="relative">

                    <FaBell className="text-xl text-gray-600" />

                    <span className="absolute -top-1 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                        3
                    </span>

                </button>

                {/* User */}

                <button className="flex items-center gap-3">

                    <img
                        src={user?.profilePicture || "https://via.placeholder.com/150"}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />

                    <div className="hidden md:block text-left">

                        <p className="font-semibold text-gray-800">
                            {user?.firstName}
                        </p>

                        <p className="text-xs text-gray-500">
                            {auth?.role}
                        </p>

                    </div>

                </button>

            </div>

        </header>
    );
};

export default Header;