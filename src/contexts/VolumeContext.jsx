import React, { createContext, useContext, useState } from 'react';
import { localStorageGet, localStorageSet } from 'utils/localStorage';

// VolumeContext oluşturulması
const VolumeContext = createContext();

export const useVolumeContext = () => useContext(VolumeContext);

export const VolumeContextProvider = ({ children }) => {
   const [mode, setMode] = useState(localStorageGet('volume') || 'on');

   const toggleVolumeMode = () => {
      const isOn = mode === 'on';
      setMode(isOn ? 'off' : 'on');
      localStorageSet('volume', isOn ? 'off' : 'on');
   };

   return (
      <VolumeContext.Provider value={{ mode, toggleVolumeMode }}>{children}</VolumeContext.Provider>
   );
};
