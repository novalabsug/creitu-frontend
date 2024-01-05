import React from "react";
import Button1 from "./about/button1";

const AboutTab = () => {
  const Data = [
    "JavaScript",
    "CSS",
    "HTML",
    "Python",
    "TailwindCss",
    "C++",
    "SCSS",
    "React Js",
    "Next Js",
    "Express Js",
    "Node Js",
    "Django",
    "Flask",
  ];

  const Data2 = [
    "Full Stack development",
    "Web Development",
    "Machine Learning",
    "App Development",
    "SEO",
  ];

  return (
    <div className="lg:p-8 py-4 px-2 xl:max-h-[400px] lg:max-h-[500px] h-full overflow-auto">
      <div className="py-3">
        <p className="text-green-500 font-light lg:text-left text-center">
          Who am I?
        </p>
        <h3 className="text-3xl text-white font-semibold lg:text-left text-center">
          Jimmy Moriarty
        </h3>

        <div className="lg:py-1 py-3 lg:w-3/5 w-full">
          <p className="text-sm text-white font-light lg:text-left text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            veniam ab! Debitis atque et fugiat esse neque veritatis excepturi,
            totam officiis minima similique eum consequatur itaque hic.
            Eligendi, aperiam tenetur.
          </p>
        </div>
      </div>

      <div className="py-3">
        <p className="text-green-500 font-light">My Skills?</p>

        <div className="py-2">
          <div className="flex flex-wrap gap-4">
            {Data.map((item, index) => (
              <Button1 text={item} key={index} />
            ))}
          </div>

          <div className="py-8">
            <div className="h-[0.07rem] w-3/5 bg-white"></div>
          </div>

          <div className="flex flex-wrap gap-4">
            {Data2.map((item, index) => (
              <Button1 text={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-2"></div>
    </div>
  );
};

export default AboutTab;
