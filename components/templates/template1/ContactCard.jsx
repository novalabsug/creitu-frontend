import React, { useState } from "react";

const ContactCard = ({ contact }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 bg-slate-100 rounded-lg border-l-4 border-l-cyan-600 w-[300px] ${
        isHovered && "bg-cyan-600 border-l-slate-100"
      }`}
      onMouseOver={() => setIsHovered((prev) => !prev)}
      onMouseOut={() => setIsHovered((prev) => !prev)}
    >
      <div className="py-4"></div>

      <div className="py-1">{contact.icon}</div>

      <div className="">
        <h3 className={`font-light text-lg ${isHovered && "text-slate-100"}`}>
          {contact.text}
        </h3>
      </div>
    </div>
  );
};

export default ContactCard;
