import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-screen flex justify-center items-center px-2"
    >
      <div className="flex flex-col justify-center max-w-7xl w-full bg-cyan-100">
        <p className="text-4xl font-semibold underline text-left">Projects</p>
        {/* PROJECTS */}
        <div className="py-4 grid place-items-center">
          <div className=" bg-gray-300 w-60 h-60 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
