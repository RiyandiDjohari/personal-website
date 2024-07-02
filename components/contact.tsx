"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%, 38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:riyandidjohari8@gmail.com">
          riyandidjohari8@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-8 relative flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          } 
          toast.success('Email send successfully!')
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          required
          maxLength={100}
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          id="message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4 outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
