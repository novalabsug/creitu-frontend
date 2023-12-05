import { portfolioTemplatesInfo } from "@/constants/constant";
import React, { useState } from "react";
import PortfolioTemplateCard from "../PortfolioTemplateCard";
import { Input } from "../ui/input";
import ButtonCustom from "../ButtonCustom";

const TemplateInfo = ({ switchTab, handleDataFetch }) => {
  const [selectedTemplate, setSelectedTemplate] = useState({});

  const handleClick = () => {
    handleDataFetch("template", selectedTemplate);
  };

  return (
    <div>
      <div className="py-2">
        <div className="py-2">
          <Input
            placeholder="Search for template"
            type="text"
            className="w-3/5 bg-transparent text-slate-50 py-5 focus:border-[#0c7199] focus:border-[1.2px]"
          />
        </div>
      </div>

      <div className="py-3 max-h-[350px] overflow-auto">
        <div className="flex flex-wrap gap-4">
          {portfolioTemplatesInfo.map((template, index) => (
            <div key={index} onClick={() => setSelectedTemplate(template)}>
              <PortfolioTemplateCard
                variant={`${
                  template === selectedTemplate
                    ? "w-[220px] h-[140px] border-[1.2px] border-[#0c7199]"
                    : "w-[220px] h-[140px]"
                }`}
                template={template}
              />
            </div>
          ))}
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

        <div className="w-fit" onClick={handleClick}>
          <ButtonCustom
            type={selectedTemplate === "" ? "button" : "submit"}
            text={"Submit"}
            variant={"bg-[#0c7199] text-white font-light text-base w-fit"}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateInfo;
