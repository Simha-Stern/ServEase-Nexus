import React, { createContext, useState } from "react";
import { servant } from "../interfaces/customerInterface";

export interface UserContextType {
  User: servant | undefined;
  setUser: React.Dispatch<React.SetStateAction<servant | undefined>>;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({
  User: undefined,
  setUser: () => {},
});

const UserContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [User, setUser] = useState<servant>();
  const contextValue: UserContextType = {
    User,
    setUser,
  };
  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
