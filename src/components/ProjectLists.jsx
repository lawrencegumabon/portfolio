import React from "react";
import portfolio from "../assets/images/portfolio.png";
import wheeltech from "../assets/images/wheeltech-landing-page.png";
import passwordmatrix from "../assets/images/passwordmatrix.png";
import bookLibrary from "../assets/images/bookLibrary.png";
import ecommerce from "../assets/images/e-commerce.png";
import gymlarious from "../assets/images/gymlarious.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: wheeltech,
    alt: "WheelTech",
    title: "WheelTech",
    subdes: "Motorcycle rental system",
    description:
      "A system where you can post your own motorbike and let the user rent it.",
    github: "https://github.com/lwrncgmbn/wheeltech",
    live: "http://wheeltechph.infinityfreeapp.com/?i=1",
    html: true,
    css: true,
    js: true,
    php: true,
    tailwind: true,
    react: false,
  },
  {
    id: 2,
    image: gymlarious,
    alt: "Gymlarious",
    title: "Gymlarious",
    subdes: "Gymlarious",
    description:
      "I made this as a side project. The name is Gymlarious, a vibrant fitness community that blends laughter with workouts. Welcome to Gymlarious, where every rep is a punchline, and every workout is a celebration! ",
    github: "https://github.com/lwrncgmbn/gymlarious",
    live: "https://lwrncgmbn.github.io/gymlarious/#/home",
    html: true,
    css: true,
    js: true,
    php: false,
    tailwind: true,
    react: true,
  },
  // {
  //   id: 3,
  //   image: bookLibrary,
  //   alt: "Book Library",
  //   title: "Book Library",
  //   subdes: "Book library system",
  //   description:
  //     "This is a school project website where you can add books and upload files as an admin, and users can access it.",
  //   github: "https://github.com/lwrncgmbn/bookLibrary",
  //   live: "",
  //   html: true,
  //   css: true,
  //   js: true,
  //   php: true,
  //   tailwind: true,
  //   react: false,
  // },
  // {
  //   id: 4,
  //   image: passwordmatrix,
  //   alt: "Password Matrix",
  //   title: "Password Matrix",
  //   subdes: "Password Matrix",
  //   description:
  //     "It's a website where you can register accounts and encrypt their passwords.",
  //   github: "https://github.com/lwrncgmbn/passwordmatrix",
  //   live: "",
  //   html: true,
  //   css: true,
  //   js: true,
  //   php: true,
  //   tailwind: true,
  //   react: false,
  // },
  {
    id: 5,
    image: portfolio,
    alt: "portfolio",
    title: "Portfolio",
    subdes: "Portfolio",
    description: "I created this portfolio in 2022 as a school project.",
    github: "https://github.com/lwrncgmbn/portfolio-project",
    live: "https://lawrence-project.netlify.app/",
    html: true,
    css: true,
    js: true,
    php: false,
    tailwind: false,
    react: false,
  },
  {
    id: 6,
    image: ecommerce,
    alt: "E-Commerce",
    title: "E-Commerce",
    subdes: "Frontend Mentor Challenge",
    description:
      "I challenged myself to recreate this design from the frontend mentor challenge with working buttons.",
    github:
      "https://github.com/lwrncgmbn/frontend-mentor/tree/main/ecommerce-product-page-main",
    live: "https://ecommerce-product-page-49ceea.netlify.app/",
    html: true,
    css: true,
    js: true,
    php: false,
    tailwind: true,
    react: false,
  },
];

const ProjectLists = () => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-full  flex flex-col  md:flex-row md:even:flex-row-reverse justify-between my-6 gap-6"
        >
          {/* IMAGE */}
          <div className=" bg-[#303030] w-full max-h-96 rounded-md p-4 group cursor-pointer overflow-hidden shadow-md">
            <img
              src={project.image}
              alt=""
              className="w-full h-full object-top object-cover rounded-md group-hover:scale-[102%] duration-300 shadow-md"
            />
          </div>
          {/* DESCRIPTION */}
          <div className="w-full">
            <div className="pt-2 text-4xl font-bold flex items-center gap-4">
              <p>{project.title}</p>
              <div className="flex text-2xl gap-4 items-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-gray-300 w-10 h-10 flex justify-center items-center rounded-md hover:brightness-90 duration-300"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="bg-gray-300 w-10 h-10 flex justify-center items-center rounded-md"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm">{project.subdes}</p>
            <p className="text-base py-4">{project.description}</p>
            <div>
              <p className="font-bold text-lg">Technologies: </p>
              <div
                className="flex items-center gap-4 py-2
            "
              >
                {project.html && (
                  <p className=" bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full">
                    <FaHtml5 className="text-3xl" />
                  </p>
                )}
                {project.css && (
                  <p className=" bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full">
                    <FaCss3 className="text-3xl" />
                  </p>
                )}
                {project.tailwind && (
                  <p className=" bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full">
                    <SiTailwindcss className="text-3xl" />
                  </p>
                )}
                {project.js && (
                  <p className=" bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full">
                    <FaJs className="text-3xl" />
                  </p>
                )}
                {project.react && (
                  <p className=" bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full">
                    <FaReact className="text-3xl" />
                  </p>
                )}
                {project.php && (
                  <p className=" bg-gray-300 w-12 h-12 flex justify-center items-center rounded-full">
                    <FaPhp className="text-3xl" />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectLists;
