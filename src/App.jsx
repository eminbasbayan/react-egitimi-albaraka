import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { path: '/', Component: HomePage },
      { path: 'products', Component: ProductsPage },
      { path: 'cart', Component: CartPage },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [{ path: 'dashboard', Component: AdminDashboard }],
  },
]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
