import { X } from "lucide-react";
import React from "react";

const LanguagesComponent = ({
  language,
  selectedLanguages,
  handleClick,
  type,
}) => {
  return (
    <div
      className={`py-2 px-3 border-[1.2px] cursor-pointer rounded flex gap-3 w-fit ${
        selectedLanguages.includes(language) && "border-[#0c7199]"
      }`}
      onClick={() => handleClick(type, language)}
    >
      <p className="text-white text-sm">{language}</p>

      {selectedLanguages.includes(language) && (
        <X size={20} className="text-white" />
      )}
    </div>
  );
};

export default LanguagesComponent;
