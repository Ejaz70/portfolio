"use client";

import { useEffect } from "react";
import { FaUser, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        About <span className="text-purple-600">Me</span>
      </h2>

      <div
        className="flex flex-col md:flex-row items-center gap-10"
        data-aos="zoom-in"
      >
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-90 h-130 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/profile.png"
              alt="Ejaz Ahmad"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 space-y-6 text-gray-700 dark:text-gray-300">
          {/* Description */}
          <div>
            <h3 className="text-2xl font-semibold">
              I'm <span className="text-purple-600">Ejaz Ahmad</span>, a passionate frontend developer from Pakistan.
            </h3>
            <p className="mt-2">
              I'm currently pursuing a Bachelor's degree in Computer Science. I specialize in building responsive, modern, and user-friendly websites using React.js, Next.js, and Tailwind CSS. With a keen eye for UI/UX and dedication to quality, I enjoy transforming creative ideas into functional web applications.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            <div>
              <h4 className="text-3xl font-bold text-purple-600">2+</h4>
              <p className="text-sm">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-purple-600">7+</h4>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-purple-600">5+</h4>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaUser className="text-purple-600" />
              <span className="font-medium">Name:</span> Ejaz Ahmad
            </div>
            <div className="flex items-center gap-3">
              <FaBirthdayCake className="text-purple-600" />
              <span className="font-medium">DOB:</span> 10/8/2004
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-purple-600" />
              <span className="font-medium">Address:</span> Ghizer, Gilgit Baltistan
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-purple-600" />
              <span className="font-medium">Email:</span> ejaz70207@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
