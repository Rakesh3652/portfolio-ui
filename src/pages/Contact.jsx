import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function Contact({ info }) {
  return (
    <section id="contact" className="py-20 px-6">
      <SectionTitle title="Contact" />

      <motion.div
        className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center text-lg text-gray-300 space-y-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p><strong>Email:</strong> {info.email}</p>
        <p><strong>Phone:</strong> {info.phone}</p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a className="text-blue-400 underline" href={info.github_url} target="_blank">
            {info.github_url}
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a className="text-blue-400 underline" href={info.linkedin_url} target="_blank">
            {info.linkedin_url}
          </a>
        </p>

        <p><strong>Address:</strong> {info.address}</p>
      </motion.div>
    </section>
  );
}
