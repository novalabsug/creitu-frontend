import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import TextTransform from "./TextTransform";

const Hero = () => {
  const transformWords = "creative works";
  return (
    <div className="">
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
              <p className="lg:text-6xl sm:text-5xl text-4xl font-bold text-center">
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

            <div className="py-8 ">
              <div className="flex justify-center hidden">
                <Link href={"/signin"}>
                  <Button className={"text-base bg-primary"}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:py-2 py-2 hidden"></div>
          </div>

          {/* <div className="absolute top-0 bottom-0 right-0 left-0 z-0 hidden">
            <div className="absolute gradient__bgs top-[25%] left-[40%]"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
