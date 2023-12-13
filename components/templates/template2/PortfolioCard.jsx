import ButtonCustom from "@/components/ButtonCustom";
import Image from "next/image";
import React from "react";

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className=" p-2 border-[1.2px] border-slate-300 rounded-lg group hover:border-slate-100 hover:p-0 duration-200 hover:relative">
      <div className="relative w-full h-[200px]">
        <Image
          src={portfolio.image}
          className="w-full h-auto object-cover rounded-lg"
          alt="portfolio-image"
          fill
        />
      </div>

      <div className="group-hover:px-2">
        <div className="py-2"></div>

        <div className="py-1">
          <h3 className="text-lg w-4/5 capitalize">{portfolio.title}</h3>
        </div>

        <div className="py-1">
          <button className="group-hover:text-slate-100 group-hover:bg-red-500 group-hover:border-red-500 rounded-md py-2 px-3 text-sm outline-none bg-transparent border-[1.2px] border-slate-600">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
