import VolumeModeButton from 'components/Buttons/VolumeModeButton';
import ThemeModeButton from 'components/Buttons/ThemeModeButton';
import CustomButton from 'components/Buttons/CustomButton';
import ListItemButton from '@mui/material/ListItemButton';
import LanguageSelect from 'components/Inputs/LangSelect';
import { useUserContext } from 'contexts/UserContext';
import ListItemText from '@mui/material/ListItemText';
import navLinks from 'core/AppRoutes/navLinks';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import LangText from 'components/LangText';
import Drawer from '@mui/material/Drawer';
import AppLogo from 'components/AppLogo';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

export default function TemporaryDrawer({ setOpen, open, toggleDrawer }) {
   const { handleLogout } = useUserContext();

   const DrawerList = (
      <Box
         sx={{ width: 300, height: '100%', display: 'flex', flexDirection: 'column' }}
         role="presentation"
         onClick={() => toggleDrawer(false)}
      >
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               my: 2,
            }}
         >
            <AppLogo />
         </Box>
         <Divider />

         <List>
            {navLinks.map((item, index) => (
               <ListItem key={index} disablePadding>
                  <ListItemButton LinkComponent={Link} to={item.to}>
                     <ListItemText primary={<LangText id={item.id} />} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
         <Divider
            sx={{
               mt: 'auto',
            }}
         />
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               gap: 1,
               px: 1,
               py: 2,
            }}
         >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <LanguageSelect />
               <VolumeModeButton />
               <ThemeModeButton />
            </Box>
            <Box>
               <CustomButton
                  fullWidth
                  text={<LangText id={'common.logout'} />}
                  onClick={handleLogout}
                  color="error"
               />
            </Box>
         </Box>
      </Box>
   );

   return (
      <div>
         <Drawer open={open} onClose={() => toggleDrawer()}>
            {DrawerList}
         </Drawer>
      </div>
   );
}
