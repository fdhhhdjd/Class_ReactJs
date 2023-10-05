//* REACT
import Navbar from '@/Layouts/Navbar';
import Contact from '@/pages/contact';
import DetailHome from '@/pages/home/detail/Detail';
import NotFound from '@/pages/notfound/NotFound';
import { lazy } from 'react';

//* LIBRARY
import DetailPage from '@/pages/detail/Detail';
import Login from '@/pages/login/Login';
import { useRoutes } from 'react-router-dom';
import RoutesPageOutLet from './RoutesPage';
import UseAuthorization from './useAuthorization';
import ProtectedRoute from './useProtectedRoute';

export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('@/pages/home/Home')), 500);
  });
});
export const About = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('@/pages/about/About')), 500);
  });
});

const RoutesPage = () => {
  let elements = useRoutes([
    {
      path: '/',
      element: (
        <RoutesPageOutLet>
          <Navbar />
        </RoutesPageOutLet>
      ),
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute
              element={
                <RoutesPageOutLet>
                  <Home />
                </RoutesPageOutLet>
              }
            />
          ),
        },
        {
          path: 'about',
          element: <ProtectedRoute element={<About />} />,
          children: [{ path: 'detail', element: <DetailHome /> }],
        },
        {
          path: 'detail/:id',
          element: <ProtectedRoute element={<DetailPage />} />,
        },
        {
          path: 'contact',
          element: <ProtectedRoute element={<Contact />} />,
        },
        {
          path: 'login',
          element: <UseAuthorization element={<Login />} />,
        },
      ],
    },

    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return elements;
};

export default RoutesPage;
