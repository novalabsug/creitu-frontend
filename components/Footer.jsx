import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <p className="text-center text-white">
          {new Date().getFullYear()} &copy; copyright.{" "}
          <span className="primary-color font-bold">creitu</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
