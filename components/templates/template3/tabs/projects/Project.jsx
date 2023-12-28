import Link from "next/link";
import React from "react";

const Project = ({ title, description, image }) => {
  return (
    <div className="group relative overflow-hidden h-[260px]">
      <div className="relative w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute top-0 left-0 bottom-0 right-0 z-10 bg-[#00000046]"></div>

        <div className="absolute bottom-0 py-2 right-0 left-0 px-4 z-20 group-hover:-left-[100%] duration-200">
          <div className="flex gap-2">
            <div className="flex items-center w-1/5">
              <div className="bg-green-400 w-full h-[0.12rem]"></div>
            </div>

            <h3 className="text-gray-200 font-semibold">{title}</h3>
          </div>
        </div>
      </div>

      <div className="px-2 py-3 absolute -bottom-[100%] right-0 left-0 z-20 bg-gradient-to-t from-[#000] to-[#00000000] group-hover:bottom-0 duration-300 delay-200">
        <p className="text-white font-light text-sm my-1">{description}</p>

        <div className="py-0">
          <Link href={"/"}>
            <h3 className="text-green-500 font-semibold">{title}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
