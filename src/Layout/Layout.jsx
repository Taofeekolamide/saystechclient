import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { AuthContext } from "../Context/AuthContext";

const Layout = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { auth } = useContext(AuthContext)

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }

    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (

    <div className="flex h-screen bg-slate-100">

      {/* Desktop Sidebar */}

      <div className="hidden lg:block">

        <Sidebar role={auth?.role} collapsed={collapsed} setCollapsed={setCollapsed} />

      </div>

      {/* Mobile Sidebar */}

      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${mobileOpen ? "visible" : "invisible"}`}      >

        {/* Backdrop */}

        <div onClick={() => setMobileOpen(false)} className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`} />

        {/* Drawer */}

        <div className={`absolute left-0 top-0 h-full transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}        >

          <Sidebar role={auth?.role} mobile closeMobile={() => setMobileOpen(false)} />

        </div>

      </div>

      {/* Main */}

      <div className="flex-1 flex flex-col">

        <Header setMobileOpen={setMobileOpen} />

        <main className="flex-1 overflow-y-auto py-10 px-3 md:p-6">

          <Outlet />

        </main>

        <Footer />

      </div>

    </div>

  );

};

export default Layout;