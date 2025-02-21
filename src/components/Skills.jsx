import React from "react";
import SkillLists from "./SkillLists";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex items-center justify-center w-full h-full min-h-screen px-4"
    >
      <div className="flex flex-col justify-center w-full max-w-7xl">
        <p className="text-5xl font-bold text-left">Skills.</p>
        {/* PROJECTS */}
        <p>Technologies and Tools</p>
        <div className="flex justify-center w-full">
          <div className="grid max-w-4xl grid-cols-1 gap-8 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center">
            {/* LISTS */}
            <SkillLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
