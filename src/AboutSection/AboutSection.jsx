import React from "react";

function AboutSection() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white px-6">
            <div className="container mx-auto flex flex-col items-center text-center max-w-4xl">
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                    About Me
                </h1>

                {/* Content */}
                <div className="text-lg sm:text-xl text-gray-300 space-y-6">
                    <p>
                        I’m <span className="text-blue-500 font-semibold">Manighandaprabu</span>, a Full Stack Developer
                        with a passion for creating innovative solutions. With expertise in both
                        front-end and back-end technologies, I craft user-friendly and high-performance
                        applications. I thrive on challenges and continuously strive to learn and
                        implement the latest technologies in my projects.
                    </p>

                    <p>
                        My journey in development is fueled by curiosity and a love for problem-solving.
                        Whether it’s building intuitive interfaces or optimizing backend processes, I am
                        dedicated to delivering excellence in every aspect of my work.
                    </p>
                </div>

                {/* Call-to-Action Button */}
                <a 
                    href="#contact" 
                    className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-lg rounded-full shadow-lg 
                    hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 transition-transform 
                    transform hover:scale-105 hover:shadow-2xl duration-300"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}

export default AboutSection;
