import React from 'react';
import ProductItem from './components/ProductItem';

function App() {
  const image =
    'https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_640.jpg';
  const title = 'Çanta';
  const price = 1000;

  return (
    <React.Fragment>
      <ProductItem imageUrl={image} title={title} price={price} />
    </React.Fragment>
  );
}

export default App;
