"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Mindeed Technologies",
    desc:
      "Built fintech-grade systems including EOD automation, reconciliation engines, and high-volume transaction processing.",
    tech: ["React", ".NET Core", "SQL Server", "Python"],
  },
  {
    role: "Product Developer",
    company: "JIVI Enterprise",
    desc:
      "Designed workforce management modules with SFTP integrations, payroll logic, and enterprise workflows.",
    tech: ["ASP.NET MVC", "Azure", "MS SQL"],
  },
  {
    role: "Software Developer",
    company: "Websyntactic Solution",
    desc:
      "Worked on CRM systems, e-commerce platforms, and responsive web applications.",
    tech: ["JavaScript", "ASP.NET", "SQL"],
  },
];

export default function Experience() {
  return (
    <section className="w-full min-h-screen px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-14">
          Experience
        </h1>

        {/* Horizontal Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="
                group relative min-w-[320px] max-w-[320px]
                rounded-3xl border border-gray-200
                bg-white
                hover:shadow-2xl
                transition-all duration-500
                overflow-hidden
              "
            >
              {/* Header (Always Visible) */}
              <div className="p-6">
                <p className="text-sm uppercase tracking-widest text-gray-500">
                  {exp.company}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  {exp.role}
                </h3>
              </div>

              {/* Hover Content */}
              <div
                className="
                  px-6 pb-6
                  max-h-0 opacity-0
                  group-hover:max-h-[400px]
                  group-hover:opacity-100
                  transition-all duration-500 ease-out
                "
              >
                <p className="text-gray-600 leading-relaxed mt-4">
                  {exp.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-gray-900 text-white
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Gradient Accent */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10
                  opacity-0 group-hover:opacity-100
                  transition
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
