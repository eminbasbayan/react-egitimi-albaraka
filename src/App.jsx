import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([{ path: '/', Component: HomePage }]);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
