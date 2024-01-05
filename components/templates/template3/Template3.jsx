"use client";

import {
  ArrowDown,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  ListVideoIcon,
  Mail,
  Twitch,
  Twitter,
  User,
  User2,
} from "lucide-react";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import ProjectSlider from "./ProjectSlider";
import Sidenav from "./Sidenav";
import HomeTab from "./tabs/Home";
import ProjectsTab from "./tabs/Projects";
import AboutTab from "./tabs/About";
import ContactTab from "./tabs/Contact";
import MobileNav from "./MobileNav";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Template3 = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileNavDisplay, setMobileNavDisplay] = useState(false);

  const handleTabSwitch = (tab) => {
    if (tab === "") return;

    setActiveTab((prev) => tab);
  };

  const handleNavClick = (page) => {
    setActiveTab((prev) => page);
  };

  return (
    <>
      <div className="bg-black lg:h-screen h-full overflow-hidden w-full">
        <MobileNav
          closeDisplay={setMobileNavDisplay}
          handleNavClick={handleNavClick}
          isActive={mobileNavDisplay}
        />

        <div className="flex h-full">
          <div
            className={`lg:p-6 p-2 relative ${
              activeTab === "projects"
                ? "lg:w-[90%] w-full"
                : "lg:w-[70%] w-full"
            } duration-300`}
          >
            <div className="py-2 lg:px-4 px-2 flex justify-between">
              <div>
                <Link href={"/templates"} className="">
                  {" "}
                  <h3
                    className={`${dancingScript.className} text-white lg:text-4xl text-3xl font-bold`}
                  >
                    Moriarty
                  </h3>{" "}
                </Link>
              </div>

              <div className="lg:flex hidden gap-4 py-2">
                <div className="px-4">
                  <button
                    type="button"
                    className="py-2 px-3 text-black bg-gray-100 rounded-md cursor-pointer text-sm flex gap-2 group"
                  >
                    Resume
                    <ArrowDown
                      size={20}
                      className="group-hover:text-green-500 group-hover:animate-bounce duration-200"
                    />
                  </button>
                </div>

                <div className="cursor-pointer py-1">
                  <Facebook
                    className="text-white"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="cursor-pointer py-1">
                  <Twitter className="text-white" size={22} strokeWidth={1.5} />
                </div>

                <div className="cursor-pointer py-1">
                  <Instagram
                    className="text-white"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="cursor-pointer py-1">
                  <Linkedin
                    className="text-white"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="cursor-pointer py-1">
                  <Twitch className="text-white" size={22} strokeWidth={1.5} />
                </div>
              </div>

              <div
                className=" bg-white p-4 rounded-full lg:hidden block"
                onClick={() => setMobileNavDisplay((prev) => !prev)}
              >
                <div className="h-[2px] bg-black rounded w-[1rem] my-1"></div>
                <div className="h-[2px] bg-black rounded w-[1rem] my-1"></div>
              </div>
            </div>

            {(activeTab === "home" || activeTab == "" || !activeTab) && (
              <HomeTab />
            )}
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "about" && <AboutTab />}
            {activeTab === "contact" && <ContactTab />}

            <div className="h-8  w-full z-50"></div>

            <div className="py-3 absolute bottom-0 right-0 left-0 bg-black z-50">
              <p className="text-center text-white">
                {new Date().getFullYear()} &copy; copyright.{" "}
                <span className="primary-color font-bold">creitu</span>
              </p>
            </div>
          </div>

          <Sidenav page={activeTab} handleTabSwitch={handleTabSwitch} />
        </div>
      </div>
    </>
  );
};

export default Template3;
