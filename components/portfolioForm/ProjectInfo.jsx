import React, { useState } from "react";
import ButtonCustom from "../ButtonCustom";
import Project from "./Project";

const ProjectInfo = ({ switchTab, handleDataFetch }) => {
  const [Projects, setProjects] = useState([]);
  const [ActiveIndexes, setActiveIndexes] = useState([]);
  const [IterateArray, setIterateArray] = useState([0]);

  const handleClick = () => {
    // fetch project data
    const ProjectElements = [...document.querySelectorAll("#project")];

    for (const element of ProjectElements) {
      if (element.getAttribute("data-value"))
        if (JSON.parse(element.getAttribute("data-value")).title !== "") {
          Projects.push(JSON.parse(element.getAttribute("data-value")));

          setProjects(Projects);
        }
    }

    handleDataFetch("projects", Projects);

    switchTab((prev) => prev + 1);
  };

  const handleAddingInputs = (index, value) => {
    if (ActiveIndexes.includes(index)) {
      if (!value || value === "") {
        if (ActiveIndexes.length === 1) {
          setActiveIndexes([]);

          setIterateArray(IterateArray.filter((arr) => arr !== index + 1));

          return;
        }

        if (ActiveIndexes.indexOf(index) === ActiveIndexes.length - 1) {
          setActiveIndexes(ActiveIndexes.filter((item) => item !== index));

          setIterateArray(IterateArray.filter((arr) => arr !== index + 1));

          return;
        }
      }

      return;
    }

    setActiveIndexes([...ActiveIndexes, index]);

    setIterateArray([...IterateArray, index + 1]);
  };

  return (
    <div className="">
      {IterateArray.map((value, index) => (
        <Project
          key={index}
          index={index}
          handleNameInput={handleAddingInputs}
        />
      ))}

      <div className="pt-8 pb-2 flex justify-between">
        <div
          className="w-fit"
          onClick={() => switchTab((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          <ButtonCustom
            type={"button"}
            text={"Back"}
            variant={"bg-[#0c7199] text-white font-light text-base w-fit"}
          />
        </div>

        <div className="w-fit" onClick={handleClick}>
          <ButtonCustom
            type={"button"}
            text={"Continue"}
            variant={"bg-[#0c7199] text-white font-light text-base w-fit"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
