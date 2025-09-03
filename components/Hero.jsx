"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

// ✅ Image paths (must exist in /public/images/)
const images = ["/images/profile.png", "/images/profile1.jpg"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-10"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-purple-600">Ejaz Ahmad</span>
        </h1>

        <h2 className="text-lg sm:text-xl text-gray-600 min-h-[40px]">
          <Typewriter
            words={["Frontend Developer", "React.js Expert", "UI/UX Designer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-600">
          I'm a creative developer based in Pakistan, and I'm very passionate
          and dedicated to my work.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md hover:bg-purple-700 transition">
            <FiSend />
            Say Hello
          </button>
          <a
            href="https://drive.google.com/file/d/1TtewRuB-eG7yCpOUTi6BdR1QHD-__Ee7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 transition hover:text-white text-center"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl text-gray-700">
          <a href="https://github.com/Ejaz70">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ejaz-ahmad-994712262">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/its_mirejaz05/?hl=en">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-100 shadow-xl rounded-full overflow-hidden animate-blob">
          <img
            src={images[currentIndex]}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
