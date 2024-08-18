import LangText from 'components/LangText';
import ListUserItem from './ListUserItem';
import { Box, Divider } from '@mui/material';
import { useUserContext } from 'contexts/UserContext';

export default function ListUser({ users }) {
   const { user } = useUserContext();

   return (
      <Box
         sx={{
            mb: 5,
         }}
      >
         <Box
            sx={{
               py: 2,
            }}
         >
            <Box sx={{ ml: 2, fontWeight: 600 }}>
               <LangText id={'common.you'} />
               {` ${user.username}`}
            </Box>
         </Box>
         <Divider />
         <Box
            sx={{
               fontWeight: 600,
               fontSize: 18,
               textAlign: 'center',
               py: 2,
            }}
         >
            <LangText id={'user.users'} />
         </Box>
         {users
            .filter((e) => e.username !== user.username)
            .map((item, index) => (
               <ListUserItem key={item.id} item={item} index={index} />
            ))}
      </Box>
   );
}
