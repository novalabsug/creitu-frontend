import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import TextTransform from "./TextTransform";

const Hero = () => {
  const transformWords = "creative works";
  return (
    <div className="relative">
      <div className="flex">
        <div className="m-auto lg:w-[70%] sm:w-[80%] w-[95%] relative">
          <div className="relative">
            <div className="py-6"></div>

            <div className="py-1 flex justify-center items-center">
              <h1 className="text-center w-fit py-2 px-4 border-[0.05rem] border-white rounded-lg text-base primary-color bg-white bg-opacity-5">
                Portfolio Marketplace
              </h1>
            </div>

            <div className="py-2">
              <p className="lg:text-6xl text-5xl font-semibold text-center text-white">
                Showcase your creative works to the rest of the world
              </p>
            </div>

            <div className="py-2">
              <div className="flex">
                <div className="m-auto lg:w-4/5 sm:w-4/5 w-full">
                  <p className="text-center text-lg lg:font-normal font-light text-slate-200">
                    Your portfolio is your professional digital footprint. It
                    reflects your abilities experiences, and accomplishments
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8">
              <div className="flex justify-center items-center">
                <Button className="bg-white text-black text-lg py-6 px-8 font-light hover:bg-gray-200">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          <div className="py-10"></div>

          <div className="absolute top-0 bottom-0 right-0 left-0 z-0 hidden">
            <div className="absolute gradient__bgs top-[25%] left-[40%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
