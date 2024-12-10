import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import { Divider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        {children}
      </div>
    </div>
  );
}
