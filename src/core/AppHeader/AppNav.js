import VolumeModeButton from 'components/Buttons/VolumeModeButton';
import CustomIconButton from 'components/Buttons/CustomIconButton';
import ThemeModeButton from 'components/Buttons/ThemeModeButton';
import CustomButton from 'components/Buttons/CustomButton';
import LanguageSelect from 'components/Inputs/LangSelect';
import CustomLink from 'components/Buttons/CustomLink';
import { useUserContext } from 'contexts/UserContext';
import navLinks from 'core/AppRoutes/navLinks';
import { Box, Divider } from '@mui/material';
import LangText from 'components/LangText';
import { Menu } from '@mui/icons-material';
import AppLogo from 'components/AppLogo';

function AppNav({ toggleDrawer }) {
   const { handleLogout } = useUserContext();
   return (
      <Box sx={{ backgroundColor: 'background.default' }}>
         <Box
            sx={{
               py: 1,
               px: 2,
            }}
         >
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <AppLogo />
               <Box
                  sx={{
                     display: { xs: 'none', sm: 'block' },
                     mt: 2,
                     ml: 2,
                  }}
               >
                  {navLinks.map((item, index) => (
                     <CustomLink key={index} text={<LangText id={item.id} />} to={item.to} />
                  ))}
               </Box>

               <Box
                  sx={{
                     display: { xs: 'none', sm: 'flex' },
                     alignItems: 'center',
                     gap: 1,
                     mt: { xs: 1, sm: 2 },
                     ml: 'auto',
                  }}
               >
                  <VolumeModeButton />
                  <ThemeModeButton />
                  <LanguageSelect />
                  <Box
                     sx={{
                        ml: 1,
                     }}
                  >
                     <CustomButton
                        text={<LangText id={'common.logout'} />}
                        onClick={handleLogout}
                        color="error"
                     />
                  </Box>
               </Box>

               <CustomIconButton
                  sx={{ display: { sm: 'none' }, ml: 'auto' }}
                  onClick={() => toggleDrawer(true)}
               >
                  <Menu />
               </CustomIconButton>
            </Box>
         </Box>
         <Divider />
      </Box>
   );
}

export default AppNav;
