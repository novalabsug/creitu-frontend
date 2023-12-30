import React from "react";

const HomeTab = () => {
  return (
    <div className="py-12 lg:px-4 px-2">
      <div className="py-8"></div>

      <div className="lg:w-4/5 w-full py-4">
        <h3 className="lg:text-6xl text-3xl font-bold text-white lg:text-left text-center">
          Full stack developer, JavaScript Developer
        </h3>
      </div>

      <div className="py-4">
        <p className="text-lg font-light text-white lg:text-left text-center">
          <span className="text-3xl text-green-500">4+</span> years of
          experience
        </p>
      </div>

      <div className="py-3"></div>

      <div className="py-6">
        <div className="flex gap-2 lg:justify-normal justify-center">
          <div className="lg:flex hidden items-center">
            <div className="h-[1px] w-[100px] bg-white"></div>
          </div>

          <p className="text-4xl font-light uppercase text-green-500 lg:text-left text-center">
            Jim Moriarty
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
