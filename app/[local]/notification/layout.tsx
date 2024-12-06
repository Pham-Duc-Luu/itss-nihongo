import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "./Provider";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default async function RootLayout({
                                             children,
                                             params: { locale },
                                         }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages(locale);

    return (
        <html lang={locale}>
        <body className={`antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
                <div className="flex h-screen">
                    <Sidebar />
                    <div className="flex flex-col flex-grow">{children}</div>
                </div>
            </Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
