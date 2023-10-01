import React from "react";

const TextTransform = ({ letter, index }) => {
  return (
    <p
      className={`cursor-pointer ml-[0.1rem] lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-[#05465f]`}
    >
      {letter}
    </p>
  );
};

export default TextTransform;
