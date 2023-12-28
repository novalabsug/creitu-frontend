import React from "react";

const HomeTab = () => {
  return (
    <div className="py-12 px-4">
      <div className="py-8"></div>

      <div className="w-4/5 py-4">
        <h3 className="text-6xl font-bold text-white">
          Full stack developer, JavaScript Developer
        </h3>
      </div>

      <div className="py-4">
        <p className="text-lg font-light text-white">
          <span className="text-3xl text-green-500">4+</span> years of
          experience
        </p>
      </div>

      <div className="py-3"></div>

      <div className="py-6">
        <div className="flex gap-2">
          <div className="flex items-center">
            <div className="h-[1px] w-[100px] bg-white"></div>
          </div>

          <p className="text-4xl font-light uppercase text-green-500">
            Jim Moriarty
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
