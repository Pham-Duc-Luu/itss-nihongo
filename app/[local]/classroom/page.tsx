"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { IoIosAddCircleOutline, IoIosVideocam } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CgMailReply, CgPushChevronRightR } from "react-icons/cg";
import { supabase } from "@/supabase.client";

const PostReplyContent = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <>
      <Divider></Divider>
      <Card className="" radius="sm" shadow="none">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Zoey Lang
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                11/11
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400 mb-2">
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure! Frontend developer and UI/UX enthusiast. Join me on this
          coding adventure! Frontend developer and UI/UX enthusiast. Join me on
          this coding adventure! Frontend developer and UI/UX enthusiast. Join
          me on this coding adventure!
        </CardBody>
      </Card>
    </>
  );
};
const TeamPostContent = () => {
  useEffect(() => {
    if (window.localStorage.getItem("classroom")) {
      const classroom = JSON.parse(window.localStorage.getItem("classroom"));

      const fetchPosts = async (classroomId: string) => {
        const { data, error } = await supabase
          .from("post")
          .select("id, content, time, sender:sender_id(id, name), classroom_id")
          .eq("classroom_id", classroomId);

        console.log(data);
        data && setPost(data[0]);
      };

      classroom.id && fetchPosts(classroom.id);
    }
  }, [window.localStorage.getItem("classroom")]);
  const [post, setPost] = useState({
    sender: {
      id: 200500388,
      name: "Nguyen Thi Thu Huong",
    },
    classroom_id: 140656,
    content:
      "Moi nguoi nho chuan bi tot cho buoi thao luan nhom vao chieu thu 3.",
    id: 20355745,

    time: "2024-12-05T15:00:00",
  });
  return (
    <div className=" flex  items-start w-full gap-4 p-2 flex-1">
      <div>
        <Avatar size="md" name={post?.sender?.name?.toUpperCase()}></Avatar>
      </div>
      <Card radius="sm">
        <div className="m-2">
          <span className=" font-bold mr-2">{post?.sender?.name}</span>
          <span>
            {new Date(post?.time).getMonth()} / {new Date(post?.time).getDay()}
          </span>
        </div>
        <CardBody>{post?.content}</CardBody>
        {/* <PostReplyContent></PostReplyContent> */}
        <Divider></Divider>
        <CardFooter className=" flex">
          <CgMailReply />
          <span>reply</span>
        </CardFooter>
      </Card>
    </div>
  );
};
const page = () => {
  useEffect(() => {
    if (window.localStorage.getItem("classroom")) {
      const classroom = JSON.parse(window.localStorage.getItem("classroom"));
      classroom?.name && setname(classroom.name);
    }
  }, [window.localStorage.getItem("classroom")]);

  const [name, setname] = useState("namme");

  return (
    <div className=" flex-1">
      <Navbar
        position="static"
        className="h-12"
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}
      >
        <div className=" flex justify-center items-center gap-4">
          <NavbarBrand>
            <div className=" flex items-center ">
              <Avatar
                size="md"
                radius="lg"
                name={name[0].toUpperCase()}
              ></Avatar>
              <span className=" font-bold">{name}</span>
            </div>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarItem isActive>
              <span href="#">投稿</span>
            </NavbarItem>
            <NavbarItem>
              <span href="#" aria-current="page">
                ファイル
              </span>
            </NavbarItem>
            <NavbarItem>
              <IoIosAddCircleOutline />
            </NavbarItem>
          </NavbarContent>
        </div>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <ButtonGroup>
            <Button variant="ghost" isIconOnly>
              <HiOutlineDotsHorizontal />
            </Button>

            <Button variant="ghost" isIconOnly>
              <IoIosVideocam />
            </Button>
            <Button variant="ghost" isIconOnly>
              <CgPushChevronRightR />
            </Button>
          </ButtonGroup>
        </NavbarContent>
      </Navbar>
      <Divider></Divider>
      <TeamPostContent></TeamPostContent>
    </div>
  );
};

export default page;
