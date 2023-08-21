import { createContext, useContext, useState } from 'react';
const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName}}>
      {children}
    </UserContext.Provider>
  );
}
