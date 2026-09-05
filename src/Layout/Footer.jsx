import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white">

            <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-slate-500 md:flex-row">

                <p>
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-[#0D47D9]">
                        Saystech Computer Hub
                    </span>
                    . All rights reserved.
                </p>

                <div className="flex items-center gap-6">

                    <a href="/privacy" className="transition hover:text-[#0D47D9]">
                        Privacy Policy
                    </a>

                    <a
                        href="/terms"
                        className="transition hover:text-[#0D47D9]"
                    >
                        Terms
                    </a>

                    <a
                        href="/support"
                        className="transition hover:text-[#0D47D9]"
                    >
                        Support
                    </a>

                </div>

                <p className="flex items-center gap-2">

                    Made with

                    <FaHeart className="text-red-500" />

                    by

                    <span className="font-semibold text-slate-700">
                        Saystech
                    </span>

                </p>

            </div>

        </footer>
    );
};

export default Footer;