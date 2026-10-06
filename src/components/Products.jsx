import { productsData } from '../data/productsData';
import ProductItem from './ProductItem';
import './Products.css';

function Products() {
  function titleFunction(titleState) {
    console.log(titleState);
  }

  return (
    <div className="products">
      <h2>Products Component</h2>

      <div className="product-items">
        {productsData.map((product) => {
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
