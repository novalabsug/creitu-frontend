import React from "react";
import Project from "./projects/Project";

const ProjectsTab = () => {
  return (
    <div>
      <div className="py-8 lg:px-8 px-2 overflow-auto">
        <div className="py-2">
          <h3 className="text-3xl font-semibold text-white">My Projects</h3>

          <div className="py-1"></div>

          <div className="h-[1.2px] w-[100px] bg-green-500"></div>
        </div>

        <div className="lg:py-4 py-8 lg:max-h-[400px] h-full overflow-auto">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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

          <div className="lg:hidden block py-3"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTab;
