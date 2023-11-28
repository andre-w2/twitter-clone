"use client";

import { FaFeather } from "react-icons/fa";

import React from "react";
import useLoginModal from "@/app/hooks/useLoginModal";

const SidebarTweetButton = () => {
  const loginModal = useLoginModal();

  const onClick = React.useCallback(() => {
    loginModal.onOpen()
  }, [loginModal])

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden rounded-full px-4 py-2 lg:block bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
