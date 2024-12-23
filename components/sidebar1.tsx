import React from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { BsFillPersonDashFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { SlPicture } from "react-icons/sl";

export default function Sidebar1() {
  return (
    <aside className="w-80 bg-white text-gray-800 h-full flex flex-col">
      {/* Tăng w-64 thành w-80 để Sidebar rộng hơn */}
      <nav className="flex-1 p-4 space-y-4">
        <ul>
          <li>
            <a
              href="#"
              className="block p-2 rounded hover:bg-gray-100"
              style={{
                color: "red", // Màu đỏ cho chữ インストール
                fontSize: "1.5rem", // Tăng cỡ chữ lên gấp rưỡi
                lineHeight: "1.5", // Giãn dòng gấp rưỡi
              }}
            >
              インストール
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-gray-100"
              style={{
                fontSize: "1.5rem", // Tăng cỡ chữ lên gấp rưỡi
                lineHeight: "1.5", // Giãn dòng gấp rưỡi
              }}
            >
              <BiSolidBellRing className="mr-4" /> ご連絡
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-gray-100"
              style={{
                fontSize: "1.5rem", // Tăng cỡ chữ lên gấp rưỡi
                lineHeight: "1.5", // Giãn dòng gấp rưỡi
              }}
            >
              <BsFillPersonDashFill className="mr-4" /> セキュリティ
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-gray-100"
              style={{
                fontSize: "1.5rem", // Tăng cỡ chữ lên gấp rưỡi
                lineHeight: "1.5", // Giãn dòng gấp rưỡi
              }}
            >
              <TfiWorld className="mr-4" /> 語版
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 rounded hover:bg-gray-100"
              style={{
                fontSize: "1.5rem", // Tăng cỡ chữ lên gấp rưỡi
                lineHeight: "1.5", // Giãn dòng gấp rưỡi
              }}
            >
              <SlPicture className="mr-4" /> インターフェイス
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
