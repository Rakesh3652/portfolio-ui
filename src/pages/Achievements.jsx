import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Achievements({ items }) {
  return (
    <section id="achievements" className="py-20 px-6">
      <SectionTitle title="Achievements" />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {items.map((ach, index) => (
          <motion.div
            key={index}
            className="p-5 text-lg rounded-xl bg-white/5 backdrop-blur-xl border border-white/10
                       hover:border-blue-400 hover:shadow-[0_0_20px_rgba(0,150,255,0.4)]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-gray-300 font-semibold">{ach.title}</p>

            {ach.year && (
              <p className="text-blue-300 text-sm mt-1">
                {ach.year}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
