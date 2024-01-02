import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PortfolioTemplateCard = ({ template, variant }) => {
  return (
    <Link href={`/template/${template?.id}`}>
      <div
        className={`${
          variant ? variant : "w-[350px] h-[230px]"
        } lg:mb-0 mb-8 shrink-0 relative rounded-lg cursor-pointer bg-black group`}
      >
        <div
          className={`group-hover:h-4/5 h-full w-full relative duration-300`}
        >
          <Image
            src={template.url}
            fill={true}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div
          className={`py-2 px-1 group-hover:block lg:hidden block duration-300 delay-500`}
        >
          <p className="text-sm font-bold text-slate-300">{template.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioTemplateCard;
