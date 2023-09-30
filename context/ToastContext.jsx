"use client";

import { Toaster } from "react-hot-toast";

const ToastContext = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
export default ToastContext;
