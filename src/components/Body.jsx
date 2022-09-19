import React from "react";
import GithubCalendar from "./GithubCalendar/GithubCalendar";
import AboutSection from "./Sections/AboutSection/AboutSection";
import BannerSection from "./Sections/BannerSection/BannerSection";
import Cta from "./Sections/Cta/Cta";
import ProjectSection from "./Sections/ProjectsSection/ProjectSection";
import Skills from "./Sections/SkillsSection/SkillsSection.jsx";
// import Footer from "./footer/Footer";

function Body() {
  return (
    <div> 
      <BannerSection />
      <AboutSection />
      <Skills />
      <GithubCalendar />
      <ProjectSection />
      <Cta />
    </div>
  );
}

export default Body;
