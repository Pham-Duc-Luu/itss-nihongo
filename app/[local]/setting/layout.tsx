
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import Navbar1 from "@/components/navbar1";
import Sidebar1 from "@/components/sidebar1";
import { Divider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Thanh Navbar bên ngoài */}
      <Navbar />

      <div className="flex flex-1">
        {/* Thanh Sidebar bên ngoài */}
        <Sidebar />

        {/* Khu vực chính chứa Sidebar nhỏ và nội dung */}
        
          <div className="flex flex-1">
            {/* Thanh Sidebar nhỏ bên trong */}
            <Sidebar1 />
            
            <div className="flex flex-1 flex-col">
            {/* Thanh Navbar nhỏ bên trong */}
            <Navbar1 />

            {/* Nội dung chính */}
            <main className="flex-1 p-6 bg-white shadow-lg rounded-lg overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
