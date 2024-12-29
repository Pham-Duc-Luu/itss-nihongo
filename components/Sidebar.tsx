"use client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";
import { AiOutlineMessage, AiOutlineTeam } from "react-icons/ai";
import { CiBellOn, CiFileOn } from "react-icons/ci";

const Sidebar = ({ setDisplaySideBar }) => {
  const t = useTranslations("sidebar");
  const route = useRouter();
  return (
    <div className="bg-emerald-300 flex flex-col gap-4">
      <div
        className=" flex justify-center items-center flex-col"
        onClick={() => {
          setDisplaySideBar("notification");
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
          setDisplaySideBar("teams");
        }}
        className=" flex justify-center items-center flex-col"
      >
        <AiOutlineTeam size={30} /> <span>{t("teams.label")}</span>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <CiFileOn size={30} /> <span>{t("file.label")}</span>
      </div>
    </div>
  );
};

export default Sidebar;
