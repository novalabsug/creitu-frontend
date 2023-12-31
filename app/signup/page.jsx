"use client";

import ButtonCustom from "@/components/ButtonCustom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loader1 from "@/components/Loader1";
import { Input } from "@/components/ui/input";
import { API } from "@/config/api";
import { useAppContext } from "@/context/AppContext";
import { SetLocalStorage } from "@/context/UserLocalStorage";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RiGoogleLine } from "react-icons/ri";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const AppState = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading((prev) => !prev);

    if (!email || email == "") {
      toast.error("Email is required");
      setIsLoading((prev) => !prev);
      return;
    }

    try {
      let res = await API.post("/auth/register", { email });

      const stateData = {
        user: {
          id: res.data.data?._id,
          email: res.data?.data?.email,
          username: res.data?.data?.username,
          image: res?.data?.image && res?.data?.image,
        },
        loggedIn: new Date(),
        isLoggedIn: false,
      };

      SetLocalStorage(stateData);
      AppState?.setAppState(stateData);

      if (res.status == 200)
        res = await API.post("/verification/new", { user: res.data.data?._id });

      if (res.status == 200) {
        toast.success("Enter verification code");
        router.push(`/verify-code?user=${res.data.data?.user}`);
      }
    } catch (error) {
      console.log({ error });
      // console.log({ error });
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
              <div className="py-4 lg:px-12 px-4">
                <h3 className="text-center text-2xl font-bold text-white">
                  SignUp to Creitu
                </h3>

                <div className="py-6 flex justify-center items-center flex-col">
                  {/* signup with email form */}
                  <div className={`py-2 w-[350px]`}>
                    <form onSubmit={handleSubmit}>
                      <div className="py-2 relative">
                        <Input
                          placeholder="Enter your email to register"
                          className="w-full py-4 border-[1px] border-slate-300 bg-transparent text-white"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
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
                      Or have an account{" "}
                      <span className="primary-color font-bold">
                        <Link href={"/signin"}>Sign In</Link>
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

export default SignUp;
