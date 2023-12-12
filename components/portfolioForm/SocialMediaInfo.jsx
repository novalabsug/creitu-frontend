import { SocialMediaArr } from "@/constants/constant";
import React, { useState } from "react";
import { Input } from "../ui/input";
import SocialMediaAccount from "./SocialMediaAccount";

const SocialMediaInfo = () => {
  const IterateArray = [];

  const [selectedSocialMedias, setSelectedSocialMedia] = useState([]);

  for (let i = 0; i <= selectedSocialMedias.length; i++) {
    IterateArray.push(i);
  }

  const handleInputChange = (name) => {
    if (!name || name === "" || typeof name !== "string") return;

    const accountExists = selectedSocialMedias.includes(name);

    if (accountExists) return;

    const NewSocialMediaAccounts = [...selectedSocialMedias, name];

    setSelectedSocialMedia(NewSocialMediaAccounts);
  };

  return (
    <div>
      {IterateArray.length > 0 &&
        IterateArray.map((value) => (
          <SocialMediaAccount
            selectedSocialMediaAccounts={selectedSocialMedias}
            handleNameChange={handleInputChange}
            index={value}
            key={value}
          />
        ))}
    </div>
  );
};

export default SocialMediaInfo;
