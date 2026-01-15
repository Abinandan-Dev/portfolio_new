"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Mindeed Technologies",
    desc: "Built fintech-grade systems including EOD automation, reconciliation engines, and high-volume transaction processing.",
    tech: ["React", ".NET Core", "SQL Server", "Python"],
  },
  {
    role: "Product Developer",
    company: "JIVI Enterprise",
    desc: "Designed workforce management modules with SFTP integrations, payroll logic, and enterprise workflows.",
    tech: ["ASP.NET MVC", "Azure", "MS SQL"],
  },
  {
    role: "Software Developer",
    company: "Websyntactic Solution",
    desc: "Worked on CRM systems, e-commerce platforms, and responsive web applications.",
    tech: ["JavaScript", "ASP.NET", "SQL"],
  },
];
const skills = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  ".NET",
  "SQL Server",
  "MongoDB",
  "Python",
  "Automation",
  "Web Scraping",
  "Git",
  "REST APIs",
  "UI Design",
];
export default function Experience() {
  return (
    <section className="w-full min-h-screen px-6 py-24 bg-white">
  {/* Experience */}
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-center mb-14 text-gray-900"
  >
    Experience
  </motion.h1>

  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.12 } },
    }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {experiences.map((exp, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 25 },
          show: { opacity: 1, y: 0 },
        }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
      >
        <h2 className="text-xl font-semibold text-gray-900">
          {exp.role}
        </h2>
        <p className="text-gray-500">{exp.company}</p>

        <p className="mt-3 text-gray-700 leading-relaxed">
          {exp.desc}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {exp.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 h-[2px] w-0 group-hover:w-full bg-gray-300 transition-all duration-300" />
      </motion.div>
    ))}
  </motion.div>

  {/* Skills */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mt-28 mb-12 text-gray-900"
  >
    Skills
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.08 } },
    }}
    className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
  >
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          show: { opacity: 1, scale: 1 },
        }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 transition cursor-default"
      >
        {skill}
      </motion.div>
    ))}
  </motion.div>
</section>

  );
}
