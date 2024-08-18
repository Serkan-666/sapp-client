import { Button } from '@mui/material';
import React from 'react';

export default function CustomButton({
   text = 'Buton',
   size = 'medium',
   variant = 'outlined',
   onClick,
   sx,
   ...props
}) {
   return (
      <Button
         onClick={() => {
            try {
               onClick && onClick();
               console.info(`${text} butonuna tıklandı`);
            } catch (error) {
               console.info(`${text} butonuna tıklanırken hata çıktı : `, error);
            }
         }}
         variant={variant}
         size={size}
         sx={{
            textWrap: 'nowrap',
            ...sx,
         }}
         {...props}
      >
         {text}
      </Button>
   );
}
