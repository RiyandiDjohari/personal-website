"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Informatics Engineering</span>, I decided to
        pursue my passion for programming. Fortunately, I had the opportunity to be one of the participants of the{" "}
        <span className="font-medium">full-stack web development</span> bootcamp for 6 months, organized by{" "}
        <span className="font-medium">Binar Academy and Bank BCA.</span> My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and PostgreSQL</span>. I am also familiar with TypeScript
        and Prisma. I am always looking to learn new technologies. Currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a <span className="underline">Frontend Developer.</span>
      </p>

      <p>
        <span className="italic">In my spare time</span>, I enjoy playing video games, reading some books, and playing
        guitar. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about{" "}
        <span className="font-medium">philosophy</span>. and learning{" "}
        <span className="font-medium">mandarin language.</span>
      </p>
    </motion.section>
  );
}
