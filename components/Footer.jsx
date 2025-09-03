import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm text-gray-600 dark:text-gray-400">
        {/* Left Section */}
        <div>
          <h3 className="font-semibold text-purple-600 mb-2">Ejaz</h3>
          <p>
            Front-End Developer focused on crafting performant and beautiful web experiences using modern technologies like React, Next.js, Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-purple-600 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:text-purple-500">About</a></li>
            <li><a href="#skills" className="hover:text-purple-500">Skills</a></li>
            <li><a href="#services" className="hover:text-purple-500">Services</a></li>
            <li><a href="#projects" className="hover:text-purple-500">Projects</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-purple-600 mb-2">Connect</h4>
          <div className="flex gap-4 text-lg">
            <a href="https://github.com" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank"><FaXTwitter /></a>
            <a href="mailto:ejaz70207@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-purple-600 mb-2">Contact Info</h4>
          <p>Ghizer, Gilgit Baltistan, Pakistan</p>
          <p>Email: ejaz70207@gmail.com</p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-10 dark:text-gray-600">
        © 2025 Ejaz. Built with ❤️ using Next.js, Tailwind CSS & ShadCN.
      </div>
    </footer>
  );
}
