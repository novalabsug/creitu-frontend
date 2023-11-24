"use client";

import CustomArrowDots from "@/components/CustomArrowDots";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import PortfolioTemplateCard from "@/components/PortfolioTemplateCard";
import UiCard1 from "@/components/UiCard1";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import Svg1 from "@/constants/Svg1";
import { landingContent1, portfolioTemplatesInfo } from "@/constants/constant";
import { ChevronRight, Dot } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* //---------- main content ------------------ */}

      {/* //section --------------------- */}
      <div className="py-8 hidden">
        <div className="flex">
          <div className="m-auto lg:w-[98%] xl:w-4/5">
            <div className="bg-slate-300 h-[0.1rem] hidden"></div>

            <div className="lg:flex justify-center hidden">
              <p className="text-3xl font-semibold text-slate-300 hover:text-slate-400 transition-all mx-4">
                Sign Up
              </p>

              <div className="py-2 flex items-center">
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <ChevronRight size={20} className="primary-color" />
              </div>

              <p className="text-3xl font-semibold text-slate-300 hover:text-slate-400 transition-all mx-4">
                Choose a template
              </p>

              <div className="py-2 flex items-center">
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <ChevronRight size={20} className="primary-color" />
              </div>

              <p className="text-3xl font-semibold text-slate-300 hover:text-slate-400 transition-all mx-4">
                Add Content
              </p>

              <div className="py-2 flex items-center">
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <ChevronRight size={20} className="primary-color" />
              </div>

              <p className="text-3xl font-semibold text-slate-300 hover:text-slate-400 transition-all mx-4">
                Publish
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="py-6">
        <div className="relative h-full w-full">
          <video width="100%" height={"100%"} autoPlay loop muted>
            {/* Replace 'your-video.mp4' with the actual video file */}
            <source src={"/videos/bg1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="top-6 left-8 absolute z-30">
            <div className="flex">
              <div className="lg:h-12 sm:h-10 h-6 w-[0.2rem] my-2 bg-[rgb(12,113,153)]"></div>

              <div className="ml-4">
                <h3 className="text-white font-semibold lg:text-3xl sm:text-2xl text-lg">
                  How Creitu works
                </h3>

                <div className="lg:flex sm:flex hidden justify-center">
                  <p className="text-base font-light text-slate-300">Sign Up</p>

                  <CustomArrowDots />

                  <p className="text-base font-light text-slate-300">
                    Choose a template
                  </p>

                  <CustomArrowDots />

                  <p className="text-base font-light text-slate-300">
                    Add Content
                  </p>

                  <CustomArrowDots />

                  <p className="text-base font-light text-slate-300">Publish</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 left-0 bottom-0 z-10 gradient__bg"></div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="flex py-8">
        <div className="m-auto lg:w-4/5 sm:w-[90%] w-[95%]">
          <div className="flex py-8 lg:flex-row flex-col">
            <div className="lg:w-2/4 w-[90%]">
              <div className="relative flex h-full justify-center items-center lg:pr-12 px-0 lg:py-0 py-4">
                <div className="py-2">
                  <p className="text-center text-slate-200 lg:text-6xl sm:text-6xl text-4xl font-semibold">
                    Who we are
                  </p>

                  <p className="text-center text-slate-200 lg:text-6xl sm:text-6xl text-4xl font-semibold">
                    What we do
                  </p>

                  <div className="py-4">
                    <h3 className="text-center text-white font-light my-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ad eum illum cupiditate hic magnam quas deleniti
                      distinctio aperiam dolores quam tempora non voluptas
                      facilis commodi cum ullam repudiandae impedit, aliquid
                      voluptatum. Cumque deleniti dolorum quibusdam.
                    </h3>

                    <h3 className="text-center text-white font-light my-3">
                      Voluptas facilis commodi cum ullam repudiandae impedit,
                      aliquid voluptatum. Cumque deleniti dolorum quibusdam.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/4 w-full">
              {landingContent1.map((content, index) => (
                <UiCard1
                  title={content.title}
                  subTitle={content.subTitle}
                  content={content.content}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="py-12 hidden">
        <div className="flex">
          <div className="m-auto lg:w-3/5 w-[95%]">
            <div>
              <h2 className="font-bold text-center text-lg primary-color">
                excited about creitu?
              </h2>

              <h3 className="text-center font-bold text-2xl text-slate-200">
                Leave us your email and we shall notify you when we launch
              </h3>

              <p className="text-lg text-center">
                You can also leave us a comment and let us know your thoughts
              </p>
            </div>

            <div className="py-6 flex">
              <div className="m-auto lg:w-4/5 w-[90%]">
                <Feedback />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="py-12">
        <div className="flex">
          <div className="m-auto xl:w-4/5 lg:w-full">
            <div className="py-4">
              <h3 className="text-3xl text-center text-white">
                Explore our predefined templates
              </h3>
            </div>

            <div className="py-6">
              <div className="flex justify-center items-center flex-wrap gap-6">
                {portfolioTemplatesInfo.map((template, index) => (
                  <PortfolioTemplateCard template={template} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="py-12">
        <div className="flex">
          <div className="m-auto xl:w-4/5 lg:w-full">
            <div className="py-4">
              <h3 className="text-3xl text-center text-white">
                Do you have a question
              </h3>

              <p className="text-center text-white font-light">
                Our team will happily take on any questions that you may have
              </p>
            </div>

            <div className="py-6">
              <div className="flex gap-8 justify-center lg:flex-row sm:flex-row flex-col items-center">
                <div>
                  <Link href={"/contact"}>
                    <Button className="bg-white text-black text-lg py-6 px-8 font-light hover:bg-gray-200">
                      Contact Us <ChevronRight className="font-light ml-3" />
                    </Button>
                  </Link>
                </div>

                <div className="py-2">
                  <p className="text-lg font-light text-white">
                    Or call us on{" "}
                    <span className="font-semibold">+256 7365 524334</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
