import React, { createContext, useContext, useState } from 'react';
import { localStorageGet, localStorageRemove, localStorageSet } from 'utils/localStorage';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState(localStorageGet('user') || null);

   const handleLogout = () => {
      setUser(null);
      localStorageRemove('user');
   };

   const handleLogin = (data) => {
      setUser(data);
      localStorageSet('user', data);
   };
   return (
      <UserContext.Provider value={{ setUser, user, handleLogin, handleLogout }}>
         {children}
      </UserContext.Provider>
   );
};
