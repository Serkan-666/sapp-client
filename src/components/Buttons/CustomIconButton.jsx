import { IconButton } from '@mui/material';
import React from 'react';

export default function CustomIconButton({ onClick, children, ...props }) {
   return (
      <IconButton
         onClick={() => {
            try {
               onClick && onClick();
               console.info(`İcon butonuna tıklandı`);
            } catch (error) {
               console.info(`İcon butonuna tıklanırken hata çıktı : `, error);
            }
         }}
         {...props}
      >
         {children}
      </IconButton>
   );
}
