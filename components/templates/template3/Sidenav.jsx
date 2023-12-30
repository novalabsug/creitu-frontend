import { Home, ListVideoIcon, Mail, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProjectSlider from "./ProjectSlider";

const Sidenav = ({ page, handleTabSwitch }) => {
  const handleNavClick = (tab) => {
    handleTabSwitch(tab);
  };

  return (
    <div
      className={`${
        page === "projects" ? "w-[10%]" : "w-[30%]"
      } h-full relative group overflow-hidden duration-300 lg:block hidden`}
    >
      <div className="absolute top-[30%] left-6 z-20 py-2 px-2 z-50">
        <div className="my-2 p-2 flex gap-2 relative -left-20 z-20 invisible group-hover:left-0 group-hover:visible duration-300 group-hover:-z-10 delay-75 group/navLink1">
          <Home
            className={`${
              page === "home" ? "text-green-400 font-semibold" : "text-white"
            }`}
            size={26}
            strokeWidth={page === "home" ? 3 : 2}
          />

          <div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer hidden invisible mt-3 group-hover/navLink1:mt-1 group-hover/navLink1:visible group-hover/navLink1:block duration-150 delay-200"
          >
            <p
              className={`${
                page === "home" ? "text-green-400 font-semibold" : "text-white"
              }`}
            >
              Home
            </p>
          </div>
        </div>

        <div className="my-2 p-2 flex gap-2 relative -left-20 z-20 invisible group-hover:left-0 group-hover:visible duration-300 group-hover:-z-10 delay-150 group/navLink2">
          <ListVideoIcon
            className={`${
              page === "projects"
                ? "text-green-400 font-semibold"
                : "text-white"
            }`}
            size={26}
            strokeWidth={page === "projects" ? 3 : 2}
          />

          <div
            onClick={() => handleNavClick("projects")}
            className="cursor-pointer hidden invisible mt-3 group-hover/navLink2:mt-1 group-hover/navLink2:visible group-hover/navLink2:block duration-150 delay-200"
          >
            <p
              className={`${
                page === "projects"
                  ? "text-green-400 font-semibold"
                  : "text-white"
              }`}
            >
              Projects
            </p>
          </div>
        </div>

        <div className="my-2 p-2 flex gap-2 relative -left-20 z-20 invisible group-hover:left-0 group-hover:visible duration-300 group-hover:-z-10 delay-300 group/navLink3">
          <User2
            className={`${
              page === "about" ? "text-green-400 font-semibold" : "text-white"
            }`}
            size={26}
            strokeWidth={page === "about" ? 3 : 2}
          />

          <div
            onClick={() => handleNavClick("about")}
            className="cursor-pointer hidden invisible mt-3 group-hover/navLink3:mt-1 group-hover/navLink3:visible group-hover/navLink3:block duration-150 delay-200"
          >
            <p
              className={`${
                page === "about" ? "text-green-400 font-semibold" : "text-white"
              }`}
            >
              About
            </p>
          </div>
        </div>

        <div className="my-2 p-2 flex gap-2 relative -left-20 z-20 invisible group-hover:left-0 group-hover:visible duration-300 group-hover:-z-10 delay-500 group/navLink4">
          <Mail
            className={`${
              page === "contact" ? "text-green-400 font-semibold" : "text-white"
            }`}
            size={26}
            strokeWidth={page === "contact" ? 3 : 2}
          />

          <div
            onClick={() => handleNavClick("contact")}
            className="cursor-pointer hidden invisible mt-3 group-hover/navLink4:mt-1 group-hover/navLink4:visible group-hover/navLink4:block duration-150 delay-200"
          >
            <p
              className={`${
                page === "contact"
                  ? "text-green-400 font-semibold"
                  : "text-white"
              }`}
            >
              Contact
            </p>
          </div>
        </div>
      </div>

      <ProjectSlider page={page} />
    </div>
  );
};

export default Sidenav;
