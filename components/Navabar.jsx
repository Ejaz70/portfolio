"use client";
import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Experience", "Services", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="w-full shadow-sm bg-white dark:bg-gray-900 sticky top-0 z-50 transition">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Ejaz</h1>
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onMouseEnter={() => setActive(link)}
                className={`relative text-sm font-medium transition-all duration-200 
                  ${active === link ? "text-purple-600" : "text-gray-700 dark:text-gray-300"} 
                  hover:text-purple-600`}
              >
                {link}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-purple-600 transition-all duration-300 ${
                    active === link ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border hover:rotate-90 transition"
          title="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
