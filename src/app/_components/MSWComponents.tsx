"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    // 브라우저에서만 돌아간다는 조건문
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};
