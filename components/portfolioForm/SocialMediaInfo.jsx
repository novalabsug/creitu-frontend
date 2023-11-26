import { SocialMediaArr } from "@/constants/constant";
import React, { useState } from "react";
import { Input } from "../ui/input";

const SocialMediaInfo = () => {
  const [SocialMediaAccounts, setSocialMediaAccounts] = useState([]);

  const IterateArray = [];

  for (let i = 0; i <= SocialMediaAccounts.length; i++) {
    IterateArray.push(i);
  }

  const handleInputChange = (name) => {
    if (!name || name === "" || typeof name !== "string") return;

    const accountExists = SocialMediaAccounts.includes(name);

    if (accountExists) return;

    const NewSocialMediaAccounts = [...SocialMediaAccounts, name];

    setSocialMediaAccounts(NewSocialMediaAccounts);
  };

  return (
    <div>
      {IterateArray.length > 0 &&
        IterateArray.map((value) => (
          <div className="flex gap-4 py-2">
            <div className="w-[30%]">
              <select
                id="socialMediaAccount"
                name="socialMediaAccount"
                className="py-2 px-4 outline-none w-full bg-transparent rounded-md cursor-pointer text-white border-white border-[1.2px]"
                key={value}
                onChange={(e) => handleInputChange(e.target.value)}
              >
                <option value="" className="text-slate-700">
                  -- Select profession
                </option>
                {SocialMediaArr.map((socialMedia, index) => (
                  <option
                    value={socialMedia.name}
                    key={index}
                    disabled={SocialMediaAccounts.includes(socialMedia.name)}
                  >
                    {socialMedia.icon} {socialMedia.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-3/5">
              <Input
                type="text"
                placeholder="url"
                id="url"
                name="url"
                className="py-2 px-4 outline-none w-full bg-transparent rounded-md cursor-pointer text-white border-white border-[1.2px]"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SocialMediaInfo;
