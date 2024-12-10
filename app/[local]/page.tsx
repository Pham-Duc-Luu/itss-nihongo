"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useRouter } from "@/i18n/routing";
import React, { useEffect } from "react";

const page = () => {
  const route = useRouter();
  // useEffect(() => {
  //   route.push("/auth/sign-in");
  // }, []);
  return (
    <div>
      <ThemeSwitcher></ThemeSwitcher>
    </div>
  );
};

export default page;
