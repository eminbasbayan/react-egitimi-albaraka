import { useState } from 'react';
import { productsData } from '../data/productsData';
import ProductItem from './ProductItem';
import './Products.css';

function Products() {
  const [products, setProducts] = useState(productsData);

  function titleFunction(titleState) {
    const titleStateChange = products.map((product) => {
      return {
        ...product,
        title: titleState,
      };
    });

    setProducts(titleStateChange);
  }

  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="product-items">
        {products.map((product) => {
          return (
            <ProductItem
              titleFunction={titleFunction}
              key={product.id}
              imageUrl={product.imageURL}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
