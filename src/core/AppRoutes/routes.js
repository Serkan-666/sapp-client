import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import AppPrivateLayout from 'core/AppLayout/AppPrivateLayout';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';

const routes = [
   {
      path: '/',
      element: <AppPrivateLayout />,
      children: [
         {
            path: '/',
            element: <HomePage />,
         },
      ],
   },
   {
      path: '/sign-in',
      element: <SignInPage />,
   },
   {
      path: '/sign-up',
      element: <SignUpPage />,
   },
   {
      path: '*',
      element: <NotFoundPage />,
   },
];
export { routes };
