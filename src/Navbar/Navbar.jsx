import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
    const [toggle, settoggle] = useState(true);
    const [activeSection, setActiveSection] = useState("home");

    const menuItems = [
        { name: "Home", link: "#home", id: "home" },
        { name: "About", link: "#about", id: "about" },
        { name: "Skills", link: "#skills", id: "skills" },
        { name: "Project", link: "#project", id: "project" },
        { name: "Contact", link: "#contact", id: "contact" },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        menuItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, [menuItems]);

    return (
        <nav className="bg-black p-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
            {/* Logo */}
            <div className="flex items-center ml-3 space-x-2  w-[40%]">
                <h1 className="text-white text-3xl font-semibold tracking-wide">
                    <span className="text-blue-500 text-4xl">M</span>ani
                </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-start items-center space-x-8 w-[60%]">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`text-lg font-medium cursor-pointer transition-colors ease-in duration-300 ${
                            activeSection === item.id ? "text-blue-500" : "text-white hover:text-gray-300"
                        }`}
                    >
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => settoggle(!toggle)}
                    className="text-white focus:outline-none"
                >
                    {toggle ? <FaBars size={30} /> : <FaTimes size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    toggle ? "hidden" : "block"
                } md:hidden absolute top-16 right-0 w-64 bg-black p-6 shadow-lg z-40`}
            >
                <ul className="flex flex-col items-center space-y-6">
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`text-xl font-medium transition-colors ease-in duration-300 ${
                                activeSection === item.id ? "text-blue-500" : "text-white hover:text-gray-300"
                            }`}
                        >
                            <a href={item.link} onClick={() => settoggle(true)}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
