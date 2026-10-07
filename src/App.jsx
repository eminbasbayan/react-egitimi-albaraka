import { ToastContainer } from 'react-toastify';
import { Fragment } from 'react';
import Products from './components/Products';

function App() {
  return (
    <Fragment>
      {/* <UserList /> */}
      <Products />

      <ToastContainer />
    </Fragment>
  );
}

export default App;
