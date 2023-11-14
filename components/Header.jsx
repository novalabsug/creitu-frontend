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

        <div className="py-2 px-2">
          <div className="">
            <Link href={"/signin"}>
              <Button
                className={
                  "bg-white text-black hover:bg-gray-200 text-md bg-primary"
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
