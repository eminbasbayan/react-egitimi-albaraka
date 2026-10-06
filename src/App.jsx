import { Fragment } from 'react';
import Products from './components/Products';
import Button from './components/UI/Button';

function App() {
  return (
    <Fragment>
      <Button>Ürün Ekle</Button>
      <Button>
        <b>Ürünü Sil</b>
      </Button>
      <Products />
    </Fragment>
  );
}

export default App;
