import React from "react";

const UiCard1 = ({ title, subTitle, content }) => {
  return (
    <div className="p-4 my-4 border-slate-700 border-[0.5px] rounded-lg hover:border-slate-400 cursor-pointer">
      <div className="py-1">
        <h2 className={`text-sm primary-color`}>{subTitle}</h2>

        <h3 className="font-semibold text-lg text-slate-300">{title}</h3>
      </div>

      <div className="py-1">
        <p className="text-sm text-white">{content}</p>
      </div>
    </div>
  );
};

export default UiCard1;
