"use client";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import TeamSideBar from "@/components/TeamSideBar";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import NotificationsPage from "./notification";
import Classroomlist from "./Classroomlist";
import ClassroomContent from "./page";
import UserProfilePage from "../profile/page";
import UserProfileSearch from "../profile/UserProfileSearch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [displaySideBar, setDisplaySideBar] = useState<
    "notification" | "message" | "my teams"
  >("my teams");

  const [isDisPlaySidebar, setisDisPlaySidebar] = useState(true);
  const [userProfile, setuserProfile] = useState();
  const [displayContent, setDisplayContent] = useState<
    "profile" | "classroom" | "teams" | "user profile"
  >("classroom");
  const [classroom, setClassroom] = useState();
  return (
    <div className=" h-screen flex flex-col">
      <Navbar
        setuserProfile={setuserProfile}
        setDisplaySideBar={setDisplaySideBar}
        setisDisPlaySidebar={setisDisPlaySidebar}
        setDisplayContent={setDisplayContent}
      ></Navbar>
      <div className="flex flex-1 h-full">
        <Sidebar
          setDisplaySideBar={setDisplaySideBar}
          setisDisPlaySidebar={setisDisPlaySidebar}
          setDisplayContent={setDisplayContent}
        ></Sidebar>

        {displayContent === "teams" && <Classroomlist></Classroomlist>}

        {displaySideBar === "notification" && isDisPlaySidebar && (
          <>
            <NotificationsPage setClassroom={setClassroom}></NotificationsPage>
          </>
        )}

        {displaySideBar === "my teams" && isDisPlaySidebar && (
          <>
            <TeamSideBar setClassroom={setClassroom}></TeamSideBar>
          </>
        )}

        {displayContent === "classroom" && (
          <ClassroomContent classroom={classroom}></ClassroomContent>
        )}

        {displayContent === "user profile" && (
          <UserProfileSearch profile={userProfile}></UserProfileSearch>
        )}
        {displayContent === "profile" && <UserProfilePage></UserProfilePage>}
      </div>
    </div>
  );
}
