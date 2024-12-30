"use client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import { AiOutlineMessage, AiOutlineTeam } from "react-icons/ai";
import { CiBellOn, CiFileOn, CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Sidebar = ({
  setDisplaySideBar,
  setisDisPlaySidebar,
  setDisplayContent,
}) => {
  const t = useTranslations("sidebar");
  const route = useRouter();
  return (
    <div className="bg-emerald-300 flex flex-col gap-4">
      <div
        className=" flex justify-center items-center flex-col"
        onClick={() => {
          setDisplaySideBar("notification");
          setDisplayContent("classroom");
          setisDisPlaySidebar(true);
        }}
      >
        <CiBellOn size={30} />
        <span>{t("notifications.label")}</span>
      </div>

      <div className=" flex justify-center items-center flex-col">
        <AiOutlineMessage size={30} />
        <span>{t("message.label")}</span>
      </div>
      <div
        onClick={() => {
          setDisplayContent("teams");
          setisDisPlaySidebar(false);
        }}
        className=" flex justify-center items-center flex-col"
      >
        <AiOutlineTeam size={30} /> <span>{t("teams.label")}</span>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <CiFileOn size={30} /> <span>{t("file.label")}</span>
      </div>
      <div
        className=" flex justify-center items-center flex-col"
        onClick={() => {
          setDisplayContent("profile");
          setisDisPlaySidebar(false);
        }}
      >
        <FaRegUser size={30} /> <span>{t("profile.label")}</span>
      </div>
      <div
        className=" flex justify-center items-center flex-col"
        onClick={() => {
          route.push("/auth/sign-in");
        }}
      >
        <CiLogout size={30} /> <span>{t("profile.label")}</span>
      </div>
    </div>
  );
};

export default Sidebar;
