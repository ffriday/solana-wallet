import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  key: string;
  balance: number;
  setKey: (key: string) => void;
  setBalance: (balance: number) => void;
};

export const KeyContext = createContext<ContextProps>({
  key: window.localStorage.getItem("key") ?? "",
  balance: 0,
  setKey: () => {},
  setBalance: () => {},
});

export const KeyProvider = ({ children }: Props) => {
  const [key, setKey] = useState(window.localStorage.getItem("key") ?? "");
  const [balance, setBalance] = useState(0)

  return (
    <KeyContext.Provider value={{ key, setKey, balance, setBalance }}>
      {children}
    </KeyContext.Provider>
  );
};
