import React from "react";

export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-lg bg-white/5 border-b border-white/10
      py-4 px-10 flex justify-between items-center
    ">
      <h1 className="text-2xl font-bold tracking-wide text-white">
        Rakesh<span className="text-blue-400">.</span>
      </h1>

      <div className="flex gap-8 text-lg">
        <a href="#about" className="hover:text-blue-400 transition">About</a>
        <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
        <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
        <a href="#education" className="hover:text-blue-400 transition">Education</a>
        <a href="#achievements" className="hover:text-blue-400 transition">Achievements</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
    </nav>
  );
}
