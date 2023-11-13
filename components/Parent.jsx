import React from "react";

const Parent = ({ children }) => {
  return (
    <div className="">
      <div className="backdrop-blur-md">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Parent;
