"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = React.useState("");
  const [passowrd, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onToggle = React.useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const onSubmit = React.useCallback(() => {
    try {
      setIsLoading(true);

      // ADD AUTH

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Пароль"
        onChange={(e) => setPassword(e.target.value)}
        value={passowrd}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        У вас нет аккаунта?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline ml-2"
        >
          Создать
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Логин"
      actionLabel="Войти"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
