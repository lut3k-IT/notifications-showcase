import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppOverlay from '../components/ui/AppOverlay';
import Home from '../features/Home';
import NotFoundRoute from '../features/NotFoundRoute/intex';
import Notification from '../features/Notification';
import { RoutePath } from './enums';

export const router = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: <AppOverlay />,
    children: [
      {
        path: RoutePath.HOME,
        element: <Home />,
      },
      {
        path: RoutePath.NOTIFICATION + '/:id',
        element: <Notification />,
      },
      {
        path: '*',
        element: <NotFoundRoute />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
