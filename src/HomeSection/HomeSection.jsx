import React from "react";
import backgroundImage from "../assets/HomeBackground.jpg";  // Ensure the path is correct.

function HeroSection() {
    return (
        <section className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center filter brightness-75"
                style={{
                    backgroundImage: `url(${backgroundImage})`,  // Correctly reference background image.
                    backgroundAttachment: "fixed",
                }}
            ></div> 

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wider leading-tight animate-fade-in">
                    Hi, I'm <span className="text-blue-500">Manighandaprabu</span>,
                </h2>
                <h2 className="text-xl md:text-3xl mb-4 font-semibold text-gray-300 animate-fade-in-delay">
                    <span className="text-blue-500">Full Stack Developer</span> and{" "}
                    <span className="text-blue-500">UI/UX Designer</span>
                </h2>
                <p className="text-md md:text-lg mb-8 max-w-2xl leading-relaxed animate-fade-in-longer text-gray-200">
                    Passionate about creating interactive web applications. I specialize
                    in front-end and back-end technologies, building seamless and
                    dynamic user experiences. Let’s create something extraordinary
                    together!
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <a
                        href="#about"
                        className="px-8 py-3 text-lg font-semibold border border-blue-500 rounded-lg shadow-md bg-transparent text-white transition-all duration-500 ease-in-out hover:bg-blue-500 hover:text-black transform hover:scale-105"
                    >
                        Learn More
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1YCzyVeTEMRxK2EhanYTvC4KipoBrrTS4/view?usp=drivesdk"
                        className="px-8 py-3 text-lg font-semibold border border-blue-500 rounded-lg shadow-md bg-transparent text-white transition-all duration-500 ease-in-out hover:bg-blue-500 hover:text-black transform hover:scale-105"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Keyframe Animations */}
            <style jsx>{`
                @keyframes fade-in {
                    0% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1.2s ease-out;
                }

                .animate-fade-in-delay {
                    animation: fade-in 1.2s ease-out 0.6s;
                    animation-fill-mode: both;
                }

                .animate-fade-in-longer {
                    animation: fade-in 1.5s ease-out 0.9s;
                    animation-fill-mode: both;
                }

                .text-4xl {
                    font-size: 2.5rem;
                    line-height: 1.2;
                    letter-spacing: 0.05em;
                    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
                }

                .text-blue-500 {
                    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
                }

                .hover\:scale-105:hover {
                    transform: scale(1.05);
                }

                a {
                    box-shadow: 0px 4px 15px rgba(255, 99, 71, 0.3);
                }

                /* Ensure responsiveness */
                @media (max-width: 768px) {
                    .text-4xl {
                        font-size: 1.8rem;
                    }

                    .text-xl {
                        font-size: 1.25rem;
                    }
                    
                    .text-md {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}

export default HeroSection;
