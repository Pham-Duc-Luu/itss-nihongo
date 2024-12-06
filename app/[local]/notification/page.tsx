"use client";

import { useTranslations } from "next-intl";
import supabase from "@/supabase.client";
import { useEffect, useState } from "react";
import { Input, Avatar } from "@nextui-org/react";

type Notification = {
    id: number;
    title: string;
    time: string;
    imgSrc: string;
};

export default function NotificationsPage() {
    const t = useTranslations("notifications");
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchNotifications();
    }, []);

    async function fetchNotifications() {
        setLoading(true);
        try {
            const { data, error } = await supabase.from("Notifications").select();

            if (error) {
                console.error("Error fetching notifications:", error);
            } else if (data) {
                setNotifications(data as Notification[]);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="p-4 flex items-center justify-between shadow-md">
                <div className="w-3/4">
                    <Input placeholder={t("search.placeholder")} fullWidth />
                </div>
                <div className="ml-4">
                    <Avatar src="https://via.placeholder.com/30" size="md" />
                </div>
            </div>

            {/* Notifications List */}
            <div className="flex-grow overflow-y-auto p-4 bg-white">
                {loading ? (
                    <p>{t("loading")}</p>
                ) : notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div key={notification.id} className="flex items-center py-4 border-b">
                            <Avatar src={notification.imgSrc} size="lg" />
                            <div className="ml-4">
                                <p className="font-bold">{notification.title}</p>
                                <p className="text-sm text-gray-500">{notification.time}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>{t("no_notifications")}</p>
                )}
            </div>
        </div>
    );
}
