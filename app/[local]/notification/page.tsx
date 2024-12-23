"use client";

import {
  Input,
  Button,
  Select,
  SelectItem,
  Card,
  Avatar,
  Badge,
  CardBody,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FiSettings } from "react-icons/fi";
import { useState, useEffect } from "react";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  type: "info" | "warning" | "error" | "success";
}

export default function NotificationsPage() {
  // Mock dữ liệu thông báo
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  useEffect(() => {
    const mockNotifications: Notification[] = [
      {
        id: 1,
        title: "Cập nhật hệ thống",
        description: "Hệ thống sẽ được nâng cấp vào cuối tuần này.",
        time: "2 giờ trước",
        isRead: false,
        type: "info",
      },
      {
        id: 2,
        title: "Thông báo bảo trì",
        description: "Dịch vụ sẽ bị gián đoạn từ 1:00 AM đến 3:00 AM.",
        time: "5 giờ trước",
        isRead: true,
        type: "warning",
      },
      {
        id: 3,
        title: "Chào mừng thành viên mới",
        description: "Chúng tôi chào mừng bạn đến với cộng đồng!",
        time: "1 ngày trước",
        isRead: false,
        type: "success",
      },
      {
        id: 4,
        title: "Lỗi hệ thống",
        description: "Đã xảy ra lỗi trong quá trình xử lý yêu cầu của bạn.",
        time: "3 ngày trước",
        isRead: true,
        type: "error",
      },
      // Thêm các thông báo khác nếu cần
    ];

    setNotifications(mockNotifications);
  }, []);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };


  return (
    <div className="flex w-full p-5 gap-5">
      <main className="w-1/4">
        <Card className="p-6 shadow-md">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
              <Select
                  value={filter}
                  variant="underlined"
                  placeholder="通知"
                  className="w-32"
              >
                <SelectItem key="all" value="all">全部</SelectItem>
                <SelectItem key="unread" value="unread">読んでいない</SelectItem>
                <SelectItem key="read" value="read">読んだ</SelectItem>
              </Select>
            <Dropdown className="right-auto" placement="bottom-end">
              <DropdownTrigger>
                <Button
                    isIconOnly={true}
                    variant={"light"}
                >
                    <FiSettings />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="mark" onClick={markAllAsRead}>
                  すべてマーク
                </DropdownItem>
                <DropdownItem key="settings">
                  通知設定
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="space-y-4">
          {notifications
              .filter((notif) => {
                if (filter === "all") return true;
                if (filter === "unread") return !notif.isRead;
                if (filter === "read") return notif.isRead;
              })
              .map((notification) => (
                <Card
                  key={notification.id}
                  isHoverable
                  isPressable
                  onPress={() => !notification.isRead && markAsRead(notification.id)}
                  className={`${
                      !notification.isRead ? "bg-gray-50 cursor-pointer" : "bg-white"
                  }  flex items-center p-4 relative`}
                >
                  <CardBody className="flex items-start">
                    <div className="mr-3">
                      {!notification.isRead && (
                          <div
                              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black"
                        ></div>
                        )}
                    </div>
                    <Avatar
                        color={"default"}
                        size="lg"
                        className="mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div
                            className={`${
                                !notification.isRead ? "font-semibold" : "font-normal"
                            }`}
                        >
                          {notification.title}
                        </div>
                        {!notification.isRead && (
                            <Badge color="primary" variant="faded">
                              新
                            </Badge>
                        )}
                      </div>
                      <div className="text-gray-600">
                        {notification.description}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-gray-500">{notification.time}</div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
