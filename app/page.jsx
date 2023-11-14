"use client";

import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import PortfolioTemplateCard from "@/components/PortfolioTemplateCard";
import UiCard1 from "@/components/UiCard1";
import VideoPlayer from "@/components/VideoPlayer";
import Svg1 from "@/constants/Svg1";
import { landingContent1, portfolioTemplatesInfo } from "@/constants/constant";
import { ChevronRight, Dot } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* //---------- main content ------------------ */}

      {/* //section --------------------- */}
      {/* <div className="py-8">
        <div className="flex">
          <div className="m-auto lg:w-4/5 w-[95%]">
            <p className="text-center text-lg lg:font-normal font-light text-white">
              Your portfolio is your{" "}
              <span className="primary-color font-bold">
                professional digital footprint
              </span>
              . It reflects your{" "}
              <span className="primary-color font-bold">abilities</span>,{" "}
              <span className="primary-color font-bold">experiences</span>, and{" "}
              <span className="primary-color font-bold">accomplishments</span>.
              Whether you're an artist, a designer, a developer, a marketing, or
              a professional in any sector, your portfolio is your{" "}
              <span className="primary-color font-bold">
                opportunity to shine
              </span>{" "}
              and demonstrate what sets you apart.
            </p>
          </div>
        </div>
      </div> */}

      {/* //section --------------------- */}
      <div className="py-8">
        <div className="flex">
          <div className="m-auto lg:w-4/5 w-3/5">
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
      <div className="py-12">
        <div className="relative h-full w-full">
          <video width="100%" height={"100%"} autoPlay loop muted>
            {/* Replace 'your-video.mp4' with the actual video file */}
            <source src={"/videos/bg1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute top-0 right-0 left-0 bottom-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0000002b] to-[#131f2f]"></div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="flex py-16">
        <div className="m-auto lg:w-4/5 w-[90%]">
          <div className="flex py-8 lg:flex-row flex-col">
            <div className="lg:w-2/4 w-full">
              <div className="relative py-12">
                {/* <VideoPlayer url={"/videos/bg.mp4"} /> */}
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
          <div className="m-auto w-4/5">
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
    </main>
  );
}
