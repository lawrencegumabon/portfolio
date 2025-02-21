import React from "react";
import Profile from "../assets/images/picture.png";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center justify-center w-full min-h-screen px-8"
    >
      <div className="flex items-center w-full justify-evenly max-w-7xl">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-4xl md:text-6xl">Hello, I am</p>
          <p className="text-4xl font-semibold text-center md:text-start md:text-6xl">
            Lawrence Gumabon
          </p>
          <ul className="flex gap-4 mt-6 text-4xl md:text-5xl">
            <li className="duration-300 hover:scale-105">
              <a
                href="https://www.linkedin.com/in/lawrence-gumabon-7018b7255/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-primary-0" />
              </a>
            </li>
            <li className="duration-300 hover:scale-105">
              <a href="https://github.com/lwrncgmbn" target="_blank">
                <FaGithub className="hover:text-[#24292e]" />
              </a>
            </li>
            <li className="duration-300 hover:scale-105">
              <a href="https://www.facebook.com/lwrncgmbn/" target="_blank">
                <FaFacebook className="hover:text-primary-0" />
              </a>
            </li>
          </ul>
        </div>
        {/* RIGHT SIDE */}
        <div className="relative hidden md:block">
          <div id="contactMe" className="cursor-pointer ">
            <Link to="contacts" smooth={true} duration={500}>
              <div className="absolute p-2 px-4 font-bold text-white rounded-full bg-primary-0 md:text-lg -top-20 left-20 ">
                CONTACT ME
              </div>
              <div
                className="absolute -top-10 left-[50%] w-0 h-0 
  border-l-[15px] border-l-transparent
  border-t-[25px] border-t-primary-0
  border-r-[15px] border-r-transparent"
              ></div>
            </Link>
          </div>

          <img
            src={Profile}
            alt="Image"
            className="duration-300 w-72 hover:rotate-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
