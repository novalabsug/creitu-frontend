"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioTemplateCard from "@/components/PortfolioTemplateCard";
import { portfolioTemplatesInfo } from "@/constants/constant";
import React from "react";

const TemplatesPage = () => {
  return (
    <>
      <Header />

      <main>
        <div className="py-4">
          <div className="flex">
            <div className="m-auto xl:w-4/5 lg:w-full">
              <div className="py-4">
                <h3 className="text-3xl text-white">All templates</h3>
              </div>

              <div className="py-6">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  {portfolioTemplatesInfo.map((template, index) => (
                    <PortfolioTemplateCard template={template} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12"></div>
      </main>

      <Footer />
    </>
  );
};

export default TemplatesPage;
