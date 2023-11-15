import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="py-10 px-6 lg:px-10">
      <div className="flex justify-between">
        <div className="p-2">
          <Link href={"/"}>
            <h2 className="text-lg font-bold uppercase text-white">creitu</h2>
          </Link>
        </div>

        <div className="py-2 px-2 flex">
          <div className="px-8 py-2 lg:block sm:block hidden">
            <div className="flex gap-6">
              <Link href={"/"}>
                <h3 className=" text-white">Home</h3>
              </Link>

              <Link href={"/about"}>
                <h3 className=" text-white">About</h3>
              </Link>
            </div>
          </div>

          <div className="">
            <Link href={"/signin"}>
              <Button
                className={
                  "bg-white text-black hover:bg-gray-200 text-md font-light"
                }
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
