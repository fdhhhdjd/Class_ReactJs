import Auth from '../Components/Auth';
import UseRoute from '../Components/UseRoute';
import { About, AddEdit, Forget, Home, NotFound, Search, View } from '../import';

export default [
  {
    path: '/',
    element: (
      <UseRoute>
        <Home />
      </UseRoute>
    ),
  },
  {
    path: '/about',
    element: (
      <UseRoute>
        <About />
      </UseRoute>
    ),
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/forget',
    element: <Forget />,
  },
  {
    path: '/addContact',
    element: <AddEdit />,
  },
  {
    path: '/update/:id',
    element: <AddEdit />,
  },
  {
    path: '/view/:id',
    element: <View />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
