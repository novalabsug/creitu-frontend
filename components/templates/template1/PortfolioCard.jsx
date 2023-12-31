import { Github, Link2, Link2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const PortfolioCard = ({ portfolio }) => {
  return (
    <div className="my-2 w-full relative overflow-hidden border-[1px] border-slate-600 group">
      <div className="rounded-md relative">
        <img
          alt="image"
          src={portfolio?.image}
          className="w-full h-auto object-cover group-hover:scale-95 duration-150 group-hover:blur-sm"
        />
      </div>

      <div className="p-4 left-0 right-0 absolute z-10 bg-gradient-to-t from-black to-[#00000000] group-hover:bottom-0 duration-150">
        <div className="lg:w-4/5 w-full">
          <Link
            href={"/"}
            className="capitalize text-white font-semibold lg:text-xl text-base"
          >
            {portfolio?.title}
            {/* <span>
              <Link2 size={20} />
            </span> */}
          </Link>
        </div>

        <div className="lg:py-2 py-3 flex gap-2">
          <Link href={"/"}>
            <div className="group/btn hover:bg-cyan-600 duration-300 lg:bg-slate-100 bg-cyan-600 py-1 px-2 rounded cursor-pointer flex gap-2 justify-center items-center w-fit">
              <p className="font-light text-sm lg:hidden block group-hover/btn:block group-hover:text-slate-100 duration-200">
                live demo
              </p>

              <div>
                <Link2Icon className="group-hover/btn:text-slate-200 duration-200 lg:text-black text-slate-200" />
              </div>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="group/btn-1 hover:bg-cyan-600 duration-300 lg:bg-slate-100 bg-cyan-600 py-1 px-2 rounded cursor-pointer flex gap-2 justify-center items-center w-fit">
              <p className="font-light text-sm lg:hidden block group-hover/btn-1:block group-hover:text-slate-100 duration-200">
                code
              </p>

              <div>
                <Github className="group-hover/btn-1:text-slate-200 duration-200 lg:text-black text-slate-200" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
