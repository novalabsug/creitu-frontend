import Image from "next/image";
import React from "react";

const Project = ({ page, image, title, description, isActive }) => {
  return (
    <div
      className={`${
        isActive ? "visible translate-x-0" : "invisible -translate-x-[110%]"
      } absolute z-10 top-0 left-0 right-0 bottom-0 duration-700 delay-500`}
    >
      <Image
        src={image}
        fill={true}
        className="h-full w-full object-cover"
        alt={title}
      />

      {page !== "projects" && (
        <div className="absolute bottom-8 left-0 right-0 py-6 px-10 z-20">
          <h3
            className={`font-semibold text-white text-3xl text-left ${
              isActive
                ? "visible relative translate-y-0"
                : "invisible translate-y-[100%]"
            } delay-1000 duration-500`}
          >
            {title}
          </h3>

          <p
            className={`my-1 text-slate-200 text-sm text-left ${
              isActive
                ? "visible relative translate-y-0"
                : "invisible translate-y-[100%]"
            } delay-1000 duration-500`}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Project;
