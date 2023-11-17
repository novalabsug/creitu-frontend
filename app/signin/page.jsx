"use client";

import ButtonCustom from "@/components/ButtonCustom";
import { Input } from "@/components/ui/input";
import { GithubIcon, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { RiGoogleLine } from "react-icons/ri";

const SignIn = () => {
  const [displayEmailSignup, setDisplayEmailSignup] = useState(false);

  return (
    <main>
      <div className="py-4">
        <div className="flex">
          <div className="m-auto lg:w-3/5 w-full">
            <div className="py-4 lg:px-12 px-4">
              <h3 className="text-center text-2xl font-bold text-white">
                Login to Creitu
              </h3>

              <div className="py-8 px-12 flex justify-center items-center flex-col">
                <div className="py-3 px-6 border-[1px] border-slate-300 rounded-md flex my-2 cursor-pointer justify-center w-[350px]">
                  <GithubIcon size={21} className="primary-color mx-2" />

                  <p className="text-white text-sm">Continue with Github</p>
                </div>

                <div className="py-3 px-6 border-[1px] border-slate-300 rounded-md flex my-2 cursor-pointer justify-center w-[350px]">
                  <RiGoogleLine size={21} className="primary-color mx-2" />

                  <p className="text-white text-sm">Continue with Google</p>
                </div>

                {/* signup with email form */}
                <div
                  className={`py-2 w-[350px] ${
                    displayEmailSignup ? "block" : "hidden"
                  }`}
                >
                  <div className="pt-4 pb-2">
                    <hr />
                  </div>

                  <form>
                    <div className="py-2">
                      <Input
                        placeholder="Enter your email"
                        className="w-full py-4"
                        name="email"
                      />
                    </div>

                    <ButtonCustom
                      text={"Continue with email"}
                      type={"submit"}
                      variant={
                        "py-6 px-6 border-[1px] border-slate-300 rounded-md my-1 cursor-pointer w-full"
                      }
                    />
                  </form>
                </div>

                <div
                  className={`py-3 px-6 border-[1px] border-slate-300 rounded-md my-1 cursor-pointer justify-center w-[350px] ${
                    displayEmailSignup ? "hidden" : "flex"
                  }`}
                  onClick={() => setDisplayEmailSignup(true)}
                >
                  <p className="text-white text-sm">Continue with email</p>
                </div>
              </div>

              <div className="py-2">
                <p className="text-center text-white">
                  Or create new account{" "}
                  <span className="primary-color font-bold">
                    <Link href={"/signup"}>SignUp</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //spacer */}
      <div className="lg:py-8 py-24"></div>
    </main>
  );
};

export default SignIn;
