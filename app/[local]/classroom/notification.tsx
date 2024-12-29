"use client";

import * as _ from "lodash";

import { supabase } from "@/supabase.client";
import {
  Input,
  Button,
  Select,
  SelectItem,
  Card,
  Avatar,
  Badge,
  CardBody,
  Divider,
  CardHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { useState, useEffect, useMemo } from "react";
import { IoFilter } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
interface Notification {
  id: string;
  content: string;
  sender: string;
  time: string;
  classroom: any;
  User: any;
  isRead: boolean;
}

export default function NotificationsPage({ setClassroom }) {
  // Mock dữ liệu thông báo
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const [readPosts, setReadPosts] = useState(new Set([20336965]));

  const [resetPostIn, setresetPostIn] = useState(1000000);
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["10 seconds"])
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));

    const fetchClassrooms = async () => {
      const { data, error } = await supabase
        .from("student_in_classroom")
        .select("classroom:classroom_id(id, name)")
        .eq("student_id", user.id);

      console.log(data);
      if (data && data.length > 0) {
        const getPosts = await Promise.all(
          data.map(async (item) => {
            const result = await supabase
              .from("post")
              .select(
                "id ,content, time , User:sender_id(*) ,classroom:classroom_id(*)"
              )
              .eq("classroom_id", item.classroom.id);

            return result.data;
          })
        );

        console.log("getPosts ");
        console.log();
        setNotifications(_.flatten(getPosts));
      }
    };

    fetchClassrooms();
  }, []);

  useEffect(() => {
    const listOfReadPost = ["20341921"];
    window?.localStorage.setItem("readed list", JSON.stringify(listOfReadPost));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const listOfUnread: Notification[] = [];
      notifications.forEach((notification) => {
        if (!readPosts.has(notification.id)) {
          listOfUnread.push(notification);
        }
      });
      console.log(notifications);

      setNotifications([...listOfUnread, ...notifications]);
    }, resetPostIn);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [notifications, resetPostIn]); // Empty dependency array ensures this runs once on mount

  console.log(notifications);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className=" bg-zinc-200   w-72  flex flex-col overflow-y-scroll">
      <div className=" flex justify-between h-12">
        <IoFilter size={30} />
        <Button isIconOnly radius="full" className="" onPress={onOpen}>
          <CiSettings size={20} />
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div>
                    {" "}
                    notification me every
                    <Dropdown>
                      <DropdownTrigger>
                        <Button className="capitalize" variant="bordered">
                          {selectedValue}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        disallowEmptySelection
                        aria-label="Single selection example"
                        selectedKeys={selectedKeys}
                        selectionMode="single"
                        variant="flat"
                        onSelectionChange={setSelectedKeys}
                      >
                        <DropdownItem
                          key="10 seconds"
                          onClick={() => setresetPostIn(1000 * 10)}
                        >
                          10 seconds
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => setresetPostIn(1000 * 60 * 5)}
                          key="5 minute"
                        >
                          5 minute
                        </DropdownItem>
                        <DropdownItem
                          key="1 hours"
                          onClick={() => setresetPostIn(1000 * 3600)}
                        >
                          1 hours{" "}
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => setresetPostIn(1000 * 3600)}
                          key="12 hours"
                        >
                          12 hours
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => setresetPostIn(1000 * 3600)}
                          key="never"
                        >
                          never
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <Divider></Divider>
      {notifications.map((item) => {
        return (
          <div
            onClick={() => {
              setReadPosts(readPosts.add(item.id));

              setClassroom(item.classroom);
            }}
          >
            <Card
              radius="none"
              className={`shadow-none ${
                !readPosts.has(item.id) && "bg-slate-200"
              }`}
            >
              <CardHeader className=" flex justify-start items-center">
                <Avatar></Avatar>
                <div className=" flex flex-col ">
                  <h1 className=" font-bold">{item?.User?.name}</h1>
                  <p className=" text-sm font-light">
                    {" "}
                    {item?.classroom?.name}
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <div className=" truncate"> {item.content}</div>
              </CardBody>
            </Card>
            <Divider></Divider>
          </div>
        );
      })}
    </div>
  );
}
