"use client";

import ContactCard from "@/components/templates/template1/ContactCard";
import PortfolioCard from "@/components/templates/template1/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DownloadCloud,
  Facebook,
  Github,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Template1 = () => {
  return (
    <main>
      {/* <div className="py-4 px-16">
        <Link href={"/"}>
          <h3 className="text-xl font-semibold text-slate-100 uppercase">
            tommy versetti
          </h3>
        </Link>
      </div> */}

      <div className="flex">
        <div className="m-auto w-[90%]">
          <div className="flex">
            <div className="w-[35%]">
              <div className="p-2">
                <div className="py-2 relative">
                  <div className="h-[300px]">
                    <Image
                      src={"/images/portfolio5.jpg"}
                      className="w-full h-auto object-cover rounded-lg"
                      fill
                      alt="portfolio-image"
                    />
                  </div>

                  {/* // to right gradient */}
                  <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-gradient-to-r from-[#00000005] to-[#000000bc] rounded-lg"></div>

                  {/* // to left gradient */}
                  <div className="rounded-lg absolute top-0 bottom-0 left-0 right-0 z-10 bg-gradient-to-b from-[#0000001a] to-[#000000e7]"></div>

                  <div className="absolute bottom-0 left-0 right-0 py-2 font-semibold z-20">
                    <div className="py-2">
                      <h3 className="text-center text-2xl text-white">
                        Tommy Versetti
                      </h3>

                      <p className="font-light text-cyan-600 text-center">
                        Full Stack Developer
                      </p>
                    </div>

                    <div className="py-2">
                      <div className="flex gap-3 justify-center">
                        <Twitter
                          className="text-slate-100 hover:text-cyan-600 cursor-pointer"
                          size={23}
                        />
                        <Facebook
                          className="text-slate-100 hover:text-cyan-600 cursor-pointer"
                          size={23}
                        />
                        <Instagram
                          className="text-slate-100 hover:text-cyan-600 cursor-pointer"
                          size={23}
                        />
                        <Github
                          className="text-slate-100 hover:text-cyan-600 cursor-pointer"
                          size={23}
                        />
                      </div>
                    </div>
                  </div>

                  {/* // spacer */}
                  <div className="py-4"></div>
                </div>

                <div className="py-2">
                  <div className="flex py-3 justify-center">
                    <div>
                      <Button className="bg-white gap-2 text-black hover:bg-gray-200 text-sm font-light group">
                        Download Resume
                        <DownloadCloud
                          size={20}
                          className="group-hover:animate-bounce group-hover:text-cyan-600 duration-200"
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="py-4">
                  <div className="py-1 flex justify-center gap-3">
                    <div>
                      <Mail className="text-white" />
                    </div>

                    <p className="text-white">heregoesmyemail@gmail.com</p>
                  </div>

                  <div className="py-1 flex justify-center gap-3">
                    <div>
                      <Phone className="text-white" />
                    </div>

                    <p className="text-white">256 7863 534256</p>
                  </div>

                  <div className="py-1 flex justify-center gap-3 hidden">
                    <div>
                      <Phone className="text-white" />
                    </div>

                    <p className="text-white">256 7930 082763</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[65%] px-4">
              <div className="flex">
                <div className="w-4/5">
                  <div>
                    <div className="py-2">
                      <h3 className="text-white font-extrabold text-6xl uppercase">
                        hi, i'm tommy <br />{" "}
                        <span className="text-cyan-600">
                          full stack developer
                        </span>
                      </h3>
                    </div>

                    <div className="py-4">
                      <p className="font-light text-slate-100">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Facilis distinctio sapiente maxime sunt expedita
                        eum officia totam debitis exercitationem quibusdam
                        cumque voluptate, neque minus. Obcaecati asperiores quos
                        eum. Asperiores, rerum?
                      </p>
                    </div>

                    <div className="py-2">
                      <div className="border-cyan-600 border-[0.6px] rounded-md py-2 px-3 w-fit">
                        <p className="font-light text-slate-100">
                          3+ years experience
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-8">
                    <div className="border-b-[0.9px] py-2 border-b-slate-500 w-fit">
                      <h3 className="font-semibold text-2xl text-cyan-600">
                        Professional Skills
                      </h3>
                    </div>

                    <div className="py-4">
                      <div className="py-2">
                        <div className="">
                          <h3 className="font-semibold text-base text-slate-100">
                            Programming Languages
                          </h3>
                        </div>

                        <div className="grid grid-cols-4 gap-4 py-2">
                          <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                            <div className="py-1"></div>

                            <h3 className="text-slate-500 font-semibold text-sm">
                              JavaScript
                            </h3>
                          </div>

                          <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                            <div className="py-1"></div>

                            <h3 className="text-slate-500 font-semibold text-sm">
                              Python
                            </h3>
                          </div>

                          <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                            <div className="py-1"></div>

                            <h3 className="text-slate-500 font-semibold text-sm">
                              Django
                            </h3>
                          </div>

                          <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                            <div className="py-1"></div>

                            <h3 className="text-slate-500 font-semibold text-sm">
                              Django
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        <div className="">
                          <h3 className="font-semibold text-base text-slate-100">
                            Frameworks
                          </h3>
                        </div>

                        <div className="grid grid-cols-4 gap-4 py-2">
                          <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                            <div className="py-1"></div>

                            <h3 className="text-slate-500 font-semibold text-sm">
                              Express Js
                            </h3>
                          </div>

                          <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                            <div className="py-1"></div>

                            <h3 className="text-slate-500 font-semibold text-sm">
                              Next Js
                            </h3>
                          </div>

                          <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                            <div className="py-1"></div>

                            <h3 className="text-slate-500 font-semibold text-sm">
                              Django
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-1/5"></div>
              </div>
            </div>
          </div>

          <div className="py-4 flex">
            <div className="m-auto w-[90%]">
              <div className="border-b-[0.9px] py-2 border-b-slate-500 w-fit">
                <h3 className="font-semibold text-2xl text-cyan-600">
                  My Projects
                </h3>
              </div>

              <div className="py-3">
                <div className="auto-rows-auto gap-2 columns-3 h-full w-full ">
                  <PortfolioCard
                    portfolio={{
                      image: "/images/template2.jpg",
                      title: "I use animation as a third dimension ",
                    }}
                  />

                  <PortfolioCard
                    portfolio={{
                      image: "/images/portfolio3.jpeg",
                      title:
                        "crafting Unique Experiences Inspiring Connections",
                    }}
                  />

                  <PortfolioCard
                    portfolio={{
                      image: "/images/portfolio6.jpg",
                      title:
                        "crafting Unique Experiences Inspiring Connections",
                    }}
                  />

                  <PortfolioCard
                    portfolio={{
                      image: "/images/portfolio1.jpg",
                      title: "Elevate your brand to new",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 flex">
            <div className="m-auto w-[90%]">
              <div className="flex justify-center">
                <div className="border-b-[0.9px] py-2 border-b-slate-500 w-fit">
                  <h3 className="font-semibold text-2xl text-cyan-600">
                    Contact Me
                  </h3>
                </div>
              </div>

              <div className="py-6">
                <div className="flex">
                  <div className="m-auto w-4/5">
                    <div className="flex justify-center items-center gap-4">
                      <Link href={"/"}>
                        <ContactCard
                          contact={{
                            icon: <Mail size={30} className="font-light" />,
                            text: "hereismyemail@mail.com",
                          }}
                        />
                      </Link>

                      <Link href={"/"}>
                        <ContactCard
                          contact={{
                            icon: <Phone size={30} className="font-light" />,
                            text: "256-7445-546253",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Template1;
