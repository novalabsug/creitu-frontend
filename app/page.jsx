import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import UiCard1 from "@/components/UiCard1";
import Svg1 from "@/constants/Svg1";
import { landingContent1 } from "@/constants/constant";
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
      <div className="flex py-16">
        <div className="m-auto lg:w-4/5 w-[90%]">
          <div className="flex py-8">
            <div className="w-2/4">
              <div className="relative py-12">
                <video loop autoplay muted height={400} width={"100%"}>
                  <source src="/videos/bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="w-2/4">
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
      <div className="py-12">
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
    </main>
  );
}
