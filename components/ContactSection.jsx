"use client";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          CONTACT ME
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">Let's connect!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm currently open to new opportunities. Feel free to drop a message.
            </p>
            <div className="flex gap-4 text-2xl ">
              <a href="https://github.com/Ejaz70" target="_blank" className="hover:text-blue-700"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ejaz-ahmad-994712262/" target="_blank" className="hover:text-blue-700"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank"className="hover:text-blue-700"><FaXTwitter /></a>
              <a href="" className="hover:text-blue-700"><FaEnvelope /></a>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border px-4 py-2 rounded-md dark:bg-blue-300 dark:border-gray-700 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border px-4 py-2 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full border px-4 py-2 rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-indigo-700 transition"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
