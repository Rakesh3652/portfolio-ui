import React, { useEffect, useState } from "react";
import API from "../services/api";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Achievements from "./Achievements";
import Contact from "./Contact";

export default function Home() {
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    async function loadAll() {
      const aboutRes = await API.get("/about");
      setAbout(aboutRes.data);

      const contactRes = await API.get("/contact");
      setContact(contactRes.data);

      const skillsRes = await API.get("/skills");
      setSkills(skillsRes.data);

      const projectsRes = await API.get("/projects");
      setProjects(projectsRes.data);

      const expRes = await API.get("/experience");
      setExperience(expRes.data);

      const eduRes = await API.get("/education");
      setEducation(eduRes.data);

      const achRes = await API.get("/achievements");
      setAchievements(achRes.data);
    }

    loadAll();
  }, []);

  if (!about || !contact) {
    return <div className="text-center mt-20 text-xl">Loading portfolio...</div>;
  }

  return (
    <div>

      {/* HERO SECTION */}
      <section className="
        h-[80vh] flex flex-col justify-center items-center text-center
        bg-gradient-to-br from-gray-900 to-black
        px-6 pt-28
      ">
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          {about.hero_title}
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl">
          {about.hero_subtitle}
        </p>

        {about.profile_image_url && (
          <img
            src={about.profile_image_url}
            className="w-40 h-40 rounded-full mt-6 shadow-[0_0_20px_rgba(0,150,255,0.6)] object-cover"
          />
        )}
      </section>

      <About about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience items={experience} />
      <Education items={education} />
      <Achievements items={achievements} />
      <Contact info={contact} />
    </div>
  );
}
