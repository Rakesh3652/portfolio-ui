import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Education({ items }) {
  return (
    <section id="education" className="py-20 px-6">
      <SectionTitle title="Education" />

      <div className="max-w-3xl mx-auto space-y-10">
        {items.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-purple-300">
              {edu.degree}
            </h3>

            <p className="text-gray-400">{edu.institution}</p>

            <p className="text-sm text-blue-300 mt-1">
              {edu.year}
            </p>

            {edu.description && (
              <p className="text-gray-300 mt-4">{edu.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
