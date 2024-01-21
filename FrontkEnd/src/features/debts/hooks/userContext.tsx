import React, { createContext, useState } from "react";
import { userIF } from "../interfaces/debtInterface";

export interface UserContextType {
  User: userIF | null;
  setUser: React.Dispatch<React.SetStateAction<userIF| null>> ;
}

export interface ContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>({
    User: null,
    setUser: () => {},
  });

const UserContextProvider: React.FC<ContextProviderProps> = (props) => {
    const [User, setUser] = useState<userIF | null>(null);
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
