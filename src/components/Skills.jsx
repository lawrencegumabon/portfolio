import React from "react";
import SkillLists from "./SkillLists";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen h-full flex justify-center items-center px-4"
    >
      <div className="flex flex-col justify-center max-w-7xl w-full">
        <p className="text-5xl font-bold  text-left">Skills.</p>
        {/* PROJECTS */}
        <p>Technologies and Tools</p>
        <div className="w-full flex justify-center">
          <div className="py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center max-w-4xl">
            {/* LISTS */}
            <SkillLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
