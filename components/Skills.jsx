import React, { useState } from "react";
import {
  Code,
  Atom,
  Database,
  Server,
  Cpu,
  Settings,
  ShieldCheck,
  PenTool, // ✅ replace invalid Tool or Wrench
  Hammer,  // ✅ optional: replace another tool
} from "lucide-react";




const skillCategories = [
  {
    question: "Programming Languages",
    icon: <Code size={18} className="text-purple-600" />,
    skills: [
      { name: "JavaScript", icon: <Code size={18} className="text-yellow-500" /> },
      { name: "TypeScript", icon: <Code size={18} className="text-blue-600" /> },
      { name: "Java", icon: <Cpu size={18} className="text-red-600" /> },
      { name: "Python", icon: <Cpu size={18} className="text-green-600" /> },
      { name: "HTML", icon: <Code size={18} className="text-orange-500" /> },
      { name: "CSS", icon: <PenTool size={18} className="text-blue-600" /> },
      { name: "SQL", icon: <Database size={18} className="text-purple-600" /> },
      { name: "JSON", icon: <PenTool size={18} className="text-yellow-500" /> },
    ],
  },
{
  question: "Frontend Development",
  icon: <Atom size={18} className="text-cyan-500" />,
  skills: [
    { name: "React.js", icon: <Atom size={18} className="text-cyan-500" /> },
    { name: "Next.js", icon: <PenTool size={18} className="text-black" /> },
    { name: "Tailwind CSS", icon: <PenTool size={18} className="text-blue-400" /> },
  ],
},

  {
    question: "Backend Development",
    icon: <Server size={18} className="text-gray-600" />,
    skills: [
      { name: "Node.js", icon: <Server size={18} className="text-green-600" /> },
      { name: "Express.js", icon: <Server size={18} className="text-gray-700" /> },
    ],
  },
  {
    question: "Databases",
    icon: <Database size={18} className="text-purple-600" />,
    skills: [
      { name: "MongoDB", icon: <Database size={18} className="text-green-700" /> },
      { name: "MySQL", icon: <Database size={18} className="text-blue-700" /> },
    ],
  },
  {
    question: "DevOps & Tools",
    icon: <Settings size={18} className="text-orange-600" />,
    skills: [
      { name: "Git", icon: <PenTool size={18} className="text-red-600" /> },
      { name: "GitHub", icon: <PenTool size={18} className="text-black" /> },
 
    ],
  },
  {
    question: "AI & Authentication",
    icon: <ShieldCheck size={18} className="text-blue-600" />,
    skills: [
      { name: "Firebase Auth", icon: <ShieldCheck size={18} className="text-orange-600" /> },
      { name: "NextAuth.js", icon: <ShieldCheck size={18} className="text-purple-600" /> },
    ],
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                {category.icon}
                {category.question}
              </div>
              <span>{openIndex === index ? "−" : "^"}</span>
            </button>
            {openIndex === index && (
              <div className="bg-gray-50 dark:bg-gray-900 px-4 py-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
