import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/products', Component: ProductsPage },
  { path: '/cart', Component: CartPage },
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
