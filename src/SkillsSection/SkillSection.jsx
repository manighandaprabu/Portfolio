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
        { name: "Git&GitHub", icon: <FaGitAlt size={48} color="#F05032" /> },
    ];

    return (
        <section className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-800">
            <div className="relative z-10 flex flex-col justify-center items-center h-full m-7 text-center text-white px-6">
                <h1 className="text-2xl md:text-4xl font-extrabold mb-6 tracking-wide leading-tight">
                    My Skills
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center bg-gray-900 bg-opacity-70 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
                        >
                            <div className="text-4xl">{skill.icon}</div>
                            <p className="mt-4 text-xl font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
