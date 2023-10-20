import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import React from "react";

import portfolioImg from "@/public/portfolio.png";
import cloneImg from "@/public/amazonclone.png";
import atecbookImg from "@/public/atecbook.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master Concepteur Développeur",
    location: "Lille, FR",
    description:
      "Diplomé après 2 ans d'études en alternance, j'ai trouvé un job immédiatement apres en tant que Développeur Front-End ",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2017",

  },
  {
    title: "Developpeur Frontend",
    location: "Lille, FR",
    description:
      "J'ai travaillé comme développeur front-end pendant deux ans dans le cadre d'un seul emploi, en exécutant diverses missions.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Développeur Front-end pour Atecna",
    location: "Lille, FR",
    description:
      "J'ai travaillé comme développeur front-end pendant trois ans dans le cadre d'un seul emploi, en exécutant diverses missions.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Atecbook",
    description:
      "C'est un projet amusant pour démontrer mes compétences Mongo, Express, React, Node. Le projet est assez vaste pour être appliqué dans le monde réel",
    tags: ["React", "Redux", "Moment", "NodeJS", "MongoDB"],
    imageUrl: atecbookImg
  },
  {
    title: "Amazon Clone",
    description:
      "Projet amusant pour démontrer mes compétences en React. Implémentation de Stripe, et utilisation de Firebase aussi",
    tags: ["React", "Firebase", "MaterialUI", "Stripe"],
    imageUrl: cloneImg
  },
  {
    title: "Portfolio v1",
    description:
      "Mon premier portfolio en React, avec implémentation de NodeMailer, ExpressJS. Utilisation des Functions Netlify.",
    tags: ["React", "Express", "Nodemailer", "JQuery"],
    imageUrl: portfolioImg
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Firebase",
  "Supabase",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;