import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="py-2">
      <div className="flex">
        <div className="m-auto lg:w-[70%] sm:w-[80%] w-[95%] relative">
          <div className="py-6"></div>

          <div className="py-1">
            <h1 className="text-center lg:text-2xl text-lg font-extrabold primary-color">
              Portfolio Marketplace
            </h1>
          </div>

          <div className="py-2">
            <p className="lg:text-6xl sm:text-5xl text-4xl font-thin text-center">
              Showcase your creative works to the rest of the world
            </p>
          </div>

          <div className="py-8">
            <div className="flex justify-center">
              <Link href={"/signin"}>
                <Button className={"text-base bg-primary"}>Get Started</Button>
              </Link>
            </div>
          </div>

          <div className="lg:py-2 py-2 hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
