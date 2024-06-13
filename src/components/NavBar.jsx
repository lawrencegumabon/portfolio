import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, showNav] = useState(false);
  const handleClick = () => showNav(!nav);

  return (
    <div className="flex items-center justify-between py-6 px-8  fixed top-0 left-0 right-0 text-base md:text-lg backdrop-blur-sm">
      <Link to="home" smooth={true} offset={0} duration={500}>
        <h1 className="text-lg font-semibold z-10 cursor-pointer">
          Lawrence Gumabon
        </h1>
      </Link>
      {/* FOR DESKTOP VIEW MENU */}
      <ul className="hidden sm:flex items-center gap-8 cursor-pointer text-base font-semibold">
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            <span className="flex items-center gap-2 hover:scale-105 duration-300">
              {" "}
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-80} duration={500}>
            <span className="flex items-center gap-2 hover:scale-105 duration-300">
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            <span className="flex items-center gap-2 hover:scale-105 duration-300">
              Skills
            </span>
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} duration={500}>
            <span className="flex items-center gap-2 hover:scale-105 duration-300">
              Contacts
            </span>
          </Link>
        </li>
        {/* <li>
          <FaMoon />
        </li> */}
      </ul>

      {/* BURGER */}
      <div onClick={handleClick} className="sm:hidden z-10 cursor-pointer">
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
