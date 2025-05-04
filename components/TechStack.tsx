"use client";

import { Skill_data} from "@/data";
import React from "react";
import SkillDataProvider from "./ui/SkillIcon";
  
const TechStack = () => {
  return (
    <section id="skills" className="py-10 w-full">  
      <header className="heading">
        <span className="text-white">Building Solutions with Modern Tech</span>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center py-20">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
  
export default TechStack;
