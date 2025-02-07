import React from "react";

function ProjectSection() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio to showcase my projects and skills.",
            technologies: ["React", "Tailwind CSS", "Three.js"],
            link: "#",
        },
        {
            title: "Online Movie Ticket Booking Website",
            description: "A full-stack platform for booking movie tickets with secure payment integration.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/PopcornSpot?view_as=member",
        },
        {
            title: "Blog-Page",
            description: "A platform where users can upload and download daily wallpapers.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "#",
        },
    ];

    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            <div className="relative z-10 flex flex-col justify-center items-center text-center mt-10 text-white px-6 py-12">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-wide leading-tight">
                    My Projects
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-6xl ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                        >
                            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-blue-500 text-white text-sm rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="text-blue-500 underline hover:text-blue-400 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
