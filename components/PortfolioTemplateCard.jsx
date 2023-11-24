import Image from "next/image";
import React, { useState } from "react";

const PortfolioTemplateCard = ({ template, variant }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${
        variant ? variant : "w-[350px] h-[230px]"
      } lg:mb-0 mb-8 shrink-0 relative rounded-lg cursor-pointer bg-black`}
      onMouseEnter={() => setHover((prev) => (prev ? false : true))}
      onMouseLeave={() => setHover((prev) => (prev ? false : true))}
    >
      <div className={`${hover ? "h-4/5" : "h-full"} w-full relative`}>
        <Image
          src={template.url}
          fill={true}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div className={`py-2 px-1 ${hover ? "block" : "lg:hidden block"}`}>
        <p className="text-sm font-bold text-slate-300">{template.title}</p>
      </div>
    </div>
  );
};

export default PortfolioTemplateCard;
