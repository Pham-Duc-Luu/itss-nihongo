import React from "react";
import {
  Input,
  Button,
  Select,
  SelectItem,
  Card,
  Avatar,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
const UserProfileSearch = ({ profile }) => {
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
                <h2 className="text-xl font-bold mb-1">{profile?.name}</h2>
                <p className="text-gray-500">{profile?.email}</p>
              </div>
            </div>
            {/* Save Button */}
            <Button
              color="primary"
              variant="flat"
              className="ml-auto"
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
                  disabled
                  value={profile.name}
                  placeholder="名前を入力してください"
                  defaultValue="Alexa Rawles"
                  fullWidth
                />
              </div>
              <div className="flex-1">
                <Input
                  label="ニックネーム"
                  value={profile.name}
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  <p className="text-gray-500">{profile?.name}</p>
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
};

export default UserProfileSearch;
