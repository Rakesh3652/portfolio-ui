import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function About({ about }) {
  return (
    <section id="about" className="py-20 px-6">
      <SectionTitle title="About Me" />

      <motion.div
        className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          {about.about_text}
        </p>

        {about.profile_image_url && (
          <img
            src={about.profile_image_url}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mt-6 object-cover shadow-[0_0_20px_rgba(0,150,255,0.4)]"
          />
        )}
      </motion.div>
    </section>
  );
}
