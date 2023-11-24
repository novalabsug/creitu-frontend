"use client";

import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import ButtonCustom from "../ButtonCustom";
import { Professions, ProfessionsData } from "@/constants/constant";
import LanguagesComponent from "../LanguagesComponent";

const PortfolioInfo = ({ switchTab }) => {
  const [profession, setProfession] = useState("");
  const [category, setCategory] = useState("");
  const [roles, setRoles] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);

  const handleInputChange = (e) => {
    setProfession(e.target.value);
  };

  const handleCategoryInputChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = (type, value) => {
    if (type === "language") {
      const exists = selectedLanguages.includes(value);

      if (!exists) return setSelectedLanguages([...selectedLanguages, value]);

      const newSelectedLanguagesArray = selectedLanguages.filter(
        (selectedLanguage) => selectedLanguage !== value
      );

      setSelectedLanguages(newSelectedLanguagesArray);

      return;
    }

    const exists = selectedFrameworks.includes(value);

    if (!exists) return setSelectedFrameworks([...selectedFrameworks, value]);

    const newSelectedFrameworksArray = selectedFrameworks.filter(
      (selectedFramework) => selectedFramework !== value
    );

    setSelectedFrameworks(newSelectedFrameworksArray);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="py-2">
          <Label htmlFor="category" className="text-white">
            Category
          </Label>

          <div className="py-1">
            <select
              id="category"
              name="category"
              className="py-2 px-4 outline-none w-full bg-transparent rounded-md cursor-pointer text-white border-white border-[1.2px]"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" className="text-slate-700">
                -- Select category
              </option>
              {ProfessionsData.map((profession, index) => (
                <option value={profession.category} key={index}>
                  {profession.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="py-2">
          <Label htmlFor="profession" className="text-white">
            Profession
          </Label>

          <div className="py-1">
            <select
              id="profession"
              name="profession"
              className="py-2 px-4 outline-none w-full bg-transparent rounded-md cursor-pointer text-white border-white border-[1.2px]"
              onChange={handleInputChange}
            >
              <option value="" className="text-slate-700">
                {category === ""
                  ? "Please select a category first"
                  : "-- Select profession"}
              </option>
              {ProfessionsData.filter(
                (profession) => profession.category === category
              ).map((profession) =>
                profession.roles.map((role, index) => (
                  <option value={role.role} key={index}>
                    {role.role}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="py-2">
        {category === "Software Developer" && (
          <>
            <div className="py-2">
              <h3 className="text-white text-lg font-light">
                Programming Languages ?
              </h3>

              <div className="py-3 flex gap-3 flex-wrap max-h-32 overflow-auto">
                {ProfessionsData.filter(
                  (profession) => profession.category === category
                ).map((profession) =>
                  profession.data.map((data) =>
                    data.programmingLanguages.map((language, index) => (
                      <LanguagesComponent
                        key={index}
                        language={language}
                        selectedLanguages={selectedLanguages}
                        handleClick={handleClick}
                        type={"language"}
                      />
                    ))
                  )
                )}
              </div>
            </div>

            <div className="py-2">
              <h3 className="text-white text-lg font-light">
                Programming Frameworks ?
              </h3>

              <div className="py-3 flex gap-3 flex-wrap max-h-32 overflow-auto">
                {ProfessionsData.filter(
                  (profession) => profession.category === category
                ).map((profession) =>
                  profession.data.map((data) =>
                    data.frameworks.map((framework, index) => (
                      <LanguagesComponent
                        key={index}
                        language={framework}
                        selectedLanguages={selectedFrameworks}
                        handleClick={handleClick}
                        type={"framework"}
                      />
                    ))
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="py-2 w-3/5">
        <Label htmlFor="bio" className="text-white">
          Bio
        </Label>

        <div className="py-1">
          <Textarea
            className="w-full bg-transparent text-slate-50 py-4 focus:border-[#0c7199] focus:border-[1.2px]"
            placeholder="write a little about yourself"
          />
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

export default PortfolioInfo;
