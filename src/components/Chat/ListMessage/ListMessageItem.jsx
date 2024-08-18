import { Box } from '@mui/material';
import React from 'react';
import formatTimestamp from 'utils/formatTimestamp';

export default function ListMessageItem({ item, index, username }) {
   const isMe = item.username === username;
   const time = formatTimestamp(item.createdAt);
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: isMe ? 'flex-end' : 'flex-start',
            mb: 2,
         }}
      >
         <Box
            sx={{
               width: { xs: '90%', md: '60%' },
               px: 3,
               py: 2,
               borderRadius: '12px',
               borderBottomLeftRadius: isMe ? '12px' : '4px',
               borderBottomRightRadius: isMe ? '4px' : '12px',
               backgroundColor: 'background.default',
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
         >
            <Box
               sx={{
                  flex: 1,
               }}
            >
               <Box sx={{ fontWeight: 'bold', lineBreak: 'break' }}>{item.username}</Box>
               <Box>{item.content}</Box>
            </Box>
            <Box sx={{ fontSize: 12, color: 'text.secondary' }}>{time}</Box>
         </Box>
      </Box>
   );
}
