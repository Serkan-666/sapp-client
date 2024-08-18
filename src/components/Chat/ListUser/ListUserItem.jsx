import { Box, Divider } from '@mui/material';
import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function ListUserItem({ item, index }) {
   return (
      <Box>
         {index === 0 && <Divider />}

         <Box
            sx={{
               py: 1,
               px: 2,
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
            }}
         >
            <Box>{`${item.username}`}</Box>
            {item.isConnected === true && (
               <FiberManualRecordIcon fontSize="small" color="success" />
            )}
         </Box>
         <Divider />
      </Box>
   );
}
