import React, { createContext, useContext, useState, useMemo } from 'react';
import { localStorageGet, localStorageSet } from 'utils/localStorage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// ThemeContext oluşturulması
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
   const [mode, setMode] = useState(localStorageGet('theme') || 'light');

   const toggleColorMode = () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      localStorageSet('theme', mode === 'light' ? 'dark' : 'light');
   };

   const theme = useMemo(
      () =>
         createTheme({
            typography: {
               button: {
                  textTransform: 'none',
               },
            },
            palette: {
               mode,
               custom: {
                  main: '#ff5722',
                  background: '#333333',
               },
               background: {
                  paper: mode === 'light' ? 'rgb(244, 247, 254)' : '#181818',
               },
            },
         }),
      [mode],
   );

   return (
      <ThemeContext.Provider value={{ mode, toggleColorMode }}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
         </ThemeProvider>
      </ThemeContext.Provider>
   );
};
