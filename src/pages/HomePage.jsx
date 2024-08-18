import ListMessage from 'components/Chat/ListMessage/ListMessage';
import React, { useEffect, useRef, useState } from 'react';
import ListUser from 'components/Chat/ListUser/ListUser';
import SendMessage from 'components/Chat/SendMessage';
import { useUserContext } from 'contexts/UserContext';
import useChatWebSocket from 'hooks/useChatWebSocket';
import useChatDataFetch from 'hooks/useChatDataFetch';
import AppHeader from 'core/AppHeader/AppHeader';
import { Box, Grid } from '@mui/material';

export default function HomePage() {
   const [users, setUsers] = useState([]);
   const [messages, setMessages] = useState([]);
   const { user } = useUserContext();
   const ref = useRef();
   const [mainHeight, setMainHeight] = useState('100vh');
   useEffect(() => {
      try {
         if (ref.current) {
            setMainHeight(`calc(100vh - ${ref.current.offsetHeight}px)`);
         }
      } catch (error) {
         console.log(error);
      }
   }, [ref]);

   useChatWebSocket(user, setUsers, setMessages);
   useChatDataFetch(setUsers, setMessages);

   return (
      <Box
         sx={{
            height: '100vh',
            maxHeight: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.paper',
         }}
      >
         <Box ref={ref}>
            <AppHeader />
         </Box>

         <Grid
            container
            sx={{
               height: mainHeight,
               backgroundColor: 'background.default',
            }}
         >
            <Grid
               item
               xs={3}
               sx={{
                  borderWidth: 0,
                  borderRightWidth: 1,
                  borderRightColor: 'divider',
                  borderStyle: 'solid',
                  overflow: 'scroll',
                  height: mainHeight,
                  display: { xs: 'none', md: 'grid' },
               }}
            >
               <ListUser users={users} />
            </Grid>
            <Grid item xs={12} md={9}>
               <Box
                  sx={{
                     height: mainHeight,
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'end',
                     backgroundColor: 'background.paper',
                  }}
               >
                  {messages.length > 0 && (
                     <ListMessage messages={messages} username={user.username} />
                  )}
                  <SendMessage username={user.username} />
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
