import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex justify-center items-center px-2"
    >
      <div className="flex justify-evenly items-center max-w-7xl w-full ">
        {/* LEFT SIDE */}
        <div>
          <p className="text-4xl md:text-6xl">Hello, I am</p>
          <p className="text-4xl md:text-6xl font-semibold">Lawrence Gumabon</p>
          <ul className="flex gap-4 text-4xl md:text-5xl mt-6">
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
        {/* RIGHT SIDE */}
        <div>
          <img
            src="src\assets\picture.PNG"
            alt=""
            className="w-72 hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
