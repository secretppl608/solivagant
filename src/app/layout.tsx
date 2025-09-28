import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/scss/globals.scss";
import Userbox from "./Component/user-info";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "怪谈研究所",
  description: "一个讨论怪谈圈子的小博客，自由发表你的世界观和诡谲想象力",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Userbox src="/avatar.jpg" level={6} user_name="我是组件！" />
        </header>
        {children}
      </body>
    </html>
  );
}
