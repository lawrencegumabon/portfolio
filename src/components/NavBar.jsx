import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-8  fixed top-0 left-0 right-0 text-base md:text-lg">
      <h1>Lawrence Gumabon</h1>
      {/* FOR DESKTOP VIEW MENU */}
      <ul className="hidden md:flex items-center gap-4 ">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>
          <FaMoon />
        </li>
      </ul>

      {/* FOR MOBILE VIEW MENU */}
      <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden flex-col items-center text-xl gap-4 ">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>
          <FaMoon />
        </li>
      </ul>

      {/* BURGER */}
      <div className="sm:hidden">
        <p>
          <FaBars />
        </p>
      </div>
    </div>
  );
};

export default NavBar;
