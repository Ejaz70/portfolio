"use client";

import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills, projects, and experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/pro1.jpg",
    link: "https://ayushsoni.dev",
  },
  {
    title: "Restaurant Website",
    description: "Designed and developed a stylish restaurant website featuring a responsive layout, digital menu, booking/reservation options, and smooth user experience to attract and engage customers.",
    tech: ["React", "CSS"],
    image: "/pro2.jpg",
    link: "https://ecommerce.example.com",
  },
  {
    title: "Modern AI Solutions Web Hero Section",
    description: "Crafted a sleek and modern hero section for a tech company offering AI services, featuring responsive layout, engaging CTAs, and professional design aligned with branding goals.",
    tech: ["React", "Socket.io", "Express"],
    image: "/pro3.jpg",
    link: "",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Visit Project &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
