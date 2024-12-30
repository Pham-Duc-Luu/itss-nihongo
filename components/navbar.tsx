"use client";
import { Card, CardBody, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { supabase } from "@/supabase.client";
import { cn } from "@/lib/utils";
const Navbar = ({
  setisDisPlaySidebar,
  setuserProfile,
  setDisplaySideBar,
  setDisplayContent,
}) => {
  const [text, setText] = useState<string>();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const findUsers = async () => {
      let { data: users, error } = await supabase
        .from("User")
        .select("*")
        .ilike("email", `%${text}%`);

      users && users.length > 0 && users.length >= 4
        ? setUsers(users.slice(0, 4))
        : setUsers(users);
    };

    text && findUsers();
    console.log(text);
  }, [text]);

  return (
    <div className="flex px-48 justify-center py-4 items-center bg-emerald-300 border-b-1 border-zinc-400">
      <MdNavigateBefore size={20} />
      <MdNavigateNext size={20} />
      <div className=" relative w-full">
        <Input
          color="success"
          className=" "
          value={text}
          onChange={(e) => setText(e.target.value)}
          startContent={<CiSearch />}
          size="sm"
        ></Input>
        <div
          className={cn(
            " absolute top-0 w-full translate-y-14 z-10 shadow-md origin-top",
            users.length > 0 && text?.length > 0 ? " " : "hidden"
          )}
        >
          {users?.map((item) => {
            return (
              <Card
                className=" w-full shadow-none"
                isPressable={true}
                radius="none"
                onClick={() => {
                  setisDisPlaySidebar(false);
                  setDisplayContent("user profile");
                  setuserProfile(item);
                  setText("");
                }}
              >
                <CardBody>
                  <p>{item?.email}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
