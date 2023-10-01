"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { LucideLoader2 } from "lucide-react";

const Feedback = () => {
  const [formData, setFormData] = useState({ email: "", comment: "" });
  const [emailError, setEmailError] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading((prev) => (prev ? false : true));
    setEmailError(false);
    setCommentError(false);

    try {
      const res = await axios.post("/api/subscribe", { ...formData });

      if (res.status == 200) toast.success(res.data.response);
    } catch (error) {
      console.log({ error });

      if (
        error.response.data == "Please enter your email" ||
        error.response.data == "Please enter a valid email"
      )
        setEmailError((prev) => (prev ? false : true));

      toast.error(error.response.data || "Error occured");
    } finally {
      setFormData({ email: "", comment: "" });
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className="border-[1.8px] rounded-md border-slate-300 p-6"
        onSubmit={handleSubmit}
      >
        <div className="py-2">
          <Input
            placeholder="example@email.com"
            name="email"
            className={`${emailError && "border-red-600 border-[1.8px]"}`}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.email}
          />
        </div>

        <div className="py-2">
          <Textarea
            placeholder="Your thoughts. Optional"
            className={`${commentError && "border-red-600"}`}
            name="comment"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.comment}
          />
        </div>

        <div>
          <Button className="bg-primary" type={"submit"}>
            {isLoading && <LucideLoader2 size={25} />}
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Feedback;
