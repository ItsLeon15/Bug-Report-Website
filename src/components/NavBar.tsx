import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import React from "react";

export function Logo() {
    let hoverCount = 0;
    let lastHoverTime = 0;

    function handleHover() {
        const currentTime = new Date().getTime();
        if (currentTime - lastHoverTime < 5000) {
            hoverCount++;
            if (hoverCount === 3) {
                const logo = document.querySelector("img");
                if (logo) {
                    setTimeout(() => {
                        logo.style.animation = "rotation 1s linear 1";
                    }, 1000);

                    setTimeout(() => {
                        logo.style.animation = "";
                    }, 2000);
                }
                hoverCount = 0;
            }
        } else {
            hoverCount = 0;
        }
        lastHoverTime = currentTime;
    }

    return (
        <img src="/images/plugin/bug_report_logo.png" alt="Logo" className="h-12 w-12 hover:scale-110 transition-transform duration-300" onMouseOver={handleHover} onMouseDown={handleHover} />
    );
}

export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center w-full text-white">
            <div className="flex items-center space-x-3">
                <Logo />
                <div className="text-2xl font-semibold">
                    <a href="/" className="text-2xl font-semibold text-slate-300">
                        Bug Report
                    </a>
                </div>
            </div>

            <div className="flex space-x-6 items-center">
                <Link to="/" className="text-gray-300 hover:text-gray-400 transition duration-300">Home</Link>
                <Link to="/documentation" className="text-gray-300 hover:text-gray-400 transition duration-300">Documentation</Link>
                <motion.a
                    href="https://www.spigotmc.org/resources/bug-report-1-16-4-1-20-4.110732"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    whileHover={{scale: 1.05}}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Install
                </motion.a>
            </div>
        </nav>
    );
};
