import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import FollowBar from "./components/layout/FollowBar";
import Sidebar from "./components/layout/Sidebar";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <LoginModal />
        <RegisterModal />
        <div className="h-screen bg-black">
          <div className="container h-full mx-auto xl:px-32 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
              <Sidebar />
              <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
                {children}
              </div>
              <FollowBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
