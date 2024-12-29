"use client";

import { supabase } from "@/supabase.client";
import {
  Input,
  Button,
  Select,
  SelectItem,
  Card,
  Avatar,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function UserProfilePage() {
  const [user, setUser] = useState();
  useEffect(() => {
    if (window?.localStorage?.getItem("user")) {
      setUser(JSON.parse(window?.localStorage?.getItem("user")?.toString()));
    }
  }, []);

  async function updateUser(userId: number, newValues: Record<string, any>) {
    try {
      const { data, error } = await supabase
        .from("User")
        .update(newValues)
        .eq("id", userId);

      if (error) {
        throw error;
      }
      console.log("User updated:", data);
      window?.localStorage?.setItem("user", JSON.stringify(newValues));
      return data;
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  }
  return (
    <div className="flex w-full p-5 gap-5">
      {/* Main Content */}
      <main className="flex-1">
        <Card className="p-6 shadow-md">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              {/* Profile Picture */}
              <Avatar
                src="https://via.placeholder.com/100"
                alt="Profile Picture"
                size="lg"
                className="rounded-full"
              />
              {/* User Info */}
              <div>
                <h2 className="text-xl font-bold mb-1">{user?.name}</h2>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>
            {/* Save Button */}
            <Button
              color="primary"
              variant="flat"
              className="ml-auto"
              onClick={(e) => updateUser(user?.id, user)}
              css={{ padding: "10px 20px", fontSize: "14px" }}
            >
              Save
            </Button>
          </div>

          {/* Form */}
          <form>
            {/* Name and Nickname */}
            <div className="flex gap-5 mb-6">
              <div className="flex-1">
                <Input
                  label="名前"
                  value={user?.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="名前を入力してください"
                  defaultValue="Alexa Rawles"
                  fullWidth
                />
              </div>
              <div className="flex-1">
                <Input
                  label="ニックネーム"
                  placeholder="ニックネームを入力してください"
                  defaultValue="Alexa"
                  fullWidth
                />
              </div>
            </div>

            {/* Gender and Country */}
            <div className="flex gap-5 mb-6">
              <div className="flex-1">
                <Select
                  label="性別"
                  defaultValue="女性"
                  placeholder="性別を選択してください"
                  fullWidth
                >
                  <SelectItem value="女性">女性</SelectItem>
                  <SelectItem value="男性">男性</SelectItem>
                </Select>
              </div>
              <div className="flex-1">
                <Select
                  label="国"
                  defaultValue="アメリカ"
                  placeholder="国を選択してください"
                  fullWidth
                >
                  <SelectItem value="アメリカ">アメリカ</SelectItem>
                  <SelectItem value="日本">日本</SelectItem>
                </Select>
              </div>
            </div>

            {/* Language and Timezone */}
            <div className="flex gap-5 mb-6">
              <div className="flex-1">
                <Select
                  label="言語"
                  defaultValue="日本語"
                  placeholder="言語を選択してください"
                  fullWidth
                >
                  <SelectItem value="日本語">日本語</SelectItem>
                  <SelectItem value="英語">英語</SelectItem>
                </Select>
              </div>
              <div className="flex-1">
                <Select
                  label="時間帯"
                  defaultValue="UTC +9"
                  placeholder="時間帯を選択してください"
                  fullWidth
                >
                  <SelectItem value="UTC +9">UTC +9</SelectItem>
                  <SelectItem value="UTC +0">UTC +0</SelectItem>
                </Select>
              </div>
            </div>

            {/* Email Section */}
            <div>
              <p className="mb-2 text-sm font-medium">私のメールアドレス</p>
              <div className="flex items-center gap-2 mb-4">
                {/* Small Avatar */}
                <Avatar
                  src="https://via.placeholder.com/40"
                  alt="Email Icon"
                  size="sm"
                  className="rounded-full"
                />
                <div>
                  <p className="text-gray-500">{user?.name}</p>
                  <p className="text-xs text-gray-400">1ヶ月前</p>
                </div>
              </div>
              <Button color="primary">メールアドレスを追加</Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}
