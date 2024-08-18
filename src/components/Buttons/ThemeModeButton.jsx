import { IconButton } from '@mui/material';
import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from 'contexts/ThemeContext';
export default function ThemeModeButton() {
   const { toggleColorMode, mode } = useThemeContext();

   return (
      <IconButton onClick={toggleColorMode}>
         {mode === 'light' ? (
            <DarkModeIcon sx={{ color: 'primary.main' }} />
         ) : (
            <LightModeIcon sx={{ color: 'yellow' }} />
         )}
      </IconButton>
   );
}
