import React from "react";
import { Code, Monitor, Phone, BarChart2, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: <Code size={28} className="text-purple-600" />,
    title: "Web Development",
    description: "Building responsive, modern, and scalable websites with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <Monitor size={28} className="text-purple-600" />,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces for web and mobile applications.",
  },
  {
    icon: <Phone size={28} className="text-purple-600" />,
    title: "Mobile Development",
    description: "Creating mobile-friendly and cross-platform apps to reach a wider audience.",
  },
  {
    icon: <BarChart2 size={28} className="text-purple-600" />,
    title: "SEO & Analytics",
    description: "Improving website visibility and analyzing user data to optimize performance.",
  },
  {
    icon: <Smartphone size={28} className="text-purple-600" />,
    title: "Responsive Design",
    description: "Ensuring seamless user experiences across all devices and screen sizes.",
  },
  {
    icon: <Zap size={28} className="text-purple-600" />,
    title: "Performance Optimization",
    description: "Speeding up websites and applications for the best user experience.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl p-7 flex items-start gap-8 border border-gray-300 dark:border-gray-700 hover:border-purple-600 transition-colors cursor-pointer shadow-sm hover:shadow-md"
          >
            <div className="mt-1">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xl mb-7">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
