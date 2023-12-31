"use client";

import ButtonCustom from "@/components/ButtonCustom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader1 from "@/components/Loader1";
import { Input } from "@/components/ui/input";
import { API } from "@/config/api";
import { useAppContext } from "@/context/AppContext";
import { UpdateLocalStorage } from "@/context/UserLocalStorage";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const userId = useSearchParams().get("user");
  const AppState = useAppContext();

  if (!userId) router.push("/signin");

  useEffect(() => {
    // setInterval(() => {
    //   if (counter > 0) setCounter(counter - 1);
    // }, 1000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading((prev) => !prev);

    try {
      const res = await API.post("/verification/", { user: userId, code });

      if (res.status === 200) {
        UpdateLocalStorage(userId);
        AppState?.setAppState({ ...AppState?.appState, isLoggedIn: true });

        toast.success("Logged In successfully");
        router.push("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading((prev) => !prev);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="lg:py-12 py-12">
          <div className="flex">
            <div className="m-auto lg:w-3/5 w-full">
              <div className="py-8 lg:px-12 px-4">
                <h3 className="text-center text-xl font-bold text-white">
                  Enter 4 digit verification code
                </h3>

                <div className="py-3 flex justify-center items-center flex-col">
                  {/* signup with email form */}
                  <div className={`py-2 w-[350px]`}>
                    <form onSubmit={handleSubmit}>
                      <div className="py-2 relative">
                        <Input
                          placeholder="_ _ _ _"
                          className="w-full py-4 border-[1px] border-slate-300 bg-transparent text-white"
                          name="code"
                          maxLength={4}
                          onChange={(e) => setCode(e.target.value)}
                        />

                        {isLoading && (
                          <div className="absolute top-4 -right-14">
                            <Loader1 />
                          </div>
                        )}
                      </div>

                      <div className="flex justify-center hidden">
                        <ButtonCustom
                          text={"Sign In"}
                          type={"submit"}
                          variant={
                            "py-4 px-6 bg-white rounded-md my-1 cursor-pointer text-black "
                          }
                        />
                      </div>
                    </form>
                  </div>

                  <div className="py-1">
                    <p className="text-center text-white">
                      Didn't get code{" "}
                      <span className="primary-color font-bold">
                        {counter > 0 ? (
                          `resend code ${counter}`
                        ) : (
                          <Link href={"/signup"}>Resend code</Link>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //spacer */}
        <div className="lg:py-12 py-24"></div>
      </main>
      <Footer />
    </>
  );
};

export default VerifyCode;
