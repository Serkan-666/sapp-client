import { Box } from '@mui/material';
import React from 'react';

export default function Container({ children }) {
   return (
      <Box
         sx={{
            maxWidth: 1200,
            mx: 'auto',
            px: { xs: 1, sm: 2, md: 3, lg: 4 },
         }}
      >
         {children}
      </Box>
   );
}
