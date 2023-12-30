import { ArrowLeft } from "lucide-react";
import React from "react";

const ServiceSidenav = ({ title, details, closeDisplay }) => {
  return (
    <div className="py-12">
      <div className="py-8"></div>

      <div className="py-4 pl-6">
        <div onClick={() => closeDisplay((prev) => !prev)}>
          <ArrowLeft size={28} className="text-white cursor-pointer" />
        </div>
      </div>

      <div className="z-50 p-8">
        <div className="flex gap-2">
          <div className="flex items-center w-1/5">
            <div className="w-full h-[1.2px] bg-cyan-500"></div>
          </div>

          <h3 className="text-3xl text-white font-semibold">{title}</h3>
        </div>

        <div className="py-3">
          <p className="text-white font-light">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidenav;
