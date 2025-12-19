import React from "react";

export default function SectionTitle({ title }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-white tracking-wide">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
    </div>
  );
}
