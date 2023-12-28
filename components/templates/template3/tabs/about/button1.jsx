import React from "react";

const Button1 = ({ text }) => {
  return (
    <div className="py-2 px-8 border-[1.2px] rounded border-green-900">
      <p className="text-sm text-white text-center">{text}</p>
    </div>
  );
};

export default Button1;
