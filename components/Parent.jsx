import React from "react";

const Parent = ({ children }) => {
  return (
    <div className="bg__gradient-2">
      <div className="backdrop-blur-md">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Parent;
