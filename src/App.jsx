import React from 'react';
import ProductItem from './components/ProductItem';
import { productsData } from './data/productsData';

function App() {
  return (
    <React.Fragment>
      {productsData.map((product) => {
        return (
          <ProductItem
            key={product.id}
            imageUrl={product.imageURL}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </React.Fragment>
  );
}

export default App;
