import ButtonCustom from "@/components/ButtonCustom";
import { ExpandIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className=" p-2 border-[1.2px] border-slate-300 rounded-lg group hover:border-slate-100 hover:p-0 duration-200 relative">
      <div className="relative w-full h-[200px]">
        <Image
          src={portfolio.image}
          className="w-full h-auto object-cover rounded-lg"
          alt="portfolio-image"
          fill
        />

        <div className="hidden group-hover:block duration-150 delay-1000 absolute top-0 bottom-0 right-0 left-0 z-30">
          <div className="h-full w-full flex justify-center items-center">
            <div className="p-8 group-hover:p-6 duration-200 rounded-full bg-[#28262698]">
              <ExpandIcon className="text-white" />
            </div>
          </div>
        </div>
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
