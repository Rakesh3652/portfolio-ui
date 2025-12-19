import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-20 px-6">
      <SectionTitle title="Skills" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="
              p-6 rounded-2xl 
              bg-white/5 backdrop-blur-xl border border-white/10
              hover:border-blue-400 
              hover:shadow-[0_0_20px_rgba(0,150,255,0.5)] 
              transition
            "
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
          >
            {/* Skill Name */}
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              {skill.name}
            </h3>

            {/* Category */}
            <p className="text-sm text-purple-300">
              <strong>Category:</strong> {skill.category}
            </p>

            {/* Level */}
            <p className="text-sm text-gray-300 mt-1 capitalize">
              <strong>Level:</strong> {skill.level}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
