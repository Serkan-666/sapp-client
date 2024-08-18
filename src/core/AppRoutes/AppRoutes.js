import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);

function AppRoutes() {
   return <RouterProvider router={router} />;
}

export default AppRoutes;
