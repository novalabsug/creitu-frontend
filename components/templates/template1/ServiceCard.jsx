import React from "react";

const ServiceCard = ({ title, details, handleClick }) => {
  return (
    <div
      className="shrink-0 h-[210px] w-[350px] bg-cyan-600 shadow-md rounded-md relative group cursor-pointer hover:bg-white duration-300"
      onClick={() => handleClick(title, details)}
    >
      <div className="absolute bottom-0 right-0 left-0 p-4">
        <p className="text-white font-light text-center line-clamp-4 text-lg group-hover:text-black duration-300">
          {details}
        </p>

        <div className="py-2">
          <h3 className="text-sm text-gray-300 font-semibold text-center group-hover:text-gray-500 duration-300">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
