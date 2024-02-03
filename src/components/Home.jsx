import React from "react";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen flex justify-center items-center px-2"
    >
      <div className="flex justify-evenly items-center max-w-7xl w-full">
        {/* LEFT SIDE */}
        <div>
          <p className="text-4xl md:text-6xl">Hello, I am</p>
          <p className="text-4xl md:text-6xl font-semibold">Lawrence Gumabon</p>
          <ul className="flex gap-4 text-4xl md:text-5xl mt-6">
            <li className="hover:scale-105 duration-300">
              <a
                href="https://www.linkedin.com/in/lawrence-gumabon-7018b7255/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-primary-0" />
              </a>
            </li>
            <li className="hover:scale-105 duration-300">
              <a href="https://github.com/lawrencegumabon" target="_blank">
                <FaGithub className="hover:text-[#24292e]" />
              </a>
            </li>
            <li className="hover:scale-105 duration-300">
              <a href="https://www.facebook.com/lwrncgmbn/" target="_blank">
                <FaFacebook className="hover:text-primary-0" />
              </a>
            </li>
          </ul>
        </div>
        {/* RIGHT SIDE */}
        <div className="relative hidden md:block">
          <div id="contactMe" className=" cursor-pointer">
            <Link to="contacts" smooth={true} duration={500}>
              <div className="absolute bg-primary-0 text-white p-2 font-bold md:text-lg px-4 rounded-full -top-20 left-20  ">
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
            src="src\assets\images\picture.PNG"
            alt="Image"
            className="w-72 hover:rotate-6 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
