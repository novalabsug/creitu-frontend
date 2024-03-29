import React, { useState } from "react";

const ContactCard = ({ contact }) => {
  return (
    <div className="p-4 bg-slate-100 rounded-lg border-l-4 border-l-cyan-600 w-[300px] hover:border-l-slate-100 hover:bg-cyan-600 group">
      <div className="lg:py-4 sm:py-3 py-2"></div>

      <div className="py-1 group-hover:text-white group-hover:text-2xl duration-100">
        {contact.icon}
      </div>

      <div className="">
        <h3 className="font-light lg:text-lg sm:text-lg text-base group-hover:text-white duration-100">
          {contact.text}
        </h3>
      </div>
    </div>
  );
};

export default ContactCard;
