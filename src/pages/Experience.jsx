import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Experience({ items }) {
  return (
    <section id="experience" className="py-20 px-6">
      <SectionTitle title="Experience" />

      <div className="max-w-3xl mx-auto space-y-10">
        {items.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-blue-300">{exp.role}</h3>
            <p className="text-gray-400">{exp.company}</p>
            <p className="text-sm text-purple-300 mt-1">{exp.duration}</p>
            <p className="text-gray-300 mt-4">{exp.description}</p>

            {/* Neon line decoration */}
            <span className="absolute left-0 top-1/2 w-1 h-10 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
