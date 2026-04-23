"use client";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const navLinks = [
  "Home",
  "About",
  "Experience",
  "Services",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const useDark = storedTheme ? storedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", useDark);
    setDarkMode(useDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <nav className="w-full shadow-sm bg-white dark:bg-gray-900 sticky top-0 z-50 transition">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Ejaz
        </h1>
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
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          title={`Switch to ${darkMode ? "light" : "dark"} mode`}
          className="relative flex h-10 w-20 items-center rounded-full border border-gray-300 bg-gray-100 px-1 transition-colors duration-300 dark:border-gray-600 dark:bg-gray-800"
        >
          <span
            className={`absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white shadow-md transition-all duration-300 dark:bg-gray-900 ${
              darkMode ? "translate-x-10" : "translate-x-0"
            }`}
          />
          <span className="z-10 flex w-full items-center justify-between px-1 text-sm">
            <FiSun
              className={`transition-colors ${darkMode ? "text-gray-500" : "text-amber-500"}`}
            />
            <FiMoon
              className={`transition-colors ${darkMode ? "text-blue-300" : "text-gray-400"}`}
            />
          </span>
        </button>
      </div>
    </nav>
  );
}
