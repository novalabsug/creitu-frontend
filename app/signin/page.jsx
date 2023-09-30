import { GithubIcon } from "lucide-react";
import React from "react";
import { RiGoogleLine } from "react-icons/ri";

const SignIn = () => {
  return (
    <main>
      <div className="lg:py-12 py-16">
        <div className="flex">
          <div className="m-auto lg:w-3/5 w-full">
            <div className="py-8 lg:px-12 px-4">
              <h3 className="text-center text-2xl font-bold text-slate-600">
                Login to Creitu
              </h3>

              <div className="py-8 px-12 flex justify-center items-center flex-col">
                <div className="py-2 px-6 border-[1.8px] border-slate-300 rounded-md flex my-2 cursor-pointer justify-center w-fit">
                  <GithubIcon />

                  <p className="text-lg mx-2">Continue with Github</p>
                </div>
                <div className="py-2 px-6 border-[1.8px] border-slate-300 rounded-md flex my-2 cursor-pointer justify-center w-fit">
                  <RiGoogleLine size={25} />

                  <p className="text-lg mx-2">Continue with Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //spacer */}
      <div className="lg:py-8 py-28"></div>
    </main>
  );
};

export default SignIn;
