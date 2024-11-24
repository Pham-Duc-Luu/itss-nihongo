"use client";
import { useRouter } from "@/i18n/routing";
import React, { useEffect } from "react";

const page = () => {
  const route = useRouter();
  useEffect(() => {
    route.push("/auth/sign-in");
  }, []);
  return <div>page</div>;
};

export default page;
