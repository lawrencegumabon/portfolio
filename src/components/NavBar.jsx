import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, showNav] = useState(false);
  const handleClick = () => showNav(!nav);

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-6 text-base md:text-lg backdrop-blur-sm">
      <Link to="home" smooth={true} offset={0} duration={500}>
        <h1 className="z-10 text-lg font-semibold cursor-pointer">
          Lawrence Gumabon
        </h1>
      </Link>
      {/* FOR DESKTOP VIEW MENU */}
      <ul className="items-center hidden gap-8 text-base font-semibold cursor-pointer sm:flex">
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            <span className="flex items-center gap-2 duration-300 hover:scale-105">
              {" "}
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-80} duration={500}>
            <span className="flex items-center gap-2 duration-300 hover:scale-105">
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <span className="flex items-center gap-2 duration-300 hover:scale-105">
              Skills
            </span>
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} duration={500}>
            <span className="flex items-center gap-2 duration-300 hover:scale-105">
              Contacts
            </span>
          </Link>
        </li>
        {/* <li>
          <FaMoon />
        </li> */}
      </ul>

      {/* BURGER */}
      <div onClick={handleClick} className="z-10 cursor-pointer sm:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* FOR MOBILE VIEW MENU */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute inset-0 bg-light-0 flex flex-col justify-center items-center text-lg gap-4 h-screen sm:hidden cursor-pointer"
        }
      >
        <li>
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className="flex items-center gap-2"> Home</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            offset={-80}
            duration={500}
          >
            <span className="flex items-center gap-2">Projects</span>
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            <span className="flex items-center gap-2">Skills</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="contacts"
            smooth={true}
            duration={500}
          >
            <span className="flex items-center gap-2">Contact</span>
          </Link>
        </li>
        {/* <li>
          <FaMoon />
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
