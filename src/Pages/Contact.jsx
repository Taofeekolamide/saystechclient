import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Contact = () => {
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
                            className="font-medium text-[#0D47D9]"
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


            {/* Hero */}
            <section
                className="relative flex min-h-[450px] items-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-slate-950/65"></div>

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
                    <div className="max-w-3xl">

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                            Contact Us
                        </p>

                        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Let’s start a conversation.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                            Have a question or want to learn more about
                            Saystech Computer Hub? We would love to hear from
                            you.
                        </p>

                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section className="px-6 py-20 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

                    {/* Contact Information */}
                    <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0D47D9]">
                            Get In Touch
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                            We’re here to help.
                        </h2>

                        <p className="mt-5 max-w-xl leading-7 text-slate-600">
                            Whether you have questions about our courses,
                            services, or how to get started, feel free to
                            reach out to us.
                        </p>


                        <div className="mt-8 space-y-6">

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Location
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                        Your location goes here
                                    </p>
                                </div>
                            </div>


                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaPhone />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Phone
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                        +234 XXX XXX XXXX
                                    </p>
                                </div>
                            </div>


                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Email
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                        info@saystech.com
                                    </p>
                                </div>
                            </div>


                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0D47D9]">
                                    <FaClock />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Working Hours
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                        Monday – Friday, 9:00 AM – 5:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="rounded-2xl bg-slate-50 p-6 sm:p-8">

                        <h2 className="text-2xl font-bold text-slate-900">
                            Send us a message
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Fill out the form below and we’ll get back to you.
                        </p>


                        <form className="mt-7 space-y-5">

                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0D47D9] focus:ring-2 focus:ring-blue-100"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0D47D9] focus:ring-2 focus:ring-blue-100"
                                />
                            </div>


                            {/* Subject */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0D47D9] focus:ring-2 focus:ring-blue-100"
                                />
                            </div>


                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0D47D9] focus:ring-2 focus:ring-blue-100"
                                ></textarea>
                            </div>


                            {/* Button */}
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#0D47D9] px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Send Message
                                <FaArrowRight size={14} />
                            </button>

                        </form>

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
                        Explore our courses and take the next step in your
                        technology learning journey.
                    </p>

                    <Link
                        to="/courses"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-[#0D47D9] transition hover:bg-slate-100"
                    >
                        Explore courses
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
                                Building practical technology skills and
                                creating opportunities for learning and growth
                                in the digital world.
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

export default Contact;