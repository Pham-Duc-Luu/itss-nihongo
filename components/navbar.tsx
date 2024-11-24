import { Input } from "@nextui-org/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex px-48 justify-center items-center bg-emerald-300 border-b-1 border-zinc-400">
      <MdNavigateBefore size={20} />
      <MdNavigateNext size={20} />
      <Input
        color="success"
        className=" m-4"
        startContent={<CiSearch />}
        size="sm"
      />
    </div>
  );
};

export default Navbar;
