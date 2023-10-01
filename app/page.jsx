import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import { ChevronRight, Dot } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* //---------- main content ------------------ */}

      {/* //section --------------------- */}
      <div className="py-8">
        <div className="flex">
          <div className="m-auto lg:w-4/5 w-[95%]">
            <p className="text-center text-lg lg:font-normal font-light">
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
      </div>

      {/* //section --------------------- */}
      <div className="py-4">
        <div className="flex">
          <div className="m-auto lg:w-4/5 w-3/5">
            <div className="bg-slate-300 h-[0.1rem] lg:hidden block"></div>

            <div className="lg:flex justify-center hidden">
              <p className="text-2xl font-bold text-slate-300 hover:text-slate-800 transition-all mx-4">
                Sign Up
              </p>

              <div className="py-2 flex items-center">
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <ChevronRight size={20} className="primary-color" />
              </div>

              <p className="text-2xl font-bold text-slate-300 hover:text-slate-800 transition-all mx-4">
                Choose a template
              </p>

              <div className="py-2 flex items-center">
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <ChevronRight size={20} className="primary-color" />
              </div>

              <p className="text-2xl font-bold text-slate-300 hover:text-slate-800 transition-all mx-4">
                Add Content
              </p>

              <div className="py-2 flex items-center">
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <Dot size={20} className="primary-color" />
                <ChevronRight size={20} className="primary-color" />
              </div>

              <p className="text-2xl font-bold text-slate-300 hover:text-slate-800 transition-all mx-4">
                Publish
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="flex py-16">
        <div className="m-auto lg:w-4/5 w-[90%]">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="pt-8 pb-4 border-slate-300 border-[1.8px] rounded-md px-4 h-[250px]">
              <div className="h-[90px]">
                <h2 className={`font-bold text-center text-base primary-color`}>
                  Build
                </h2>

                <h3 className="text-center font-bold text-2xl text-slate-700">
                  Build your portfolio in minutes
                </h3>
              </div>

              <div className="py-1">
                <p className="text-center text-base text-slate-700 my-4">
                  Use our pre-built simple and modern templates and create your
                  portfolio with ease
                </p>
              </div>
            </div>

            <div className="pt-8 pb-4 border-slate-300 border-[1.8px] rounded-md px-4">
              <div className="h-[90px]">
                <h2 className={`font-bold text-center text-base primary-color`}>
                  collaborate
                </h2>

                <h3 className="text-center font-bold text-2xl text-slate-700">
                  Collaborate on project
                </h3>
              </div>

              <div className="py-1">
                <p className="text-center text-base text-slate-700 my-4">
                  Connect and collaborate with fellow creatives on projects that
                  interest you
                </p>
              </div>
            </div>

            <div className="pt-8 pb-4 border-slate-300 border-[1.8px] rounded-md px-4">
              <div className="h-[90px]">
                <h2 className={`font-bold text-center text-base primary-color`}>
                  explore
                </h2>

                <h3 className="text-center font-bold text-2xl text-slate-700">
                  Find the right creative for your project
                </h3>
              </div>

              <div className="py-1">
                <p className="text-center text-base text-slate-700 my-4">
                  Explore the many projects listed and find yourself the perfect
                  creative for your project
                </p>
              </div>
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

              <h3 className="text-center font-bold text-2xl text-slate-700">
                Leave us your email and we shall notify you when we launch
              </h3>

              <p className="text-lg text-center">
                You can also leave us a comment and let us know your thoughts
              </p>
            </div>

            <div className="py-4 flex">
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
