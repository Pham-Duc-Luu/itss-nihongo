"use client";

import { Database } from "@/database.types";
import supabase from "@/supabase.client";
import { useEffect, useState } from "react";

export default function Home<T>() {
  const [user, setuser] = useState();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      console.log("start");

      const { data, error } = await supabase.from("User").select();
      const result = await supabase.from("classroom").select();
      console.log(data);

      console.log(error);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(user);

  return <div onClick={getUser}>neee</div>;
}
