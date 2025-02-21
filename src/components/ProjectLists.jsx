import React from "react";
import ecommerce from "../assets/images/e-commerce.png";
import portfolio from "../assets/images/portfolio.png";
import bookLibrary from "../assets/images/bookLibrary.png";
import passwordmatrix from "../assets/images/passwordmatrix.png";
import gymlarious from "../assets/images/gymlarious.png";
import wheeltech from "../assets/images/wheeltech-landing-page.png";
import passwordGenerator from "../assets/images/password-generator.png";
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
    image: ecommerce,
    alt: "E-Commerce",
    title: "E-Commerce",
    subdes: "Frontend Mentor Challenge",
    description:
      "This design was recreated from a Frontend Mentor project, with a focus on achieving visual accuracy and ensuring all buttons function seamlessly.",
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
  {
    id: 2,
    image: portfolio,
    alt: "portfolio",
    title: "Portfolio",
    subdes: "Portfolio",
    description:
      "This portfolio was created in 2022 as a personal project during my school years, highlighting my skills and showcasing my work as a developer.",
    github: "https://github.com/lwrncgmbn/portfolio-project",
    live: "https://lawrence-project.netlify.app/",
    html: true,
    css: true,
    js: true,
    php: false,
    tailwind: false,
    react: false,
  },
  // {
  //   id: 3,
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
  // {
  //   id: 4,
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
  {
    id: 5,
    image: gymlarious,
    alt: "Gymlarious",
    title: "Gymlarious",
    subdes: "Gymlarious",
    description:
      "Gymlarious is a system designed to create a vibrant fitness community by combining workouts with fun and laughter. It encourages users to engage in exercise routines that feel like a celebration, where every rep comes with a sense of joy and motivation. The platform fosters a unique and enjoyable approach to fitness, making workouts more exciting and engaging for everyone.",
    github: "https://github.com/lwrncgmbn/gymlarious",
    live: "https://lwrncgmbn.github.io/gymlarious/#/home",
    html: true,
    css: true,
    js: true,
    php: false,
    tailwind: true,
    react: true,
  },
  {
    id: 6,
    image: wheeltech,
    alt: "WheelTech",
    title: "WheelTech",
    subdes: "Motorcycle Rental System",
    description:
      "A system that allows users to list their motorcycles for rent, providing a convenient platform for others to browse and book available options. It simplifies the process of renting and booking motorcycles, making it easy for owners and renters to connect.",
    // github: "https://github.com/lwrncgmbn/wheeltech",
    live: "http://wheeltechph.infinityfreeapp.com/?i=1",
    html: true,
    css: true,
    js: true,
    php: true,
    tailwind: true,
    react: false,
  },
  {
    id: 7,
    image: passwordGenerator,
    alt: "Password Generator",
    title: "Password Generator",
    subdes: "Password Generator",
    description:
      "A web application that allows users to generate random passwords tailored to their needs. Users can customize the password by selecting options such as uppercase letters, lowercase letters, digits, symbols, and length. It also features a password history section for viewing previously generated passwords.",
    live: "https://password-generator-one-pearl.vercel.app/",
    html: true,
    css: true,
    js: true,
    tailwind: true,
    react: true,
  },
];

const ProjectLists = () => {
  return (
    <>
      {projects
        .slice(0)
        .reverse()
        .map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between w-full gap-6 my-6 md:flex-row md:even:flex-row-reverse"
          >
            {/* IMAGE */}
            <div className="flex bg-[#303030] w-full max-h-96 rounded-md p-4 group cursor-pointer overflow-hidden shadow-md">
              <img
                src={project.image}
                alt=""
                className="flex  items-center  object-center object-cover rounded-md group-hover:scale-[102%] duration-300 shadow-md "
              />
            </div>
            {/* DESCRIPTION */}
            <div className="w-full">
              <div className="flex flex-col items-start gap-4 pt-2 mb-4 text-4xl font-bold sm:items-center sm:flex-row sm:mb-0">
                <p>{project.title}</p>
                <div className="flex items-center gap-4 text-2xl">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 duration-300 bg-gray-300 rounded-md hover:brightness-90"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-md"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm">{project.subdes}</p>
              <p className="py-4 text-base">{project.description}</p>
              <div>
                <p className="text-lg font-bold">Technologies: </p>
                <div className="flex items-center gap-4 py-2 ">
                  {project.html && (
                    <p className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full ">
                      <FaHtml5 className="text-3xl" />
                    </p>
                  )}
                  {project.css && (
                    <p className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full ">
                      <FaCss3 className="text-3xl" />
                    </p>
                  )}
                  {project.tailwind && (
                    <p className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full ">
                      <SiTailwindcss className="text-3xl" />
                    </p>
                  )}
                  {project.js && (
                    <p className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full ">
                      <FaJs className="text-3xl" />
                    </p>
                  )}
                  {project.react && (
                    <p className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full ">
                      <FaReact className="text-3xl" />
                    </p>
                  )}
                  {project.php && (
                    <p className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full ">
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
