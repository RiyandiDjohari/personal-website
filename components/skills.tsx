"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section className="mb-28 max-w-[48rem] scroll-mt-28 text-center sm:mb-40" id="skills" ref={ref}>
      <SectionHeading>My Specialized Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-8 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            custom={index}
            key={index}
            className="bg-white relative border border-black/[0.1] rounded-xl px-6 py-5 shadow-md cursor-pointer dark:bg-white/20 hover:shadow-xl hover:shadow-orange-400/50 dark:hover:shadow-cyan-500/50"
          >
            <Image src={skill} alt="icons" className="w-12 md:w-16 h-12 md:h-16" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
