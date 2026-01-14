"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";
import { SiAmazonroute53, SiDotnet, SiNextdotjs } from "react-icons/si";

export const skills = [
  { name: "React", icon: FaReact },
  { name: ".NET MVC", icon: SiDotnet },
  { name: "Python", icon: FaPython },
  { name: "SQL Server", icon: FaDatabase },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Amazon", icon: SiAmazonroute53 },
];

export default function TechStackScroller() {
  return (
    <section className=" py-16 overflow-hidden">
      
      <motion.div
        className="flex gap-10 w-max px-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {[...skills, ...skills].map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              className="
                min-w-[120px]
                flex flex-col items-center justify-center
                backdrop-blur-md
                bg-red/90
                border border-green/20
                rounded-xl
                p-5
                text-white
                hover:scale-105 transition
                shadow-lg
              "
            >
              <Icon className="text-4xl mb-2 text-red-900" />
              <p className="text-sm text-black font-medium">{skill.name}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
