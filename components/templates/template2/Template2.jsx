import {
  Facebook,
  Home,
  Instagram,
  Mail,
  Phone,
  Twitch,
  Twitter,
} from "lucide-react";
import {
  Oswald,
  Poppins,
  Roboto_Flex,
  Roboto_Mono,
  Roboto_Serif,
} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortfolioCard from "./PortfolioCard";

const font = Roboto_Flex({
  subsets: ["latin"],
});

const Template2 = () => {
  return (
    <div className={font.className}>
      <div className="bg-slate-50 w-full">
        <div className="py-4">
          <div className="flex">
            <div className="m-auto w-4/5">
              <div className="flex justify-between py-2">
                <div>
                  <Link href={"/"}>
                    <p className="text-xl font-semibold uppercase">Ma</p>
                  </Link>
                </div>

                <div className="flex gap-4">
                  <div className="cursor-pointer pb-1 border-b-[1.5px] border-b-slate-100 hover:border-b-red-600">
                    <p className="text-gray-600 text-base pt-1">About</p>
                  </div>

                  <div className="cursor-pointer pb-1 border-b-[1.5px] border-b-slate-100 hover:border-b-red-600">
                    <p className="text-gray-600 text-base pt-1">Projects</p>
                  </div>

                  <div className="cursor-pointer pb-1 border-b-[1.5px] border-b-slate-100 hover:border-b-red-600">
                    <p className="text-gray-600 text-base pt-1">Resume</p>
                  </div>

                  <div className="cursor-pointer pb-1 border-b-[1.5px] border-b-slate-100 hover:border-b-red-600">
                    <p className="text-gray-600 text-base pt-1">Contact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* // hero section */}
          <div className="py-12">
            <div className="flex">
              <div className="m-auto w-[85%]">
                <div className="flex gap-4">
                  <div className="w-3/5">
                    <div className="py-8">
                      <p className="text-gray-600 text-lg">Let's connect</p>

                      <div className="py-4">
                        <h3 className="text-5xl font-bold">
                          Hello, I'm{" "}
                          <span className="text-red-600 capitalize">
                            Jeremy Ma
                          </span>
                        </h3>

                        <div className="py-2">
                          <h3 className="text-7xl font-bold capitalize text-slate-100 text-stroke relative before:content-[attr(before)] before:absolute before:z-10 before:top-0 before:left-0 before:text-red-600 before:w-[76%] before:h-full before:border-r-[1.2px] before:border-r-red-600 before:overflow-hidden">
                            content creator
                          </h3>
                        </div>
                      </div>

                      <div className="py-2">
                        <p className="font-light">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis non facere in modi officia
                          cupiditate praesentium optio, sit aliquid asperiores
                          impedit similique. Vero, obcaecati consequatur
                          sapiente possimus a provident odit?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-2/5 group">
                    <div className="py-4"></div>

                    <div className="group-hover:w-full group-hover:before:hidden group-hover:before:-rotate-6 duration-300 relative w-4/5 h-full before:z-0 before:absolute before:-top-8 before:-right-6 before:bg-slate-200 before:rounded-lg before:rotate-6 before:h-full before:w-full">
                      <Image
                        src={"/images/portfolio3.jpeg"}
                        className="w-full h-auto object-cover rounded-lg group-hover:object-contain group-hover:absolute duration-300 delay-700"
                        fill
                        alt="profile-image"
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="flex gap-4 w-fit border-b-2 border-b-red-500 hover:border-b-0 duration-200">
                    <div className="py-2 hover:border-b-2 hover:border-b-red-500 duration-150">
                      <Link href={"/"}>
                        <Facebook />
                      </Link>
                    </div>

                    <div className="py-2 hover:border-b-2 hover:border-b-red-500 duration-150">
                      <Link href={"/"}>
                        <Twitter />
                      </Link>
                    </div>

                    <div className="py-2 hover:border-b-2 hover:border-b-red-500 duration-150">
                      <Link href={"/"}>
                        <Twitch />
                      </Link>
                    </div>

                    <div className="py-2 hover:border-b-2 hover:border-b-red-500 duration-150">
                      <Link href={"/"}>
                        <Instagram />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 hidden">
          <div className="flex justify-center items-center">
            <div className="w-4/5">
              <p className="text-center text-5xl font-thin">
                crafting stories that capture our hearts and ignite our
                imaginations. through{" "}
                <span className="font-semibold">design</span> and{" "}
                <span className="font-semibold">innovation</span>
              </p>
            </div>
          </div>
        </div>

        {/* // projects section */}
        <div className="py-12">
          <div className="flex">
            <div className="m-auto w-4/5">
              <div className="py-2">
                <p className="font-light text-red-600">Behold my works</p>
                <h3 className="text-5xl font-bold text-gray-600">
                  My Projects
                </h3>
              </div>

              <div className="py-4">
                <div className="grid grid-cols-3 gap-4">
                  <PortfolioCard
                    portfolio={{
                      image: "/images/template1.jpg",
                      title: "Set to true to keep the cursor open",
                    }}
                  />

                  <PortfolioCard
                    portfolio={{
                      image: "/images/template2.jpg",
                      title: "for use with capped collections",
                    }}
                  />

                  <PortfolioCard
                    portfolio={{
                      image: "/images/portfolio7.jpg",
                      title:
                        "Converts this query to a customized, reusable query ",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact section */}
        <div className="py-12">
          <div className="py-4">
            <div className="flex justify-center gap-4">
              <div className="flex gap-2">
                <div>
                  <Mail />
                </div>

                <p className="text-lg font-light">jeremyma@gmail.com</p>
              </div>

              <div className="w-[0.1rem] h-8 bg-red-500"></div>

              <div className="flex gap-2">
                <div>
                  <Phone />
                </div>

                <p className="text-lg font-light">07885 367625</p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="flex">
              <div className="m-auto w-2/4">
                <div className="py-2">
                  <h3 className="text-center font-semibold text-2xl text-gray-600">
                    Get in touch with me
                  </h3>
                </div>

                <form action="">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="py-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="your names"
                        className="outline-none border-[1.2px] text-sm py-3 px-4 rounded bg-gray-200 w-full focus:border-red-500"
                      />
                    </div>

                    <div className="py-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        className="outline-none border-[1.2px] text-sm py-3 px-4 rounded bg-gray-200 w-full focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="py-2">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="subject"
                      className="outline-none border-[1.2px] text-sm py-3 px-4 rounded bg-gray-200 w-full focus:border-red-500"
                    />
                  </div>

                  <div className="py-2">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="message"
                      className="outline-none border-[1.2px] text-sm py-3 px-4 rounded bg-gray-200 w-full focus:border-red-500"
                    ></textarea>
                  </div>

                  <div className="py-3">
                    <button
                      type="submit"
                      className="hover:text-slate-100 hover:bg-red-500 hover:border-red-500 rounded-md py-2 px-3 text-sm outline-none bg-transparent border-[1.2px] border-slate-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
