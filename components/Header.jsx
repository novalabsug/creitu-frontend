"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { ChevronDown, LogOut, User } from "lucide-react";

const Header = () => {
  const AppState = useAppContext();

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

              <Link href={"/templates"}>
                <h3 className=" text-white">Templates</h3>
              </Link>

              <Link href={"/contact"}>
                <h3 className=" text-white">Contact</h3>
              </Link>
            </div>
          </div>

          <div className="">
            {AppState?.appState?.isLoggedIn ? (
              <Link href={"/logout"}>
                <Button
                  className={
                    "bg-white gap-2 text-black hover:bg-gray-200 text-md font-light"
                  }
                >
                  <LogOut size={20} />
                  Log Out
                </Button>
              </Link>
            ) : (
              <Link href={"/signin"}>
                <Button
                  className={
                    "bg-white text-black hover:bg-gray-200 text-md font-light"
                  }
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
