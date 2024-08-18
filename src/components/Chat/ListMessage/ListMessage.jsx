import { Box } from '@mui/material';
import ListMessageItem from './ListMessageItem';
import { useEffect, useRef } from 'react';

export default function ListMessage({ messages, username }) {
   const messagesEndRef = useRef(null);
   const isFirstRender = useRef(true);

   const scrollToBottom = (behavior = 'auto') => {
      messagesEndRef.current?.scrollIntoView({ behavior });
   };

   useEffect(() => {
      try {
         if (isFirstRender.current) {
            scrollToBottom();
            isFirstRender.current = false;
         } else {
            scrollToBottom('smooth');
         }
      } catch (error) {
         console.log(error);
      }
   }, [messages]);

   return (
      <Box
         sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
         }}
      >
         <Box
            sx={{
               flex: 1,
               px: 4,
               py: 3,
               overflowY: 'auto',
            }}
         >
            {messages.map((item) => (
               <ListMessageItem key={item.id} item={item} username={username} />
            ))}
            <div ref={messagesEndRef} />
         </Box>
      </Box>
   );
}
