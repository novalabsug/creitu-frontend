import { Facebook, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import React from "react";
import ProjectSlider from "./ProjectSlider";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Template3 = () => {
  return (
    <div className="bg-black h-screen">
      <div className="flex h-full">
        <div className="p-6 w-[70%]">
          <div className="py-2 px-4 flex justify-between">
            <div>
              <Link href={"/"}>
                {" "}
                <h3
                  className={`${dancingScript.className} text-white text-4xl font-bold`}
                >
                  Moriarty
                </h3>{" "}
              </Link>
            </div>

            <div className="flex gap-4 py-2">
              <div className="cursor-pointer">
                <Facebook className="text-white" size={22} strokeWidth={1.5} />
              </div>
              <div className="cursor-pointer">
                <Twitter className="text-white" size={22} strokeWidth={1.5} />
              </div>
              <div className="cursor-pointer">
                <Instagram className="text-white" size={22} strokeWidth={1.5} />
              </div>
              <div className="cursor-pointer">
                <Linkedin className="text-white" size={22} strokeWidth={1.5} />
              </div>
              <div className="cursor-pointer">
                <Twitch className="text-white" size={22} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="py-12 px-4">
            <div className="py-8"></div>

            <div className="w-4/5 py-4">
              <h3 className="text-6xl font-bold text-white">
                Full stack developer, JavaScript Developer
              </h3>
            </div>

            <div className="py-4">
              <p className="text-lg font-light text-white">
                <span className="text-3xl text-green-500">4+</span> years of
                experience
              </p>
            </div>

            <div className="py-3"></div>

            <div className="py-6">
              <div className="flex gap-2">
                <div className="flex items-center">
                  <div className="h-[1px] w-[100px] bg-white"></div>
                </div>

                <p className="text-4xl font-light uppercase text-green-500">
                  Jim Moriarty
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] h-full">
          <ProjectSlider />
        </div>
      </div>
    </div>
  );
};

export default Template3;
