"use client";
import { Accordion, AccordionItem, Avatar, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { IoFilter, IoPersonAddSharp } from "react-icons/io5";
import { Divider } from "@nextui-org/divider";
import { CiSettings } from "react-icons/ci";
const TeamSideBar = () => {
  const [TeamSideBarOptions, setTeamSideBarOptions] = useState([
    {
      option: "Pinned",
      teams: [
        { titel: "Hust-itss-1", groups: ["group 1", "group 2", "group 2"] },
      ],
    },
    {
      option: "Your teams",
      teams: [
        { titel: "Hust-itss-1", groups: ["group 1", "group 2", "group 2"] },
        { titel: "Hust-itss-2", groups: ["group 1", "group 2", "group 2"] },
        { titel: "Hust-itss-2", groups: ["group 1", "group 2", "group 2"] },
      ],
    },
  ]);
  return (
    <div className=" bg-zinc-200  w-72  flex flex-col">
      <div className=" flex justify-between h-12 ">
        <span>Teams</span>
        <IoFilter size={30} />
      </div>
      <Divider></Divider>
      <div className=" flex-1">
        <Accordion>
          {TeamSideBarOptions.map((item, index) => {
            return (
              <AccordionItem key={index} title={item.option} className=" p-1">
                {item.teams.map((team) => {
                  return (
                    <div className=" flex flex-col mb-2">
                      <div className=" m-2 flex justify-start gap-2 items-center">
                        <Avatar
                          size="md"
                          radius="lg"
                          name={team.titel[0].toUpperCase()}
                        ></Avatar>
                        <span className=" text-lg">{team.titel}</span>
                      </div>
                      {team.groups.map((group) => {
                        return (
                          <Button
                            variant="light"
                            className=" justify-start pl-14"
                          >
                            <span>{group}</span>
                          </Button>
                        );
                      })}
                    </div>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="">
        <Divider></Divider>
        <div className=" flex justify-between items-center">
          <Button variant="flat" startContent={<IoPersonAddSharp />}>
            Class
          </Button>
          <Button variant="flat" isIconOnly>
            <CiSettings />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamSideBar;
