import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import ButtonCustom from "../ButtonCustom";

const ProjectInfo = ({ switchTab }) => {
  return (
    <div className="">
      <div className="py-4 flex">
        <div className="m-auto w-3/5">
          <div className="py-2">
            <Label htmlFor="description" className="text-white">
              Project Name
            </Label>

            <div className="py-1">
              <Input
                type="text"
                className="w-full bg-transparent text-slate-50 py-5 focus:border-[#0c7199] focus:border-[1.2px]"
                placeholder="title"
              />
            </div>
          </div>

          <div className="py-2">
            <Label htmlFor="description" className="text-white">
              Project demo link
            </Label>

            <div className="py-1">
              <Input
                type="text"
                className="w-full bg-transparent text-slate-50 py-5 focus:border-[#0c7199] focus:border-[1.2px]"
                placeholder="url"
              />
            </div>
          </div>

          <div className="py-2">
            <Label htmlFor="description" className="text-white">
              Description
            </Label>

            <div className="py-1">
              <Textarea
                name="description"
                className="w-full bg-transparent text-slate-50 py-4 focus:border-[#0c7199] focus:border-[1.2px]"
              />
            </div>
          </div>
        </div>
      </div>
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

        <div className="w-fit" onClick={() => switchTab((prev) => prev + 1)}>
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
