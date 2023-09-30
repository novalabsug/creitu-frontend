import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <p className="text-center">
          {new Date().getFullYear()} &copy; copyright. creitu
        </p>
      </footer>
    </>
  );
};

export default Footer;
