import React from "react";
import Project from "./projects/Project";

const ProjectsTab = () => {
  return (
    <div>
      <div className="py-8 px-8">
        <div className="py-2">
          <h3 className="text-3xl font-semibold text-white">My Projects</h3>

          <div className="py-1"></div>

          <div className="h-[1.2px] w-[100px] bg-green-500"></div>
        </div>

        <div className="py-4 max-h-[450px] overflow-auto">
          <div className="grid grid-cols-3 gap-4">
            <Project
              title={"A random project"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum et aspernatur atque quod necessitatibus dignissimos qui reprehenderit alias, eveniet illo, nostrum fugiat animi ratione id maiores veniam vitae quia sint."
              }
              image={"/images/template.jpg"}
            />

            <Project
              title={"Another random"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum et aspernatur atque quod necessitatibus dignissimos qui reprehenderit alias"
              }
              image={"/images/template2.jpg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
