import "./globals.css";
// import { Providers } from "./Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <>{children}</>
      </body>
    </html>
  );
}
