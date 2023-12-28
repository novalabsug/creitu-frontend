import { Menu } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Project from "./Project";

const ProjectSlider = ({ page }) => {
  const [counter, setCounter] = useState(2);

  const Projects = [
    {
      title: "Running around the world",
      description: "A short desc about running around the world",
      image: "/images/portfolio6.jpg",
    },
    {
      title: "Chasing a dog",
      description: "I was chasing a dog just yesterday. I didn't catch it",
      image: "/images/portfolio3.jpeg",
    },
    {
      title: "I have a new car",
      description:
        "It's a mazda cx5 2020 model. Nice ride right, I thought so to",
      image: "/images/portfolio5.jpg",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCounter((prev) => (prev < Projects.length - 1 ? prev + 1 : 0));
    }, 7000);
  }, [counter]);

  return (
    <div className="h-full w-full">
      <div className="h-full w-full relative">
        {Projects.map((project, index) => (
          <Project
            page={page}
            image={project.image}
            title={project.title}
            description={project.description}
            isActive={index === counter && true}
          />
        ))}

        <div className="absolute top-0 left-0 bottom-0 right-0 z-30 bg-[#0000003a]"></div>
      </div>
    </div>
  );
};

export default ProjectSlider;
