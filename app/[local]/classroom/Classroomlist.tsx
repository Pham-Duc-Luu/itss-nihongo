import { supabase } from "@/supabase.client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";

const Classroomlist = () => {
  const [listofClass, setlistofClass] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newClassroom, setNewClassroom] = useState<{
    id: string;
    name: string;
    description: string;
  }>();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("classroom").select("*");
      console.log(data);

      data && data.length > 0 && setlistofClass(data);
    };
    fetchData();
  }, []);

  const CreateNewClass = async (onClose) => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (
      newClassroom?.id &&
      newClassroom?.description &&
      newClassroom?.name &&
      user
    ) {
      const new_class = await supabase
        .from("classroom")
        .insert({ ...newClassroom });

      if (!new_class.error) {
        const a = await supabase
          .from("teacher_in_classroom")
          .insert({ teacher_id: user.id, classroom_id: newClassroom.id });

        if (a.error) {
          console.log(a);
        } else {
          onClose();
        }
      } else {
        console.log(new_class);
      }
    }
  };
  return (
    <div className=" w-full grid grid-cols-4 gap-6 p-6 relative">
      {listofClass?.map((item, index) => {
        return (
          <div className=" ">
            <Card>
              <CardHeader className=" flex justify-center items-center gap-4">
                <Avatar isBordered radius="full" className=" " />
                <div className=" flex flex-col ">
                  <h1 className=" text-lg font-bold">{item?.name}</h1>
                  <p>{item?.id}</p>
                </div>
              </CardHeader>
              <CardBody>
                <span>{item?.description} </span>
              </CardBody>
            </Card>
          </div>
        );
      })}
      <Button isIconOnly className=" fixed bottom-4 right-4" onPress={onOpen}>
        <IoMdAdd />
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                新しいクラスを作成する
              </ModalHeader>
              <ModalBody>
                <Input
                  variant="bordered"
                  placeholder="id"
                  value={newClassroom?.id}
                  onChange={(e) =>
                    setNewClassroom({ ...newClassroom, id: e.target.value })
                  }
                />

                <Input
                  variant="bordered"
                  placeholder="name"
                  value={newClassroom?.name}
                  onChange={(e) =>
                    setNewClassroom({ ...newClassroom, name: e.target.value })
                  }
                />
                <Input
                  variant="bordered"
                  placeholder="description"
                  value={newClassroom?.description}
                  onChange={(e) =>
                    setNewClassroom({
                      ...newClassroom,
                      description: e.target.value,
                    })
                  }
                />
              </ModalBody>
              <ModalFooter>
                {/* <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                ></Button> */}
                <Button
                  color="primary"
                  onPress={() => {
                    CreateNewClass(onclose);
                    onClose();
                  }}
                ></Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Classroomlist;
