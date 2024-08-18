import React from 'react';
import LogoDark from '../assets/images/sapp_dark.png';
import LogoLight from '../assets/images/sapp_light.png';
import { useThemeContext } from 'contexts/ThemeContext';

export default function AppLogo({ width = 120 }) {
   const { mode } = useThemeContext();
   if (mode === 'dark') {
      return <img src={LogoLight} width={120} />;
   }
   return <img src={LogoDark} width={120} />;
}
