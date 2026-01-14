"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import InfiniteScroller from "../components/InfiniteScroller";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
      className="relative "
    >
      <div className="w-full min-h-screen flex">
        <div className="w-1/3 flex items-center justify-center  relative  px-4 float-right">
          <div className="absolute -right-20">
            <p className="text-3xl font-bold mb-4">Abinandan N</p>
            <motion.h1
  className="font-extrabold text-5xl"
  whileHover={{ letterSpacing: "0.4em" }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  FULL-STACK <br />
  DEVELOPER
</motion.h1>
            <div className="flex items-center gap-5 my-8 text-gray-700  z-50 cursor-pointer">
              <a
                href="https://github.com/Abinandan-Dev"
                className="transition transform hover:scale-125"
              >
                <FaGithub
                  className="text-gray-700 hover:text-black transition"
                  size={36}
                />
              </a>

              <a href="#" className="transition transform hover:scale-125">
                <FaInstagram
                  className="text-gray-700 hover:text-pink-500 transition"
                  size={36}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/abinandan-natraj-696800252/"
                className="transition transform hover:scale-125"
              >
                <FaLinkedin
                  className="text-gray-700 hover:text-blue-600 transition"
                  size={36}
                />
              </a>

              <a href="#" className="transition transform hover:scale-125">
                <FaTwitter
                  className="text-gray-700 hover:text-sky-500 transition"
                  size={36}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/3  flex items-center justify-center relative ">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <Image
              src="/images/profile.png"
              alt="Banner Image"
              width={600}
              height={600}
              className="object-cover "
            />
          </motion.div>
        </div>
        <div className="w-1/3 flex items-center justify-center  px-4 space-y-6 relative">
          <div className=" p-10 pb-28 pl-70 absolute -z-1 -left-80 bg-gradient-to-br from-indigo-500/15 via-green-500/10 to-red-500/15">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-extrabold tracking-tight mb-6">
                ABOUT ME
              </h2>

              {/* Description */}
              
              <p className="text-gray-600 leading-relaxed max-w-2xl mb-10">
                Hi, I’m{" "}
                <span className="font-semibold text-gray-900">Abinandan</span> —
                a Full-Stack Developer with 4+ years of experience building
                scalable fintech and business applications. I specialize in
                turning complex requirements into reliable, high-performance web
                solutions using modern technologies.
              </p>
            </motion.div>
            {/* Stats */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
              <div>
                <p className="font-semibold text-gray-900">Call Today :</p>
                <p className="text-gray-600">+91 9080849868</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Email :</p>
                <p className="text-gray-600">abinandann1@gmail.com</p>
              </div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

  {[
    { label: "Call", value: "+91 9080849868", icon: "📞" },
    { label: "Email", value: "abinandann1@gmail.com", icon: "✉️" },
  ].map((item, i) => (
    <div
      key={i}
      className="
        relative p-6 rounded-2xl border border-gray-200
        overflow-hidden group cursor-pointer
      "
    >
      <div className="
        absolute inset-0 bg-gradient-to-br
        from-indigo-500/10 via-green-500/10 to-red-500/10
        opacity-0 group-hover:opacity-100 transition
      " />

      <div className="relative flex items-center gap-4">
        <span className="text-2xl">{item.icon}</span>
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500">
            {item.label}
          </p>
          <p className="font-semibold text-gray-900">
            {item.value}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


            {/* Contact */}

            <div className="grid grid-cols-1 sm:grid-cols-1  mb-0 absolute -bottom-15 -left-10">
              <InfiniteScroller />
            </div>

            {/* Social Icons */}

            {/* Button */}
            {/* <button className="px-6 py-2 border border-indigo-500 text-indigo-500 rounded-full font-semibold hover:bg-indigo-500 hover:text-white transition">
            MY STORY
          </button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
