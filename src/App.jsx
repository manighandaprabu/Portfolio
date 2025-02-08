import React from "react";
import Nav from "./Navbar/Navbar";
import HeroSection from "./HomeSection/HomeSection";
import AboutSection from "./AboutSection/AboutSection";
import SkillsSection from "./SkillsSection/SkillSection";
import ProjectSection from "./ProjectSection/projectSection";
import ContactSection from "./ContactSection/ContactSection";
import Education from "./Education/Education";

function App() {
    return (
        <>
            {/* Navbar */}
            <Nav />
            
            {/* Sections */}
            <div id="home">
                <HeroSection />
            </div>
            <div id="about">
                <AboutSection />
            </div>
            <div id="Education">
                <Education/>
            </div>
            <div id="skills">
                <SkillsSection />
            </div>
            <div id="project">
                <ProjectSection />
            </div>
            <div id="contact">
                <ContactSection />
            </div>
        </>
    );
}

export default App;
