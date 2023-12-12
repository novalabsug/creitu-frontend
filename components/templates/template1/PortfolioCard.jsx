import { Link2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const PortfolioCard = ({ portfolio }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`my-2 w-full relative cursor-pointer overflow-hidden border-[1px] border-slate-600 ${
        isHovered && "p-2"
      }`}
      onMouseOver={() => setIsHovered((prev) => !prev)}
      onMouseOut={() => setIsHovered((prev) => !prev)}
    >
      <div className="rounded-md relative">
        <img
          alt="image"
          src={portfolio?.image}
          className="w-full h-auto object-cover"
        />
      </div>

      <div
        className={`p-4 left-0 right-0 absolute z-10 bg-gradient-to-t from-black to-[#00000000] ${
          isHovered && "bottom-0"
        }`}
      >
        <div className="w-4/5">
          <Link
            href={"/"}
            className="hover:text-cyan-600 text-white font-semibold text-xl"
          >
            {portfolio?.title}
            {/* <span>
              <Link2 size={20} />
            </span> */}
          </Link>
        </div>

        <div className="py-1">
          <p className="text-gray-200 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eius
            iste provident saepe commodi aliquid possimus totam labore hic,
            eveniet deserunt vero! Nam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
