import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages';
import Loginpage from './pages/auth/login';
import Signup from './pages/auth/signup';
import Account from './components/Account';
import { AuthProvider } from './AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/auth',
        element: <Loginpage />,
      },
      {
        path: '/auth/signup',
        element: <Signup />,
      },
      {
        path: '/components/Account/index',
        element: <Account />,
      },
    ],
  },
]);

export const RouterComponent: React.FC = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default router;
