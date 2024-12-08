"use client";

import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    Badge,
    Avatar,
    Spacer,
    Grid,
    Text,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";

type Notification = {
    id: number;
    type: "mention" | "like" | "comment";
    content: string;
    time: string;
    isRead: boolean;
    avatarUrl: string;
};

const NotificationsPage: React.FC = () => {
    const t = useTranslations("Notifications");

    // State cho thông báo
    const [filter, setFilter] = useState<"all" | "unread" | "mentions">("all");
    const [notifications, setNotifications] = useState<Notification[]>([]);

    // Dữ liệu mẫu
    const mockNotifications: Notification[] = [
        {
            id: 1,
            type: "mention",
            content: "Bạn đã được đề cập trong một bài viết.",
            time: "2 phút trước",
            isRead: false,
            avatarUrl: "/avatars/user1.png",
        },
        {
            id: 2,
            type: "like",
            content: "Bài viết của bạn đã được thích.",
            time: "1 giờ trước",
            isRead: true,
            avatarUrl: "/avatars/user2.png",
        },
        {
            id: 3,
            type: "comment",
            content: "Có một bình luận mới trên bài viết của bạn.",
            time: "3 giờ trước",
            isRead: false,
            avatarUrl: "/avatars/user3.png",
        },
        // Thêm nhiều thông báo hơn...
    ];

    useEffect(() => {
        // Thực hiện fetch dữ liệu thực tế hoặc sử dụng dữ liệu mẫu
        // Ở đây sử dụng dữ liệu mẫu
        setNotifications(mockNotifications);
    }, []);

    const handleFilterChange = (newFilter: "all" | "unread" | "mentions") => {
        setFilter(newFilter);
    };

    const handleMarkAsRead = (id: number) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Thông Báo</h1>
                </div>

                {/* Bộ Lọc */}
                <div className="flex justify-start mb-6 space-x-4">
                    <Button
                        auto
                        flat={filter !== "all"}
                        color={filter === "all" ? "primary" : "default"}
                        onClick={() => handleFilterChange("all")}
                    >
                        Tất cả
                    </Button>
                    <Button
                        auto
                        flat={filter !== "unread"}
                        color={filter === "unread" ? "primary" : "default"}
                        onClick={() => handleFilterChange("unread")}
                    >
                        Chưa đọc
                    </Button>
                    <Button
                        auto
                        flat={filter !== "mentions"}
                        color={filter === "mentions" ? "primary" : "default"}
                        onClick={() => handleFilterChange("mentions")}
                    >
                        Đề cập
                    </Button>
                </div>

                {/* Danh sách thông báo */}
                <div className="space-y-4">
                    {notifications
                        .filter((notification) => {
                            if (filter === "all") return true;
                            if (filter === "unread") return !notification.isRead;
                            if (filter === "mentions") return notification.type === "mention";
                            return true;
                        })
                        .map((notification) => (
                            <Card
                                key={notification.id}
                                isHoverable
                                variant={notification.isRead ? "flat" : "bordered"}
                                className={`flex items-center p-4 ${
                                    notification.isRead ? "bg-white" : "bg-blue-50"
                                }`}
                                onClick={() => handleMarkAsRead(notification.id)}
                            >
                                <Avatar
                                    src={notification.avatarUrl}
                                    size="lg"
                                    className="flex-shrink-0"
                                />
                                <div className="ml-4 flex-1">
                                    <Text b className="text-gray-800">
                                        {notification.content}
                                    </Text>
                                    <Text small className="text-gray-500">
                                        {notification.time}
                                    </Text>
                                </div>
                                {!notification.isRead && (
                                    <Badge
                                        color="primary"
                                        size="sm"
                                        variant="dot"
                                        className="ml-2"
                                    >
                                        Mới
                                    </Badge>
                                )}
                            </Card>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationsPage;
