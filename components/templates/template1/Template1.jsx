import Link from "next/link";
import React, { useState } from "react";
import ContactCard from "./ContactCard";
import {
  DownloadCloud,
  Facebook,
  Github,
  Instagram,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import PortfolioCard from "./PortfolioCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import ServiceSidenav from "./ServiceSidenav";

const Template1 = () => {
  const [serviceSidenavDisplay, setServiceSidenavDisplay] = useState(true);
  const [selectedService, setSelectedService] = useState({
    title: "",
    details: "",
  });

  const Services = [
    {
      title: "Web Development",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tempora, suscipit id quisquam mollitia hic esse! Sequi, numquam dignissimos dolor itaque minima iure, autem quae asperiores magnam culpa nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tempora, suscipit id quisquam mollitia hic esse! Sequi, numquam dignissimos dolor itaque minima iure, autem quae asperiores magnam culpa nulla?",
    },
    {
      title: "App Development",
      details:
        "Dolor itaque minima iure, autem quae asperiores magnam culpa nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tempora, suscipit id quisquam mollitia hic esse! Sequi, numquam dignissimos dolor itaque minima iure, autem quae asperiores magnam culpa nulla?",
    },
    {
      title: "SEO",
      details:
        "Autem quae asperiores magnam culpa nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tempora, suscipit id quisquam mollitia hic esse! Sequi, numquam dignissimos dolor itaque minima iure, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tempora, suscipit id quisquam mollitia hic esse! Sequi, numquam dignissimos dolor itaque minima iure, autem quae asperiores magnam culpa nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tempora, suscipit id quisquam mollitia hic esse! Sequi, numquam dignissimos dolor itaque minima iure, autem quae asperiores magnam culpa nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate tempora, suscipit id quisquam mollitia hic esse! Sequi, numquam dignissimos dolor itaque minima iure, autem quae asperiores magnam culpa nulla?",
    },
  ];

  const handleServiceSelect = (title, details) => {
    setSelectedService({ title, details });
    setServiceSidenavDisplay((prev) => !prev);
  };

  return (
    <>
      <div className={`py-3 relative`}>
        <div className="py-6 px-16 w-full lg:block flex justify-center">
          <Link
            href={"/"}
            className="text-xl font-semibold text-slate-100 uppercase lg:text-left text-center"
          >
            tommy versetti
          </Link>
        </div>

        {/* {
          <div
            className={`fixed h-screen w-2/5 bottom-0 top-0 right-0 z-[990] bg-[#191919] ${
              serviceSidenavDisplay ? "visible" : "invisible"
            }`}
          >
            <ServiceSidenav
              title={selectedService.title}
              details={selectedService.details}
              closeDisplay={setServiceSidenavDisplay}
            />
          </div>
        } */}

        <div className="flex py-8">
          <div className="m-auto w-[90%]">
            <div className="flex lg:flex-row flex-col">
              <div className="lg:w-[35%] m-auto sm:w-3/5 w-full">
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

              <div className="lg:w-[65%] w-full lg:px-4 px-1">
                <div className="flex lg:flex-row flex-col">
                  <div className="lg:w-4/5 w-full lg:p-0 px-4">
                    <div>
                      <div className="py-2">
                        <h3 className="text-white font-extrabold lg:text-6xl sm:text-5xl text-3xl uppercase lg:text-left text-center">
                          hi, i'm tommy <br />{" "}
                          <span className="text-cyan-600">
                            full stack developer
                          </span>
                        </h3>
                      </div>

                      <div className="py-4">
                        <p className="font-light text-slate-100 lg:text-left text-center">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Facilis distinctio sapiente maxime sunt expedita
                          eum officia totam debitis exercitationem quibusdam
                          cumque voluptate, neque minus. Obcaecati asperiores
                          quos eum. Asperiores, rerum?
                        </p>
                      </div>

                      <div className="py-2 lg:block flex justify-center">
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

                          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-2">
                            <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                              <div className="py-1"></div>

                              <h3 className="text-slate-500 font-semibold lg:text-sm sm:text-sm text-xs">
                                JavaScript
                              </h3>
                            </div>

                            <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                              <div className="py-1"></div>

                              <h3 className="text-slate-500 font-semibold lg:text-sm sm:text-sm text-xs">
                                Python
                              </h3>
                            </div>

                            <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                              <div className="py-1"></div>

                              <h3 className="text-slate-500 font-semibold lg:text-sm sm:text-sm text-xs">
                                Django
                              </h3>
                            </div>

                            <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                              <div className="py-1"></div>

                              <h3 className="text-slate-500 font-semibold lg:text-sm sm:text-sm text-xs">
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

                          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-2">
                            <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                              <div className="py-1"></div>

                              <h3 className="text-slate-500 font-semibold lg:text-sm sm:text-sm text-xs">
                                Express Js
                              </h3>
                            </div>

                            <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                              <div className="py-1"></div>

                              <h3 className="text-slate-500 font-semibold lg:text-sm sm:text-sm text-xs">
                                Next Js
                              </h3>
                            </div>

                            <div className="bg-slate-100 rounded-md border-l-[3px] p-2 border-l-cyan-600">
                              <div className="py-1"></div>

                              <h3 className="text-slate-500 font-semibold lg:text-sm sm:text-sm text-xs">
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

            <div className="py-12 hidden">
              <div className="flex">
                <div className="m-auto w-[90%]">
                  <div className="border-b-[0.9px] py-2 border-b-slate-500 w-fit">
                    <h3 className="font-semibold text-2xl text-cyan-600">
                      Services I Offer
                    </h3>
                  </div>

                  <div className="py-3">
                    <div className="flex gap-4 justify-center flex-wrap">
                      {Services.map((service, index) => (
                        <ServiceCard
                          title={service.title}
                          details={service.details}
                          key={index}
                          handleClick={handleServiceSelect}
                        />
                      ))}
                    </div>
                  </div>
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
                  <div className="auto-rows-auto gap-2 lg:columns-3 sm:columns-2 columns-1 h-full w-full ">
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
                      <div className="flex justify-center items-center gap-4 lg:flex-row flex-col">
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
      </div>

      <div className="py-4 bg-black z-50">
        <p className="text-center text-white">
          {new Date().getFullYear()} &copy; copyright.{" "}
          <span className="primary-color font-bold">creitu</span>
        </p>
      </div>
    </>
  );
};

export default Template1;
