import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppOverlay from '../components/layouts/AppOverlay';
import AllNotificationsPage from '../pages/AllNotificationsPage';
import CreatorPage from '../pages/CreatorPage';
import HomePage from '../pages/HomePage';
import NotFoundRoute from '../pages/NotFoundRoute/index';
import NotificationPage from '../pages/NotificationPage';
import { RoutePath } from './enums';

export const router = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: <AppOverlay />,
    children: [
      {
        path: RoutePath.HOME,
        element: <HomePage />
      },
      {
        path: RoutePath.CREATOR,
        element: <CreatorPage />
      },
      {
        path: RoutePath.ALL_NOTIFICATIONS,
        element: <AllNotificationsPage />
      },
      {
        path: RoutePath.NOTIFICATION + '/:id',
        element: <NotificationPage />
      },
      {
        path: '*',
        element: <NotFoundRoute />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
