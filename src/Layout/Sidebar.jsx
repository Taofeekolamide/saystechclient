import { NavLink } from "react-router-dom";
import { FaHome, FaBookOpen, FaGraduationCap, FaUser, FaSignOutAlt, FaChevronLeft, FaChevronRight, FaLayerGroup, FaPlusCircle, FaPlus, } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";


const Sidebar = ({ role, collapsed, setCollapsed, mobile = false, closeMobile, }) => {

    const { logout, auth } = useContext(AuthContext)
    const { user } = useContext(UserContext)

    const sidebarMenu = {
        Student: [
            {
                title: "Dashboard",
                path: "/me",
                icon: FaHome,
            },
            {
                title: "My Courses",
                path: "/my-courses",
                icon: FaBookOpen,
            }
        ],

        Admin: [
            {
                title: "Dashboard",
                path: "/admin",
                icon: FaHome,
            },
            {
                title: "Categories",
                path: "/admin/all-category",
                icon: FaLayerGroup,
            },
            {
                title: "Add Category",
                path: "/admin/add-category",
                icon: FaPlusCircle,
            },
            {
                title: "Add Course",
                path: "/admin/add-course",
                icon: FaPlus,
            }
        ],

        Common: [
            {
                title: "Browse Courses",
                path: "/courses",
                icon: FaGraduationCap,
            }
        ],
    };

    const menus = [
        ...(sidebarMenu[role] || []),
        ...sidebarMenu.Common,
    ];

    return (
        <aside className={`${mobile ? "w-72" : collapsed ? "w-20" : "w-72"} h-screen bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col transition-all duration-300`}>
            {/* ================= Logo ================= */}

            <div className="flex items-center justify-between px-6 py-6 border-b border-slate-800">

                {collapsed && !mobile ?
                    (
                        <h1 className="text-3xl font-black text-[#27B6F8] mx-auto">
                            S
                        </h1>
                    )
                    :
                    (
                        <div>
                            <h1 className="text-3xl font-black bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] bg-clip-text text-transparent">
                                SAYSTECH
                            </h1>

                            <p className="text-sm text-slate-400">
                                Computer Hub
                            </p>
                        </div>
                    )
                }

                {!mobile && !collapsed && (
                    <button onClick={() => setCollapsed(true)} className="w-8 h-8 rounded-lg hover:bg-slate-800 flex items-center justify-center transition">
                        <FaChevronLeft />
                    </button>
                )}

                {!mobile && collapsed && (
                    <button onClick={() => setCollapsed(false)} className="absolute left-6 top-20 w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition">
                        <FaChevronRight />
                    </button>
                )}

            </div>


            {/* ================= Menu ================= */}

            <div className="flex-1 overflow-y-auto px-3 py-5">

                {(!collapsed || mobile) && (
                    <p className="text-xs uppercase tracking-widest text-slate-500 px-4 mb-4">
                        Navigation
                    </p>
                )}

                {menus.map((menu) => {
                    const Icon = menu.icon;

                    return (
                        <NavLink key={menu.title} to={menu.path} onClick={() => mobile && closeMobile()}
                            className={({ isActive }) => `flex items-center ${collapsed && !mobile
                                ? "justify-center"
                                : "gap-4"
                                } px-4 py-3 mb-2 rounded-xl transition-all duration-300
                                ${isActive
                                    ? "bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] text-white shadow-lg"
                                    : "hover:bg-slate-800 hover:text-white"
                                }
                                `
                            }
                        >
                            <Icon className="text-lg flex-shrink-0" />

                            {(!collapsed || mobile) && (
                                <span className="font-medium">
                                    {menu.title}
                                </span>
                            )}
                        </NavLink>
                    );
                })}
            </div>


            {/* ================= User ================= */}

            <div className="border-t border-slate-800 p-5">

                {/* <div className={`flex items-center ${collapsed && !mobile ? "justify-center" : "gap-3"}`}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {user?.firstName?.[0]?.toUpperCase() || "U"}
                    </div>

                    {(!collapsed || mobile) && (
                        <div>
                            <h3 className="font-semibold text-white">
                                {user?.firstName}
                            </h3>

                            <p className="text-sm text-slate-400">
                                {auth?.role}
                            </p>
                        </div>
                    )}
                </div> */}

                <NavLink to="/profile" onClick={() => mobile && closeMobile()}
                    className={({ isActive }) => `flex items-center ${collapsed && !mobile
                        ? "justify-center"
                        : "gap-4"
                        } px-4 py-3 mb-2 rounded-xl transition-all duration-300
                                ${isActive
                            ? "bg-gradient-to-r from-[#0D47D9] to-[#27B6F8] text-white shadow-lg"
                            : "hover:bg-slate-800 hover:text-white"
                        }
                                `
                    }
                >
                    <Icon className="text-lg flex-shrink-0" />

                    {(!collapsed || mobile) && (
                        <span className="font-medium">
                            Profile
                        </span>
                    )}
                </NavLink>

                <button
                    onClick={logout}
                    className={`mt-5 flex items-center ${collapsed && !mobile
                        ? "justify-center"
                        : "gap-4"
                        } px-4 py-3 mb-2 rounded-xl transition-all duration-300
    hover:bg-red-600 hover:text-white`}
                >
                    <FaSignOutAlt className="text-lg flex-shrink-0" />

                    {(!collapsed || mobile) && (
                        <span className="font-medium">
                            Logout
                        </span>
                    )}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;