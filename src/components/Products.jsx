import { useState } from 'react';
import { productsData } from '../data/productsData';
import ProductItem from './ProductItem';
import AddNewProduct from './AddNewProduct';
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

  function handleNewProduct(newProduct) {
    setProducts([newProduct, ...products]);
  }

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddNewProduct handleNewProduct={handleNewProduct} />

      <div className="product-items">
        {products.map((product) => {
          return (
            <ProductItem
              titleFunction={titleFunction}
              key={product.id}
              imageURL={product.imageURL}
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
