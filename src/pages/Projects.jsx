import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-20 px-6">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10
                       hover:border-purple-400 hover:shadow-[0_0_25px_rgba(150,50,255,0.5)] transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-purple-300">
              {project.title}
            </h3>

            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {project.description}
            </p>

            <p className="text-blue-300 text-sm mt-2">
              <strong>Tech:</strong> {project.tech_stack}
            </p>

            {project.project_url && (
              <a
                href={project.project_url}
                className="inline-block mt-4 text-blue-400 hover:underline"
                target="_blank"
              >
                Visit Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
