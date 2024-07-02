"use client";
import Image from "next/image";
import React from "react";
import profilePic from "@/public/profile-pic.png";
import profilePic1 from "@/public/profile-pic1.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();
  return (
    <section className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home" ref={ref}>
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.4,
          }}
        >
          <Image
            src={theme == "light" ? profilePic1 : profilePic}
            alt="Riyandi Djohari"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="rounded-full h-32 w-32 border-white shadow-xl object-cover border-[0.35rem]"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-5 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl md:text-4xl xl:text-5xl bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent dark:from-[#07beb8] dark:via-[#3dccc7] dark:to-[#07beb8]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Riyandi Dwitama Djohari</span>
      </motion.h1>
      <motion.h1
        className="mb-10 px-4 text-xl text-[#0D2341] font-medium !leading-[1.5] sm:text-2xl md:text-3xl dark:text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Currently learning <span className="font-bold">Full Stack Web Development</span> using{" "}
        <span className="font-bold">Javascript</span>. For building website and web applications. My focus is{" "}
        <span className="underline">React.js</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="relative flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium "
      >
        <Link
          href="#contact"
          className="w-fit group bg-[#0D2341] text-white px-7 py-3 flex items-center gap-2 rounded-full shadow-md outline-none focus:scale-110 hover:scale-105 active:scale-105 transition dark:bg-[#07beb8]"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download={true}
          className=" w-fit group bg-white px-7 py-3 flex items-center gap-2 rounded-full shadow-md outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
        >
          Download CV <HiDownload />
        </a>
        <div className="flex gap-2 items-center justify-center">
          <a
            href="https://linkedin.com/in/riyandidjohari"
            target="_blank"
            className="bg-white p-4 flex items-center gap-2 rounded-full shadow-md focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin color="#0077b5" size={24} />
          </a>
          <a
            href="https://github.com/riyandidjohari"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full shadow-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
