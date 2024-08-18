import { LanguageContextProvider } from 'contexts/LanguageContext';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { UserContextProvider } from 'contexts/UserContext';
import { VolumeContextProvider } from 'contexts/VolumeContext';
import AppRoutes from 'core/AppRoutes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
   return (
      <UserContextProvider>
         <LanguageContextProvider>
            <ThemeContextProvider>
               <VolumeContextProvider>
                  <AppRoutes />
                  <ToastContainer />
               </VolumeContextProvider>
            </ThemeContextProvider>
         </LanguageContextProvider>
      </UserContextProvider>
   );
}

export default App;
