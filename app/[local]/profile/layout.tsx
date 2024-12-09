// app/layout.tsx
export const metadata = {
  title: "User Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
