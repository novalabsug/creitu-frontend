import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  ListVideoIcon,
  Mail,
  Twitch,
  Twitter,
  Users2,
} from "lucide-react";
import React from "react";

const MobileNav = ({ closeDisplay, handleNavClick, isActive }) => {
  return (
    <div
      className={`bg-[#1c1c1c] fixed top-0 bottom-0 right-0 w-4/5 z-50 p-8 ${
        isActive ? "block translate-x-0" : "hidden translate-x-[150%]"
      } duration-300 delay-100`}
    >
      <div className="py-4"></div>

      <div className="py-4" onClick={() => closeDisplay((prev) => !prev)}>
        <ArrowRight size={35} className="text-white cursor-pointer" />
      </div>

      <div className="py-2">
        <div className="py-2 flex gap-4">
          <div className="cursor-pointer py-1">
            <Facebook className="text-white" size={22} strokeWidth={1.5} />
          </div>

          <div className="cursor-pointer py-1">
            <Twitter className="text-white" size={22} strokeWidth={1.5} />
          </div>

          <div className="cursor-pointer py-1">
            <Instagram className="text-white" size={22} strokeWidth={1.5} />
          </div>

          <div className="cursor-pointer py-1">
            <Linkedin className="text-white" size={22} strokeWidth={1.5} />
          </div>

          <div className="cursor-pointer py-1">
            <Twitch className="text-white" size={22} strokeWidth={1.5} />
          </div>
        </div>

        <div className="py-3"></div>

        <div className="py-4">
          <div
            className="flex gap-4 py-2 cursor-pointer"
            onClick={() => {
              handleNavClick("home");
              closeDisplay((prev) => !prev);
            }}
          >
            <div>
              <Home className="text-white" size={22} strokeWidth={1.5} />
            </div>

            <h3 className="text-white">Home</h3>
          </div>

          <div
            className="flex gap-4 py-2 cursor-pointer"
            onClick={() => {
              handleNavClick("projects");
              closeDisplay((prev) => !prev);
            }}
          >
            <div>
              <ListVideoIcon
                className="text-white"
                size={22}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-white">Projects</h3>
          </div>

          <div
            className="flex gap-4 py-2 cursor-pointer"
            onClick={() => {
              handleNavClick("about");
              closeDisplay((prev) => !prev);
            }}
          >
            <div>
              <Users2 className="text-white" size={22} strokeWidth={1.5} />
            </div>

            <h3 className="text-white">About</h3>
          </div>

          <div
            className="flex gap-4 py-2 cursor-pointer"
            onClick={() => {
              handleNavClick("contact");
              closeDisplay((prev) => !prev);
            }}
          >
            <div>
              <Mail className="text-white" size={22} strokeWidth={1.5} />
            </div>

            <h3 className="text-white">Contact</h3>
          </div>

          <div className="py-2">
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
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
