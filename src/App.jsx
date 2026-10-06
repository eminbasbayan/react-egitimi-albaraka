import { Fragment } from 'react';
import Products from './components/Products';
import Button from './components/UI/Button';

function App() {
  return (
    <Fragment>
      <Button type="primary" size="lg">Ürün Ekle</Button>
      <br />
      <br />
      <Button type="danger">
        <b>Ürünü Sil</b>
      </Button>
      <Products />
    </Fragment>
  );
}

export default App;
