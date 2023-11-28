import { SocialMediaArr } from "@/constants/constant";
import React, { useState } from "react";
import { Input } from "../ui/input";

const SocialMediaAccount = ({
  index,
  selectedSocialMediaAccounts,
  handleNameChange,
}) => {
  const [socialMediaAccount, setSocialMediaAccount] = useState({
    name: "",
    link: "",
  });

  const handleInputChange = (e) => {
    setSocialMediaAccount({
      ...socialMediaAccount,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="flex gap-4 py-2"
      id="socialMediaElement"
      data-target={JSON.stringify(socialMediaAccount)}
    >
      <div className="w-1/5">
        <select
          id="socialMediaAccount"
          name="name"
          className="py-2 px-4 outline-none w-full bg-transparent rounded-md cursor-pointer text-white border-white border-[1.2px]"
          onChange={(e) => {
            handleInputChange(e);
            handleNameChange(e.target.value);
          }}
        >
          <option value="" className="text-slate-700">
            -- Select account
          </option>

          {SocialMediaArr.map((socialMedia, key) => (
            <option
              value={socialMedia.name}
              key={key}
              disabled={selectedSocialMediaAccounts.includes(socialMedia.name)}
            >
              {socialMedia.icon} {socialMedia.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-2/5">
        <Input
          type="url"
          placeholder="url"
          id="link"
          name="link"
          className="py-2 px-4 outline-none w-full bg-transparent rounded-md cursor-pointer text-white border-white border-[1.2px]"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};

export default SocialMediaAccount;
