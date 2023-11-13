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

            <div className="py-1">
              <h1 className="text-center lg:text-2xl text-lg primary-color">
                Portfolio Marketplace
              </h1>
            </div>

            <div className="py-2">
              <p className="lg:text-6xl text-5xl font-bold text-center text-white">
                Showcase your{" "}
                <span className="text-[#05465f]">creative works</span> to the
                rest of <span className="text-[#05465f]">the world</span>
              </p>
            </div>

            <div className="py-2 hidden">
              <div className="flex flex-wrap justify-center">
                <p className="lg:text-6xl sm:text-5xl text-4xl font-bold text-center">
                  Showcase your{" "}
                </p>

                <div className="ml-4 flex">
                  {[..."creative"].map((letter, index) => (
                    <TextTransform key={index} letter={letter} index={index} />
                  ))}
                </div>

                <div className="ml-4 flex">
                  {[..."works"].map((letter, index) => (
                    <TextTransform key={index} letter={letter} index={index} />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center">
                <p className="lg:text-6xl sm:text-5xl text-4xl font-bold text-center flex">
                  to the rest of
                </p>

                <p className="ml-4 lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-[#05465f]">
                  the world
                </p>
              </div>
            </div>

            <div className="py-2">
              <div className="flex">
                <div className="m-auto w-4/5">
                  <p className="text-center text-lg lg:font-normal font-light text-white">
                    Your portfolio is your{" "}
                    <span className="primary-color font-bold">
                      professional digital footprint
                    </span>
                    . It reflects your{" "}
                    <span className="primary-color font-bold">abilities</span>,{" "}
                    <span className="primary-color font-bold">experiences</span>
                    , and{" "}
                    <span className="primary-color font-bold">
                      accomplishments
                    </span>
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
