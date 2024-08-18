import AppNav from './AppNav';
import AppDrawer from './AppDrawer';
import { useState } from 'react';
function AppHeader() {
   const [open, setOpen] = useState(false);

   const toggleDrawer = (newOpen) => {
      setOpen(newOpen);
   };
   return (
      <>
         <AppNav setOpen={setOpen} open={open} toggleDrawer={toggleDrawer} />
         <AppDrawer setOpen={setOpen} open={open} toggleDrawer={toggleDrawer} />
      </>
   );
}

export default AppHeader;
