"use client";
import Template1 from "@/components/templates/template1/Template1";
import Template2 from "@/components/templates/template2/Template2";
import Template3 from "@/components/templates/template3/Template3";
import { useRouter } from "next/navigation";

import React from "react";

const TemplatePage = ({ params }) => {
  const router = useRouter();

  const templateId = params?.id;

  if (!templateId || templateId === "") router.push("/");

  return (
    <main>
      {templateId === "template1" ? (
        <Template1 />
      ) : templateId === "template2" ? (
        <Template2 />
      ) : templateId === "template3" ? (
        <Template3 />
      ) : (
        router.push("/")
      )}
    </main>
  );
};

export default TemplatePage;
