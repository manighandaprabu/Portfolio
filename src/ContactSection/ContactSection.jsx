import React from "react";

function ContactSection() {
    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-20 text-white px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide leading-tight">
                    Get in Touch
                </h1>
                <p className="text-lg md:text-2xl mb-8 max-w-3xl">
                    Have questions or want to collaborate? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible!
                </p>
                <form
                    action="#"
                     method="POST"
                    className="w-full max-w-lg bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-left text-gray-300 text-sm font-medium"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-left text-gray-300 text-sm font-medium"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-left text-gray-300 text-sm font-medium"
                        >
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
