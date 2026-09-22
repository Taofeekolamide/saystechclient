import {
    FaArrowRight,
    FaLaptopCode,
    FaPalette,
    FaNetworkWired,
    FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Navbar */}
            <nav className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-wide text-[#0D47D9]"
                    >
                        SAYSTECH
                    </Link>

                    {/* Navigation */}
                    <div className="hidden items-center gap-8 md:flex">

                        <Link
                            to="/"
                            className="font-medium text-[#0D47D9]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="font-medium text-slate-600 transition hover:text-[#0D47D9]"
                        >
                            About
                        </Link>

                        <Link
                            to="/services"
                            className="font-medium text-slate-600 transition hover:text-[#0D47D9]"
                        >
                            Services
                        </Link>

                        <Link
                            to="/contact"
                            className="font-medium text-slate-600 transition hover:text-[#0D47D9]"
                        >
                            Contact
                        </Link>

                    </div>

                    {/* Sign In */}
                    <Link
                        to="/login"
                        className="rounded-lg bg-[#0D47D9] px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
                    >
                        Sign in
                    </Link>

                </div>
            </nav>


            {/* Hero Section */}
            <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-28">

                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    {/* Hero Text */}
                    <div>

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0D47D9]">
                            Saystech Computer Hub
                        </p>

                        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Build your skills.
                            <br />
                            Shape your future.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Learn practical technology skills, develop your
                            creativity, and gain the knowledge you need to
                            move forward in the digital world.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                to="/register"
                                className="flex items-center gap-2 rounded-lg bg-[#0D47D9] px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Get started
                                <FaArrowRight size={14} />
                            </Link>

                            <Link
                                to="/services"
                                className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-[#0D47D9] hover:text-[#0D47D9]"
                            >
                                Explore services
                            </Link>

                        </div>

                    </div>


                    {/* Hero Image */}
                    <div className="overflow-hidden rounded-2xl shadow-xl">

                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                            alt="Students learning technology"
                            className="h-[420px] w-full object-cover"
                        />

                    </div>

                </div>

            </section>


            {/* About Preview */}
            <section className="px-6 py-20 lg:px-8">

                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D47D9]">
                            About Saystech
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Helping you grow in the digital world.
                        </h2>

                        <p className="mt-5 leading-7 text-slate-600">
                            Saystech Computer Hub is focused on helping
                            individuals develop practical computer and
                            technology skills through learning and hands-on
                            experience.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            Whether you are beginning your technology journey
                            or looking to improve your existing skills,
                            Saystech provides an environment where you can
                            learn, create, and grow.
                        </p>

                        <Link
                            to="/about"
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0D47D9] transition hover:gap-3"
                        >
                            Learn more
                            <FaArrowRight size={14} />
                        </Link>

                    </div>


                    <div className="rounded-2xl bg-slate-50 p-8">

                        <div className="grid grid-cols-2 gap-5">

                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <FaLaptopCode
                                    size={25}
                                    className="text-[#0D47D9]"
                                />

                                <h3 className="mt-4 font-semibold text-slate-900">
                                    Technology
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Practical digital skills.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <FaGraduationCap
                                    size={25}
                                    className="text-[#0D47D9]"
                                />

                                <h3 className="mt-4 font-semibold text-slate-900">
                                    Learning
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Skills for your future.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <FaPalette
                                    size={25}
                                    className="text-[#0D47D9]"
                                />

                                <h3 className="mt-4 font-semibold text-slate-900">
                                    Creativity
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Turn ideas into reality.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <FaNetworkWired
                                    size={25}
                                    className="text-[#0D47D9]"
                                />

                                <h3 className="mt-4 font-semibold text-slate-900">
                                    Connectivity
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Connect with technology.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Services Preview */}
            <section className="bg-slate-50 px-6 py-20 lg:px-8">

                <div className="mx-auto max-w-7xl">

                    <div className="text-center">

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D47D9]">
                            Our Services
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                            What we offer
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Explore the technology and digital services
                            available at Saystech Computer Hub.
                        </p>

                    </div>


                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Service 1 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                <FaLaptopCode size={22} />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Computer Training
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Develop practical computer and technology
                                skills through hands-on learning.
                            </p>

                        </div>


                        {/* Service 2 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                <FaGraduationCap size={22} />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Technology Courses
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Learn useful digital skills through structured
                                courses and practical lessons.
                            </p>

                        </div>


                        {/* Service 3 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                <FaPalette size={22} />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Graphic Design
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Develop creative skills and create professional
                                digital designs.
                            </p>

                        </div>


                        {/* Service 4 */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                <FaNetworkWired size={22} />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Networking
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Learn networking concepts and practical
                                computer infrastructure.
                            </p>

                        </div>

                    </div>


                    <div className="mt-10 text-center">

                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 font-semibold text-[#0D47D9] transition hover:gap-3"
                        >
                            View all services
                            <FaArrowRight size={14} />
                        </Link>

                    </div>

                </div>

            </section>


            {/* Call To Action */}
            <section className="px-6 py-20 lg:px-8">

                <div className="mx-auto max-w-6xl rounded-3xl bg-[#0D47D9] px-8 py-14 text-center text-white">

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Ready to start learning?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-blue-100">
                        Take the next step and start building the technology
                        skills you need for your future.
                    </p>

                    <Link
                        to="/register"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-[#0D47D9] transition hover:bg-slate-100"
                    >
                        Create an account
                        <FaArrowRight size={14} />
                    </Link>

                </div>

            </section>


            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center">

                <p className="text-sm text-slate-500">
                    © 2026 Saystech Computer Hub. All rights reserved.
                </p>

            </footer>

        </div>
    );
};

export default Home;