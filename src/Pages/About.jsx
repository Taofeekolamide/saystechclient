import {
    FaLaptopCode,
    FaGraduationCap,
    FaLightbulb,
    FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const About = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Navbar */}
            <nav className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-0">

                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Saystech Computer Hub"
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        <Link
                            to="/"
                            className="font-medium text-slate-600 transition hover:text-[#0D47D9]"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="font-medium text-[#0D47D9]"
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

                    <Link
                        to="/login"
                        className="rounded-lg bg-[#0D47D9] px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
                    >
                        Sign in
                    </Link>
                </div>
            </nav>


            {/* About Hero */}
            <section
                className="relative flex min-h-[520px] items-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/65"></div>

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                            About Saystech
                        </p>

                        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Empowering people through technology and learning.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                            We help learners develop practical technology skills,
                            explore their creativity, and build knowledge for the
                            digital world.
                        </p>

                    </div>
                </div>
            </section>


            {/* Who We Are */}
            <section className="px-6 py-20 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D47D9]">
                            Who We Are
                        </p>

                        <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Learning that prepares you for the digital world.
                        </h2>

                        <p className="mt-6 leading-7 text-slate-600">
                            Saystech Computer Hub is focused on helping individuals
                            develop practical technology skills and gain knowledge
                            that can be applied in today's digital environment.
                        </p>

                        <p className="mt-4 leading-7 text-slate-600">
                            Through structured learning and practical experience,
                            learners can explore technology, develop their abilities,
                            and become more confident in applying what they learn.
                        </p>

                        <Link
                            to="/services"
                            className="mt-7 inline-flex items-center gap-2 font-semibold text-[#0D47D9] transition hover:gap-3"
                        >
                            Explore our services
                            <FaArrowRight size={14} />
                        </Link>
                    </div>


                    <div className="overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                            alt="Students learning together"
                            className="h-[420px] w-full object-cover"
                        />
                    </div>

                </div>
            </section>


            {/* Building Skills */}
            <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D47D9]">
                            What We Focus On
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                            Building skills for the future
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            We focus on helping learners understand technology,
                            develop practical skills, and continue growing.
                        </p>
                    </div>


                    <div className="mt-12 grid gap-7 md:grid-cols-3">

                        {/* Technology */}
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                                alt="Technology"
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaLaptopCode size={20} />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                    Technology
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Explore technology and develop useful digital
                                    skills for today's connected world.
                                </p>
                            </div>

                        </div>


                        {/* Learning */}
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                                alt="Learning"
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaGraduationCap size={20} />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                    Learning
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Gain knowledge through structured learning and
                                    practical experience.
                                </p>
                            </div>

                        </div>


                        {/* Growth */}
                        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                                alt="Growth"
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-7">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaLightbulb size={20} />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                    Growth
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Build confidence and develop skills that can
                                    support your personal and professional growth.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-6xl rounded-3xl bg-[#0D47D9] px-8 py-14 text-center text-white">

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Ready to start learning?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-blue-100">
                        Take the next step and explore the learning opportunities
                        available at Saystech Computer Hub.
                    </p>

                    <Link
                        to="/register"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-[#0D47D9] transition hover:bg-slate-100"
                    >
                        Get started
                        <FaArrowRight size={14} />
                    </Link>

                </div>
            </section>


            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white px-6 py-12 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    <div className="grid gap-10 md:grid-cols-3">

                        {/* Brand */}
                        <div>
                            <img
                                src={logo}
                                alt="Saystech Computer Hub"
                                className="h-20 w-auto object-contain"
                            />

                            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                                Building practical technology skills and creating
                                opportunities for learning and growth in the
                                digital world.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                                Quick Links
                            </h3>

                            <div className="mt-4 flex flex-col gap-3">
                                <Link
                                    to="/"
                                    className="text-sm text-slate-500 transition hover:text-[#0D47D9]"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/about"
                                    className="text-sm text-slate-500 transition hover:text-[#0D47D9]"
                                >
                                    About
                                </Link>

                                <Link
                                    to="/services"
                                    className="text-sm text-slate-500 transition hover:text-[#0D47D9]"
                                >
                                    Services
                                </Link>

                                <Link
                                    to="/contact"
                                    className="text-sm text-slate-500 transition hover:text-[#0D47D9]"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Account */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                                Account
                            </h3>

                            <div className="mt-4 flex flex-col gap-3">
                                <Link
                                    to="/login"
                                    className="text-sm text-slate-500 transition hover:text-[#0D47D9]"
                                >
                                    Sign in
                                </Link>

                                <Link
                                    to="/register"
                                    className="text-sm text-slate-500 transition hover:text-[#0D47D9]"
                                >
                                    Create an account
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="mt-10 border-t border-slate-200 pt-6">
                        <p className="text-center text-sm text-slate-500">
                            © 2026 Saystech Computer Hub. All rights reserved.
                        </p>
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default About;