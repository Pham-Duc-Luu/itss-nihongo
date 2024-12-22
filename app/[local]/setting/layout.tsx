import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-md p-4">
        <h1 className="text-xl font-bold">設定画面</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex flex-col">
          <nav className="flex-1">
            <ul className="p-4 space-y-4">
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  インストール
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  ご連絡
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  セキュリティ
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  言語
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded hover:bg-gray-700">
                  インターフェイス
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Children */}
        <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
