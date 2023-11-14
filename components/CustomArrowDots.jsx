import { ChevronRight, Dot } from "lucide-react";
import React from "react";

const CustomArrowDots = () => {
  return (
    <div className="lg:px-3 sm:px-1 lg:flex sm:flex hidden items-center">
      {[1, 2, 3].map((item) => (
        <Dot
          size={20}
          className={`font-bold text-[#539cb7] ${
            item > 1 && "lg:block sm:hidden"
          }`}
          key={item}
        />
      ))}
      <ChevronRight size={20} className="font-bold text-[#4c95b1]" />
    </div>
  );
};

export default CustomArrowDots;
