import React from "react";

function Education() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-12 text-white">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 tracking-wide">
                    🎓 My Education & Experience
                </h1>

                {/* Education Section */}
                <div className="space-y-8">
                    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">📚 Bachelor of Computer Applications (BCA)</h2>
                        <p className="text-gray-300">Swami Dayananda College of Arts & Science</p>
                        <p className="text-gray-400">2018 - 2021</p>
                        <p className="mt-3 text-gray-200">
                            Specialized in software development and database systems. Graduated with Distinction.
                        </p>
                    </div>

                    <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">🏫 Higher Secondary Education</h2>
                        <p className="text-gray-300">AL Ameen Matriculation Higher Secondary School</p>
                        <p className="text-gray-400">2016 - 2018</p>
                        <p className="mt-3 text-gray-200">
                            Focused on Mathematics and Computer Science, building a strong foundation for future studies.
                        </p>
                    </div>
                </div>

                {/* Experience Section */}
                <h2 className="text-3xl font-bold mt-12 text-center">💼 Work Experience</h2>
                <div className="mt-6 bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
                    <p className="text-gray-400">July 2024 - Present</p>
                    <h2 className="text-2xl font-bold mt-2">Full-Stack Web Developer Intern</h2>
                    <p className="text-gray-300">Why Global Services</p>

                    <ul className="list-disc list-inside mt-4 space-y-2 text-gray-200">
                        <li>Developed dynamic and responsive web applications using modern frameworks.</li>
                        <li>Optimized database queries and enhanced application performance.</li>
                        <li>Collaborated with design teams to ensure a seamless user experience.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Education;
