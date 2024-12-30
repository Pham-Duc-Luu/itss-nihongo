"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { FiSend } from "react-icons/fi";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { IoPersonAddOutline } from "react-icons/io5";

const TeamPostContent = ({ classroom, count }) => {
  useEffect(() => {
    if (classroom) {
      console.log(classroom);

      const fetchPosts = async (classroomId: string) => {
        const { data, error } = await supabase
          .from("post")
          .select("id, content, time, sender:sender_id(id, name), classroom_id")
          .eq("classroom_id", classroomId);

        console.log(data);
        data && setPosts(data);
      };

      classroom.id && fetchPosts(classroom.id);
    }
  }, [classroom, count]);

  const [posts, setPosts] = useState([]);

  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <div className=" flex  items-start w-full gap-4 p-2 flex-1">
            <div>
              <Avatar
                size="md"
                name={post?.sender?.name?.toUpperCase()}
              ></Avatar>
            </div>
            <Card radius="sm" className=" min-w-[600px]">
              <div className="m-2">
                <span className=" font-bold mr-2">{post?.sender?.name}</span>
                <span>
                  {new Date(post?.time).getMonth()} /{" "}
                  {new Date(post?.time).getDay()}
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
      })}
    </>
  );
};

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
const ClassroomContent = ({ classroom }) => {
  const [isExistClass, setisExistClass] = useState(false);
  useEffect(() => {
    console.log(classroom);

    if (window.localStorage.getItem("classroom")) {
      const classroom = JSON.parse(window.localStorage.getItem("classroom"));
      classroom?.name && setname(classroom.name);
      setisExistClass(true);
    } else {
      setisExistClass(false);
    }
  }, [classroom]);

  const [name, setname] = useState("");
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (window?.localStorage.getItem("user")) {
      setUser(JSON.parse(window?.localStorage.getItem("user")));
    }
  }, []);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [addEmail, setAddEmail] = useState();
  if (!isExistClass) {
    return;
  }
  return (
    <div className=" flex-1 relative">
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
              <Avatar size="md" radius="lg" name={classroom?.name[0]}></Avatar>
              <span className=" font-bold">{classroom?.name}</span>
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
            <Dropdown>
              <DropdownTrigger>
                <Button variant="ghost" isIconOnly>
                  <HiOutlineDotsHorizontal />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  onClick={onOpen}
                  startContent={<IoPersonAddOutline />}
                  key="new"
                >
                  生徒を追加
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

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
      <TeamPostContent count={count} classroom={classroom}></TeamPostContent>
      <Input
        endContent={
          <FiSend
            onClick={() => {
              console.log({ message, classroom, user });
              if (message && classroom.id && user.id) {
                supabase
                  .from("post")
                  .insert({
                    content: message,
                    sender_id: user.id,
                    classroom_id: classroom.id,
                  })
                  .then(() => {
                    setMessage("");
                    setCount(count + 1);
                  });
              }
            }}
          />
        }
        variant="bordered"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" absolute bottom-4 p-6"
      ></Input>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                生徒を追加
              </ModalHeader>
              <ModalBody>
                <Input
                  value={addEmail}
                  onChange={(e) => setAddEmail(e.target.value)}
                  placeholder="email"
                ></Input>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={async () => {
                    const result = await supabase
                      .from("User")
                      .select("*")
                      .eq("email", addEmail);
                    console.log(result);

                    if (result.data?.length === 0) {
                      window.alert("email not found");
                    } else if (result.error) {
                      window.alert(result.error);
                    } else {
                      const addNewStudent = await supabase
                        .from("student_in_classroom")
                        .insert({
                          classroom_id: classroom.id,
                          student_id: result.data[0].id,
                        });

                      if (addNewStudent.error) {
                        console.log(addNewStudent);

                        window.alert(addNewStudent.error);
                      }
                    }
                  }}
                >
                  追加
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ClassroomContent;
