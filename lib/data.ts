import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bcrImg from "@/public/images/bcr.png";
import dailyCourseImg from "@/public/images/daily-course.png";
import forumCareImg from "@/public/images/forum-care.png";
import lmsWebAdmin from "@/public/images/lms-webadmin.png";
import lmsWebUser from "@/public/images/lms-enduser.png";
import faceRecognitionImg from "@/public/images/face-recognition-app.jpeg";
// Skills
import antd from "@/public/icons/ant-design.svg";
import html from "@/public/icons/html5.svg";
import css from "@/public/icons/css3.svg";
import expressjs from "@/public/icons/express-js.svg";
import framerMotion from "@/public/icons/framer-motion.svg";
import git from "@/public/icons/git.svg";
import javascript from "@/public/icons/javascript.svg";
import firebase from "@/public/icons/firebase.svg";
import nextjs from "@/public/icons/nextjs.svg";
import postgresql from "@/public/icons/postgresql.svg";
import prisma from "@/public/icons/prisma.svg";
import react from "@/public/icons/react.svg";
import redux from "@/public/icons/redux.svg";
import tailwindcss from "@/public/icons/tailwindcss.svg";
import typescript from "@/public/icons/typescript.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree of Computer",
    location: "Palu, Tadulako University.",
    description:
      "Graduated with a GPA of 3.92 out of 4.00. During my studies, I was interested in frontend development such as HTML, CSS, JavaScript, and React.js.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2019 - Jan 2024",
  },
  {
    title: "Bootcamp Front-End Engineer (React.js)",
    location: "Alterra Academy, Malang (Remote)",
    description:
      "I joined an independent study program for 6 months, the key learning topics I studied are as follows: Git, HTML/CSS, Bootstrap, Javascript, React.js. Redux, REST API, GraphQL, Deployment.",
    icon: React.createElement(FaReact),
    date: "Feb 2022 - Jul 2022",
  },
  {
    title: "Bootcamp Full-Stack Web Developer Javascript",
    location: "SYNRGY Academy Batch 7, Jakarta (Remote)",
    description:
      "I had the opportunity to participate in full-stack web development bootcamp for 6 months, the key learning topics that i studied is git, React.js, Express.js, Tailwind, Typescript, PostgreSQL, Knex, RESTful API etc",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Aug 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Daily Course",
    description:
      "Daily Course is a team project to efficiently manage and access courses. I play a role as a frontend developer and developed the landing page section.",
    tags: ["React", "TypeScript", "Tailwind", "Daisy UI"],
    imageUrl: dailyCourseImg,
    githubUrl: "https://github.com/CodeCraftersUnion/daily-course-students",
    demoUrl: "http://dailycourse.vercel.app",
  },
  {
    title: "Binar Car Rental",
    description:
      "Binar Car Rental is a full stack web application for user to view & filter cars. and admin can manage data car.",
    tags: ["React", "Vite", "PostgreSQL", "Tailwind", "Knex", "Express.js", "Cloudinary", "Ant Design"],
    imageUrl: bcrImg,
    githubUrl: "https://github.com/RiyandiDjohari/24001143-synrgy7-riy-binar_car_rental-ch7",
    demoUrl: "http://riy-binar-car-rental.netlify.app",
  },
  {
    title: "Forum Care",
    description:
      "Forum Discussion and Blogging App that allows user to login, register and sharing their knowledge through forum discussion and blog.",
    tags: ["React", "Redux", "GraphQL", "Bootstrap", "MUI", "Firebase", "Netlify"],
    imageUrl: forumCareImg,
    githubUrl: "https://github.com/RiyandiDjohari/mini-project_forum-care",
    demoUrl: "http://forumcare.netlify.app",
  },
  {
    title: "LMS (Web End-user)",
    description:
      "Learning Management System for end-user have features that end users or employees can take part in course training based",
    tags: ["React", "Bootstrap", "Axios", "MUI", "Sweetalert", "Firebase", "react-calendar"],
    imageUrl: lmsWebUser,
    githubUrl: "https://github.com/capstone-kelompok-4/FE-React",
    demoUrl: "#",
  },
  {
    title: "LMS (Web Admin)",
    description:
      "Admin can manage users, manage courses and materials, and admins can also handle course access requests from end users",
    tags: ["React", "Bootstrap", "Axios", "MUI", "Sweetalert", "Firebase", "chart.js"],
    imageUrl: lmsWebAdmin,
    githubUrl: "https://github.com/capstone-kelompok-4/Web-Admin",
    demoUrl: "#",
  },
  {
    title: "Face Recognition App",
    description:
      "Final project for my bachelor's degree. Employee Attendance System using Face Recognition to enhance workforce management.",
    tags: ["Next.js", "Tailwind", "Prisma", "Ant Design", "PostgreSQL", "Firebase", "face-api.js"],
    imageUrl: faceRecognitionImg,
    githubUrl: "https://github.com/RiyandiDjohari/absensi-face-recognition",
    demoUrl: "#",
  },
] as const;

export const skillsData = [
  html,
  css,
  tailwindcss,
  git,
  javascript,
  antd,
  react,
  redux,
  nextjs,
  expressjs,
  postgresql,
  prisma,
  firebase,
  typescript,
  framerMotion,
];
