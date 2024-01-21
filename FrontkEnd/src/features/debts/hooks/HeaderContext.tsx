import React, { createContext, useState } from "react";

interface BooleanContextType {
  MoreIcons: boolean;
  setMoreIcons: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const HeaderContext = createContext<BooleanContextType | null>(null);

const HeaderContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [MoreIcons, setMoreIcons] = useState<boolean>(true);
  return (
    <HeaderContext.Provider value={{ MoreIcons, setMoreIcons }}>
      {props.children}
    </HeaderContext.Provider>
  );
};
export default HeaderContextProvider;
