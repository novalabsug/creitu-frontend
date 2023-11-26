"use client";

import ButtonCustom from "@/components/ButtonCustom";
import PersonalInfo from "@/components/portfolioForm/PersonalInfo";
import PortfolioInfo from "@/components/portfolioForm/PortfolioInfo";
import ProjectInfo from "@/components/portfolioForm/ProjectInfo";
import TemplateInfo from "@/components/portfolioForm/TemplateInfo";
import { Input } from "@/components/ui/input";
import { formParts } from "@/constants/constant";
import Link from "next/link";
import React, { useState } from "react";

const PortfolioCreate = () => {
  const [portfolioFormIndex, setPortfolioFormIndex] = useState(0);
  const [portfolioForm, setPortfolioForm] = useState({
    user: {},
    bio: "",
    socials: [],
    profession: "",
    projects: [],
  });

  const handleDataFetch = (type, value) => {};

  return (
    <main>
      {/* //section --------------------- */}
      <div className="py-4 flex">
        <div className="m-auto lg:w-[65%] sm:w-4/5 w-[97%]">
          <div className="lg:px-8 sm:px-6 px-4">
            <div className="px-8 py-4">
              <div className="py-4">
                <h3 className="text-white text-xl text-center">
                  Complete portfolio account
                </h3>
              </div>

              <div className="py-4 w-full flex">
                {formParts.map((part, index) => (
                  <div className="w-1/4">
                    <h3
                      className={`text-center font-semibold ${
                        index === portfolioFormIndex
                          ? "text-[#0c7199] pb-2 border-b-[1.2px] border-b-[#0c7199]"
                          : "text-slate-700"
                      }`}
                    >
                      {part}
                    </h3>
                  </div>
                ))}
              </div>

              <form className="py-2">
                <div className="">
                  {portfolioFormIndex === 0 && (
                    <PersonalInfo switchTab={setPortfolioFormIndex} />
                  )}

                  {portfolioFormIndex === 1 && (
                    <PortfolioInfo switchTab={setPortfolioFormIndex} />
                  )}

                  {portfolioFormIndex === 2 && (
                    <ProjectInfo switchTab={setPortfolioFormIndex} />
                  )}

                  {portfolioFormIndex === 3 && (
                    <TemplateInfo switchTab={setPortfolioFormIndex} />
                  )}
                </div>
              </form>

              <div className="mt-4 py-4 border-t-[1px] border-t-slate-500">
                <h3 className="text-white lg:text-left text-center">
                  process to dashboard{" "}
                  <Link href="/dashboard" className="primary-color">
                    skip process
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioCreate;
