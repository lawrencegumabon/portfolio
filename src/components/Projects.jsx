import React from "react";
import ProjectLists from "./ProjectLists";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full  h-full flex justify-center items-center px-4"
    >
      <div className="flex flex-col justify-center max-w-7xl w-full">
        <p className="text-5xl font-bold  text-left">Projects.</p>
        {/* PROJECTS */}
        <div className="py-6 grid gap-6 place-items-center">
          {/* LISTS */}
          <ProjectLists />
        </div>
      </div>
    </div>
  );
};

export default Projects;
