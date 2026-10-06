import { Fragment } from 'react';
import Products from './components/Products';
import AddNewProduct from './components/AddNewProduct';

function App() {
  return (
    <Fragment>
        <AddNewProduct />
      <Products />
    </Fragment>
  );
}

export default App;
