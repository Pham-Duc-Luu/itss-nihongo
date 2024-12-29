"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import TeamSideBar from "@/components/TeamSideBar";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import NotificationsPage from "./notification";
import Classroomlist from "./Classroomlist";
import ClassroomContent from "./page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [displaySideBar, setDisplaySideBar] = useState();
  // useEffect(() => {
  //   console.log({ displaySideBar });

  //   setDisplaySideBar(window.localStorage.getItem("display sidebar"));
  // });

  const [classroom, setClassroom] = useState();
  return (
    <div className=" h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex flex-1 h-full">
        <Sidebar setDisplaySideBar={setDisplaySideBar}></Sidebar>
        {displaySideBar === "teams" ? (
          <Classroomlist></Classroomlist>
        ) : displaySideBar === "notification" ? (
          <>
            <NotificationsPage setClassroom={setClassroom}></NotificationsPage>
            <ClassroomContent classroom={classroom}></ClassroomContent>
          </>
        ) : (
          <>
            <TeamSideBar setClassroom={setClassroom}></TeamSideBar>
            <ClassroomContent classroom={classroom}></ClassroomContent>
          </>
        )}
      </div>
    </div>
  );
}
