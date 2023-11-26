import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ImagePlus, User2Icon } from "lucide-react";
import ButtonCustom from "../ButtonCustom";
import { portfolioTemplatesInfo } from "@/constants/constant";
import SocialMediaInfo from "./SocialMediaInfo";

const PersonalInfo = ({ switchTab }) => {
  return (
    <div>
      <div className="pb-3">
        <div className="flex gap-6 w-fit">
          <div>
            <Label htmlFor="image" className="text-white cursor-pointer">
              <div className="py-8 bg-gray-700 rounded-full flex justify-center items-center w-[80px] h-[80px] my-2">
                <ImagePlus size={30} className="text-white" />
              </div>
            </Label>
            <Input type="file" id="image" name="image" className="hidden" />
          </div>

          <div className="py-8">
            <p className="text-lg text-white">Add cover photo</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 py-2">
        <div className="">
          <Input
            type="text"
            className="w-full bg-transparent text-slate-50 py-4 focus:border-[#0c7199] focus:border-[1.2px]"
            name="name"
            placeholder="full name"
          />
        </div>

        <div className="">
          <Input
            type="text"
            className="w-full bg-transparent text-slate-50 py-4 focus:border-[#0c7199] focus:border-[1.2px]"
            name="username"
            placeholder="username"
          />
        </div>

        <div className="">
          <Input
            type="text"
            className="w-full bg-transparent text-slate-50 py-4 focus:border-[#0c7199] focus:border-[1.2px]"
            name="email"
            placeholder="email"
          />
        </div>

        <div className="">
          <Input
            type="text"
            className="w-full bg-transparent text-slate-50 py-4 focus:border-[#0c7199] focus:border-[1.2px]"
            placeholder="gender"
          />
        </div>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="text-white">Add social accounts</h3>

        <div className="py-2 max-h-[220px] overflow-auto">
          <SocialMediaInfo />
        </div>
      </div>

      <div className="pt-4 pb-2">
        <div className="py-2">
          <div className="">
            <h3 className="text-white">Add resume file</h3>

            <Label htmlFor="resume">
              <div className="my-2 text-white text-lg border-[1.5px] rounded-md py-8 px-6 w-2/4 border-dashed border-white cursor-pointer">
                <p className="text-center text-sm">
                  choose a resume or drag and drop resume
                </p>
              </div>
            </Label>
          </div>

          <div className="py-2 w-2/5">
            <Input type="file" id="resume" name="resume" className="hidden" />
          </div>
        </div>
      </div>

      <div className="pt-8 pb-2 flex justify-between">
        <div></div>

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

export default PersonalInfo;
