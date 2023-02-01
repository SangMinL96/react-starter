import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomeIndex = React.lazy(() => import('components/home/HomeIndex'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeIndex />,
  },
]);

export default router;
export { router };
