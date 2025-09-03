"use client";


import React, { useState } from "react";

import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    title: "Web Development ",
    org: "Appo Matrix",
    duration: "Jul 2024 - present",
    description: "Worked on modern web applications using React.js and Tailwind CSS.",
  },
  {
    title: "Frontend Intern",
    org: "Techzoid",
    duration: "Jun 2022 - Jul 2023",
    description: "Built responsive UI components with JavaScript and React.",
  },
];

const educationData = [
  {
    title: "B.Sc. Computer Science",
    org: "Karakorum International University",
    duration: "2023 - 2027",
    description: "Studying Computer Science and web technologies.",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    org: "Learning Resource Higher School",
    duration: "2020 - 2022",
    description: "Completed science stream with pre-Engineering.",
  },
  {
    title: "Secondary School Certificate (SSC)",
    org: "Learning Resource Higher School",
    duration: "2018 - 2020",
    description: "Completed science stream with Science.",
  },
];

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const data = activeTab === "experience" ? experienceData : educationData;

  return (
    <section  id= "experience" className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Experience & Education</h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition ${
            activeTab === "experience"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          }`}
        >
          <Briefcase size={16} />
          Experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition ${
            activeTab === "education"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          }`}
        >
          <GraduationCap size={16} />
          Education
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-600" />

        <div className="flex flex-col gap-16">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = activeTab === "experience" ? Briefcase : GraduationCap;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="md:w-1/2 md:px-6">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 relative">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Icon size={16} className="text-purple-600" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.org} &middot; {item.duration}
                    </p>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Small dot on the timeline */}
                <div className="hidden md:flex items-center justify-center w-3 h-3 rounded-full bg-purple-600 z-10 shadow-md" />

                {/* Spacer for symmetry */}
                <div className="md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
