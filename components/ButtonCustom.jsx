import React from "react";
import { Button } from "./ui/button";

const ButtonCustom = ({ type, text, variant, icon }) => {
  return (
    <Button type={type} className={`${variant} py-2 px-3`}>
      {icon && icon}
      {text}
    </Button>
  );
};

export default ButtonCustom;
