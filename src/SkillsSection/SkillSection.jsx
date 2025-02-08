import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

function SkillsSection() {
    const skills = [
        { name: "HTML", icon: <FaHtml5 size={48} color="#E34F26" /> },
        { name: "CSS", icon: <FaCss3Alt size={48} color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs size={48} color="#F7DF1E" /> },
        { name: "React", icon: <FaReact size={48} color="#61DBFB" /> },
        { name: "Node.js", icon: <FaNode size={48} color="#68A063" /> },
        { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
        { name: "Express.js", icon: <SiExpress size={48} color="#000000" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#38BDF8" /> },
        { name: "Git & GitHub", icon: <FaGitAlt size={48} color="#F05032" /> },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-800 px-4 py-10">
            <div className="w-full max-w-6xl text-center text-white">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-wide">
                    My Skills
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 p-5 rounded-xl shadow-lg transition-all transform hover:scale-105"
                        >
                            <div className="text-5xl">{skill.icon}</div>
                            <p className="mt-3 text-lg sm:text-xl font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
