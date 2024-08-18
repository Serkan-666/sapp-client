import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';

export default function AppLayout() {
   const { user } = useUserContext();
   if (!user) {
      return <Navigate to="/sign-in" />;
   }

   return <Outlet />;
}
