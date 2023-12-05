"use client";

import { API } from "@/config/api";
import { useAppContext } from "@/context/AppContext";
import { SetLocalStorage } from "@/context/UserLocalStorage";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const LogOut = () => {
  const AppState = useAppContext();
  const router = useRouter();

  const defaultState = {
    user: {
      id: "",
      username: "",
      email: "",
      image: "",
    },
    loggedIn: "",
    isLoggedIn: false,
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await API.post("/auth/logout");

        SetLocalStorage(defaultState);

        AppState?.setAppState(defaultState);

        if (res.status == 200) {
          toast.success("Logged Out");
          router.push("/signin");
        }
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  return <div>Logging out ...</div>;
};

export default LogOut;
