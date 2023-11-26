import React, { useState } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const Project = ({ index, handleNameInput }) => {
  const [Project, setProject] = useState({
    title: "",
    url: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name == "title") handleNameInput(index, e.target.value);

    setProject({ ...Project, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="py-2 flex gap-4"
      id={"project"}
      data-target={`${index}`}
      data-value={`${JSON.stringify(Project)}`}
    >
      <div className="py-2 w-1/5">
        <Label htmlFor="description" className="text-white">
          Project Name
        </Label>

        <div className="py-1">
          <Input
            type="text"
            className="w-full bg-transparent text-slate-50 py-5 focus:border-[#0c7199] focus:border-[1.2px]"
            name="title"
            placeholder="title"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className="py-2 w-2/5">
        <Label htmlFor="description" className="text-white">
          Project demo link
        </Label>

        <div className="py-1">
          <Input
            type="text"
            className="w-full bg-transparent text-slate-50 py-5 focus:border-[#0c7199] focus:border-[1.2px]"
            placeholder="url"
            name="url"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div className="py-2 w-2/5">
        <Label htmlFor="description" className="text-white">
          Description
        </Label>

        <div className="py-1">
          <Textarea
            name="description"
            className="w-full bg-transparent text-slate-50 py-4 focus:border-[#0c7199] focus:border-[1.2px]"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
