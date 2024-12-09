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
} from "@nextui-org/react";
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
      <main className="flex-1">
        <Card className="p-6 shadow-md">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">Thông Báo</h2>
              <Badge color="primary" variant="faded">
                {notifications.filter((notif) => !notif.isRead).length} mới
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <Select
                label="Lọc"
                value={filter}
                placeholder="通知フィルタリング"
                className="w-40"
              >
                <SelectItem key="all">全部</SelectItem>
                <SelectItem key="unread">読んでいない</SelectItem>
                <SelectItem key="read">読んだ</SelectItem>
              </Select>
              <Button color="primary" onClick={markAllAsRead}>
                すべて既読としてマークする
              </Button>
            </div>
          </div>

          {/* Danh sách thông báo */}
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
                  //   variant={notification.isRead ?"" : "bordered"}
                  className={`${
                    !notification.isRead ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <CardBody className="flex items-start">
                    <Avatar
                      //   text={notification.title.charAt(0)}
                      color={"default"}
                      size="lg"
                      className="mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>{notification.title}</div>
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
                        {!notification.isRead && (
                          <Button
                            size="lg"
                            color="primary"
                            onClick={() => markAsRead(notification.id)}
                          >
                            既読としてマークする
                          </Button>
                        )}
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
