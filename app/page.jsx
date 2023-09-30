import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";

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
            <p className="text-center text-lg font-light">
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
          <div className="m-auto w-3/5">
            <div className="bg-slate-300 h-[0.1rem]"></div>
          </div>
        </div>
      </div>

      {/* //section --------------------- */}
      <div className="flex py-16">
        <div className="absolute top-0 bottom-0 right-0 left-0 hidden">
          <div className="absolute gradient__bgs top-[55%] left-[20%]"></div>
        </div>

        <div className="m-auto w-4/5">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="pt-8 pb-4 border-[1.8px] border-slate-300 rounded-md px-4">
              <h2 className={`font-bold text-center text-lg primary-color`}>
                Build
              </h2>

              <h3 className="text-center font-bold text-2xl text-slate-700">
                Build your portfolio in minutes
              </h3>

              <p className="text-center text-base text-slate-700 my-4 font-thin">
                Use our pre-built simple and modern templates and create your
                portfolio with ease
              </p>
            </div>

            <div className="pt-8 pb-4 border-[1.8px] border-slate-300 rounded-md px-4">
              <h2 className={`font-bold text-center text-lg primary-color`}>
                collaborate
              </h2>

              <h3 className="text-center font-bold text-2xl text-slate-700">
                Collaborate on project
              </h3>

              <p className="text-center text-base text-slate-700 my-4 font-thin">
                Connect and collaborate with fellow creatives on projects that
                interest you
              </p>
            </div>

            <div className="pt-8 pb-4 border-[1.8px] border-slate-300 rounded-md px-4">
              <h2 className={`font-bold text-center text-lg primary-color`}>
                explore
              </h2>

              <h3 className="text-center font-bold text-2xl text-slate-700">
                Find the right creative for your project
              </h3>

              <p className="text-center text-base text-slate-700 my-4 font-thin">
                Explore the many projects listed and find yourself the perfect
                creative for your project
              </p>
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

              <h3 className="text-center font-bold text-2xl text-slate-700 text-slate-700">
                Leave us your email and we shall notify your when we launch
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
