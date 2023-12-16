import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectSlider = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full relative">
        <div className="absolute top-6 left-8 z-10 bg-white p-4 rounded-full">
          <div className="h-[2px] bg-black rounded w-[1rem] my-1"></div>
          <div className="h-[2px] bg-black rounded w-[1rem] my-1"></div>
        </div>

        <div className="relative h-full w-full">
          <Image
            src={"/images/portfolio6.jpg"}
            fill={true}
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-8 left-0 right-0 py-6 px-10">
            <h3 className="font-semibold text-white text-3xl text-left">
              Just a project
            </h3>

            <p className="my-1 text-slate-200 text-sm text-left">
              Its just a portfolio highlight
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 bottom-0 right-0 z-10 bg-[#00000034]"></div>
      </div>
    </div>
  );
};

export default ProjectSlider;
